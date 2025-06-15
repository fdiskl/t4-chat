import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { chats: allChats, messages: allMessages, tok } = await req.json();
  const prisma = new PrismaClient();
  const now = new Date();

  // Collect all chat and message IDs from the incoming data
  const incomingChatIds = allChats.map((chat: any) => chat.id);
  const incomingMessageIds = allMessages.map((msg: any) => msg.id);

  try {
    // 1. Delete all messages for this user that are NOT in the incoming message IDs
    await prisma.storedMessage.deleteMany({
      where: {
        Chat: {
          userId: tok.userId,
        },
        id: {
          notIn: incomingMessageIds.length > 0 ? incomingMessageIds : ["_never_"], // avoid deleting all if empty
        },
      },
    });

    // 2. Delete all chats for this user that are NOT in the incoming chat IDs
    await prisma.chat.deleteMany({
      where: {
        userId: tok.userId,
        id: {
          notIn: incomingChatIds.length > 0 ? incomingChatIds : ["_never_"], // avoid deleting all if empty
        },
      },
    });

    // 3. Upsert chats
    for (const chat of allChats) {
      await prisma.chat.upsert({
        where: { id: chat.id, userId: tok.userId },
        update: {
          userId: tok.userId,
          userEmail: tok.login,
          title: chat.title ?? null,
          created_at: chat.created_at,
          updated_at: chat.updated_at,
          lastSynced: now,
          empty: chat.empty,
          parentId: chat.parentId ?? null,
        },
        create: {
          id: chat.id,
          userId: tok.userId,
          userEmail: tok.login,
          title: chat.title ?? null,
          created_at: chat.created_at,
          updated_at: chat.updated_at,
          lastSynced: now,
          empty: chat.empty,
          parentId: chat.parentId ?? null,
        },
      });
    }

    // 4. Upsert messages
    const chatIds = new Set(allChats.map((chat: any) => chat.id));
    for (const message of allMessages) {
      if (!chatIds.has(message.chatId)) {
        console.error(`Chat with id ${message.chatId} not found for message ${message.id}`);
        continue;
      }
      await prisma.storedMessage.upsert({
        where: { id: message.id },
        update: {
          chatId: message.chatId,
          content: message.content,
          role: message.role,
          created_at: message.created_at,
          lastModified: message.lastModified ?? message.created_at,
          model: message.model,
        },
        create: {
          id: message.id,
          chatId: message.chatId,
          content: message.content,
          role: message.role,
          created_at: message.created_at,
          lastModified: message.lastModified ?? message.created_at,
          model: message.model,
        },
      });
    }
    return new NextResponse("OK", { status: 200 });
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
