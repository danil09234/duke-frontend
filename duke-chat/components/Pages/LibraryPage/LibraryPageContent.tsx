"use client";

import LibraryContent from "@/components/Pages/LibraryPage/LibraryContent";
import TopBarWrapperLibrary from "@/components/Topbar/TopBarWrapperLibrary";

export function LibraryPageContent() {
  return (
    <div className="flex flex-col py-0 h-full overflow-auto relative bg-white">
      <TopBarWrapperLibrary />
      <LibraryContent />
    </div>
  );
}
