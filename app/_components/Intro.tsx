import Image from "next/image";
import ArrowButton from "@/shared/components/ui/arrow-button";
import {Floating, Reveal} from "@/shared/components/ui/motion-primitives";

export function Intro() {
    return (
        <section id="ve-chung-toi" className="bg-[#F9FFF9] section-y">
            <div className="mx-auto grid max-w-6xl items-center section-gap px-5 md:grid-cols-[1fr_210px] md:px-10">
                <Reveal variant="left" delay={0.3}>
                    <h1 className="text-[21px] font-bold leading-tight text-[#448A54] md:text-4xl">
                        Lựa chọn hàng đầu về Thương mại xuất nhập khẩu
                    </h1>
                    <p className="mt-4 max-w-3xl text-[16px] leading-7 text-[#729085]">
                        Huang Shan Global cung cấp giải pháp logistics và xuất nhập khẩu Trung-Việt trọn gói, từ đặt
                        hàng, thanh toán đến vận chuyển và nhập khẩu máy móc. Với hệ thống kho bãi chủ động và đội ngũ
                        giàu kinh nghiệm, chúng tôi cam kết nhanh chóng - an toàn - minh bạch - tối ưu chi phí, trở
                        thành đối tác tin cậy cho giao thương Trung-Việt.
                    </p>
                    <ArrowButton className={'section-mt'}>
                        <span className={'font-bold'}>Câu chuyện của Huang Shan Global</span>
                    </ArrowButton>
                </Reveal>
                <Floating delay={0.3}
                          className="relative mt-6 size-32 justify-self-center md:mt-0 md:size-full">
                    <Image src="/logo/logo-wb.png" alt="Biểu trưng Huang Shan Global" fill
                           sizes="(min-width: 768px) 210px, 128px" className="object-contain"/>
                </Floating>
            </div>
        </section>
    );
}



