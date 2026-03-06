'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useNativeInView } from '@/hooks/useNativeInView';

export function Metrics() {
    const t = useTranslations('HomePage.metrics');
    const { ref, isInView } = useNativeInView<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

    const metrics = [
        { key: 'packages' },
        { key: 'accuracy' },
        { key: 'countries' },
        { key: 'support' }
    ];

    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-20">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={metric.key}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="flex flex-col gap-2"
                        >
                            <h3 className="text-7xl md:text-8xl font-black text-zinc-950 tracking-tighter leading-none">
                                {t(`${metric.key}.value`)}
                            </h3>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-[2px] bg-zinc-900"></div>
                                <p className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em]">
                                    {t(`${metric.key}.label`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
