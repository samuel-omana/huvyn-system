'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BottomBlur() {
    const { scrollYProgress } = useScroll();

    // We hide the blur when the user is reaching the bottom of the page (footer area)
    const isAtBottom = useTransform(scrollYProgress, [0, 0.94, 0.98, 1], [1, 1, 0, 0]);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        queueMicrotask(() => setIsMounted(true));
    }, []);

    if (!isMounted) return null;

    return (
        <motion.div
            style={{ opacity: isAtBottom }}
            className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-40 transition-opacity duration-1000"
        >
            {/* The actual blur layer with a gradient mask */}
            <div
                className="absolute inset-0 backdrop-blur-3xl"
                style={{
                    maskImage: 'linear-gradient(to top, white, transparent)',
                    WebkitMaskImage: 'linear-gradient(to top, white, transparent)'
                }}
            />

            {/* White-fog gradient blend - intensified */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

            {/* Additional deep fog layer for "más borroso" effect */}
            <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-white to-transparent opacity-90 pointer-events-none" />
        </motion.div>
    );
}
