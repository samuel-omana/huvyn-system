import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Loading() {
    const t = useTranslations('Common');
    return (
        <div className="flex items-center justify-center min-h-[60vh] w-full">
            <div className="flex flex-col items-center text-foreground/40 space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
                <p className="text-sm font-medium tracking-widest uppercase">{t('loading')}</p>
            </div>
        </div>
    );
}
