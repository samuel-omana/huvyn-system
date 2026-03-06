'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useNativeInView } from '@/hooks/useNativeInView';
import { Truck, Navigation2 } from 'lucide-react';
import { useState } from 'react';

export default function TrackingPage() {
    const t = useTranslations('TrackingPage');
    const tc = useTranslations('Common');
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const { ref: trackingRef, isInView: isTrackingInView } = useNativeInView<HTMLDivElement>({ threshold: 0.1 });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);
        setTimeout(() => {
            setIsSearching(false);
            setHasSearched(true);
        }, 1200);
    };

    const fadeInUp: import('framer-motion').Variants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FAFAFA]">
            <main className="flex-1 flex flex-col items-center justify-start pt-10 pb-20 px-6 w-full max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    className="text-center w-full max-w-4xl space-y-6 mb-8"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="bg-zinc-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#666666] border border-black/[0.03] w-fit mx-auto mb-6"
                    >
                        {tc('visibility')}
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.05]"
                    >
                        {t('header')}
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-base md:text-lg text-zinc-500 font-bold pt-3 leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </motion.div>

                {/* Search Input (Dark Capsule) */}
                <motion.form
                    onSubmit={handleSearch}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="w-full max-w-2xl mb-12 relative z-20"
                >
                    <div className="bg-zinc-950 rounded-full p-1.5 flex items-center shadow-2xl shadow-black/20">
                        <div className="flex items-center gap-2.5 pl-5 pr-3 border-r border-white/10 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                            <span className="text-blue-500">{t('refLabel')}</span>
                        </div>
                        <input
                            type="text"
                            placeholder={t('placeholder')}
                            className="flex-1 bg-transparent border-none outline-none px-4 py-2.5 text-base placeholder:text-zinc-700 text-white font-medium focus:ring-0"
                            required
                        />
                        <button
                            type="submit"
                            disabled={isSearching}
                            className="bg-white text-zinc-950 px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-100 active:scale-95 transition-all disabled:opacity-70 flex items-center gap-2"
                        >
                            {isSearching ? <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></div> : t('search')}
                        </button>
                    </div>
                </motion.form>

                {/* Tracking Dashboard */}
                <AnimatePresence mode="wait">
                    {hasSearched && (
                        <motion.div
                            key="dashboard"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8"
                        >
                            {/* Left: Status & Timeline */}
                            <div className="lg:col-span-4 space-y-4">
                                <motion.div variants={fadeInUp} className="bg-white rounded-[--radius-extreme] p-8 border border-black/[0.03] shadow-lg shadow-black/[0.01]">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="bg-zinc-950 p-5 rounded-3xl text-white">
                                            <Truck className="w-8 h-8" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1 opacity-50">{t('details.estimatedDelivery')}</div>
                                            <div className="text-xl font-bold text-zinc-950 leading-none">{t('details.tomorrow')}</div>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-950 mb-2 leading-none">{t('status.transit')}</h2>
                                    <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-6">{t('assetId')}</p>

                                    <div className="w-full bg-zinc-100 rounded-full h-1 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '65%' }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            className="bg-zinc-950 h-full relative"
                                        >
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 border-zinc-950 rounded-full shadow-md"></div>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="bg-white rounded-[--radius-extreme] p-8 border border-black/[0.03] shadow-lg shadow-black/[0.01]">
                                    <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#666666] mb-6 opacity-50">{t('scanningAudit')}</h3>
                                    <motion.div
                                        ref={trackingRef}
                                        variants={{
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.1
                                                }
                                            }
                                        }}
                                        initial="hidden"
                                        animate={isTrackingInView ? "visible" : "hidden"}
                                        className="space-y-6 relative before:absolute before:inset-0 before:ml-3 before:h-full before:w-[1px] before:bg-zinc-100"
                                    >
                                        <motion.div variants={fadeInUp} className="relative flex items-start gap-8">
                                            <div className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center shrink-0 z-10 shadow-md border-4 border-white">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-zinc-950 text-base">{t('status.transit')}</h4>
                                                <p className="text-xs font-medium text-zinc-400 mt-1 uppercase tracking-wider">{t('lastEvent')}</p>
                                            </div>
                                        </motion.div>
                                        <motion.div variants={fadeInUp} className="relative flex items-start gap-8 opacity-40 grayscale">
                                            <div className="w-8 h-8 rounded-full bg-zinc-100 text-white flex items-center justify-center shrink-0 z-10 border-4 border-white">
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-zinc-950 text-base">{t('status.preparing')}</h4>
                                                <p className="text-xs font-medium text-zinc-400 mt-1 uppercase tracking-wider">{t('prevEvent')}</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right: Map Visual */}
                            <motion.div variants={fadeInUp} className="lg:col-span-8 h-full min-h-[450px]">
                                <div className="bg-zinc-950 rounded-[3rem] p-4 shadow-2xl shadow-black/10 h-full relative overflow-hidden group border border-white/5">
                                    <div className="absolute top-10 left-10 z-10 flex flex-col gap-4">
                                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-white/5 backdrop-blur-3xl px-6 py-4 rounded-3xl border border-white/10 flex flex-col gap-1 shadow-2xl">
                                            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{t('details.currentLocation')}</span>
                                            <span className="text-lg font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                                                {t('detailedLocation')}
                                            </span>
                                        </motion.div>
                                    </div>

                                    <div className="absolute inset-0 grayscale opacity-20 pointer-events-none">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
                                    </div>

                                    <div className="w-full h-full flex items-center justify-center relative">
                                        <svg className="w-full h-full opacity-30 px-20" viewBox="0 0 800 500">
                                            <motion.path
                                                d="M 100 400 C 200 350, 400 450, 500 200 S 700 100, 750 150"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 1 }}
                                                transition={{ duration: 3, ease: "easeInOut" }}
                                            />
                                        </svg>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 2 }}
                                            className="absolute top-[200px] left-[500px]"
                                        >
                                            <div className="relative">
                                                <div className="absolute -inset-10 bg-blue-600/20 blur-3xl animate-pulse"></div>
                                                <div className="w-16 h-16 bg-white rounded-[1.5rem] shadow-2xl flex items-center justify-center relative border border-black/5">
                                                    <Navigation2 className="w-8 h-8 text-zinc-950 rotate-45" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="absolute bottom-10 right-10 flex gap-4">
                                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="bg-white p-6 rounded-3xl flex items-center gap-4 shadow-2xl">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{t('velocityLabel')}</span>
                                                <span className="text-2xl font-black text-zinc-950 tracking-tighter">{t('velocity')}</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!hasSearched && !isSearching && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full max-w-4xl text-center text-zinc-400 mt-8 font-black uppercase text-[10px] tracking-[0.5em]"
                    >
                        {t('details.waiting')}
                    </motion.div>
                )}

            </main>
        </div>
    );
}
