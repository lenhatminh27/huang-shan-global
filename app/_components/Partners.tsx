"use client";

import {useEffect, useRef} from "react";
import {partners} from "./home-data";
import Image from "next/image";
import {motion} from "motion/react";
import {Reveal} from "@/shared/components/ui/motion-primitives";

const partnerLoop = [...partners, ...partners, ...partners];

export function Partners() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        let frame = 0;
        let previousTime = performance.now();
        const speed = 24;

        const getSegmentWidth = () => scroller.scrollWidth / 3;

        const normalizeScroll = () => {
            const segmentWidth = getSegmentWidth();
            if (!segmentWidth) return;

            if (scroller.scrollLeft >= segmentWidth * 2) {
                scroller.scrollLeft -= segmentWidth;
            }

            if (scroller.scrollLeft <= 0) {
                scroller.scrollLeft += segmentWidth;
            }
        };

        scroller.scrollLeft = getSegmentWidth();

        const tick = (time: number) => {
            const delta = time - previousTime;
            previousTime = time;

            if (!isPausedRef.current) {
                scroller.scrollLeft += (speed * delta) / 1000;
                normalizeScroll();
            }

            frame = requestAnimationFrame(tick);
        };

        const handleScroll = () => normalizeScroll();

        scroller.addEventListener("scroll", handleScroll, {passive: true});
        frame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frame);
            scroller.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="bg-primary py-14 text-white md:py-16">
            <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
                <Reveal>
                    <h2 className="text-[32px] font-bold">Đối tác của chúng tôi</h2>
                    <p className="mx-auto mt-3 max-w-3xl text-[16px] leading-6 text-white/85">
                        Sự tin tưởng và phối hợp nghiêm túc từ các đối tác trong và ngoài nước là nền tảng cho mọi dự án
                        thành công.
                    </p>
                </Reveal>
            </div>

            <div
                ref={scrollerRef}
                className="mt-8 cursor-grab overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
                onPointerDown={() => (isPausedRef.current = true)}
                onPointerUp={() => (isPausedRef.current = false)}
                onPointerLeave={() => (isPausedRef.current = false)}
                onTouchStart={() => (isPausedRef.current = true)}
                onTouchEnd={() => (isPausedRef.current = false)}
            >
                <div className="flex w-max gap-4 px-5 md:gap-5">
                    {partnerLoop.map((partner, index) => (
                        <motion.div
                            key={`${partner.alt}-${index}`}
                            className="flex h-[104px] w-[142px] shrink-0 items-center justify-center rounded-[18px] bg-white p-4 shadow-[0_10px_26px_rgba(0,0,0,0.10)] md:h-[132px] md:w-[176px] md:rounded-[20px]"
                            whileHover={{scale: 1.06, rotate: index % 2 === 0 ? 1 : -1}}
                            transition={{type: "spring", stiffness: 180, damping: 24}}
                        >
                            <Image
                                src={partner.image}
                                alt={partner.alt}
                                width={188}
                                height={150}
                                className="max-h-full w-full object-contain"
                                aria-label={`Đối tác ${(index % partners.length) + 1}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <Reveal delay={0.08}>
                <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
                    <a href="#lien-he"
                       className="mt-8 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#005736] transition hover:bg-[#e9f6ec]">
                        Xem thêm
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
