"use client";

import {ReactNode} from "react";
import {motion} from "motion/react";

const viewport = {once: true, amount: 0.5};

const revealVariants = {
    up: {
        hidden: {opacity: 0, y: 80},
        visible: {opacity: 1, y: 0},
    },
    left: {
        hidden: {opacity: 0, x: -80},
        visible: {opacity: 1, x: 0},
    },
    right: {
        hidden: {opacity: 0, x: 80},
        visible: {opacity: 1, x: 0},
    },
    scale: {
        hidden: {opacity: 0, scale: 0.90},
        visible: {opacity: 1, scale: 1},
    },
    blur: {
        hidden: {opacity: 0, y: 20, filter: "blur(10px)"},
        visible: {opacity: 1, y: 0, filter: "blur(0px)"},
    },
    clip: {
        hidden: {opacity: 0, clipPath: "inset(0 0 100% 0)"},
        visible: {opacity: 1, clipPath: "inset(0 0 0% 0)"},
    },
};

const itemVariants = {
    rise: {
        hidden: {opacity: 0, y: 22},
        visible: {opacity: 1, y: 0},
    },
    pop: {
        hidden: {opacity: 0, scale: 0.82, y: 18},
        visible: {opacity: 1, scale: 1, y: 0},
    },
    flip: {
        hidden: {opacity: 0, rotateX: -16, y: 24},
        visible: {opacity: 1, rotateX: 0, y: 0},
    },
    drift: {
        hidden: {opacity: 0, x: -20, y: 16},
        visible: {opacity: 1, x: 0, y: 0},
    },
};

interface MotionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

interface RevealProps extends MotionProps {
    variant?: keyof typeof revealVariants;
}

interface StaggerGroupProps extends MotionProps {
    staggerDelay?: number;
}

interface MotionItemProps extends MotionProps {
    variant?: keyof typeof itemVariants;
}

interface MotionCardProps extends MotionItemProps {
    hover?: "lift" | "tilt" | "zoom";
}

const hoverVariants = {
    lift: {y: -6, scale: 1.015},
    tilt: {y: -7, rotate: -0.8, scale: 1.018},
    zoom: {scale: 1.025},
};

export function Reveal({children, className, delay = 0, variant = "up"}: RevealProps) {
    return (
        <motion.div
            className={className}
            variants={revealVariants[variant]}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{duration: variant === "clip" ? 1.3 : 1, ease: [0.22, 1, 0.36, 1], delay}}
        >
            {children}
        </motion.div>
    );
}

export function StaggerGroup({children, className, staggerDelay = 0.09}: StaggerGroupProps) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: {},
                visible: {transition: {staggerChildren: staggerDelay, delayChildren: 0.12}},
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
        >
            {children}
        </motion.div>
    );
}

export function MotionItem({children, className, variant = "rise"}: MotionItemProps) {
    return (
        <motion.div
            className={className}
            variants={itemVariants[variant]}
            transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
        >
            {children}
        </motion.div>
    );
}

export function MotionCard({children, className, variant = "rise", hover = "lift"}: MotionCardProps) {
    return (
        <motion.article
            className={className}
            variants={itemVariants[variant]}
            transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
            whileHover={hoverVariants[hover]}
        >
            {children}
        </motion.article>
    );
}

export function Floating({children, className, delay = 0}: MotionProps) {
    return (
        <motion.div
            className={className}
            initial={{opacity: 0, scale: 0.92}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={viewport}
            // animate={{y: [0, -8, 0], rotate: [0, 0.8, 0]}}
            transition={{
                opacity: {duration: 1.4, delay},
                scale: {duration: 1.4, delay},
                y: {duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.2},
                rotate: {duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.2},
            }}
        >
            {children}
        </motion.div>
    );
}


