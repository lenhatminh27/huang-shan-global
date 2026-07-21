import type {Metadata} from "next";
import {ContactSection} from "@/app/_components/ContactSection";
import {NewsHero} from "./_components/NewsHero";
import {NewsListing} from "./_components/NewsListing";

export const metadata: Metadata = {
    title: "Tin tức | Huang Shan Global",
    description: "Cập nhật tin tức và sự kiện mới nhất từ Huang Shan Global.",
};

export default function NewsPage() {
    return (
        <main>
            <NewsHero/>
            <NewsListing/>
            <ContactSection/>
        </main>
    );
}
