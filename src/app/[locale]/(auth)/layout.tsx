import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Iniciar Sesión',
};

export default function AuthPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
