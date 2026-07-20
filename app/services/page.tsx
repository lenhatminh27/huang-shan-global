import type {Metadata} from "next";
import {ContactSection} from "@/app/_components/ContactSection";
import {PartnersStrip} from "@/app/_components/PartnersStrip";
import {Testimonials} from "@/app/_components/Testimonials";
import {ServicesHero} from "./_components/ServicesHero";
import {ServicesPageGrid} from "./_components/ServicesPageGrid";

export const metadata: Metadata = {
    title: "Dịch vụ | Huang Shan Global",
    description: "Dịch vụ vận chuyển, order và nhập khẩu máy móc Trung Quốc - Việt Nam tại Huang Shan Global.",
};

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero/>
            <PartnersStrip/>
            <ServicesPageGrid/>
            <Testimonials/>
            <ContactSection/>
        </main>
    );
}
