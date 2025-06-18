import { toast } from "sonner";
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
  const tok = await db.getToken();

  if (!tok) {
    toast.error("Can't sync if you are not logged in");
  }

  const last = await db.getLastSynced();

  const response = await fetch(
    "/api/backup/pull",

    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tok: tok, lastSynced: last?.d }),
    }
  );
  if (!response.ok) {
    toast.error("Something went wrong");
  }
  const data = await response.json();

  console.log("DATA FROM SERVER ", data);

  return data;
}

export async function updateLocalData() {
  const { chats: serverChats, messages: serverMessages } = await fetchServerData();

  for (const chat of serverChats) {
    await db.createOrUpdateChat(chat.id, chat);
  }

  for (const message of serverMessages) {
    await db.createOrUpdateMsg(message.id, message);
  }

  await db.fixParents();
}
