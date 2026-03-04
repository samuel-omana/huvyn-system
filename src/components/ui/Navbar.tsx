'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState, ChangeEvent } from 'react';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
    const t = useTranslations('Navigation');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: t('home'), href: '/' },
        { label: t('tracking'), href: '/tracking' },
        { label: t('services'), href: '/services' },
        { label: t('about'), href: '/about' }
    ];

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastScrollY;

        if (latest < 50) {
            setIsVisible(true);
        } else if (diff > 0) {
            setIsVisible(false);
        } else if (diff < 0) {
            setIsVisible(true);
        }

        setLastScrollY(latest);
    });

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        const currentPathname = window.location.pathname;
        const pathSegments = currentPathname.split('/');
        pathSegments[1] = nextLocale;
        window.location.href = pathSegments.join('/') + window.location.search;
    };

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
                        {navItems.map((item) => {
                            const isActive = pathname === `/${locale}${item.href}` || (item.href === '/' && pathname === `/${locale}`);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${isActive ? 'nav-item-active' : 'px-4 py-2 hover:text-white transition-colors studio-hover'}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <button className="p-2 hover:text-white transition-colors">
                                <Globe className="w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                {['en', 'es', 'pt', 'fr'].map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            const pathSegments = window.location.pathname.split('/');
                                            pathSegments[1] = lang;
                                            window.location.href = pathSegments.join('/') + window.location.search;
                                        }}
                                        className={`w-full px-6 py-2 text-xs font-bold uppercase transition-colors hover:bg-white/10 text-center ${locale === lang ? 'text-white' : 'text-white/40'}`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
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
                        className="fixed inset-0 z-[60] bg-zinc-950 p-8 pt-24 md:hidden"
                    >
                        <div className="flex flex-col gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-semibold tracking-tighter text-white/40 hover:text-white transition-colors flex items-center justify-between group"
                                >
                                    {item.label}
                                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
