"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PlusCircle,
  Menu,
  Book,
  LucideMessageCircle,
  Puzzle,
  Plus,
  MessageCircle,
  Search,
  PuzzleIcon,
  BookIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TooltipIconButton } from "../ui/assistant-ui/tooltip-icon-button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DialogTitle, DialogClose } from "@radix-ui/react-dialog";

const sections = [
  { name: "Chaty", href: "/chats", icon: LucideMessageCircle },
  { name: "Knižnica", href: "/library", icon: Book },
  { name: "Nájsť program", href: "/chats/chat123", icon: Puzzle },
];

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <nav className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-4 py-4 max-w-screen-md bg-white border-b border-gray-200 max-md:px-4">
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Открыть меню</span>
          </Button>
        </SheetTrigger>
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

      <SheetContent side="left" className="w-[296px] p-0 py-4 bg-slate-50">
        <DialogClose>
          <DialogTitle>Mobile Sidebar</DialogTitle>
        </DialogClose>
        <div className="flex flex-col h-full">
          <div className="p-4">
            <SheetHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-100 shadow-sm bg-white/40">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c77699c1a54ac015dea492b8983921e55e36e6d180f36d32440fcba46dafed?placeholderIfAbsent=true&apiKey=e1ccbc5048c74312a1e3a65ba1a0b07d"
                    alt="Logo"
                    className="w-3 h-3 object-contain"
                  />
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/625cd1d224e35a1b2d8515c89784b097c8885e4e869240d00a8e2b7369083698?placeholderIfAbsent=true&apiKey=e1ccbc5048c74312a1e3a65ba1a0b07d"
                      alt="Action 1"
                      className="w-4 h-4"
                    />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbdbafb78ae01030b6526d04df05c09f729f0e4eabc6664ad96e8137337e8ab6?placeholderIfAbsent=true&apiKey=e1ccbc5048c74312a1e3a65ba1a0b07d"
                      alt="Action 2"
                      className="w-4 h-4"
                    />
                  </Button>
                </div>
              </div>
            </SheetHeader>

            <nav className="mt-10 space-y-1">
              <div className="flex items-center px-4 py-3.5 text-sm font-medium rounded-lg bg-white text-slate-800 shadow-sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="flex-1">Chaty</span>
              </div>

              <div className="flex items-center px-4 py-3.5 text-sm font-medium rounded-lg text-slate-500 hover:bg-white/60">
                <Book className="mr-2 h-4 w-4" />
                <span className="flex-1">Knižnica</span>
              </div>

              <div className="flex items-center px-4 py-3.5 text-sm font-medium rounded-lg text-slate-500 hover:bg-white/60">
                <PuzzleIcon className="mr-2 h-4 w-4" />
                <span className="flex-1">Nájsť program</span>
              </div>
            </nav>
          </div>

          <div className="mt-auto p-4 border-t border-gray-100">
            <div className="flex items-center px-4 py-3 w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/059d36b6008604f96a694b4b8defc6f6a0231417e7bbcf4ec11c4b6405bf08af?placeholderIfAbsent=true&apiKey=e1ccbc5048c74312a1e3a65ba1a0b07d"
                alt="User avatar"
                className="w-8 h-8 rounded-full shadow-sm object-cover"
              />
              <span className="ml-2 text-sm font-medium text-slate-800">
                Vladyslav P.
              </span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
