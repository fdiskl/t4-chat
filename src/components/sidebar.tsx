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
} from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { NavUser } from "@/components/nav-user";
import { MessageCircle, Pin, SquarePen, TrashIcon } from "lucide-react";
import { useCallback, type ComponentProps } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { Link, NavigateFunction, useLocation, useNavigate } from "react-router";

export interface SidebarProps {
  nav: NavigateFunction;
}

export function Sidebar({ nav, ...props }: ComponentProps<typeof SidebarPrimitive> & SidebarProps) {
  const chats = useLiveQuery(() => db.getChats(), []);

  const pathname = useLocation().pathname;

  const newChatHandler = async () => {
    await db.deleteEmptyChats();
    const c = await db.createChat();
    nav(`/chat/${c.id}`);
  };

  const handleDeleteChat = useCallback(
    async (e: React.MouseEvent, chatId: string) => {
      e.preventDefault();
      e.stopPropagation();

      try {
        await db.deleteChat(chatId);
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
              <span className="text-lg font-semibold">Best AI chat app</span>
            </div>
          </div>
          {/* New Chat Button */}
          <div className="w-full px-2">
            <Button className="w-full" onClick={newChatHandler}>
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
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton className="w-full justify-start" asChild>
                    <div className="group flex w-full flex-row items-center justify-between">
                      <Link to={`/chat/${chat.id}`} className="flex w-full flex-row items-center">
                        {chat.title}
                      </Link>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => handleDeleteChat(e, chat.id)}
                        className="text-white/70 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 hover:text-red-600">
                        <TrashIcon />
                      </Button>
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
