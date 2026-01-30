"use client";

import { motion } from "framer-motion";
import {
    Plus,
    ArrowUpRight,
    Activity,
    Zap,
    ShieldAlert,
    FileText,
    Clock,
    ExternalLink,
    Cpu
} from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "@/components/border-beam";

export default function Dashboard() {
    return (
        <div className="min-h-screen p-6 pt-12 relative">
            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                {/* Dashboard Header */}
                <motion.header
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-between items-end"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-aurora-cyan uppercase font-black tracking-[0.4em] text-[10px]">Command Center</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-aurora-cyan shadow-[0_0_8px_#00f2fe]"></div>
                        </div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter italic">
                            Inbound <span className="aurora-text">Pulse</span>
                        </h1>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/analyze" className="px-8 py-4 cyber-glass rounded-2xl flex items-center gap-3 text-xs font-black uppercase tracking-widest hover:border-aurora-cyan/30 transition-all">
                            <Plus size={18} className="text-aurora-cyan" /> New Neural Scan
                        </Link>
                    </motion.div>
                </motion.header>

                {/* Real-time Status Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatusCard label="Neural Thruput" value="1.2 GB/s" trend="Optimal" icon={<Activity className="text-aurora-cyan" />} color="cyan" />
                    <StatusCard label="Scan Queue" value="42" trend="+12%" icon={<Zap className="text-aurora-rose" size={20} />} color="rose" />
                    <StatusCard label="Anomalies Found" value="08" trend="Critical" icon={<ShieldAlert className="text-yellow-400" size={20} />} color="yellow" />
                    <StatusCard label="System Load" value="14%" trend="Stable" icon={<Cpu className="text-aurora-blue" size={20} />} color="blue" />
                </div>

                {/* Main Interface Layout */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 p-10 rounded-[3rem] cyber-glass border border-white/5 space-y-12 h-[600px] flex flex-col relative overflow-hidden"
                    >
                        <BorderBeam size={400} duration={15} colorFrom="#00f2fe" colorTo="#4facfe" />
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                                <div className="w-2 h-8 bg-aurora-cyan rounded-full"></div> Global Sentiment Flux
                            </h2>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 flex flex-col justify-end gap-1">
                                {[60, 40, 80, 50, 70, 90, 65, 85, 45, 75].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: 0.5 + i * 0.05, duration: 1 }}
                                        className="w-full bg-gradient-to-t from-aurora-cyan/5 to-aurora-cyan/20 rounded-t-lg border-x border-white/5"
                                        style={{ position: 'absolute', bottom: 0, left: `${i * 10}%`, width: '8%' }}
                                    />
                                ))}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-px bg-white/10"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-8 rounded-[3rem] cyber-glass border border-white/5 flex flex-col h-[600px]"
                    >
                        <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3 mb-8">
                            <Clock className="text-aurora-rose" size={20} /> Protocol Logs
                        </h2>
                        <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="group relative flex gap-6 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/20 group-hover:text-aurora-cyan transition-colors">
                                        <FileText size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-black uppercase tracking-tight text-white/80">Stream_{i * 123} Decoded</p>
                                        <p className="text-[8px] uppercase text-white/20 mt-1">12m ago • Node Beta-7</p>
                                    </div>
                                    <ExternalLink size={12} className="ml-auto text-white/10 group-hover:text-white transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function StatusCard({ label, value, trend, icon, color }: { label: string, value: string, trend: string, icon: React.ReactNode, color: 'cyan' | 'rose' | 'yellow' | 'blue' }) {
    const colorMap = {
        cyan: 'text-aurora-cyan',
        rose: 'text-aurora-rose',
        yellow: 'text-yellow-400',
        blue: 'text-aurora-blue',
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2.5rem] cyber-glass border border-white/5 group relative overflow-hidden"
        >
            <BorderBeam size={150} duration={10} colorFrom={colorMap[color].split('-').pop()?.includes('cyan') ? '#00f2fe' : '#ff0080'} colorTo="transparent" />
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">{icon}</div>
                <span className={`text-[9px] font-black uppercase tracking-widest ${colorMap[color]}`}>{trend}</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">{label}</p>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">{value}</h3>
        </motion.div>
    );
}
