"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldAlert,
    Eye,
    Target,
    Scale,
    AlertTriangle,
    Info,
    Activity,
    Lock,
    Zap,
    X,
    Map as MapIcon,
    ChevronRight,
    Globe
} from "lucide-react";
import { useAnalysis } from "@/context/AnalysisContext";

// --- Mock Bias Data ---
const BIAS_CATEGORIES = [
    {
        id: "cultural",
        label: "Cultural Bias",
        status: "Detected",
        strength: "Medium",
        percent: 62,
        desc: "Regional narrative framing with limited global socio-contextual representation."
    },
    {
        id: "sensitivity",
        label: "Sensitivity Bias",
        status: "Not Detected",
        strength: "Low",
        percent: 12,
        desc: "Content adheres to standard non-inflammatory sensitivity protocols."
    },
    {
        id: "emotional",
        label: "Emotional over-representation",
        status: "Detected",
        strength: "High",
        percent: 88,
        desc: "Significant reliance on high-intensity emotional markers to drive narrative weight."
    },
    {
        id: "framing",
        label: "Narrative Framing",
        status: "Detected",
        strength: "Medium",
        percent: 54,
        desc: "Selective inclusion of supporting visual data points to reinforce specific conclusions."
    }
];

const EMOTION_DISTRIBUTION = [
    { label: "Negative", value: 46, color: "bg-aurora-blue" },
    { label: "Neutral", value: 34, color: "bg-white/10" },
    { label: "Positive", value: 20, color: "bg-aurora-cyan" },
];

const PROTOCOL_CONFLICTS = [
    { category: "Emotional Manipulation", level: "High Risk", desc: "Frequent use of horror-based facial markers in an educational/informational setting." },
    { category: "Sensitivity Violation", level: "Clear", desc: "References to culturally specific identifiers without proper contextual neutralizers." }
];

// --- Simplified India SVG Path Data (Mini Regions) ---
const INDIA_REGIONS = [
    { name: "North", path: "M 50,10 L 80,40 L 60,60 L 30,50 Z", bias: 78 },
    { name: "Central", path: "M 30,50 L 60,60 L 70,100 L 20,90 Z", bias: 42 },
    { name: "South", path: "M 20,90 L 70,100 L 60,150 L 30,140 Z", bias: 15 },
    { name: "West", path: "M 30,50 L 20,90 L 5,100 L 10,40 Z", bias: 55 },
    { name: "East", path: "M 60,60 L 100,60 L 110,100 L 70,100 Z", bias: 89 },
];

export default function DetectingBiasPage() {
    const { content } = useAnalysis();
    const [showMap, setShowMap] = useState(false);

    return (
        <div className="min-h-screen p-6 pt-10 relative selection:bg-aurora-cyan/30 text-white">
            <div className="max-w-7xl mx-auto space-y-8 relative z-10">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <ShieldAlert className="text-aurora-cyan" size={14} />
                            <span className="text-white/40 uppercase font-black tracking-[0.2em] text-[10px]">Narrative Security Matrix</span>
                        </div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
                            Detecting <span className="aurora-text">Bias</span>
                        </h1>
                    </div>
                </motion.header>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Metadata & Risk Indicator (4 Cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* 1. Video Context Section */}
                        <div className="bg-[#050505] border border-white/5 rounded-[2.5rem] overflow-hidden group">
                            <div className="aspect-video bg-[#020202] relative flex items-center justify-center">
                                <Lock size={32} className="text-white/5 group-hover:text-aurora-cyan/20 transition-all" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-aurora-cyan mb-1">Source Context</p>
                                    <h3 className="text-xs font-black uppercase tracking-tight truncate">Multi-Regional Narrative Analysis.mp4</h3>
                                </div>
                            </div>
                        </div>

                        {/* 2. Overall Bias Risk Level */}
                        <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Target size={120} className="text-aurora-blue" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white/30 italic">Bias Index Protocol</h3>
                                <div className="flex items-end gap-3">
                                    <span className="text-6xl font-black uppercase tracking-tighter italic text-aurora-blue">74.2%</span>
                                    <span className="text-[10px] font-black text-aurora-cyan uppercase pb-3 tracking-widest font-display">High Risk</span>
                                </div>
                            </div>
                            <p className="text-sm font-medium text-white/50 leading-relaxed border-t border-white/5 pt-6 font-display">
                                Narrative skew detected through extreme sentiment clustering and selective contextual omission.
                            </p>
                            <div className="flex items-center gap-2 text-[10px] font-black text-aurora-cyan uppercase tracking-widest">
                                <Zap size={14} /> Critical Multi-Signal Drift detected
                            </div>
                        </div>

                        {/* 8. Confidence & Transparency */}
                        <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4">
                            <div className="flex justify-between items-center text-white/60">
                                <span className="text-[10px] font-black uppercase tracking-widest">Protocol Confidence</span>
                                <span className="text-xs font-black">88.4%</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-aurora-blue to-aurora-cyan"
                                    initial={{ width: 0 }}
                                    animate={{ width: "88.4%" }}
                                />
                            </div>
                            <p className="text-[9px] leading-relaxed text-white/20 font-bold uppercase tracking-tighter">
                                Bias assessment is based on high-level multimodal signal aggregates.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Detailed Bias Layers (8 Cols) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* 3. Bias Type Overview */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {BIAS_CATEGORIES.map(category => (
                                <div
                                    key={category.id}
                                    onClick={() => category.id === 'cultural' && setShowMap(true)}
                                    className={`p-6 bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-3xl transition-all group relative overflow-hidden ${category.id === 'cultural' ? 'cursor-pointer hover:border-aurora-cyan/30' : 'cursor-default hover:border-white/20'}`}
                                >
                                    {category.id === 'cultural' && (
                                        <div className="absolute top-2 right-2 p-2 bg-aurora-cyan/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            <MapIcon size={12} className="text-aurora-cyan" />
                                        </div>
                                    )}
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/90">{category.label}</h4>
                                        <div className="flex flex-col items-end gap-1">
                                            <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase border border-white/5 ${category.strength === 'High' ? 'bg-aurora-blue/20 text-aurora-blue' : 'bg-white/5 text-white/40'}`}>
                                                {category.strength} Strength
                                            </div>
                                            <span className={`text-lg font-black italic ${category.strength === 'High' ? 'text-aurora-blue' : 'text-white/60'}`}>{category.percent}%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-1.5 h-1.5 rounded-full ${category.status === 'Detected' ? 'bg-aurora-cyan animate-pulse' : 'bg-white/10'}`}></div>
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${category.status === 'Detected' ? 'text-white' : 'text-white/20'}`}>
                                            {category.status}
                                        </span>
                                    </div>
                                    <p className="text-xs font-medium text-white/40 leading-relaxed italic">{category.desc}</p>

                                    {category.id === 'cultural' && (
                                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-aurora-cyan opacity-0 group-hover:opacity-100 transition-all">
                                            <span>Visualize Heatmap</span>
                                            <ChevronRight size={10} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* 4. Neural Risk Vectors */}
                        <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3">
                                    <Activity size={18} className="text-aurora-blue" /> Neural Risk Vectors
                                </h3>
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Sentiment Bias Scopes</span>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <RiskVector label="Negative Skew" value="High" color="blue" percent={46} />
                                <RiskVector label="Neutrality" value="Low" color="white" percent={34} />
                                <RiskVector label="Positive Lean" value="Med" color="cyan" percent={20} />
                            </div>

                            <div className="space-y-6">
                                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden flex">
                                    {EMOTION_DISTRIBUTION.map((e, i) => (
                                        <motion.div
                                            key={i}
                                            className={e.color}
                                            style={{ width: `${e.value}%` }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        />
                                    ))}
                                </div>
                                <div className="p-4 bg-aurora-blue/5 border border-aurora-blue/10 rounded-2xl">
                                    <p className="text-xs font-medium text-white/70 italic leading-relaxed">
                                        Negative risk vectors account for <span className="text-aurora-blue font-black">46%</span> of detected signals. Neutrality remains constrained.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 space-y-6">
                                <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3">
                                    <Scale size={18} className="text-aurora-blue" /> Policy Conflicts
                                </h3>
                                <div className="space-y-4">
                                    {PROTOCOL_CONFLICTS.map((p, i) => (
                                        <div key={i} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/90">{p.category}</span>
                                                <span className="text-[8px] font-black px-2 py-0.5 rounded bg-aurora-blue/20 text-aurora-blue uppercase">{p.level}</span>
                                            </div>
                                            <p className="text-[11px] font-medium text-white/40 italic leading-relaxed">{p.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 space-y-6">
                                <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3 text-white">
                                    <Eye size={18} className="text-aurora-cyan" /> Evidence Matrix
                                </h3>
                                <div className="space-y-6 text-white/60 font-display">
                                    <EvidenceLine label="Language Saturation" value="Heavily Loaded" />
                                    <EvidenceLine label="Visual Framing" value="Perspective-Locked" />
                                    <EvidenceLine label="Emotional Velocity" value="Volatile" />
                                    <div className="pt-4 flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <Info size={16} className="text-white/40" />
                                        <p className="text-[10px] font-medium text-white/20 leading-relaxed uppercase tracking-tight">
                                            Assessment calibrated against high-level narrative pattern archives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* India Heatmap Modal */}
            <AnimatePresence>
                {showMap && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-black/90 backdrop-blur-2xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#050505] border border-white/10 rounded-[3rem] p-12 max-w-5xl w-full relative overflow-hidden"
                        >
                            <button
                                onClick={() => setShowMap(false)}
                                className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"
                            >
                                <X size={32} />
                            </button>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <Globe className="text-aurora-cyan" size={24} />
                                        <h2 className="text-4xl font-black uppercase tracking-tighter italic">Regional <span className="aurora-text">Heatmap</span></h2>
                                    </div>
                                    <p className="text-lg text-white/40 font-medium leading-relaxed">
                                        Multimodal analysis of cultural sentiment bias across the Indian subcontinent. Data is aggregated from regional narrative extraction logs.
                                    </p>
                                    <div className="space-y-4 pt-6 border-t border-white/5">
                                        {INDIA_REGIONS.map(region => (
                                            <div key={region.name} className="flex items-center justify-between group">
                                                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">{region.name} Region</span>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${region.bias}%` }}
                                                            className={`h-full ${region.bias > 80 ? 'bg-aurora-blue' : region.bias > 50 ? 'bg-aurora-cyan' : 'bg-white/20'}`}
                                                        />
                                                    </div>
                                                    <span className="text-xs font-black italic w-8 text-right tabulation-nums">{region.bias}%</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* India SVG Heatmap */}
                                <div className="relative aspect-square flex items-center justify-center">
                                    <svg viewBox="0 0 120 160" className="w-full h-full drop-shadow-[0_0_50px_rgba(0,183,255,0.1)]">
                                        {INDIA_REGIONS.map(region => (
                                            <motion.path
                                                key={region.name}
                                                d={region.path}
                                                initial={{ opacity: 0, pathLength: 0 }}
                                                animate={{ opacity: 1, pathLength: 1 }}
                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                                className={`transition-colors duration-500 cursor-pointer ${region.bias > 80 ? 'fill-aurora-blue/40 stroke-aurora-blue' :
                                                    region.bias > 50 ? 'fill-aurora-cyan/30 stroke-aurora-cyan' :
                                                        'fill-white/5 stroke-white/20'
                                                    }`}
                                                strokeWidth="0.5"
                                                whileHover={{ scale: 1.02, fillOpacity: 0.6 }}
                                            />
                                        ))}
                                    </svg>
                                    {/* Pulse points */}
                                    <div className="absolute top-[20%] left-[55%] w-2 h-2 rounded-full bg-aurora-blue animate-ping" />
                                    <div className="absolute bottom-[40%] right-[30%] w-2 h-2 rounded-full bg-aurora-cyan animate-ping" style={{ animationDelay: '0.5s' }} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function EvidenceLine({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{label}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/80 italic">{value}</span>
        </div>
    );
}

function RiskVector({ label, value, color, percent }: { label: string, value: string, color: 'rose' | 'cyan' | 'blue' | 'white', percent: number }) {
    const textColor = color === 'rose' ? 'text-aurora-rose' : color === 'cyan' ? 'text-aurora-cyan' : color === 'blue' ? 'text-aurora-blue' : 'text-white/60';
    const bgColor = color === 'rose' ? 'bg-aurora-rose/10' : color === 'cyan' ? 'bg-aurora-cyan/10' : color === 'blue' ? 'bg-aurora-blue/10' : 'bg-white/5';
    return (
        <div className={`p-4 rounded-2xl ${bgColor} border border-white/5 space-y-1 group hover:border-white/10 transition-all`}>
            <p className="text-[8px] font-black uppercase tracking-widest text-white/30">{label}</p>
            <div className="flex justify-between items-end">
                <p className={`text-xl font-black italic ${textColor}`}>{value}</p>
                <p className="text-[10px] font-bold text-white/40 tabular-nums">{percent}%</p>
            </div>
        </div>
    );
}
