"use client";

import {useEffect, useRef, useState} from "react";
import {animate, useInView} from "motion/react";

interface CountUpNumberProps {
    value: string;
    className?: string;
}

function parseValue(value: string) {
    const numericValue = Number(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");

    return {
        numericValue: Number.isFinite(numericValue) ? numericValue : 0,
        suffix,
    };
}

export function CountUpNumber({value, className}: CountUpNumberProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {once: true, amount: 0.5});
    const {numericValue, suffix} = parseValue(value);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, numericValue, {
            duration: 2.4,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => setDisplayValue(Math.round(latest)),
        });

        return () => controls.stop();
    }, [isInView, numericValue]);

    return (
        <div ref={ref} className={className} aria-label={value}>
            {displayValue.toLocaleString("vi-VN")}{suffix}
        </div>
    );
}
