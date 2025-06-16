import { idToModelMap, ModelConfig } from "@/types/models";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { messages, model } = await req.json();

  let m: ModelConfig;
  try {
    m = idToModelMap[model as string];
  } catch (e) {
    console.error(e);
    return new NextResponse("Sorry, model not supported right now", { status: 400 });
  }

  // TODO: api keys

  if (m.openaiProvider) {
    console.log(m.openaiProvider);
    const result = streamText({
      model: openai(m.openaiProvider),
      system: "You are a helpful assistant",
      messages,
    });

    return result.toDataStreamResponse();
  }

  if (m.openRouterProvider) {
    // TODO: open router
    return new NextResponse("Sorry, OpenRouter is not supported yet, try OpenAI models", {
      status: 500,
    });
  }

  return new NextResponse("Sorry, no provider found for this model", { status: 500 });
}
