import Image from "next/image";
import ArrowButton from "@/shared/components/ui/arrow-button";
import {Floating, Reveal} from "@/shared/components/ui/motion-primitives";

export function Intro() {
    return (
        <section id="ve-chung-toi" className="bg-[#F9FFF9] py-12 md:py-16">
            <div className="mx-auto grid max-w-6xl items-center gap-[12px] px-5 md:grid-cols-[1fr_210px] md:px-10">
                <Reveal variant="left" delay={0.3}>
                    <h1 className="text-3xl font-bold leading-tight text-[#448A54] md:text-4xl">
                        Lựa chọn hàng đầu về Thương mại xuất nhập khẩu
                    </h1>
                    <p className="mt-4 max-w-3xl text-[16px] leading-7 text-[#729085]">
                        Huang Shan Global cung cấp giải pháp logistics và xuất nhập khẩu Trung-Việt trọn gói, từ đặt
                        hàng, thanh toán đến vận chuyển và nhập khẩu máy móc. Với hệ thống kho bãi chủ động và đội ngũ
                        giàu kinh nghiệm, chúng tôi cam kết nhanh chóng - an toàn - minh bạch - tối ưu chi phí, trở
                        thành đối tác tin cậy cho giao thương Trung-Việt.
                    </p>
                    <ArrowButton className={'mt-8'}>
                        <span className={'font-bold'}>Câu chuyện của Huang Shan Global</span>
                    </ArrowButton>
                </Reveal>
                <Floating delay={0.3}
                          className="relative justify-self-center w-full aspect-square rounded-[30px] shadow-[0_18px_45px_rgba(60,123,75,0.18)]">
                    <Image src="/logo/logo-wb.png" alt="Biểu trưng Huang Shan Global" fill
                           sizes="(min-width: 768px) 160px, 144px" className="object-contain"/>
                </Floating>
            </div>
        </section>
    );
}
