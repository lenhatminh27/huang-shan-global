import Image from "next/image";
import {news} from "./home-data";
import ArrowButton from "@/shared/components/ui/arrow-button";
import {MotionCard, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";

export function NewsSection() {
    return (
        <section id="tin-tuc"
                 className="watermark-section before:top-[-10px] md:before:top-[-18px] xl:before:top-[-26px] bg-[#f4fcf5] py-14 md:py-18">
            <div className="mx-auto max-w-8xl px-5 text-center md:px-10">
                <Reveal variant="right">
                    <h2 className="text-[32px] font-bold text-primary">Tin tức</h2>
                </Reveal>
                <StaggerGroup className="mt-3 grid gap-7 md:grid-cols-3" staggerDelay={0.13}>
                    {news.map((item, index) => (
                        <MotionCard key={`${item.title}-${index}`}
                                    variant="pop"
                                    hover={index === 1 ? "zoom" : "lift"}
                                    className="overflow-hidden rounded-[24px] bg-[#438f55] text-left text-white shadow-sm">
                            <div className="relative aspect-[1.34]">
                                <Image src={item.thumbnail} alt={item.title} fill className="object-cover"
                                       sizes="(min-width: 768px) 31vw, 90vw"/>
                            </div>
                            <div className="p-7">
                                <h3 className="text-lg font-bold line-clamp-3">{item.title}</h3>
                                <p className="mt-1 text-sm text-white/90">{item.meta}</p>
                                <p className="mt-5 border-t border-white/50 pt-4 text-sm  text-white/90 line-clamp-4">{item.excerpt}</p>
                            </div>
                        </MotionCard>
                    ))}
                </StaggerGroup>
                <Reveal delay={0.08} variant="blur">
                    <ArrowButton className={'mt-10 mx-auto'}>
                        Xem tất cả
                    </ArrowButton>
                </Reveal>
            </div>
        </section>
    );
}
