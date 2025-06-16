import { PrismaClient } from "@/generated/prisma/edge";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { tok, lastSynced } = await req.json();
  const prisma = new PrismaClient();

  try {
    // Parse lastSynced as a Date, fallback to epoch if not provided
    const lastSyncedDate = lastSynced ? new Date(lastSynced) : new Date(0);

    // Get all chats for this user updated after lastSynced
    const chats = await prisma.chat.findMany({
      where: {
        userId: tok.userId,
        userEmail: tok.login,
        updated_at: { gt: lastSyncedDate },
      },
    });

    // Get all messages for these chats updated after lastSynced
    const chatIds = chats.map((chat) => chat.id);
    let messages: any[] = [];
    if (chatIds.length > 0) {
      messages = await prisma.storedMessage.findMany({
        where: {
          chatId: { in: chatIds },
          lastModified: { gt: lastSyncedDate },
        },
      });
    }

    return NextResponse.json({ chats, messages });
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
