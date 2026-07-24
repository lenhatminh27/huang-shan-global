"use client";

import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import Image from "next/image";

const contactButtons = [
    {
        label: "Messenger",
        href: "https://www.facebook.com/profile.php?id=61586170832449",
        className: "bg-[#0866ff] shadow-[0_10px_22px_rgba(22,139,255,0.35)]",
        content: <Image src="/icon/facebook.svg" alt="fb icon" width={28} height={28}/>,
    },
    {
        label: "Zalo",
        href: "https://zalo.me/0389591238",
        className: "bg-[#1677FF] shadow-[0_10px_22px_rgba(22,119,255,0.35)]",
        content: <Image src="/icon/zalo.svg" alt="zalo icon" width={28} height={28}/>,
    },
    {
        label: "Gọi điện",
        href: "tel:0389591238",
        className: "bg-[#08751C] shadow-[0_10px_22px_rgba(8,117,28,0.36)]",
        content: <Image src="/icon/phone.webp" alt="phone icon" width={22} height={22}/>,
    },
];

export function FloatingContactButtons() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed right-4 bottom-6 z-50 flex flex-col items-center gap-3 md:right-6 md:bottom-8">
            <AnimatePresence initial={false}>
                {isOpen && contactButtons.map((item, index) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        aria-label={item.label}
                        className={`grid size-[52px] place-items-center rounded-full text-white transition hover:-translate-y-1 md:size-[52px] ${item.className}`}
                        initial={{opacity: 0, y: 0 - (index + 18), scale: 0.82}}
                        animate={{opacity: 1, y: -18, scale: 1}}
                        exit={{opacity: 0, y: 14, scale: 0.82}}
                        transition={{duration: 0.24, delay: index * 0.04, ease: [0.22, 1, 0.36, 1]}}
                    >
                        {item.content}
                    </motion.a>
                ))}
            </AnimatePresence>

            <motion.button
                type="button"
                aria-label={isOpen ? "Ẩn nút liên hệ nhanh" : "Hiện nút liên hệ nhanh"}
                onClick={() => setIsOpen((value) => !value)}
                className="grid size-[38px] place-items-center rounded-full bg-[#056B16] text-white shadow-[0_14px_28px_rgba(5,107,22,0.34)] transition hover:-translate-y-1 md:size-[44px]"
                whileTap={{scale: 0.92}}
                animate={{rotate: isOpen ? 45 : 0}}
      
            >
                <Image src="/icon/plus.png" alt="contact icon" width={20} height={20}/>
            </motion.button>
        </div>
    );
}
