"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[#030303] flex flex-col items-center justify-center z-[9999]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aurora-rose/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aurora-cyan/5 blur-[120px] rounded-full"></div>

            <div className="relative flex flex-col items-center gap-8">
                <div className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 rounded-full border border-dashed border-aurora-cyan/30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu className="text-aurora-cyan animate-pulse" size={32} />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-xl font-black uppercase tracking-[0.3em] italic">
                        Neural <span className="aurora-text">Pulse</span>
                    </h2>
                    <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-aurora-cyan to-transparent"
                        />
                    </div>
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 animate-pulse">
                        Synchronizing Intelligence Layers...
                    </p>
                </div>
            </div>
        </div>
    );
}
