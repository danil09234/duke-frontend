import { Calendar, MessageCircle, Inbox, Puzzle, Book } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarTrigger,
} from "@/components/ui/sidebar";

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
        <img alt="Avatar" src="@/resources/av2024-small.jpg" />
        <SidebarGroupLabel>Vladyslav</SidebarGroupLabel>
      </div>
      <div>
        <SidebarTrigger />
      </div>
    </div>
  )
}

function SidebarTop() {
  return (
      <div className="flex flex-col">
        <AvatarAndIcons />
        <div>
          Search
        </div>
      </div>
  )
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarTrigger />
        </SidebarGroup>
        <SidebarGroup className="space-y-20">
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
      </SidebarContent>
    </Sidebar>
  );
}
