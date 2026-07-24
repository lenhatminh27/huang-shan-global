import {ServiceDetail} from "../services-data";
import {MotionItem, Reveal, StaggerGroup} from "@/shared/components/ui/motion-primitives";

interface ServiceProcessProps {
    service: ServiceDetail;
}

export function ServiceProcess({service}: ServiceProcessProps) {
    return (
        <section className="bg-[#f4fcf5] section-y">
            <div className="mx-auto max-w-8xl px-5 md:px-10">
                <Reveal variant="up">
                    <h2 className="text-[21px] font-semibold text-primary md:text-[34px]">Quy trình triển khai</h2>
                </Reveal>

                <StaggerGroup className="section-mt grid section-gap md:grid-cols-2" staggerDelay={0.09}>
                    {service.process.map((step, index) => (
                        <MotionItem key={step.title} variant={index % 2 === 0 ? "drift" : "pop"}>
                            <article
                                className="min-h-[92px] rounded-[22px] bg-primary px-7 py-5 text-white md:min-h-[100px] md:px-9">
                                <h3 className="text-[21px] font-semibold leading-tight md:text-[24px]">
                                    {step.title}
                                </h3>
                                <ul className="mt-3 list-disc pl-5 text-[15px] font-medium leading-6 text-white/88 md:text-[16px]">
                                    {step.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        </MotionItem>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
}





