'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function Testimonials() {
    const t = useTranslations('HomePage.testimonials');

    const itemIndices = [0, 1];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center gap-4 mb-10"
            >
                <div className="bg-zinc-100 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 border border-black/5">
                    {t('badge')}
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-center text-zinc-950 uppercase">{t('title')}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {itemIndices.map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="bg-white rounded-[2.5rem] p-12 border border-black/[0.03] shadow-2xl shadow-black/[0.02] flex flex-col justify-between"
                    >
                        <p className="text-2xl font-black text-zinc-950 mb-10 leading-[1.3] tracking-tighter italic">
                            "{t(`items.${i}.quote`)}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-100 border border-black/5 flex items-center justify-center font-black text-zinc-400">
                                {t(`items.${i}.author`)[0]}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-zinc-950 text-base uppercase tracking-wider">{t(`items.${i}.author`)}</span>
                                <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest">{t(`items.${i}.role`)}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
