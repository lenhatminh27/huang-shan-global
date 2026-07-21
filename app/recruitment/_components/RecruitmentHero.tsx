import Image from "next/image";
import {recruitmentHero} from "../recruitment-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

export function RecruitmentHero() {
    return (
        <section className="relative min-h-[320px] overflow-hidden md:min-h-[400px]">
            <Image
                src={recruitmentHero.image}
                alt="Banner tuyển dụng Huang Shan Global"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_44%]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary/72 via-primary/24 to-white/40"/>

            <div
                className="relative z-10 mx-auto flex min-h-[320px] max-w-8xl items-center px-5 py-14 md:min-h-[400px] md:px-10">
                <Reveal variant="left" className="text-white">
                    <span
                        className="inline-flex rounded-full bg-white/18 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur">
                        {recruitmentHero.eyebrow}
                    </span>
                    <h1 className="mt-5 text-[30px] font-semibold leading-tight md:text-[42px]">
                        {recruitmentHero.title}
                    </h1>
                </Reveal>
            </div>
        </section>
    );
}
