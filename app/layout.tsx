import type {Metadata} from "next";
import "./globals.css";
import {Header} from "@/shared/components/layout/Header";
import {Footer} from "@/shared/components/layout/Footer";
import {ScrollToTopOnRouteChange} from "@/shared/components/layout/ScrollToTopOnRouteChange";

export const metadata: Metadata = {
    title: "Huang Shan Global",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className="h-full scroll-smooth antialiased" style={{scrollBehavior: 'smooth'}}>
        <body className="min-h-full bg-white text-[#284832]">
        <Header/>
        <ScrollToTopOnRouteChange/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
