import {PartnersMarquee} from "./PartnersMarquee";
import {Reveal} from "@/shared/components/ui/motion-primitives";

export function Partners() {
    return (
        <section className="bg-primary section-y text-white">
            <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
                <Reveal>
                    <h2 className="text-[21px] md:text-[32px] font-bold">Đối tác của chúng tôi</h2>
                    <p className="mx-auto mt-3 max-w-3xl text-[16px] leading-6 text-white/85">
                        Sự tin tưởng và phối hợp nghiêm túc từ các đối tác trong và ngoài nước là nền tảng cho mọi dự án
                        thành công.
                    </p>
                </Reveal>
            </div>

            <PartnersMarquee className="section-mt"/>

            <Reveal delay={0.08}>
                <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
                    <a href="#lien-he"
                       className="section-mt inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#005736] transition hover:bg-[#e9f6ec]">
                        Xem thêm
                    </a>
                </div>
            </Reveal>
        </section>
    );
}




