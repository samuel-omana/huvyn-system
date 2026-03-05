'use client';

import { OrganicMesh } from './OrganicMesh';

/**
 * HomeBackground – fixed layer that covers the ENTIRE viewport from pixel 0.
 * Uses `fixed inset-0` so it is independent of layout container padding.
 * Content sits on top via `relative z-10` on the layout wrapper.
 *
 * Gradient: top-to-bottom (zinc-200 → white)
 * Mesh: fills from the very top.
 * Bottom fade: precisely fades the mesh after the hero + SocialProof zone.
 */
export function HomeBackground() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {/* Gradient background — top to bottom */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom, #e4e4e7 0%, #f4f4f5 40%, #ffffff 100%)'
                }}
            />

            {/* Technical dot grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'radial-gradient(circle, #D4D4D8 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    opacity: 0.25
                }}
            />

            {/* Organic Mesh animation */}
            <OrganicMesh
                className="opacity-65"
                spacing={38}
                particleOpacity={0.3}
                minSize={1.0}
                maxSize={2.0}
            />

            {/* 
              Bottom fade: starts at 55vh so the effect covers the Hero + SocialProof rows.
              Anything below that (BentoGrid, Metrics, etc.) sits on a white bg-white div.
            */}
            <div
                className="absolute inset-x-0"
                style={{
                    top: '55vh',
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, white 35%)'
                }}
            />
        </div>
    );
}
