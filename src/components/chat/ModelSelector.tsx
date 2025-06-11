"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModelRegistry } from "@/lib/constants/models";
import React from "react";

interface ModelSelectorProps {
  currentModel: keyof typeof ModelRegistry;
  onModelChange: (model: keyof typeof ModelRegistry) => void;
}

function ModelSelector({ currentModel, onModelChange }: ModelSelectorProps) {
  const modelConfig = ModelRegistry[currentModel] || ModelRegistry["claude-3-5-sonnet-20241022"];

  return (
    <div className="px-4">
      <div className="flex items-center justify-between pr-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span>{modelConfig.name}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.entries(ModelRegistry).map(([modelId, model]) => (
              <DropdownMenuItem
                key={modelId}
                onClick={() => onModelChange(modelId as keyof typeof ModelRegistry)}>
                {model.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default ModelSelector;
