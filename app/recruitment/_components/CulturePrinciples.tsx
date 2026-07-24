"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {motion} from "motion/react";
import {culturePrinciples} from "../recruitment-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

const listVariants = {
    hidden: {},
    visible: {transition: {staggerChildren: 0.08, delayChildren: 0.08}},
};

const cardVariants = {
    hidden: {opacity: 0, y: 34, scale: 0.92},
    visible: {opacity: 1, y: 0, scale: 1},
};

export function CulturePrinciples() {
    const sectionRef = useRef<HTMLElement>(null);
    const [shouldShowCards, setShouldShowCards] = useState(false);

    useEffect(() => {
        if (shouldShowCards) return;

        const checkPosition = () => {
            const section = sectionRef.current;
            if (!section) return;

            const isMobile = window.innerWidth < 768;
            const triggerPoint = isMobile ? window.innerHeight * 0.82 : window.innerHeight * 0.55;

            if (section.getBoundingClientRect().top <= triggerPoint) {
                setShouldShowCards(true);
            }
        };

        checkPosition();
        window.addEventListener("scroll", checkPosition, {passive: true});
        window.addEventListener("resize", checkPosition);

        return () => {
            window.removeEventListener("scroll", checkPosition);
            window.removeEventListener("resize", checkPosition);
        };
    }, [shouldShowCards]);

    return (
        <section ref={sectionRef} className="bg-white section-y">
            <div className="mx-auto max-w-8xl px-5 text-center md:px-10">
                <Reveal variant="up">
                    <h2 className="text-[21px] md:text-[32px] font-bold text-primary">Nguyên tắc văn hóa</h2>
                    <p className="mt-2 text-[16px] font-medium text-secondary">Vững bước tiên phong, nâng tầm khu
                        vực</p>
                </Reveal>

                <motion.div
                    className="section-mt grid section-gap md:grid-cols-3 "
                    variants={listVariants}
                    initial="hidden"
                    animate={shouldShowCards ? "visible" : "hidden"}
                >
                    {culturePrinciples.map((item, index) => (
                        <motion.article
                            key={item.title}
                            variants={cardVariants}
                            transition={{duration: 0.85, ease: [0.22, 1, 0.36, 1]}}
                            whileHover={{y: -6, scale: index % 3 === 1 ? 1.025 : 1.015}}
                            className="min-h-[250px] rounded-[24px] bg-[#f5f5f5] px-7 py-8 text-center shadow-[0_10px_26px_rgba(38,87,50,0.05)] md:min-h-[290px]"
                        >
                            <span
                                className="mx-auto grid size-14 place-items-center rounded-full bg-primary">
                                <Image src="/icon/check-circle.svg" alt="" width={28} height={28}
                                       className="h-auto w-7 mx-auto "/>
                            </span>
                            <h3 className="mt-5 text-[21px] md:text-[22px] font-bold text-[#171717]">{item.title}</h3>
                            <p className="mx-auto mt-6 max-w-[230px] text-[15px] font-medium leading-6 text-[#5f6662]">
                                {item.description}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}






