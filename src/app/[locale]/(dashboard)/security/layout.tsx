import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Hub',
};

export default function SecurityPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
