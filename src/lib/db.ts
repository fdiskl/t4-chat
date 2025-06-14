import { Chat, StoredMessage } from "@/types/database";
import Dexie, { Table } from "dexie";
import { nanoid } from "nanoid";

export interface AuthToken {
  id: "auth";
  token: string;
  provider: "github" | "google";
  userId: string;
  login: string;
  avatarUrl?: string;
}

class ChatDatabase extends Dexie {
  chats!: Table<Chat>;
  messages!: Table<StoredMessage>;
  tokens!: Table<AuthToken>;

  constructor() {
    super("ChatDatabase");
    this.version(1).stores({
      chats: "id, created_at, updated_at, empty",
      messages: "id, chatId, created_at",
      tokens: "id",
    });
  }

  async createChat(title?: string): Promise<Chat> {
    const chat: Chat = {
      id: nanoid(),
      title,
      created_at: new Date(),
      updated_at: new Date(),
      empty: true,
    };

    await this.chats.add(chat);
    return chat;
  }

  async updateChatTitle(chatId: string, title: string): Promise<void> {
    await this.chats.update(chatId, {
      title,
      updated_at: new Date(),
    });
  }

  async deleteEmptyChats(): Promise<void> {
    await this.chats.filter((c) => c.empty == true).delete();
  }

  async addMessage(message: Omit<StoredMessage, "id" | "created_at">): Promise<StoredMessage> {
    const storedMessage: StoredMessage = {
      ...message,
      id: nanoid(),
      created_at: new Date(),
    };

    await this.messages.add(storedMessage);
    await this.chats.update(message.chatId, {
      updated_at: new Date(),
      empty: false,
    });

    return storedMessage;
  }

  async getChatMessages(chatId: string): Promise<StoredMessage[]> {
    return await this.messages.where("chatId").equals(chatId).sortBy("created_at");
  }

  async getMsgById(chatId: string): Promise<StoredMessage | undefined> {
    return await this.messages.get(chatId);
  }

  async getChats(): Promise<Chat[]> {
    return await this.chats
      .orderBy("updated_at")
      .reverse()
      .filter((c) => c.empty == false)
      .toArray();
  }

  async deleteChat(chatId: string): Promise<void> {
    await this.transaction("rw", this.chats, this.messages, async () => {
      await this.messages.where("chatId").equals(chatId).delete();
      await this.chats.delete(chatId);
    });
  }

  async saveToken(token: AuthToken): Promise<void> {
    await this.tokens.put({ ...token, id: "auth" });
  }

  async getToken(): Promise<AuthToken | undefined> {
    return await this.tokens.get("auth");
  }

  async clearToken(): Promise<void> {
    await this.tokens.delete("auth");
  }
}

export const db = new ChatDatabase();
