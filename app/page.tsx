import {ConvAI} from "@/components/ConvAI";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen overflow-hidden p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-transparent
"
        >
            <main className="flex flex-col gap-8 row-start-2 items-center overflow-hidden bg-transparent
">
                <ConvAI />
            </main>
            <footer className="absolute bottom-2 text-sm text-gray-400">
            © 2025 Alai Labs PTE Ltd. All rights reserved.
            </footer>

        </div>
    );
}

