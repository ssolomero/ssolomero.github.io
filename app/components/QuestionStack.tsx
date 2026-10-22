"use client";

import { useState } from "react";
import Card from "./Card";
import QuestionCard from "./QuestionCard";

const questions = [
  {
    prompt: "What drives you?",
    answer: "Building things that feel intuitive and look beautiful.",
  },
  {
    prompt: "Outside of work?",
    answer: "Basketball, Photography, Tik Tok edits",
  },
  {
    prompt: "What are you learning?",
    answer: "3D motion and creative coding with WebGL/Three.js.",
  },
  {
    prompt: "Dream role?",
    answer: "Designing and engineering products in digital 3D spaces",
  },
];

export default function QuestionStack() {
  const [current, setCurrent] = useState(0);
  const total = questions.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Stack */}
      <div
        className="relative cursor-pointer"
        style={{ width: "400px", height: "180px" }}
        onClick={handleNext}
        role="button"
        aria-label="Next card"
      >
        {/* Background cards (peek effect) */}
        {[2, 1].map((offset) => {
          const index = (current + offset) % total;
          return (
            <div
              key={offset}
              className="absolute inset-0"
              style={{
                transform: `translateY(${offset * -6}px) scale(${1 - offset * 0.03})`,
                zIndex: offset === 1 ? 1 : 0,
              }}
            >
              <Card className="w-full h-full opacity-60" children={undefined} />
            </div>
          );
        })}

        {/* Active card */}
        <div
          className="absolute inset-0 transition-transform duration-200 active:scale-[0.98]"
          style={{ zIndex: 2 }}
        >
          <Card className="w-full h-full">
            <QuestionCard
              prompt={questions[current].prompt}
              answer={questions[current].answer}
            />
          </Card>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center gap-1.5" role="tablist">
        {questions.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Card ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? "w-4 h-1.5 bg-[#994EA8]"
                : "w-1.5 h-1.5 bg-[#D8CDD9] dark:bg-[#665A68]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
