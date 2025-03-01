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
import Link from "next/link";
import styles from "@/styles/SidebarWrapper.module.css";
import avatar from "@/public/resources/avatar-user.png";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Logout from "../Pages/Login/Logout";

const sections = [
  { name: "Chaty", href: "/chats", icon: LucideMessageCircle },
  { name: "Knižnica", href: "/library", icon: Book },
  {
    name: "Nájsť program",
    href: "/find-program",
    icon: Puzzle,
  },
];

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

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

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

  return (
    <Drawer direction="left" open={open} onOpenChange={setOpen}>
      <NavigationMenu>
        <NavigationMenuList className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-4 py-4 max-w-screen-md bg-white border-b border-gray-200 max-md:px-4">
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </DrawerTrigger>
          <Link href="/chats" onClick={() => setOpen(false)}>
            <Avatar className="col-start-1 row-span-full row-start-1">
              <AvatarImage
                src="/resources/duke-avatar.png"
                alt="Assistant Avatar"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </Link>
          <NavigationMenuItem>
            <Link href={"/chats/eb37deb8eeeb2aa4997b2eee77/"}>
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
                          href={"/chats/eb37deb8eeeb2aa4997b2eee77/"}
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
                    const isActive =
                      pathname === section.href ||
                      (pathname === "/" && section.href === "/chats");
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
                          href={section.href}
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

              <div className="mt-auto flex px-4 border-">
                <div className="flex items-center w-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={avatarLoaded ? avatarUrl : avatar.src}
                      alt="User Avatar"
                    />
                    <AvatarFallback>
                      <img src={avatar.src} alt="User Avatar" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="ml-2 text-sm font-medium text-slate-800">
                    {user?.user_metadata?.name}
                  </span>
                </div>
                {user && (
                  <div>
                    <Logout isSidebarExpanded={false} />
                  </div>
                )}
              </div>
            </div>
          </DrawerContent>
        </NavigationMenuList>
      </NavigationMenu>
    </Drawer>
  );
}
