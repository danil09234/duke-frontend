"use client";

import React from "react";

import { ChatPageContent } from "@/components/ChatPageContent";
import { useSidebar } from "@/components/ui/sidebar";
import { ChatsPageContent } from "@/components/ChatsPageContent";

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
        true
          ? "my-2 mr-2 rounded-2xl border shadow-lg overflow-hidden flex-1"
          : "overflow-hidden flex-1"
      }
    >
      <ChatsPageContent />
    </div>
  );
}

export default function Chats() {
  return (
    <div className="flex h-screen">
      <MainBodyWrapper />
    </div>
  );
}
