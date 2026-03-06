'use client';

import React, { useState, useEffect, memo } from 'react';
import { Sidebar } from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from '@/i18n/routing';
import { GlobalErrorBoundary } from './GlobalErrorBoundary';

interface DashboardClientProps {
    children: React.ReactNode;
    serverCollapsed: boolean;
}

// OMNI-PERSISTENCE: Lives in the JS environment across soft navigations
let globalStateCache: boolean | null = null;

// MEMOIZED SIDEBAR: Ensures it NEVER re-renders unless props change
const MemoizedSidebar = memo(Sidebar);

export function DashboardClient({ children, serverCollapsed }: DashboardClientProps) {
    const pathname = usePathname();

    // 1. STATE INITIALIZATION: Priority to global cache, then server cookie
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
        if (typeof window !== 'undefined' && globalStateCache !== null) {
            return globalStateCache;
        }
        return serverCollapsed;
    });

    const [isHydrated, setIsHydrated] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    // 2. HYDRATION & INITIAL CACHE SYNC
    useEffect(() => {
        setTimeout(() => setIsHydrated(true), 0);
        if (globalStateCache === null) {
            globalStateCache = isSidebarCollapsed;
        }
        // Force DOM attribute sync to ensure CSS variables match React state
        document.documentElement.setAttribute('data-sidebar-collapsed', isSidebarCollapsed ? 'true' : 'false');
    }, [isSidebarCollapsed]);

    // 3. NAVIGATION DETECTION: Only for the header pulse
    useEffect(() => {
        setTimeout(() => setIsNavigating(true), 0);
        const timer = setTimeout(() => setIsNavigating(false), 400);
        return () => clearTimeout(timer);
    }, [pathname]);

    const toggleSidebar = () => {
        const newState = !isSidebarCollapsed;
        setIsSidebarCollapsed(newState);
        globalStateCache = newState;

        // Update cookie for future SSR (using Secure and SameSite for production stability)
        document.cookie = `huvyn_sidebar_final=${newState}; path=/; max-age=31536000; samesite=lax; secure`;

        // Update DOM attribute for immediate CSS variable response
        document.documentElement.setAttribute('data-sidebar-collapsed', newState ? 'true' : 'false');
    };

    return (
        <div className="flex h-screen bg-zinc-50 text-zinc-950 selection:bg-zinc-200 font-sans overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-dots pointer-events-none opacity-40 select-none" />

            {/* ROCK-SOLID WRAPPER */}
            <div className="flex w-full h-full relative z-10 overflow-hidden">
                <MemoizedSidebar
                    isCollapsed={isSidebarCollapsed}
                    onCollapse={toggleSidebar}
                    isMounted={isHydrated}
                />

                <main className="flex-1 relative flex flex-col min-w-0">
                    <header className="h-16 border-b border-zinc-200/50 flex items-center justify-between px-8 bg-white/40 backdrop-blur-xl sticky top-0 z-40">
                        <div className="flex items-center gap-3">
                            <div className="h-3 w-[1px] bg-zinc-200 hidden md:block" />
                            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-zinc-400 select-none">System Trace / Pulse</span>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2.5">
                                <div className={`w-1 h-1 rounded-full transition-colors duration-500 ${isNavigating ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-500 min-w-[80px]">
                                    {isNavigating ? 'Tracing Node' : 'System Sync'}
                                </span>
                            </div>
                            <div className="h-7 w-7 rounded-sm bg-zinc-50 border border-zinc-100 flex items-center justify-center overflow-hidden">
                                <div className="w-1 h-1 bg-zinc-950 rounded-full animate-pulse opacity-20" />
                            </div>
                        </div>

                        {/* NAV PROGRESS BAR: Only indicator of navigation */}
                        <AnimatePresence>
                            {isNavigating && (
                                <motion.div
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-zinc-950 origin-left z-50 pointer-events-none"
                                />
                            )}
                        </AnimatePresence>
                    </header>

                    {/* CONTENT AREA: Smooth, isolated transition */}
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar pb-32 md:pb-8">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={pathname}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <GlobalErrorBoundary>
                                    {children}
                                </GlobalErrorBoundary>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </main>
            </div>
        </div>
    );
}
