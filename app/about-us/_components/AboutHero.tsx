import Image from "next/image";
import {aboutHero} from "../about-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

const brandName = "Huang Shan Global";
const firstBrandIndex = aboutHero.description.indexOf(brandName);
const descriptionBeforeBrand = aboutHero.description.slice(0, firstBrandIndex);
const descriptionAfterBrand = aboutHero.description.slice(firstBrandIndex + brandName.length);

export function AboutHero() {
    return (
        <section className="relative min-h-[330px] overflow-hidden md:min-h-[380px]">
            <Image
                src={aboutHero.image}
                alt="Cảng vận chuyển quốc tế"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#000000]/50 to-10%-[#FFFFFF00]"/>

            <div
                className="relative z-10 mx-auto flex min-h-[330px] max-w-8xl items-center px-5 py-14 md:min-h-[380px] md:px-10">
                <Reveal variant="left" className="max-w-4xl text-white">
                    <span
                        className="inline-flex rounded-full bg-[#FFFFFF3D]/24 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur">
                        {aboutHero.eyebrow}
                    </span>
                    <h1 className="mt-5 text-[24px] font-semibold leading-tight md:text-[36px]">
                        {aboutHero.title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-[15px] font-medium leading-7 text-white/92 md:text-[16px]">
                        {descriptionBeforeBrand}
                        {firstBrandIndex >= 0 && <strong className="text-white">{brandName}</strong>}
                        {firstBrandIndex >= 0 ? descriptionAfterBrand : aboutHero.description}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
