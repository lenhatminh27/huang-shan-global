import {ContactSection} from "@/app/_components/ContactSection";
import {Hero} from "@/app/_components/Hero";
import {Intro} from "@/app/_components/Intro";
import {NewsSection} from "@/app/_components/NewsSection";
import {Partners} from "@/app/_components/Partners";
import {Services} from "@/app/_components/Services";
import {Stats} from "@/app/_components/Stats";
import {Testimonials} from "@/app/_components/Testimonials";

export default function Home() {
    return (
        <>
            <main>
                <Hero/>
                <Intro/>
                <Stats/>
                <Services/>
                <Testimonials/>
                <NewsSection/>
                <Partners/>
                <ContactSection/>
            </main>
        </>
    );
}
