'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    MapPin,
    Zap,
    Shield,
    Users,
    Activity,
    Server,
    ArrowUpRight
} from 'lucide-react';

export default function NodesPage() {
    const nodes = [
        { name: 'Barcelona Global Hub', id: 'BCN-01', type: 'Primary Distribution', capacity: '94%', health: 'Stable', lat: '41.3851', lng: '2.1734' },
        { name: 'Madrid Central Node', id: 'MAD-05', type: 'Sortation Center', capacity: '72%', health: 'Stable', lat: '40.4168', lng: '-3.7038' },
        { name: 'Valencia Marine Hub', id: 'VLC-09', type: 'Port Terminal', capacity: '45%', health: 'Maintenance', lat: '39.4699', lng: '-0.3763' },
        { name: 'Bilbao Tech Node', id: 'BIO-12', type: 'Automation Hub', capacity: '12%', health: 'Idle', lat: '43.2630', lng: '-2.9350' },
    ];

    return (
        <div className="space-y-12">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase mb-2 text-zinc-950">Nodes & Hubs</h1>
                    <p className="text-zinc-400 text-xs font-black uppercase tracking-[0.2em]">Network / Infrastructure Topology</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-zinc-400 shadow-sm">
                                OP
                            </div>
                        ))}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">3 Operators Live</span>
                </div>
            </div>

            {/* NETWORK OVERVIEW */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {[
                    { label: 'Total Capacity', value: '42.1M Units', icon: Server, color: 'text-blue-500' },
                    { label: 'Active Sensors', value: '18,401', icon: Zap, color: 'text-amber-500' },
                    { label: 'Security Uptime', value: '99.98%', icon: Shield, color: 'text-emerald-500' },
                    { label: 'Staff in Transit', value: '1,204', icon: Users, color: 'text-purple-500' },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white border border-zinc-200 p-6 rounded-2xl hover:border-zinc-300 transition-all shadow-sm"
                    >
                        <stat.icon className={`w-5 h-5 mb-4 ${stat.color}`} />
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1">{stat.label}</p>
                        <p className="text-xl font-bold tracking-tight text-zinc-950">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* NODE MAP / LIST VIEW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Node Detail Cards */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-6">Physical Infrastructure Directory</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {nodes.map((node, i) => (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-white border border-zinc-200 rounded-3xl group hover:border-zinc-300 cursor-pointer transition-all relative overflow-hidden shadow-sm"
                            >
                                <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                                </div>
                                <div className="mb-8">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-400 mb-6 border border-zinc-100">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-sm font-bold text-zinc-950 mb-1 group-hover:text-zinc-950 transition-colors uppercase tracking-tight">{node.name}</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{node.type}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                        <span>Capacity Utilization</span>
                                        <span className="text-zinc-950">{node.capacity}</span>
                                    </div>
                                    <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: node.capacity }}
                                            transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                                            className={`h-full rounded-full ${parseInt(node.capacity) > 90 ? 'bg-red-500' : 'bg-zinc-950'}`}
                                        />
                                    </div>
                                    <div className="flex items-center gap-4 pt-2">
                                        <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded border text-[8px] font-black uppercase tracking-widest
                                            ${node.health === 'Stable' ? 'text-emerald-600 border-emerald-100 bg-emerald-50' :
                                                node.health === 'Maintenance' ? 'text-amber-600 border-amber-100 bg-amber-50' :
                                                    'text-zinc-400 border-zinc-200 bg-zinc-50'}
                                        `}>
                                            <div className={`w-1 h-1 rounded-full bg-current ${node.health === 'Stable' ? 'animate-pulse' : ''}`} />
                                            {node.health}
                                        </div>
                                        <span className="text-[8px] font-mono text-zinc-400 tracking-tighter">{node.lat} | {node.lng}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Network Feed */}
                <div className="space-y-6">
                    <div className="p-8 rounded-[--radius-extreme] bg-zinc-950 border border-zinc-800 h-full shadow-2xl shadow-zinc-950/20">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8">System Health Live</h3>
                        <div className="space-y-8">
                            {[
                                { node: 'BCN-01', signal: 'Optimal', delay: '12ms' },
                                { node: 'MAD-05', signal: 'Optimal', delay: '24ms' },
                                { node: 'VLC-09', signal: 'Intermittent', delay: '1.2s' },
                                { node: 'BIO-12', signal: 'Synchronizing', delay: '-' },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Activity className={`w-3.5 h-3.5 ${s.signal === 'Optimal' ? 'text-emerald-500' : 'text-zinc-600'}`} />
                                        <span className="text-[10px] font-black tracking-widest uppercase text-white">{s.node}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{s.signal}</p>
                                        <p className="text-[8px] font-mono text-zinc-600">{s.delay}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-zinc-800">
                            <button className="w-full py-3 border border-zinc-800 text-zinc-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
                                Perform Global Ping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
