import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Aviso Legal',
};

export default function LegalPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
