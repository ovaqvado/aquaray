import type { Metadata } from "next";
import "./variables/styles/global.scss";

export const metadata: Metadata = {
    title: "AquaRay",
    description: "Swap app",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
