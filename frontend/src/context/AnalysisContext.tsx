"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Modality = "text" | "audio" | "video";

interface AnalysisContextType {
    modality: Modality;
    setModality: (m: Modality) => void;
    content: string;
    setContent: (c: string) => void;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: React.ReactNode }) {
    const [modality, setModality] = useState<Modality>("text");
    const [content, setContent] = useState<string>("");

    // Simple persistence for the session
    useEffect(() => {
        const savedModality = localStorage.getItem("sentira_modality");
        const savedContent = localStorage.getItem("sentira_content");
        if (savedModality) setModality(savedModality as Modality);
        if (savedContent) setContent(savedContent);
    }, []);

    const updateModality = (m: Modality) => {
        setModality(m);
        localStorage.setItem("sentira_modality", m);
    };

    const updateContent = (c: string) => {
        setContent(c);
        localStorage.setItem("sentira_content", c);
    };

    const value = React.useMemo(() => ({
        modality,
        setModality: updateModality,
        content,
        setContent: updateContent
    }), [modality, content]);

    return (
        <AnalysisContext.Provider value={value}>
            {children}
        </AnalysisContext.Provider>
    );
}

export function useAnalysis() {
    const context = useContext(AnalysisContext);
    if (context === undefined) {
        throw new Error("useAnalysis must be used within an AnalysisProvider");
    }
    return context;
}
