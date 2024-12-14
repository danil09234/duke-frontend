import * as React from "react";
import { ChatCardProps } from "@/components/Pages/LibraryPage/types";
import { Separator } from "@/components/ui/separator";

export const LibrarySnippetCard: React.FC<ChatCardProps> = ({
  icon,
  title,
  description,
  date,
  iconUrls,
}) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink gap-3 px-4 py-6 bg-white rounded-lg border border-gray-100 border-solid shadow-sm basis-0 min-w-[170px]">
      <div className="flex gap-3 items-start w-full text-sm">
        <img
          loading="lazy"
          src={icon}
          alt={`${title} icon`}
          className="object-contain shrink-0 w-8 shadow-sm aspect-square"
        />
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
        <div className="flex gap-2.5 items-center">
          {iconUrls.map((url, index) => (
            <img
              key={index}
              loading="lazy"
              src={url}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
