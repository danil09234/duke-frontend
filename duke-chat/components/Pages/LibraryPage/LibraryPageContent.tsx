"use client";

import TopBarWrapperChats from "@/components/Topbar/TopBarWrapperChats";
import LibraryContent from "@/components/Pages/LibraryPage/LibraryContent";

export function LibraryPageContent() {
  return (
    <div className="flex flex-col py-0 h-full overflow-auto relative bg-white">
      <TopBarWrapperChats />
      <LibraryContent />
    </div>
  );
}
