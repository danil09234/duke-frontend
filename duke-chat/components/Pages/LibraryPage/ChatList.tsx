import * as React from "react";
import { LibrarySnippetCard } from "@/components/Pages/LibraryPage/LibrarySnippetCard";
import { ChatListProps } from "./types";

export const ChatList: React.FC<ChatListProps> = ({ chats }) => {
  return (
    <div
      className="grid mt-6 w-full gap-4 max-md:max-w-full"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
    >
      {chats.map((chat, index) => (
        <LibrarySnippetCard key={index} {...chat} />
      ))}
    </div>
  );
};
