import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

interface FinalStudyProgrammeProps {
    programmeName: string;
}

const FinalStudyProgramme = ({ programmeName }: FinalStudyProgrammeProps): JSX.Element => {
    return (
        <Card
            className="w-[415px] bg-components-cards-backgrounds-BG-color-1 border-components-cards-borders-BR-color-1"
        >
            <CardContent className="flex flex-col items-center gap-6 pt-6">
                <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                        <h2 className="w-full font-display-2-medium text-components-titles-paragraphs-text-dark text-center text-[14px] leading-[130%] font-medium">
                            {programmeName}
                        </h2>

                        <p className="w-full font-paragraph-default-regular text-components-inputs-select-text-text-neutral text-center text-[14px] leading-[150%]">
                            Na základe tvojich odpovedí sa zdá, že odbor {programmeName} by bol pre teba tou správnou voľbou!
                        </p>
                    </div>

                    <Button
                        variant="link"
                        className="flex items-center justify-center gap-1 w-full text-components-links-text-text-accent hover:no-underline"
                    >
                        <span className="font-display-2-medium text-[14px] leading-[130%] font-medium">
                            Čítať viac o štúdiu: {programmeName}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default FinalStudyProgramme;