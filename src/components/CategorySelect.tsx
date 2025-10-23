"use client";
import { useGame } from "@/context/GameContext";

export default function CategorySelect() {
    const { setCategory, setStep } = useGame();
    const categories = ["Science", "History", "Sports"];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Select a Category</h1>
            <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setCategory(cat);
                            setStep(3);
                        }}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}
