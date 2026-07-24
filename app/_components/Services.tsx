import Image from "next/image";
import {services} from "./home-data";
import ArrowButton from "@/shared/components/ui/arrow-button";
import {MotionCard, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";

export function Services() {
    return (
        <section id="dich-vu"
                 className="watermark-section before:top-[-10px] md:before:top-[-18px] xl:before:top-[-26px] bg-[#F9FFF9] section-y">
            <div className="mx-auto max-w-8xl px-5 text-center md:px-10">
                <Reveal variant="up">
                    <h2 className="text-[21px] md:text-[32px] font-bold text-primary">Dịch vụ nổi bật Huang Shan Global</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-6 text-secondary">
                        Huang Shan Global sở hữu hệ thống kho chính chủ, có kho bãi lớn hơn tại cả Trung Quốc và Việt
                        Nam,<br/>
                        đội ngũ kỹ thuật viên giàu kinh nghiệm.
                    </p>
                </Reveal>
                <StaggerGroup className="section-mt grid section-gap grid-cols-2 gap-3  lg:grid-cols-3" staggerDelay={0.11}>
                    {services.map((service, index) => (
                        <MotionCard key={service.title}
                                    variant={index % 2 === 0 ? "flip" : "drift"}
                                    hover="tilt"
                                    className="group relative aspect-[1.05] overflow-hidden rounded-[18px] md:aspect-[1.45] md:rounded-[24px] bg-[#d8e5dc] text-left shadow-sm">
                            <Image src={service.image} alt={service.title} fill
                                   className="object-cover transition duration-500 group-hover:scale-105"
                                   sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/25 to-transparent"/>
                            <h3 className="absolute left-4 top-4 max-w-[135px] whitespace-pre-line text-[21px] font-bold leading-tight text-white drop-shadow md:left-7 md:top-6 md:max-w-[230px] md:text-2xl">{service.title}</h3>
                        </MotionCard>
                    ))}
                </StaggerGroup>
                <Reveal delay={0.08} variant="scale">
                    <ArrowButton className={'mx-auto section-mt'}> Tìm hiểu thêm</ArrowButton>
                </Reveal>

            </div>
        </section>
    );
}






