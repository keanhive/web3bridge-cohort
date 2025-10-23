"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Leaderboard from "@/components/Leaderboard";

export default function LeaderboardPage() {
    const params = useSearchParams();
    const router = useRouter();
    const score = Number(params.get("score") || 0);

    return (
        <main className="p-6 text-center min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
            <Leaderboard newScore={score} />
            <button
                onClick={() => router.push("/")}
                className="mt-4 text-blue-500 underline"
            >
                Play Again
            </button>
        </main>
    );
}
