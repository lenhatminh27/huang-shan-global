'use client'

import {ButtonHTMLAttributes, ReactNode} from "react";
import Image from "next/image";
import {motion} from "motion/react";

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    hasArrow?: boolean;
    children: ReactNode;
}

const ArrowButton = ({hasArrow = true, children, className, ...props}: ArrowButtonProps) => {

    return (
        <motion.button
            className={`flex justify-center gap-2 rounded-full cursor-pointer bg-linear-to-b from-[#87CA8E] to-[#448A54] hover:from-[#448A54] hover:to-[#87CA8E] px-5 py-2 text-[16px]] font-bold text-white transition hover:bg-[#438f55] ${className || ''}`}
            whileHover={{y: -2, scale: 1.03}}
            whileTap={{scale: 0.97}}
            transition={{type: "spring", stiffness: 260, damping: 24}}
            {...props}
        >
            {children}
            {hasArrow &&
                <Image src={'/icon/arrow.svg'} className={'mt-0.5'} width={18} height={18} alt={'arrow icon'}/>}
        </motion.button>
    )
}

export default ArrowButton

