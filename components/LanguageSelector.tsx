"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Languages } from "lucide-react";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/20 hover:border-white/40"
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm font-medium">
          {language === "pt" ? "PT" : "EN"}
        </span>
      </motion.button>

      {/* Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.2 },
        }}
        exit={{
          opacity: 0,
          y: 10,
          scale: 0.95,
          transition: { duration: 0.15 },
        }}
        className="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
      >
        <button
          onClick={() => setLanguage("pt")}
          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3 ${
            language === "pt"
              ? "bg-blue-50 text-[#1F2E5C] font-semibold"
              : "text-gray-700"
          }`}
        >
          <div className="w-6 h-4 bg-gradient-to-b from-green-500 to-yellow-400 rounded-sm flex items-center justify-center relative overflow-hidden">
            <div className="w-2 h-2 bg-blue-600 rounded-full absolute"></div>
          </div>
          <div>
            <div className="font-medium">Português</div>
            <div className="text-xs text-gray-500">Brasil</div>
          </div>
          {language === "pt" && (
            <div className="ml-auto w-2 h-2 bg-[#4CAF50] rounded-full"></div>
          )}
        </button>

        <button
          onClick={() => setLanguage("en")}
          className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3 ${
            language === "en"
              ? "bg-blue-50 text-[#1F2E5C] font-semibold"
              : "text-gray-700"
          }`}
        >
          <div className="w-6 h-4 bg-gradient-to-b from-blue-600 via-white to-red-600 rounded-sm flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-white via-red-600"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMEEzMTYxIi8+CjxwYXRoIGQ9Ik0wIDBoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjR2MS4yM0gwem0wIDIuNDZoMjRWMTZIMHoiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3Qgd2lkdGg9IjkuNiIgaGVpZ2h0PSI4LjgiIGZpbGw9IiMwQTMxNjEiLz4KPC9zdmc+')]"></div>
          </div>
          <div>
            <div className="font-medium">English</div>
            <div className="text-xs text-gray-500">United States</div>
          </div>
          {language === "en" && (
            <div className="ml-auto w-2 h-2 bg-[#4CAF50] rounded-full"></div>
          )}
        </button>
      </motion.div>
    </div>
  );
}
