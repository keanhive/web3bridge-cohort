"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface GameContextType {
    username: string;
    setUsername: (name: string) => void;
    category: string;
    setCategory: (cat: string) => void;
    score: number;
    setScore: (score: number) => void;
    step: number;
    setStep: (step: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState("");
    const [category, setCategory] = useState("");
    const [score, setScore] = useState(0);
    const [step, setStep] = useState(1);

    return (
        <GameContext.Provider
            value={{ username, setUsername, category, setCategory, score, setScore, step, setStep }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const ctx = useContext(GameContext);
    if (!ctx) throw new Error("useGame must be used within GameProvider");
    return ctx;
};
