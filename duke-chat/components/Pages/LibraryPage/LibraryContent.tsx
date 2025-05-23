import React from "react";
import { SearchIcon, MessagesSquare, Heart } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ChatsOverview } from "./ChatsOverview";
import { FavoritesEmpty } from "./FavoritesEmpty";

const LibraryContent = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center px-4 py-10 sm:px-6 md:px-8 lg:px-[100] overflow-y-auto scrollbar-hide">
      <div className="flex flex-col gap-8 max-w-4xl w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-2xl font-medium leading-tight text-slate-800">
            Knižnica chatov
          </div>
          <div className="mt-1.5 text-sm text-slate-500">
            Všetky vaše konverzácie s asistentom sú na jednom mieste v knižnici
            chatov.
          </div>
        </div>
        <Tabs defaultValue="chats" className="flex flex-col w-full">
          <div className="flex gap-10 justify-between items-center mt-6 w-full max-md:max-w-full">
            <TabsList
              className=" h-10 grid-cols-2 bg-[#F0F2F5]
            flex gap-1.5 items-start self-stretch py-1 my-auto font-medium text-right w-fit"
            >
              <TabsTrigger
                value="chats"
                className="h-full  data-[state=active]:text-[#19213D] data-[state=inactive]:text-[#666F8D] gap-1"
              >
                <MessagesSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Všetky chaty</span>
              </TabsTrigger>
              <TabsTrigger
                value="favorite"
                className="h-full justify-between items-center data-[state=active]:text-[#19213D] data-[state=inactive]:text-[#666F8D] gap-1"
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Obľúbené</span>
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center rounded-md shadow-sm border border-gray-200 bg-white w-full max-w-[320px] h-10 px-3 py-1.5">
              <SearchIcon className="w-4 text-[#666F8D] mr-2" />
              <input
                type="text"
                className="flex-grow flex-shrink-0 w-0 max-w-full placeholder-[#666F8D] bg-transparent focus:outline-none truncate"
                placeholder="Hľadaj chat..."
              />
            </div>
          </div>
          <Separator className="my-10 w-full" />

          <TabsContent value="chats">
            <ChatsOverview />
          </TabsContent>

          <TabsContent value="favorite">
            <FavoritesEmpty />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LibraryContent;
