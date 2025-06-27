"use client";

import { translations } from "@/i18n/translations";

export function useLanguage() {
  return {
    language: "en" as const,
    setLanguage: () => {}, // Função vazia para manter compatibilidade
    t: translations
  };
}
