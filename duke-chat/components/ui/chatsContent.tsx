import React from "react";
import { TooltipIconButton } from "./assistant-ui/tooltip-icon-button";
import { SearchIcon, SendHorizontalIcon } from "lucide-react";
import { Button } from "./button";
import ChatsGrid from "../ChatsGrid";

const ChatsContent = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center items-center px-4 py-10 sm:px-6 md:px-8 lg:px-[100] overflow-y-auto scrollbar-hide">
      <div className="flex flex-col gap-10 max-w-4xl w-full">
        <div
          className="w-full px-8 py-12 z-10 overflow-x-visible"
          style={{
            backgroundImage: "url(/resources/PromptBox.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="gap-1.5 flex flex-col items-center">
              <p className="text-xl">Ahoj, Danylo</p>
              <p className="text-sm text-[#666F8D]">
                Vitaj na stránke asistenta pre uchádzačov!
              </p>
            </div>
            <div className="flex w-full max-w-md h-14 flex-row items-center rounded-lg border bg-white px-2.5 shadow-sm transition-colors ease-in">
              <input
                autoFocus
                placeholder="Ako vám môžem pomôcť?"
                type="text"
                className="flex-grow placeholder:text-gray-500 max-h-40 border-none bg-transparent p-4 pr-12 text-sm outline-none focus:ring-0"
              />
              <TooltipIconButton
                tooltip="Send"
                variant="default"
                className="bg-[#FF4100] w-10 h-10 rounded-md hover:bg-[#FF4100]/90"
              >
                <SendHorizontalIcon />
              </TooltipIconButton>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col gap-8 w-full overflow-y-hidden overflow-x-visible">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full overflow-x-visible">
            <p className="text-base text-[#666F8D] mb-4 sm:mb-0">Chaty (56)</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto overflow-visible">
              <div className="flex items-center rounded-md shadow-sm border border-gray-200 bg-white w-full sm:w-auto h-10 px-3 py-1.5">
                <SearchIcon className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  className="flex-grow placeholder-gray-500 bg-transparent focus:outline-none"
                  placeholder="Hľadáj chat..."
                />
              </div>

              <Button className="bg-white hover:bg-[#FFFFFF]/90 text-[#666F8D] border-[#F0F2F5] px-3 py-1.5 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M3 6h18" />
                  <path d="M7 12h10" />
                  <path d="M10 18h4" />
                </svg>
                Zoradiť podľa
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </div>
          <ChatsGrid />
        </div>
      </div>
    </div>
  );
};

export default ChatsContent;
