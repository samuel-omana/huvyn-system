'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Package, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
    const t = useTranslations('Navigation');
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
                        <div className="flex gap-4 pt-4 text-zinc-400">
                            <a href="#" className="hover:text-zinc-950 transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-zinc-950 transition-colors"><Linkedin className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-zinc-950 transition-colors"><Github className="w-4 h-4" /></a>
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

                <div className="mt-16 pt-8 border-t border-black/[0.03] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    <p>© {currentYear} HUVYN SYSTEMS AG. {tf('rights')}</p>
                    <div className="flex gap-6">
                        <span className="hover:text-zinc-950 transition-colors cursor-default">{th('nyc')}</span>
                        <span className="hover:text-zinc-950 transition-colors cursor-default">{th('ldn')}</span>
                        <span className="hover:text-zinc-950 transition-colors cursor-default">{th('sin')}</span>
                        <span className="hover:text-zinc-950 transition-colors cursor-default">{th('spo')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

