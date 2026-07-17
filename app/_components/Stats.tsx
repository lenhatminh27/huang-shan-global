import {stats} from "./home-data";
import ArrowButton from "@/shared/components/ui/arrow-button";
import {CountUpNumber} from "@/shared/components/ui/count-up-number";
import {MotionItem, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";

export function Stats() {
    return (
        <section className="bg-white py-14 md:py-18">
            <div className="flex flex-col items-center mx-auto max-w-5xl px-5 text-center md:px-10">
                <Reveal variant="blur">
                    <h2 className="text-[32px] font-bold text-primary">Những con số ấn tượng</h2>
                    <p className="mt-2 text-[16px] text-secondary">Những con số khẳng định vị thế đơn vị logistics tiên
                        phong.</p>
                </Reveal>
                <StaggerGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.07}>
                    {stats.map((item) => (
                        <MotionItem key={item.value} className="text-left" variant="pop">
                            <CountUpNumber value={item.value} className="text-5xl font-bold leading-none text-primary"/>
                            <p className="mx-auto mt-2 max-w-36 text-base font-semibold leading-5 text-[#69a577]">{item.label}</p>
                        </MotionItem>
                    ))}
                </StaggerGroup>
                <Reveal delay={0.08} variant="scale">
                    <ArrowButton className={'mt-18'}>
                        Tìm hiểu thêm
                    </ArrowButton>
                </Reveal>
            </div>
        </section>
    );
}

