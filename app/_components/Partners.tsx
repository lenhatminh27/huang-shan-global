"use client";

import {partners} from "./home-data";
import Image from "next/image";
import {motion} from "motion/react";
import {Reveal} from "@/shared/components/ui/motion-primitives";

const partnerLoop = [...partners, ...partners];

export function Partners() {
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

            <div className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex w-max gap-5 px-5"
                    initial={{x: 0}}
                    whileInView={{x: "-50%"}}
                    viewport={{amount: 0.33, once: false}}
                    transition={{duration: 42, repeat: Infinity, ease: "linear"}}
                    whileHover={{animationPlayState: "paused"}}
                >
                    {partnerLoop.map((partner, index) => (
                        <motion.div
                            key={`${partner.alt}-${index}`}
                            className="flex h-[112px] w-[150px] shrink-0 items-center justify-center rounded-[20px] bg-white p-4 shadow-[0_10px_26px_rgba(0,0,0,0.10)] md:h-[132px] md:w-[176px]"
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
                </motion.div>
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


