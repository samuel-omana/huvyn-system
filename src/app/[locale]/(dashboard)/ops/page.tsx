'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Truck,
    Ship,
    Plane,
    FileText,
    ArrowRight,
    Clock,
    Globe,
    ExternalLink
} from 'lucide-react';

export default function OrchestratorPage() {
    const shipments = [
        { id: 'SH-9921', from: 'Shanghai (PVG)', to: 'Barcelona (BCN)', method: 'Ship', status: 'In Transit', vessel: 'Ever Alpha', etd: '2026-03-15' },
        { id: 'SH-8842', from: 'New Jersey (EWR)', to: 'Madrid (MAD)', method: 'Plane', status: 'Customs', vessel: 'FedEx 124', etd: '2026-03-08' },
        { id: 'SH-7755', from: 'Valencia (VLC)', to: 'Lisbon (LIS)', method: 'Truck', status: 'Dispatched', vessel: 'Truck HV-99', etd: '2026-03-07' },
    ];

    return (
        <div className="space-y-10">
            {/* HEADER */}
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase mb-2 text-zinc-950">Orchestrator</h1>
                    <p className="text-zinc-400 text-xs font-black uppercase tracking-[0.2em]">Operations / Route Logistics</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2.5 bg-zinc-100 border border-zinc-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:bg-zinc-200 transition-all">
                        Route Simulator
                    </button>
                    <button className="px-6 py-2.5 bg-zinc-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-950/20">
                        New Shipment
                    </button>
                </div>
            </div>

            {/* LIVE FEED GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Shipments List */}
                <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-6">Active Operational Flows</h3>
                    {shipments.map((shp, i) => (
                        <motion.div
                            key={shp.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 hover:border-white/[0.1] transition-all group cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                        {shp.method === 'Ship' && <Ship className="w-5 h-5 text-blue-400" />}
                                        {shp.method === 'Plane' && <Plane className="w-5 h-5 text-purple-400" />}
                                        {shp.method === 'Truck' && <Truck className="w-5 h-5 text-emerald-400" />}
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">{shp.id}</p>
                                        <p className="text-sm font-bold text-zinc-950 tracking-tight">{shp.vessel}</p>
                                    </div>
                                </div>
                                <div className={`px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest
                                    ${shp.status === 'In Transit' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                        shp.status === 'Customs' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                            'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'}
                                `}>
                                    {shp.status}
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex-1">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-1">Origin Node</p>
                                    <p className="text-xs font-bold text-zinc-300">{shp.from}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                                        <div className="w-1 h-1 bg-white rounded-full" />
                                    </div>
                                    <div className="w-[1px] h-6 border-l border-dashed border-white/20" />
                                    <ArrowRight className="w-3 h-3 text-zinc-700" />
                                </div>
                                <div className="flex-1 text-right">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-1">Destination Node</p>
                                    <p className="text-xs font-bold text-zinc-300">{shp.to}</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/[0.03] flex items-center justify-between">
                                <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> ETA: {shp.etd}</span>
                                    <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> Intl. Route</span>
                                </div>
                                <button className="text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-emerald-500 transition-colors flex items-center gap-1.5">
                                    Full Trace <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Documentation / Sidebar helper */}
                <div className="space-y-8">
                    <div className="p-8 rounded-[--radius-extreme] bg-white border border-zinc-200 shadow-sm">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8">Pending Documentation</h3>
                        <div className="space-y-4">
                            {[
                                { file: 'BL-990-221.pdf', type: 'Bill of Lading', status: 'Missing Signature' },
                                { file: 'INV-SP-440.pdf', type: 'Customs Invoice', status: 'Verifying' },
                                { file: 'PL-5512.pdf', type: 'Packing List', status: 'Approved' }
                            ].map((doc, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors cursor-pointer group border border-transparent hover:border-zinc-100">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-zinc-950">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-zinc-950 tracking-tight">{doc.file}</p>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">{doc.type}</p>
                                        <p className={`text-[8px] font-black uppercase tracking-widest mt-1 ${doc.status === 'Approved' ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold'}`}>
                                            {doc.status}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-[--radius-extreme] bg-zinc-950 border border-zinc-800 relative overflow-hidden group hover:border-zinc-700 transition-all shadow-xl shadow-zinc-950/20">
                        <Globe className="absolute -right-4 -bottom-4 w-32 h-32 opacity-5 text-white group-hover:rotate-12 transition-transform duration-1000" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-4">Route Optimization</h3>
                        <p className="text-sm font-bold text-zinc-400 mb-6 leading-relaxed">System identified 3 alternate paths to avoid Suez congestion. Potential saving: 4.2 days / $1.2k per container.</p>
                        <button className="w-full py-3 bg-white text-zinc-950 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-100 transition-all">
                            Review AI Analysis
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
