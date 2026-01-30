"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BrandIcon from "@/components/BrandIcon";
import { ArrowLeft, BookOpen, Terminal, Code } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-[#030303] text-white p-8 md:p-24 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-aurora-rose/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-aurora-cyan/5 blur-[120px] rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-4xl mx-auto space-y-20 relative z-10"
            >
                {/* Header */}
                <div className="flex flex-col md:row justify-between items-start md:items-center gap-8">
                    <Link href="/">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <BrandIcon size="md" />
                            <h1 className="text-2xl font-black italic tracking-tighter uppercase font-display">
                                Sen<span className="aurora-text">tira</span>
                            </h1>
                        </div>
                    </Link>
                    <Link href="/sign-in">
                        <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
                            Initialize Protocol
                        </button>
                    </Link>
                </div>

                {/* Content */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-aurora-cyan">
                            <BookOpen size={24} />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Documentation Hub</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            System <span className="aurora-text">Directives</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <DocCard
                            icon={<Terminal size={24} />}
                            title="Quick Start"
                            desc="How to initialize your first content scan through the Neural Uplink gateway."
                        />
                        <DocCard
                            icon={<Code size={24} />}
                            title="API Spec"
                            desc="Comprehensive guide to the Sentira REST API and websocket synchronization."
                        />
                    </div>

                    <div className="p-12 rounded-[3rem] cyber-glass border border-white/10 bg-white/5 space-y-6">
                        <h3 className="text-xl font-black uppercase italic tracking-widest text-aurora-rose">Status: Drafting</h3>
                        <p className="text-white/40 text-lg leading-relaxed font-medium">
                            The Sentira Intelligence framework documentation is currently being compiled.
                            Our neural network is extracting the core logic protocols to provide you with a high-fidelity integration guide.
                        </p>
                    </div>
                </div>

                {/* Back Link */}
                <Link href="/">
                    <motion.div
                        whileHover={{ x: -5 }}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors cursor-pointer inline-flex"
                    >
                        <ArrowLeft size={14} /> Escape to Home
                    </motion.div>
                </Link>
            </motion.div>
        </div>
    );
}

function DocCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-aurora-cyan/20 transition-all group">
            <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block text-aurora-cyan group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h4 className="text-lg font-black uppercase tracking-tight italic mb-3">{title}</h4>
            <p className="text-xs text-white/30 font-medium leading-relaxed">{desc}</p>
        </div>
    );
}
