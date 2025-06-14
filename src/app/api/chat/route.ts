import { idToModelMap } from "@/types/models";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { messages, model } = await req.json();

  let m;
  try {
    m = idToModelMap[model as string];
  } catch (e) {
    console.error(e);
    return new NextResponse("Invalid model", { status: 400 });
  }

  const result = streamText({
    model: openai("gpt-4.1-nano"),
    system: "You are a helpful assistant",
    messages,
  });

  return result.toDataStreamResponse();
}
