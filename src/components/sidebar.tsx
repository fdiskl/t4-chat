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
import { MessageCircle, SquarePen } from "lucide-react";
import type { ComponentProps } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { Link, useNavigate } from "react-router";

export function Sidebar({ ...props }: ComponentProps<typeof SidebarPrimitive>) {
  const chats = useLiveQuery(() => db.getChats(), []);

  const nav = useNavigate();

  const newChatHandler = async () => {
    await db.deleteEmptyChats();
    const c = await db.createChat();
    nav(`/chat/${c.id}`);
  };

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
                    <Link to={`/chat/${chat.id}`}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {chat.title}
                    </Link>
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
