'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations('ErrorBoundary');

    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-8">
                <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                {t('title') || 'Something went wrong!'}
            </h2>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto text-lg">
                {t('description') || 'We encountered an unexpected error. Please try again or contact support if the problem persists.'}
            </p>
            <button
                onClick={() => reset()}
                className="bg-foreground text-background px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
            >
                {t('retry') || 'Try again'}
            </button>
        </div>
    );
}
