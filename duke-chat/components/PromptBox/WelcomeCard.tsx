import * as React from "react";
import { UserGreeting } from "./UserGreeting";
import { AssistantInput } from "./AssistantInput";

interface WelcomeCardProps {
  userName: string;
  welcomeMessage: string;
  inputPlaceholder: string;
}

export function WelcomeCard({
  userName,
  welcomeMessage,
  inputPlaceholder,
}: WelcomeCardProps) {
  return (
    <div
      className="flex w-full overflow-vidible flex-col justify-center items-center px-8 py-12 bg-white rounded-lg border border-gray-200 border-solid shadow-sm max-md:px-5"
      style={{
        backgroundImage: "url('/resources/background-gradient.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col max-w-[400px] w-full">
        <UserGreeting userName={userName} welcomeMessage={welcomeMessage} />
        <AssistantInput placeholder={inputPlaceholder} />
      </div>
    </div>
  );
}
