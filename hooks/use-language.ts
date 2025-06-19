"use client";

import { useState, useEffect } from "react";

type Language = "pt" | "en";

export function useLanguage(defaultLanguage: Language = "pt") {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("fixpath-language") as Language;
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference when it changes
  const updateLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("fixpath-language", newLanguage);
  };

  return { language, setLanguage: updateLanguage };
}
