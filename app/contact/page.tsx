import type {Metadata} from "next";
import {ContactHero} from "./_components/ContactHero";
import {ContactMain} from "./_components/ContactMain";

export const metadata: Metadata = {
    title: "Liên hệ | Huang Shan Global",
    description: "Liên hệ Huang Shan Global để được tư vấn giải pháp logistics và xuất nhập khẩu Trung - Việt.",
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero/>
            <ContactMain/>
        </main>
    );
}
