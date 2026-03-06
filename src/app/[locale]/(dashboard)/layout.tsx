import { DashboardClient } from '../../../components/dashboard/DashboardClient';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Definitive SSR Source: Read current state from cookie
    return <DashboardClient>{children}</DashboardClient>;
}
