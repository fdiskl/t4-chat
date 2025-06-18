"use client";

import { db } from "@/lib/db";
import { loginWithGithub } from "@/lib/login";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

export default function Login() {
  const nav = useNavigate();

  const handleLogin = useCallback(async () => {
    try {
      const { token, user } = await loginWithGithub();

      await db.tokens.put({
        id: "auth",
        token,
        provider: "github",
        userId: String(user.id),
        login: user.login,
        avatarUrl: user.avatar_url,
      });

      nav("/chat");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. ");
    }
  }, []);

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mx-auto flex h-full w-full max-w-2xl flex-col items-center justify-center gap-y-2">
        <ArrowDown className="h-16 w-16 text-[#ad4783]" />
        <div className="flex flex-row items-center justify-center gap-x-2">
          <ArrowRight className="h-16 w-16 text-[#ad4783]" />
          <Button onClick={handleLogin}>Login with GitHub</Button>
          <ArrowLeft className="h-16 w-16 text-[#ad4783]" />
        </div>
        <ArrowUp className="h-16 w-16 text-[#ad4783]" />
      </div>
    </div>
  );
}
