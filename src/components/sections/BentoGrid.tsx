'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/siteConfig';
import { motion, Variants } from 'framer-motion';
import { useNativeInView } from '@/hooks/useNativeInView';
import { Globe2, ShieldCheck, Cpu } from 'lucide-react';

export function BentoGrid() {
    const t = useTranslations('HomePage');
    const tc = useTranslations('Common');
    const { ref, isInView } = useNativeInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl mx-auto mt-12 px-6"
        >
            {/* Feature 1 - Global Intelligence (Big Card) */}
            <motion.div variants={item} className="md:col-span-8 bg-white rounded-[--radius-extreme] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden group border border-black/[0.03] shadow-lg shadow-black/[0.01]">
                <div className="flex justify-between items-start">
                    <div className="bg-zinc-950 p-4 rounded-2xl text-white shadow-md">
                        <Globe2 className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1 opacity-20 grayscale">
                        <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">{tc('latency')}</div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5, 6, 7].map(i => <div key={i} className="w-0.5 h-3 bg-zinc-900 rounded-full"></div>)}
                        </div>
                    </div>
                </div>
                <div className="relative z-10 max-w-lg mt-8">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-4 inline-block bg-zinc-50 px-3.5 py-1.5 rounded-full border border-black/[0.04]">{t('bento.realTimeIntel')}</div>
                    <h3 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4 text-zinc-950 leading-[1.05]">{t('services.tracking.title')}</h3>
                    <p className="text-zinc-500 text-lg font-medium leading-relaxed">{t('services.tracking.desc')}</p>
                </div>

                {/* Visual decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Feature 2 - Security (Small Card) */}
            <motion.div variants={item} className="md:col-span-4 bg-zinc-950 rounded-[--radius-extreme] p-10 flex flex-col justify-between min-h-[400px] group text-white shadow-xl shadow-black/30">
                <div className="bg-white/5 p-4 rounded-2xl w-fit text-blue-400 border border-white/5">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="mt-8">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 inline-block bg-white/5 px-3 py-1 rounded-full border border-white/5">{t('bento.enterpriseGrade')}</div>
                    <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 leading-[1.1]">{t('services.logistics.title')}</h3>
                    <p className="text-white/50 text-base font-medium leading-relaxed">{t('services.logistics.desc')}</p>
                </div>
            </motion.div>

            {/* Feature 3 - Rates / Pricing (Full Width) */}
            <motion.div variants={item} className="md:col-span-12 bg-white rounded-[--radius-extreme] p-10 flex flex-col md:flex-row items-center justify-between gap-10 group border border-black/[0.03] shadow-lg shadow-black/[0.01]">
                <div className="flex-1">
                    <div className="bg-zinc-50 p-4 rounded-2xl w-fit text-zinc-900 mb-8 border border-black/[0.02]">
                        <Cpu className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-4 inline-block bg-zinc-50 px-3.5 py-1.5 rounded-full border border-black/[0.04]">{t('bento.algoPricing')}</div>
                    <h3 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4 text-zinc-950 leading-[1.05]">{t('services.rates.title')}</h3>
                    <p className="text-zinc-500 text-lg max-w-md font-medium leading-relaxed">{t('services.rates.desc')}</p>
                </div>
                <div className="flex-1 w-full bg-zinc-50 rounded-2xl p-8 flex items-center justify-center border border-black/[0.02] min-h-[220px]">
                    <div className="flex items-end gap-1.5 h-32 w-full opacity-60 group-hover:opacity-100 transition-all duration-700">
                        {siteConfig.bentoLogic.latencyBars.map((height, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: isInView ? `${20 + height * 0.8}%` : 0 }}
                                className={`w-full rounded-sm transition-colors ${i === 15 ? 'bg-blue-600' : 'bg-zinc-200'}`}
                            ></motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
