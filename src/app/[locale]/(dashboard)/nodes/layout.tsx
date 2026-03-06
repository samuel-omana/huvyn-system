import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nodes & Hubs',
};

export default function NodesPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
