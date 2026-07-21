"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AnimatePresence, motion} from "motion/react";
import {jobPositions} from "../recruitment-data";
import {MotionCard, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";
import {useMediaQuery} from "@/shared/hooks/use-media-query";

const slideVariants = {
    enter: (direction: number) => ({opacity: 0, x: direction > 0 ? 90 : -90, scale: 0.98}),
    center: {opacity: 1, x: 0, scale: 1},
    exit: (direction: number) => ({opacity: 0, x: direction > 0 ? -90 : 90, scale: 0.98}),
};

function JobCard({job, index}: { job: (typeof jobPositions)[number]; index: number }) {
    return (
        <MotionCard
            variant={index % 2 === 0 ? "drift" : "flip"}
            hover="tilt"
            className="relative min-h-[230px] overflow-hidden rounded-[24px] bg-primary p-7 text-left text-white shadow-sm md:min-h-[250px]"
        >
            <Image
                src="/tuyen-dung-banner.png"
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-cover opacity-72"
            />
            <div className="absolute inset-0 bg-linear-to-br from-primary/78 via-primary/25 to-white/72"/>
            <div className="relative z-10 flex min-h-[176px] flex-col md:min-h-[196px]">
                <h3 className="text-[22px] font-bold leading-tight">{job.title}</h3>
                <p className="mt-3 text-[15px] font-bold">Địa điểm làm việc:</p>
                <p className="mt-1 text-[15px] font-medium text-white/88">{job.location}</p>
                <p className="mt-3 text-[15px] font-bold">Thời gian đăng ký:</p>
                <p className="mt-1 text-[15px] font-medium text-white/88">{job.deadline}</p>
                <Link
                    href="#ung-tuyen"
                    className="mt-auto inline-flex w-fit items-center justify-center gap-2 rounded-full bg-linear-to-b from-[#87CA8E] to-[#448A54] px-5 py-2 text-[16px] font-bold text-white transition hover:-translate-y-0.5 hover:from-[#448A54] hover:to-[#87CA8E]"
                >
                    Tìm hiểu thêm
                    <Image src="/icon/arrow.svg" alt="" width={18} height={18} className="h-auto w-[18px]"/>
                </Link>
            </div>
        </MotionCard>
    );
}

export function JobPositions() {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [[activeSlide, direction], setActive] = useState<[number, number]>([0, 1]);
    const currentSlide = Math.min(activeSlide, jobPositions.length - 1);
    const activeJob = jobPositions[currentSlide] ?? jobPositions[0];

    const goTo = (nextSlide: number) => {
        const normalizedSlide = (nextSlide + jobPositions.length) % jobPositions.length;
        setActive([normalizedSlide, normalizedSlide > currentSlide || nextSlide < 0 ? 1 : -1]);
    };

    return (
        <section id="vi-tri-tuyen-dung"
                 className="watermark-section before:top-[-10px] bg-[#f9fff9] py-12 md:before:top-[-22px] md:py-16">
            <div className="mx-auto max-w-8xl px-5 text-center md:px-10">
                <Reveal variant="scale">
                    <h2 className="text-[32px] font-bold text-primary">Vị trí tuyển dụng</h2>
                    <p className="mt-2 text-[16px] font-medium text-secondary">Gia nhập cùng chúng tôi</p>
                </Reveal>

                {isDesktop ? (
                    <StaggerGroup className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6" staggerDelay={0.08}>
                        {jobPositions.map((job, index) => (
                            <JobCard key={job.title} job={job} index={index}/>
                        ))}
                    </StaggerGroup>
                ) : (
                    <div className="mt-8 overflow-hidden px-1">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={activeJob.title}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{type: "spring", stiffness: 110, damping: 24}}
                                drag="x"
                                dragConstraints={{left: 0, right: 0}}
                                dragElastic={0.12}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x < -70) goTo(currentSlide + 1);
                                    if (info.offset.x > 70) goTo(currentSlide - 1);
                                }}
                            >
                                <JobCard job={activeJob} index={currentSlide}/>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-5 flex items-center justify-center gap-2"
                             aria-label="Chọn vị trí tuyển dụng">
                            {jobPositions.map((job, index) => (
                                <button
                                    key={job.title}
                                    type="button"
                                    onClick={() => goTo(index)}
                                    className={`h-2.5 rounded-full transition-all ${index === currentSlide ? "w-8 bg-primary" : "w-2.5 bg-[#d7eadb]"}`}
                                    aria-label={`Xem vị trí ${index + 1}`}
                                    aria-current={index === currentSlide}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <Reveal variant="blur" delay={0.08}>
                    <Link
                        href="#ung-tuyen"
                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-b from-[#87CA8E] to-[#448A54] px-5 py-2 text-[16px] font-bold text-white transition hover:-translate-y-0.5 hover:from-[#448A54] hover:to-[#87CA8E]"
                    >
                        Xem thêm
                        <Image src="/icon/arrow.svg" alt="" width={18} height={18} className="h-auto w-[18px]"/>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
