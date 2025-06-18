import { PrismaClient } from "@/generated/prisma/edge";
import { NextResponse } from "next/server";
import { Attachment } from "ai";

export async function POST(req: Request) {
  const { chats: allChats, messages: allMessages, tok } = await req.json();
  const now = new Date();

  if (!tok || !tok.userId) {
    return new NextResponse("Please log in", { status: 401 });
  }

  const prisma = new PrismaClient();

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
          empty: chat.empty ?? true,
          parentId: chat.parentId ?? null,
          isDeleted: chat.isDeleted,
        },
        create: {
          id: chat.id,
          userId: tok.userId,
          userEmail: tok.login,
          title: chat.title ?? null,
          created_at: chat.created_at,
          updated_at: chat.updated_at,
          lastSynced: now,
          empty: chat.empty ?? true,
          parentId: chat.parentId ?? null,
          isDeleted: chat.isDeleted,
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
          isDeleted: message.isDeleted,
        },
        create: {
          id: message.id,
          chatId: message.chatId,
          content: message.content,
          role: message.role,
          created_at: message.created_at,
          lastModified: message.lastModified ?? message.created_at,
          model: message.model,
          isDeleted: message.isDeleted,
        },
      });

      const incomingAttachments = (message.attachments ?? []) as Attachment[];

      // 2. Get existing attachments from DB for this message
      const existingAttachments = await prisma.attachment.findMany({
        where: { storedMessageId: message.id },
      });

      // 3. Delete attachments that are no longer present
      const incomingUrls = new Set(incomingAttachments.map((a) => a.url));
      const toDelete = existingAttachments.filter((a) => !incomingUrls.has(a.url));
      if (toDelete.length > 0) {
        await prisma.attachment.deleteMany({
          where: {
            id: { in: toDelete.map((a) => a.id) },
          },
        });
      }

      // 4. Upsert (create or update) incoming attachments
      for (const att of incomingAttachments) {
        // Try to find by URL and storedMessageId
        const existing = existingAttachments.find((a) => a.url === att.url);

        if (existing) {
          // Update if needed
          await prisma.attachment.update({
            where: { id: existing.id },
            data: {
              name: att.name ?? existing.name,
              type: att.contentType ?? existing.type,
              url: att.url,
              storedMessageId: message.id,
            },
          });
        } else {
          // Create new
          await prisma.attachment.create({
            data: {
              name: att.name ?? "",
              type: att.contentType ?? "",
              url: att.url,
              storedMessageId: message.id,
            },
          });
        }
      }
      // --- ATTACHMENTS HANDLING ENDS HERE ---
    }
    return new NextResponse("OK", { status: 200 });
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
