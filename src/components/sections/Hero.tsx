'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export function Hero({
    trustBadge,
    heroTitle,
    heroBadge,
    heroSubtitle,
    trackLabel,
    trackPlaceholder,
    trackButton,
    securityBadge
}: {
    trustBadge: string;
    heroTitle: string;
    heroBadge: string;
    heroSubtitle: string;
    trackLabel: string;
    trackPlaceholder: string;
    trackButton: string;
    securityBadge: string;
}) {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const titleParts = heroTitle.split(',');

    return (
        <>
            {/* Members / Trust Row */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex flex-col items-center gap-3 mb-6"
            >
                <div className="bg-zinc-100 text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-black/[0.03]">
                    {trustBadge}
                </div>
                <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden flex items-center justify-center text-zinc-300 shadow-sm">
                            <Star className="w-3.5 h-3.5 fill-current" />
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Refined Typography Hero */}
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="text-center max-w-4xl space-y-6 px-6"
            >
                <motion.h1
                    variants={fadeInUp}
                    className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.05] flex flex-col items-center"
                >
                    <span>{titleParts[0]},</span>
                    <span className="flex items-center gap-4 flex-wrap justify-center">
                        {titleParts[1]?.trim() || ''} <span className="inline-flex items-center justify-center h-[1.2em] bg-zinc-900 rounded-full text-white text-[0.25em] font-medium px-5 tracking-widest uppercase">{heroBadge}</span>
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-zinc-500 mx-auto max-w-2xl font-medium pt-2 leading-relaxed"
                >
                    {heroSubtitle}
                </motion.p>
            </motion.div>

            {/* Refined Track Input (Studio Pill) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 w-full max-w-xl px-6"
            >
                <div className="bg-zinc-900 rounded-[2rem] sm:rounded-full p-2 sm:p-1.5 flex flex-col sm:flex-row items-center gap-2 sm:gap-2 shadow-xl shadow-black/10">
                    <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2.5 px-5 py-3 sm:py-0 border-b sm:border-b-0 sm:border-r border-white/10 text-white/40 text-[10px] font-bold tracking-widest">
                        <span className="text-blue-500">$HUV</span>
                        {trackLabel}
                    </div>
                    <input
                        type="search"
                        id="tracking-input"
                        aria-label={trackLabel}
                        placeholder={trackPlaceholder}
                        className="w-full sm:flex-1 bg-transparent border-none outline-none px-5 sm:px-3 py-3 sm:py-2.5 text-center sm:text-left text-base placeholder:text-zinc-600 text-white font-medium shadow-none focus:ring-0"
                    />
                    <button
                        aria-label={trackButton}
                        className="w-full sm:w-auto bg-white text-zinc-900 px-6 py-3.5 sm:py-2.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all group active:scale-95"
                    >
                        {trackButton}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="bg-zinc-100 rounded-full px-5 py-1.5 border border-black/[0.03] text-[9.5px] font-bold text-zinc-400 uppercase tracking-widest">
                        {securityBadge}
                    </div>
                </div>
            </motion.div>
        </>
    );
}
