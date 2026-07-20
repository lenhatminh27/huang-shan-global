import {teamShare} from "../about-data";
import {Floating, Reveal} from "@/shared/components/ui/motion-primitives";

export function TeamShare() {
    return (
        <section className="bg-white py-14 md:py-18">
            <div className="mx-auto max-w-6xl px-5 md:px-10">
                <Reveal variant="up">
                    <h2 className="text-center text-[28px] font-semibold text-primary md:text-[36px]">
                        Chia sẻ từ đội ngũ Huang Shan Global
                    </h2>
                </Reveal>

                <div className="mt-10 grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr]">
                    <Floating
                        className="grid justify-items-center gap-5 text-center md:grid-cols-[132px_1fr] md:text-left">
                        <div className="relative size-30 overflow-hidden rounded-[22px] bg-[#eef6ef] md:size-34"></div>
                        <div className="self-center">
                            <h3 className="text-[22px] font-bold text-primary">{teamShare.name}</h3>
                            <p className="mt-1 text-[16px] font-medium text-[#8b938d]">{teamShare.role}</p>
                        </div>
                    </Floating>

                    <Reveal variant="right" delay={0.08}>
                        <div
                            className="rounded-[24px] bg-[#E5E5E7] px-7 py-7 text-[16px] font-medium leading-7 text-[#858C95] md:px-9 md:py-8">
                            {teamShare.content}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
