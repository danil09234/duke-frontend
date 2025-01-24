import { Badge } from "@/components/ui/badge";
import React from "react";

const TopBarWrapperFindProgram = (): JSX.Element => {
    return (
        <header className="flex justify-between items-center p-4 bg-background border-b border-border">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <h1 className="text-base font-medium text-foreground">Nájsť vhodný študijný program </h1>
                </div>
            </div>

            <div className="flex items-center gap-4" />
        </header>
    );
};

export default TopBarWrapperFindProgram;
