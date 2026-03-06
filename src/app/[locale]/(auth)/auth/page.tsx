'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useRouter } from '@/i18n/routing';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { OrganicMesh } from '@/components/ui/OrganicMesh';

type AuthState = 'login' | 'register' | 'recover';

export default function AuthPage() {
    const t = useTranslations('AuthPage');
    const router = useRouter();
    const [authState, setAuthState] = useState<AuthState>('login');
    const [showPassword, setShowPassword] = useState(false);

    const formVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
    };

    return (
        <div className="fixed inset-0 z-[1000000] bg-white flex overflow-hidden font-sans">
            {/* LEFT PANEL: Premium Left-to-Right Gradient + Visible Mesh */}
            <div
                className="hidden lg:flex flex-col w-1/2 relative p-12 lg:p-20 justify-between overflow-hidden"
                style={{
                    background: 'linear-gradient(to right, #d4d4d8 0%, #e4e4e7 35%, #f4f4f5 60%, #ffffff 100%)'
                }}
            >
                {/* VISUAL ENGINE: Visible Organic Mesh (left-to-right, stops at center) */}
                <OrganicMesh
                    opacity={0.85}
                    spacing={40}
                    particleOpacity={0.45}
                    minSize={0.8}
                    maxSize={1.8}
                    waveIntensity={12}
                />

                {/* LOGO: Standard Dark Style */}
                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-white border border-zinc-200/50 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-sm">
                            <div className="w-2 h-2 bg-zinc-950 rounded-full" />
                        </div>
                        <span className="text-zinc-950 font-black tracking-tighter text-xl uppercase">Huvyn</span>
                    </Link>
                </div>

                {/* CENTRAL SPACE (Pure Minimalism) */}
                <div className="relative z-10 flex-1" />

                {/* INNOVATIVE PHRASE: Professional & Visionary */}
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="max-w-xs"
                    >
                        <h2 className="text-3xl xl:text-4xl font-serif text-zinc-900 leading-[1.1] tracking-tight">
                            Sincronizando el pulso del <span className="italic text-zinc-500">comercio global.</span>
                        </h2>
                        <div className="mt-4 h-[1px] w-8 bg-zinc-300" />
                    </motion.div>
                </div>
            </div>

            {/* RIGHT PANEL: Authentication Actions (50%) */}
            <div className="flex-1 flex flex-col bg-white overflow-y-auto relative">

                {/* BACK NAVIGATION: Top Right */}
                <div className="sticky top-0 right-0 p-8 flex justify-end z-20">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-950 transition-colors group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        <span>{t('back')}</span>
                    </Link>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center px-8 lg:px-20 pb-20">
                    <div className="w-full max-w-[420px]">
                        <AnimatePresence mode="wait">
                            {authState === 'login' && (
                                <motion.div key="login" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                                    <div className="mb-10">
                                        <h1 className="text-4xl font-black text-zinc-950 mb-2 tracking-tighter leading-none">
                                            {t('login.title')}
                                        </h1>
                                        <p className="text-[16px] font-medium text-zinc-400 leading-relaxed">
                                            {t('login.subtitle')}
                                        </p>
                                    </div>

                                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                        <div className="space-y-5">
                                            <div className="group space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                                                    {t('fields.email')}
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder={t('fields.email_ph')}
                                                    className="w-full h-13 bg-white border-zinc-100 border-[1.5px] rounded-xl px-5 focus:border-zinc-950 focus:shadow-[0_0_20px_-5px_rgba(0,0,0,0.05)] text-[15px] font-medium outline-none transition-all placeholder:text-zinc-200 shadow-sm"
                                                />
                                            </div>

                                            <div className="group space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 group-focus-within:text-zinc-950 transition-colors">
                                                    {t('fields.password')}
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder={t('fields.password_ph')}
                                                        className="w-full h-13 bg-white border-zinc-100 border-[1.5px] rounded-xl px-5 focus:border-zinc-950 focus:shadow-[0_0_20px_-5px_rgba(0,0,0,0.05)] text-[15px] font-medium outline-none transition-all placeholder:text-zinc-200 shadow-sm"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-200 hover:text-zinc-950 transition-colors focus:outline-none"
                                                    >
                                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex justify-start">
                                                <button
                                                    onClick={() => setAuthState('recover')}
                                                    className="text-[12px] font-bold text-zinc-400 hover:text-zinc-950 underline underline-offset-4 decoration-zinc-50 hover:decoration-zinc-950 transition-all font-sans"
                                                >
                                                    {t('login.forgot_pw')}
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => router.push('/dashboard')}
                                            className="w-full h-13 bg-zinc-950 text-white rounded-xl font-bold tracking-tight hover:shadow-lg hover:shadow-zinc-950/10 active:scale-[0.985] transition-all text-[16px] mt-1"
                                        >
                                            {t('login.submit')}
                                        </button>

                                        <div className="relative flex items-center py-2">
                                            <div className="flex-1 h-px bg-zinc-50" />
                                            <span className="px-5 text-[9px] font-black text-zinc-200 uppercase tracking-[0.3em]">{t('login.or')}</span>
                                            <div className="flex-1 h-px bg-zinc-50" />
                                        </div>

                                        <button className="w-full h-13 border-[1.5px] border-zinc-100 hover:border-zinc-950 rounded-xl flex items-center justify-center gap-3 transition-all text-[14px] font-bold text-zinc-600 bg-white">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                            {t('login.social_google')}
                                        </button>

                                        <div className="mt-8 text-center text-[14px] font-medium border-t border-zinc-50 pt-8">
                                            <span className="text-zinc-400">{t('login.to_register').split('?')[0]}? </span>
                                            <button onClick={() => setAuthState('register')} className="text-zinc-950 font-black hover:underline uppercase text-[10px] tracking-widest ml-1">
                                                {t('login.to_register').split('?')[1] || t('login.to_register')}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}

                            {authState === 'register' && (
                                <motion.div key="register" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                                    <div className="mb-10">
                                        <h1 className="text-4xl font-black text-zinc-950 mb-2 tracking-tighter leading-none">{t('register.title')}</h1>
                                        <p className="text-[16px] font-medium text-zinc-400 leading-relaxed">{t('register.subtitle')}</p>
                                    </div>

                                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                        <div className="space-y-5">
                                            <div className="group space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 group-focus-within:text-zinc-950 transition-colors">{t('fields.email')}</label>
                                                <input
                                                    type="email"
                                                    placeholder={t('fields.email_ph')}
                                                    className="w-full h-13 bg-white border-zinc-100 border-[1.5px] rounded-xl px-5 focus:border-zinc-950 text-[15px] font-medium outline-none transition-all shadow-sm"
                                                />
                                            </div>
                                            <div className="group space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 group-focus-within:text-zinc-950 transition-colors">{t('fields.password')}</label>
                                                <input
                                                    type="password"
                                                    placeholder={t('fields.password_ph')}
                                                    className="w-full h-13 bg-white border-zinc-100 border-[1.5px] rounded-xl px-5 focus:border-zinc-950 text-[15px] font-medium outline-none transition-all shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        <button className="w-full h-13 bg-zinc-950 text-white rounded-xl font-bold tracking-tight transition-all text-[16px] mt-1">
                                            {t('register.submit')}
                                        </button>

                                        <div className="mt-8 text-center text-[14px] font-medium border-t border-zinc-50 pt-8">
                                            <span className="text-zinc-400">{t('register.to_login').split('?')[0]}? </span>
                                            <button onClick={() => setAuthState('login')} className="text-zinc-950 font-black hover:underline uppercase text-[10px] tracking-widest ml-1">
                                                {t('register.to_login').split('?')[1] || t('register.to_login')}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}

                            {authState === 'recover' && (
                                <motion.div key="recover" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                                    <div className="mb-10">
                                        <h1 className="text-4xl font-black text-zinc-950 mb-2 tracking-tighter leading-none">{t('recover.title')}</h1>
                                        <p className="text-[16px] font-medium text-zinc-400 leading-relaxed">{t('recover.subtitle')}</p>
                                    </div>

                                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                        <div className="group space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 group-focus-within:text-zinc-950 transition-colors">{t('fields.email')}</label>
                                            <input
                                                type="email"
                                                placeholder={t('fields.email_ph')}
                                                className="w-full h-13 bg-white border-zinc-100 border-[1.5px] rounded-xl px-5 focus:border-zinc-950 text-[15px] font-medium outline-none transition-all shadow-sm"
                                            />
                                        </div>

                                        <button className="w-full h-13 bg-zinc-950 text-white rounded-xl font-bold tracking-tight transition-all text-[16px] mt-1">
                                            {t('recover.submit')}
                                        </button>

                                        <div className="mt-10 text-center pt-4">
                                            <button onClick={() => setAuthState('login')} className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">
                                                {t('recover.to_login')}
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
