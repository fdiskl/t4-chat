"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Menu, Plus, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Mock data for chats
const mockChats = [
  { id: 1, title: "Project Planning Discussion", timestamp: new Date(2025, 5, 15), link: "/chat/1" },
  { id: 2, title: "Code Review Session", timestamp: new Date(2025, 5, 14), link: "/chat/2" },
  { id: 3, title: "Team Meeting Notes", timestamp: new Date(2025, 5, 10), link: "/chat/3" },
  { id: 4, title: "API Integration Discussion", timestamp: new Date(2025, 4, 28), link: "/chat/4" },
  { id: 5, title: "Database Schema Review", timestamp: new Date(2025, 4, 15), link: "/chat/5" },
  { id: 6, title: "Frontend Architecture", timestamp: new Date(2025, 3, 20), link: "/chat/6" },
  { id: 7, title: "Authentication Flow Design", timestamp: new Date(2025, 5, 13), link: "/chat/7" },
  { id: 8, title: "Performance Optimization", timestamp: new Date(2025, 5, 12), link: "/chat/8" },
  { id: 9, title: "Deployment Strategy", timestamp: new Date(2025, 5, 11), link: "/chat/9" },
  { id: 10, title: "User Interface Design", timestamp: new Date(2025, 5, 9), link: "/chat/10" },
  { id: 11, title: "Testing Strategy", timestamp: new Date(2025, 5, 8), link: "/chat/11" },
  { id: 12, title: "Security Implementation", timestamp: new Date(2025, 5, 7), link: "/chat/12" },
  { id: 13, title: "Mobile Responsiveness", timestamp: new Date(2025, 5, 6), link: "/chat/13" },
  { id: 14, title: "State Management", timestamp: new Date(2025, 5, 5), link: "/chat/14" },
  { id: 15, title: "API Documentation", timestamp: new Date(2025, 5, 4), link: "/chat/15" },
  { id: 16, title: "Error Handling", timestamp: new Date(2025, 5, 3), link: "/chat/16" },
  { id: 17, title: "Logging System", timestamp: new Date(2025, 5, 2), link: "/chat/17" },
  { id: 18, title: "Caching Strategy", timestamp: new Date(2025, 5, 1), link: "/chat/18" },
  { id: 19, title: "Database Migration", timestamp: new Date(2025, 4, 25), link: "/chat/19" },
  { id: 20, title: "CI/CD Pipeline", timestamp: new Date(2025, 4, 20), link: "/chat/20" },
  { id: 21, title: "Monitoring Setup", timestamp: new Date(2025, 4, 15), link: "/chat/21" },
  { id: 22, title: "Backend Architecture", timestamp: new Date(2025, 4, 10), link: "/chat/22" },
  { id: 23, title: "Frontend Components", timestamp: new Date(2025, 4, 5), link: "/chat/23" },
  { id: 24, title: "API Versioning", timestamp: new Date(2025, 4, 1), link: "/chat/24" },
  { id: 25, title: "Database Indexing", timestamp: new Date(2025, 3, 25), link: "/chat/25" },
  { id: 26, title: "Load Balancing", timestamp: new Date(2025, 3, 20), link: "/chat/26" },
  { id: 27, title: "Microservices Design", timestamp: new Date(2025, 3, 15), link: "/chat/27" },
  { id: 28, title: "API Gateway", timestamp: new Date(2025, 3, 10), link: "/chat/28" },
  { id: 29, title: "Service Discovery", timestamp: new Date(2025, 3, 5), link: "/chat/29" },
  { id: 30, title: "Message Queue", timestamp: new Date(2025, 3, 1), link: "/chat/30" },
];

export default function HomeSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = mockChats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const now = new Date();
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const lastWeekChats = filteredChats.filter(chat => chat.timestamp >= lastWeek);
  const lastMonthChats = filteredChats.filter(
    chat => chat.timestamp >= lastMonth && chat.timestamp < lastWeek
  );
  const olderChats = filteredChats.filter(chat => chat.timestamp < lastMonth);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className={cn(
      "flex flex-col h-full transition-all duration-300 relative",
      isCollapsed ? cn("w-16", "bg-transparent") : cn("w-64 border-r", "bg-sidebar")
    )}>
      <div className="p-4 flex items-center relative z-10">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 p-0"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu className="h-4 w-4" />
          </Button>
          {isCollapsed && (
            <div className="flex gap-1 absolute left-12 top-1/2 -translate-y-1/2 z-20">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 p-0"
                onClick={() => {/* Add search handler */}}
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 p-0"
                onClick={() => {/* Add new chat handler */}}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        {!isCollapsed && <h1 className="text-xl font-bold ml-2">T4.chat</h1>}
      </div>

      {!isCollapsed && (
        <>
          <div className="px-4 mb-4">
            <Button 
              className="inline-flex items-center justify-center gap-2 
              whitespace-nowrap transition-all duration-300 ease-in-out
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
              disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none 
              [&_svg]:size-4 [&_svg]:shrink-0 border-reflect button-reflect rounded-lg 
              bg-[rgb(162,59,103)] p-2 font-semibold text-primary-foreground shadow 
              hover:bg-[#d56698] hover:scale-[1.02] active:scale-[0.98] active:bg-[rgb(162,59,103)] 
              disabled:hover:bg-[rgb(162,59,103)] disabled:active:bg-[rgb(162,59,103)] 
              dark:bg-primary/20 dark:hover:bg-pink-800/70 dark:active:bg-pink-800/40 
              disabled:dark:hover:bg-primary/20 disabled:dark:active:bg-primary/20 
              h-9 px-4 py-2 w-full select-none text-sm" 
              size="lg"
              asChild
              onClick={() => {
                console.log("New chat");
              }}
            >
              <Link href="/">
                New Chat
              </Link>
            </Button>
          </div>

          <div className="px-4 mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search chats..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            {lastWeekChats.length > 0 && (
              <div className="mb-4">
                <h2 className="text-sm font-semibold text-muted-foreground mb-2">Last Week</h2>
                {lastWeekChats.map(chat => (
                  <Button
                    key={chat.id}
                    variant="ghost"
                    className="w-full justify-start text-left mb-1"
                    asChild
                  >
                    <Link href={chat.link}>
                      <span className="truncate">{chat.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            )}

            {lastMonthChats.length > 0 && (
              <div className="mb-4">
                <h2 className="text-sm font-semibold text-muted-foreground mb-2">Last 30 Days</h2>
                {lastMonthChats.map(chat => (
                  <Button
                    key={chat.id}
                    variant="ghost"
                    className="w-full justify-start text-left mb-1"
                    asChild
                  >
                    <Link href={chat.link}>
                      <span className="truncate">{chat.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            )}

            {olderChats.length > 0 && (
              <div className="mb-4">
                <h2 className="text-sm font-semibold text-muted-foreground mb-2">Older</h2>
                {olderChats.map(chat => (
                  <Button
                    key={chat.id}
                    variant="ghost"
                    className="w-full justify-start text-left mb-1"
                    asChild
                  >
                    <Link href={chat.link}>
                      <span className="truncate">{chat.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}