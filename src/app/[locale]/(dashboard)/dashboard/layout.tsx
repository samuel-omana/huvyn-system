import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Pulse',
};

export default function DashboardPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
