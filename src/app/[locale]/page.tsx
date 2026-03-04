'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { SocialProof } from '@/components/ui/SocialProof';
import { Metrics } from '@/components/ui/Metrics';
import { Testimonials } from '@/components/ui/Testimonials';
import { Package, ArrowRight, Star } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const fadeInUp: any = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      <main className="flex-1 flex flex-col items-center justify-start pt-20 pb-32">

        {/* Members / Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-6"
        >
          <div className="bg-zinc-100 text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-black/[0.03]">
            {t('trustBadge')}
          </div>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden flex items-center justify-center text-zinc-300 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Refined Typography Hero */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl space-y-6 px-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.05] flex flex-col items-center"
          >
            <span>{t('heroTitle').split(',')[0]},</span>
            <span className="flex items-center gap-4 flex-wrap justify-center">
              {t('heroTitle').split(',')[1]?.trim() || ''} <span className="inline-flex items-center justify-center h-[1.2em] bg-zinc-900 rounded-full text-white text-[0.25em] font-medium px-5 tracking-widest uppercase">{t('heroBadge')}</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-zinc-500 mx-auto max-w-2xl font-medium pt-2 leading-relaxed"
          >
            {t('heroSubtitle')}
          </motion.p>
        </motion.div>

        {/* Refined Track Input (Studio Pill) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 w-full max-w-xl px-6"
        >
          <div className="bg-zinc-900 rounded-full p-1.5 flex items-center gap-2 shadow-xl shadow-black/10">
            <div className="flex items-center gap-2.5 pl-5 pr-3 border-r border-white/10 text-white/40 text-[10px] font-bold tracking-widest">
              <span className="text-blue-500">$HUV</span>
              {t('trackLabel')}
            </div>
            <input
              type="text"
              placeholder={t('trackPlaceholder')}
              className="flex-1 bg-transparent border-none outline-none px-3 py-2.5 text-base placeholder:text-zinc-600 text-white font-medium shadow-none focus:ring-0"
            />
            <button className="bg-white text-zinc-900 pr-5 pl-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-100 transition-all group active:scale-95">
              {t('trackButton')}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="flex justify-center mt-5">
            <div className="bg-zinc-100 rounded-full px-5 py-1.5 border border-black/[0.03] text-[9.5px] font-bold text-zinc-400 uppercase tracking-widest">
              {t('securityBadge')}
            </div>
          </div>
        </motion.div>

        {/* Content Sections with spacing */}
        <div className="w-full mt-4 space-y-6 md:space-y-12">
          <SocialProof />
          <BentoGrid />
          <Metrics />
          <Testimonials />
        </div>
      </main>
    </div>
  );
}
