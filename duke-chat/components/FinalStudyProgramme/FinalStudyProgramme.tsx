import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

interface StudyProgramme {
    name: string;
    code?: string;
}

const FinalStudyProgramme = ({ name, code }: StudyProgramme): JSX.Element => {
    const detailUrl = `https://res.tuke.sk/api/programme_detail/${code ?? ""}?lang=sk`;
    return (
        <Card
            className="w-full sm:w-[415px] mx-auto bg-components-cards-backgrounds-BG-color-1 border-components-cards-borders-BR-color-1"
        >
            <CardContent className="flex flex-col items-center gap-6 pt-6">
                <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                        <h2 className="w-full font-display-2-medium text-components-titles-paragraphs-text-dark text-center text-[14px] leading-[130%] font-medium capitalize">
                            {name}
                        </h2>

                        <p className="w-full font-paragraph-default-regular text-components-inputs-select-text-text-neutral text-center text-[14px] leading-[150%]">
                            Na základe tvojich odpovedí sa zdá, že odbor <span className="capitalize">{name}</span> by bol pre teba tou správnou voľbou!
                        </p>
                    </div>

                    <Button variant="link" asChild>
                        <a
                            href={detailUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 w-full text-components-links-text-text-accent hover:no-underline"
                        >
                            <span className="font-display-2-medium text-[14px] leading-[130%] font-medium text-components-buttons-primary-text-text-dark-mode">
                                Čítať viac o štúdiu: <span className="capitalize">{name}</span>
                            </span>
                            <ArrowRight className="w-4 h-4 text-components-buttons-primary-text-text-dark-mode" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default FinalStudyProgramme;