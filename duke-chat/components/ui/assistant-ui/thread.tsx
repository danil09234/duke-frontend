"use client";

import {
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
  useThreadRuntime,
  useThread,
} from "@assistant-ui/react";
import type { FC } from "react";
import { SendHorizontalIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import ChatBackgroundSVG from "@/public/resources/background-chat.svg";
import ChatLibraryPNG from "@/public/resources/chat-illustration.svg";
import {MarkdownText} from "@/components/ui/assistant-ui/markdown-text";
import { handleNewMessage } from "@/actions/chats";

const cardData = {
  title: "Čo chcete vedieť o univerzite?",
  description:
    "Naša vyškolená umelá inteligencia vám pomôže s vašimi otázkami! Vyber si niektorú z často kladených otázok nižšie alebo polož vlastnú otázku!",
};

const cardsData = [
  {
    icon: <MessageCircle className="w-4 h-4 text-orange-500" />,
    text: "Aké sú podmienky prijatia na bakalárske štúdium?",
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
    <Card className="w-full max-w-3xl px-8 py-12 border-components-cards-borders-BR-color-2 z-10">
      <CardContent className="flex flex-col items-center gap-8 p-0">
        <ChatLibraryPNG />
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-display-3-medium text-components-inputs-select-text-text-dark text-base font-medium">
            {cardData.title}
          </h2>
          <p className="w-full max-w-md font-paragraph-default-regular text-sm text-[#666F8D]">
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
    <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          className="border border-[#e3e6ea] shadow-sm cursor-pointer bg-white"
          onClick={() => onCardClick(card.text)}
        >
          <CardContent className="p-6 space-y-3">
            <div className="w-4">{card.icon}</div>
            <p className="text-sm text-[#666F8D] leading-[150%] line-clamp-2">
              {card.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

function CSVBackgroundEffect() {
  return (
    <ChatBackgroundSVG
      className="absolute overflow-visible"
      style={{
        width: "1064px",
        height: "auto",
        transform: "translateY(400px)",
      }}
    />
  );
}

export const MyThread: FC = () => {
  const [hasMessages, setHasMessages] = React.useState(false);
  const thread = useThread();
  const messages = thread.messages;
  const threadRuntime = useThreadRuntime();
 
  const handleCardClick = async (message: string) => {
    console.log('Card clicked with message:', message);
    const chatId = window.location.pathname.split("/")[2];
    await handleNewMessage(chatId, message);
    threadRuntime.append({
      role: "user",
      content: [{ type: "text", text: message }],
    });
    setHasMessages(true);
    const inputElement = document.querySelector('textarea');
    if (inputElement) {
      inputElement.value = ''; // Сброс значения текстового поля
    }
  };

  React.useEffect(() => {
    if (messages.length > 0) {
      setHasMessages(true);
    }
  }, [messages]);

  return (
    <>
      <ThreadPrimitive.Root className="bg-background flex-1 overflow-auto">
        <ThreadPrimitive.Viewport className="flex h-full flex-col items-center overflow-y-auto scroll-smooth bg-inherit px-4 z-10 pt-4 scrollbar-hide">
          {hasMessages ? (
            <ThreadPrimitive.Messages
              components={{
                UserMessage: MyUserMessage,
                AssistantMessage: MyAssistantMessage,
              }}
            />
          ) : (
            <div className="flex flex-col items-center gap-8 mt-auto mb-4 z-10">
              <StartMaking />
              <Frame onCardClick={handleCardClick} />
            </div>
          )}

          {hasMessages && <div className="min-h-8 flex-grow" />}
        </ThreadPrimitive.Viewport>
      </ThreadPrimitive.Root>
      <div className="flex w-full justify-center px-4 bg-white">
        <div className="sticky bottom-0 mt-3 flex w-full max-w-3xl flex-col items-center justify-end rounded-t-lg pb-4 z-10">
          <MyComposer
            onSend={() => setHasMessages(true)}
            className="bg-white"
            setHasMessages={setHasMessages}
          />
        </div>
      </div>
      <CSVBackgroundEffect />
    </>
  );
};

const MyComposer: FC<{ onSend?: () => void; className?: string; setHasMessages: (value: boolean) => void }> = ({ onSend, className, setHasMessages }) => {
  const [chatId, setChatId] = React.useState(window.location.pathname.split("/")[2]);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async () => {
    console.log('handleSubmit called');
    if (onSend) onSend();
    if (message.trim() !== "") {
      console.log('User message:', message);
      console.log('Current chat ID:', chatId);
      await handleNewMessage(chatId, message);
      setMessage(""); // Reset message state
      setHasMessages(true); // Update component state
      console.log('Message sent and input reset');
    } else {
      console.error('Message is empty');
    }
  };

  React.useEffect(() => {
    const currentChatId = window.location.pathname.split("/")[2];
    setChatId(currentChatId);
    console.log('Component mounted or updated');
    console.log('Current chat ID on mount/update:', currentChatId);
    setMessage(""); // Reset message state on chat change
  }, [window.location.pathname]);

  return (
    <ComposerPrimitive.Root
      onSubmit={handleSubmit}
      className={
        "focus-within:border-aui-ring/20 flex w-full flex-row items-center rounded-lg border bg-inherit px-2.5 shadow-sm transition-colors ease-in " +
        className
      }
    >
      <ComposerPrimitive.Input
        autoFocus
        placeholder="Write a message..."
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="placeholder:text-muted-foreground size-full max-h-40 resize-none border-none bg-transparent p-4 pr-12 text-sm outline-none focus:ring-0 disabled:cursor-not-allowed"
      />
      <ComposerPrimitive.Send asChild>
        <TooltipIconButton
          tooltip="Send"
          variant="default"
          className="my-2.5 size-8 p-2 transition-opacity ease-in"
          onClick={handleSubmit}
        >
          <SendHorizontalIcon />
        </TooltipIconButton>
      </ComposerPrimitive.Send>
    </ComposerPrimitive.Root>
  );
};

const MyUserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="grid w-full max-w-3xl auto-rows-auto grid-cols-[minmax(72px,1fr)_auto] gap-y-2 py-4 z-10">
      <div className="bg-muted text-foreground col-start-2 row-start-1 max-w-xl break-words rounded-3xl px-5 py-2.5">
        <MessagePrimitive.Content components={{ Text: MarkdownText }} />
      </div>
    </MessagePrimitive.Root>
  );
};

const MyAssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root className="relative grid w-full max-w-3xl grid-cols-[auto_1fr] grid-rows-[auto_1fr] py-4 z-10">
      <Avatar className="col-start-1 row-span-full row-start-1 mr-4">
        <AvatarImage src="/resources/duke-avatar.png" alt="Assistant Avatar" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>

      <div className="col-start-2 row-start-1 flex flex-col w-full">
        <div className="flex gap-3 items-center">
          <span className="text-sm font-medium text-slate-800">
            DUKE Assistant
          </span>
          <div className="w-0 h-4 border border-gray-100" />
          <span className="text-xs text-slate-500">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div className="text-[#666F8D] mt-2">
          <MessagePrimitive.Content components={{ Text: MarkdownText }} />
        </div>
      </div>
    </MessagePrimitive.Root>
  );
};
