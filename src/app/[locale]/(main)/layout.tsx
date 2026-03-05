import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { BottomBlur } from '@/components/ui/BottomBlur';

export default function MainLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="flex-1 pt-16">
                {children}
            </div>
            <BottomBlur />
            <Footer />
        </>
    );
}
