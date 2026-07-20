import Image from "next/image";
import {ServiceDetail} from "../services-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

interface ServiceDetailHeroProps {
    service: ServiceDetail;
}

export function ServiceDetailHero({service}: ServiceDetailHeroProps) {
    return (
        <section className="relative min-h-[350px] overflow-hidden md:min-h-[392px]">
            <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/28 to-transparent"/>

            <div
                className="relative z-10 mx-auto flex min-h-[350px] max-w-8xl items-center px-5 py-14 md:min-h-[392px] md:px-10">
                <Reveal variant="left" className="max-w-4xl text-white">
                    <span
                        className="inline-flex rounded-full bg-white/18 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur">
                        {service.eyebrow}
                    </span>
                    <h1 className="mt-5 text-[30px] font-semibold leading-tight md:text-[42px]">
                        {service.title}
                    </h1>
                    <p className="mt-5 max-w-3xl text-[15px] font-medium leading-7 text-white/92 md:text-[16px]">
                        {service.intro}
                    </p>
                    <p className="mt-1 text-[15px] font-medium leading-7 text-white/92 md:text-[16px]">
                        {service.suitableTitle}
                    </p>
                    <ul className="max-w-3xl list-disc pl-6 text-[15px] font-medium leading-7 text-white/88 md:text-[16px]">
                        {service.suitableFor.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p className="max-w-3xl text-[15px] font-medium leading-7 text-white/88 md:text-[16px]">
                        {service.closing}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
