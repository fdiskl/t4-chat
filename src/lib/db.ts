import {
  AuthToken,
  Chat,
  IsOpen,
  Keys,
  LastModel,
  LastSynced,
  StoredMessage,
} from "@/types/database";
import Dexie, { Table } from "dexie";
import { nanoid } from "nanoid";
import { $Enums, Chat as PrismChat, StoredMessage as PrismMsg } from "@/generated/prisma";
import { Attachment, Message } from "ai";
import { modelId } from "@/types/models";

class ChatDatabase extends Dexie {
  chats!: Table<Chat>;
  messages!: Table<StoredMessage>;
  tokens!: Table<AuthToken>;
  last_synced!: Table<LastSynced>;
  last_model!: Table<LastModel>;
  keys!: Table<Keys>;
  isOpenT!: Table<IsOpen>;

  constructor() {
    super("ChatDatabase");
    this.version(1).stores({
      chats: "id, created_at, updated_at, empty",
      messages: "id, chatId, created_at",
      tokens: "id",
      last_synced: "id",
      last_model: "id",
      keys: "id",
      isOpenT: "id",
    });
  }

  async setIsOpen(isOpen: boolean) {
    const o = await this.isOpenT.get("isOpen");

    if (!o) {
      await this.isOpenT.add({
        id: "isOpen",
        isOpen: isOpen,
      });
    } else {
      await this.isOpenT.update("isOpen", {
        isOpen: isOpen,
      });
    }
  }

  async getIsOpen(): Promise<boolean> {
    const o = await this.isOpenT.get("isOpen");
    return o ? o.isOpen : false;
  }

  async getKeys(): Promise<{ oai: string; openrouter: string } | undefined> {
    const k = await this.keys.get("keys");

    if (!k) return undefined;

    return {
      oai: k.OpenAI,
      openrouter: k.OpenRouter,
    };
  }

  async setKeys(oai?: string, orouter?: string) {
    const k = await this.keys.get("keys");

    if (!k) {
      await db.keys.add({
        id: "keys",
        OpenAI: oai ?? "",
        OpenRouter: orouter ?? "",
      });
    } else {
      if (oai) {
        await this.keys.update("keys", {
          OpenAI: oai,
        });
      }

      if (orouter) {
        await this.keys.update("keys", {
          OpenRouter: orouter,
        });
      }
    }
  }

  async setLastModel(m: modelId) {
    const last = await this.last_model.get("last_model");
    if (!last) {
      await this.last_model.add({
        id: "last_model",
        model: m,
      });
    } else {
      await this.last_model.update("last_model", {
        model: m,
      });
    }
  }

  async getLastModel(): Promise<modelId | undefined> {
    const last = await this.last_model.get("last_model");
    return last?.model as modelId;
  }

  async setLastSynced(d: Date) {
    const last = await this.last_synced.get("last_synced");
    if (!last) {
      await this.last_synced.add({
        d: d,
        id: "last_synced",
      });
    } else {
      await this.last_synced.update("last_synced", {
        d: d,
      });
    }
  }

  async getLastSynced() {
    const last = await this.last_synced.get("last_synced");
    return last;
  }

  // copies chat and all underlying messages, returns new id
  // throws and error if invalid id or smth btw
  async copyChat(id: string, lastMsgInBranchId: string): Promise<string> {
    const chat = await this.chats.get(id);

    if (chat?.isDeleted) return "";

    if (!chat) {
      throw new Error("chat not found");
    }

    const {
      id: oldId,
      parentId: _,
      created_at: __,
      updated_at: ___,
      isShared: ____,
      ...rest
    } = chat;

    const newId = await db.chats.add({
      id: nanoid(),
      parentId: oldId,
      created_at: new Date(),
      updated_at: new Date(),
      isShared: false,
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
      isDeleted: false,
      isShared: false,
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
    await this.chats.filter((c) => c.empty == true).delete(); // empty chats should be hard deleted
  }

  async addMessage(
    message: Omit<StoredMessage, "id" | "created_at">,
    id?: string
  ): Promise<StoredMessage> {
    console.log(message);

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
      .orderBy("created_at")
      .reverse()
      .filter((c) => c.empty === false && c.isDeleted === false)
      .toArray();
  }

  async getChatById(chatId: string): Promise<Chat | undefined> {
    return await this.chats.get(chatId);
  }

  async deleteChat(chatId: string): Promise<void> {
    await this.transaction("rw", this.chats, this.messages, async () => {
      await this.messages
        .where("chatId")
        .equals(chatId)
        .modify((m) => {
          m.isDeleted = true;
        });
      await this.chats.update(chatId, {
        isDeleted: true,
      });
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
      isDeleted: chat.isDeleted,
      isShared: chat.isShared,
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

  async createOrUpdateMsg(id: string, msg: BetterPrismMsg): Promise<void> {
    const c = await this.messages.get(id);

    const o: Partial<StoredMessage> = {
      chatId: msg.chatId,
      content: msg.content,
      created_at: msg.created_at,
      isPartial: msg.isPartial === null ? undefined : msg.isPartial,
      lastModified: msg.lastModified === null ? undefined : msg.lastModified,
      model: msg.model,
      role: msg.role === $Enums.Role.user ? "user" : "assistant",
      attachments: msg.attachments,
      isDeleted: msg.isDeleted,
    };

    if (c) {
      console.log("updating", c.id);
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
        attachments: msg.attachments,
        isDeleted: msg.isDeleted,
      };
      console.log("creating", cc);

      await this.messages.add(cc);
    }
  }

  // check if all chats which have parents really have them
  async fixParents() {
    try {
      const chatsToCheck = await this.chats.filter((c) => c.parentId != undefined).toArray();

      for (const c of chatsToCheck) {
        const parent = await this.chats.get(c.parentId);
        if (parent === undefined || parent.isDeleted === true) {
          this.chats.update(c.id, {
            parentId: undefined,
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}

export const db = new ChatDatabase();

interface BetterPrismMsg extends PrismMsg {
  attachments: Attachment[];
}
