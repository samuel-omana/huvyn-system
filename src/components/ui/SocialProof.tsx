'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function SocialProof() {
    const t = useTranslations('HomePage.socialProof');

    const logos = t.raw('logos') as string[];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 border-y border-black/[0.03]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-zinc-400 font-black text-[10px] uppercase tracking-[0.3em] whitespace-nowrap">
                    {t('title')}
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30 grayscale contrast-125">
                    {logos.map((logo, i) => (
                        <motion.span
                            key={logo}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-xl font-black tracking-tighter"
                        >
                            {logo}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
