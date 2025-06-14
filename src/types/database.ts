export interface Chat {
  id: string;
  title?: string;
  created_at: Date;
  updated_at: Date;
  empty: boolean;
}

export interface StoredMessage {
  id: string;
  chatId: string;
  content: string;
  role: "user" | "assistant";
  created_at: Date;
  isPartial?: boolean;
}
