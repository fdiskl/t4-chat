import { PrismaClient } from "@/generated/prisma/edge";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { slug } = await req.json();

  if (!slug) {
    return new NextResponse("Please provide slug", { status: 400 });
  }

  try {
    const prisma = new PrismaClient();

    const s = await prisma.slug.findFirst({
      where: {
        slug: slug,
      },
      select: {
        chatId: true,
      },
    });

    if (!s || !s.chatId) {
      return new NextResponse("Invalid slug", { status: 400 });
    }

    console.log(s.chatId);

    const c = await prisma.chat.findFirst({
      where: {
        id: s.chatId,
        isDeleted: false,
        isShared: true,
      },
    });

    if (!c) {
      return new NextResponse("Couldn't find chat you are looking for", { status: 404 });
    }

    console.log(c.id);

    const msgs = await prisma.storedMessage.findMany({
      where: {
        chatId: c.id,
        isDeleted: false,
      },
    });
    console.log("shared msgs", msgs);

    return NextResponse.json(
      {
        chat: c,
        messages: msgs,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal", { status: 500 });
  }
}
