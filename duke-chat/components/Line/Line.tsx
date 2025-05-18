import { Separator } from "@/components/ui/separator";
import React from "react";

const Line: React.FC = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center">
            <Separator
                orientation="vertical"
                className="mb-0 h-8"
            />
        </div>
    );
};

export default Line;