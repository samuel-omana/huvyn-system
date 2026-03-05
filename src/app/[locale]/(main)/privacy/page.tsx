'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import { Eye, Lock, Key, Globe } from 'lucide-react';

export default function PrivacyPage() {
    const t = useTranslations('PrivacyPage');
    const tc = useTranslations('Common');

    const fadeInUp: Variants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <main className="flex-1 flex flex-col items-center justify-start pt-10 pb-20 px-6 w-full max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    className="text-center w-full max-w-3xl mb-12"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="bg-zinc-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#666666] border border-black/[0.03] w-fit mx-auto mb-6"
                    >
                        {tc('encryption')}
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-[clamp(2.5rem,7vw,4.5rem)] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.05] mb-6"
                    >
                        {t('header')}
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </motion.div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">

                    {/* Left: Security Highlights */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-950 rounded-[--radius-extreme] p-10 text-white relative overflow-hidden"
                        >
                            <Lock className="w-10 h-10 text-blue-500 mb-8" />
                            <h3 className="text-2xl font-bold tracking-tight mb-4">{t('isolation.title')}</h3>
                            <p className="text-white/40 text-sm font-bold leading-relaxed">{t('isolation.desc')}</p>
                        </motion.div>

                        <div className="bg-white rounded-[--radius-extreme] p-8 border border-black/[0.03] shadow-lg shadow-black/[0.01]">
                            <Key className="w-6 h-6 text-zinc-300 mb-6" />
                            <h4 className="text-sm font-bold text-zinc-950 mb-3 uppercase tracking-widest">{t('audit.title')}</h4>
                            <p className="text-xs text-zinc-500 leading-relaxed font-bold">{t('audit.desc')}</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-8"
                    >
                        <div className="bg-white rounded-[--radius-extreme] p-10 md:p-16 border border-black/[0.03] shadow-lg shadow-black/[0.01] prose prose-zinc prose-lg max-w-none">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 !mt-0 italic underline decoration-blue-500 decoration-4 underline-offset-8 mb-12">{t('sovereignty.title')}</h2>
                            <p className="text-zinc-500 font-medium leading-[1.8] text-xl">
                                {t('content')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                            <Eye className="w-4 h-4" />
                                        </div>
                                        <h4 className="font-bold text-zinc-950 uppercase text-[10px] tracking-widest">{t('sovereignty.transparency')}</h4>
                                    </div>
                                    <p className="text-sm text-zinc-500 font-bold leading-[1.7]">
                                        {t('sovereignty.transparency_p')}
                                    </p>
                                </section>
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                                            <Globe className="w-4 h-4" />
                                        </div>
                                        <h4 className="font-bold text-zinc-950 uppercase text-[10px] tracking-widest">{t('sovereignty.localization')}</h4>
                                    </div>
                                    <p className="text-sm text-zinc-500 font-bold leading-[1.7]">
                                        {t('sovereignty.localization_p')}
                                    </p>
                                </section>
                            </div>

                            <h3 className="text-2xl font-bold text-zinc-950">{t('collection.title')}</h3>
                            <p className="text-zinc-500 font-medium leading-[1.8] mt-6">
                                {t('collection.desc')}
                            </p>

                            <p className="text-zinc-500 font-bold leading-[1.8] mt-10 p-8 bg-zinc-50 rounded-3xl border border-black/[0.02] text-sm italic">
                                {t('sovereignty.purge')}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
