"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/chat");
  }, [router]);

  return <>Regirecting to /chat ...</>;
}
