import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { BackgroundWave } from "@/components/background-wave";

export const metadata: Metadata = {
    title: "ConvAI",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={"h-full w-full"}>
            <body className="antialiased w-full h-full flex flex-col bg-white">
                <div className="flex flex-col flex-grow w-full items-center justify-center sm:px-4">
                    <nav
                        className={
                            "sm:fixed w-full top-0 left-0 grid grid-cols-2 py-4 px-8"
                        }
                    >
                        <div className="flex" >
                            <Link href="/" prefetch={true}>
                                <Image
                                    src="/alai.png"
                                    alt="Logo"
                                    width={200}
                                    height={75}
                                    className="hover:opacity-80  mb-20"
                                />
                            </Link>
                        </div>
                    </nav>
                    {children}
                
                    {/* <BackgroundWave /> */}
                </div>
            </body>
        </html>
    );
}