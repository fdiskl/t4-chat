"use client";

import { db } from "@/lib/db";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

export default function Shared() {
  const { slug } = useParams();

  const nav = useNavigate();

  if (!slug) {
    nav("/chat");
  }

  const handleSharedChat = async () => {
    try {
      const resp = await fetch("/api/share/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
        }),
      });

      if (!resp.ok) {
        toast.error("Something went wrong", {
          position: "top-center",
        });
        nav(`/chat`);
      }

      const { chat, messages } = await resp.json();

      console.log(messages);

      await db.createOrUpdateChat(chat.id, chat);
      for (const m of messages) {
        await db.createOrUpdateMsg(m.id, m);
      }

      toast.success("Copied shared chat", {
        description: "Redirecting...",
        position: "top-center",
      });

      nav(`/chat/${chat.id}`);
    } catch (e) {
      let errorMsg = "Unknown error";
      if (e instanceof Error) {
        errorMsg = e.message;
      } else if (typeof e === "string") {
        errorMsg = e;
      } else {
        errorMsg = JSON.stringify(e);
      }
      toast.error("Something went wrong", {
        description: errorMsg,
        position: "top-center",
      });
      nav(`/chat`);
    }
  };

  useEffect(() => {
    handleSharedChat();
  }, [slug]);

  return (
    <div className="h-screen w-full">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-y-6 text-center">
        <h1 className="text-xl font-bold">Downloading shared chat...</h1>
        <Loader2 className="h-16 w-16 animate-spin" />
        <h2 className="text-lg font-semibold text-secondary-foreground">
          This can take a minute...
        </h2>
        <span className="text-md -mt-4 text-muted-foreground">Don't close this page please</span>
      </div>
    </div>
  );
}
