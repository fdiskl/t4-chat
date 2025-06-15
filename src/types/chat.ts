import { modelId } from "./models";

export interface ChatBody {
  systemPromptId: string;
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  model: modelId;
}
