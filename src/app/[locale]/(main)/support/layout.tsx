import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Soporte',
};

export default function SupportPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
