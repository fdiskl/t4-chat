"use client"

import * as React from "react"
import { ArrowUp, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModelSwitcher, AI_MODELS } from "@/components/model-switcher"

export function ChatInput() {
  const [message, setMessage] = React.useState("")
  const [selectedModel, setSelectedModel] = React.useState(AI_MODELS[0].id)
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  React.useEffect(() => {
    adjustTextareaHeight()
  }, [message])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    // TODO: Handle message submission with selected model
    console.log("Message:", message, "Model:", selectedModel)
    setMessage("")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      // TODO: Handle file upload
      console.log("Selected file:", file.name)
    }
  }

  return (
    <div className="w-full max-w-2xl rounded-lg border bg-[var(--chat-input-background)] p-4 shadow-lg border-none">
      <div className="flex items-center gap-2 mb-2">
     
      </div>
      <form onSubmit={handleSubmit} className="flex w-full items-center gap-2 flex-grow flex-row">
        <textarea
          ref={textareaRef}
          className="w-full resize-none bg-transparent text-base leading-6 text-foreground outline-none placeholder:text-secondary-foreground/60 placeholder:text-sm disabled:opacity-0 min-h-[24px] max-h-[200px] overflow-y-auto"
          placeholder={`Type your message here...`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
        />
      </form>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ModelSwitcher
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*,.pdf,.doc,.docx,.txt"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
            className="shrink-0"
          >
            <Paperclip className="h-4 w-4" />
            <span className="sr-only">Upload file</span>
          </Button>
        </div>
        <Button
          type="submit"
          size="icon"
          className="shrink-0 bg-primary hover:bg-primary/90"
          disabled={!message.trim()}
          onClick={handleSubmit}
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </div>
  )
}
