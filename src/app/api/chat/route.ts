import { decryptApiKey } from "@/lib/keys";
import { idToModelMap, ModelConfig } from "@/types/models";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { getSystemPrompt } from "@/lib/constants/prompts";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const secretKey = process.env.API_KEY_SECRET as string;

export const dynamic = "force-dynamic";
export const maxDuration = 300;

function getKey() {
  return crypto.createHash("sha256").update(secretKey).digest();
}

// at least smth
function isKey(s: string): boolean {
  if (s.length < 5) return false;
  return true;
}

export async function POST(req: Request) {
  const { messages, model, openaiKey, openRouterKey, systemPromptId } = await req.json();

  let m: ModelConfig;
  try {
    m = idToModelMap[model as string];
  } catch (e) {
    console.error(e);
    return new NextResponse("Sorry, model not supported right now", { status: 400 });
  }

  if (!openaiKey && !openRouterKey) {
    return new NextResponse(
      "Sorry, but you need to provide your own keys for now, go to /settings",
      { status: 400 }
    );
  }

  const systemPrompt = getSystemPrompt(systemPromptId || "default");
  const messagesWithSystem = [{ role: "system", content: systemPrompt.content }, ...messages];

  if (m.openaiProvider && openaiKey) {
    const key = decryptApiKey(openaiKey, getKey());

    if (!isKey(key)) {
      return new NextResponse(
        "Sorry, but you need to provide your own keys for now, go to /settings. (Your OpenAI key doesn't look right)",
        { status: 400 }
      );
    }

    const openai = createOpenAI({
      apiKey: key,
    });

    const result = streamText({
      model: openai(m.openaiProvider, {}),
      messages: messagesWithSystem,
      abortSignal: req.signal,
    });

    return result.toDataStreamResponse();
  } else if (m.openRouterProvider) {
    console.log(openRouterKey);
    if (!openRouterKey) {
      return new NextResponse(
        "Sorry, but you need to provide your own keys for now, go to /settings.",
        { status: 400 }
      );
    }
    const key = decryptApiKey(openRouterKey, getKey());

    if (!isKey(key)) {
      return new NextResponse(
        "Sorry, but you need to provide your own keys for now, go to /settings. (Your OpenRouter key doesn't look right)",
        { status: 400 }
      );
    }

    const openRouter = createOpenRouter({
      apiKey: key,
    });

    const result = streamText({
      model: openRouter(m.openRouterProvider, {}),
      messages: messagesWithSystem,
      abortSignal: req.signal,
    });

    return result.toDataStreamResponse();
  }
  return new NextResponse("Sorry, no provider found for this model", { status: 500 });
}
