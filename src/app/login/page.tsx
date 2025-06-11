"use client";

import { useCallback } from "react";
import { db } from "@/lib/db";
import { loginWithGithub } from "@/lib/login";
import UserInfo from "@/components/userInfo";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

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

      router.push("/");
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
