"use client";

import { cn } from "@/lib/utils";
import { Message } from "ai";
import { memo } from "react";
import { MarkdownContent } from "../ui/markdown-content";

const MessageItem = memo(function MessageItem({
  message,
  chatId,
}: {
  message: Message;
  chatId: string;
}) {
  const containerClassName = cn({
    "px-4 py-2 rounded-lg bg-zinc-800": message.role === "user",
    "bg-transparent ": message.role === "assistant",
  });

  return (
    <div className={containerClassName}>
      <MarkdownContent id={message.id} content={message.content} />
    </div>
  );
});

export default MessageItem;
