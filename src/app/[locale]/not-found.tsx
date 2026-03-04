import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Ghost } from 'lucide-react';

export default function NotFoundPage() {
    const t = useTranslations('NotFound');

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
            <div className="w-24 h-24 mb-8 text-foreground/20 flex items-center justify-center opacity-50">
                <Ghost className="w-full h-full" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                404
            </h1>
            <h2 className="text-2xl font-semibold text-foreground/80 mb-4">
                {t('title') || 'Page Not Found'}
            </h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto text-lg">
                {t('description') || 'The logistical route you are looking for does not exist or has been moved.'}
            </p>
            <Link
                href="/"
                className="bg-foreground text-background px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform shadow-md"
            >
                {t('backToHome') || 'Return to Origin'}
            </Link>
        </div>
    );
}
