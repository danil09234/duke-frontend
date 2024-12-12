import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Heart,
  MessageSquare,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import React from "react";

interface ChatCardProps {
  date: string;
  title: string;
  views: number;
}

const ChatHistory: React.FC<ChatCardProps> = ({ date, title, views }) => {
  return (
    <Card className="flex items-start gap-4 p-6">
      <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
        {/* Date Section */}
        <div className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#666f8d]" />
          <span className="font-display-1-medium text-xs text-[#666f8d]">
            {date}
          </span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#666f8d] font-normal leading-[21px]">
              {title}
            </p>
          </div>

          <Separator className="w-full" />

          {/* Actions Section */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-[#666f8d]" />
              <span className="font-display-1-medium text-xs text-[#666f8d]">
                {views}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Share2 className="w-3.5 h-3.5 text-[#666f8d]" />
              <Heart className="w-3.5 h-3.5 text-[#FF4100]" />
              <MoreHorizontal className="w-3.5 h-3.5 text-[#666f8d]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatHistory;
