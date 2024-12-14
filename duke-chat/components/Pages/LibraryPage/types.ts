import { ReactNode } from "react";

export interface ChatCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  date: string;
}

export interface ChatListProps {
  chats: ChatCardProps[];
}
