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

export interface ModelConfig {
  name: string;
  contextWindow?: number;
  provider: provider;
  id: modelId;
}

export const models: ModelConfig[] = [
  // openai
  {
    name: "GPT-4o Mini",
    provider: "Openai",
    id: "4o-mini",
  },
  {
    name: "GPT-4o",
    provider: "Openai",
    id: "4o",
  },
  {
    name: "GPT-4.1",
    provider: "Openai",
    id: "4.1",
  },
  {
    name: "GPT-4.1 Mini",
    provider: "Openai",
    id: "4.1-mini",
  },
  {
    name: "GPT-4.1 Nano",
    provider: "Openai",
    id: "4.1-nano",
  },
  {
    name: "o3 Mini",
    provider: "Openai",
    id: "o3-mini",
  },
  {
    name: "o3",
    provider: "Openai",
    id: "o3",
  },
  {
    name: "o4 Mini",
    provider: "Openai",
    id: "o4-mini",
  },
  // gemini
  {
    name: "Gemini 2.0 Flash",
    id: "2-flash",
    provider: "Gemini",
  },
  {
    name: "Gemini 2.0 Flash Lite",
    id: "2-flash-lite",
    provider: "Gemini",
  },
  {
    name: "Gemini 2.5 Flash",
    id: "2.5-flash",
    provider: "Gemini",
  },
  {
    name: "Gemini 2.0 Flash (Thinking)",
    id: "2.5-flash-t",
    provider: "Gemini",
  },
  {
    name: "Gemini 2.5 Pro",
    id: "2.5-pro",
    provider: "Gemini",
  },
  // deepseek
  {
    name: "Deepseek v3",
    id: "v3",
    provider: "Deepseek",
  },
  {
    name: "Deepseek r1",
    id: "r1",
    provider: "Deepseek",
  },
  // claude
  {
    name: "Claude 3.5 Sonnet",
    id: "3.5",
    provider: "Anthropic",
  },
  {
    name: "Claude 3.7 Sonnet",
    id: "3.7",
    provider: "Anthropic",
  },
  {
    name: "Claude 3.7 Sonnet (Thinking)",
    id: "3.7-t",
    provider: "Anthropic",
  },
  {
    name: "Claude 4 Sonnet",
    id: "4",
    provider: "Anthropic",
  },
  {
    name: "Claude 4 Sonnet (Thinking)",
    id: "4-t",
    provider: "Anthropic",
  },
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
  },
  {
    name: "LLama 4 Maverick",
    id: "l4-maverick",
    provider: "Llama",
  },
  // grok
  {
    name: "Grok 3",
    id: "grok-3",
    provider: "Grok",
  },
  {
    name: "Grok 3 Mini",
    id: "grok-3-mini",
    provider: "Grok",
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
