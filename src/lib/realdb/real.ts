import { db } from "../db";

export async function backupToServer() {
  const chats = await db.chats.toArray();
  const messages = await db.messages.toArray();
  const toks = await db.tokens.toArray();

  if (toks.length < 1) {
    throw new Error("Please log in to sync");
  }

  await fetch("/api/backup/push", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chats, messages, tok: toks[0] }),
  });
}

async function fetchServerData() {
  const toks = await db.tokens.toArray();

  if (toks.length < 1) {
    throw new Error("Please log in to sync");
  }

  const response = await fetch(
    "/api/backup/pull",

    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tok: toks[0] }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data from server");
  }
  const data = await response.json();
  return data;
}

export async function updateLocalData() {
  const { chats: serverChats, messages: serverMessages } = await fetchServerData();

  for (const chat of serverChats) {
    await db.createOrUpdateChat(chat.id, chat);
  }

  for (const message of serverMessages) {
    await db.createOrUpdateChat(message.id, message);
  }

  await db.fixParents();
}
