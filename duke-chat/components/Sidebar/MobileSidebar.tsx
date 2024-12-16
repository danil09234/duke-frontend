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
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TooltipIconButton } from "../ui/assistant-ui/tooltip-icon-button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import styles from "@/styles/SidebarWrapper.module.css";

const sections = [
  { name: "Chaty", href: "/chats", icon: LucideMessageCircle },
  { name: "Knižnica", href: "/library", icon: Book },
  { name: "Nájsť program", href: "/chats/chat1234", icon: Puzzle },
];

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <NavigationMenu>
        <NavigationMenuList className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-4 py-4 max-w-screen-md bg-white border-b border-gray-200 max-md:px-4">
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
          <NavigationMenuItem>
            <Link to={"/chats/chat1234/"}>
              <TooltipIconButton
                tooltip="New Chat"
                side="right"
                className="bg-[#FF4100] w-9 h-9 rounded-[8px] hover:bg-[#FF4100]/90"
              >
                <Plus color="white" />
              </TooltipIconButton>
            </Link>
          </NavigationMenuItem>

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
                    <NavigationMenuList className="flex gap-0 text-[#666F8D]">
                      <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                      </Button>
                      <NavigationMenuItem>
                        <Link
                          to={"/chats/chat1234/"}
                          onClick={() => setOpen(false)}
                        >
                          <Button variant="ghost" size="icon">
                            <Plus className="h-5 w-5" />
                          </Button>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </div>
                </DrawerHeader>

                <NavigationMenuList className="mt-10 space-y-1">
                  {sections.map((section, index) => {
                    const isActive = pathname === section.href;
                    return (
                      <NavigationMenuItem
                        key={index}
                        className={`${
                          styles.defaultSidebarItem
                        } h-fit hover:bg-[#e7ebf0] ${
                          isActive ? styles.activeSidebarItem : ""
                        }`}
                        asChild
                      >
                        <Link
                          to={section.href}
                          className={`flex items-center justify-between w-full group rounded-md transition-colors gap-2 px-3 py-3 ${
                            isActive
                              ? `${styles.activeSidebarItem} pointer-events-none`
                              : `${styles.defaultSidebarItem} hover:bg-[#e7ebf0] active:bg-[#edf0f4]`
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          <section.icon
                            className={`${
                              isActive ? "text-[#19213D]" : "text-[#666F8D]"
                            } h-5 w-5`}
                          />
                          <span
                            className={`${
                              isActive ? "text-[#19213D]" : "text-[#666F8D]"
                            } flex-grow`}
                          >
                            {section.name}
                          </span>
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
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
        </NavigationMenuList>
      </NavigationMenu>
    </Drawer>
  );
}
