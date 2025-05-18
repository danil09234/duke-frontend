import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@shadcn/ui";

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="../resources/avatar-user.png" alt="avatar-image" />
      <AvatarFallback>V</AvatarFallback>
    </Avatar>
  );
}
