import type {Metadata} from "next";
import {NewsSection} from "@/app/_components/NewsSection";
import {AboutHero} from "./_components/AboutHero";
import {AboutPartnersStrip} from "./_components/AboutPartnersStrip";
import {CoreValues} from "./_components/CoreValues";
import {TeamShare} from "./_components/TeamShare";
import {VisionMission} from "./_components/VisionMission";
import {WhyChoose} from "./_components/WhyChoose";

export const metadata: Metadata = {
    title: "Về chúng tôi | Huang Shan Global",
    description: "Giới thiệu Huang Shan Global và năng lực logistics, xuất nhập khẩu Trung Quốc - Việt Nam.",
};

export default function AboutUsPage() {
    return (
        <main>
            <AboutHero/>
            <AboutPartnersStrip/>
            <VisionMission/>
            <CoreValues/>
            <WhyChoose/>
            <TeamShare/>
            <NewsSection/>
        </main>
    );
}
