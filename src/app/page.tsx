"use client";
import { useGame } from "@/context/GameContext";
import NameEntry from "@/components/NameEntry";
import CategorySelect from "@/components/CategorySelect";
import QuizGame from "@/components/QuizGame";

export default function Home() {
    const { username, category, step } = useGame();

    if (!username && step === 1) return <NameEntry />;
    if (!category && step === 2) return <CategorySelect />;
    return <QuizGame />;
}
