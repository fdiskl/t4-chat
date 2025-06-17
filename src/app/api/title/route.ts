import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { decryptApiKey } from "@/lib/keys";

const secretKey = process.env.API_KEY_SECRET as string;

function getKey() {
  return crypto.createHash("sha256").update(secretKey).digest();
}

// at least smth
function isOpenAIKey(s: string): boolean {
  const pattern = /^sk-[A-Za-z0-9]/;
  return pattern.test(s);
}

export async function POST(req: Request) {
  try {
    // TODO: open router

    const { msg, openaiKey } = await req.json();

    if (!msg) {
      return new NextResponse("No msg provided", { status: 400 });
    }

    if (!openaiKey) {
      return new NextResponse(
        "Sorry, but you need to provide your own keys for now, go to /settings",
        { status: 400 }
      );
    }

    const key = decryptApiKey(openaiKey, getKey());

    if (!isOpenAIKey(key)) {
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
      system:
        "You are a helpful assistant specialized in creating concise and relevant chat titles.",
      prompt: `Based on the user's message below, generate a short, descriptive, and engaging title for the chat:\n\nUser's message: "${msg}"`,
    });

    return NextResponse.json({ result: result.text }, { status: 200 });
  } catch (e) {
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
