import Image from "next/image";
import Link from "next/link";
import {recruitmentAbout} from "../recruitment-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

export function RecruitmentAbout() {
    return (
        <section className="bg-[#f4fcf5] py-12 md:py-16">
            <div className="mx-auto grid max-w-8xl items-center gap-9 px-5 md:grid-cols-[1fr_1.08fr] md:px-10">
                <Reveal variant="left">
                    <h2 className="text-[30px] font-bold text-primary md:text-[34px]">{recruitmentAbout.title}</h2>
                    <p className="mt-4 max-w-3xl text-[15px] font-medium leading-7 text-secondary md:text-[16px]">
                        {recruitmentAbout.description}
                    </p>
                    <Link
                        href="/about-us"
                        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-b from-[#87CA8E] to-[#448A54] px-5 py-2 text-[16px] font-bold text-white transition hover:-translate-y-0.5 hover:from-[#448A54] hover:to-[#87CA8E]"
                    >
                        Câu chuyện của Huang Shan Global
                        <Image src="/icon/arrow.svg" alt="" width={18} height={18} className="h-auto w-[18px]"/>
                    </Link>
                </Reveal>

                <Reveal variant="right" delay={0.08}>
                    <div className="relative aspect-[1.92] overflow-hidden rounded-[26px] bg-[#d8e5dc] shadow-sm">
                        <Image
                            src={recruitmentAbout.image}
                            alt="Hoạt động logistics Huang Shan Global"
                            fill
                            sizes="(min-width: 768px) 48vw, 90vw"
                            className="object-cover"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
