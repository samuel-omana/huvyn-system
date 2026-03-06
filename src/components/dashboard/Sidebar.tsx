'use client';

import React from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
    LogOut,
    ChevronLeft
} from 'lucide-react';

import { NAV_ITEMS, BOTTOM_ITEMS } from './nav.config';

interface SidebarProps {
    isCollapsed: boolean;
    onCollapse: () => void;
    isMounted: boolean;
}

export function Sidebar({ isCollapsed, onCollapse, isMounted }: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
            <motion.aside
                initial={false}
                animate={isMounted ? {
                    width: isCollapsed ? 80 : 280,
                } : {}}
                transition={isMounted ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
                className="h-screen border-r border-zinc-200/50 bg-white/40 backdrop-blur-xl relative z-50 flex flex-col overflow-visible hidden md:flex"
                style={{ width: 'var(--sidebar-width)' }}
            >
                {/* BRANDING SECTION */}
                <div className={`p-6 h-20 flex items-center border-b border-zinc-200 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    <Link href="/dashboard" className="flex items-center gap-3 group">
                        <div className="w-6 h-6 bg-zinc-950 rounded-md flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                        {!isCollapsed && (
                            <motion.span
                                initial={false}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-zinc-950 font-black uppercase text-sm tracking-tighter"
                            >
                                Huvyn
                            </motion.span>
                        )}
                    </Link>
                </div>

                {/* NAVIGATION SECTION */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar pt-8">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                aria-label={item.name}
                                aria-current={isActive ? 'page' : undefined}
                                className={`
                                    flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative
                                    hover:scale-[1.02] active:scale-[0.98]
                                    ${isCollapsed ? 'justify-center' : ''}
                                    ${isActive
                                        ? 'bg-zinc-950 text-white font-black shadow-lg shadow-zinc-950/10'
                                        : 'text-zinc-400 hover:text-zinc-950 hover:bg-zinc-200/50'}
                                `}
                            >
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                {!isCollapsed && (
                                    <motion.span
                                        initial={false}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-xs uppercase tracking-[0.15em] whitespace-nowrap"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                                {isActive && !isCollapsed && (
                                    <motion.div
                                        layoutId="sidebar-pill"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="absolute left-0 w-1 h-4 bg-white/20 rounded-r-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* BOTTOM UTILITIES */}
                <div className="p-4 border-t border-zinc-200/50 space-y-2">
                    {BOTTOM_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            aria-label={item.name}
                            className={`flex items-center gap-4 px-4 py-3 rounded-xl text-zinc-400 hover:text-zinc-950 hover:bg-zinc-200/50 transition-all group ${isCollapsed ? 'justify-center' : ''}`}
                        >
                            <item.icon className="w-5 h-5 transition-colors flex-shrink-0" />
                            {!isCollapsed && <span className="text-[10px] font-bold uppercase tracking-widest">{item.name}</span>}
                        </Link>
                    ))}

                    <button
                        onClick={() => window.location.href = '/'}
                        aria-label="Logout"
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-zinc-300 hover:text-red-600 transition-all group ${isCollapsed ? 'justify-center' : ''}`}
                    >
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && <span className="text-[10px] font-black uppercase tracking-widest">Logout Trace</span>}
                    </button>
                </div>

                {/* COLLAPSE CONTROL */}
                <button
                    onClick={onCollapse}
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    className={`
                        absolute -right-3 bottom-24 w-6 h-12 bg-zinc-950 border border-zinc-200 rounded-full 
                        flex items-center justify-center text-white hover:scale-105 active:scale-95 
                        transition-all z-[60] shadow-xl shadow-zinc-950/20 group/collapse
                    `}
                >
                    <ChevronLeft className={`w-3 h-3 transition-transform duration-500 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`} />
                </button>
            </motion.aside>

            {/* MOBILE NAVIGATION */}
            <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-t border-zinc-200 z-[70] md:hidden flex items-center justify-around px-4">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 ${isActive ? 'text-zinc-950' : 'text-zinc-400'}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-[8px] font-black uppercase tracking-tighter">{item.name.split(' ')[0]}</span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
