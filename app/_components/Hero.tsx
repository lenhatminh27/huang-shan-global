import Image from "next/image";
import {HeroAmbientMotion} from "./HeroAmbientMotion";

export function Hero() {
    return (
        <section id="home" className="relative min-h-[360px] overflow-hidden md:min-h-[600px]">
            <Image src="/logo/hero.png" alt="Xe vận chuyển Huang Shan Global" fill priority className="object-cover"
                   sizes="100vw"/>
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/25"/>
            <HeroAmbientMotion/>
            <div
                className="relative mx-auto flex min-h-[360px] max-w-7xl items-center justify-end px-5 py-12 md:min-h-[600px] md:px-10">
            </div>
        </section>
    );
}
