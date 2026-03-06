import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacidad',
};

export default function PrivacyPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
