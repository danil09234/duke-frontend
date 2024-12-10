"use client";

import {
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
} from "@assistant-ui/react";
import type { FC } from "react";
import { SendHorizontalIcon, Plus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TooltipIconButton } from "@/components/ui/assistant-ui/tooltip-icon-button";
import { Card, CardContent } from "@/components/ui/card";

const cardData = {
  title: "Čo chcete vedieť o univerzite?",
  description:
    "Naša vyškolená umelá inteligencia vám pomôže s vašimi otázkami! Vyber si niektorú z často kladených otázok nižšie alebo polož vlastnú otázku!",
};

const StartMaking: FC = () => {
  return (
    <Card className="w-[654px] px-[135px] py-[50px] border-components-cards-borders-BR-color-2">
      <CardContent className="flex flex-col items-center gap-8 p-0">
        <div className="relative w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[rgba(141,193,255,0.6)] to-[rgba(141,193,255,0)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-[62px] h-8 bg-components-sections-BG-color-1 rounded-[3px] border-[0.6px] border-globals-global-borders-border-4 shadow-neutral-BS-regular">
                <div className="w-full h-2.5 bg-white" />
                <div className="w-full h-px bg-gray-200 mt-1" />
              </div>

              <div className="absolute bottom-[-21px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 shadow-[0px_3.51px_5.27px_#2375fd47] flex items-center justify-center">
                <Plus className="w-[9px] h-[9px] text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-display-3-medium text-components-inputs-select-text-text-dark text-base font-medium">
            {cardData.title}
          </h2>
          <p className="w-[383px] font-paragraph-default-regular text-components-inputs-select-text-text-neutral text-sm">
            {cardData.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const MyThread: FC = () => {
  return (
    <ThreadPrimitive.Root className="bg-background h-full">
      <ThreadPrimitive.Viewport className="flex h-full flex-col items-center overflow-y-scroll scroll-smooth bg-inherit px-4 pt-8">
        <StartMaking />

        <ThreadPrimitive.Messages
          components={{
            UserMessage: MyUserMessage,
            AssistantMessage: MyAssistantMessage,
          }}
        />

        <div className="min-h-8 flex-grow" />

        <div className="sticky bottom-0 mt-3 flex w-full max-w-2xl flex-col items-center justify-end rounded-t-lg bg-inherit pb-4">
          <MyComposer />
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
};

const MyComposer: FC = () => {
  return (
    <ComposerPrimitive.Root className="focus-within:border-aui-ring/20 flex w-full flex-row items-center rounded-lg border bg-inherit px-2.5 shadow-sm transition-colors ease-in">
      <ComposerPrimitive.Input
        autoFocus
        placeholder="Write a message..."
        rows={1}
        className="placeholder:text-muted-foreground size-full max-h-40 resize-none border-none bg-transparent p-4 pr-12 text-sm outline-none focus:ring-0 disabled:cursor-not-allowed"
      />
      <ComposerPrimitive.Send asChild>
        <TooltipIconButton
          tooltip="Send"
          variant="default"
          className="my-2.5 size-8 p-2 transition-opacity ease-in"
        >
          <SendHorizontalIcon />
        </TooltipIconButton>
      </ComposerPrimitive.Send>
    </ComposerPrimitive.Root>
  );
};

const MyUserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="grid w-full max-w-2xl auto-rows-auto grid-cols-[minmax(72px,1fr)_auto] gap-y-2 py-4">
      <div className="bg-muted text-foreground col-start-2 row-start-1 max-w-xl break-words rounded-3xl px-5 py-2.5">
        <MessagePrimitive.Content />
      </div>
    </MessagePrimitive.Root>
  );
};

const MyAssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="relative grid w-full max-w-2xl grid-cols-[auto_1fr] grid-rows-[auto_1fr] py-4">
      <Avatar className="col-start-1 row-span-full row-start-1 mr-4">
        <AvatarFallback>A</AvatarFallback>
      </Avatar>

      <div className="text-foreground col-start-2 row-start-1 my-1.5 max-w-xl break-words leading-7">
        <MessagePrimitive.Content />
      </div>
    </MessagePrimitive.Root>
  );
};
