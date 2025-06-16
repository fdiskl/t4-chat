"use client";

import { db } from "@/lib/db";
import { liveQuery } from "dexie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";

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

  return (
    <div className="h-screen w-full">
      <div className="flex max-w-52 flex-col items-center justify-center">
        <Avatar className="h-40 w-40">
          <AvatarImage src={user?.avatarUrl} alt={user?.username} />
          <AvatarFallback className="rounded-lg">
            <User />
          </AvatarFallback>
        </Avatar>

        <h1 className="text-center text-2xl font-bold">{user?.username}</h1>
      </div>
    </div>
  );
}
