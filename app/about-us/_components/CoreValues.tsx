import {coreValues} from "../about-data";
import {MotionCard, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";
import Image from "next/image";

export function CoreValues() {
    return (
        <section className="bg-white section-y">
            <div className="mx-auto max-w-8xl px-5 md:px-10">
                <Reveal variant="right">
                    <h2 className="text-center text-[21px] font-bold text-primary md:text-[38px]">
                        Giá trị cốt lõi
                    </h2>
                </Reveal>

                <StaggerGroup className="section-mt grid section-gap md:grid-cols-3" staggerDelay={0.5}>
                    {coreValues.map((value, index) => (
                        <MotionCard
                            key={value.title}
                            variant={index === 0 ? "pop" : index === 1 ? "flip" : "drift"}
                            hover={index === 1 ? "zoom" : "lift"}
                            className="rounded-[22px] bg-[#f5f5f5] p-7 flex flex-col items-center shadow-[0_12px_30px_rgba(38,87,50,0.08)] md:p-8"
                        >
                            <Image src={value.image} alt={value.title} width={56} height={56}/>
                            <h3 className="mt-5 text-[21px] font-bold leading-tight text-center text-primary md:text-[24px]">
                                {value.title}
                            </h3>
                            <p className="mt-6 text-[16px] font-medium leading-7 text-justify">
                                {value.content}
                            </p>
                        </MotionCard>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
}


