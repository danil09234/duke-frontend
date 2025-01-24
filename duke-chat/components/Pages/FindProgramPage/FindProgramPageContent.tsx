"use client";


import TopBarWrapperFindProgram from "@/components/Topbar/TopBarWrapperFindProgram";
import QuestionItem from "@/components/QuestionItem/QuestionItem";
import LogicLines from "@/components/LogicLine/LogicLine";

export function FindProgramPageContent() {
    return (
        <div className="flex flex-col py-0 h-full overflow-auto relative bg-white">
            <div className="hidden md:block">
                <TopBarWrapperFindProgram />
            </div>
            <div className="flex flex-col justify-center items-center">
                <QuestionItem
                    questionNumber={1}
                    questionText="Question text"
                    answers={[
                        { id: 1, text: "Answer 1" },
                        { id: 2, text: "Answer 2" },
                    ]}
                />
                <LogicLines />
            </div>
        </div>
    );
}
