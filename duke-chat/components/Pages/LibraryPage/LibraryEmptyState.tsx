import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import ChatLibraryPNG from "@/public/resources/chat-illustration.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { handleNewChat } from "@/actions/chats";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

const cardData = {
  title: "Chcete najsť dôležitý chat?",
  description:
    "Momentálne nemáte žiadne obľúbené chaty. Začnite si nový chat alebo označte existujúci, aby ste vždy rýchlo našli tú správnu konverzáciu.",
  subdescription: "Stačí začať nový chat!",
  buttonText: "Nový chat",
};

export default function LibraryEmptyState(): JSX.Element {
  const [user, setUser] = useState<User | any>(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.error("Error getting user", error?.message);
      } else {
        setUser(data?.user);
      }
    }
    getUser();
  }, []);

  return (
    <Card className="w-full px-8 py-6 border-components-cards-borders-BR-color-2 z-10">
      <CardContent className="flex flex-col items-center gap-8 p-0">
        <ChatLibraryPNG />
        <div className="flex flex-col items-center gap-2 text-center max-w-[384]">
          <h2 className="font-display-3-medium text-components-inputs-select-text-text-dark text-base font-medium">
            {cardData.title}
          </h2>
          <p className="w-full max-w-md font-paragraph-default-regular text-sm text-[#666F8D]">
            {cardData.description}
          </p>
          <p className="w-full max-w-md font-paragraph-default-regular text-sm text-[#666F8D] mt-2">
            {cardData.subdescription}
          </p>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNewChat(user);
                }}
              >
                <Button className="inline-flex items-center gap-1 bg-[#FF4100] hover:bg-[#FF4100]/90 text-white border-none font-display-1-medium text-xs font-medium rounded-[8]">
                  <span>Nový chat</span>
                  <Plus className="h-2.5 w-2.5" />
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </CardContent>
    </Card>
  );
}
