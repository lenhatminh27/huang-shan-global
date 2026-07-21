import Image from "next/image";
import {contactHero} from "../contact-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

export function ContactHero() {
    return (
        <section className="relative min-h-[340px] overflow-hidden md:min-h-[430px]">
            <Image
                src={contactHero.image}
                alt="Liên hệ Huang Shan Global"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/68 via-black/32 to-transparent"/>

            <div
                className="relative z-10 mx-auto flex min-h-[340px] max-w-8xl items-center px-5 py-14 md:min-h-[430px] md:px-10">
                <Reveal variant="left" className="max-w-3xl text-white">
                    <span
                        className="inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur">
                        {contactHero.eyebrow}
                    </span>
                    <h1 className="mt-6 text-[32px] font-semibold leading-tight md:text-[46px]">
                        {contactHero.title}
                    </h1>
                </Reveal>
            </div>
        </section>
    );
}
