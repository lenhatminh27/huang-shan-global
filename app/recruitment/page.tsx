import type {Metadata} from "next";
import {CulturePrinciples} from "./_components/CulturePrinciples";
import {JobPositions} from "./_components/JobPositions";
import {RecruitmentAbout} from "./_components/RecruitmentAbout";
import {RecruitmentCta} from "./_components/RecruitmentCta";
import {RecruitmentHero} from "./_components/RecruitmentHero";

export const metadata: Metadata = {
    title: "Tuyển dụng | Huang Shan Global",
    description: "Cơ hội nghề nghiệp và môi trường làm việc tại Huang Shan Global.",
};

export default function RecruitmentPage() {
    return (
        <main>
            <RecruitmentHero/>
            <RecruitmentAbout/>
            <CulturePrinciples/>
            <JobPositions/>
            <RecruitmentCta/>
        </main>
    );
}
