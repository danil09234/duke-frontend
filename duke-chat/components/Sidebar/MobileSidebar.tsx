"use client";

import * as React from "react";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import {
  Menu,
  Book,
  LucideMessageCircle,
  Puzzle,
  Plus,
  MessageCircle,
  Search,
  PuzzleIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { TooltipIconButton } from "../ui/assistant-ui/tooltip-icon-button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const sections = [
  { name: "Chaty", href: "/chats", icon: LucideMessageCircle },
  { name: "Knižnica", href: "/library", icon: Book },
  { name: "Nájsť program", href: "/chats/chat123", icon: Puzzle },
];

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <nav className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-4 py-4 max-w-screen-md bg-white border-b border-gray-200 max-md:px-4">
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <Avatar className="col-start-1 row-span-full row-start-1">
          <AvatarImage
            src="/resources/duke-avatar.png"
            alt="Assistant Avatar"
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <TooltipIconButton
          tooltip="New Chat"
          side="right"
          className="bg-[#FF4100] w-9 h-9 rounded-[8px] hover:bg-[#FF4100]/90"
        >
          <Plus color="white" />
        </TooltipIconButton>
      </nav>

      <DrawerContent className="w-[296px] p-0 pb-4 pt-[2px] bg-slate-50">
        <div className="flex flex-col h-full">
          <div className="p-4">
            <DrawerHeader className="p-0">
              <div className="flex justify-between items-center">
                <div className="rounded-md">
                  <Button
                    onClick={() => setOpen(false)}
                    variant="outline"
                    size="icon"
                    className="md:hidden"
                  >
                    <VisuallyHidden.Root>
                      <DrawerTitle>Close Sidebar</DrawerTitle>
                    </VisuallyHidden.Root>
                    <Menu className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex gap-0 text-[#666F8D]">
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </DrawerHeader>

            <nav className="mt-10 space-y-1">
              <div
                className="flex items-center px-3 py-2.5
               text-sm font-medium rounded-lg bg-white text-slate-800 shadow-sm"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="flex-1">Chaty</span>
              </div>

              <div className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-500 hover:bg-[#e7ebf0]">
                <Book className="mr-2 h-4 w-4" />
                <span className="flex-1">Knižnica</span>
              </div>

              <div className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-500 hover:bg-[#e7ebf0]">
                <PuzzleIcon className="mr-2 h-4 w-4" />
                <span className="flex-1">Nájsť program</span>
              </div>
            </nav>
          </div>

          <div className="mt-auto px-4 border-">
            <div className="flex items-center w-full">
              <img
                src="/resources/av2024-small.jpg"
                alt="User avatar"
                className="w-8 h-8 rounded-full shadow-sm object-cover"
              />
              <span className="ml-2 text-sm font-medium text-slate-800">
                Vladyslav P.
              </span>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
