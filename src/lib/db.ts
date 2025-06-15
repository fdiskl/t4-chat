import { Chat, StoredMessage } from "@/types/database";
import Dexie, { Table } from "dexie";
import { nanoid } from "nanoid";
import { $Enums, Chat as PrismChat, StoredMessage as PrismMsg } from "@/generated/prisma";
import { Message } from "ai";

export interface AuthToken {
  id: "auth";
  token: string;
  provider: "github" | "google";
  userId: string;
  login: string;
  avatarUrl?: string;
}

// TODO: make deleting thread delete msgs

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

  // copies chat and all underlying messages, returns new id
  // throws and error if invalid id or smth btw
  async copyChat(id: string, lastMsgInBranchId: string): Promise<string> {
    const chat = await this.chats.get(id);

    if (!chat) {
      throw new Error("chat not found");
    }

    const { id: oldId, parentId: _, created_at: __, ...rest } = chat;

    const newId = await db.chats.add({
      id: nanoid(),
      parentId: oldId,
      created_at: new Date(),
      ...rest,
    });

    const msgs = await db.getChatMessages(id);

    const newMsgs = [];

    for (const m of msgs) {
      let breakAfter = false;
      if (m.id === lastMsgInBranchId) {
        breakAfter = true;
      }

      console.log(m, lastMsgInBranchId);

      const n = {
        ...m,
        id: nanoid(),
        chatId: newId,
      };

      newMsgs.push(n);

      if (breakAfter) break;
    }

    console.log(newMsgs);

    await db.messages.bulkAdd(newMsgs);

    return newId;
  }

  async createChat(title?: string): Promise<Chat> {
    const chat: Chat = {
      id: nanoid(),
      title,
      created_at: new Date(),
      updated_at: new Date(),
      empty: true,
      parentId: undefined,
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

  async addMessage(
    message: Omit<StoredMessage, "id" | "created_at">,
    id?: string
  ): Promise<StoredMessage> {
    const storedMessage: StoredMessage = {
      ...message,
      id: id ? id : nanoid(),
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

  async getMsgById(id: string): Promise<StoredMessage | undefined> {
    return await this.messages.get(id);
  }

  async getChats(): Promise<Chat[]> {
    return await this.chats
      .orderBy("updated_at")
      .reverse()
      .filter((c) => c.empty == false)
      .toArray();
  }

  async getChatById(chatId: string): Promise<Chat | undefined> {
    return await this.chats.get(chatId);
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

  async createOrUpdateChat(chatId: string, chat: PrismChat): Promise<void> {
    const c = await this.chats.get(chatId);

    const o = {
      created_at: chat.created_at,
      empty: chat.empty,
      lastSynced: new Date(),
      parentId: chat.parentId === null ? undefined : chat.parentId,
      title: chat.title === null ? undefined : chat.title,
      updated_at: chat.updated_at,
    };

    if (c) {
      await this.chats.update(chatId, o);
    } else {
      await this.chats.add({
        id: chatId,
        ...o,
      });
    }
  }

  async createOrUpdateMsg(id: string, msg: PrismMsg): Promise<void> {
    const c = await this.messages.get(id);

    const o: Partial<StoredMessage> = {
      chatId: msg.chatId,
      content: msg.content,
      created_at: msg.created_at,
      isPartial: msg.isPartial === null ? undefined : msg.isPartial,
      lastModified: msg.lastModified === null ? undefined : msg.lastModified,
      model: msg.model,
      role: msg.role === $Enums.Role.user ? "user" : "assistant",
    };

    if (c) {
      await this.messages.update(id, o);
    } else {
      const cc: StoredMessage = {
        id: id,
        chatId: msg.chatId,
        content: msg.content,
        created_at: msg.created_at,
        isPartial: msg.isPartial === null ? undefined : msg.isPartial,
        lastModified: msg.lastModified === null ? undefined : msg.lastModified,
        model: msg.model,
        role: msg.role === $Enums.Role.user ? "user" : "assistant",
      };

      await this.messages.add(cc);
    }
  }
}

export const db = new ChatDatabase();
