import React from "react";
import { SearchIcon, ListFilter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatsGrid from "./ChatsGrid";
import { WelcomeCard } from "@/components/PromptBox/WelcomeCard";

const ChatsContent = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center px-4 py-10 sm:px-6 md:px-8 lg:px-[100] overflow-y-auto scrollbar-hide"
      style={{
        backgroundImage: "url('/resources/big-background-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-10 max-w-4xl w-full">
        <WelcomeCard
          userName="Vladyslav"
          welcomeMessage="Vitaj na stránke asistenta pre uchádzačov!"
          inputPlaceholder="Ako vám môžem pomôcť?"
        />

        <div className="h-full flex flex-col gap-8 w-full overflow-y-hidden overflow-x-visible">
          <div className="flex flex-col items-left sm:flex-row sm:items-center justify-between w-full overflow-x-visible">
            <p className="text-base text-[#666F8D] h-fit mb-4 sm:mb-0 flex items-left">
              Chaty (6)
            </p>
            <div
              className="flex sm:flex-row items-center gap-2
             w-full sm:w-auto overflow-visible sm:flex-nowrap"
            >
              <div className="flex items-center rounded-md shadow-sm border border-gray-200 bg-white w-full sm:w-auto h-10 px-3 py-1.5">
                <SearchIcon className="w-4 text-[#666F8D] mr-2" />
                <input
                  type="text"
                  className="flex-grow placeholder-[#666F8D] bg-transparent focus:outline-none"
                  placeholder="Hľadáj chat..."
                />
              </div>

              <Button className="h-10 bg-white hover:bg-[#FFFFFF]/90 text-[#666F8D] border border-gray-200 px-3 py-3 flex items-center">
                <ListFilter />
                <span className="hidden xs:inline">Zoradiť podľa</span>
                <ChevronDown className="hidden xs:inline" />
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
