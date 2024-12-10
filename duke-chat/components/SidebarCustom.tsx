import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import React from "react";

const navigationItems = [
  { icon: MessageCircle, label: "Chaty", shortcut: "1" },
  { icon: Book, label: "Knižnica", shortcut: "2" },
  { icon: Puzzle, label: "Nájsť program", shortcut: "3" },
];

const chatHistory = [
  "Quis ipsum suspendisse",
  "Ut tristique et egestas quis ipsum sus",
  "Sed viverra tellus inhac",
  "Eros in cursus turpis massa",
  "Dictum at tempor commodo ullamcorper",
  "Morbi tristique senectus et",
];

export default function SidebarWrapper() {
  return (
    <div className="flex flex-col w-[296px] h-screen bg-background">
      <div className="flex flex-col p-6 gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/element.png" alt="Avatar" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <span className="font-display-2-medium text-components-inputs-select-text-text-dark">
                Annamária
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Moon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <PanelRightOpen className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Input
              className="h-[42px] pl-8"
              placeholder="Hľadáj chat..."
              defaultValue=""
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Badge className="absolute right-2 top-1/2 transform -translate-y-1/2">
              K
            </Badge>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          {navigationItems.map((item, index) => (
            <Card
              key={index}
              className={`flex items-center justify-between p-2 ${
                index === 0
                  ? "bg-components-inputs-select-backgrounds-BG-color-1"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                <span className="font-display-2-regular text-components-inputs-select-text-text-neutral">
                  {item.label}
                </span>
              </div>
              <Badge variant="secondary">{item.shortcut}</Badge>
            </Card>
          ))}
        </div>

        {/* Chat History */}
        <div className="flex flex-col gap-3">
          <span className="px-2.5 font-display-1-uppercase-medium text-components-titles-paragraphs-text-neutral-light">
            HISTÓRIA CHATOV
          </span>
          <ScrollArea className="h-[300px] relative">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 hover:bg-accent rounded-md cursor-pointer"
              >
                <span className="font-display-2-regular text-components-inputs-select-text-text-neutral truncate">
                  {chat}
                </span>
              </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-[117px] bg-gradient-to-t from-background to-transparent" />
          </ScrollArea>
        </div>
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
