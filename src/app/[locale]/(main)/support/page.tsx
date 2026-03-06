'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import { Shield, Package, Activity, ArrowRight, MessageSquare } from 'lucide-react';

export default function SupportPage() {
    const t = useTranslations('SupportPage');
    const tc = useTranslations('Common');

    const faqs = [0, 1]; // Indices from JSON

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <main className="flex-1 flex flex-col items-center justify-start pt-10 pb-20 px-6 w-full max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="text-center w-full max-w-3xl mb-12"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="bg-zinc-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#666666] border border-black/[0.03] w-fit mx-auto mb-6"
                    >
                        {tc('infrastructure')}
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.05] mb-6"
                    >
                        {t('header')}
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-zinc-500 font-bold leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </motion.div>

                {/* Status Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="w-full max-w-4xl bg-white rounded-3xl border border-black/[0.03] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 shadow-sm"
                >
                    <div className="flex items-center gap-4 ml-2">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">{t('status.online')}</span>
                    </div>
                    <div className="flex items-center gap-6 pr-2">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <Activity className="w-4 h-4 text-zinc-300 group-hover:text-blue-500 transition-colors" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600 transition-colors">{t('status.latency')}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8"
                >

                    {/* Left: Bento Grid Items */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                variants={fadeInUp}
                                className="bg-white rounded-[--radius-extreme] p-10 border border-black/[0.03] shadow-lg shadow-black/[0.01] flex flex-col justify-between min-h-[280px] group cursor-pointer hover:border-black/10 transition-all"
                            >
                                <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-2">{t('cards.security.title')}</h3>
                                    <p className="text-zinc-500 text-sm font-bold leading-relaxed">{t('cards.security.desc')}</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="bg-white rounded-[--radius-extreme] p-10 border border-black/[0.03] shadow-lg shadow-black/[0.01] flex flex-col justify-between min-h-[280px] group cursor-pointer hover:border-black/10 transition-all"
                            >
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-zinc-400 border border-black/[0.05] mb-8 group-hover:bg-zinc-950 group-hover:text-white transition-all group-hover:scale-110">
                                    <Package className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-2">{t('cards.claims.title')}</h3>
                                    <p className="text-zinc-500 text-sm font-bold leading-relaxed">{t('cards.claims.desc')}</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div variants={fadeInUp} className="bg-white rounded-[--radius-extreme] p-10 border border-black/[0.03] shadow-lg shadow-black/[0.01]">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-10">{t('faq.title')}</h3>
                            <div className="space-y-10">
                                {faqs.map((i) => (
                                    <div key={i} className="group cursor-default">
                                        <h4 className="text-xl font-bold text-zinc-950 mb-4 flex items-start gap-4">
                                            <span className="text-blue-500 font-black">Q.</span>
                                            {t(`faq.items.${i}.q`)}
                                        </h4>
                                        <p className="text-zinc-500 font-bold leading-relaxed pl-9 border-l border-zinc-100 group-hover:border-blue-500 transition-colors">
                                            {t(`faq.items.${i}.a`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Resources & Contact CTA */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <motion.div variants={fadeInUp} className="bg-zinc-950 rounded-[--radius-extreme] p-10 text-white relative overflow-hidden h-full flex flex-col justify-between min-h-[400px]">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,_#2563EB22,_transparent_50%)]"></div>
                            <div className="relative z-10">
                                <MessageSquare className="w-10 h-10 text-blue-500 mb-8" />
                                <h2 className="text-4xl font-bold tracking-tight leading-none mb-6 italic">{t('cta.title')}</h2>
                                <p className="text-white/40 font-bold mb-12 leading-relaxed">{t('cta.p')}</p>
                            </div>
                            <button className="relative z-10 w-full bg-white text-zinc-950 font-bold uppercase text-[11px] tracking-[0.3em] py-5 rounded-full hover:bg-zinc-100 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                                {t('cta.button')}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white rounded-[--radius-extreme] p-8 border border-black/[0.03] shadow-lg shadow-black/[0.01] space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{tc('documentation')}</h4>
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer">
                                    <span className="text-sm font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{t('docPrefix')} v2.4.{i}</span>
                                    <ArrowRight className="w-4 h-4 text-zinc-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </motion.div>
            </main>
        </div>
    );
}
