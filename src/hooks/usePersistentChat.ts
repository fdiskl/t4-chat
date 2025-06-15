import { db } from "@/lib/db";
import { Chat, StoredMessage } from "@/types/database";
import { modelId } from "@/types/models";
import { ChatRequestOptions, UIMessage } from "ai";
import { useChat } from "ai/react";
import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { useCallback, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { toast } from "sonner";

export interface usePersistentChatReturnType {
  input: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.KeyboardEvent | React.MouseEvent) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
  currentChat: Chat | undefined;
  nav: NavigateFunction;
  setInput: (a: string) => void;
  status: "error" | "submitted" | "streaming" | "ready";
  stop: () => void;
  reload: () => void;
  messages: UIMessage[];
}

export interface PersistentChatOptions {
  id?: string;
  model: modelId;
}

export function usePersistentChat({
  id: chatId,
  model,
}: PersistentChatOptions): usePersistentChatReturnType {
  const [error, setError] = useState<Error | null>(null);
  const nav = useNavigate();

  const currentChat = useLiveQuery(async () => {
    if (!chatId) return undefined;
    return await db.chats.get(chatId);
  }, [chatId]);

  const storedMessages = useLiveQuery(async () => {
    if (!chatId) return [];
    return await db.getChatMessages(chatId);
  }, [chatId]);

  const {
    input,
    handleInputChange: originalHandleInputChange,
    handleSubmit: originalHandleSubmit,
    setInput,
    status,
    stop,
    messages,
    reload,
  } = useChat({
    api: "/api/chat",
    id: chatId,
    body: {
      model,
      systemPromptId: "default",
    },
    initialMessages:
      storedMessages?.map((msg) => ({
        id: msg.id,
        content: msg.content,
        role: msg.role,
      })) || [],
    onFinish: async (message) => {
      if (currentChat) {
        await persistMessage(message.content, "assistant", currentChat.id, model, message.id);
      }
    },
    onError: (err) => {
      toast.error(String(err));
    },
  });

  const persistMessage = useCallback(
    async (
      content: string,
      role: "user" | "assistant",
      chatId: string,
      model: modelId | "user",
      id?: string
    ): Promise<StoredMessage> => {
      try {
        const message = await db.addMessage(
          {
            chatId,
            content,
            role,
            model,
          },
          id
        );

        console.log("persisting msg");

        return message;
      } catch (error) {
        console.error(`Error persisting ${role} message:`, error);
        throw error;
      }
    },
    []
  );

  const determineSystemPrompt = (content: string): string => {
    const lowerContent = content.toLowerCase();

    // Check for programming-related keywords
    if (
      lowerContent.includes("code") ||
      lowerContent.includes("programming") ||
      lowerContent.includes("function") ||
      lowerContent.includes("bug") ||
      lowerContent.includes("error")
    ) {
      return "programmer";
    }

    // Check for math-related keywords
    if (
      lowerContent.includes("math") ||
      lowerContent.includes("calculate") ||
      lowerContent.includes("equation") ||
      lowerContent.includes("solve")
    ) {
      return "math";
    }

    return "default";
  };

  const originalHandleInputChangeRef = React.useRef(originalHandleInputChange);
  originalHandleInputChangeRef.current = originalHandleInputChange;

  const originalHandleSubmitRef = React.useRef(originalHandleSubmit);
  originalHandleSubmitRef.current = originalHandleSubmit;

  const handleSubmit = useCallback(
    async (e: React.KeyboardEvent | React.MouseEvent) => {
      e.preventDefault();

      if (!input.trim()) return;

      try {
        setError(null);

        if (!chatId) {
          const newChat = await db.createChat();
          nav(`/chat/${newChat.id}`);
          return;
        }

        // Determine system prompt based on input content
        const systemPromptId = determineSystemPrompt(input);

        // Update the body with the determined system prompt
        const updatedBody = {
          model,
          systemPromptId,
        };

        // Call original submit with updated body
        originalHandleSubmitRef.current(e, { body: updatedBody });

        if (currentChat) {
          await persistMessage(input, "user", currentChat.id, "user");

          if (!currentChat.title) {
            // TODO : gen title
            const title = input.slice(0, 50) + (input.length > 50 ? "..." : "");
            await db.updateChatTitle(currentChat.id, title);
          }
        }
      } catch (error) {
        console.error("Error in handleSubmit:", error);
        setError(error instanceof Error ? error : new Error("Failed to process message"));
      }
    },
    [currentChat, chatId, input, persistMessage]
  );

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      originalHandleInputChangeRef.current(e);
    },
    []
  );

  const isLoading = currentChat === undefined && !!chatId;

  return {
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    currentChat,
    setInput,
    nav,
    status,
    stop,
    messages,
    reload,
  };
}
