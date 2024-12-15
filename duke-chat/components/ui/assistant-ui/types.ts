import { ReactNode } from "react";

export interface IconButtonProps {
  icon: ReactNode;
  ariaLabel: string;
  onClick?: () => void;
}

export interface ChatMessageProps {
  name: string;
  time: string;
  message: string;
  actions: IconButtonProps[];
}

export interface MessagePrimitiveProps {
  children: ReactNode;
  className?: string;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  className?: string;
}
