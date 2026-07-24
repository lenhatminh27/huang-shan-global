import {visionMission} from "../about-data";
import {MotionCard, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";
import Image from "next/image";

export function VisionMission() {
    return (
        <section className="bg-[#f4fcf5] section-y">
            <div className="mx-auto max-w-6xl px-5 md:px-10">
                <Reveal variant="scale">
                    <h2 className="text-center text-[21px] font-bold text-[#005736] md:text-[36px]">
                        Tầm nhìn và Sứ mệnh
                    </h2>
                </Reveal>

                <StaggerGroup className="section-mt grid section-gap md:grid-cols-2" staggerDelay={0.12}>
                    {visionMission.map((item, index) => (
                        <MotionCard
                            key={item.title}
                            variant={index === 0 ? "flip" : "drift"}
                            hover={"tilt"}
                            className="relative overflow-hidden rounded-[24px] bg-primary px-7 py-8 text-white shadow-[0_16px_34px_rgba(41,116,65,0.18)] md:px-10 md:py-9"
                        >
                            <Image src={'/icon/check-circle.svg'} alt={'check circle'} width={160} height={160}
                                   className={'absolute top-0 left-0 z-0'}/>
                            <div className="relative z-10">
                                <h3 className="text-center text-[21px] font-bold md:text-[22px]">{item.title}</h3>
                                <p className="mt-5 text-[14px] md:text-[16px] font-medium leading-7 text-white/88 text-justify">
                                    {item.content}
                                </p>
                            </div>
                        </MotionCard>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
}






