"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { NavUser } from "@/components/nav-user";
import { GitBranch, MessageCircle, Pin, Share2, SquarePen, TrashIcon } from "lucide-react";
import { useCallback, useEffect, type ComponentProps } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { Link, NavigateFunction, useLocation, useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import { backupToServer } from "@/lib/realdb/real";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export interface SidebarProps {
  nav: NavigateFunction;
  id?: string;
}

export function Sidebar({
  nav,
  id,
  ...props
}: ComponentProps<typeof SidebarPrimitive> & SidebarProps) {
  const chats = useLiveQuery(() => db.getChats(), []);

  const pathname = useLocation().pathname;

  const newChatHandler = async () => {
    await db.deleteEmptyChats();
    const c = await db.createChat();
    nav(`/chat/${c.id}`);
  };

  const newChatCallback = useCallback(() => {
    newChatHandler();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "o") {
        event.preventDefault();
        newChatHandler();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [newChatCallback]);

  const handleDeleteChat = useCallback(
    async (e: React.MouseEvent, chatId: string) => {
      e.preventDefault();
      e.stopPropagation();

      try {
        await db.deleteChat(chatId);
        await db.fixParents();
        if (pathname === `/chat/${chatId}`) {
          nav("/chat");
        }
      } catch (error) {
        console.error("Error deleting chat:", error);
      }
    },
    [pathname]
  );

  return (
    <SidebarPrimitive className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold">T0 chat</span>
            </div>
          </div>
          {/* New Chat Button */}
          <div className="w-full px-2">
            <Button className="w-full" onClick={newChatCallback}>
              New chat
            </Button>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col gap-4">
          {/* Recent Chats */}
          <SidebarGroup>
            <SidebarGroupLabel>Recent</SidebarGroupLabel>
            <SidebarMenu>
              {chats?.map((chat) => (
                <SidebarMenuItem
                  key={chat.id}
                  className={cn({
                    "bg-muted": chat.id === id,
                  })}>
                  <SidebarMenuButton className="w-full justify-start gap-1" asChild>
                    <div
                      className={cn("group flex w-full flex-row items-center", {
                        "pl-0": chat.parentId != undefined || chat.isShared,
                      })}>
                      {/* Thread Button (if present) */}
                      {chat.parentId && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="icon" variant="ghost" asChild>
                              <Link to={`/chat/${chat.parentId}`}>
                                <GitBranch className="h-8 w-8 text-white/50" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Go to original chat</TooltipContent>
                        </Tooltip>
                      )}

                      {/* Shared Button (if present) */}
                      {chat.isShared && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <Share2 className="h-8 w-8 text-white/50" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>This chat is shared</TooltipContent>
                        </Tooltip>
                      )}

                      {/* Title (truncated) */}
                      <Link
                        to={`/chat/${chat.id}`}
                        className="flex min-w-0 flex-1 items-center overflow-hidden">
                        <span className="truncate">{chat.title}</span>
                      </Link>

                      {/* Delete Button (always at right) */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-2 text-white/70 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:text-red-600">
                            <TrashIcon />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogTitle>Are you sure?</DialogTitle>
                          <div className="flex flex-row gap-x-1">
                            Are you sure you want to{" "}
                            <span className="inline text-red-400">delete</span>{" "}
                          </div>
                          <span className="italic">"{chat.title ?? "untitled"}"?</span>{" "}
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="secondary">Cancel</Button>
                            </DialogClose>

                            <Button
                              variant="destructive"
                              onClick={(e) => handleDeleteChat(e, chat.id)}>
                              Delete
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </div>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </SidebarPrimitive>
  );
}
