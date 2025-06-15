"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Chat } from "@/components/chat";
import { Sidebar } from "@/components/sidebar";
import { Button } from "./ui/button";
import { Share } from "lucide-react";
import { TooltipContent, TooltipTrigger, Tooltip } from "./ui/tooltip";
import { useNavigate, useParams } from "react-router";
import { usePersistentChat } from "@/hooks/usePersistentChat";
import { useEffect, useState } from "react";
import { modelId } from "@/types/models";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";

export default function Main() {
  const { id } = useParams();

  const title = useLiveQuery(async () => {
    if (!id) return undefined;
    await db.getChatById(id);
  });

  const nav = useNavigate();

  return (
    <SidebarProvider>
      <Sidebar nav={nav} />
      <SidebarInset className="flex h-screen flex-col overflow-y-auto">
        <header className="border-1 sticky top-0 flex shrink-0 items-center justify-between gap-2 border-b border-primary/35 bg-background py-1">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="mr-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <Share />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share (only current state)</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </header>
        <Chat id={id} />
      </SidebarInset>
    </SidebarProvider>
  );
}
