"use client";

import {useMemo, useState} from "react";
import Image from "next/image";
import {AnimatePresence, motion} from "motion/react";
import {testimonials} from "./home-data";
import ArrowButton from "@/shared/components/ui/arrow-button";
import {Reveal} from "@/shared/components/ui/motion-primitives";

const ITEMS_PER_SLIDE = 2;

const slideVariants = {
    enter: (direction: number) => ({opacity: 0, x: direction > 0 ? 120 : -120, scale: 0.98}),
    center: {opacity: 1, x: 0, scale: 1},
    exit: (direction: number) => ({opacity: 0, x: direction > 0 ? -120 : 120, scale: 0.98}),
};

export function Testimonials() {
    const slides = useMemo(() => {
        const result = [];
        for (let index = 0; index < testimonials.length; index += ITEMS_PER_SLIDE) {
            result.push(testimonials.slice(index, index + ITEMS_PER_SLIDE));
        }
        return result;
    }, []);

    const [[activeSlide, direction], setActive] = useState<[number, number]>([0, 1]);
    const activeTestimonials = slides[activeSlide];

    const goTo = (nextSlide: number) => {
        const normalizedSlide = (nextSlide + slides.length) % slides.length;
        setActive([normalizedSlide, normalizedSlide > activeSlide || nextSlide < 0 ? 1 : -1]);
    };

    return (
        <section className="bg-white py-14 md:py-18">
            <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
                <Reveal>
                    <h2 className="text-[32px] font-bold text-primary">Phản hồi của Khách hàng</h2>
                    <p className="text-[16px] text-secondary">Nhập khẩu máy móc chất lượng an toàn, đảm bảo tiến độ,
                        dịch
                        vụ hậu cần tốt trên toàn quốc</p>
                </Reveal>

                <div className="mt-8 flex items-center justify-center gap-5">
                    <button
                        type="button"
                        onClick={() => goTo(activeSlide - 1)}
                        className="hidden size-12 shrink-0 rounded-full bg-[#F5F5F5] text-xl font-black text-[#4f9f63] transition hover:bg-[#d9f0dd] md:grid md:place-items-center"
                        aria-label="Phản hồi trước">
                        <Image src="/icon/back-arrow.svg" alt="back arrow" width={18} height={18}/>
                    </button>

                    <div className="relative min-h-[330px] w-full overflow-hidden px-1 md:min-h-[285px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={activeSlide}
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
                                    if (info.offset.x < -70) goTo(activeSlide + 1);
                                    if (info.offset.x > 70) goTo(activeSlide - 1);
                                }}
                                className="grid gap-6 md:grid-cols-2"
                            >
                                {activeTestimonials.map((item) => (
                                    <article
                                        key={item.name}
                                        className="rounded-[24px] bg-[#F5F5F5] p-7 text-left shadow-[0_16px_38px_rgba(45,82,53,0.08)] md:p-8"
                                    >
                                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                            <div className="flex min-w-0 items-start gap-4">
                                                <div className="relative size-18 shrink-0 overflow-hidden rounded-full bg-white shadow-[0_8px_22px_rgba(45,82,53,0.10)]">
                                                    <Image
                                                        src={item.avatar}
                                                        alt={`Avatar ${item.name}`}
                                                        fill
                                                        sizes="72px"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div className="min-w-0 pt-1">
                                                    <h3 className="text-base font-bold leading-snug text-primary md:text-lg">{item.name}</h3>
                                                    <p className="mt-1 text-sm font-medium text-[#87CA8E]">{item.role}</p>
                                                </div>
                                            </div>
                                            <div className="shrink-0 text-[22px] tracking-[0.10em] text-[#73bf82]">★★★★★</div>
                                        </div>
                                        <p className="mt-5 border-t border-[#e3ebe5] pt-5 text-base leading-7 text-[#809188]">{item.content}</p>
                                    </article>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        type="button"
                        onClick={() => goTo(activeSlide + 1)}
                        className="hidden size-12 shrink-0 rounded-full bg-[#F5F5F5] text-xl font-black text-[#4f9f63] transition hover:bg-[#d9f0dd] md:grid md:place-items-center"
                        aria-label="Phản hồi tiếp theo">
                        <Image src="/icon/back-arrow.svg" alt="back arrow" width={18} height={18}
                               className="rotate-180"/>
                    </button>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2" aria-label="Chọn nhóm phản hồi">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.map((item) => item.name).join("-")}
                            type="button"
                            onClick={() => goTo(index)}
                            className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-primary" : "w-2.5 bg-[#d7eadb]"}`}
                            aria-label={`Xem nhóm phản hồi ${index + 1}`}
                            aria-current={index === activeSlide}
                        />
                    ))}
                </div>

                <Reveal delay={0.08}>
                    <ArrowButton className="mx-auto mt-8"> Xem thêm</ArrowButton>
                </Reveal>
            </div>
        </section>
    );
}

