"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScoreLevel {
  id: string;
  name: string;
  range: string;
  color: string;
  gradient: string;
  description: string;
  savings: {
    monthly: number;
    yearly: number;
    thirtyYear: number;
  };
  benefits: string[];
  icon: string;
}

const scoreLevels: ScoreLevel[] = [
  {
    id: "ruim",
    name: "Ruim",
    range: "300-549",
    color: "#ef4444",
    gradient: "from-red-500 to-red-600",
    description: "Score baixo limita suas opções e aumenta custos",
    savings: {
      monthly: 0,
      yearly: 0,
      thirtyYear: 0,
    },
    benefits: [
      "Taxas de juros muito altas",
      "Dificuldade para obter crédito",
      "Necessidade de garantias",
    ],
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z",
  },
  {
    id: "medio",
    name: "Médio",
    range: "550-649",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500",
    description: "Score regular com oportunidades de melhoria",
    savings: {
      monthly: 450,
      yearly: 5400,
      thirtyYear: 162000,
    },
    benefits: [
      "Acesso a mais opções de crédito",
      "Taxas de juros moderadas",
      "Aprovações mais frequentes",
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "bom",
    name: "Bom",
    range: "650-749",
    color: "#10b981",
    gradient: "from-emerald-500 to-green-600",
    description: "Score bom oferece vantagens significativas",
    savings: {
      monthly: 850,
      yearly: 10200,
      thirtyYear: 306000,
    },
    benefits: [
      "Taxas de juros competitivas",
      "Aprovações rápidas",
      "Limite de crédito maior",
    ],
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "excelente",
    name: "Excelente",
    range: "750+",
    color: "#3b82f6",
    gradient: "from-blue-500 to-indigo-600",
    description: "Score excelente garante as melhores condições",
    savings: {
      monthly: 1200,
      yearly: 14400,
      thirtyYear: 432000,
    },
    benefits: [
      "Melhores taxas do mercado",
      "Aprovação garantida",
      "Produtos exclusivos",
    ],
    icon: "M5 3l14 9-14 9V3z",
  },
];

export default function CreditScoreSavingsSimulator() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSliderChange = (value: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentLevel(value);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const currentScore = scoreLevels[currentLevel];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mx-auto max-w-5xl"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] text-white p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
            Simulador de Economia
          </h3>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed">
            Descubra quanto você pode economizar com um score melhor
          </p>
        </motion.div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        {/* Score Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8"
        >
          <label className="block text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
            Selecione seu nível de score atual:
          </label>

          {/* Custom Slider */}
          <div className="relative">
            <input
              type="range"
              min={0}
              max={3}
              value={currentLevel}
              onChange={(e) => handleSliderChange(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />

            {/* Score Labels */}
            <div className="grid grid-cols-2 sm:flex sm:justify-between gap-2 sm:gap-1 mt-3 sm:mt-2">
              {scoreLevels.map((level, index) => (
                <motion.button
                  key={level.id}
                  onClick={() => handleSliderChange(index)}
                  className={`px-2 sm:px-3 py-2 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium ${
                    currentLevel === index
                      ? "text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                  style={{
                    backgroundColor:
                      currentLevel === index ? level.color : "transparent",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {level.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Current Score Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScore.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Score Info */}
            <div className="space-y-4 sm:space-y-6">
              <div
                className={`bg-gradient-to-r ${currentScore.gradient} text-white rounded-xl sm:rounded-2xl p-4 sm:p-6`}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={currentScore.icon}
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold">
                      {currentScore.name}
                    </h4>
                    <p className="text-white/80 text-sm sm:text-base">
                      Score: {currentScore.range}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {currentScore.description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h5 className="text-base sm:text-lg font-semibold text-gray-700 mb-3">
                  {currentScore.id === "ruim" ? "Limitações:" : "Benefícios:"}
                </h5>
                <ul className="space-y-2">
                  {currentScore.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start text-gray-600 text-sm sm:text-base"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                          currentScore.id === "ruim"
                            ? "bg-red-400"
                            : "bg-green-400"
                        }`}
                      />
                      <span className="leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Savings Display */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center">
                <h5 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
                  {currentScore.id === "ruim"
                    ? "Potencial de Economia"
                    : "Sua Economia Potencial"}
                </h5>

                {/* Savings Cards */}
                <div className="space-y-3 sm:space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-100"
                  >
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Por mês
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-blue-600">
                      {currentScore.id === "ruim"
                        ? "Até R$ 1.200"
                        : formatCurrency(currentScore.savings.monthly)}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-green-100"
                  >
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Por ano
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-green-600">
                      {currentScore.id === "ruim"
                        ? "Até R$ 14.400"
                        : formatCurrency(currentScore.savings.yearly)}
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-100"
                  >
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Em 30 anos
                    </p>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">
                      {currentScore.id === "ruim"
                        ? "Até R$ 432.000"
                        : formatCurrency(currentScore.savings.thirtyYear)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                      *Baseado em juros de financiamentos e cartões
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 text-center"
        >
          {currentScore.id === "ruim" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-gray-700 text-sm sm:text-base px-2">
                <strong>Comece hoje mesmo!</strong> Melhore seu score e
                economize até R$ 432.000 em 30 anos.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#D86C1F] to-[#E17A2F] text-white px-6 sm:px-8 h-12 sm:h-14 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Recuperar Meu Score Agora
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-gray-700 text-sm sm:text-base px-2">
                <strong>Parabéns!</strong> Você já está economizando com seu
                score {currentScore.name.toLowerCase()}.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#256D2A] to-[#2E7A32] text-white px-6 sm:px-8 h-12 sm:h-14 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Manter e Proteger Meu Score
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: white;
          border: 3px solid #3b82f6;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: white;
          border: 3px solid #3b82f6;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .slider {
          background: linear-gradient(
            to right,
            #ef4444 0%,
            #f59e0b 33.33%,
            #10b981 66.66%,
            #3b82f6 100%
          );
        }
      `}</style>
    </motion.div>
  );
}
