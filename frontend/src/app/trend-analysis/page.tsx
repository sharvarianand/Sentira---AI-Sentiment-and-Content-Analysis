"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, BarChart3 } from "lucide-react";

export default function TrendAnalysisPage() {
    return (
        <div className="min-h-screen p-8 pt-12 relative">
            <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                <motion.header
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                >
                    <div className="flex items-center gap-2">
                        <TrendingUp className="text-aurora-blue" size={16} />
                        <span className="text-aurora-blue uppercase font-black tracking-[0.4em] text-[10px]">Ecosystem Monitoring</span>
                    </div>
                    <h1 className="text-6xl font-black uppercase tracking-tighter italic">
                        Trend <span className="aurora-text">Analysis</span>
                    </h1>
                </motion.header>

                <div className="p-12 rounded-[3rem] cyber-glass border border-white/10 bg-white/5 space-y-8 relative overflow-hidden">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black uppercase tracking-widest italic flex items-center gap-4">
                            <Globe size={24} className="text-aurora-blue" /> Global Narrative Velocity
                        </h2>
                        <p className="text-white/40 text-lg leading-relaxed font-medium">
                            Monitoring data packet propagation and emotional resonance cycles.
                        </p>
                    </div>

                    <div className="aspect-[21/9] rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden">
                        <div className="flex items-end gap-2 h-3/5 w-4/5">
                            {[40, 70, 45, 90, 65, 80, 50, 95, 30].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex-1 bg-gradient-to-t from-aurora-blue/10 to-aurora-blue/40 rounded-t-lg"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
