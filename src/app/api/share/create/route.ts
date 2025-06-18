import { PrismaClient } from "@/generated/prisma/edge";
import { Chat } from "@/types/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { chat: _c, messages: _msgs, tok } = await req.json();

  const c: Chat = _c;

  if (!tok || !tok.userId) {
    return new NextResponse("Please log in", { status: 401 });
  }

  try {
    const prisma = new PrismaClient();

    const result = await prisma.$transaction(async (tx) => {
      const chat = await tx.chat.create({
        data: {
          empty: c.empty,
          userEmail: "",
          userId: tok.userId,
          isShared: true,
          lastSynced: new Date(),
          title: c.title,
        },
        select: { id: true },
      });

      const messages = await Promise.all(
        _msgs.map((m: any) =>
          tx.storedMessage.create({
            data: {
              chatId: chat.id,
              content: m.content,
              role: m.role,
              created_at: m.created_at ? new Date(m.created_at) : new Date(),
              lastModified: m.lastModified
                ? new Date(m.lastModified)
                : m.created_at
                  ? new Date(m.created_at)
                  : new Date(),
              model: m.model,
              isDeleted: m.isDeleted ?? false,
            },
            select: { id: true },
          })
        )
      );

      return { chatId: chat.id, messageIds: messages.map((msg) => msg.id) };
    });

    return NextResponse.json(
      {
        chatId: result.chatId,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal", { status: 500 });
  }
}
