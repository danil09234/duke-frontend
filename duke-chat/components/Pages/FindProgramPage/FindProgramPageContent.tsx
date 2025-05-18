import React, { useState, useEffect, useRef } from "react";
import TopBarWrapperFindProgram from "@/components/Topbar/TopBarWrapperFindProgram";
import QuestionItem from "@/components/QuestionItem/QuestionItem";
import LogicLines from "@/components/LogicLine/LogicLine";
import FinalStudyProgramme from "@/components/FinalStudyProgramme/FinalStudyProgramme";
import Line from "@/components/Line/Line";

const backendBase = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

interface Question {
    question: string;
    answers: {
        [key: string]: string;
    };
}

interface StudyProgramme {
    name: string;
    code?: string;
}

interface AnswerInfo {
    token: string;
    text: string;
}

export function FindProgramPageContent() {
    const [sessionId, setSessionId] = useState("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [responses, setResponses] = useState<AnswerInfo[]>([]);
    const [finalProgrammes, setFinalProgrammes] = useState<StudyProgramme[]>([]);
    const isProcessingRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            setTimeout(() => {
                container.scrollTo({
                    top: container.scrollHeight,
                    behavior: "smooth",
                });
            }, 100);
        }
    };

    useEffect(() => {
        const initSession = async () => {
            try {
                const res = await fetch(`${backendBase}/api/tree/session`, { method: "POST" });
                const data = await res.json();
                setSessionId(data);
            } catch (error) {
                console.error("Failed to initialize session:", error);
            }
        };
        
        initSession();
    }, []);

    useEffect(() => {
        if (!sessionId) return;
        
        const fetchFirstQuestion = async () => {
            try {
                const res = await fetch(`${backendBase}/api/tree/session/${sessionId}/question`);
                if (res.ok) {
                    const data = await res.json();
                    setQuestions([data]);
                    scrollToBottom();
                }
            } catch (error) {
                console.error("Failed to fetch first question:", error);
            }
        };
        
        fetchFirstQuestion();
    }, [sessionId]);

    const fetchNextQuestion = async () => {
        if (isProcessingRef.current) return;
        
        isProcessingRef.current = true;
        try {
            console.log("Fetching next question...");
            const res = await fetch(`${backendBase}/api/tree/session/${sessionId}/question`);
            if (!res.ok) {
                console.error("Failed to fetch next question, status:", res.status);
                return;
            }
            
            const data = await res.json();
            console.log("Next question API response:", data);
            
            if (!data || !data.question) {
                console.error("Invalid question data received:", data);
                return;
            }
            
            const currentLength = questions.length;
            
            setQuestions(prev => [...prev, data]);
            scrollToBottom();
            
            console.log("Questions state updated, new length:", currentLength + 1);
        } catch (error) {
            console.error("Failed to fetch next question:", error);
        } finally {
            isProcessingRef.current = false;
        }
    };

    const handleAnswer = async (answerToken: string, questionIndex: number) => {
        if (isProcessingRef.current) return;
        isProcessingRef.current = true;

        try {
            console.log(`Processing answer for question ${questionIndex + 1} with token: ${answerToken}`);

            const answerText = questions[questionIndex].answers[answerToken];

            if (!answerText) {
                console.error("Answer text not found for token:", answerToken);
                return;
            }

            const newAnswerInfo = { token: answerToken, text: answerText };

            if (questionIndex < questions.length - 1 || finalProgrammes.length > 0) {
                console.log(`Re-answering question ${questionIndex + 1}. Resetting subsequent data...`);

                setFinalProgrammes([]);

                setQuestions(questions.slice(0, questionIndex + 1));

                const cleanedResponses = responses.slice(0, questionIndex);
                cleanedResponses.push(newAnswerInfo);
                setResponses(cleanedResponses);

                console.log("Final programmes cleared:", finalProgrammes.length);
            } else {
                const updatedResponses = [...responses];
                updatedResponses[questionIndex] = newAnswerInfo;
                setResponses(updatedResponses);
            }

            console.log("Responses updated:", responses.map(r => r.text));

            console.log(`Sending answer to backend: ${answerToken}`);
            const res = await fetch(`${backendBase}/api/tree/session/${sessionId}/answer`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answer_token: answerToken }),
            });

            if (!res.ok) {
                console.error("Failed to send answer, status:", res.status);
                return;
            }

            const data = await res.json();
            console.log("Answer API response:", data);

            if (data === null) {
                console.log("Answer accepted, proceeding to next question");
                setTimeout(() => {
                    fetchNextQuestion();
                }, 100);
            } else {
                console.log("Final programmes received:", data.length);
                setFinalProgrammes(data);
                scrollToBottom();
            }
        } catch (error) {
            console.error("Error handling answer:", error);
        } finally {
            isProcessingRef.current = false;
        }
    };

    useEffect(() => {
        console.log("Final programmes state updated, count:", finalProgrammes.length);
    }, [finalProgrammes]);

    useEffect(() => {
        console.log("Current state - Questions:", questions.length, "Responses:", responses.length);
    }, [questions, responses]);

    return (
        <div className="flex flex-col h-full relative bg-white">
            <div className="hidden md:block absolute top-0 w-full">
                <TopBarWrapperFindProgram />
            </div>
            <div
                ref={containerRef}
                className="flex flex-col items-center overflow-auto pt-16 pb-4 flex-1 scrollbar-hide px-4">
                {questions.map((q, idx) => (
                    <div key={`question-${idx}-${q.question.substring(0, 10)}`}>
                        <QuestionItem
                            questionNumber={idx + 1}
                            questionText={q.question}
                            answers={Object.entries(q.answers).map(([key, text]) => ({
                                id: key,
                                text
                            }))}
                            onAnswerClick={(answerId) => handleAnswer(answerId, idx)}
                        />
                        {idx < responses.length && responses[idx] && (
                            <LogicLines value={responses[idx].text} />
                        )}
                    </div>
                ))}
                {finalProgrammes.length > 0 && (
                    <div className="w-full">
                        {finalProgrammes.map((programme, idx) => (
                            <React.Fragment key={`program-${idx}-${programme.name.substring(0, 10)}`}>
                                <FinalStudyProgramme {...programme} />
                                {idx < finalProgrammes.length - 1 && <Line />}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
