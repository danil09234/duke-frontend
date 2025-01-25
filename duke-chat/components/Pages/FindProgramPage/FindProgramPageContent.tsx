import React, { useState, useEffect } from "react";
import TopBarWrapperFindProgram from "@/components/Topbar/TopBarWrapperFindProgram";
import QuestionItem from "@/components/QuestionItem/QuestionItem";
import LogicLines from "@/components/LogicLine/LogicLine";
import FinalStudyProgramme from "@/components/FinalStudyProgramme/FinalStudyProgramme";

const backendBase = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

interface Question {
    question: string;
    answers: string[];
}

export function FindProgramPageContent() {
    const [sessionId, setSessionId] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [responses, setResponses] = useState<string[]>([]);
    const [finalProgramName, setFinalProgramName] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${backendBase}/api/session`, { method: "POST" });
            const data = await res.json();
            setSessionId(data);
        })();
    }, []);

    useEffect(() => {
        if (!sessionId || finalProgramName) return;
        fetchQuestion();
    }, [sessionId, finalProgramName]);

    const fetchQuestion = async () => {
        const res = await fetch(`${backendBase}/api/session/${sessionId}/question`);
        if (res.ok) {
            const data = await res.json();
            setQuestions((prev) => [...prev, data]);
        }
    };

    const handleAnswer = async (answer: string) => {
        setResponses((prev) => [...prev, answer]);
        const res = await fetch(`${backendBase}/api/session/${sessionId}/answer`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answer }),
        });
        if (res.status === 200) {
            const data = await res.json();
            if (data === null) {
                fetchQuestion();
            } else {
                setFinalProgramName(data.name);
            }
        }
    };

    return (
        <div className="flex flex-col py-0 h-full overflow-auto relative bg-white">
            <div className="hidden md:block">
                <TopBarWrapperFindProgram />
            </div>
            <div className="flex flex-col justify-center items-center">
                {questions.map((q, idx) => (
                    <div key={idx}>
                        <QuestionItem
                            questionNumber={idx + 1}
                            questionText={q.question}
                            answers={q.answers.map((text, id) => ({ id: id + 1, text }))}
                            onAnswerClick={handleAnswer}
                        />
                        {responses[idx] && <LogicLines value={responses[idx]} />}
                    </div>
                ))}
                {finalProgramName && <FinalStudyProgramme programmeName={finalProgramName} />}
            </div>
        </div>
    );
}
