"use client";

import { ChatInput, ChatInputSubmit, ChatInputTextArea } from "@/components/ui/chat-input";
import { ChatMessage, ChatMessageContent } from "@/components/ui/chat-message";
import { ChatMessageArea } from "@/components/ui/chat-message-area";
import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { ModelSelector } from "./ui/model-selector";
import { Button } from "./ui/button";
import { Copy, GitBranch, Globe, Loader2Icon, Paperclip, RefreshCw, X } from "lucide-react";
import { usePersistentChat } from "@/hooks/usePersistentChat";
import { toast } from "sonner";
import { idToModelMap, modelId } from "@/types/models";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { UIMessage } from "ai";
import { useNavigate } from "react-router";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { liveQuery } from "dexie";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { FileiInfo } from "@/types/chat";

export interface ChatProps {
  id: string | undefined;
}

const ModelTypeByMsgId = ({ id }: { id: string }) => {
  const msg = useLiveQuery(async () => {
    console.log(id);
    return await db.getMsgById(id);
  }, [id]);

  if (!msg) return null;

  return <div>{idToModelMap[msg.model].name}</div>;
};

export const Chat: React.FC<ChatProps> = ({ id }) => {
  const [model, setModel] = useState<modelId>("4.1-nano");

  const [files, setFiles] = useState<FileiInfo[]>([]);

  const { isLoading, handleSubmit, input, handleInputChange, status, messages, reload } =
    usePersistentChat({
      id: id,
      model: model,
    });

  const nav = useNavigate();

  useEffect(() => {
    const getModel = async () => {
      const m = await db.getLastModel();
      if (m) {
        setModel(m);
      }
    };

    getModel();
  }, []);

  const handleModelChange = async (m: modelId) => {
    setModel(m);
    await db.setLastModel(m);
  };

  const handleBranchButton = async (msgId: string) => {
    if (!id) {
      toast.error("Can't branch off if not in chat");
      return;
    }

    try {
      const newChatId = await db.copyChat(id, msgId);

      nav(`/chat/${newChatId}`);

      toast.success("New branch created!", {
        position: "top-center",
      });
    } catch (e) {
      toast.error(String(e), { position: "top-center" });
    }
  };

  const [tok, setTok] = useState<string | null>(null);

  useEffect(() => {
    const subscription = liveQuery(() => db.getToken()).subscribe({
      next: (tokenRecord) => {
        if (tokenRecord) {
          setTok(tokenRecord.token);
        } else {
          setTok(null);
        }
      },
      error: (err) => {
        console.error("Dexie liveQuery error:", err);
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="flex h-full flex-1 flex-col overflow-y-auto">
      <ChatMessageArea scrollButtonAlignment="center">
        <div className="mx-auto w-full max-w-3xl space-y-4 px-4 py-8">
          {messages.length === 0 ? (
            <>
              <div className="mt-80 flex w-full items-center justify-center">
                <div className="mx-auto">
                  <h1 className="text-2xl font-semibold">How can i help you today?</h1>
                </div>
              </div>
            </>
          ) : (
            <>
              {messages.map((message, idx) => {
                const isLastMessage = idx === messages.length - 1;

                if (message.role !== "user") {
                  return (
                    <div key={message.id}>
                      <ChatMessage id={message.id}>
                        <ChatMessageContent content={message.content} className="max-w-3xl" />
                      </ChatMessage>

                      {!(isLastMessage && (status == "streaming" || status == "submitted")) && (
                        <>
                          {/* BUTTONS */}
                          <div className="mt-2 flex flex-row items-center justify-start gap-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={async () => {
                                // TODO: make anim instead
                                try {
                                  await navigator.clipboard.writeText(message.content);
                                  toast.success("Copied", { position: "top-center" });
                                } catch (e) {
                                  console.error(e);
                                  toast.error("Couldn't copy", { position: "top-center" });
                                }
                              }}>
                              <Copy />
                            </Button>

                            {isLastMessage && (
                              <Button variant="outline" size="icon" onClick={() => reload()}>
                                <RefreshCw />
                              </Button>
                            )}

                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleBranchButton(message.id)}>
                              <GitBranch />
                            </Button>

                            <span className="text-base text-white/80">
                              <ModelTypeByMsgId id={message.id} />
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  );
                }
                return (
                  <ChatMessage key={message.id} id={message.id} variant="bubble" type="outgoing">
                    <ChatMessageContent content={message.content} className="max-w-xl" />
                  </ChatMessage>
                );
              })}

              {status === "submitted" && (
                <div>
                  <Loader2Icon className="h-10 w-10 animate-spin text-muted-foreground" />
                </div>
              )}
            </>
          )}
        </div>
      </ChatMessageArea>
      <div className="mx-auto w-full max-w-3xl px-2 py-4">
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
                <ModelSelector value={model} onChange={(v) => handleModelChange(v)} />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="icon" variant="outline">
                      <Paperclip />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Upload attachments</DialogTitle>
                    </DialogHeader>
                    <CustomUploadButton token={tok} setFiles={setFiles} />
                  </DialogContent>
                </Dialog>

                {files.map((f) => (
                  <div key={f.url} className="flex h-full flex-row items-center justify-center">
                    <Badge variant="secondary">
                      <button
                        onClick={() => {
                          setFiles(files.filter((ff) => ff.url !== f.url));
                        }}>
                        <X className="h-4 w-4" />
                      </button>
                      {f.name}
                    </Badge>
                  </div>
                ))}
              </div>
              <ChatInputSubmit
                loading={status === "streaming" || status === "submitted"}
                onStop={stop}
              />
            </div>
          </div>
        </ChatInput>
      </div>
    </div>
  );
};

function CustomUploadButton({
  token,
  setFiles,
}: {
  token: string | null;
  setFiles: (r: FileiInfo[]) => void;
}) {
  return (
    <div>
      <UploadDropzone
        disabled={token === null}
        endpoint="msgAttachment"
        onClientUploadComplete={(res) => {
          toast.success("Successful upload", { position: "top-center" });

          const r: FileiInfo[] = res.map((rr) => {
            return {
              name: rr.name,
              url: rr.ufsUrl,
            };
          });

          setFiles(r);
        }}
        onUploadError={(error: Error) => {
          toast.error(error.name, { description: error.message, position: "top-center" });
        }}
        headers={[["Authorization", `Bearer ${token}`]]}
        className="ut-label:hover:text-secondary-foreground ut-label:text-muted-foreground ut-button:bg-secondary ut-button:text-secondary-foreground my-8 h-full w-full !p-0"
      />
    </div>
  );
}
