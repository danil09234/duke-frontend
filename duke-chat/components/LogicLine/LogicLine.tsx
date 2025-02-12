import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {prettifyStudyForm} from "@/lib/studyFormPrettifier";
import {prettifyLanguage} from "@/lib/languagePrettifier";

interface LogicLinesProps {
    value: string;
}

const LogicLines: React.FC<LogicLinesProps> = ({ value }): JSX.Element => {
    return (
        <div className="flex flex-col items-center">
            <Separator
                orientation="vertical"
                className="mb-0 h-8"
            />
            <Card className="p-0 border border-[#f0f2f5]">
                <Badge
                    variant="secondary"
                    className="bg-components-badges-backgrounds-BG-color-1 text-components-badges-texts-dark font-display-1-regular text-xs rounded-[4px] px-2 py-1"
                >
                    {prettifyStudyForm(prettifyLanguage(value))}
                </Badge>
            </Card>
            <Separator
                orientation="vertical"
                className="mt-0 h-8"
            />
        </div>
    );
};

export default LogicLines;
