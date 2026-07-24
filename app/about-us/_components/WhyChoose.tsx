import Image from "next/image";
import Link from "next/link";
import {whyChooseColumns} from "../about-data";
import {MotionItem, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";

export function WhyChoose() {
    return (
        <section className="watermark-section before:top-[-8px] bg-[#f4fcf5] section-y md:before:top-[-18px]">
            <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
                <Reveal variant="blur">
                    <h2 className="text-[21px] font-bold text-primary md:text-[34px]">
                        Tại sao nên chọn Huang Shan Global
                    </h2>
                </Reveal>

                <div className="section-mt grid section-gap md:grid-cols-2">
                    {whyChooseColumns.map((column, columnIndex) => (
                        <div key={column.title}>
                            <Reveal variant={columnIndex === 0 ? "left" : "right"} delay={0.5}>
                                <h3 className="text-[21px] font-bold text-[#8fcf9c] md:text-[28px]">
                                    {column.title}
                                </h3>
                            </Reveal>
                            <StaggerGroup className="section-mt grid section-gap" staggerDelay={0.5}>
                                {column.items.map((item) => (
                                    <MotionItem key={item.title} variant={"pop"}>
                                        <div
                                            className="flex min-h-[74px] items-center gap-4 rounded-[22px] bg-primary px-5 py-4 text-left text-white shadow-[0_12px_24px_rgba(41,116,65,0.16)] md:min-h-[84px] md:px-8">
                                            <Image src={item.image} alt={item.title} width={61} height={58}/>
                                            <p className="text-[18px] font-bold leading-snug md:text-[20px]">
                                                {item.title}
                                            </p>
                                        </div>
                                    </MotionItem>
                                ))}
                            </StaggerGroup>
                        </div>
                    ))}
                </div>

                <Reveal variant="scale" delay={0.08}>
                    <Link
                        href="/#dich-vu"
                        className="section-mt inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-b from-[#87CA8E] to-[#448A54] px-5 py-2 text-[16px] font-bold text-white transition hover:-translate-y-0.5 hover:from-[#448A54] hover:to-[#87CA8E]"
                    >
                        Dịch vụ của Huang Shan Global
                        <Image src="/icon/arrow.svg" alt="" width={18} height={18} className="h-auto w-[18px]"/>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}






