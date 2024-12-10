import React from "react";

import { ChatPageContent } from "@/components/ChatPageContent";

function MainBodyWrapper() {
  return (
    <div className="flex flex-col h-full w-full">
      <Body />
    </div>
  );
}

function Body() {
  return (
    <div
      className="my-2 mr-2 rounded-2xl border shadow-lg overflow-hidden flex-1"
    >
      <ChatPageContent />
    </div>
  );
}

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <MainBodyWrapper />
    </div>
  );
}
