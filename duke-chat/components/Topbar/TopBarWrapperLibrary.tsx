import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { handleNewChat } from "@/actions/chats";

const TopBarWrapperChats = (): JSX.Element => {
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
    <header className="flex justify-between items-center py-4 px-[24px] bg-background border-b border-border">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-base font-medium text-foreground">Knižnica</h1>

        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNewChat(user);
          }}
          passHref
        >
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
