'use client';

import { useState, useEffect, useRef } from 'react';

export interface UseNativeInViewOptions {
    threshold?: number;
    triggerOnce?: boolean;
    fallbackMs?: number;
}

export function useNativeInView<T extends HTMLElement>(options: UseNativeInViewOptions = {}) {
    const opts = { threshold: 0.1, triggerOnce: true, fallbackMs: 1500, ...options };
    const [isInView, setIsInView] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (opts.triggerOnce) {
                    observer.disconnect();
                }
            } else if (!opts.triggerOnce) {
                setIsInView(false);
            }
        }, { threshold: opts.threshold });

        observer.observe(el);

        // Fallback 1: If Next.js SPA navigation breaks IntersectionObserver, 
        // we forcibly reveal the element after X milliseconds to prevent permanent invisiblity.
        const fallbackTimer = setTimeout(() => {
            if (!isInView) {
                setIsInView(true);
            }
        }, opts.fallbackMs);

        // Fallback 2: Any native scroll event should instantly force check or reveal
        const handleScroll = () => {
            if (!hasScrolled) {
                setHasScrolled(true);
                setIsInView(true);
            }
        };
        window.addEventListener('scroll', handleScroll, { once: true, passive: true });

        return () => {
            observer.disconnect();
            clearTimeout(fallbackTimer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [opts.threshold, opts.triggerOnce, opts.fallbackMs, isInView, hasScrolled]);

    return { ref, isInView };
}
