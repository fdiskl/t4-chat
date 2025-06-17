import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@/generated/prisma/edge";

const f = createUploadthing();

export const fileRouter = {
  msgAttachment: f({
    // idk
    image: { maxFileSize: "8MB", maxFileCount: 5 },
    pdf: { maxFileSize: "8MB", maxFileCount: 3 },
    text: { maxFileSize: "1MB", maxFileCount: 5 },
  })
    .middleware(async ({ req }) => {
      try {
        const { token } = await req.json();

        if (!token) throw new UploadThingError("unauthorized");

        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        let id: string | undefined;

        if (typeof decoded === "object" && decoded !== null && "id" in decoded) {
          id = (decoded as JwtPayload & { id?: string }).id;
        }

        if (!id) throw new UploadThingError("Unauthorized");

        return { userId: id };
      } catch (e) {
        console.error(e);
        throw new UploadThingError("Something went wrong");
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        const prisma = new PrismaClient();

        const d = await prisma.userFiles.findUnique({
          where: {
            userId: metadata.userId,
          },
          select: {
            FileUrls: true,
          },
        });

        if (!d) {
          await prisma.userFiles.create({
            data: {
              userId: metadata.userId,
              FileUrls: [file.ufsUrl],
            },
          });
        } else {
          await prisma.userFiles.update({
            where: {
              userId: metadata.userId,
            },
            data: {
              FileUrls: [file.ufsUrl, ...d.FileUrls],
            },
          });
        }

        return { file: file.ufsUrl };
      } catch (e) {
        console.error(e);
        throw new UploadThingError("Something went wrong");
      }
    }),
};
