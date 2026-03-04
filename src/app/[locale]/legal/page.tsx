'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import { ShieldAlert, Scale, FileText } from 'lucide-react';

export default function LegalPage() {
    const t = useTranslations('LegalPage');
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
                        {tc('foundation')}
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

                    {/* Left: Sidebar Nav */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-3 space-y-10"
                    >
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{tc('section')}</h3>
                            <nav className="flex flex-col gap-4 text-sm font-bold text-zinc-500">
                                <a href="#terms" className="text-zinc-950 border-l-2 border-zinc-950 pl-4 py-1 hover:text-zinc-950 transition-colors">{t('sections.terms')}</a>
                                <a href="#logistics" className="pl-4 py-1 hover:text-zinc-950 transition-colors">{t('sections.logistics')}</a>
                                <a href="#liability" className="pl-4 py-1 hover:text-zinc-950 transition-colors">{t('sections.liability')}</a>
                                <a href="#compliance" className="pl-4 py-1 hover:text-zinc-950 transition-colors">{t('sections.compliance')}</a>
                            </nav>
                        </div>

                        <div className="bg-white p-6 rounded-3xl border border-black/[0.03] shadow-sm">
                            <Scale className="w-6 h-6 text-zinc-300 mb-4" />
                            <p className="text-[10px] text-zinc-500 font-bold leading-relaxed uppercase tracking-widest">{tc('version')} {t('versionNumber')} <br /> {tc('updated')} {t('updatedDate')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-9"
                    >
                        <div className="bg-white rounded-[--radius-extreme] p-10 md:p-16 border border-black/[0.03] shadow-lg shadow-black/[0.01] prose prose-zinc prose-lg max-w-none">
                            <h2 id="terms" className="text-3xl font-bold tracking-tight text-zinc-950 !mt-0">{t('header')}</h2>
                            <p className="text-zinc-500 font-medium leading-[1.8] mt-8 text-xl">
                                {t('content')}
                            </p>

                            <div className="my-16 h-px bg-black/[0.05] w-full" />

                            <h3 className="text-2xl font-bold text-zinc-950">{t('content_blocks.operational_scope')}</h3>
                            <p className="text-zinc-500 font-medium leading-[1.8] mt-6">
                                {t('content_blocks.operational_desc')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                <div className="bg-zinc-50 p-8 rounded-3xl border border-black/[0.02]">
                                    <ShieldAlert className="w-8 h-8 text-zinc-400 mb-6" />
                                    <h4 className="font-bold text-zinc-950 mb-4">{t('content_blocks.risk_mgmt')}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed font-medium focus:outline-none">{t('content_blocks.risk_desc')}</p>
                                </div>
                                <div className="bg-zinc-50 p-8 rounded-3xl border border-black/[0.02]">
                                    <FileText className="w-8 h-8 text-zinc-400 mb-6" />
                                    <h4 className="font-bold text-zinc-950 mb-4">{t('content_blocks.dispute_arch')}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">{t('content_blocks.dispute_desc')}</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-zinc-950 mt-16">{t('content_blocks.liability_limits')}</h3>
                            <p className="text-zinc-500 font-medium leading-[1.8] mt-6">
                                {t('content_blocks.liability_desc')}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
