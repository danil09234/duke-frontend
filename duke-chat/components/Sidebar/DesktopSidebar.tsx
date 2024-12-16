"use client";

import { Plus, Search } from "lucide-react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import avatar from "@/public/resources/av2024-small.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import styles from "@/styles/SidebarWrapper.module.css";
import React, { useEffect, useState } from "react";
import { TooltipIconButton } from "@/components/ui/assistant-ui/tooltip-icon-button";

function Divider() {
  return (
    <hr className="my-2 w-[27px] h-[1px] bg-[var(--Divider-Border-BR-Color-2,#BAC0CC)]" />
  );
}

const DesktopSidebar: React.FC = () => {
  const { toggleSidebar, state } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      const isScreenMobile = window.innerWidth <= 880;
      setIsMobile(isScreenMobile);

      if (isScreenMobile && state !== "collapsed") {
        toggleSidebar();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggleSidebar, state]);

  const chatHistory = [
    "Prijímacie skúšky na TUKE",
    "Tipy a rady pre uchádzačov",
    "Tipy pre nováčikov",
    "Ako sa adaptovať ku štúdiu",
    "Štipendiá, granty",
  ];

  return (
    <Sidebar
      collapsible="icon"
      className="w-[300px] p-6 px-4 flex flex-col h-[100vh] border-none"
    >
      <SidebarContent className="bg-[#f7f8fa]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={avatar.src} alt="User Avatar" />
              <AvatarFallback>VP</AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-900">Vladyslav P.</span>
          </div>
          <div className="text-[#666F8D]">
            {!isMobile && <SidebarTrigger />}
          </div>
        </div>

        {state === "expanded" && (
          <div className="relative py-4 mb-4">
            <Input
              className="h-[42px] pl-8 bg-white"
              placeholder="Hľadáj chat..."
              defaultValue=""
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#19213D]" />
            <Badge className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-2 py-1 bg-[#F7F8FA] text-[#19213D] pointer-events-none">
              ⌘K
            </Badge>
          </div>
        )}

        <SidebarMenu className="flex flex-col">
          <div className="text-[#666F8D]">
            {state === "collapsed" && !isMobile && (
              <SidebarTrigger className="p-2 w-full h-fit" />
            )}
          </div>
          {state === "collapsed" && !isMobile && <Divider />}
          {routes.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <SidebarMenuItem key={index} className="w-full">
                <SidebarMenuButton
                  className={`${
                    styles.defaultSidebarItem
                  } h-fit hover:bg-[#e7ebf0] ${
                    isActive ? styles.activeSidebarItem : ""
                  }`}
                  asChild
                >
                  <Link
                    href={item.path}
                    className={`flex items-center justify-between w-full group rounded-md transition-colors gap-2 px-3 py-3 ${
                      isActive
                        ? `${styles.activeSidebarItem} pointer-events-none`
                        : `${styles.defaultSidebarItem} hover:bg-[#e7ebf0] active:bg-[#edf0f4]`
                    }`}
                  >
                    <item.icon
                      className={`${
                        isActive ? styles.activeText : "text-[#666F8D]"
                      } h-5 w-5`}
                    />
                    <span
                      className={`${
                        isActive ? styles.activeText : "text-[#666F8D]"
                      } flex-grow`}
                    >
                      {item.name}
                    </span>
                    {state === "expanded" && (
                      <Badge
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-2 py-1 bg-white text-[#19213D] ${
                          isActive ? "bg-[#F7F8FA] text-[#19213D]" : ""
                        }`}
                        variant="secondary"
                      >
                        {item.shortcut}
                      </Badge>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        {state === "expanded" && (
          <div className="flex flex-col gap-3 py-6 mt-4">
            <span className="px-2.5 font-inter text-xs font-medium leading-[15.6px] tracking-widest text-left [text-underline-position:from-font] [text-decoration-skip-ink:none] text-components-titles-paragraphs-text-neutral-light text-[#BAC0CC]">
              HISTÓRIA CHATOV
            </span>
            <ScrollArea className="h-fit relative">
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

        <div className="mt-auto">
          <Link href="pages/chats/chat123">
            {state === "expanded" ? (
              <Button
                className="w-full bg-[#FF4100] hover:bg-[#FF4100]/90 text-white"
                size="lg"
              >
                <Plus className="h-4 w-4 mr-2" />
                Start New Chat
              </Button>
            ) : (
              <TooltipIconButton
                tooltip="New Chat"
                side="right"
                className="bg-[#FF4100] w-8 h-8 rounded-[8px] hover:bg-[#FF4100]/90"
              >
                <Plus color="white" />
              </TooltipIconButton>
            )}
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default DesktopSidebar;
