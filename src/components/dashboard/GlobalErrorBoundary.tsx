'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class GlobalErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('System Trace Exception:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-white/40 backdrop-blur-xl border border-zinc-200/50 rounded-[--radius-extreme] shadow-2xl">
                    <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                        <AlertCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-950 mb-3">Module Trace Fault</h2>
                    <p className="text-zinc-500 text-sm font-medium tracking-wide mb-8 max-w-md">
                        The neural link to this module has been interrupted. Re-synchronizing may restore the node&apos;s operational capacity.
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="flex items-center gap-3 px-8 py-3 bg-zinc-950 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-zinc-950/20 hover:scale-105 active:scale-95 transition-all"
                    >
                        <RefreshCcw className="w-4 h-4" />
                        Re-sync Node
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
