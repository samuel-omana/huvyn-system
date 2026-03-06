import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forge System',
};

export default function SettingsPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
