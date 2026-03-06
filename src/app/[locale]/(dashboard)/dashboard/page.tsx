'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    AlertTriangle,
    Activity,
    Globe2,
    ArrowUpRight
} from 'lucide-react';

export default function DashboardPage() {
    const stats = [
        { label: 'Active Atoms', value: '42,892', change: '+12%', icon: Box, color: 'text-emerald-500' },
        { label: 'Network Efficiency', value: '98.4%', change: '+0.2%', icon: Activity, color: 'text-blue-500' },
        { label: 'Global Latency', value: '142ms', change: '-5%', icon: Globe2, color: 'text-purple-500' },
        { label: 'Alerts Trace', value: '3', change: 'Critical', icon: AlertTriangle, color: 'text-amber-500' },
    ];

    return (
        <div className="space-y-12">
            {/* HERO STATS GRID */}
            <div>
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h1 className="text-5xl font-black tracking-tighter uppercase mb-2 text-zinc-950">The Pulse</h1>
                        <p className="text-zinc-400 text-[9px] font-black uppercase tracking-[0.3em]">Telemetry / Huvyn Global Network</p>
                    </div>
                    <div className="flex items-center gap-2.5 px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-600">Active Node</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            className="p-8 rounded-[--radius-extreme] bg-white border border-zinc-200/50 hover:border-zinc-400 transition-all group shadow-[--shadow-premium] relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className={`p-2 rounded-lg bg-zinc-50 border border-zinc-100 ${stat.color}`}>
                                    <stat.icon className="w-3.5 h-3.5" />
                                </div>
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${stat.color === 'text-amber-500' ? 'text-amber-500' : 'text-zinc-400'}`}>
                                    {stat.change}
                                </span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">{stat.label}</p>
                                <p className="text-3xl font-black tracking-tighter text-zinc-950">
                                    {stat.value}
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-3 h-3 text-zinc-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ACTIVITY ANALYTICS SECTION */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Main Telemetry Graph Placeholder */}
                <div className="xl:col-span-2 p-8 rounded-[--radius-extreme] bg-white border border-zinc-200 h-[400px] flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Network Throughput Trace</h3>
                        <div className="flex gap-4 text-zinc-400">
                            <span className="text-[10px] font-bold text-zinc-950 uppercase tracking-widest">24H</span>
                            <span className="text-[10px] font-bold hover:text-zinc-600 cursor-pointer uppercase tracking-widest">7D</span>
                            <span className="text-[10px] font-bold hover:text-zinc-600 cursor-pointer uppercase tracking-widest">30D</span>
                        </div>
                    </div>
                    {/* Fake Visual Graph */}
                    <div className="flex-1 flex items-end gap-1 px-4 mt-8 opacity-40">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-zinc-100 to-zinc-200 rounded-t-sm group-hover:from-zinc-200 group-hover:to-zinc-300 transition-colors"
                                style={{ height: `${((i * 13) % 80) + 20}%` }}
                            />
                        ))}
                    </div>
                </div>

                {/* Operations Feed */}
                <div className="p-8 rounded-[--radius-extreme] bg-white border border-zinc-200 space-y-6 shadow-sm">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8">Audit Trail</h3>
                    <div className="space-y-6">
                        {[
                            { time: '12:04:21', event: 'Node BCN-77 Connected', type: 'info' },
                            { time: '11:58:10', event: 'Inventory Sync: 12k SKUs', type: 'success' },
                            { time: '11:42:00', event: 'Carrier API Timeout: NYP', type: 'error' },
                            { time: '11:30:15', event: 'Huvyn Forge: Core Update', type: 'info' },
                        ].map((log, i) => (
                            <div key={i} className="flex gap-4 items-start pb-4 border-b border-zinc-100 last:border-0">
                                <span className="text-[10px] font-mono text-zinc-300">{log.time}</span>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold tracking-tight text-zinc-950">{log.event}</p>
                                    <div className={`w-1 h-1 rounded-full ${log.type === 'error' ? 'bg-red-500' : log.type === 'success' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
