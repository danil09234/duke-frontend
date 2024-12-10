"use client"

import {Calendar, MessageCircle, Inbox, Puzzle, Book, SunIcon} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarTrigger, useSidebar
} from "@/components/ui/sidebar";
import {MoonIcon} from "@heroicons/react/24/outline";
import {Button, DayPickerProvider} from "react-day-picker";
import {useTheme} from "next-themes";

import Avatar from "@/resources/av2024-small.jpg";

import { Input } from "@/components/ui/input"
import {SearchInput} from "@/components/ui/search";

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

function CollapsedSidebarTop() {
  return (
    <div className="flex flex-col items-center">
      <DayPickerProvider initialProps={{ mode: "single" }}>
        <ThemeToggle />
        <SidebarTrigger />
      </DayPickerProvider>
    </div>
  )
}

function SidebarTop() {
  const { isMobile, state } = useSidebar();

  return (
      state === "expanded" ? <ExpandedSidebarTop key="expanded" /> : <CollapsedSidebarTop key="collapsed" />
  )
}

function Divider() {
  return <hr className="my-2 w-[27px] h-[1px] bg-[var(--Divider-Border-BR-Color-2,#BAC0CC)]" />
}

export function AppSidebar() {
  const { isMobile, state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="items-center gap-0">
        <SidebarGroup>
          <SidebarTop />
        </SidebarGroup>
        {state === "collapsed" && <Divider />}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {state === "expanded" &&
          <SidebarGroup>
            <SidebarGroupLabel className="uppercase">História chatov</SidebarGroupLabel>
          </SidebarGroup>
        }
      </SidebarContent>
    </Sidebar>
  );
}
