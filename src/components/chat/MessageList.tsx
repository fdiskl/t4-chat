"use client";
import { Message } from "ai";
import React from "react";
import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
}

function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      {isLoading && (
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full"></span>
        </span>
      )}
    </div>
  );
}

export default MessageList;
