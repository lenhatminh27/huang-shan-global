"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AnimatePresence, motion} from "motion/react";

const navItems = [
    {label: "Trang chủ", href: "/"},
    {label: "Về chúng tôi", href: "/about-us"},
    {label: "Dịch vụ", href: "/services"},
    {label: "Tuyển dụng", href: "/#tuyen-dung"},
    {label: "Tin tức", href: "/#tin-tuc"},
    {label: "Liên hệ", href: "/#lien-he"},
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 backdrop-blur">
                <div
                    className="mx-auto grid h-16 max-w-8xl grid-cols-[40px_1fr_40px] items-center px-4 md:flex md:h-22 md:justify-between md:px-10">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        className="flex size-9 items-center justify-center rounded-full bg-[#F5F5F5] text-primary transition hover:bg-[#e7f4e8] md:hidden"
                        aria-label="Mở menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="flex w-4 flex-col gap-1">
                            <span className="h-0.5 rounded-full bg-current"/>
                            <span className="h-0.5 rounded-full bg-current"/>
                            <span className="h-0.5 rounded-full bg-current"/>
                        </span>
                    </button>

                    <Link href="/" className="flex min-w-0 items-center justify-center gap-3 md:justify-start"
                          aria-label="Huang Shan Global">
                        <Image src="/logo/logo.png" alt="Huang Shan Global" width={162} height={52} priority
                               className="h-11 w-auto md:h-12"/>
                    </Link>

                    <div className="md:hidden"/>

                    <nav className="hidden items-center gap-8 text-[14px] font-bold uppercase text-[#3f8d57] lg:flex">
                        {navItems.map((item) => (
                            <Link key={item.label} href={item.href}
                                  className="transition hover:text-[#216a3a]">
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 md:flex">
                        <label className="relative block">
                            <span className="sr-only">Tìm kiếm</span>
                            <input
                                className="h-10 w-46 rounded-full bg-[#F5F5F5] px-4 text-xs outline-none ring-[#66aa78] transition focus:ring-2"
                                placeholder="Tìm kiếm"
                            />
                        </label>
                        <button
                            className="grid size-8 place-items-center rounded-full bg-[#73b881] text-sm font-bold text-white transition hover:bg-[#438f55]"
                            aria-label="Tìm kiếm">
                            <Image src="/icon/search.svg" alt="search icon" width={16} height={16}/>
                        </button>
                        <Link
                            href="/#lien-he"
                            className="ml-4 inline-flex justify-center rounded-full bg-linear-to-b from-[#87CA8E] to-[#448A54] px-8 py-2 text-[16px] font-bold text-white transition hover:-translate-y-0.5 hover:from-[#448A54] hover:to-[#87CA8E]"
                        >
                            Liên hệ
                        </Link>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[70] bg-black/55 md:hidden"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.22}}
                        onClick={closeMenu}
                    >
                        <motion.aside
                            className="h-full w-[74vw] max-w-[230px] bg-white shadow-[18px_0_45px_rgba(0,0,0,0.18)]"
                            initial={{x: "-100%"}}
                            animate={{x: 0}}
                            exit={{x: "-100%"}}
                            transition={{type: "spring", stiffness: 260, damping: 32}}
                            onClick={(event) => event.stopPropagation()}
                            aria-label="Menu mobile"
                        >
                            <div className="border-b border-[#edf1ed] px-4 py-6">
                                <label
                                    className="flex h-10 items-center gap-2 rounded-full bg-[#F5F5F5] px-4 text-[#8a968f] shadow-inner">
                                    <span className="sr-only">Tìm kiếm</span>
                                    <input
                                        className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#8a968f]"
                                        placeholder="Tìm kiếm..."
                                    />
                                    <Image src="/icon/search.svg" alt="search icon" width={18} height={18}/>
                                </label>
                            </div>

                            <nav className="flex flex-col text-[12px] font-bold uppercase text-[#777f79]">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="border-b border-[#edf1ed] px-4 py-5 tracking-wide transition hover:bg-[#f6fbf7] hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.aside>

                        <button
                            type="button"
                            onClick={closeMenu}
                            className="absolute right-4 top-4 flex size-8 items-center justify-center text-3xl font-light leading-none text-white"
                            aria-label="Đóng menu"
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

