'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Plane, Ship, Truck, Cpu, ArrowRight, Globe } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');
    const tc = useTranslations('Common');

    const capabilities = [
        { id: 'air', icon: Plane },
        { id: 'ocean', icon: Ship },
        { id: 'lastMile', icon: Truck }
    ];

    const fadeInUp: any = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <main className="flex-1 flex flex-col items-center justify-start pt-10 pb-20">

                {/* Header Section */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    className="text-center max-w-4xl space-y-6 px-6 mb-12"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="bg-zinc-100 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-[#666666] border border-black/[0.03] w-fit mx-auto mb-6"
                    >
                        {t('capabilitiesBadge')}
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.05]"
                    >
                        {t('header')}
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-zinc-500 mx-auto max-w-2xl font-medium pt-3 leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="w-full max-w-7xl mx-auto px-6 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {capabilities.map((cap, i) => {
                            const Icon = cap.icon;
                            return (
                                <motion.div
                                    key={cap.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.8 }}
                                    className="bg-white rounded-[--radius-extreme] p-10 border border-black/[0.03] shadow-lg shadow-black/[0.01] flex flex-col justify-between min-h-[360px] group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-950 flex items-center justify-center text-white mb-8">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-4 opacity-40">{tc('networkLayer')}</div>
                                        <h3 className="text-3xl font-semibold tracking-tight text-zinc-950 mb-4">
                                            {t(`capabilities.${cap.id}.title`)}
                                        </h3>
                                        <p className="text-zinc-500 font-medium text-base leading-relaxed">
                                            {t(`capabilities.${cap.id}.desc`)}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Tech Stack Module (Bento Style) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px 0px" }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-7xl mx-auto px-6 mb-20"
                >
                    <div className="bg-zinc-950 rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_#2563EB33,_transparent_50%)]"></div>

                        <div className="flex-1 space-y-8 relative z-10">
                            <div className="w-20 h-20 bg-white/10 rounded-[2rem] flex items-center justify-center text-blue-400 border border-white/10">
                                <Cpu className="w-10 h-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">{t('tech.title')}</h2>
                            <p className="text-white/40 text-xl font-medium leading-relaxed max-w-lg">
                                {t('tech.desc')}
                            </p>
                        </div>

                        <div className="flex-1 w-full relative z-10">
                            <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 flex flex-col gap-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-white/30">{t('modulePrefix')} 0{i}</div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-blue-400">{t('statusOptimizing')}</div>
                                        </div>
                                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${60 + (i * 10)}%` }}
                                                transition={{ duration: 2, delay: i * 0.2 }}
                                                className="h-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px 0px" }}
                    className="text-center px-6 flex flex-col items-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-950 mb-10 max-w-2xl leading-[1.1]">{t('cta.title')}</h2>
                    <Link href="/about" className="group bg-zinc-950 text-white pl-12 pr-10 py-6 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 active:scale-95">
                        {t('cta.button')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

            </main>
        </div>
    );
}
