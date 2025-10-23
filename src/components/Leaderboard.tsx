"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";

interface Entry {
    name: string;
    score: number;
    date: string;
}

export default function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState<Entry[]>([]);
    const { setUsername, setCategory, setScore, setStep } = useGame();


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("leaderboard") || "[]");
        setLeaderboard(data);
    }, []);

    const handleRestart = () => {
        setUsername("");
        setCategory("");
        setScore(0);
        setStep(1);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Leaderboard 🏆</h2>

            <ul className="space-y-2">
                {leaderboard.length === 0 && (
                    <li className="text-center text-gray-500">No scores yet</li>
                )}

                {leaderboard.map((entry, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex justify-between border-b py-2 text-sm"
                    >
                        <div>
              <span className="font-medium">
                {i === 0 && "🥇 "}
                  {i === 1 && "🥈 "}
                  {i === 2 && "🥉 "}
                  {i > 2 && `${i + 1}. `}
                  {entry.name}
              </span>
                            <p className="text-xs text-gray-500">
                                {new Date(entry.date).toLocaleString()}
                            </p>
                        </div>
                        <span className="font-semibold text-gray-800">{entry.score}</span>
                    </motion.li>
                ))}
            </ul>

            <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        scale: [1, 1.05, 1],
                        transition: { duration: 1.5, repeat: Infinity },
                    }}
                    onClick={handleRestart}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
                >
                    Restart Game
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
