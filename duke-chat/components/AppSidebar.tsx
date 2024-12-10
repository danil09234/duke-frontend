// components/AppSidebar.tsx
"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";
import avatar from "../public/resources/av2024-small.jpg";

import { routes } from "@/routes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Book,
  MessageCircle,
  Moon,
  Plus,
  Puzzle,
  Search,
  PanelRightOpen,
} from "lucide-react";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

const AppSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const chatHistory = [
    "Prijímacie skúšky na TUKE",
    "Tipy a rady pre uchádzačov",
    "Tipy pre nováčikov",
    "Ako sa adaptovať ku štúdiu",
    "Štipendiá, granty",
    "Prihláška online MAIS",
  ];

  return (
    <div className="bg-[#F7F8FA] w-[300px] p-6 px-8 flex flex-col h-[100vh]">
      {/* Avatar and Toggle Button */}
      <div className="flex items-center justify-between">
        <Avatar>
          <AvatarImage src={avatar.src} alt="User Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <PanelRightOpen className="h-5 w-5" />
        </Button>
      </div>

      {/* Search Input */}
      {isExpanded && (
        <div className="relative py-4">
          <Input
            className="h-[42px] pl-8"
            placeholder="Hľadáj chat..."
            defaultValue=""
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Badge className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-2 py-1">
            ⌘K
          </Badge>
        </div>
      )}

      {/* Navigation */}
      <SidebarMenu className="flex flex-col gap-1 p-1">
        {routes.map((item, index) => (
          <SidebarMenuItem
            key={index}
            className="flex items-center justify-between p-2"
          >
            {/* Wrap the content with Link to make it clickable */}
            <Link
              to={item.path} // Changed from href to to
              className="flex items-center justify-between w-full group hover:bg-slate-600 rounded-md transition-colors"
            >
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                <span className="font-display-2-regular text-components-inputs-select-text-text-neutral">
                  {item.name}
                </span>
              </div>
              <Badge
                className="w-8 flex items-center justify-center"
                variant="secondary"
              >
                {item.shortcut}
              </Badge>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      {/* Chat History */}
      {isExpanded && (
        <div className="flex flex-col gap-3 py-6">
          <span className="px-2.5 font-inter text-xs font-medium leading-[15.6px] tracking-widest text-left [text-underline-position:from-font] [text-decoration-skip-ink:none] text-components-titles-paragraphs-text-neutral-light text-[#BAC0CC]">
            HISTÓRIA CHATOV
          </span>
          <ScrollArea className="h-[300px] relative">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 rounded cursor-pointer"
              >
                <span
                  className="
                    font-inter 
                    text-sm 
                    font-normal 
                    leading-[18.2px] 
                    text-left 
                    [text-underline-position:from-font] 
                    [text-decoration-skip-ink:none] 
                    text-[#666F8D]
                    truncate
                  "
                >
                  {chat}
                </span>
              </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#F7F8FA] to-transparent" />
          </ScrollArea>
        </div>
      )}

      {/* New Chat Button */}
      <div className="mt-auto py-6">
        <Button
          className="w-full bg-[#FF4100] hover:bg-[#FF4100]/90 text-white"
          size="lg"
        >
          <Plus className="h-4 w-4 mr-2" />
          Start New Chat
        </Button>
      </div>
    </div>
  );
};

export default AppSidebar;
