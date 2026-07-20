import Image from "next/image";
import Link from "next/link";
import {servicesPageItems} from "../services-data";
import {MotionCard, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";

export function ServicesPageGrid() {
    return (
        <section className="bg-[#f9fff9] py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-5 text-center md:px-10">
                <Reveal variant="up">
                    <h2 className="text-[32px] font-bold text-primary">Dịch vụ của chúng tôi</h2>
                </Reveal>

                <StaggerGroup className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2 md:gap-7" staggerDelay={0.12}>
                    {servicesPageItems.map((service, index) => (
                        <MotionCard
                            key={service.title}
                            variant={index % 2 === 0 ? "drift" : "flip"}
                            hover="tilt"
                            className="group relative aspect-[1.5] overflow-hidden rounded-[24px] bg-[#d8e5dc] text-left shadow-sm md:aspect-[1.68]"
                        >
                            <Image
                                src={service.image}
                                alt={service.title.replace("\n", " ")}
                                fill
                                sizes="(min-width: 768px) 44vw, 90vw"
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/32"/>
                            <div
                                className="absolute inset-0 bg-linear-to-br from-black/45 via-black/12 to-transparent"/>
                            <h3 className="absolute left-8 top-8 max-w-[210px] whitespace-pre-line text-[24px] font-semibold leading-tight text-white drop-shadow md:text-[26px]">
                                {service.title}
                            </h3>
                            <Link
                                href="#lien-he"
                                className="absolute bottom-8 left-8 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-b from-[#87CA8E] to-[#448A54] px-5 py-2 text-[16px] font-bold text-white transition hover:-translate-y-0.5 hover:from-[#448A54] hover:to-[#87CA8E]"
                            >
                                Tìm hiểu thêm
                                <Image src="/icon/arrow.svg" alt="" width={18} height={18} className="h-auto w-[18px]"/>
                            </Link>
                        </MotionCard>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
}

