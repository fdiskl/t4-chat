"use client";

import { db } from "@/lib/db";
import { loginWithGithub } from "@/lib/login";
import { useCallback } from "react";
import { useNavigate } from "react-router";

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
    <div className="flex flex-col">
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
}
