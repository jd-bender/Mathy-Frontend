import "../globals.css";
import { IParent } from "interfaces";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mathy",
    description: "Mathy is a platform for learning and practicing math.",
};

export default function RootLayout({ children }: IParent) {
    return (
        <html lang="en" className="h-full">
            <body className="bg-palette-2 h-full flex flex-col">
                {children}
            </body>
        </html>
    );
}
