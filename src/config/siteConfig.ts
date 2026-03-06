export const siteConfig = {
    // Navigation routes decoupled from UI components
    navItems: [
        { labelKey: 'home', href: '/' },
        { labelKey: 'tracking', href: '/tracking' },
        { labelKey: 'services', href: '/services' },
        { labelKey: 'about', href: '/about' }
    ],

    // Global locales array to prevent hardcoding multiple times
    locales: ['en', 'es', 'pt', 'fr'] as const,
    defaultLocale: 'es',

    // Bento Grid performance / latency visualization mockup data
    bentoLogic: {
        latencyBars: [55, 30, 80, 10, 65, 40, 95, 25, 70, 50, 85, 15, 60, 35, 90, 20, 75, 45, 100, 5]
    },

    // About stats definitions
    aboutStats: [
        { key: 'hubs' },
        { key: 'countries' },
        { key: 'team' }
    ]
};
