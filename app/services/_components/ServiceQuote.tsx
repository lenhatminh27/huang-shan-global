import Image from "next/image";
import Link from "next/link";
import {ServiceDetail} from "../services-data";
import {Reveal} from "@/shared/components/ui/motion-primitives";

interface ServiceQuoteProps {
    service: ServiceDetail;
}

export function ServiceQuote({service}: ServiceQuoteProps) {
    return (
        <section className="bg-white section-y">
            <div className="mx-auto grid max-w-8xl items-center section-gap px-5 md:grid-cols-2 md:px-10">
                <Reveal variant="left">
                    <h2 className="text-[21px] font-semibold text-primary md:text-[34px]">Báo giá Dịch vụ</h2>
                    <div className="mt-6 space-y-4 text-[20px] leading-8 text-[#9aa0a8] md:text-[22px]">
                        {service.pricing.map((item) => (
                            <p key={item.label}>
                                <span className="font-bold text-[#8d949d]">{item.label}:</span> {item.value}
                            </p>
                        ))}
                    </div>
                    <Link
                        href="#lien-he"
                        className="section-mt inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-b from-[#87CA8E] to-[#448A54] px-5 py-2 text-[16px] font-bold text-white transition hover:-translate-y-0.5 hover:from-[#448A54] hover:to-[#87CA8E]"
                    >
                        Liên hệ ngay
                        <Image src="/icon/arrow.svg" alt="" width={18} height={18} className="h-auto w-[18px]"/>
                    </Link>
                </Reveal>

                <Reveal variant="right" delay={0.08}>
                    <div className="relative aspect-[1.9] overflow-hidden rounded-[24px] bg-[#d8e5dc] shadow-sm">
                        <Image
                            src={service.quoteImage}
                            alt={`Báo giá ${service.title}`}
                            fill
                            sizes="(min-width: 768px) 46vw, 90vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/12"/>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}




