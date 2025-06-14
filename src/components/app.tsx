"use client";

import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./main";
import Login from "./login";

export default function App() {
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
