'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/siteConfig';
import { motion, Variants } from 'framer-motion';
import { useNativeInView } from '@/hooks/useNativeInView';
import { Globe2, Users, MapPin } from 'lucide-react';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    const { ref: globalRef, isInView: isGlobalInView } = useNativeInView<HTMLDivElement>({ threshold: 0.1 });

    const icons = {
        hubs: MapPin,
        countries: Globe2,
        team: Users
    } as const;

    const stats = siteConfig.aboutStats.map(stat => ({
        key: stat.key,
        icon: icons[stat.key as keyof typeof icons]
    }));

    const fadeInUp: Variants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <main className="flex-1 flex flex-col items-center justify-start pt-20 pb-32">

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
                        {t('manifestoBadge')}
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.05]"
                    >
                        {t('header')}
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-base md:text-lg text-zinc-500 mx-auto max-w-xl font-medium pt-3 leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </motion.div>

                {/* Manifesto Text Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full max-w-5xl mx-auto px-6 mb-12"
                >
                    <div className="bg-white rounded-[--radius-extreme] p-12 md:p-20 shadow-lg shadow-black/[0.01] border border-black/[0.03]">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 mb-8 pb-6 border-b border-black/[0.05]">
                            {t('manifesto.title')}
                        </h2>
                        <div className="space-y-6 text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed tracking-tight">
                            <p className="first-letter:text-6xl first-letter:font-semibold first-letter:text-zinc-950 first-letter:mr-3 first-letter:float-left">
                                {t('manifesto.p1')}
                            </p>
                            <p>{t('manifesto.p2')}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Global Reach Section (Dark Bento Style) */}
                <div className="w-full max-w-7xl mx-auto px-6">
                    <motion.div
                        ref={globalRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: isGlobalInView ? 1 : 0, y: isGlobalInView ? 0 : 40 }}
                        transition={{ duration: 1 }}
                        className="bg-zinc-950 rounded-[--radius-extreme] p-12 md:p-16 text-white relative overflow-hidden flex flex-col items-center"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center grayscale">
                            <div className="w-[800px] h-[800px] rounded-full border border-white/20 animate-[pulse_10s_infinite]"></div>
                            <div className="w-[500px] h-[500px] rounded-full border border-white/20 absolute"></div>
                        </div>

                        <div className="relative z-10 text-center max-w-4xl">
                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-12 leading-none">
                                {t('global.title')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                                {stats.map((stat, i) => {
                                    const Icon = stat.icon;
                                    return (
                                        <motion.div
                                            key={stat.key}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: isGlobalInView ? 1 : 0, y: isGlobalInView ? 0 : 20 }}
                                            transition={{ delay: i * 0.1, duration: 0.8 }}
                                            className="flex flex-col items-center gap-6"
                                        >
                                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <h3 className="text-6xl font-semibold tracking-tighter text-white leading-none">
                                                    {t(`global.${stat.key}.value`)}
                                                </h3>
                                                <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em] mt-4">
                                                    {t(`global.${stat.key}.label`)}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

            </main>
        </div>
    );
}
