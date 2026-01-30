"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Search,
    Brain,
    ShieldAlert,
    TrendingUp,
    List,
    FileBarChart,
    Settings,
    LogOut
} from "lucide-react";
import { BorderBeam } from "./border-beam";
import BrandIcon from "./BrandIcon";
import { UserButton, SignOutButton } from "@clerk/nextjs";

const NAV_ITEMS = [
    { icon: <LayoutDashboard size={18} />, label: "Pulse", href: "/dashboard" },
    { icon: <Brain size={18} />, label: "Sentiment Analysis", href: "/sentiment-analysis" },
    { icon: <ShieldAlert size={18} />, label: "Detecting Bias", href: "/detecting-bias" },
    { icon: <TrendingUp size={18} />, label: "Trend Analysis", href: "/trend-analysis" },
    { icon: <List size={18} />, label: "Browse", href: "/browse" },
    { icon: <FileBarChart size={18} />, label: "Reports", href: "/reports" },
    { icon: <Settings size={18} />, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const isFullWidthPage = pathname === "/" || pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up") || pathname.startsWith("/docs");

    if (isFullWidthPage) return null;

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#030303] border-r border-white/5 z-50 flex flex-col p-6 overflow-hidden">

            {/* Branding */}
            <div className="flex items-center gap-3 py-6 mb-8 group">
                <BrandIcon size="md" />
                <span className="text-xl font-black tracking-tighter uppercase">
                    Sen<span className="aurora-text">tira</span>
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <div
                                className={`relative flex items-center group px-4 py-4 rounded-2xl transition-all duration-300 ${isActive
                                    ? "text-white bg-white/5"
                                    : "text-white/30 hover:text-white/60 hover:bg-white/5"
                                    }`}
                            >
                                {isActive && (
                                    <div
                                        className="absolute left-0 w-1 h-3/5 bg-aurora-cyan rounded-r-full shadow-[0_0_15px_#00f2fe]"
                                    />
                                )}
                                <div className={`mr-4 transition-colors ${isActive ? "text-aurora-cyan" : "group-hover:text-aurora-cyan"}`}>
                                    {item.icon}
                                </div>
                                <span className={`font-black tracking-[0.1em] text-[10px] uppercase`}>
                                    {item.label}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile Section */}
            <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center justify-between px-2 py-4">
                    <div className="flex items-center gap-3">
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "w-10 h-10 border border-white/10 rounded-xl hover:border-aurora-cyan/50 transition-all",
                                    userButtonTrigger: "focus:shadow-none hover:scale-105 active:scale-95 transition-all"
                                }
                            }}
                        />
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-widest text-white">Active Node</span>
                            <span className="text-[8px] font-bold uppercase text-white/20 tracking-tighter">Identity Verified</span>
                        </div>
                    </div>

                    <SignOutButton>
                        <button className="p-3 rounded-xl bg-white/5 border border-white/5 text-white/20 hover:text-aurora-rose hover:border-aurora-rose/20 transition-all cursor-pointer group">
                            <LogOut size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </SignOutButton>
                </div>
            </div>
        </aside>
    );
}
