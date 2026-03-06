'use client';

// Next.js requires global-error to catch errors in the root layout.
export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body className="bg-background text-foreground antialiased w-full min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans">
                <h2 className="text-4xl font-bold tracking-tight mb-4">Critical Error!</h2>
                <p className="opacity-70 mb-8 max-w-md mx-auto text-lg">A critical error occurred while rendering the application root.</p>
                <button
                    onClick={() => reset()}
                    className="bg-foreground text-background px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
                >
                    Try again
                </button>
            </body>
        </html>
    );
}
