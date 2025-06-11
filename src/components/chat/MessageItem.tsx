import { MarkdownContent } from "@/components/markdown/markdown-chunker";
import { cn } from "@/lib/utils";
import { Message } from "ai";
import { memo } from "react";

const MessageItem = memo(function MessageItem({ message }: { message: Message }) {
  const containerClassName = cn({
    "px-4 py-2 rounded-lg bg-zinc-800": message.role === "user",
    "bg-transparent ": message.role === "assistant",
  });

  return (
    <div className={containerClassName}>
      <MarkdownContent content={message.content} />
    </div>
  );
});

export default MessageItem;
