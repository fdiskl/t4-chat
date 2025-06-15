import { openai } from "@ai-sdk/openai";
import { generateText, streamText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // TODO: api keys
  // TODO: open router
  //

  const { msg } = await req.json();

  if (!msg) {
    return new NextResponse("No msg provided", { status: 400 });
  }

  const result = await generateText({
    model: openai("gpt-4.1-nano"),
    system: "You are a helpful assistant specialized in creating concise and relevant chat titles.",
    prompt: `Based on the user's message below, generate a short, descriptive, and engaging title for the chat:\n\nUser's message: "${msg}"`,
  });

  return NextResponse.json({ result: result.text }, { status: 200 });
}
