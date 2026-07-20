"use client";

import {useMemo, useState} from "react";
import Image from "next/image";
import {AnimatePresence, motion} from "motion/react";
import {news} from "./home-data";
import ArrowButton from "@/shared/components/ui/arrow-button";
import {Reveal} from "@/shared/components/ui/motion-primitives";
import {useMediaQuery} from "@/shared/hooks/use-media-query";

const slideVariants = {
    enter: (direction: number) => ({opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.98}),
    center: {opacity: 1, x: 0, scale: 1},
    exit: (direction: number) => ({opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.98}),
};

export function NewsSection() {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const itemsPerSlide = isDesktop ? 3 : 1;
    const slides = useMemo(() => {
        const result = [];
        for (let index = 0; index < news.length; index += itemsPerSlide) {
            result.push(news.slice(index, index + itemsPerSlide));
        }
        return result;
    }, [itemsPerSlide]);

    const [[activeSlide, direction], setActive] = useState<[number, number]>([0, 1]);
    const currentSlide = Math.min(activeSlide, Math.max(slides.length - 1, 0));
    const activeNews = slides[currentSlide] ?? slides[0] ?? [];

    const goTo = (nextSlide: number) => {
        const normalizedSlide = (nextSlide + slides.length) % slides.length;
        setActive([normalizedSlide, normalizedSlide > currentSlide || nextSlide < 0 ? 1 : -1]);
    };

    return (
        <section id="tin-tuc"
                 className="watermark-section before:top-[-10px] md:before:top-[-18px] xl:before:top-[-26px] bg-[#f4fcf5] py-14 md:py-18">
            <div className="mx-auto max-w-8xl px-5 text-center md:px-10">
                <Reveal variant="right">
                    <h2 className="text-[32px] font-bold text-primary">Tin tức</h2>
                </Reveal>

                <div className="relative mt-3 overflow-hidden px-1">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={`${currentSlide}-${itemsPerSlide}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{type: "spring", stiffness: 105, damping: 26, mass: 1.05}}
                            drag="x"
                            dragConstraints={{left: 0, right: 0}}
                            dragElastic={0.12}
                            onDragEnd={(_, info) => {
                                if (info.offset.x < -70) goTo(currentSlide + 1);
                                if (info.offset.x > 70) goTo(currentSlide - 1);
                            }}
                            className="grid grid-cols-1 gap-7 md:grid-cols-3"
                        >
                            {activeNews.map((item, index) => (
                                <article key={`${item.title}-${index}`}
                                         className="overflow-hidden rounded-[24px] bg-linear-100 from-primary to-[#87CA8E] text-left text-white shadow-sm">
                                    <div className="relative aspect-[1.34]">
                                        <Image src={item.thumbnail} alt={item.title} fill className="object-cover"
                                               sizes="(min-width: 768px) 31vw, 90vw"/>
                                    </div>
                                    <div className="p-7">
                                        <h3 className="text-lg font-bold line-clamp-3">{item.title}</h3>
                                        <p className="mt-1 text-sm text-white/90">{item.meta}</p>
                                        <p className="mt-5 border-t border-white/50 pt-4 text-sm text-white/90 line-clamp-4">{item.excerpt}</p>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2" aria-label="Chọn nhóm tin tức">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.map((item) => item.title).join("-")}
                            type="button"
                            onClick={() => goTo(index)}
                            className={`h-2.5 rounded-full transition-all ${index === currentSlide ? "w-8 bg-primary" : "w-2.5 bg-[#d7eadb]"}`}
                            aria-label={`Xem nhóm tin tức ${index + 1}`}
                            aria-current={index === currentSlide}
                        />
                    ))}
                </div>

                <Reveal delay={0.08} variant="blur">
                    <ArrowButton className={'mt-10 mx-auto'}>
                        Xem tất cả
                    </ArrowButton>
                </Reveal>
            </div>
        </section>
    );
}

