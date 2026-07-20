import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {ContactSection} from "@/app/_components/ContactSection";
import {Testimonials} from "@/app/_components/Testimonials";
import {serviceDetails} from "../services-data";
import {ServiceDetailHero} from "../_components/ServiceDetailHero";
import {ServiceProcess} from "../_components/ServiceProcess";
import {ServiceQuote} from "../_components/ServiceQuote";

interface ServiceDetailPageProps {
    params: Promise<{slug: string}>;
}

function getService(slug: string) {
    return serviceDetails.find((service) => service.slug === slug);
}

export function generateStaticParams() {
    return serviceDetails.map((service) => ({slug: service.slug}));
}

export async function generateMetadata({params}: ServiceDetailPageProps): Promise<Metadata> {
    const {slug} = await params;
    const service = getService(slug);

    if (!service) {
        return {
            title: "Dịch vụ | Huang Shan Global",
        };
    }

    return {
        title: `${service.title} | Huang Shan Global`,
        description: service.intro,
    };
}

export default async function ServiceDetailPage({params}: ServiceDetailPageProps) {
    const {slug} = await params;
    const service = getService(slug);

    if (!service) notFound();

    return (
        <main>
            <ServiceDetailHero service={service}/>
            <ServiceProcess service={service}/>
            <ServiceQuote service={service}/>
            <Testimonials/>
            <ContactSection/>
        </main>
    );
}
