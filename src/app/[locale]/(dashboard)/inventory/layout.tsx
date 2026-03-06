import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Atoms Control',
};

export default function InventoryPageLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
