'use client';

import { motion } from 'framer-motion';

export default function DashboardLoading() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-in fade-in duration-500">
            <div className="flex flex-col items-center gap-6">
                {/* SUBTLE SYSTEM TRACE LOADER */}
                <div className="relative">
                    {/* Pulsing outer ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-zinc-950/5 border border-zinc-200/50"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Core Pulse */}
                    <div className="relative w-3 h-3 bg-zinc-950 rounded-full flex items-center justify-center">
                        <motion.div
                            className="w-full h-full bg-zinc-950 rounded-full"
                            animate={{
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-950/80">
                        Synchronizing Node
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                        Trace in progress...
                    </span>
                </div>
            </div>
        </div>
    );
}
