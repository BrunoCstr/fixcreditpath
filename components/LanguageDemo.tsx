"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/i18n/translations";
import { Languages, Check } from "lucide-react";

export function LanguageDemo() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl max-w-sm"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 bg-[#D86C1F] rounded-full flex items-center justify-center">
          <Languages className="w-4 h-4 text-white" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">
            Sistema de Idiomas
          </h4>
          <p className="text-blue-200 text-xs">Sistema completo traduzido</p>
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={() => setLanguage("pt")}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
            language === "pt"
              ? "bg-[#4CAF50]/20 border border-[#4CAF50]/40"
              : "bg-white/5 hover:bg-white/10 border border-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-4 bg-gradient-to-b from-green-500 to-yellow-400 rounded-sm relative overflow-hidden">
              <div className="w-2 h-2 bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <span className="text-white text-sm font-medium">Português</span>
          </div>
          {language === "pt" && <Check className="w-4 h-4 text-[#4CAF50]" />}
        </button>

        <button
          onClick={() => setLanguage("en")}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
            language === "en"
              ? "bg-[#4CAF50]/20 border border-[#4CAF50]/40"
              : "bg-white/5 hover:bg-white/10 border border-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-4 bg-blue-600 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-white via-red-600 to-blue-600"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMEEzMTYxIi8+CjxwYXRoIGQ9Ik0wIDBoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjRWMTZIMHoiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3Qgd2lkdGg9IjkuNiIgaGVpZ2h0PSI4LjgiIGZpbGw9IiMwQTMxNjEiLz4KPC9zdmc+')]"></div>
            </div>
            <span className="text-white text-sm font-medium">English</span>
          </div>
          {language === "en" && <Check className="w-4 h-4 text-[#4CAF50]" />}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 p-3 bg-white/5 rounded-xl border border-white/10"
      >
        <p className="text-white text-xs font-medium mb-1">
          Exemplo de tradução:
        </p>
        <p className="text-blue-200 text-xs">"{t.hero.title}"</p>
      </motion.div>
    </motion.div>
  );
}
