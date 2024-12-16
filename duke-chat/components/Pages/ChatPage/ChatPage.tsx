"use client";

import React from "react";

import { ChatPageContent } from "@/components/Pages/ChatPage/ChatPageContent";
import { useSidebar } from "@/components/ui/sidebar";

function MainBodyWrapper() {
  return (
    <div className="flex flex-col h-full w-full">
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
          : "overflow-hidden flex-1"
      }
    >
      <ChatPageContent />
    </div>
  );
}

export default function ChatPage() {
  return (
    <div className="flex h-full bg-transparent">
      <MainBodyWrapper />
    </div>
  );
}
