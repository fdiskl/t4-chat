"use client";
import { ChatInput, ChatInputSubmit, ChatInputTextArea } from "@/components/ui/chat-input";
import { ChatMessage, ChatMessageAvatar, ChatMessageContent } from "@/components/ui/chat-message";
import { ChatMessageArea } from "@/components/ui/chat-message-area";
import { useChat } from "ai/react";
import { useEffect, type ComponentPropsWithoutRef } from "react";
import { ModelSelector } from "./ui/model-selector";
import { Button } from "./ui/button";
import { Globe, Paperclip, Search } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { usePersistentChat } from "@/hooks/usePersistentChat";
import { db } from "@/lib/db";

export function Chat({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  const { id } = useParams();

  const { messages, input, handleInputChange, handleSubmit, isLoading, nav } = usePersistentChat({
    id: id,
    model: "",
  });

  const handleSubmitMessage = async (e: React.KeyboardEvent | React.MouseEvent) => {
    if (isLoading) {
      return;
    }

    handleSubmit(e);
  };

  return (
    <div className="flex h-full flex-1 flex-col overflow-y-auto" {...props}>
      <ChatMessageArea scrollButtonAlignment="center">
        <div className="mx-auto w-full max-w-3xl space-y-4 px-4 py-8">
          {messages.length == 0 ? (
            <div className="mt-80 flex w-full items-center justify-center">
              <div className="mx-auto">
                <h1 className="text-2xl font-semibold">How can i help you today?</h1>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => {
                if (message.role !== "user") {
                  return (
                    <ChatMessage key={message.id} id={message.id}>
                      <ChatMessageContent content={message.content} className="max-w-3xl" />
                    </ChatMessage>
                  );
                }
                return (
                  <ChatMessage key={message.id} id={message.id} variant="bubble" type="outgoing">
                    <ChatMessageContent content={message.content} className="max-w-xl" />
                  </ChatMessage>
                );
              })}
            </>
          )}
        </div>
      </ChatMessageArea>
      <div className="mx-auto w-full max-w-3xl px-2 py-4">
        <ChatInput
          value={input}
          onChange={handleInputChange}
          onSubmit={handleSubmitMessage}
          loading={isLoading}
          onStop={stop}>
          <div className="flex w-full flex-col">
            <ChatInputTextArea placeholder="Type a message..." />
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-row gap-x-2">
                <ModelSelector onChange={() => {}} value="test" />
                <Button size="default" variant="outline">
                  <Globe />
                  Search
                </Button>
                <Button size="icon" variant="outline">
                  <Paperclip />
                </Button>
              </div>
              <ChatInputSubmit />
            </div>
          </div>
        </ChatInput>
      </div>
    </div>
  );
}
