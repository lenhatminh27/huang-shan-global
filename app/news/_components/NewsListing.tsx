"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "motion/react";
import {newsHero, newsPageItems} from "../news-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

export function NewsListing() {
    return (
        <section
            className="watermark-section before:top-[-8px] bg-[#f4fcf5] py-4 sm:py-12 md:before:top-[-22px] md:py-16">
            <div className="mx-auto max-w-8xl px-5 text-center md:px-10">
                <Reveal variant="scale">
                    <h2 className="text-[32px] font-bold text-primary">Tin tức</h2>
                    <p className="mt-2 text-[16px] font-medium text-secondary">Cập nhật tin tức và sự kiện cùng Huang
                        Shan Global</p>
                </Reveal>

                <motion.div
                    className="relative mt-8 aspect-[1879/550] overflow-hidden rounded-[24px] bg-[#d8e5dc] shadow-sm md:h-[220px] md:aspect-auto md:rounded-[26px]"
                    initial={{opacity: 0, y: 28}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.15}}
                    transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
                >
                    <Image
                        src={newsHero.image}
                        alt="Tin tức mới nhất Huang Shan Global"
                        fill
                        sizes="(min-width: 768px) 86vw, 92vw"
                        className="object-contain object-center md:object-cover"
                        priority
                    />
                </motion.div>

                <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-7">
                    {newsPageItems.map((item, index) => (
                        <motion.article
                            key={item.id}
                            className="overflow-hidden rounded-[22px] bg-white text-left shadow-[0_14px_32px_rgba(38,87,50,0.08)]"
                            initial={{opacity: 0, y: 34, scale: 0.96}}
                            whileInView={{opacity: 1, y: 0, scale: 1}}
                            viewport={{once: true, amount: 0.08}}
                            transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08}}
                            whileHover={{y: -6, scale: 1.012}}
                        >
                            <Link href="#lien-he" className="block">
                                <div className="relative aspect-[1.22] bg-[#eef6ef]">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fill
                                        sizes="(min-width: 768px) 29vw, 90vw"
                                        className="object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="bg-primary px-7 py-6 text-white">
                                    <h3 className="line-clamp-2 text-[18px] font-bold leading-tight">{item.title}</h3>
                                    <p className="mt-2 text-[14px] font-medium text-white/88">{item.meta}</p>
                                    <p className="mt-4 border-t border-white/50 pt-3 text-[13px] font-medium text-white/88">{item.excerpt}</p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
}


