"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AlertCircle,
  FileText,
  TrendingUp,
  Target,
  Shield,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const iconMap = {
  AlertCircle,
  FileText,
  TrendingUp,
  Target,
  Shield,
  BookOpen,
};

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  details: string[];
}

// Tipos para stepsProcess vindos do i18n
interface StepI18n {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  color: string;
  details: string[];
}

interface StepsProcessProps {
  theme?: "dark" | "light";
}

export function StepsProcess({ theme = "dark" }: StepsProcessProps) {
  const { t } = useLanguage();
  const steps: Step[] = t.process.stepsProcess.map((step) => ({
    ...step,
    icon: iconMap[step.icon as keyof typeof iconMap],
  }));
  const [activeStep, setActiveStep] = useState(0);
  const [viewMode, setViewMode] = useState<"horizontal" | "vertical">(
    "horizontal",
  );

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Theme-based styles
  const isLight = theme === "light";
  const bgColor = isLight ? "bg-white/80 backdrop-blur-md shadow-xl" : "bg-white/10";
  const borderColor = isLight ? "border-[#1F2E5C]/10 shadow-lg" : "border-white/20";
  const textColor = isLight ? "text-[#1F2E5C]" : "text-white";
  const textSecondaryColor = isLight ? "text-gray-600" : "text-gray-300";
  const buttonInactiveColor = isLight ? "text-gray-500" : "text-gray-400";
  const buttonHoverColor = isLight ? "text-[#1F2E5C]" : "text-white";
  const borderInactiveColor = isLight ? "border-[#1F2E5C]/20" : "border-white/30";
  const borderHoverColor = isLight ? "border-[#1F2E5C]/40" : "border-white/50";
  const progressBgColor = isLight ? "bg-[#1F2E5C]/10" : "bg-white/20";
  const indicatorBgColor = isLight ? "bg-[#1F2E5C]/20" : "bg-white/30";
  const indicatorHoverColor = isLight ? "bg-[#1F2E5C]/40" : "bg-white/50";

  return (
    <div className="w-full">
      {/* Mode Toggle */}
      <div className="flex justify-center mb-8">
        <div className={`${isLight ? 'bg-white/90 backdrop-blur-md shadow-lg' : bgColor} backdrop-blur-sm rounded-xl p-1 ${borderColor} w-full max-w-sm sm:w-auto`}>
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setViewMode("horizontal")}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 text-center ${
                viewMode === "horizontal"
                  ? "bg-gradient-to-r from-[#D86C1F] to-[#E1893D] text-white shadow-lg"
                  : `${buttonInactiveColor} hover:${buttonHoverColor} hover:bg-white/50`
              }`}
            >
              <span className="sm:hidden">Horizontal</span>
              <span className="hidden sm:inline">Horizontal View</span>
            </button>
            <button
              onClick={() => setViewMode("vertical")}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 text-center ${
                viewMode === "vertical"
                  ? "bg-gradient-to-r from-[#D86C1F] to-[#E1893D] text-white shadow-lg"
                  : `${buttonInactiveColor} hover:${buttonHoverColor} hover:bg-white/50`
              }`}
            >
              <span className="sm:hidden">Vertical</span>
              <span className="hidden sm:inline">Vertical View</span>
            </button>
          </div>
        </div>
      </div>

      {viewMode === "horizontal" ? (
        <HorizontalSteps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          nextStep={() => setActiveStep((prev) => (prev + 1) % steps.length)}
          prevStep={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
          theme={theme}
        />
      ) : (
        <VerticalSteps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          theme={theme}
        />
      )}
    </div>
  );
}

interface StepsProps {
  steps: Step[];
  activeStep: number;
  setActiveStep: (index: number) => void;
  nextStep?: () => void;
  prevStep?: () => void;
  theme?: "dark" | "light";
}

function HorizontalSteps({
  steps,
  activeStep,
  setActiveStep,
  nextStep,
  prevStep,
  theme = "dark",
}: StepsProps) {
  const isLight = theme === "light";
  const bgColor = isLight ? "bg-[#1F2E5C]/10" : "bg-white/10";
  const borderColor = isLight ? "border-[#1F2E5C]/20" : "border-white/20";
  const textColor = isLight ? "text-[#1F2E5C]" : "text-white";
  const textSecondaryColor = isLight ? "text-gray-600" : "text-gray-300";
  const buttonInactiveColor = isLight ? "text-gray-500" : "text-gray-400";
  const buttonHoverColor = isLight ? "text-[#1F2E5C]" : "text-white";
  const borderInactiveColor = isLight ? "border-[#1F2E5C]/30" : "border-white/30";
  const borderHoverColor = isLight ? "border-[#1F2E5C]/50" : "border-white/50";
  const progressBgColor = isLight ? "bg-[#1F2E5C]/20" : "bg-white/20";
  const indicatorBgColor = isLight ? "bg-[#1F2E5C]/30" : "bg-white/30";
  const indicatorHoverColor = isLight ? "bg-[#1F2E5C]/50" : "bg-white/50";

  return (
    <div className="relative">
      {/* Progress Line */}
      <div className={`absolute top-6 left-0 right-0 h-0.5 ${progressBgColor} hidden lg:block`}>
        <motion.div
          className="h-full bg-gradient-to-r from-[#D86C1F] to-[#4CAF50] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Steps Navigation */}
      <div className="flex flex-wrap justify-center lg:justify-between items-center mb-8 gap-4">
        {steps.map((step, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
              index <= activeStep
                ? "bg-gradient-to-r from-[#D86C1F] to-[#E1893D] border-[#D86C1F] text-white shadow-lg"
                : `${isLight ? 'bg-white/90 shadow-md' : bgColor} ${borderInactiveColor} ${buttonInactiveColor} hover:${borderHoverColor} hover:${buttonHoverColor} hover:shadow-lg`
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-bold">{index + 1}</span>
            {index <= activeStep && (
              <motion.div
                className="absolute inset-0 bg-[#D86C1F]/20 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Active Step Content */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className={`${isLight ? 'bg-white/90 backdrop-blur-md shadow-2xl' : bgColor} backdrop-blur-sm rounded-2xl p-8 ${borderColor} relative overflow-hidden`}
      >
        {/* Background Gradient */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${steps[activeStep].color} ${isLight ? 'opacity-10' : 'opacity-20'} rounded-bl-full`}
        />

        <div className="relative z-10 px-4 sm:px-8 lg:px-16">
          {/* Mobile: Stack icon on top, Desktop: Side by side */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div
              className={`w-16 h-16 bg-orange-500 ${steps[activeStep].color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0 border border-white/20`}
            >
              {React.createElement(steps[activeStep].icon, {
                className: "w-8 h-8 text-white drop-shadow-sm",
              })}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4`}>
                {steps[activeStep].title}
              </h3>
              <p className={`${textSecondaryColor} leading-relaxed mb-6`}>
                {steps[activeStep].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {steps[activeStep].details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center space-x-2 justify-center sm:justify-start"
                  >
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                    <span className={`text-sm ${textSecondaryColor}`}>{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
          <button
            onClick={prevStep}
            className={`w-12 h-12 ${isLight ? 'bg-white/90 shadow-lg' : bgColor} backdrop-blur-sm rounded-full flex items-center justify-center ${textColor} hover:${isLight ? 'bg-white shadow-xl' : 'bg-white/30'} transition-all duration-300 pointer-events-auto ${borderColor} shadow-lg z-20`}
            disabled={activeStep === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextStep}
            className={`w-12 h-12 ${isLight ? 'bg-white/90 shadow-lg' : bgColor} backdrop-blur-sm rounded-full flex items-center justify-center ${textColor} hover:${isLight ? 'bg-white shadow-xl' : 'bg-white/30'} transition-all duration-300 pointer-events-auto ${borderColor} shadow-lg z-20`}
            disabled={activeStep === steps.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>

      {/* Step Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeStep
                ? "bg-gradient-to-r from-[#D86C1F] to-[#E1893D] w-8 shadow-md"
                : `${indicatorBgColor} hover:${indicatorHoverColor} hover:shadow-sm`
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function VerticalSteps({ steps, activeStep, setActiveStep, theme = "dark" }: StepsProps) {
  const isLight = theme === "light";
  const bgColor = isLight ? "bg-white/80 backdrop-blur-md shadow-xl" : "bg-white/10";
  const borderColor = isLight ? "border-[#1F2E5C]/10 shadow-lg" : "border-white/20";
  const textColor = isLight ? "text-[#1F2E5C]" : "text-white";
  const textSecondaryColor = isLight ? "text-gray-600" : "text-gray-300";
  const buttonInactiveColor = isLight ? "text-gray-500" : "text-gray-400";
  const borderInactiveColor = isLight ? "border-[#1F2E5C]/20" : "border-white/30";
  const progressBgColor = isLight ? "bg-[#1F2E5C]/10" : "bg-white/20";

  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative flex gap-6 cursor-pointer transition-all duration-300 ${
            index === activeStep ? "scale-105" : "hover:scale-102"
          }`}
          onClick={() => setActiveStep(index)}
        >
          {/* Step Number and Line */}
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                index <= activeStep
                  ? "bg-gradient-to-r from-[#D86C1F] to-[#E1893D] border-[#D86C1F] text-white shadow-lg"
                  : `${isLight ? 'bg-white/90 shadow-md' : bgColor} ${borderInactiveColor} ${buttonInactiveColor}`
              }`}
            >
              <span className="text-sm font-bold">{index + 1}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-0.5 h-16 mt-4 transition-all duration-500 ${
                  index < activeStep ? "bg-gradient-to-b from-[#D86C1F] to-[#E1893D]" : progressBgColor
                }`}
              />
            )}
          </div>

          {/* Step Content */}
          <div
            className={`${isLight ? 'bg-white/90 backdrop-blur-md shadow-xl' : bgColor} backdrop-blur-sm rounded-2xl p-6 ${borderColor} flex-1 transition-all duration-300 ${
              index === activeStep
                ? `${isLight ? 'bg-white shadow-2xl' : 'bg-white/15'} border-[#D86C1F]/30`
                : `hover:${isLight ? 'bg-white shadow-lg' : 'bg-white/12'}`
            }`}
          >
            {/* Mobile: Stack icon on top, Desktop: Side by side */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div
                className={`w-12 h-12 bg-orange-500 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 shadow-lg border border-white/20`}
              >
                {React.createElement(step.icon, {
                  className: "w-6 h-6 text-white drop-shadow-sm",
                })}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className={`text-lg font-bold ${textColor} mb-2`}>
                  {step.title}
                </h3>
                <p className={`${textSecondaryColor} leading-relaxed text-sm mb-4`}>
                  {step.description}
                </p>
                {index === activeStep && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  >
                    {step.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 justify-center sm:justify-start"
                      >
                        <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full" />
                        <span className={`text-xs ${textSecondaryColor}`}>{detail}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
