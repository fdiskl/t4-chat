"use client";

import { ChevronsUpDown, CloudDownloadIcon, LogIn, LogOut, Settings, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useCallback, useEffect, useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router";
import { db } from "@/lib/db";
import { liveQuery } from "dexie";
import { toast } from "sonner";
import { backupToServer, updateLocalData } from "@/lib/realdb/real";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const NotLoggedInDropdown = ({ nav }: { nav: NavigateFunction }) => {
  return (
    <>
      <DropdownMenuItem onClick={() => nav("/login")}>
        <LogIn />
        Log in
      </DropdownMenuItem>
    </>
  );
};

const LoggedInDropdown = ({ nav }: { nav: NavigateFunction }) => {
  const handleLogout = useCallback(async () => {
    try {
      await db.clearToken();
      nav("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed");
    }
  }, []);

  const handleBackup = async () => {
    try {
      let id = toast.info("Pulling....", { position: "bottom-left" });
      await updateLocalData();
      toast.dismiss(id);
      id = toast.success("Pushing...", { position: "bottom-left" });
      await backupToServer();
      toast.dismiss(id);
      id = toast.success("You are now in sync!", { position: "bottom-left" });

      await db.setLastSynced(new Date());
    } catch (e) {
      toast.error(String(e), { position: "bottom-left" });
    }
  };

  return (
    <>
      <DropdownMenuGroup>
        <Tooltip>
          <DropdownMenuItem onClick={() => handleBackup()} asChild className="cursor-pointer">
            <TooltipTrigger className="w-full">
              <CloudDownloadIcon />
              Sync
            </TooltipTrigger>
          </DropdownMenuItem>
          <TooltipContent>If you don't want to wait for background sync</TooltipContent>
        </Tooltip>

        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link to="/settings" className="w-full">
            <Settings />
            Settings
          </Link>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLogout}>
        <LogOut />
        Log out
      </DropdownMenuItem>
    </>
  );
};

export function NavUser() {
  const { isMobile } = useSidebar();

  const [user, setUser] = useState<{
    username?: string;
    avatarUrl?: string;
    userId?: string;
  } | null>(null);

  const nav = useNavigate();

  useEffect(() => {
    const subscription = liveQuery(() => db.getToken()).subscribe({
      next: (tokenRecord) => {
        if (tokenRecord) {
          setUser({
            username: tokenRecord.login,
            avatarUrl: tokenRecord.avatarUrl,
            userId: tokenRecord.userId,
          });
        } else {
          setUser(null);
        }
      },
      error: (err) => {
        console.error("Dexie liveQuery error:", err);
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.avatarUrl} alt={user?.username} />
                <AvatarFallback className="rounded-lg">
                  <User />
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {user ? user.username : "Not logged in"}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="start"
            sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.avatarUrl} alt={user?.username} />
                  <AvatarFallback className="rounded-lg">
                    <User />
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {user ? user.username : "Not logged in"}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user ? <LoggedInDropdown nav={nav} /> : <NotLoggedInDropdown nav={nav} />}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
