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
