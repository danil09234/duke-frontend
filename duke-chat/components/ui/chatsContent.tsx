import React from "react";
import { TooltipIconButton } from "./assistant-ui/tooltip-icon-button";
import { SearchIcon, SendHorizontalIcon } from "lucide-react";
import { Button } from "./button";

const ChatsContent = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center my-[40px]">
      <div className="flex flex-col gap-[40px] w-[775px]">
        <div
          className="w-full px-[32px] py-[48px] z-10"
          style={{
            backgroundImage: "url(/resources/PromptBox.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center gap-[24px]">
            <div className="gap-[6px] flex flex-col items-center">
              <p className="text-[22px]">Ahoj, Danylo</p>
              <p className="text-[14px] text-[#666F8D]">
                Vitaj na stránke asistenta pre uchádzačov!
              </p>
            </div>
            <div className="flex w-[400px] h-[58px] max-w-xl flex-row items-center rounded-[16px] border bg-white px-2.5 shadow-sm transition-colors ease-in">
              <input
                autoFocus
                placeholder="Ako vám môžem pomôcť?"
                type="text"
                className="flex-grow placeholder:text-gray-500 max-h-40 border-none bg-transparent p-4 pr-12 text-sm outline-none focus:ring-0"
              />
              <TooltipIconButton
                tooltip="Send"
                variant="default"
                className="bg-[#FF4100] w-[42px] h-[42px] rounded-[8px] hover:bg-[#FF4100]/90"
              >
                <SendHorizontalIcon />
              </TooltipIconButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] w-full ">
          <div className="flex items-center justify-between w-[775px]">
            <p className="text-[16px] text-[#666F8D]">Chaty (56)</p>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center rounded-[8px] shadow-sm border border-gray-200 bg-white box-border w-[266px] h-[40px] min-h-[39px] px-[12px] py-[6px]">
                <SearchIcon className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  className="flex-grow placeholder-gray-500 bg-transparent focus:outline-none"
                  placeholder="Hľadáj chat..."
                />
              </div>

              <Button className="bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 text-[#666F8D] border-[#F0F2F5] px-[12px] py-[6px]">
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
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChatsContent;
