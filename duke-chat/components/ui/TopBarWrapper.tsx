import { Badge } from "@/components/ui/badge";
import React from "react";

const TopBarWrapper = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center p-4 bg-background border-b border-border">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-medium text-foreground">Nový chat</h1>

          <Badge
            variant="secondary"
            className="px-2 py-1 text-xs font-medium shadow-sm"
          >
            Človek + AI
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-4" />
    </header>
  );
};

export default TopBarWrapper;
