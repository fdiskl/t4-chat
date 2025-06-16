"use client";

import { db } from "@/lib/db";
import { liveQuery } from "dexie";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowLeft, LogOutIcon, User } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Settings() {
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

  const handleLogout = useCallback(async () => {
    try {
      await db.clearToken();
      nav("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed");
    }
  }, []);

  if (!user) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-y-5">
        <h1 className="text-2xl">Not logged in :( </h1>
        <Link to="/login" className="text-blue-400 underline">
          Go to /login
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed max-h-screen w-full flex-col overflow-y-auto py-10">
      <header className="mx-auto flex w-full max-w-[900px] justify-between">
        <Button variant="ghost" size="lg" onClick={() => nav("/chat")}>
          <ArrowLeft /> Back to chat
        </Button>

        <Button variant="ghost" size="lg" onClick={handleLogout}>
          <LogOutIcon />
          Sign out
        </Button>
      </header>

      <div className="mx-auto flex max-w-[900px] items-start justify-start gap-x-10 px-20 py-10">
        {/* Avatar section */}
        <div className="flex max-w-52 flex-col items-center justify-center">
          <Avatar className="h-40 w-40">
            <AvatarImage src={user?.avatarUrl} alt={user?.username} />
            <AvatarFallback className="rounded-lg">
              <User />
            </AvatarFallback>
          </Avatar>
          <h1 className="text-center text-2xl font-bold">{user?.username}</h1>
        </div>

        {/* Settings or other content */}
        <div>Other things</div>
      </div>
    </div>
  );
}
