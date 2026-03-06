import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rastreo de Envío',
};

export default function TrackingPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
