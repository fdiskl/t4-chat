import { Attachment } from "ai";

export interface Chat {
  id: string;
  title?: string;
  created_at: Date;
  updated_at: Date;
  lastSynced?: Date; // optional
  empty: boolean;
  parentId?: string;
  isDeleted: boolean;
  isShared: boolean;
}

export interface StoredMessage {
  id: string;
  chatId: string;
  content: string;
  role: "user" | "assistant";
  created_at: Date;
  isPartial?: boolean;
  model: string;
  lastModified?: Date; // optional
  isDeleted: boolean;

  attachments: Attachment[];
}

export interface AuthToken {
  id: "auth";
  token: string;
  provider: "github" | "google";
  userId: string;
  login: string;
  avatarUrl?: string;
}

export interface LastSynced {
  id: "last_synced";
  d: Date;
}

export interface LastModel {
  id: "last_model";
  model: string;
}

export interface Keys {
  id: "keys";
  OpenAI: string;
  OpenRouter: string;
}

export interface IsOpen {
  id: "isOpen";
  isOpen: boolean;
}
