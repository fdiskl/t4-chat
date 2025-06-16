import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/edge";
import { encryptApiKey } from "@/lib/keys";
import crypto from "crypto";

const secretKey = process.env.API_KEY_SECRET as string;

export async function POST(req: Request) {
  const { openAiKey, openrouterKey, tok } = await req.json();

  if (!tok || !tok.userId) {
    return new NextResponse("Please log in", { status: 401 });
  }

  if (!openAiKey && !openrouterKey) {
    return new NextResponse("No keys provided", { status: 400 });
  }

  const prisma = new PrismaClient();

  let openaires = "";
  let openrouterRes = "";

  if (openAiKey) {
    openaires = encryptApiKey(openAiKey, getKey());
  }

  if (openrouterKey) {
    openrouterRes = encryptApiKey(openrouterRes, getKey());
  }

  const keys = await prisma.keys.findUnique({
    where: {
      userId: tok.userId,
    },
  });

  if (keys === null) {
    await prisma.keys.create({
      data: {
        userEmail: tok.userEmail ?? "",
        OpenAiKey: openaires,
        OpenRouterKey: openrouterRes,
        userId: tok.userId,
      },
    });
  } else {
    await prisma.keys.update({
      where: {
        id: keys.id,
      },
      data: {
        userEmail: tok.userEmail ?? "",
        OpenAiKey: openaires,
        OpenRouterKey: openrouterRes,
        userId: tok.userId,
      },
    });
  }

  return NextResponse.json(
    {
      openAiKey: openaires,
      openrouterKey: openrouterRes,
    },
    {
      status: 200,
    }
  );
}

function getKey() {
  return crypto.createHash("sha256").update(secretKey).digest();
}
