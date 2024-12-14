import * as React from "react";
import { ChatCardProps } from "@/components/Pages/LibraryPage/types";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { Heart, Share2, EllipsisVertical } from "lucide-react";

export const LibrarySnippetCard: React.FC<ChatCardProps> = ({
  icon,
  title,
  description,
  date,
}) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink gap-3 px-4 py-6 bg-white rounded-lg border border-gray-100 border-solid shadow-sm basis-0 min-w-[170px]">
      <div className="flex gap-3 items-start w-full text-sm">
        <Avatar className="w-8 h-8 border border-solid border-[#f0f2f5] shadow-[inset_0px_-2px_4px_0px_rgba(35,136,255,0.08)] flex items-center justify-center">
          {icon &&
            React.isValidElement(icon) &&
            React.cloneElement(icon as React.ReactElement, {
              style: { color: "#FF4100", width: "16px", height: "16px" },
            })}
        </Avatar>

        <div className="w-full flex flex-col flex-1 shrink basis-0">
          <div className="flex flex-col w-full">
            <div className="w-full font-medium leading-tight text-slate-800">
              {title}
            </div>
            <div
              className="w-full leading-5 text-slate-500 flex-1"
              style={{
                wordBreak: "break-word",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
      <Separator className="w-full bg-[#F0F2F5] mt-auto" />
      <div className="flex gap-3 items-start mt-3 w-full">
        <div className="flex-1 shrink text-xs basis-0 text-slate-500">
          {date}
        </div>
        <div className="text-[#666F8D] flex flex-row gap-2">
          <Heart className="w-[14px] h-[14px]" />
          <Share2 className="w-[14px] h-[14px]" />
          <EllipsisVertical className="w-[14px] h-[14px]" />
        </div>
      </div>
    </div>
  );
};
