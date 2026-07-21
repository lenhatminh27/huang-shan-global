"use client";

import {useLayoutEffect, useRef} from "react";
import {usePathname} from "next/navigation";

export function ScrollToTopOnRouteChange() {
    const pathname = usePathname();
    const previousPathname = useRef(pathname);

    useLayoutEffect(() => {
        if (previousPathname.current === pathname) return;

        previousPathname.current = pathname;

        if (window.location.hash) return;

        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;

        root.style.scrollBehavior = "auto";
        window.scrollTo({top: 0, left: 0, behavior: "auto"});

        requestAnimationFrame(() => {
            root.style.scrollBehavior = previousScrollBehavior;
        });
    }, [pathname]);

    return null;
}
