"use client";

import TopBarWrapperChats from "@/components/Topbar/TopBarWrapperChats";
import ChatsContent from "./ChatsContent";

export function ChatsPageContent() {
  return (
    <div className="flex flex-col py-0 h-full overflow-auto relative bg-white">
      <div className="hidden md:block">
        <TopBarWrapperChats />
      </div>
      <ChatsContent />
    </div>
  );
}
