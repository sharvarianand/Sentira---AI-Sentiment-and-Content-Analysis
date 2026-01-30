"use client";

import { motion } from "framer-motion";
import { Settings, Cpu, Shield, Globe } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="min-h-screen p-8 pt-12 relative">
            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                <motion.header
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                >
                    <div className="flex items-center gap-2">
                        <Settings className="text-white/40" size={16} />
                        <span className="text-white/40 uppercase font-black tracking-[0.4em] text-[10px]">Kernel Configuration</span>
                    </div>
                    <h1 className="text-6xl font-black uppercase tracking-tighter italic">
                        System <span className="aurora-text">Settings</span>
                    </h1>
                </motion.header>

                <div className="space-y-6">
                    <SettingSection icon={<Cpu size={20} />} title="Neural Processing" desc="Configure AI model precision and extraction depth.">
                        <SettingToggle label="Ultra-High Precision Mode" active={true} />
                        <SettingToggle label="Temporal Cache" active={false} />
                    </SettingSection>

                    <SettingSection icon={<Shield size={20} />} title="Security Matrix" desc="Manage API endpoints and verification protocols.">
                        <SettingToggle label="Encrypted Metadata" active={true} />
                        <SettingToggle label="Strict Bias Filters" active={true} />
                    </SettingSection>

                    <SettingSection icon={<Globe size={20} />} title="Global Sync" desc="Regional node synchronization and data propagation.">
                        <SettingToggle label="Real-time Stream Sync" active={true} />
                    </SettingSection>
                </div>
            </div>
        </div>
    );
}

function SettingSection({ icon, title, desc, children }: { icon: any, title: string, desc: string, children: React.ReactNode }) {
    return (
        <div className="p-10 rounded-[3rem] cyber-glass border border-white/5 space-y-8">
            <div className="flex justify-between items-start">
                <div className="space-y-2">
                    <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 text-aurora-cyan">{icon}</div> {title}
                    </h2>
                    <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{desc}</p>
                </div>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/5">
                {children}
            </div>
        </div>
    );
}

function SettingToggle({ label, active }: { label: string, active: boolean }) {
    return (
        <div className="flex items-center justify-between py-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{label}</span>
            <button className={`w-12 h-6 rounded-full p-1 transition-all ${active ? 'bg-aurora-cyan' : 'bg-white/10'}`}>
                <div className={`w-4 h-4 rounded-full bg-white transition-all ${active ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
        </div>
    );
}
