import type { Metadata } from "next";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

import { ClerkProvider } from "@clerk/nextjs";

import { ptBR } from "@clerk/localizations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next E-commerce",
    description: "Next E-commerce utilizando a versão 14",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider localization={ptBR}>
            <html lang="en">
                <body className={clsx(inter.className, "bg-slate-700")}>
                    <NavBar />
                    <main className="h-screen p-16">{children}</main>
                </body>
            </html>
        </ClerkProvider>
    );
}
