'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const tc = useTranslations('Common');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const hubs = [
        { id: 'bcn', coords: '41.3851° N, 2.1734° E' },
        { id: 'mad', coords: '40.4168° N, 3.7038° W' }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000);
    };

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
                        {tc('operations')}
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.05] mb-6"
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

                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 bg-white rounded-[--radius-extreme] p-8 md:p-12 border border-black/[0.03] shadow-lg shadow-black/[0.01]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">{t('form.name')}</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-50 border border-black/[0.03] rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-zinc-950/10 text-zinc-950 font-medium text-sm transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">{t('form.email')}</label>
                                    <input
                                        type="email"
                                        className="w-full bg-zinc-50 border border-black/[0.03] rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-zinc-950/10 text-zinc-950 font-medium text-sm transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">{t('form.category')}</label>
                                <select className="w-full bg-zinc-50 border border-black/[0.03] rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-zinc-950/10 text-zinc-950 font-medium text-sm transition-all appearance-none cursor-pointer">
                                    <option value="shipment">{t('form.categories.shipment')}</option>
                                    <option value="partnership">{t('form.categories.partnership')}</option>
                                    <option value="press">{t('form.categories.press')}</option>
                                    <option value="other">{t('form.categories.other')}</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-4">{t('form.message')}</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-zinc-50 border border-black/[0.03] rounded-3xl px-6 py-5 outline-none focus:ring-1 focus:ring-zinc-950/10 text-zinc-950 font-medium text-sm transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-zinc-950 text-white font-bold uppercase text-[11px] tracking-[0.3em] py-5 rounded-full hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3 shadow-xl shadow-black/10"
                            >
                                {isSubmitting ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        {t('form.submit')}
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right: Hubs & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="bg-zinc-950 rounded-[--radius-extreme] p-10 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-all duration-1000"></div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">{t('hubs.title')}</h3>
                            <div className="space-y-6">
                                {hubs.map((hub) => (
                                    <div key={hub.id} className="flex items-center justify-between group/item">
                                        <div>
                                            <div className="text-xl font-bold tracking-tight">{t(`hubs.${hub.id}`)}</div>
                                            <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest mt-1 group-hover/item:text-blue-400 transition-colors">{hub.coords}</div>
                                        </div>
                                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                            <Globe className="w-4 h-4 text-white/40 group-hover/item:text-blue-400 transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[--radius-extreme] p-8 border border-black/[0.03] shadow-lg shadow-black/[0.01] flex flex-col gap-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-all">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div className="text-sm font-semibold text-zinc-950">ops@huvyn.systems</div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-all">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div className="text-sm font-semibold text-zinc-950">+1 (888) HUVYN-01</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
