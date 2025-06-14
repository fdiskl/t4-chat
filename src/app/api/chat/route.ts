import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages, model } = await req.json();

  console.log(model);

  const result = streamText({
    model: openai("gpt-4.1-nano"),
    system: "You are a helpful assistant",
    messages,
  });

  return result.toDataStreamResponse();
}
