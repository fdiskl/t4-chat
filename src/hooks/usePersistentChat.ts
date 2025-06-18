import { db } from "@/lib/db";
import { FileiInfo } from "@/types/chat";
import { Chat, StoredMessage } from "@/types/database";
import { modelId } from "@/types/models";
import { Attachment, ChatRequestOptions, UIMessage } from "ai";
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
  attachments?: Attachment[];
  setAttachments?: (a: Attachment[]) => void;
}

export function usePersistentChat({
  id: chatId,
  model,
  attachments,
  setAttachments,
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
      systemPromptId: "default",
    },
    experimental_throttle: 50,
    initialMessages:
      storedMessages?.map((msg) => ({
        id: msg.id,
        content: msg.content,
        role: msg.role,
        experimental_attachments: msg.attachments,
      })) || [],
    onFinish: async (message) => {
      if (currentChat) {
        await persistMessage(
          message.content,
          "assistant",
          currentChat.id,
          model,
          message.experimental_attachments ?? [],
          message.id
        );
      }
    },
    keepLastMessageOnError: true,
    onError: (err) => {
      const errs = err.message.match("Sorry");
      if (errs && errs.length != 0) {
        toast.error(err.name, { description: err.message, position: "top-center" });
      } else {
        toast.error("Unexpected error happened", {
          description: "If this happened when you stopped the chat - everything is fine",
          position: "top-center",
        });
        console.error(err);
        return;
      }
    },
  });

  const persistMessage = useCallback(
    async (
      content: string,
      role: "user" | "assistant",
      chatId: string,
      model: modelId | "user",
      attachments: Attachment[],
      id?: string
    ): Promise<StoredMessage | null> => {
      try {
        const message = await db.addMessage(
          {
            chatId,
            content,
            role,
            model,
            attachments: attachments,
            isDeleted: false,
          },
          id
        );

        return message;
      } catch (error) {
        console.error(`Error persisting ${role} message:`, error);
        toast.error("Couldn't save message");
        return null;
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

        const keys = await db.getKeys();
        console.log("KEYS", keys);

        // Update the body with the determined system prompt
        const updatedBody = {
          systemPromptId,
          openaiKey: keys?.oai,
          openRouterKey: keys?.openrouter,
          model,
        };

        // Call original submit with updated body
        originalHandleSubmitRef.current(e, {
          body: updatedBody,
          experimental_attachments: attachments,
        });

        if (setAttachments) setAttachments([]);

        if (currentChat) {
          await persistMessage(input, "user", currentChat.id, "user", attachments ?? []);

          if (!currentChat.title) {
            let title = "";
            try {
              const titleResp = await fetch("/api/title", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  msg: input,
                  openaiKey: keys?.oai,
                  openRouterKey: keys?.openrouter,
                }),
              });

              if (titleResp.status != 200 || !titleResp.ok) {
                title = input.slice(0, 50) + (input.length > 50 ? "..." : "");
              } else {
                const data = await titleResp.json();
                console.log(data);
                if (data && data.result) {
                  title = String(data.result);
                } else {
                  title = input.slice(0, 50) + (input.length > 50 ? "..." : "");
                }
              }
            } catch (e) {
              console.error(e);
              title = input.slice(0, 50) + (input.length > 50 ? "..." : "");
            }

            await db.updateChatTitle(currentChat.id, title);
          }
        }
      } catch (error) {
        console.error("Error in handleSubmit:", error);
        setError(error instanceof Error ? error : new Error("Failed to process message"));
      }
    },
    [currentChat, chatId, input, persistMessage, attachments, model, nav, setAttachments]
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
