import * as React from "react";

interface UserGreetingProps {
  userName: string;
  welcomeMessage: string;
}

export function UserGreeting({ userName, welcomeMessage }: UserGreetingProps) {
  return (
    <div className="flex flex-col w-full text-center">
      <div className="self-center text-2xl font-medium leading-tight text-slate-800">
        Ahoj, {userName}
      </div>
      <div className="mt-1.5 text-sm text-slate-500">{welcomeMessage}</div>
    </div>
  );
}
