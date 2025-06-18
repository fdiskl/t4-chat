"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { File, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function ImagePreview({ url }: { url: string }) {
  const [thumbLoading, setThumbLoading] = useState(true);
  const [dialogLoading, setDialogLoading] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <div className="">
            {thumbLoading && <Loader2 className="animate-spin" />}
            <Image
              src={url}
              alt="Preview"
              width={32}
              height={32}
              className={`h-8 w-full rounded object-cover ${thumbLoading ? "invisible" : "visible"}`}
              onLoad={() => setThumbLoading(false)}
              onError={() => setThumbLoading(false)}
            />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Image preview</DialogTitle>
        <div className="relative mx-auto h-48 w-full">
          {dialogLoading && <Loader2 className="animate-spin" />}
          <Image
            src={url}
            width={192}
            height={192}
            alt="Preview"
            className={`h-full rounded object-cover ${dialogLoading ? "invisible" : "visible"}`}
            onLoad={() => setDialogLoading(false)}
            onError={() => setDialogLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function FilePreview({ url, name }: { url: string; name?: string }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-8 w-full">
          <File className="h-8 w-8 object-cover" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>File preview</DialogTitle>
        <div className="relative mx-auto h-48 w-full">
          <h2 className="text-2xl">{name}</h2>
          <Link to={url} target="_blank" className="mt-2 text-blue-500 underline">
            Go to file
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/*

<Card className="w-72">
  <CardHeader>
    <CardTitle>Image Preview</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="relative h-48 w-full">
      <img src={url} alt="Preview" className="rounded object-cover" />
    </div>
  </CardContent>
</Card>
*/
