"use client";

import {useEffect, useRef} from "react";
import Image from "next/image";
import {motion} from "motion/react";
import {partners} from "./home-data";

const partnerLoop = [...partners, ...partners, ...partners];

interface PartnersMarqueeProps {
    className?: string;
    trackClassName?: string;
    cardClassName?: string;
    speed?: number;
}

export function PartnersMarquee({
                                    className = "",
                                    trackClassName = "gap-4 px-5 md:gap-5",
                                    cardClassName = "h-[104px] w-[142px] rounded-[18px] p-4 md:h-[132px] md:w-[176px] md:rounded-[20px]",
                                    speed = 24,
                                }: PartnersMarqueeProps) {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        let frame = 0;
        let previousTime = performance.now();

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
    }, [speed]);

    return (
        <div
            ref={scrollerRef}
            className={`cursor-grab overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden ${className}`}
            onPointerDown={() => (isPausedRef.current = true)}
            onPointerUp={() => (isPausedRef.current = false)}
            onPointerLeave={() => (isPausedRef.current = false)}
            onTouchStart={() => (isPausedRef.current = true)}
            onTouchEnd={() => (isPausedRef.current = false)}
        >
            <div className={`flex w-max ${trackClassName}`}>
                {partnerLoop.map((partner, index) => (
                    <motion.div
                        key={`${partner.alt}-${index}`}
                        className={`flex shrink-0 items-center justify-center bg-white shadow-[0_10px_26px_rgba(0,0,0,0.10)] ${cardClassName}`}
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
    );
}
