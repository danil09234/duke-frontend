import { FC } from "react";
import { MessagePrimitiveProps } from "./types";

export const Root: FC<MessagePrimitiveProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const Content: FC<{ message?: string }> = ({ message }) => (
  <div className="text-sm leading-5 text-slate-500">{message}</div>
);
