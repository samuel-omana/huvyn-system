import { cookies } from 'next/headers';
import { DashboardClient } from '../../../components/dashboard/DashboardClient';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Definitive SSR Source: Read current state from cookie
    const cookieStore = await cookies();
    const isCollapsed = cookieStore.get('huvyn_sidebar_final')?.value === 'true';

    return <DashboardClient serverCollapsed={isCollapsed}>{children}</DashboardClient>;
}
