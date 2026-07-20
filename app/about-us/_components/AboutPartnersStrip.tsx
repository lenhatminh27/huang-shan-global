import {PartnersMarquee} from "@/app/_components/PartnersMarquee";
import {Reveal} from "@/shared/components/ui/motion-primitives";

export function AboutPartnersStrip() {
    return (
        <section className="bg-primary py-6 md:py-7">
            <div className="mx-auto flex max-w-8xl flex-col gap-5 md:flex-row md:items-center">
                <Reveal variant="left" className="shrink-0 px-5 md:w-72 md:px-10">
                    <p className="text-sm font-bold uppercase text-white">
                        Đối tác của chúng tôi:
                    </p>
                </Reveal>
                <PartnersMarquee className="w-full min-w-0 flex-1"/>
            </div>
        </section>
    );
}
