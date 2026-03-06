'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname, useRouter } from '@/i18n/routing';
import { siteConfig } from '@/config/siteConfig';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Globe, Menu, X, ArrowUpRight, User } from 'lucide-react';

export function Navbar() {
    const t = useTranslations('Navigation');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastScrollY.current;

        if (latest < 50 && !isVisible) {
            setIsVisible(true);
        } else if (diff > 10 && isVisible) { // Add 10px threshold to prevent overly sensitive hiding
            setIsVisible(false);
        } else if (diff < -10 && !isVisible) {
            setIsVisible(true);
        }

        lastScrollY.current = latest;
    });



    return (
        <header>
            <motion.nav
                initial={false}
                animate={{
                    y: isVisible ? 0 : -100,
                    x: "-50%",
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="floating-island w-[calc(100%-2rem)] md:w-auto px-4 md:px-6 py-3"
            >
                <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <div className="w-1.5 h-1.5 bg-zinc-950 rounded-full"></div>
                        </div>
                        <span className="text-white font-black tracking-tighter text-sm uppercase hidden sm:inline">Huvyn</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1.5">
                        {siteConfig.navItems.map((item) => {
                            // Extract base pathname without locale
                            const baseHref = typeof item.href === 'string' ? item.href : '/';
                            const isActive = pathname === baseHref;
                            return (
                                <Link
                                    key={item.labelKey}
                                    href={`/${locale}${item.href}`}
                                    className={`${isActive ? 'nav-item-active pointer-events-none' : 'px-4 py-2 hover:text-white transition-colors studio-hover'}`}
                                >
                                    {t(item.labelKey)}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/auth"
                            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/5 shadow-sm group"
                        >
                            <User className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">{t('login')}</span>
                        </Link>

                        <div className="hidden md:block relative group">
                            <button
                                aria-label={t('changeLanguage')}
                                aria-expanded="false"
                                className="p-2 hover:text-white transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                {siteConfig.locales.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            router.replace(pathname, { locale: lang });
                                        }}
                                        className={`w-full px-6 py-2 text-xs font-bold uppercase transition-colors hover:bg-white/10 text-center ${locale === lang ? 'text-white' : 'text-white/40'}`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            aria-label={isMobileMenuOpen ? t('closeMenu') : t('openMenu')}
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 hover:text-white transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-zinc-950 p-8 pt-24 flex flex-col md:hidden"
                    >
                        <button
                            aria-label={t('closeMenu')}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="flex flex-col gap-8 flex-1">
                            <Link
                                href="/auth"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                        <User className="w-5 h-5 text-zinc-950" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bold text-white tracking-tight">{t('login')}</span>
                                        <span className="text-xs text-white/40 font-bold uppercase tracking-widest">{t('arch')}</span>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-white transition-colors relative z-10" />
                            </Link>

                            <div className="flex flex-col gap-6 mt-4">
                                {siteConfig.navItems.map((item) => {
                                    const baseHref = typeof item.href === 'string' ? item.href : '/';
                                    const isActive = pathname === baseHref;
                                    return (
                                        <Link
                                            key={item.labelKey}
                                            href={`/${locale}${item.href}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`text-4xl font-semibold tracking-tighter flex items-center justify-between group transition-colors ${isActive ? 'text-white pointer-events-none' : 'text-white/40 hover:text-white'}`}
                                        >
                                            {t(item.labelKey)}
                                            <ArrowUpRight className={`w-8 h-8 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                        </Link>
                                    )
                                })}
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-8 flex gap-4 w-full">
                                {siteConfig.locales.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            router.replace(pathname, { locale: lang });
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`flex-1 px-4 py-3 rounded-xl text-xs font-bold uppercase transition-colors text-center ${locale === lang ? 'bg-white text-zinc-900 border border-white' : 'bg-transparent text-white/40 border border-white/20'}`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
