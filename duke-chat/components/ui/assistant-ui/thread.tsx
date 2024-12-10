"use client";

import {
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
  useThreadRuntime,
  useThread,
} from "@assistant-ui/react";
import type { FC } from "react";
import { SendHorizontalIcon, Plus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TooltipIconButton } from "@/components/ui/assistant-ui/tooltip-icon-button";
import { Card, CardContent } from "@/components/ui/card";

import {
  BanknoteIcon,
  FileText,
  MessageCircle,
  PenLine,
  Plane,
  Star,
} from "lucide-react";
import React from "react";

const cardData = {
  title: "Čo chcete vedieť o univerzite?",
  description:
    "Naša vyškolená umelá inteligencia vám pomôže s vašimi otázkami! Vyber si niektorú z často kladených otázok nižšie alebo polož vlastnú otázku!",
};

const cardsData = [
  {
    icon: <MessageCircle className="w-4 h-4 text-orange-500" />,
    text: "Ktorý študijný program na vybrať pre dceru?",
  },
  {
    icon: <Star className="w-4 h-4 text-orange-500" />,
    text: "Kedy je termín na podanie prihlášky na FEI KPI?",
  },
  {
    icon: <Plane className="w-4 h-4 text-orange-500" />,
    text: "Aké študijné programy ponúka Letecka fakulta?",
  },
  {
    icon: <BanknoteIcon className="w-4 h-4 text-orange-500" />,
    text: "Aké sú poplatky spojené so štúdiom alebo podaním prihlášky?",
  },
  {
    icon: <FileText className="w-4 h-4 text-orange-500" />,
    text: "Ako sa dá podať prihláška online pomocou MAIS?",
  },
  {
    icon: <PenLine className="w-4 h-4 text-orange-500" />,
    text: "Kde môžem nájsť informácie o prijímacích skúškach?",
  },
];

const StartMaking: FC = () => {
  return (
    <Card className="w-full max-w-2xl px-8 py-6 border-components-cards-borders-BR-color-2">
      <CardContent className="flex flex-col items-center gap-8 p-0">
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-[rgba(141,193,255,0.6)] to-[rgba(141,193,255,0)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-16 h-8 bg-components-sections-BG-color-1 rounded-sm border border-globals-global-borders-border-4 shadow-neutral-BS-regular">
                <div className="w-full h-2.5 bg-white" />
                <div className="w-full h-px bg-gray-200 mt-1" />
              </div>

              <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 shadow-[0px_3.51px_5.27px_#2375fd47] flex items-center justify-center">
                <Plus className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-display-3-medium text-components-inputs-select-text-text-dark text-base font-medium">
            {cardData.title}
          </h2>
          <p className="w-full max-w-md font-paragraph-default-regular text-components-inputs-select-text-text-neutral text-sm">
            {cardData.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const Frame: FC<{ onCardClick: (message: string) => void }> = ({
  onCardClick,
}) => {
  return (
    <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          className="border border-[#e3e6ea] shadow-sm cursor-pointer"
          onClick={() => onCardClick(card.text)}
        >
          <CardContent className="p-6 space-y-3">
            <div className="w-4">{card.icon}</div>
            <p className="text-sm text-gray-600 leading-[150%] line-clamp-2">
              {card.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const MyThread: FC = () => {
  const [hasMessages, setHasMessages] = React.useState(false);
  const thread = useThread();
  const messages = thread.messages;
  const threadRuntime = useThreadRuntime();
  
  const handleCardClick = (message: string) => {
    threadRuntime.append({
      role: "user",
      content: [{ type: "text", text: message }],
    });
    setHasMessages(true);
  };
  
  React.useEffect(() => {
    if (messages.length > 0) {
      setHasMessages(true);
    }
  }, [messages]);

  return (
    <ThreadPrimitive.Root className="bg-background flex-1 overflow-auto">
      <ThreadPrimitive.Viewport className="flex h-full flex-col items-center overflow-y-auto scroll-smooth bg-inherit px-4 pt-8">
        {hasMessages ? (
          <ThreadPrimitive.Messages
            components={{
              UserMessage: MyUserMessage,
              AssistantMessage: MyAssistantMessage,
            }}
          />
        ) : (
          <div className="flex flex-col items-center gap-8 mt-auto mb-4">
            <StartMaking />
            <Frame onCardClick={handleCardClick} />
          </div>
        )}

        {hasMessages && (<div className="min-h-8 flex-grow" />)}

        <div className="sticky bottom-0 mt-3 flex w-full max-w-2xl flex-col items-center justify-end rounded-t-lg bg-inherit pb-4">
          <MyComposer onSend={() => setHasMessages(true)} />
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
};

const MyComposer: FC<{ onSend?: () => void }> = ({ onSend }) => {
  return (
    <ComposerPrimitive.Root
      onSubmit={() => {
        if (onSend) onSend();
      }}
      className="focus-within:border-aui-ring/20 flex w-full flex-row items-center rounded-lg border bg-inherit px-2.5 shadow-sm transition-colors ease-in"
    >
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
