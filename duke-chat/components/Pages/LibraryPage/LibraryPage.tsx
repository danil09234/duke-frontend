"use client";

import React from "react";

import { useSidebar } from "@/components/ui/sidebar";
import { LibraryPageContent } from "@/components/Pages/LibraryPage/LibraryPageContent";

function MainBodyWrapper() {
  return (
    <div className="flex flex-col h-full w-full max-h-[100dvh] overflow-y-auto">
      <Body />
    </div>
  );
}

function Body() {
  const { isMobile, state } = useSidebar();

  return (
    <div
      className={
        !isMobile
          ? "my-2 mr-2 rounded-2xl border shadow-lg overflow-hidden flex-1"
          : "overflow-hidden max-h-[90dvh]"
      }
    >
      <LibraryPageContent />
    </div>
  );
}

export default function LibraryPage() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col h-full w-full max-h-[100dvh] overflow-y-auto">
        <MainBodyWrapper />
      </div>
    </div>
  );
}
