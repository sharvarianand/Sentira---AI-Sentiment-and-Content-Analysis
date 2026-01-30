"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Type,
    Mic,
    Video,
    Upload,
    Link as LinkIcon,
    Brain,
    ShieldAlert,
    Search,
    Activity,
    ArrowRight,
    Sparkles
} from "lucide-react";
import { useAnalysis } from "@/context/AnalysisContext";
import Link from "next/link";
import { BorderBeam } from "@/components/border-beam";

export default function PulsePage() {
    const { modality, setModality, content, setContent } = useAnalysis();

    return (
        <div className="min-h-screen p-6 pt-10 relative selection:bg-aurora-cyan/30">
            <div className="max-w-6xl mx-auto space-y-8 relative z-10">

                {/* Compact Header */}
                <motion.header
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="text-aurora-cyan" size={14} />
                            <span className="text-white/40 uppercase font-black tracking-[0.2em] text-[10px]">Neural Command</span>
                        </div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
                            Inbound <span className="aurora-text">Pulse</span>
                        </h1>
                    </div>
                </motion.header>

                {/* 1. Multimodal Input Card - Refined & Smaller */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl relative"
                >
                    <div className="p-6 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Activity className="text-aurora-cyan" size={18} />
                            <h2 className="text-sm font-black uppercase tracking-widest text-white/90">Multimodal Input</h2>
                        </div>

                        {/* Compact Modality Switcher (Image Inspired) */}
                        <div className="flex bg-white/5 p-1 rounded-xl items-center gap-1 border border-white/5">
                            <TabButton
                                icon={<Mic size={14} />}
                                label="Audio"
                                active={modality === "audio"}
                                onClick={() => setModality("audio")}
                                activeColor="rose"
                            />
                            <TabButton
                                icon={<Video size={14} />}
                                label="Video"
                                active={modality === "video"}
                                onClick={() => setModality("video")}
                                activeColor="blue"
                            />
                            <TabButton
                                icon={<Type size={14} />}
                                label="Text"
                                active={modality === "text"}
                                onClick={() => setModality("text")}
                                activeColor="cyan"
                            />
                        </div>
                    </div>

                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={modality}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                className="min-h-[220px]"
                            >
                                {modality === "text" && (
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Transcript Preview</p>
                                        <textarea
                                            value={content}
                                            onChange={(e) => setContent(e.target.value)}
                                            placeholder="Sample transcript or neural text for analysis..."
                                            className="w-full h-40 bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 text-sm font-medium text-white/60 outline-none focus:border-aurora-cyan/30 transition-all placeholder:text-white/5 resize-none scrollbar-hide"
                                        />
                                    </div>
                                )}
                                {modality === "audio" && (
                                    <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group">
                                        <div className="w-12 h-12 rounded-xl bg-aurora-rose/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Mic className="text-aurora-rose" size={24} />
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-widest text-white/30">Connect Audio Packet</p>
                                    </div>
                                )}
                                {modality === "video" && (
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Synchronize Stream</p>
                                            <div className="relative group">
                                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-aurora-blue transition-colors" size={14} />
                                                <input
                                                    type="text"
                                                    placeholder="URL IDENTIFIER..."
                                                    className="w-full bg-[#0d0d0d] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-xs font-bold text-white/60 outline-none focus:border-aurora-blue/30 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group">
                                            <Upload className="text-white/10 group-hover:text-aurora-blue mb-2 transition-colors" size={20} />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Drop Video Data</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* 3. Action Cards - Professional Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <DashboardActionCard
                        icon={<Brain className="text-aurora-cyan" size={20} />}
                        title="Sentiment Engine"
                        desc="Extract core emotional frequency and depth."
                        href="/sentiment-analysis"
                    />
                    <DashboardActionCard
                        icon={<ShieldAlert className="text-aurora-rose" size={20} />}
                        title="Bias Profiler"
                        desc="Identify framing and narrative skew protocols."
                        href="/detecting-bias"
                    />
                    <DashboardActionCard
                        icon={<Search className="text-aurora-blue" size={20} />}
                        title="Fact Validator"
                        desc="Verify claims against neural intelligence archives."
                        href="/reports"
                    />
                </div>
            </div>
        </div>
    );
}

function TabButton({ icon, label, active, onClick, activeColor }: { icon: any, label: string, active: boolean, onClick: () => void, activeColor: 'cyan' | 'rose' | 'blue' }) {
    const activeStyles = {
        cyan: "bg-aurora-cyan text-black shadow-lg shadow-aurora-cyan/20",
        rose: "bg-aurora-rose text-white shadow-lg shadow-aurora-rose/20",
        blue: "bg-aurora-blue text-white shadow-lg shadow-aurora-blue/20",
    }[activeColor];

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${active
                ? activeStyles
                : "text-white/30 hover:text-white/60 hover:bg-white/5"
                }`}
        >
            {icon} {label}
        </button>
    );
}

function DashboardActionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
    return (
        <Link href={href}>
            <motion.div
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.1)" }}
                className="p-6 rounded-3xl bg-[#0a0a0a]/80 border border-white/[0.03] space-y-4 group transition-all"
            >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    {icon}
                </div>
                <div>
                    <h3 className="text-sm font-black uppercase tracking-tight text-white/90 group-hover:text-white transition-colors">{title}</h3>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest leading-relaxed mt-1">{desc}</p>
                </div>
                <div className="flex justify-end pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={14} className="text-white/40" />
                </div>
            </motion.div>
        </Link>
    );
}
