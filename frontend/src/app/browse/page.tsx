"use client";

import { motion } from "framer-motion";
import { List, Search, Filter } from "lucide-react";

export default function BrowsePage() {
    return (
        <div className="min-h-screen p-8 pt-12 relative">
            <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                <motion.header
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                >
                    <div className="flex items-center gap-2">
                        <List className="text-white/40" size={16} />
                        <span className="text-white/40 uppercase font-black tracking-[0.4em] text-[10px]">Data Repository</span>
                    </div>
                    <h1 className="text-6xl font-black uppercase tracking-tighter italic">
                        Browse <span className="aurora-text">Archives</span>
                    </h1>
                </motion.header>

                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-aurora-cyan transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="SEARCH ARCHIVED PROTOCOLS..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-sm font-bold uppercase tracking-widest outline-none focus:border-aurora-cyan/30 transition-all placeholder:text-white/10"
                            />
                        </div>
                        <button className="px-8 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:border-white/20 transition-all">
                            <Filter size={16} /> Filters
                        </button>
                    </div>

                    <div className="grid gap-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-8 rounded-[2rem] cyber-glass border border-white/5 flex items-center justify-between group hover:border-aurora-cyan/20 transition-all">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-black uppercase italic tracking-tight">Stream_Archive_00{i}</h3>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-white/20">Analyzed 2.5h ago • Neural Hash: 0x{i}ab2</p>
                                </div>
                                <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all">
                                    Recall Data
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
