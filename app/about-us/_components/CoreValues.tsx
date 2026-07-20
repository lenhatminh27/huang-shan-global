import {coreValues} from "../about-data";
import {MotionCard, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";
import Image from "next/image";

export function CoreValues() {
    return (
        <section className="bg-white py-14 md:py-18">
            <div className="mx-auto max-w-8xl px-5 md:px-10">
                <Reveal variant="right">
                    <h2 className="text-center text-[30px] font-semibold text-primary md:text-[38px]">
                        Giá trị cốt lõi
                    </h2>
                </Reveal>

                <StaggerGroup className="mt-9 grid gap-6 md:grid-cols-3" staggerDelay={0.5}>
                    {coreValues.map((value, index) => (
                        <MotionCard
                            key={value.title}
                            variant={index === 0 ? "pop" : index === 1 ? "flip" : "drift"}
                            hover={index === 1 ? "zoom" : "lift"}
                            className="rounded-[22px] bg-[#f4f4f4] p-7 text-left shadow-[0_12px_30px_rgba(38,87,50,0.08)] md:p-8"
                        >
                            <Image src={value.image} alt={value.title} width={56} height={56}/>
                            <h3 className="mt-5 text-[24px] font-bold leading-tight text-primary">
                                {value.title}
                            </h3>
                            <p className="mt-8 text-[16px] font-medium leading-7">
                                {value.content}
                            </p>
                        </MotionCard>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
}
