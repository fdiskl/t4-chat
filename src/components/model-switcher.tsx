"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export const AI_MODELS = [
  { id: "gpt-4", name: "GPT-4" },
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  { id: "claude-3-opus", name: "Claude 3 Opus" },
  { id: "claude-3-sonnet", name: "Claude 3 Sonnet" },
  { id: "gemini-pro", name: "Gemini Pro" },
]

interface ModelSwitcherProps {
  selectedModel: string
  onModelChange: (model: string) => void
}

export function ModelSwitcher({ selectedModel, onModelChange }: ModelSwitcherProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedModel
            ? AI_MODELS.find((model) => model.id === selectedModel)?.name
            : "Select model..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search model..." className="h-9" />
          <CommandList>
            <CommandEmpty>No model found.</CommandEmpty>
            <CommandGroup>
              {AI_MODELS.map((model) => (
                <CommandItem
                  key={model.id}
                  value={model.id}
                  onSelect={(currentValue) => {
                    onModelChange(currentValue === selectedModel ? "" : currentValue)
                    setOpen(false)
                  }}
                                    className="text-sm h-8"

                >
                  {model.name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedModel === model.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
