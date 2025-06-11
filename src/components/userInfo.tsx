"use client";

import { useState, useEffect, useCallback } from "react";
import { db } from "@/lib/db";
import { useRouter } from "next/navigation";
import { liveQuery } from "dexie";

export default function UserInfo() {
  const [user, setUser] = useState<{
    login?: string;
    avatarUrl?: string;
    userId?: string;
  } | null>(null);

  const router = useRouter();

  const test_logout = useCallback(async () => {
    try {
      await db.clearToken();
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed");
    }
  }, []);

  useEffect(() => {
    const subscription = liveQuery(() => db.getToken()).subscribe({
      next: (tokenRecord) => {
        if (tokenRecord) {
          setUser({
            login: tokenRecord.login,
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

  if (!user) return <div>No user logged in.</div>;

  return (
    <div>
      <h2>User Info</h2>
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={`${user.login}'s avatar`}
          width={48}
          height={48}
          style={{ borderRadius: "50%" }}
        />
      )}
      <p>
        <strong>Login:</strong> {user.login}
      </p>
      <p>
        <strong>User ID:</strong> {user.userId}
      </p>

      <button onClick={test_logout}>Log out</button>
    </div>
  );
}
