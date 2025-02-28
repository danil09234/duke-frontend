import ChatPage from "@/components/Pages/ChatPage/ChatPage";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function ChatRoute() {
  return (
    <Sidebar>
      <ChatPage />
    </Sidebar>
  );
}
