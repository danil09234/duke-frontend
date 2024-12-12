"use client";

import TopBarWrapperChats from "@/components/ui/TopBarWrapperChats";
import ChatsContent from "./ui/chatsContent";

export function ChatsPageContent() {
  return (
    <div className="flex flex-col py-0 h-full overflow-hidden relative  bg-white">
      <TopBarWrapperChats />
      <ChatsContent />
    </div>
  );
}
