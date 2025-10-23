"use client";
import { useEffect, useState } from "react";
import { useGame } from "@/context/GameContext";
import questionsData from "@/data/questions.json";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";
import Leaderboard from "./Leaderboard";

export default function QuizGame() {
    const { category, username, score, setScore } = useGame();
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState<string>();
    const [feedback, setFeedback] = useState<string>();
    const [timeLeft, setTimeLeft] = useState(60);
    const [finished, setFinished] = useState(false);

    const questions = (questionsData as any)[category] || [];

    useEffect(() => {
        if (timeLeft <= 0) {
            handleAnswer("");
            return;
        }
        const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleAnswer = (option: string) => {
        if (selected) return;
        const correct = questions[index].answer === option;
        setSelected(option);
        setFeedback(correct ? "Correct!" : option ? "Wrong!" : "Time’s up!");
        if (correct) setScore(score + 1);

        setTimeout(() => {
            if (index + 1 < questions.length) {
                setIndex((prev) => prev + 1);
                setSelected(undefined);
                setFeedback(undefined);
                setTimeLeft(60);
            } else {
                setFinished(true);
                updateLeaderboard();
            }
        }, 1000);
    };

    const updateLeaderboard = () => {
        const data = JSON.parse(localStorage.getItem("leaderboard") || "[]");
        const updated = [
            ...data,
            {
                name: username,
                score,
                date: new Date().toISOString(), // add timestamp
            },
        ]
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);
        localStorage.setItem("leaderboard", JSON.stringify(updated));
    };

    if (finished) return <Leaderboard />;

    const q = questions[index];

    return (
        <div className="max-w-xl mx-auto bg-white shadow p-6 rounded mt-10">
            <div className="flex justify-between mb-3 text-sm text-gray-600">
                <div>Score: {score}</div>
                <Timer time={timeLeft} />
            </div>
            <QuestionCard question={q.question} options={q.options} onAnswer={handleAnswer} selected={selected} feedback={feedback} />
        </div>
    );
}
