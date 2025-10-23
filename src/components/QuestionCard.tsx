"use client";
import { motion } from "framer-motion";

interface Props {
    question: string;
    options: string[];
    onAnswer: (opt: string) => void;
    selected?: string;
    feedback?: string;
}

export default function QuestionCard({ question, options, onAnswer, selected, feedback }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-4 bg-white rounded-lg"
        >
            <h2 className="text-lg font-semibold mb-4">{question}</h2>
            <div className="space-y-3">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => onAnswer(opt)}
                        disabled={!!feedback}
                        className={`block w-full border p-2 rounded-lg ${
                            selected === opt ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                        }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
            {feedback && (
                <p className={`mt-3 text-center font-medium ${feedback === "Correct!" ? "text-green-600" : "text-red-500"}`}>
                    {feedback}
                </p>
            )}
        </motion.div>
    );
}
