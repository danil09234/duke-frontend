import React from "react";
import Chats from "@/components/Pages/ChatsPage/ChatsPage";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function LibraryRoute() {
  return (
    <Sidebar>
      <Chats />
    </Sidebar>
  );
}
