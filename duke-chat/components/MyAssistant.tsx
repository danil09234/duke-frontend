"use client";

import { AssistantRuntimeProvider, useEdgeRuntime } from "@assistant-ui/react";
import { MyThread } from "@/components/ui/assistant-ui/thread";
import { makeMarkdownText } from "@assistant-ui/react-markdown";
import TopBarWrapper from "@/components/ui/TopBarWrapper";

const MarkdownText = makeMarkdownText();

export function MyAssistant() {
  const runtime = useEdgeRuntime({ api: "/api/chat" });

  return (
    <div className="flex flex-col p-0 flex-1 h-screen">
      <TopBarWrapper />
      <AssistantRuntimeProvider runtime={runtime} className="flex-1">
        <MyThread
          assistantMessage={{ components: { Text: MarkdownText } }}
        />
      </AssistantRuntimeProvider>
    </div>
  );
}