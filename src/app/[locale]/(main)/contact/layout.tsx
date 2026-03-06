import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contacto',
};

export default function ContactPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
