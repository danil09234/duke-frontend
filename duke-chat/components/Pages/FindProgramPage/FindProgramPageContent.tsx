"use client";


import TopBarWrapperFindProgram from "@/components/Topbar/TopBarWrapperFindProgram";

export function FindProgramPageContent() {
    return (
        <div className="flex flex-col py-0 h-full overflow-auto relative bg-white">
            <div className="hidden md:block">
                <TopBarWrapperFindProgram />
            </div>
        </div>
    );
}
