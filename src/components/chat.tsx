"use client";
import { ChatInput, ChatInputSubmit, ChatInputTextArea } from "@/components/ui/chat-input";
import { ChatMessage, ChatMessageAvatar, ChatMessageContent } from "@/components/ui/chat-message";
import { ChatMessageArea } from "@/components/ui/chat-message-area";
import { useChat } from "ai/react";
import type { ComponentPropsWithoutRef } from "react";
import { ModelSelector } from "./ui/model-selector";
import { Button } from "./ui/button";
import { Globe, Paperclip, Search } from "lucide-react";

export function Chat({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: "/api/ai/chat",
    initialMessages: [
      {
        id: "1",
        content:
          "Hi! I need help organizing my project management workflow. Can you guide me through some best practices?",
        role: "user",
      },
      {
        id: "2",
        content:
          "I'd be happy to help you with project management best practices! Here's a structured approach:\n\n#### 1. Project Initiation\n- Define clear project objectives\n- Identify key stakeholders\n- Set measurable goals\n- Create project charter\n\n#### 2. Planning Phase\n- Break down work into tasks\n- Set priorities\n- Create timeline\n- Assign responsibilities\n\nWould you like me to elaborate on any of these points?",
        role: "assistant",
      },
      {
        id: "3",
        content:
          "Yes, please tell me more about breaking down work into tasks. How should I approach this?",
        role: "user",
      },
      {
        id: "4",
        content:
          "Breaking down work into tasks is crucial for project success. Here's a detailed approach:\n\n##### Work Breakdown Structure (WBS)\n1. **Start with major deliverables**\n   - Identify end goals\n   - List main project phases\n\n2. **Break into smaller components**\n   - Tasks should be:\n     - Specific\n     - Measurable\n     - Achievable\n     - Time-bound\n\n3. **Task Estimation**\n   ```\n   Task Example:\n   - Name: User Authentication Feature\n   - Duration: 3 days\n   - Dependencies: Database setup\n   - Priority: High\n   ```\n\n4. **Use the 8/80 Rule**\n   - Tasks shouldn't take less than 8 hours\n   - Or more than 80 hours\n   - If they do, break them down further",
        role: "assistant",
      },
      {
        id: "5",
        content:
          "That's really helpful! What tools would you recommend for tracking all these tasks?",
        role: "user",
      },
      {
        id: "6",
        content:
          "Here are some popular project management tools:\n\n##### Tips for Tool Selection\n- ✅ Consider team size\n- ✅ Integration needs\n- ✅ Learning curve\n- ✅ Budget constraints\n\nWould you like specific recommendations based on your team's needs?",
        role: "assistant",
      },
      {
        id: "7",
        content: "Yes, we're a small team of 5 developers. What would work best for us?",
        role: "user",
      },
      {
        id: "8",
        content:
          "For a team of 5 developers, I'd recommend:\n\n##### Primary Choice: Jira Software\n\n**Advantages:**\n- 🔧 Built for development teams\n- 📊 Great for agile workflows\n- 🔄 Git integration\n- 📱 Mobile apps\n\n##### Alternative: ClickUp\n\n**Benefits:**\n- 💰 Cost-effective\n- 🎨 More flexible\n- 🚀 Faster setup\n\n```\nRecommended Setup:\n- Sprint Length: 2 weeks\n- Board Structure:\n  - Backlog\n  - To Do\n  - In Progress\n  - Code Review\n  - Testing\n  - Done\n- Key Features:\n  - Story Points\n  - Time Tracking\n  - Sprint Reports\n```\n\nWould you like me to explain how to set up the recommended workflow in either of these tools?",
        role: "assistant",
      },
    ],
    onFinish: (message) => {
      //console.log("onFinish", message, completion);
    },
  });

  const handleSubmitMessage = () => {
    if (isLoading) {
      return;
    }
    handleSubmit();
  };

  return (
    <div className="flex h-full flex-1 flex-col overflow-y-auto" {...props}>
      <ChatMessageArea scrollButtonAlignment="center">
        <div className="mx-auto w-full max-w-3xl space-y-4 px-4 py-8">
          {messages.map((message) => {
            if (message.role !== "user") {
              return (
                <ChatMessage key={message.id} id={message.id}>
                  <ChatMessageContent content={message.content} />
                </ChatMessage>
              );
            }
            return (
              <ChatMessage key={message.id} id={message.id} variant="bubble" type="outgoing">
                <ChatMessageContent content={message.content} className="max-w-xl" />
              </ChatMessage>
            );
          })}
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
