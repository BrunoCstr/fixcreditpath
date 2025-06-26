"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en";
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("fixpath-language") as Language;
    if (saved === "pt" || saved === "en") setLanguageState(saved);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("fixpath-language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
} 