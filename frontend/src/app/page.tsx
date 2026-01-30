"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Activity,
  Eye,
  Binary,
  Cpu,
  Globe
} from "lucide-react";
import { useRef } from "react";
import { BorderBeam } from "@/components/border-beam";
import BrandIcon from "@/components/BrandIcon";

import { GridScan } from "@/components/grid-scan";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen text-white">
      <GridScan
        scanColor="#ff0080"
        linesColor="#4facfe"
        gridScale={0.5}
        uTilt={-0.3}
        scanOpacity={0.7}
        scanGlow={2.5}
      />

      {/* Hero Refined Navbar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
        <div className="cyber-glass rounded-full px-8 py-4 flex justify-between items-center border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <BrandIcon size="sm" />
            <span className="text-xl font-black tracking-tighter uppercase">
              Sen<span className="aurora-text">tira</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-[10px] font-black uppercase tracking-widest text-white/40">
            <Link href="#tech" className="hover:text-aurora-cyan transition-colors">Technology</Link>
            <Link href="#features" className="hover:text-aurora-rose transition-colors">Protocol</Link>
            <Link href="/dashboard">
              <button className="px-5 py-2.5 bg-white text-black rounded-full font-black text-[9px] hover:scale-105 transition-all uppercase">
                Enterprise Portal
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-56">
        {/* Hero Section */}
        <section className="px-8 pb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-aurora-rose animate-ping"></div>
            <span>V2.0 Protocol Active</span>
            <div className="w-px h-3 bg-white/10"></div>
            <span className="text-aurora-cyan">Gemini 2.5 Enabled</span>
          </motion.div>

          <motion.h1
            style={{ y, opacity }}
            className="text-6xl md:text-[8rem] font-black leading-[0.9] tracking-tighter mb-12 uppercase italic"
          >
            Decoding<br />
            <span className="aurora-text">Sentiment.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/40 max-w-2xl font-medium leading-relaxed mb-16 px-4"
          >
            A high-fidelity multimodal framework for social media bias detection,
            driven by state-of-the-art AI temporal reasoning and narrative extraction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link href="/dashboard">
              <button className="relative px-12 py-6 bg-white text-black text-lg font-black rounded-2xl uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                Launch Console
              </button>
            </Link>
            <button className="px-10 py-6 cyber-glass border border-white/10 text-white font-black text-sm rounded-2xl uppercase tracking-widest hover:bg-white/5 transition-all">
              Documentation
            </button>
          </motion.div>
        </section>

        {/* Console Preview Area */}
        <section className="px-8 max-w-6xl mx-auto mb-48">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative rounded-[3rem] cyber-glass border border-white/10 p-4 aspect-video overflow-hidden shadow-2xl"
          >
            <BorderBeam size={400} duration={15} colorFrom="#00f2fe" colorTo="#ff0080" />
            <div className="w-full h-full bg-[#080808]/50 rounded-[2.5rem] flex flex-col items-center justify-center relative">
              <div className="absolute top-8 left-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <Cpu className="text-aurora-cyan/20 mb-4" size={64} />
              <p className="text-white/10 font-black tracking-[0.5em] uppercase text-xs">Waiting for Neural Uplink</p>
            </div>
          </motion.div>
        </section>

        {/* Tactical Features Grid */}
        <section id="tech" className="px-8 max-w-7xl mx-auto pb-48">
          <div className="grid md:grid-cols-4 gap-6">
            <TechCard
              icon={<ShieldCheck className="text-aurora-cyan" />}
              title="Bias Protocol"
              desc="Deep-layer detection of cherry-picked narratives and framing."
            />
            <TechCard
              icon={<Activity className="text-aurora-rose" />}
              title="Temporal Flow"
              desc="Real-time analysis of emotional peaks throughout source media."
            />
            <TechCard
              icon={<Eye className="text-aurora-blue" />}
              title="Visual Logic"
              desc="Decoding micro-expressions and manipulative camera framing."
            />
            <TechCard
              icon={<Globe className="text-white" />}
              title="Global Archive"
              desc="Cross-platform sentiment mining across digital ecosystems."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function TechCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="p-10 rounded-[2.5rem] cyber-glass border border-white/5 hover:border-aurora-cyan/20 transition-all group relative overflow-hidden"
    >
      <BorderBeam size={150} duration={10} colorFrom="#00f2fe" colorTo="transparent" />
      <div className="mb-8 p-4 rounded-xl bg-white/5 inline-block transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-black mb-3 uppercase tracking-tight italic">{title}</h3>
      <p className="text-xs text-white/40 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}
