import {useSidebar} from "@/components/ui/sidebar";
import React from "react";
import {FindProgramPageContent} from "@/components/Pages/FindProgramPage/FindProgramPageContent";


function Body() {
    const { isMobile, state } = useSidebar();

    return (
        <div
            className={
                !isMobile
                    ? "my-2 mr-2 rounded-2xl border shadow-lg overflow-hidden flex-1"
                    : "overflow-hidden flex-1"
            }
        >
            <FindProgramPageContent />
        </div>
    );
}


export default function FindProgram() {
    return (
        <div className="flex h-full">
            <div className="flex flex-col h-full w-full max-h-full overflow-y-auto">
                <div className="flex flex-col h-full w-full max-h-full overflow-y-auto">
                    <Body />
                </div>
            </div>
        </div>
    );
}
