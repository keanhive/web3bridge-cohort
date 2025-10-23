"use client";
import { useGame } from "@/context/GameContext";
import { useState } from "react";

export default function NameEntry() {
    const { setUsername, setStep } = useGame();
    const [name, setName] = useState("");

    const handleStart = () => {
        if (!name.trim()) return;
        setUsername(name.trim());
        setStep(2); // go to category
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Enter Your Name</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="border rounded-md p-2 w-64 mb-4 text-center"
            />
            <button onClick={handleStart} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Continue
            </button>
        </div>
    );
}
