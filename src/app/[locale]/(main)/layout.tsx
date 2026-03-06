import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Inicio',
};

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
