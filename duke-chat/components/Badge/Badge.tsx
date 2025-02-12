import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FlaskConical } from "lucide-react";
import React from "react";

export function BadgeDisclaimer() {
  return (
    <Badge
      variant="secondary"
      className="bg-[#fff3ef] hover:bg-[#fff3ef] text-[#ff4100] pl-1.5 pr-2 py-1 gap-1.5 h-auto rounded-full"
    >
      {/* <Avatar className="w-4 h-4 col-start-1 row-span-full row-start-1 rounded-full overflow-hidden">
        <AvatarImage
          src="/resources/duke-avatar-badge.svg"
          alt="Assistant Avatar"
          className="object-cover"
        />
        <AvatarFallback>A</AvatarFallback>
      </Avatar> */}

      <FlaskConical className="w-3 h-3 " />

      <span className="text-[12px] font-medium leading-none">
        Prvá testová verzia bakalárskej práce
      </span>
    </Badge>
  );
}
