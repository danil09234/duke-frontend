"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
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

const navigationItems = [
  { icon: MessageCircle, label: "Chaty", shortcut: "⌘1", href: "/" },
  { icon: Book, label: "Knižnica", shortcut: "⌘2", href: "/library" },
  {
    icon: Puzzle,
    label: "Nájsť program",
    shortcut: "⌘3",
    href: "/find-program",
  },
];

const chatHistory = [
  "Prijímacie skúšky na TUKE",
  "Tipy a rady pre uchádzačov",
  "Tipy pre nováčikov",
  "Ako sa adaptovať ku štúdiu",
  "Štipendiá, granty",
  "Prihláška online MAIS",
  "Prijímacie skúšky na TUKE",
  "Tipy a rady pre uchádzačov",
  "Tipy pre nováčikov",
  "Ako sa adaptovať ku štúdiu",
  "Štipendiá, granty",
  "Prihláška online MAIS",
];

export function AppSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col w-[296px] h-screen bg-background ${
        isExpanded ? "expanded" : "collapsed"
      }`}
    >
      <div className="flex flex-col p-6 gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <Image src={avatar} alt="Avatar" className="rounded-full" />
              </Avatar>
              <span className="font-display-2-medium text-components-inputs-select-text-text-dark">
                Vladyslav
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <PanelRightOpen className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {isExpanded && (
            <div className="relative">
              <Input
                className="h-[42px] pl-8"
                placeholder="Hľadáj chat..."
                defaultValue=""
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Badge className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-2 py-1">
                ⌘K
              </Badge>
            </div>
          )}
        </div>

        {/* Navigation */}
        <SidebarMenu className="flex flex-col gap-1 p-1">
          {routes.map((item, index) => (
            <SidebarMenuItem
              key={index}
              href={item.path}
              className="flex items-center justify-between p-2"
            >
              {/* Wrap the content with Link to make it clickable */}
              <Link
                href={item.path}
                className="flex items-center justify-between w-full group"
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
          <div className="flex flex-col gap-3">
            <span
              className="
                px-2.5 
                font-inter 
                text-xs 
                font-medium 
                leading-[15.6px] 
                tracking-widest 
                text-left 
                [text-underline-position:from-font] 
                [text-decoration-skip-ink:none] 
                text-[#BAC0CC]
              "
            >
              HISTÓRIA CHATOV
            </span>
            <ScrollArea className="h-[300px] relative">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 hover:bg-accent rounded-md cursor-pointer"
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
              <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-background to-transparent" />
            </ScrollArea>
          </div>
        )}
      </div>

      {/* New Chat Button */}
      <div className="mt-auto p-6">
        <Button
          className="w-full bg-[#FF4100] hover:bg-[#FF4100]/90 text-white"
          size="lg"
        >
          <Plus className="mr-2 h-4 w-4" />
          Začať nový chat
        </Button>
      </div>
    </div>
  );
}
