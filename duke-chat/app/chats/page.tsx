import Chats from "@/components/Pages/ChatsPage/ChatsPage";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function ChatsRoute() {
  return (
    <Sidebar>
      <Chats />
    </Sidebar>
  );
}
