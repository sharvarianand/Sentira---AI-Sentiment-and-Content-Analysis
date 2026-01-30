"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { AnalysisProvider } from "@/context/AnalysisContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <AnalysisProvider>
                {children}
            </AnalysisProvider>
        </ClerkProvider>
    );
}
