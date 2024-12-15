"use client";

import { AssistantRuntimeProvider, useEdgeRuntime } from "@assistant-ui/react";
import { MyThread } from "@/components/ui/assistant-ui/thread";
import { makeMarkdownText } from "@assistant-ui/react-markdown";
import TopBarWrapper from "@/components/Topbar/TopBarWrapper";

const MarkdownText = makeMarkdownText();

export function ChatPageContent() {
  const runtime = useEdgeRuntime({ api: "/api/chat" });

  return (
    <div className="flex flex-col py-0 h-full overflow-hidden relative">
      <div className="hidden md:block">
        <TopBarWrapper />
      </div>
      <AssistantRuntimeProvider runtime={runtime}>
        <MyThread assistantMessage={{ components: { Text: MarkdownText } }} />
      </AssistantRuntimeProvider>
    </div>
  );
}
