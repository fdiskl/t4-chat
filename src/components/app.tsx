"use client";

import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./main";
import Login from "./login";
import { useEffect, useState } from "react";

export default function App() {
  const [isAlreadyClient, setIsAlreadyClient] = useState(false);

  useEffect(() => {
    setIsAlreadyClient(true);
  }, []);

  if (!isAlreadyClient) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="chat" element={<Main />} />
        <Route path="chat/:id" element={<Main />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
