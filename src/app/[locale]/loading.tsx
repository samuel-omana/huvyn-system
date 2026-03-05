'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-6">
                {/* LOGO ANIMATION: looping pulse on the Huvyn mark */}
                <div className="relative flex items-center gap-3">
                    {/* Icon mark — pulsing outer ring */}
                    <div className="relative">
                        {/* Outer pulse ring */}
                        <motion.div
                            className="absolute inset-0 rounded-lg bg-zinc-100 border border-zinc-200/60"
                            animate={{
                                scale: [1, 1.35, 1],
                                opacity: [0.6, 0, 0.6],
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Logo box */}
                        <motion.div
                            className="relative w-9 h-9 bg-zinc-950 rounded-lg flex items-center justify-center shadow-sm"
                            animate={{
                                scale: [1, 0.92, 1],
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            {/* Inner dot */}
                            <motion.div
                                className="w-2 h-2 bg-white rounded-full"
                                animate={{
                                    scale: [1, 0.7, 1],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Wordmark */}
                    <motion.span
                        className="text-zinc-950 font-black tracking-tighter text-2xl uppercase select-none"
                        animate={{
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        Huvyn
                    </motion.span>
                </div>

                {/* Subtle loading bar */}
                <div className="relative w-24 h-[2px] bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-zinc-950 rounded-full"
                        animate={{
                            x: ['-100%', '200%'],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        style={{ width: '50%' }}
                    />
                </div>
            </div>
        </div>
    );
}
