import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import { prettifyLanguage } from "@/lib/languagePrettifier";
import { prettifyStudyForm } from "@/lib/studyFormPrettifier";

interface Answer {
    id: string;
    text: string;
}

interface QuestionItemProps {
    questionNumber: number;
    questionText: string;
    answers: Answer[];
    onAnswerClick: (answer: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ questionNumber, questionText, answers, onAnswerClick }): JSX.Element => {
    return (
        <div className="flex flex-col w-full max-w-[415px] items-start gap-2 mx-auto">
            <Card className="overflow-hidden border border-solid border-[#e3e6ea] shadow-neutral-BS-regular">
                <CardHeader className="bg-[#f7f8fa] p-4">
                    <div className="flex flex-col gap-1.5">
                        <Badge
                            variant="outline"
                            className="w-fit text-components-titles-paragraphs-text-neutral bg-components-badges-backgrounds-BG-color-1 shadow-neutral-BS-small"
                        >
                            {`Otázka ${questionNumber}`}
                        </Badge>
                        <h3 className="text-[14px] font-medium leading-[129.99%] text-components-inputs-select-text-text-dark">
                            {questionText}
                        </h3>
                    </div>
                </CardHeader>

                <CardContent className="p-4">
                    <div className="flex gap-4 justify-center">
                        {answers.map((answer) => (
                            <Button
                                key={answer.id}
                                variant="ghost"
                                className="bg-components-buttons-tertiary-backgrounds-BG-light-mode text-components-buttons-primary-text-text-dark-mode hover:bg-components-buttons-tertiary-backgrounds-BG-light-mode/90"
                                onClick={() => onAnswerClick(answer.id)}
                            >
                                {prettifyStudyForm(prettifyLanguage(answer.text))}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default QuestionItem;
