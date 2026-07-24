import Image from "next/image";
import {newsHero} from "../news-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

export function NewsHero() {
    return (
        <section className="relative page-banner overflow-hidden">
            <Image
                src={newsHero.image}
                alt="Tin tức Huang Shan Global"
                fill
                priority
                sizes="100vw"
                className="object-cover object-top md:object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/56 via-black/18 to-transparent"/>

            <div
                className="relative z-10 mx-auto flex page-banner max-w-8xl items-center px-5 section-y md:px-10">
                <Reveal variant="left" className="text-white">
                    <span
                        className="inline-flex rounded-full bg-white/18 px-4 py-2 text-[8px] md:text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur">
                        {newsHero.eyebrow}
                    </span>
                    <h1 className="mt-5 text-[21px] sm:text-[30px] font-semibold leading-tight md:text-[42px]">
                        {newsHero.title}
                    </h1>
                </Reveal>
            </div>
        </section>
    );
}



