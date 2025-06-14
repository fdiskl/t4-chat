import { OpenAIProvider } from "@ai-sdk/openai";

// I spent almost hour just doing this one file...

export type modelId =
  | "4o-mini"
  | "4o"
  | "4.1"
  | "4.1-mini"
  | "4.1-nano"
  | "o3-mini"
  | "o4-mini"
  | "o3"
  | "2-flash"
  | "2-flash-lite"
  | "2.5-flash"
  | "2.5-flash-t"
  | "2.5-pro"
  | "v3"
  | "r1"
  | "3.5"
  | "3.7"
  | "3.7-t"
  | "4"
  | "4-t"
  | "3.3"
  | "l4-scout"
  | "l4-maverick"
  | "grok-3"
  | "grok-3-mini";

export type provider = "Anthropic" | "Grok" | "Openai" | "Deepseek" | "Gemini" | "Llama";

export const allProviders: provider[] = [
  "Openai",
  "Gemini",
  "Anthropic",
  "Deepseek",
  "Llama",
  "Grok",
];

// why can't openai export this tho
type OpenAIChatModelId =
  | "o1"
  | "o1-2024-12-17"
  | "o1-mini"
  | "o1-mini-2024-09-12"
  | "o1-preview"
  | "o1-preview-2024-09-12"
  | "o3-mini"
  | "o3-mini-2025-01-31"
  | "o3"
  | "o3-2025-04-16"
  | "o4-mini"
  | "o4-mini-2025-04-16"
  | "gpt-4.1"
  | "gpt-4.1-2025-04-14"
  | "gpt-4.1-mini"
  | "gpt-4.1-mini-2025-04-14"
  | "gpt-4.1-nano"
  | "gpt-4.1-nano-2025-04-14"
  | "gpt-4o"
  | "gpt-4o-2024-05-13"
  | "gpt-4o-2024-08-06"
  | "gpt-4o-2024-11-20"
  | "gpt-4o-audio-preview"
  | "gpt-4o-audio-preview-2024-10-01"
  | "gpt-4o-audio-preview-2024-12-17"
  | "gpt-4o-search-preview"
  | "gpt-4o-search-preview-2025-03-11"
  | "gpt-4o-mini-search-preview"
  | "gpt-4o-mini-search-preview-2025-03-11"
  | "gpt-4o-mini"
  | "gpt-4o-mini-2024-07-18"
  | "gpt-4-turbo"
  | "gpt-4-turbo-2024-04-09"
  | "gpt-4-turbo-preview"
  | "gpt-4-0125-preview"
  | "gpt-4-1106-preview"
  | "gpt-4"
  | "gpt-4-0613"
  | "gpt-4.5-preview"
  | "gpt-4.5-preview-2025-02-27"
  | "gpt-3.5-turbo-0125"
  | "gpt-3.5-turbo"
  | "gpt-3.5-turbo-1106"
  | "chatgpt-4o-latest";

export interface ModelConfig {
  name: string;
  contextWindow?: number;
  provider: provider;
  id: modelId;

  openaiProvider?: OpenAIChatModelId;
  openRouterProvider?: string;
}

export const models: ModelConfig[] = [
  // openai
  {
    name: "GPT-4o Mini",
    provider: "Openai",
    id: "4o-mini",
    openaiProvider: "gpt-4o-mini",
    openRouterProvider: "openai/gpt-4o-mini",
  },
  {
    name: "GPT-4o",
    provider: "Openai",
    id: "4o",
    openaiProvider: "gpt-4o",
    openRouterProvider: "openai/gpt-4o",
  },
  {
    name: "GPT-4.1",
    provider: "Openai",
    id: "4.1",
    openaiProvider: "gpt-4.1",
    openRouterProvider: "openai/gpt-4.1",
  },
  {
    name: "GPT-4.1 Mini",
    provider: "Openai",
    id: "4.1-mini",
    openaiProvider: "gpt-4.1-mini",
    openRouterProvider: "openai/gpt-4.1-mini",
  },
  {
    name: "GPT-4.1 Nano",
    provider: "Openai",
    id: "4.1-nano",
    openaiProvider: "gpt-4.1-nano",
    openRouterProvider: "openai/gpt-4.1-nano",
  },
  {
    name: "o3 Mini",
    provider: "Openai",
    id: "o3-mini",
    openaiProvider: "o3-mini",
    openRouterProvider: "openai/gpt-o3-mini",
  },
  {
    name: "o3",
    provider: "Openai",
    id: "o3",
    openaiProvider: "o3",
    // no open router here
  },
  {
    name: "o4 Mini",
    provider: "Openai",
    id: "o4-mini",
    openaiProvider: "o4-mini",
    openRouterProvider: "openai/gpt-o4-mini",
  },
  // gemini
  {
    name: "Gemini 2.0 Flash",
    id: "2-flash",
    provider: "Gemini",
    openRouterProvider: "google/gemini-2.0-flash-001",
  },
  {
    name: "Gemini 2.0 Flash Lite",
    id: "2-flash-lite",
    provider: "Gemini",
    openRouterProvider: "google/gemini-2.0-flash-lite-001",
  },
  {
    name: "Gemini 2.5 Flash",
    id: "2.5-flash",
    provider: "Gemini",
    openRouterProvider: "google/gemini-2.5-flash-preview",
  },
  // {
  //   name: "Gemini 2.0 Flash (Thinking)",
  //   id: "2.5-flash-t",
  //   provider: "Gemini",
  // }, some tinkering with open router
  {
    name: "Gemini 2.5 Pro",
    id: "2.5-pro",
    provider: "Gemini",
    openRouterProvider: "google/gemini-2.5-pro-preview",
  },
  // deepseek
  {
    name: "Deepseek v3",
    id: "v3",
    provider: "Deepseek",
    openRouterProvider: "deepseek/deepseek-chat-v3-0324",
  },
  {
    name: "Deepseek r1 (0528)",
    id: "r1",
    provider: "Deepseek",
    openRouterProvider: "deepseek/deepseek-r1-0528",
  },
  // claude
  {
    name: "Claude 3.5 Sonnet",
    id: "3.5",
    provider: "Anthropic",
    openRouterProvider: "anthropic/claude-3.5-sonnet",
  },
  {
    name: "Claude 3.7 Sonnet",
    id: "3.7",
    provider: "Anthropic",
    openRouterProvider: "anthropic/claude-3.7-sonnet",
  },
  {
    name: "Claude 3.7 Sonnet (Thinking)",
    id: "3.7-t",
    provider: "Anthropic",
    openRouterProvider: "anthropic/claude-3.7-sonnet:thinking",
  },
  {
    name: "Claude 4 Sonnet",
    id: "4",
    provider: "Anthropic",
    openRouterProvider: "anthropic/claude-sonnet-4",
  },
  // {
  //   name: "Claude 4 Sonnet (Thinking)",
  //   id: "4-t",
  //   provider: "Anthropic",
  //   openRouterProvider: ""
  // }, i have no idea how to make it think tho
  // llama
  {
    name: "LLama 3.3 70b",
    id: "3.3",
    provider: "Llama",
  },
  {
    name: "LLama 4 Scout",
    id: "l4-scout",
    provider: "Llama",
    openRouterProvider: "meta-llama/llama-4-scout",
  },
  {
    name: "LLama 4 Maverick",
    id: "l4-maverick",
    provider: "Llama",
    openRouterProvider: "meta-llama/llama-4-maverick",
  },
  // grok
  {
    name: "Grok 3",
    id: "grok-3",
    provider: "Grok",
    openRouterProvider: "x-ai/grok-3-beta",
  },
  {
    name: "Grok 3 Mini",
    id: "grok-3-mini",
    provider: "Grok",
    openRouterProvider: "x-ai/grok-3-mini-beta",
  },
] as const;

export const idToModelMap: Record<string, ModelConfig> = Object.fromEntries(
  models.map((model) => [model.id, model])
);

export const providerToModels: Record<string, ModelConfig[]> = models.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ModelConfig[]>
);
