import { FC } from "react";
import { IconButtonProps } from "./types";

export const IconButton: FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  onClick,
}) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
  >
    {icon}
  </button>
);
