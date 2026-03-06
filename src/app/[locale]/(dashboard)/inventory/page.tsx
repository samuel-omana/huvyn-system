'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    Plus,
    Filter,
    MoreHorizontal,
    Box,
    MapPin,
    AlertCircle,
    Download
} from 'lucide-react';

interface Asset {
    id: string;
    sku: string;
    name: string;
    category: string;
    stock: number;
    location: string;
    status: 'optimal' | 'low' | 'alert';
}

export default function InventoryPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const assets: Asset[] = [
        { id: '1', sku: 'HV-ATOM-001', name: 'Neural Processor Unit', category: 'Electronics', stock: 1240, location: 'HUB-BCN', status: 'optimal' },
        { id: '2', sku: 'HV-ATOM-002', name: 'Quantum Sensor Array', category: 'Hardware', stock: 85, location: 'HUB-MAD', status: 'low' },
        { id: '3', sku: 'HV-ATOM-003', name: 'Cryogenic Container v4', category: 'Transport', stock: 12, location: 'PRT-VAL', status: 'alert' },
        { id: '4', sku: 'HV-ATOM-004', name: 'Lithium Core Battery', category: 'Energy', stock: 2500, location: 'HUB-BCN', status: 'optimal' },
        { id: '5', sku: 'HV-ATOM-005', name: 'Biometric Scanner', category: 'Security', stock: 450, location: 'HUB-MAD', status: 'optimal' },
    ];

    const getStatusStyles = (status: Asset['status']) => {
        switch (status) {
            case 'optimal': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
            case 'low': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
            case 'alert': return 'bg-red-500/10 text-red-500 border-red-500/20';
        }
    };

    return (
        <div className="space-y-8">
            {/* PAGE HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase mb-2 text-zinc-950">Atoms Control</h1>
                    <p className="text-zinc-400 text-xs font-black uppercase tracking-[0.2em]">Inventory / Physical Asset Ledger</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-zinc-100 border border-zinc-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:bg-zinc-200 transition-all">
                        <Download className="w-3.5 h-3.5" />
                        Export Data
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-950/20">
                        <Plus className="w-4 h-4" />
                        Add New Atom
                    </button>
                </div>
            </div>

            {/* FILTERS & SEARCH BAR */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-zinc-950 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search by SKU, Name or Node..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-12 bg-zinc-100/50 border border-zinc-200 focus:border-zinc-300 rounded-xl pl-12 pr-4 text-sm font-medium outline-none transition-all placeholder:text-zinc-400 focus:bg-white text-zinc-950"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="h-12 px-5 bg-zinc-100 border border-zinc-200 rounded-xl flex items-center gap-3 text-zinc-500 hover:text-zinc-950 transition-all">
                        <Filter className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Filters</span>
                    </button>
                </div>
            </div>

            {/* ASSET TABLE (High Density) */}
            <div className="bg-white border border-zinc-200 rounded-[--radius-extreme] overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-zinc-200 bg-zinc-50/50">
                                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">Asset Trace</th>
                                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">Category</th>
                                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">Stock Units</th>
                                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400">Node Location</th>
                                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 text-right">Status</th>
                                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {assets.map((asset, i) => (
                                <motion.tr
                                    key={asset.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-zinc-50 transition-colors group"
                                >
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-zinc-950 transition-colors">
                                                <Box className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold tracking-tight text-zinc-950">{asset.name}</p>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{asset.sku}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-[10px] font-bold text-zinc-500 px-2.5 py-1 bg-zinc-50 rounded-md border border-zinc-100 uppercase tracking-widest">
                                            {asset.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-[14px] font-bold text-zinc-950 tracking-tight">{asset.stock.toLocaleString()}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                                            <span className="text-xs font-medium text-zinc-600">{asset.location}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest ${getStatusStyles(asset.status)}`}>
                                            <div className="w-1 h-1 rounded-full bg-current" />
                                            {asset.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="p-2 text-zinc-300 hover:text-zinc-950 transition-colors text-zinc-950">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* TABLE FOOTER / PAGINATION */}
                <div className="p-6 border-t border-white/[0.05] flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">Showing 5 of 1240 Atoms</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-zinc-500 cursor-not-allowed">Prev</button>
                        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:bg-white/10 transition-all">Next</button>
                    </div>
                </div>
            </div>

            {/* SYSTEM ALERTS (Contextual) */}
            <div className="p-6 rounded-[--radius-extreme] bg-red-500/5 border border-red-500/10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                    <AlertCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xs font-black uppercase tracking-widest text-red-500 mb-1">Stock Integrity Incident</h3>
                    <p className="text-sm font-medium text-red-500/60">Node PRT-VAL reported a critical stock level for Cryogenic Containers. Automated reordering pending approval.</p>
                </div>
                <button className="px-5 py-2.5 bg-red-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                    Resolve Trace
                </button>
            </div>
        </div>
    );
}
