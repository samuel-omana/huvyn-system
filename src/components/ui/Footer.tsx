'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
    const t = useTranslations('Navigation');
    const locale = useLocale();
    const tf = useTranslations('Footer');
    const tc = useTranslations('Common');
    const th = useTranslations('ContactPage.hubs');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-16 bg-white border-t border-black/[0.03] mt-auto">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start">

                    {/* Brand Section */}
                    <div className="space-y-6 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-zinc-950 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-xl font-black uppercase tracking-tighter text-zinc-950">Huvyn</span>
                        </Link>
                        <p className="text-zinc-500 font-bold text-sm leading-relaxed max-w-[240px]">
                            {t('tagline') || "The intelligence layer for atom orchestration. Moving atoms with bit-level precision."}
                        </p>
                        <div className="flex gap-2">
                            <Link href="#" aria-label={t('socialTwitter')} className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shadow-sm hover:scale-110 transition-transform">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" aria-label={t('socialLinkedin')} className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shadow-sm hover:scale-110 transition-transform">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" aria-label={t('socialGithub')} className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 shadow-sm hover:scale-110 transition-transform">
                                <Github className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 md:grid-cols-2 col-span-1 md:col-span-2 gap-8">
                        <div className="space-y-6">
                            <h4 className="font-black text-zinc-400 uppercase tracking-[0.3em] text-[10px]">{t('arch') || "Architecture"}</h4>
                            <div className="flex flex-col gap-4 text-zinc-950 font-bold text-sm">
                                <Link href="/" className="hover:text-blue-600 transition-colors studio-hover w-fit">{t('home')}</Link>
                                <Link href="/tracking" className="hover:text-blue-600 transition-colors studio-hover w-fit">{t('tracking')}</Link>
                                <Link href="/services" className="hover:text-blue-600 transition-colors studio-hover w-fit">{t('services')}</Link>
                                <Link href="/about" className="hover:text-blue-600 transition-colors studio-hover w-fit">{t('about')}</Link>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-black text-zinc-400 uppercase tracking-[0.3em] text-[10px]">{tc('operations')}</h4>
                            <div className="flex flex-col gap-4 text-zinc-950 font-bold text-sm">
                                <Link href="/contact" className="hover:text-blue-600 transition-colors studio-hover w-fit">{tf('contact')}</Link>
                                <Link href="/support" className="hover:text-blue-600 transition-colors studio-hover w-fit">{tf('support')}</Link>
                                <Link href="/legal" className="hover:text-blue-600 transition-colors studio-hover w-fit">{tf('legal')}</Link>
                                <Link href="/privacy" className="hover:text-blue-600 transition-colors studio-hover w-fit">{tf('privacy')}</Link>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter / Extra */}
                    <div className="space-y-6">
                        <h4 className="font-black text-zinc-400 uppercase tracking-[0.3em] text-[10px]">{tc('networkLayer')}</h4>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder={tf('emailPlaceholder')}
                                className="bg-zinc-50 border border-black/[0.03] rounded-xl px-4 py-2.5 text-xs font-medium outline-none focus:ring-1 focus:ring-zinc-200"
                            />
                            <button className="bg-zinc-950 text-white font-black uppercase text-[10px] tracking-[0.3em] px-4 py-3 rounded-xl hover:bg-zinc-800 transition-all active:scale-95">
                                {tf('joinButton')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/[0.03] gap-4">
                    <div className="flex items-center gap-4 text-xs font-bold text-zinc-400">
                        <span>© 2026 Huvyn System</span>
                        <div className="w-1 h-1 rounded-full bg-zinc-200"></div>
                        <Link href="/privacy" className="hover:text-zinc-950 transition-colors uppercase tracking-widest">{t('privacy')}</Link>
                        <div className="w-1 h-1 rounded-full bg-zinc-200"></div>
                        <Link href="/legal" className="hover:text-zinc-950 transition-colors uppercase tracking-widest">{t('legal')}</Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666666]">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse"></div>
                            {t('systemStatus')}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{t('locale')}</span>
                            <button
                                aria-label={t('changeLanguage')}
                                className="bg-zinc-950 text-white font-black uppercase text-[10px] tracking-[0.3em] px-4 py-3 rounded-xl hover:bg-zinc-800 transition-all active:scale-95 cursor-default"
                            >
                                {locale.toUpperCase()}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    <p>© {currentYear} HUVYN SYSTEMS AG. {tf('rights')}</p>
                    <div className="flex gap-6">
                        <span className="hover:text-zinc-950 transition-colors cursor-default">{th('bcn')}</span>
                        <span className="hover:text-zinc-950 transition-colors cursor-default">{th('mad')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
