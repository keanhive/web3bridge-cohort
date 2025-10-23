export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

export async function loadQuestions(): Promise<Question[]> {
    try {
        const res = await fetch("/questions.json");
        if (!res.ok) throw new Error("Failed to load questions");
        return await res.json();
    } catch (err) {
        console.error("Error loading questions:", err);
        return [];
    }
}
