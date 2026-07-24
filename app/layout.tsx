import type {Metadata, Viewport} from "next";
import "./globals.css";
import {Header} from "@/app/_components/Header";
import {Footer} from "@/app/_components/Footer";
import {FloatingContactButtons} from "@/app/_components/FloatingContactButtons";
import {PWARegister} from "@/components/pwa-register";

export const metadata: Metadata = {
    title: "Huang Shan Global",
    icons: {
        icon: "/logo/logo-wb.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#005736",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className="h-full antialiased">
        <body className="min-h-full bg-white text-[#284832]">
        <PWARegister/>
        <Header/>
        {children}
        <Footer/>
        <FloatingContactButtons/>
        </body>
        </html>
    );
}

