'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SidebarContextType {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    isHydrated: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({
    children,
    initialCollapsed
}: {
    children: ReactNode;
    initialCollapsed: boolean;
}) {
    const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);
    const [isHydrated, setIsHydrated] = useState(false);

    // Initial sync with client-side cookie to bypass stale SSR cache
    useEffect(() => {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('huvyn_sidebar_final='))
            ?.split('=')[1];

        if (cookieValue !== undefined) {
            const collapsed = cookieValue === 'true';
            setTimeout(() => {
                setIsCollapsed(collapsed);
                document.documentElement.setAttribute('data-sidebar-collapsed', collapsed ? 'true' : 'false');
            }, 0);
        }

        // Mark as hydrated to enable animations
        setTimeout(() => setIsHydrated(true), 0);
    }, []);

    const toggleSidebar = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);

        // Sync Cookie
        document.cookie = `huvyn_sidebar_final=${newState}; path=/; max-age=31536000; samesite=lax`;

        // Sync DOM Attribute
        document.documentElement.setAttribute('data-sidebar-collapsed', newState ? 'true' : 'false');
    };

    return (
        <SidebarContext.Provider value={{ isCollapsed, toggleSidebar, isHydrated }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}
