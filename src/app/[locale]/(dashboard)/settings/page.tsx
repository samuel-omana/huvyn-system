'use client';

import React from 'react';
import {
    Users,
    Database,
    ChevronRight,
    Cpu,
    Save,
    Globe,
    Activity
} from 'lucide-react';

export default function ForgePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div>
                <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 text-zinc-950">Forge System</h1>
                <p className="text-zinc-500 text-sm font-medium tracking-wide">Configure the core parameters and neural logic of the Huvyn OS.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* General Settings */}
                <div className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Core Parameters</h3>
                    <div className="space-y-4">
                        {[
                            { label: 'System Language', value: 'English (US)', icon: Globe },
                            { label: 'Network Latency Tolerance', value: '250ms', icon: Cpu },
                            { label: 'Auto-Route Optimization', value: 'Enabled', icon: Activity }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-all cursor-pointer group shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-zinc-950">
                                        {item.label === 'System Language' ? <Globe className="w-4 h-4" /> : item.label === 'Network Latency Tolerance' ? <Cpu className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                                    </div>
                                    <span className="text-xs font-bold text-zinc-600 group-hover:text-zinc-950">{item.label}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black uppercase text-zinc-400">{item.value}</span>
                                    <ChevronRight className="w-3 h-3 text-zinc-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Identity & Access */}
                <div className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Identity & Trace</h3>
                    <div className="space-y-4">
                        <div className="p-6 bg-white border border-zinc-200 rounded-2xl space-y-4 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-zinc-950">Access Control (RBAC)</p>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">42 Active Operators</p>
                                </div>
                            </div>
                            <button className="w-full py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:bg-zinc-100 transition-all">
                                Manage Permissions
                            </button>
                        </div>

                        <div className="p-6 bg-white border border-zinc-200 rounded-2xl space-y-4 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400">
                                    <Database className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-zinc-950">System Data Retention</p>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">90 Days Cycle</p>
                                </div>
                            </div>
                            <div className="h-1 w-full bg-zinc-100 rounded-full">
                                <div className="h-full w-2/3 bg-zinc-950 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-zinc-200 flex justify-end">
                <button className="flex items-center gap-2 px-8 py-3 bg-zinc-950 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-950/20">
                    <Save className="w-4 h-4" />
                    Commit Core Changes
                </button>
            </div>
        </div>
    );
}
