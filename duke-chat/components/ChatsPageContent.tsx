"use client";

import TopBarWrapperChats from "@/components/ui/TopBarWrapperChats";
import ChatsContent from "./ui/chatsContent";

export function ChatsPageContent() {
  return (
    <div className="flex flex-col py-0 h-full overflow-auto relative bg-white">
      <TopBarWrapperChats />
      <ChatsContent />
    </div>
  );
}
