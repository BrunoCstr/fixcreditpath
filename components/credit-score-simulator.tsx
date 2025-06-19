"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ScoreData {
  label: string;
  score: string;
  monthlyPayment: number;
  totalPaid: number;
  savings: number;
  description: string;
  color: string;
}

interface CreditSimulatorTranslations {
  title: string;
  subtitle: string;
  creditScoreLabel: string;
  scoreLevels: string[];
  monthlyPayment: string;
  totalPaid: string;
  savings: string;
  yearsFinancing: string;
  in30Years: string;
  vsPoorScore: string;
  baseScore: string;
  ctaButton: string;
  ctaDescription: string;
  descriptions: {
    poor: string;
    fair: string;
    good: string;
    excellent: string;
  };
}

interface CreditScoreSimulatorProps {
  t: CreditSimulatorTranslations;
}

export default function CreditScoreSimulator({ t }: CreditScoreSimulatorProps) {
  const [selectedScore, setSelectedScore] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const scoreData: Record<number, ScoreData> = {
    0: {
      label: t.scoreLevels[0],
      score: "300-579",
      monthlyPayment: 2850,
      totalPaid: 1026000,
      savings: 0,
      description: t.descriptions.poor,
      color: "#ef4444",
    },
    1: {
      label: t.scoreLevels[1],
      score: "580-669",
      monthlyPayment: 2420,
      totalPaid: 871200,
      savings: 154800,
      description: t.descriptions.fair,
      color: "#f59e0b",
    },
    2: {
      label: t.scoreLevels[2],
      score: "670-739",
      monthlyPayment: 2180,
      totalPaid: 784800,
      savings: 241200,
      description: t.descriptions.good,
      color: "#10b981",
    },
    3: {
      label: t.scoreLevels[3],
      score: "740-850",
      monthlyPayment: 1950,
      totalPaid: 702000,
      savings: 324000,
      description: t.descriptions.excellent,
      color: "#059669",
    },
  };

  const currentData = scoreData[selectedScore];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSliderChange = (value: number) => {
    setSelectedScore(value);
  };

  const handleSliderStart = () => {
    setIsSliding(true);
  };

  const handleSliderEnd = () => {
    setIsSliding(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#D86C1F]/10 to-[#4CAF50]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-[#1F2E5C]/10 to-[#D86C1F]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2E5C] mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              {/* Score Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-slate-600">
                    {t.creditScoreLabel}
                  </span>
                  <motion.span
                    className="text-lg font-bold"
                    style={{ color: currentData.color }}
                    animate={{ scale: isSliding ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {currentData.label} ({currentData.score})
                  </motion.span>
                </div>

                {/* Custom Slider */}
                <div className="relative mb-8">
                  <div className="h-4 bg-gradient-to-r from-red-400 via-amber-400 via-emerald-400 to-emerald-500 rounded-full"></div>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="1"
                    value={selectedScore}
                    onChange={(e) =>
                      handleSliderChange(Number.parseInt(e.target.value))
                    }
                    onMouseDown={handleSliderStart}
                    onMouseUp={handleSliderEnd}
                    onTouchStart={handleSliderStart}
                    onTouchEnd={handleSliderEnd}
                    className="absolute top-0 w-full h-4 bg-transparent appearance-none cursor-pointer slider"
                    style={{
                      background: "transparent",
                    }}
                  />

                  {/* Score Labels */}
                  <div className="flex justify-between mt-3 text-sm font-medium text-slate-600">
                    {t.scoreLevels.map((level, index) => (
                      <span key={index}>{level}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-6"
                key={selectedScore}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Monthly Payment */}
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
                  <div className="text-sm text-slate-600 mb-2">
                    {t.monthlyPayment}
                  </div>
                  <div className="text-2xl font-bold text-[#1F2E5C]">
                    {formatCurrency(currentData.monthlyPayment)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {t.yearsFinancing}
                  </div>
                </div>

                {/* Total Paid */}
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200">
                  <div className="text-sm text-slate-600 mb-2">{t.totalPaid}</div>
                  <div className="text-2xl font-bold text-[#1F2E5C]">
                    {formatCurrency(currentData.totalPaid)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{t.in30Years}</div>
                </div>

                {/* Savings */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <div className="text-sm text-green-700 mb-2">
                    {t.savings}
                  </div>
                  <div className="text-2xl font-bold text-[#4CAF50]">
                    {selectedScore === 0
                      ? "R$ 0"
                      : `+${formatCurrency(currentData.savings)}`}
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    {selectedScore === 0 ? t.baseScore : t.vsPoorScore}
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200"
                key={`desc-${selectedScore}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-slate-700 leading-relaxed">
                  {currentData.description}
                </p>
              </motion.div>

              {/* CTA */}
              <div className="text-center mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#D86C1F] hover:bg-[#C55A0F] text-white px-8 py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl border-0"
                  >
                    {t.ctaButton}
                  </Button>
                </motion.div>
                <p className="text-sm text-slate-500 mt-3">
                  {t.ctaDescription}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${currentData.color};
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease;
          margin-top: -6px;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
        }

        .slider::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${currentData.color};
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease;
          margin-top: -6px;
        }

        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </section>
  );
}