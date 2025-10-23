import "./globals.css";
import { GameProvider } from "@/context/GameContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-gray-100 text-gray-900 min-h-screen">
        <GameProvider>{children}</GameProvider>
        </body>
        </html>
    );
}
