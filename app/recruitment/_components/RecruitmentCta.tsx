import Image from "next/image";
import Link from "next/link";
import {Reveal} from "@/shared/components/ui/motion-primitives";

export function RecruitmentCta() {
    return (
        <section id="ung-tuyen" className="relative overflow-hidden py-12 text-white md:py-16">
            <Image
                src="/service-hero.png"
                alt="Gia nhập Huang Shan Global"
                fill
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/56 via-black/22 to-transparent"/>

            <div className="relative z-10 mx-auto max-w-8xl px-5 md:px-10">
                <Reveal variant="left" className="max-w-3xl">
                    <h2 className="text-[28px] font-semibold md:text-[34px]">Gia nhập cùng Huang Shang Global</h2>
                    <p className="mt-4 max-w-2xl text-[16px] font-medium leading-7 text-white/90">
                        Hãy cùng chúng tôi tạo nên điều khác biệt. Chúng tôi luôn tìm kiếm những con người tài năng,
                        sáng tạo và sẵn sàng bứt phá để cùng xây dựng những giá trị mới.
                    </p>
                    <Link
                        href="mailto:Huangshanglobal@gmail.com"
                        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-b from-[#87CA8E] to-[#448A54] px-5 py-2 text-[16px] font-bold text-white transition hover:-translate-y-0.5 hover:from-[#448A54] hover:to-[#87CA8E]"
                    >
                        Ứng tuyển
                        <Image src="/icon/arrow.svg" alt="" width={18} height={18} className="h-auto w-[18px]"/>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
