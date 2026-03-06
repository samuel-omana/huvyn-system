import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { SocialProof } from '@/components/sections/SocialProof';
import { Metrics } from '@/components/sections/Metrics';
import { Testimonials } from '@/components/sections/Testimonials';
import dynamic from 'next/dynamic';

const OrganicMesh = dynamic(
  () => import('@/components/ui/OrganicMesh').then((mod) => mod.OrganicMesh)
);

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return (
    <div className="min-h-screen bg-white">
      {/*
        HERO ZONE: Covers from the top of the layout down to the SocialProof row.
        - Uses negative margin (-mt-16) to extend behind the nav bar (which is pt-16)
          so the background starts at pixel 0 of the viewport.
        - Explicit padding-top (pt-16 + pt-20 = 9rem) restores content spacing.
        - dots and gradient are absolute inside this container.
      */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          marginTop: '-4rem',
          paddingTop: '9rem',
          background: 'linear-gradient(to bottom, #d4d4d8 0%, #e4e4e7 30%, #f4f4f5 60%, #ffffff 100%)'
        }}
      >
        {/* OrganicMesh canvas — absolute, fills entire container from the top */}
        <OrganicMesh
          opacity={0.85}
          spacing={40}
          particleOpacity={0.45}
          minSize={0.8}
          maxSize={1.8}
          waveIntensity={12}
        />

        {/* Content: relative so it sits above the canvas */}
        <div className="relative z-10 flex flex-col items-center">
          <Hero
            trustBadge={t('trustBadge')}
            heroTitle={t('heroTitle')}
            heroBadge={t('heroBadge')}
            heroSubtitle={t('heroSubtitle')}
            trackLabel={t('trackLabel')}
            trackPlaceholder={t('trackPlaceholder')}
            trackButton={t('trackButton')}
            securityBadge={t('securityBadge')}
          />
          <div className="w-full mt-16">
            <SocialProof />
          </div>
        </div>
      </div>

      {/* REST: white sections below the hero zone */}
      <div className="w-full pb-32 space-y-6 md:space-y-12 bg-white">
        <BentoGrid />
        <Metrics />
        <Testimonials />
      </div>
    </div>
  );
}
