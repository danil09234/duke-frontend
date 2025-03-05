import React, { useState, useEffect, useRef } from "react";
import TopBarWrapperFindProgram from "@/components/Topbar/TopBarWrapperFindProgram";
import QuestionItem from "@/components/QuestionItem/QuestionItem";
import LogicLines from "@/components/LogicLine/LogicLine";
import FinalStudyProgramme from "@/components/FinalStudyProgramme/FinalStudyProgramme";
import Line from "@/components/Line/Line";

const backendBase = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

interface Question {
  question: string;
  answers: string[];
}

interface StudyProgramme {
  name: string;
  code?: string;
}

export function FindProgramPageContent() {
  const [sessionId, setSessionId] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<string[]>([]);
  const [finalProgrammes, setFinalProgrammes] = useState<StudyProgramme[]>([]);
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
    (async () => {
      const res = await fetch(`${backendBase}/api/tree/session`, {
        method: "POST",
      });
      const data = await res.json();
      setSessionId(data);
    })();
  }, []);

  useEffect(() => {
    if (!sessionId || finalProgrammes.length > 0) return;
    fetchQuestion();
  }, [sessionId, finalProgrammes]);

  const fetchQuestion = async () => {
    const res = await fetch(
      `${backendBase}/api/tree/session/${sessionId}/question`
    );
    if (res.ok) {
      const data = await res.json();
      setQuestions((prev) => [...prev, data]);
      scrollToBottom();
    }
  };

  const handleAnswer = async (answer: string) => {
    setResponses((prev) => [...prev, answer]);
    const res = await fetch(
      `${backendBase}/api/tree/session/${sessionId}/answer`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer }),
      }
    );
    if (res.status === 200) {
      const data = await res.json();
      if (data === null) {
        setTimeout(() => {
          fetchQuestion();
        }, 100);
      } else {
        setFinalProgrammes(data);
        scrollToBottom();
      }
    }
  };

  return (
    <div className="flex flex-col h-full relative bg-white">
      <div className="hidden md:block absolute top-0 w-full">
        <TopBarWrapperFindProgram />
      </div>
      <div
        ref={containerRef}
        className="flex flex-col items-center overflow-auto pt-16 pb-4 flex-1 scrollbar-hide px-4"
      >
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
        {finalProgrammes.length > 0 &&
          finalProgrammes.map((programme, idx) => (
            <React.Fragment key={idx}>
              <FinalStudyProgramme programmeName={programme.name} />
              {idx < finalProgrammes.length - 1 && <Line />}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}
