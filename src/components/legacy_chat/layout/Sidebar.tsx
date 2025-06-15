"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import { GitBranch, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export function Sidebar() {
  const chats = useLiveQuery(() => db.getChats(), []);
  const pathname = usePathname();
  const router = useRouter();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  const handleNewChat = async () => {
    const newChat = await db.createChat();
    router.push(`/chat/${newChat.id}`);
  };

  const handleDeleteChat = useCallback(
    async (e: React.MouseEvent, chatId: string) => {
      e.preventDefault();
      e.stopPropagation();

      try {
        await db.deleteChat(chatId);
        if (pathname === `/chat/${chatId}`) {
          const newChat = await db.createChat();
          router.push(`/chat/${newChat.id}`);
        }
      } catch (error) {
        console.error("Error deleting chat:", error);
      }
    },
    [pathname, router]
  );

  return (
    <div className="flex h-full w-full flex-col">
      <div className="p-4">
        <h1 className="font-display text-xl font-bold">TODO</h1>
      </div>
      <div className="p-4">
        <Button onClick={handleNewChat} className="w-full justify-start gap-2">
          <Plus className="h-5 w-5" />
          New Chat
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <nav className="space-y-2" aria-label="Chat History">
          {chats?.map((chat) => (
            <Link
              key={chat.id}
              href={`/chat/${chat.id}`}
              className={`group flex items-center rounded-lg px-3 py-2 text-sm transition-colors`}>
              <div className="flex-1">
                <span className="line-clamp-1 block font-medium">
                  {chat.title || "New Chat"}
                  {chat.id}
                </span>
              </div>
              <button
                onClick={(e) => handleDeleteChat(e, chat.id)}
                className="invisible ml-2 rounded p-1 group-hover:visible hover:text-red-500"
                aria-label="Delete chat">
                <Trash className="h-4 w-4" />
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
