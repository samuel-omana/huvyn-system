'use client';

import React from 'react';
import {
    Lock,
    Eye,
    Key,
    Terminal,
    AlertTriangle,
    CheckCircle2,
    ShieldAlert
} from 'lucide-react';

export default function SecurityPage() {
    return (
        <div className="space-y-12">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 text-zinc-950">Security Hub</h1>
                    <p className="text-zinc-500 text-sm font-medium tracking-wide">Monitor cryptographic integrity and operational security traces.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Defense Active</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Security Metrics */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-white border border-zinc-200 rounded-[--radius-extreme] relative overflow-hidden group shadow-sm">
                            <Terminal className="absolute -right-4 -bottom-4 w-24 h-24 opacity-5 group-hover:rotate-12 transition-transform duration-700 text-zinc-950" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Access Log Trace</h3>
                            <div className="space-y-4">
                                {[
                                    { user: 'op_samuel', ip: '192.168.1.1', time: '2m ago', action: 'Auth Success' },
                                    { user: 'sys_bot', ip: '10.0.0.4', time: '15m ago', action: 'Stock Sync' },
                                    { user: 'unknown', ip: '45.1.22.9', time: '1h ago', action: 'Denied Entry' },
                                ].map((log, i) => (
                                    <div key={i} className="flex items-center justify-between text-[11px]">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full ${log.action === 'Denied Entry' ? 'bg-red-500' : 'bg-emerald-500'}`} />
                                            <span className="font-mono text-zinc-600 font-bold">{log.user}</span>
                                        </div>
                                        <span className="text-zinc-400 font-bold">{log.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-white border border-zinc-200 rounded-[--radius-extreme] relative overflow-hidden group shadow-sm">
                            <ShieldAlert className="absolute -right-4 -bottom-4 w-24 h-24 opacity-5 group-hover:rotate-12 transition-transform duration-700 text-amber-500" />
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-6">Encryption Status</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-zinc-950">TLS 1.3 / AES-256</span>
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-zinc-950">DB Column Masking</span>
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-zinc-400 cursor-help underline decoration-dotted underline-offset-4">Vault Seal Status</span>
                                    <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded uppercase">Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Operational Compliance */}
                    <div className="p-8 bg-white border border-zinc-200 rounded-[--radius-extreme] shadow-sm">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-8">Asset Trace Compliance</h3>
                        <div className="relative h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-[94.2%] bg-zinc-950 rounded-full" />
                        </div>
                        <div className="flex justify-between mt-4">
                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Network Integrity Score</span>
                            <span className="text-xs font-bold text-zinc-950">94.2/100</span>
                        </div>
                    </div>
                </div>

                {/* Security Actions */}
                <div className="space-y-6">
                    <div className="p-8 rounded-[--radius-extreme] bg-white border border-zinc-200 space-y-6 shadow-sm">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Quick Protocols</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <button className="flex items-center gap-3 p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-zinc-300 transition-all group">
                                <Key className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-zinc-950">Rotate API Keys</span>
                            </button>
                            <button className="flex items-center gap-3 p-4 bg-zinc-50 border border-zinc-100 rounded-xl hover:border-zinc-300 transition-all group">
                                <Eye className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-zinc-950">Audit Active Sessions</span>
                            </button>
                            <button className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 transition-all group">
                                <Lock className="w-4 h-4 text-red-600" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Emergency Seal</span>
                            </button>
                        </div>
                    </div>

                    <div className="p-8 rounded-[--radius-extreme] bg-amber-50 border border-amber-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-4 text-amber-600">
                            <AlertTriangle className="w-4 h-4" />
                            <h4 className="text-[10px] font-black uppercase tracking-widest">Protocol Warning</h4>
                        </div>
                        <p className="text-xs font-bold text-amber-900/60 mb-6 leading-relaxed">2 Nodes are using deprecated TLS versions. Network isolation recommended until update.</p>
                        <button className="w-full py-3 bg-amber-500 text-white shadow-lg shadow-amber-500/20 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-amber-600 transition-all">
                            Review Vulnerability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
