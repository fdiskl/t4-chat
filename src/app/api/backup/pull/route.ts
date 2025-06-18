import { PrismaClient } from "@/generated/prisma/edge";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { tok, lastSynced } = await req.json();

  if (!tok || !tok.userId) {
    return new NextResponse("Please log in", { status: 401 });
  }

  const prisma = new PrismaClient();

  try {
    // Parse lastSynced as a Date, fallback to epoch if not provided
    const lastSyncedDate = lastSynced ? new Date(lastSynced) : new Date(0);

    console.log(lastSyncedDate);

    // Get all chats for this user updated after lastSynced
    const chats = await prisma.chat.findMany({
      where: {
        userId: tok.userId,
        userEmail: tok.login,
        updated_at: { gt: lastSyncedDate },
      },
    });

    console.log("CHATS", chats);

    // Get all messages for these chats updated after lastSynced
    const chatIds = chats.map((chat) => chat.id);
    let messages: any[] = [];
    if (chatIds.length > 0) {
      messages = await prisma.storedMessage.findMany({
        where: {
          chatId: { in: chatIds },
          isDeleted: false,
        },
        include: {
          attachments: true,
        },
      });

      console.log("MSGS", messages);

      messages = messages.map((msg) => ({
        ...msg,
        attachments: (msg.attachments || []).map((att: any) => ({
          name: att.name || undefined,
          contentType: att.type || undefined,
          url: att.url,
        })),
      }));
    }

    return NextResponse.json({ chats, messages });
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
