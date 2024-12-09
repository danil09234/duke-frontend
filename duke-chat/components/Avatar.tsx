import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@shadcn/ui";

export function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="../resources/av2024-small.jpg" alt="avatar-image" />
      <AvatarFallback>V</AvatarFallback>
    </Avatar>
  );
}
