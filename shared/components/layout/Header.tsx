import Image from "next/image";
import ArrowButton from "@/shared/components/ui/arrow-button";

const navItems = ["Trang chủ", "Về chúng tôi", "Dịch vụ", "Tuyển dụng", "Tin tức", "Liên hệ"];

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-22 max-w-8xl items-center justify-between px-5 md:px-10">
                <a href="#home" className="flex items-center gap-3" aria-label="Huang Shan Global">
                    <Image src="/logo/logo.png" alt="Huang Shan Global" width={162} height={52} priority
                           className="h-12 w-auto"/>
                </a>

                <nav className="hidden items-center gap-8 text-[14px] font-bold uppercase text-[#3f8d57] lg:flex">
                    {navItems.map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                           className="transition hover:text-[#216a3a]">
                            {item}
                        </a>
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
                        <Image src={'/icon/search.svg'} alt={'search icon'} width={16} height={16}/>
                    </button>
                    <ArrowButton hasArrow={false} className={'px-8 ml-4'}>Liên hệ</ArrowButton>
                </div>
            </div>
        </header>
    );
}
