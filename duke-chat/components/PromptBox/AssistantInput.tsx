import * as React from "react";
import { TooltipIconButton } from "../ui/assistant-ui/tooltip-icon-button";
import { Send } from "lucide-react";

interface AssistantInputProps {
  placeholder: string;
}

export function AssistantInput({ placeholder }: AssistantInputProps) {
  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="flex gap-2 justify-between items-center py-2 pr-2 pl-4 w-full bg-white rounded-2xl border border-gray-100 border-solid">
        <div className="flex-1 items-center">
          <input
            autoFocus
            placeholder={placeholder}
            type="text"
            className="w-full truncate placeholder:text-gray-500 max-h-40 border-none bg-transparent p-2 text-sm outline-none focus:ring-0"
          />
        </div>
        <TooltipIconButton
          tooltip="Send"
          variant="default"
          className="bg-[#FF4100] w-10 h-10 rounded-md hover:bg-[#FF4100]/90"
        >
          <Send />
        </TooltipIconButton>
      </div>
    </div>
  );
}
