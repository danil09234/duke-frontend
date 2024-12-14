import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@shadcn/ui";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
}

export function SidebarItem({ icon, text }: SidebarItemProps) {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
}
