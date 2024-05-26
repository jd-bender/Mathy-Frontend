import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Mathy</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
