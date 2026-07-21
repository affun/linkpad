import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from "@/libs/utils";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "LinkPad - Everything you are, in one simple link",
    description: "Create a beautiful, customizable landing page that showcases everything important to you. One link to rule them all.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn(inter.variable, "page-container")}>
        {children}
        </body>
        </html>
    );
}
