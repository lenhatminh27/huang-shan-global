"use client";

import {motion} from "motion/react";

export function HeroAmbientMotion() {
    return (
        <>
            <motion.div
                className="absolute inset-y-0 left-[-35%] w-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent"
                initial={{x: "-40%", skewX: -12}}
                animate={{x: "285%", skewX: -12}}
                transition={{duration: 4.8, ease: [0.22, 1, 0.36, 1], delay: 0.55}}
            />
            <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#87CA8E]"
                initial={{width: "0%", opacity: 0.65}}
                animate={{width: "100%", opacity: 0}}
                transition={{duration: 2.8, ease: "easeOut", delay: 0.35}}
            />
        </>
    );
}

