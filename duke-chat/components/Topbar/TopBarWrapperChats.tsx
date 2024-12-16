import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

const TopBarWrapperChats = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center py-4 px-[24px] bg-background border-b border-border">
      <NavigationMenu className="w-full flex items-center justify-between">
        <h1 className="text-base font-medium text-foreground">Chaty</h1>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to={"/chats/chat1234"}>
              <Button className="bg-[#FF4100] hover:bg-[#FF4100]/90 text-white px-4 py-2">
                <Plus />
                Nový chat
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default TopBarWrapperChats;
