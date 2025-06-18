import { TooltipContent, TooltipTrigger, Tooltip } from "./ui/tooltip";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { Copy, Loader, ShareIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { toast } from "sonner";
import { db } from "@/lib/db";

export default function Share({
  title,
  id,
}: {
  title: string | undefined;
  id: string | undefined;
}) {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);
  const [slug, setSlug] = useState("");

  const handleShareChat = async () => {
    if (!id) return;
    if (isLoading) return;

    setIsLoading(true);

    try {
      const tok = await db.getToken();
      if (!tok) {
        toast.error("Please login to access this feature", { position: "top-center" });
        setIsLoading(false);
        setIsError(true);
        return;
      }

      const chat = await db.chats.get(id);
      const msgs = await db.getChatMessages(id);

      if (!chat || !msgs || msgs.length === 0) {
        toast.error("Something went wrong :(", { position: "top-center" });
        setIsLoading(false);
        setIsError(true);
        return;
      }

      const resp = await fetch("/api/share/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tok: tok,
          chat,
          messages: msgs,
        }),
      });

      if (!resp.ok) {
        toast.error("Something went wrong :(", { position: "top-center" });
        setIsLoading(false);
        setIsError(true);
        return;
      }

      const { chatId, slug } = await resp.json();

      setSlug(slug);

      setIsLoading(false);
      setIsError(false);
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong :(", { position: "top-center" });
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShareChatCallBack = useCallback(() => {
    handleShareChat();
  }, [id]);

  return (
    <Tooltip>
      <Dialog open={openFirst} onOpenChange={setOpenFirst}>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              disabled={!title || title.includes("New chat") || !id}
              onClick={() => setOpenFirst(true)}>
              <ShareIcon />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <DialogContent>
          <DialogTitle>Are you sure?</DialogTitle>
          Are you sure you want to share <span className="-mt-3 italic">"{title}"?</span>
          <Separator className="h-[1px] w-full bg-primary" />
          <div className="flex flex-col text-muted-foreground">
            All your current messages and attachments will be shared.
            <br className="mt-2" />
            Your personal information (such as username, email, and profile picture) will remain
            private and won't be shared.
            <br className="mt-2" />
            Additionally, other users won't have the ability to modify your chat.
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button
              variant="default"
              onClick={() => {
                setOpenFirst(false); // Close first dialog
                setOpenSecond(true); // Open second dialog
                handleShareChatCallBack();
              }}>
              Share this chat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Second dialog */}
      <Dialog open={openSecond} onOpenChange={setOpenSecond}>
        <DialogContent>
          <DialogTitle>
            {isLoading ? "Please wait" : <>{error ? "Something went wrong" : "Chat Shared!"}</>}
          </DialogTitle>

          {isLoading ? (
            <>
              <Loader className="w-10 animate-spin" />
            </>
          ) : (
            <>
              {error ? (
                <span className="text-red-400">Something went wrong, try again later</span>
              ) : (
                <>
                  <div className="flex flex-col items-start justify-center">
                    <div>Your chat has been successfully shared.</div>
                    <Separator className="my-2 h-[1px] w-full bg-primary" />
                    <div>Share this link for others to access it:</div>
                    <div className="flex flex-row items-center justify-center">
                      <span className="font-bold">{`${window.location.origin}/shared/${slug}`}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={async () => {
                          // TODO: make anim instead
                          try {
                            const domain = window.location.origin;
                            await navigator.clipboard.writeText(`${domain}/shared/${slug}`);
                            toast.success("Copied", { position: "top-center" });
                          } catch (e) {
                            console.error(e);
                            toast.error("Couldn't copy", { position: "top-center" });
                          }
                        }}>
                        <Copy />
                      </Button>
                    </div>
                  </div>
                </>
              )}

              <DialogFooter>
                <Button variant="secondary" onClick={() => setOpenSecond(false)}>
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <TooltipContent>
        <p>Share (only current state)</p>
      </TooltipContent>
    </Tooltip>
  );
}
