import Image from "next/image";
import {servicesHero} from "../services-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

const brandName = "Huang Shan Global";
const firstBrandIndex = servicesHero.description.indexOf(brandName);
const descriptionBeforeBrand = servicesHero.description.slice(0, firstBrandIndex);
const descriptionAfterBrand = servicesHero.description.slice(firstBrandIndex + brandName.length);

export function ServicesHero() {
    return (
        <section className="relative page-banner overflow-hidden">
            <Image
                src={servicesHero.image}
                alt="Xe vận chuyển trên tuyến đường logistics"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/28 to-transparent"/>

            <div
                className="relative z-10 mx-auto flex page-banner max-w-8xl items-center px-5 section-y md:px-10">
                <Reveal variant="left" className="max-w-4xl text-white">
                    <span
                        className="inline-flex rounded-full bg-white/18 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur">
                        {servicesHero.eyebrow}
                    </span>
                    <h1 className="mt-5 text-[21px] font-semibold leading-tight md:text-[42px]">
                        {servicesHero.title}
                    </h1>
                    <p className="mt-4 max-w-4xl text-[12px] font-medium leading-7 text-white/92 md:text-[16px]">
                        {descriptionBeforeBrand}
                        {firstBrandIndex >= 0 && <strong className="font-bold text-white">{brandName}</strong>}
                        {firstBrandIndex >= 0 ? descriptionAfterBrand : servicesHero.description}
                    </p>
                    <ul className="mt-1 max-w-4xl list-disc pl-6 text-[12px] font-medium leading-7 text-white/88 md:text-[16px]">
                        {servicesHero.bullets.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}



