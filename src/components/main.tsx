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
import { Plus } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { usePersistentChat } from "@/hooks/usePersistentChat";
import { useCallback, useEffect, useState } from "react";
import { modelId } from "@/types/models";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { toast } from "sonner";
import { backupToServer, updateLocalData } from "@/lib/realdb/real";
import { setOptions } from "marked";
import Share from "./share";

export default function Main() {
  const { id } = useParams();

  const [open, setOpen] = useState(true);

  const [shared, setIsShared] = useState(false);

  const changeIsOpen = useCallback((o: boolean) => {
    db.setIsOpen(o);
    setOpen(o);
  }, []);

  const getFirstIsOpen = async () => {
    setOpen(await db.getIsOpen());
  };

  const getIsShared = async () => {
    if (!id) {
      setIsShared(false);
      return;
    }
    const c = await db.getChatById(id);
    if (!c) {
      setIsShared(false);
      return;
    }

    setIsShared(c.isShared);
  };

  useEffect(() => {
    getIsShared();
  }, [id, getIsShared]);

  useEffect(() => {
    getFirstIsOpen();
  }, [getFirstIsOpen]);

  const newChat = async () => {
    await db.deleteEmptyChats();
    const c = await db.createChat();
    nav(`/chat/${c.id}`);
  };

  const backup = async () => {
    try {
      const tok = await db.getToken();
      if (!tok) return;
      await updateLocalData();
      await backupToServer();
      await db.setLastSynced(new Date());
    } catch (e) {
      toast.error("Couldn't sync your data in background :(", { position: "top-center" });
      console.error(e);
    }
  };

  useEffect(() => {
    backup();

    const interval = setInterval(
      () => {
        backup();
      },
      10 * 60 * 1000
    ); // 10 minutes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!id) {
      newChat();
    }
  }, [id, newChat]);

  const title = useLiveQuery(async () => {
    if (!id) return "New chat";
    const c = await db.getChatById(id);
    return c ? c.title : "New chat";
  }, [id]);

  const nav = useNavigate();

  return (
    <SidebarProvider open={open} onOpenChange={changeIsOpen}>
      <Sidebar nav={nav} id={id} />
      <SidebarInset className="flex h-screen flex-col overflow-y-auto">
        <header className="border-1 sticky top-0 flex shrink-0 items-center justify-between gap-2 border-b border-primary/35 bg-background py-1">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            {!open && (
              <>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={newChat}>
                  <Plus />
                </Button>
              </>
            )}
            <Separator orientation="vertical" className="h-4 border-primary" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">{title ?? "New chat"}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="mr-2">
            <Share id={id} title={title} />
          </div>
        </header>
        <Chat id={id} isShared={shared} />
      </SidebarInset>
    </SidebarProvider>
  );
}
