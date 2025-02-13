import { Plus } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TopBarWrapperChats = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center py-4 px-[24px] bg-background border-b border-border">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-base font-medium text-foreground">Knižnica</h1>

        <Link href="/chats/ceb37deb8eeeb2aa4997b2eee77/" passHref>
          <Button className="bg-[#FF4100] hover:bg-[#FF4100]/90 text-white px-4 py-2">
            <Plus />
            Nový chat
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default TopBarWrapperChats;
