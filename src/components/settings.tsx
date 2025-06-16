"use client";

import { db } from "@/lib/db";
import { liveQuery } from "dexie";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowLeft, LogOutIcon, User } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { toast } from "sonner";

export function Settings() {
  const [oaiKey, setOaiKey] = useState("");
  const [orouterKey, setOrouterKey] = useState("");

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

  const handleApiKeySave = useCallback(async () => {
    const tok = await db.getToken();
    if (!tok) {
      toast.error("Not authenticated");
    }

    if (oaiKey === "" && orouterKey === "") {
      toast.error("Please provide keys");
    }

    let obj = {};
    if (oaiKey) {
      obj = {
        openAiKey: oaiKey,
      };
    }

    if (orouterKey) {
      obj = {
        ...obj,
        openrouterKey: orouterKey,
      };
    }

    try {
      const resp = await fetch("/api/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tok, ...obj }),
      });

      if (!resp.ok) {
        toast.error("Couldn't save API keys, sorry");
      }

      const data = await resp.json();

      const { openAiKey: oaiRes, openrouterKey: orouterRes } = data;

      if (oaiRes && orouterRes) {
        await db.setKeys(oaiRes, orouterRes);
        toast.success("API keys saved!", { position: "top-center" });
      } else if (oaiRes) {
        await db.setKeys(oaiRes);
        toast.success("API keys saved!", { position: "top-center" });
      } else if (orouterRes) {
        await db.setKeys(undefined, orouterRes);
        toast.success("API keys saved!", { position: "top-center" });
      } else {
        toast.error("Couldn't save API keys, sorry");
      }
    } catch (e) {
      toast.error("Couldn't save API keys, sorry");
    }
  }, [oaiKey, orouterKey]);

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
        <div className="w-full">
          <h2 className="mb-2 text-2xl font-semibold">Manage your API keys:</h2>
          <div className="flex w-full flex-col items-end justify-end gap-y-2">
            <div className="flex w-full flex-col gap-y-2">
              <span>OpenAI key</span>
              <Input
                placeholder="***************"
                value={oaiKey}
                onChange={(e) => setOaiKey(e.target.value)}
                type="password"
              />
            </div>
            <div className="flex w-full flex-col gap-y-2">
              <span>OpenRouter key</span>
              <Input
                placeholder="***************"
                value={orouterKey}
                onChange={(e) => setOrouterKey(e.target.value)}
                type="password"
              />
            </div>

            <p className="text-muted-foreground">(We will encrypt your keys)</p>

            <Button className="mt-2 w-1/2 bg-primary/85" onClick={handleApiKeySave}>
              Save
            </Button>
          </div>
        </div>
      </div>
      <Separator className="mx-auto my-4 max-w-[900px]" />
    </div>
  );
}
