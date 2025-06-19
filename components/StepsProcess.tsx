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

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  details: string[];
}

const steps: Step[] = [
  {
    icon: AlertCircle,
    title: "Identificação de Erros",
    description:
      "Localizamos informações incorretas, desatualizadas ou imprecisas em seu relatório de crédito que podem estar prejudicando sua pontuação injustamente.",
    color: "from-red-500 to-red-600",
    details: [
      "Análise completa dos órgãos de proteção",
      "Identificação de inconsistências",
      "Verificação de dados desatualizados",
      "Mapeamento de oportunidades",
    ],
  },
  {
    icon: FileText,
    title: "Contestação Legal",
    description:
      "Utilizamos métodos 100% legais para contestar informações problemáticas junto aos órgãos de proteção ao crédito, seguindo rigorosamente a legislação brasileira.",
    color: "from-blue-500 to-blue-600",
    details: [
      "Protocolos legais aprovados",
      "Documentação especializada",
      "Argumentos técnicos precisos",
      "Acompanhamento rigoroso",
    ],
  },
  {
    icon: TrendingUp,
    title: "Melhoria Gradual",
    description:
      "Acompanhamos mensalmente a evolução do seu score, implementando estratégias personalizadas para acelerar a recuperação do seu crédito.",
    color: "from-green-500 to-green-600",
    details: [
      "Monitoramento mensal do score",
      "Relatórios de progresso",
      "Ajustes estratégicos",
      "Otimização contínua",
    ],
  },
  {
    icon: Target,
    title: "Estratégia Personalizada",
    description:
      "Cada caso é único. Desenvolvemos um plano específico baseado na sua situação atual e objetivos financeiros pessoais.",
    color: "from-purple-500 to-purple-600",
    details: [
      "Análise individual completa",
      "Plano de ação customizado",
      "Metas realistas e alcançáveis",
      "Cronograma personalizado",
    ],
  },
  {
    icon: Shield,
    title: "Proteção Contínua",
    description:
      "Monitoramos continuamente seu CPF para identificar novas negativações e tomar ações preventivas rapidamente.",
    color: "from-orange-500 to-orange-600",
    details: [
      "Monitoramento 24/7",
      "Alertas instantâneos",
      "Ação preventiva rápida",
      "Proteção permanente",
    ],
  },
  {
    icon: BookOpen,
    title: "Educação Financeira",
    description:
      "Oferecemos orientação sobre como manter um bom score após a recuperação, incluindo dicas de uso responsável do crédito.",
    color: "from-indigo-500 to-indigo-600",
    details: [
      "Consultoria especializada",
      "Dicas práticas diárias",
      "Planejamento financeiro",
      "Suporte contínuo",
    ],
  },
];

export function StepsProcess() {
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

  return (
    <div className="w-full">
      {/* Mode Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
          <button
            onClick={() => setViewMode("horizontal")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              viewMode === "horizontal"
                ? "bg-[#D86C1F] text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Visualização Horizontal
          </button>
          <button
            onClick={() => setViewMode("vertical")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              viewMode === "vertical"
                ? "bg-[#D86C1F] text-white shadow-lg"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Visualização Vertical
          </button>
        </div>
      </div>

      {viewMode === "horizontal" ? (
        <HorizontalSteps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : (
        <VerticalSteps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
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
}

function HorizontalSteps({
  steps,
  activeStep,
  setActiveStep,
  nextStep,
  prevStep,
}: StepsProps) {
  return (
    <div className="relative">
      {/* Progress Line */}
      <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/20 hidden lg:block">
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
                ? "bg-[#D86C1F] border-[#D86C1F] text-white"
                : "bg-white/10 border-white/30 text-gray-400 hover:border-white/50 hover:text-white"
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
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${steps[activeStep].color} opacity-20 rounded-bl-full`}
        />

        <div className="relative z-10 px-16">
          <div className="flex items-start gap-6">
            <div
              className={`w-16 h-16 bg-gradient-to-br ${steps[activeStep].color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
            >
              {React.createElement(steps[activeStep].icon, {
                className: "w-8 h-8 text-white",
              })}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {steps[activeStep].details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                    <span className="text-sm text-gray-300">{detail}</span>
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
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 pointer-events-auto border border-white/20 shadow-lg z-20"
            disabled={activeStep === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextStep}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 pointer-events-auto border border-white/20 shadow-lg z-20"
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
                ? "bg-[#D86C1F] w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function VerticalSteps({ steps, activeStep, setActiveStep }: StepsProps) {
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
                  ? "bg-[#D86C1F] border-[#D86C1F] text-white"
                  : "bg-white/10 border-white/30 text-gray-400"
              }`}
            >
              <span className="text-sm font-bold">{index + 1}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-0.5 h-16 mt-4 transition-all duration-500 ${
                  index < activeStep ? "bg-[#D86C1F]" : "bg-white/20"
                }`}
              />
            )}
          </div>

          {/* Step Content */}
          <div
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex-1 transition-all duration-300 ${
              index === activeStep
                ? "bg-white/15 border-[#D86C1F]/30"
                : "hover:bg-white/12"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                {React.createElement(step.icon, {
                  className: "w-6 h-6 text-white",
                })}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
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
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full" />
                        <span className="text-xs text-gray-300">{detail}</span>
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
