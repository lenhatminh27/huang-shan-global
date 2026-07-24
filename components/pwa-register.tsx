"use client";

import {useEffect} from "react";

export function PWARegister() {
    useEffect(() => {
        if (
            process.env.NODE_ENV === "production" &&
            "serviceWorker" in navigator
        ) {
            navigator.serviceWorker
                .register("/sw.js", {
                    scope: "/",
                })
                .catch((error) => {
                    console.error("Service Worker registration failed:", error);
                });
        }
    }, []);

    return null;
}