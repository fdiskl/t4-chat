import { ChatInput, ChatInputSubmit, ChatInputTextArea } from "@/components/ui/chat-input";
import { ChatMessage, ChatMessageContent } from "@/components/ui/chat-message";
import { ChatMessageArea } from "@/components/ui/chat-message-area";
import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { ModelSelector } from "./ui/model-selector";
import { Button } from "./ui/button";
import { Copy, GitBranch, Globe, Paperclip, RefreshCw } from "lucide-react";
import { usePersistentChat, usePersistentChatMessages } from "@/hooks/usePersistentChat";
import { toast } from "sonner";
import { idToModelMap, modelId } from "@/types/models";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { UIMessage } from "ai";

export interface ChatProps {
  id: string | undefined;
}

const MessageList = ({ id }: { id?: string }) => {
  const { messages, reload } = usePersistentChatMessages({ id });

  if (messages.length === 0) {
    return (
      <div className="mt-80 flex w-full items-center justify-center">
        <div className="mx-auto">
          <h1 className="text-2xl font-semibold">How can i help you today?</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      {messages.map((message) => {
        if (message.role !== "user") {
          return (
            <div key={message.id}>
              <ChatMessage id={message.id}>
                <ChatMessageContent content={message.content} className="max-w-3xl" />
              </ChatMessage>

              <div className="mt-2 flex flex-row items-center justify-start gap-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={async () => {
                    // TODO: make anim instead
                    try {
                      await navigator.clipboard.writeText(message.content);
                      toast.success("Copied");
                    } catch (e) {
                      console.error(e);
                      toast.error("Couldn't copy");
                    }
                  }}>
                  <Copy />
                </Button>

                <Button variant="outline" size="icon" onClick={() => reload()}>
                  <RefreshCw />
                </Button>

                <Button variant="outline" size="icon">
                  <GitBranch />
                </Button>

                <span className="text-base text-white/80">
                  <ModelTypeByMsgId id={message.id} />
                </span>
              </div>
            </div>
          );
        }
        return (
          <ChatMessage key={message.id} id={message.id} variant="bubble" type="outgoing">
            <ChatMessageContent content={message.content} className="max-w-xl" />
          </ChatMessage>
        );
      })}
    </>
  );
};

const ModelTypeByMsgId = ({ id }: { id: string }) => {
  const msg = useLiveQuery(async () => {
    console.log(id);
    return await db.getMsgById(id);
  }, [id]);

  if (!msg) return null;

  return <div>{idToModelMap[msg.model].name}</div>;
};

export const InputWrapper = ({
  model,
  setModel,
  id,
}: {
  model: modelId;
  setModel: (a: modelId) => void;
  id?: string;
}) => {
  const { isLoading, handleSubmit, input, handleInputChange, status } = usePersistentChat({
    id: id,
    model: model,
  });

  return (
    <ChatInput
      value={input}
      onChange={handleInputChange}
      onSubmit={handleSubmit}
      loading={isLoading}
      onStop={stop}>
      <div className="flex w-full flex-col">
        <ChatInputTextArea placeholder="Type a message..." />
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-row gap-x-2">
            <ModelSelector
              value={model}
              onChange={(v) => {
                console.log(v);
                setModel(v);
              }}
            />
            <Button size="default" variant="outline">
              <Globe />
              Search
            </Button>
            <Button size="icon" variant="outline">
              <Paperclip />
            </Button>
          </div>
          <ChatInputSubmit loading={status === "streaming" || status === "submitted"} />
        </div>
      </div>
    </ChatInput>
  );
};

export const Chat: React.FC<ChatProps> = ({ id }) => {
  const [model, setModel] = useState<modelId>("4.1-nano");

  return (
    <div className="flex h-full flex-1 flex-col overflow-y-auto">
      <ChatMessageArea scrollButtonAlignment="center">
        <div className="mx-auto w-full max-w-3xl space-y-4 px-4 py-8">
          <MessageList id={id} />
        </div>
      </ChatMessageArea>
      <div className="mx-auto w-full max-w-3xl px-2 py-4">
        <InputWrapper id={id} model={model} setModel={setModel} />
      </div>
    </div>
  );
};
