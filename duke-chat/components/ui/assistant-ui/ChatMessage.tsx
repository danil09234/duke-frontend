import { FC } from "react";
import * as MessagePrimitive from "./MessagePrimitive";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconButton } from "./IconButton";
import { ChatMessageProps } from "./types";

export const ChatMessage: FC<ChatMessageProps> = ({
  name,
  time,
  message,
  actions,
}) => {
  const safeActions = actions || [];

  return (
    <MessagePrimitive.Root className="relative grid w-full max-w-3xl grid-cols-[auto_1fr] grid-rows-[auto_1fr] py-4 z-10">
      <Avatar className="col-start-1 row-span-full row-start-1 mr-4">
        <AvatarImage src="/resources/duke-avatar.png" alt="Assistant Avatar" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>

      <div className="col-start-2 row-start-1 flex flex-col w-full">
        <div className="flex gap-3 items-center">
          <span className="text-sm font-medium text-slate-800">{name}</span>
          <div className="w-0 h-4 border border-gray-100" />
          <span className="text-xs text-slate-500">{time}</span>
        </div>

        <MessagePrimitive.Content message={message} />
        <div className="flex gap-4 mt-4">
          {safeActions.map((action, index) => (
            <IconButton key={index} {...action} />
          ))}
        </div>
      </div>
    </MessagePrimitive.Root>
  );
};
