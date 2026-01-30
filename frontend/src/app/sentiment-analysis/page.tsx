"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Brain,
    Activity,
    Play,
    Clock,
    MessageSquare,
    User,
    AlertTriangle,
    Info,
    BarChart3,
    Maximize2,
    Volume2,
    ChevronRight,
    Zap,
    TrendingUp
} from "lucide-react";
import { useAnalysis } from "@/context/AnalysisContext";

// --- Mock Data Types ---
type Emotion = "Anger" | "Disgust" | "Horror" | "Humor" | "Sadness" | "Surprise";

interface TranscriptSegment {
    id: number;
    start: number;
    end: number;
    text: string;
    emotion?: Emotion;
}

interface CharacterAnalysis {
    id: string;
    name: string;
    dominantEmotion: Emotion;
    volatility: "Low" | "Medium" | "High";
    screenTime: number;
}

const MOCK_TRANSCRIPT: TranscriptSegment[] = [
    { id: 1, start: 0, end: 5, text: "I can't believe we managed to secure the funding for the project.", emotion: "Surprise" },
    { id: 2, start: 6, end: 12, text: "The board was extremely skeptical at first, but the results speak for themselves.", emotion: "Humor" },
    { id: 3, start: 13, end: 20, text: "Honestly, the amount of data we had to process was almost horrifying.", emotion: "Horror" },
    { id: 4, start: 21, end: 28, text: "If we hadn't automated the pipeline, we would still be stuck in phase one.", emotion: "Anger" },
];

const MOCK_CHARACTERS: CharacterAnalysis[] = [
    { id: "char_1", name: "Speaker Alpha", dominantEmotion: "Surprise", volatility: "Medium", screenTime: 82 },
    { id: "char_2", name: "Speaker Beta", dominantEmotion: "Sadness", volatility: "Low", screenTime: 18 },
];

export default function SentimentAnalysisPage() {
    const { content } = useAnalysis();
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration] = useState(30); // 30 second mock video

    // Sync Simulation
    useEffect(() => {
        let interval: any;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime(prev => (prev >= duration ? 0 : prev + 1));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, duration]);

    const seekTo = (time: number) => setCurrentTime(time);

    return (
        <div className="min-h-screen p-6 pt-10 relative selection:bg-aurora-cyan/30">
            <div className="max-w-[1600px] mx-auto space-y-6 relative z-10">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Brain className="text-aurora-cyan" size={14} />
                            <span className="text-white/40 uppercase font-black tracking-[0.2em] text-[10px]">Multimodal Extraction</span>
                        </div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
                            Sentiment <span className="aurora-text">Engine</span>
                        </h1>
                    </div>
                </motion.header>

                <div className="grid lg:grid-cols-12 gap-6">

                    {/* LEFT COLUMN: Video & Summary (4 Cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* 1. Video Playback Section */}
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden group relative aspect-[9/16] max-h-[700px]">
                            <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
                                <div className="text-center space-y-4">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-aurora-cyan/20 transition-all cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                                        {isPlaying ? <Volume2 className="text-aurora-cyan" /> : <Play fill="white" className="text-white" />}
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Vertical Stream Layer</p>
                                </div>
                            </div>

                            {/* Analytics Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 glass-dark rounded-2xl border border-white/10 z-20 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Clock size={14} className="text-aurora-cyan" />
                                    <span className="text-xs font-black tabular-nums">00:{currentTime.toString().padStart(2, '0')} / 00:30</span>
                                </div>
                                <Maximize2 size={14} className="text-white/20" />
                            </div>
                        </div>

                        {/* 5. Overall Sentiment Summary */}
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-white/30 flex items-center gap-2">
                                <BarChart3 size={12} /> Narrative Synthesis
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <SummaryBadge label="Primary" value="Surprise" color="cyan" />
                                <SummaryBadge label="Secondary" value="Humor" color="blue" />
                            </div>
                            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                                <div>
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">Confidence Index</p>
                                    <p className="text-xl font-black italic">94.2%</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">Global Category</p>
                                    <p className="text-sm font-black uppercase text-aurora-cyan">Positive/Alert</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Transcript & Detailed Analytics (8 Cols) */}
                    <div className="lg:col-span-8 space-y-6">

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 2. Transcript Alignment Panel */}
                            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] flex flex-col h-[500px]">
                                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                    <h2 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                        <MessageSquare size={14} className="text-aurora-cyan" /> Logged Transcript
                                    </h2>
                                    <span className="text-[9px] font-black text-white/20 uppercase">Synced</span>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                                    {MOCK_TRANSCRIPT.map((seg) => (
                                        <div
                                            key={seg.id}
                                            onClick={() => seekTo(seg.start)}
                                            className={`p-4 rounded-xl transition-all cursor-pointer border ${currentTime >= seg.start && currentTime <= seg.end
                                                ? "bg-white/5 border-aurora-cyan/30"
                                                : "border-transparent hover:bg-white/[0.02]"
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[9px] font-black text-white/20 tabular-nums">00:{seg.start.toString().padStart(2, '0')} - 00:{seg.end.toString().padStart(2, '0')}</span>
                                                {seg.emotion && (
                                                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 ${getEmotionColor(seg.emotion)}`}>
                                                        {seg.emotion}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm font-medium leading-relaxed text-white/70">{seg.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 3. Emotion Seismograph Section */}
                            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 space-y-6 h-[500px] overflow-hidden">
                                <h2 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                    <Activity size={14} className="text-aurora-cyan" /> Neural Seismograph
                                </h2>
                                <div className="grid grid-cols-2 gap-4 h-full overflow-y-auto pr-2 scrollbar-hide pb-12">
                                    <Seismograph label="Anger" color="rose" active={currentTime % 8 === 0} />
                                    <Seismograph label="Disgust" color="blue" active={currentTime % 10 === 0} />
                                    <Seismograph label="Horror" color="purple" active={currentTime % 12 === 0} />
                                    <Seismograph label="Humor" color="cyan" active={currentTime % 5 === 0} />
                                    <Seismograph label="Sadness" color="blue" active={currentTime % 15 === 0} />
                                    <Seismograph label="Surprise" color="cyan" active={currentTime % 4 === 0} />
                                </div>
                            </div>
                        </div>

                        {/* 4. Temporal Emotion Timeline */}
                        <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 space-y-4">
                            <h2 className="text-[10px] font-black uppercase tracking-widest text-white/30">Dominance Timeline</h2>
                            <div className="relative h-12 w-full bg-white/5 rounded-xl overflow-hidden flex cursor-pointer">
                                {/* Segmented Mock Timeline */}
                                <TimelineSegment color="bg-aurora-cyan" width="20%" label="Surprise" onClick={() => seekTo(0)} active={currentTime < 6} />
                                <TimelineSegment color="bg-aurora-blue" width="25%" label="Humor" onClick={() => seekTo(6)} active={currentTime >= 6 && currentTime < 13} />
                                <TimelineSegment color="bg-purple-500" width="25%" label="Horror" onClick={() => seekTo(13)} active={currentTime >= 13 && currentTime < 21} />
                                <TimelineSegment color="bg-aurora-rose" width="30%" label="Anger" onClick={() => seekTo(21)} active={currentTime >= 21} />

                                {/* Playhead */}
                                <motion.div
                                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_#fff] z-10"
                                    animate={{ left: `${(currentTime / duration) * 100}%` }}
                                    transition={{ ease: "linear", duration: 0.5 }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {/* 6. Character-Level Expression Analysis */}
                            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                    <User size={14} className="text-aurora-cyan" /> Facial Expression Map
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {MOCK_CHARACTERS.map(char => (
                                        <div key={char.id} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl flex justify-between items-center group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-aurora-cyan/10 flex items-center justify-center border border-aurora-cyan/20">
                                                    <User size={20} className="text-aurora-cyan" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black uppercase italic">{char.name}</p>
                                                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">S-TIME: {char.screenTime}%</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className={`text-[9px] font-black uppercase ${getEmotionColor(char.dominantEmotion)}`}>{char.dominantEmotion}</p>
                                                <p className="text-[8px] font-bold text-white/20 uppercase">VOLATILITY: {char.volatility}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 8. Explainability Disclaimer */}
                        <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-[2rem]">
                            <Info size={18} className="text-white/20 mt-1 shrink-0" />
                            <p className="text-[11px] leading-relaxed text-white/30 font-medium font-display">
                                <span className="text-white/60 font-black uppercase tracking-widest">Transparency Protocol:</span> All emotional signals detected are strictly derived from high-fidelity
                                machine learning analysis of pixel volatility (facial landmarks) and acoustic frequency logs. Sentira does not infer
                                intent, personality traits, or sensitive demographic data. All insights are timestamp-locked to specific observable cues within the media packet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SummaryBadge({ label, value, color }: { label: string, value: string, color: 'cyan' | 'blue' | 'rose' }) {
    const colors = {
        cyan: "text-aurora-cyan border-aurora-cyan/20 bg-aurora-cyan/5",
        blue: "text-aurora-blue border-aurora-blue/20 bg-aurora-blue/5",
        rose: "text-aurora-rose border-aurora-rose/20 bg-aurora-rose/5",
    };
    return (
        <div className={`p-4 rounded-2xl border ${colors[color]} space-y-1`}>
            <p className="text-[8px] font-black uppercase tracking-widest opacity-50">{label}</p>
            <p className="text-sm font-black uppercase italic">{value}</p>
        </div>
    );
}

function Seismograph({ label, color, active }: { label: string, color: string, active: boolean }) {
    const bars = [10, 40, 20, 80, 50, 30, 90, 40, 60, 20];
    return (
        <div className="p-4 bg-white/5 border border-white/5 rounded-2xl space-y-3">
            <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
                <TrendingUp size={10} className={active ? "text-aurora-cyan animate-pulse" : "text-white/10"} />
            </div>
            <div className="h-10 flex items-end gap-1 px-1">
                {bars.map((h, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: active ? `${h}%` : "10%" }}
                        className={`flex-1 rounded-t-sm ${color === 'rose' ? 'bg-aurora-rose/40' : color === 'blue' ? 'bg-aurora-blue/40' : 'bg-aurora-cyan/40'}`}
                    />
                ))}
            </div>
        </div>
    );
}

function TimelineSegment({ color, width, label, onClick, active }: { color: string, width: string, label: string, onClick: () => void, active: boolean }) {
    return (
        <div
            onClick={onClick}
            style={{ width }}
            className={`h-full relative group transition-all ${color} ${active ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
        >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <span className="text-[8px] font-black uppercase tracking-widest text-white shadow-xl">{label}</span>
            </div>
        </div>
    );
}

function getEmotionColor(emotion: Emotion): string {
    switch (emotion) {
        case "Anger": return "text-aurora-rose";
        case "Surprise": return "text-aurora-cyan";
        case "Humor": return "text-aurora-blue";
        case "Sadness": return "text-blue-400";
        case "Horror": return "text-purple-500";
        case "Disgust": return "text-green-500";
        default: return "text-white";
    }
}
