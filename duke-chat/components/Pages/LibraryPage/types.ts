export interface ChatCardProps {
  icon: string;
  title: string;
  description: string;
  date: string;
  iconUrls: string[];
}

export interface ChatListProps {
  chats: ChatCardProps[];
}
