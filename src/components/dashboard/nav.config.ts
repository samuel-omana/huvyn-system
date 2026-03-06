import {
    LayoutDashboard,
    Box,
    Route,
    Map,
    Settings,
    ShieldCheck
} from 'lucide-react';

export const NAV_ITEMS = [
    { name: 'The Pulse', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Atoms Control', href: '/inventory', icon: Box },
    { name: 'Orchestrator', href: '/ops', icon: Route },
    { name: 'Nodes & Hubs', href: '/nodes', icon: Map },
];

export const BOTTOM_ITEMS = [
    { name: 'Forge System', href: '/settings', icon: Settings },
    { name: 'Security Hub', href: '/security', icon: ShieldCheck },
];
