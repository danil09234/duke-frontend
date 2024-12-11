"use client"

import {
  Calendar,
  MessageCircle,
  Inbox,
  Puzzle,
  Book,
  SunIcon,
  Plus,
  PanelRightOpen,
  Search,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarTrigger, useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import {MoonIcon} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import {useTheme} from "next-themes";
import { routes } from "@/routes";
import avatar from "../public/resources/av2024-small.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input"
import {SearchInput} from "@/components/ui/search";
import styles from "@/styles/SidebarWrapper.module.css";

// Menu items.
const items = [
  {
    title: "Chaty",
    url: "#",
    icon: MessageCircle,
  },
  {
    title: "Knižnica",
    url: "#",
    icon: Book,
  },
  {
    title: "Nájsť program",
    url: "#",
    icon: Puzzle,
  },
];

function AvatarAndIcons() {
  return (
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={Avatar} alt="Avatar"  />
          <p>Vladyslav</p>
        </div>
        <div>
          <SidebarTrigger />
        </div>
      </div>
  )
}

function ExpandedSidebarTop() {
  return (
      <div className="flex flex-col gap-2">
        <AvatarAndIcons />
        <SearchInput placeholder="Hľadáj chat..." />
      </div>
  )
}


export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
      <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
  );
};

function Divider() {
  return <hr className="my-2 w-[27px] h-[1px] bg-[var(--Divider-Border-BR-Color-2,#BAC0CC)]" />
}

const AppSidebar: React.FC = () => {
  const { isMobile, state } = useSidebar();
  const pathname = usePathname();

  const chatHistory = [
    "Prijímacie skúšky na TUKE",
    "Tipy a rady pre uchádzačov",
    "Tipy pre nováčikov",
    "Ako sa adaptovať ku štúdiu",
    "Štipendiá, granty",
    "Prihláška online MAIS",
  ];

  return (
      <Sidebar collapsible="icon" className="w-[300px] p-6 px-4 flex flex-col h-[100vh] border-none">
        <SidebarContent className="bg-[#f7f8fa]">
          <div className="flex items-center justify-between">
            <Avatar className="h-8 w-8">
              <AvatarImage src={avatar.src} alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <SidebarTrigger />
          </div>


          {/* Search Input */}
          {state === "expanded" && (
              <div className="relative py-4 mb-8">
                <Input
                    className="h-[42px] pl-8 bg-white"
                    placeholder="Hľadáj chat..."
                    defaultValue=""
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Badge className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-2 py-1">
                  ⌘K
                </Badge>
              </div>
          )}

          <SidebarMenu className="flex flex-col">
            {state === "collapsed" && <SidebarTrigger className="p-2 w-full h-fit" />}
            {state === "collapsed" && <Divider />}
            {routes.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                  <SidebarMenuItem key={index} className="w-full">
                    <SidebarMenuButton className="h-fit" asChild>
                      <Link
                          href={item.path}
                          className={`${
                              styles.defaultSidebarItem
                          } flex items-center justify-between w-full group hover:bg-gray-200 rounded-md transition-colors px-3 py-2 ${
                              isActive ? styles.activeSidebarItem : ""
                          }`}
                      >
                        <item.icon />
                        <span className="text-gray-800 flex-grow">{item.name}</span>
                        {state === "expanded" && (
                          <Badge
                            className={`
                              absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center px-2 py-1 bg-white text-[#19213D]
                              ${isActive ? "bg-[#F7F8FA] text-[#19213D]" : ""}
                            `}
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

          <div className="mt-auto py-6">
            <Button
                className="w-full bg-[#FF4100] hover:bg-[#FF4100]/90 text-white"
                size="lg"
            >
              <Plus className="h-4 w-4 mr-2" />
              Start New Chat
            </Button>
          </div>
        </SidebarContent>
      </Sidebar>
  );
}

export default AppSidebar;
