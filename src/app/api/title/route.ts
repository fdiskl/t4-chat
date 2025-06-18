import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { decryptApiKey } from "@/lib/keys";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const secretKey = process.env.API_KEY_SECRET as string;

function getKey() {
  return crypto.createHash("sha256").update(secretKey).digest();
}

const system =
  "You are a helpful assistant specialized in creating concise and relevant chat titles. You need to output short title in one sentence. Don't use any markdown formatting or any other kind of formatting" as const;

// at least smth
function isKey(s: string): boolean {
  if (s.length < 4) return false;
  return true;
}

export async function POST(req: Request) {
  try {
    const { msg, openaiKey, openRouterKey } = await req.json();

    if (!msg) {
      return new NextResponse("No msg provided", { status: 400 });
    }

    if (!openaiKey && !openRouterKey) {
      return new NextResponse(
        "Sorry, but you need to provide your own keys for now, go to /settings",
        { status: 400 }
      );
    }

    if (openRouterKey) {
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

      const result = await generateText({
        model: openRouter("google/gemini-2.0-flash-lite-001"),
        system,
        prompt: `Based on the user's message below, generate a short, descriptive, and engaging title for the chat:\n\nUser's message: "${msg}"`,
      });

      return NextResponse.json({ result: result.text }, { status: 200 });
    }

    if (openaiKey) {
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

      const result = await generateText({
        model: openai("gpt-4.1-nano"),
        system,
        prompt: `Based on the user's message below, generate a short, descriptive, and engaging title for the chat:\n\nUser's message: "${msg}"`,
      });

      return NextResponse.json({ result: result.text }, { status: 200 });
    }
  } catch (e) {
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
