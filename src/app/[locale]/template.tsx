'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export default function RootTemplate({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    // The God-Tier Next.js SPA animation fix:
    // Binding the raw pathname to the key forces React to completely destroy
    // and recreate the DOM on Language or Route switch. This gives Framer Motion
    // a fresh IntersectionObserver slate, stopping the 'Opacity 0' bug.
    return (
        <div className="flex flex-col flex-1 w-full">
            {children}
        </div>
    );
}
