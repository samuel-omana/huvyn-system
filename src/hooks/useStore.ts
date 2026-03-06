'use client';

import { create } from 'zustand';

interface AppState {
    // UI States
    isSidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;

    // Notifications (Backoffice readiness)
    notifications: Array<{ id: string; message: string; type: 'success' | 'error' | 'info' }>;
    addNotification: (message: string, type?: 'success' | 'error' | 'info') => void;
    removeNotification: (id: string) => void;
}

export const useStore = create<AppState>((set) => ({
    isSidebarOpen: false,
    setSidebarOpen: (open) => set({ isSidebarOpen: open }),

    notifications: [],
    addNotification: (message, type = 'info') => set((state) => ({
        notifications: [
            ...state.notifications,
            { id: Math.random().toString(36).substring(7), message, type }
        ]
    })),
    removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id)
    })),
}));
