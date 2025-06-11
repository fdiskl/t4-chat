import { ModelRegistry } from "@/lib/constants/models";
import { getSystemPrompt } from "@/lib/constants/prompts";
import { ModelId } from "@/types/models";
import { anthropic } from "@ai-sdk/anthropic";
import { deepseek } from "@ai-sdk/deepseek";
import { groq } from "@ai-sdk/groq";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

// if (!process.env.ANTHROPIC_API_KEY) {
//   throw new Error("ANTHROPIC_API_KEY is not defined");
// }

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined");
}

// if (!process.env.GROQ_API_KEY) {
//   throw new Error("GROQ_API_KEY is not defined");
// }

// if (!process.env.DEEPSEEK_API_KEY) {
//   throw new Error("DEEPSEEK_API_KEY is not defined");
// }

export async function POST(req: Request) {
  const startTime = performance.now();

  try {
    const { messages, model, systemPromptId } = await req.json();
    console.log(`[API] Starting request for model: ${model}`);

    const modelConfig = ModelRegistry[model as ModelId];
    if (!modelConfig) {
      return new Response(JSON.stringify({ error: "Invalid model provided." }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, must-revalidate",
        },
      });
    }

    let provider;
    switch (modelConfig.provider) {
      case "anthropic":
        provider = anthropic;
        break;
      case "groq":
        provider = groq;
        break;
      case "openai":
        provider = openai;
        break;
      case "deepseek":
        provider = deepseek;
        break;
      default:
        throw new Error(`Unknown provider for model ${model}`);
    }

    const modelId = modelConfig.modelId || model;

    // Get system prompt and add it as the first message
    const systemPrompt = getSystemPrompt(systemPromptId || "default");
    const messagesWithSystem = [{ role: "system", content: systemPrompt.content }, ...messages];

    const result = streamText({
      model: openai("gpt-4.1-nano"),
      messages: messagesWithSystem,
    });

    const response = result.toDataStreamResponse();
    const endTime = performance.now();
    console.log(`[API] Request completed in ${endTime - startTime}ms`);

    return response;
  } catch (error) {
    const endTime = performance.now();
    console.error("Error in chat API:", error);
    console.error(`Request failed after ${endTime - startTime}ms`);

    return new Response(
      JSON.stringify({
        error: "An error occurred during the request.",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}

/*
for me later

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const token = auth?.split(" ")[1];

  if (!token) return NextResponse.json({ error: "No token" }, { status: 401 });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    // Proceed with AI action
    return NextResponse.json({ ok: true, user: payload });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
*/
