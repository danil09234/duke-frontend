"use client";

import { Plus, Search } from "lucide-react";
import { usePathname } from "next/navigation";
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
import avatar from "@/public/resources/avatar-user.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import styles from "@/styles/SidebarWrapper.module.css";
import React, { useEffect, useState } from "react";
import { TooltipIconButton } from "@/components/ui/assistant-ui/tooltip-icon-button";
import Logout from "@/components/Pages/Login/Logout";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { handleNewChat } from "@/actions/chats";

const imageCache = {};

function fetchImage(imageUrl) {
  if (imageCache[imageUrl]) {
    return Promise.resolve(imageCache[imageUrl]); // Return cached image
  }

  return fetch(imageUrl)
    .then((response) => response.blob()) // Fetch and get the image as a blob
    .then((blob) => {
      const url = URL.createObjectURL(blob); // Create a URL for the blob
      imageCache[imageUrl] = url; // Cache the blob URL
      return url;
    });
}

function Divider() {
  return (
    <hr className="my-2 w-[27px] h-[1px] bg-[var(--Divider-Border-BR-Color-2,#BAC0CC)]" />
  );
}

const DesktopSidebar: React.FC = () => {
  const { toggleSidebar, state } = useSidebar();
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const [user, setUser] = useState<User | any>(null);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.error("Error getting user", error?.message);
      } else {
        setUser(data?.user);
        if (data?.user?.user_metadata?.avatar_url) {
          fetchImage(data?.user?.user_metadata?.avatar_url)
            .then((url) => {
              setAvatarLoaded(true);
              setAvatarUrl(url);
            })
            .catch(() => {
              console.error("Error loading avatar image");
              setAvatarLoaded(true);
            });
        }
      }
    }
    getUser();
  }, []);

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

  return (
    <Sidebar
      collapsible="icon"
      className="w-[300px] p-6 px-4 flex flex-col h-[100dvh] border-none"
    >
      <SidebarContent className="bg-[#f7f8fa]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={avatarLoaded ? avatarUrl : avatar.src}
                alt="User Avatar"
              />
              <AvatarFallback>
                <img src={avatar.src} alt="User Avatar" />
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-900">
              {user?.user_metadata?.name}
            </span>
          </div>
          <div className="text-[#666F8D]">
            {!isMobile && <SidebarTrigger />}
          </div>
        </div>

        {state === "expanded" && (
          <div className="relative py-4 mb-4">
            <Input
              className="h-[42px] pl-8 bg-white"
              placeholder="Hľadaj chat..."
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
            const isActive =
              pathname === item.path ||
              (pathname === "/" && item.path === "/chats");
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

        <div className="mt-auto flex flex-col gap-2">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNewChat(user);
            }}
          >
            {state === "expanded" ? (
              <Button
                className="w-full bg-[#FF4100] hover:bg-[#FF4100]/90 text-white"
                size="lg"
              >
                <Plus className="h-4 w-4 mr-2" />
                Začať nový chat
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
          {user && (
            <div>
              <Logout isSidebarExpanded={state === "expanded"} />
            </div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default DesktopSidebar;
