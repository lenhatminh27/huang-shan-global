import Image from "next/image";
import {HeroAmbientMotion} from "./HeroAmbientMotion";

export function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            <Image
                src="/logo/hero.png"
                alt="Xe vận chuyển Huang Shan Global"
                width={1440}
                height={520}
                priority
                className="h-auto w-full"
                sizes="100vw"/>
            <div
                className="absolute inset-0 hidden bg-gradient-to-r from-black/5 via-transparent to-black/25 md:block"/>
            <HeroAmbientMotion/>
        </section>
    );
}
