"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { translations } from "@/i18n/translations";
import {
  Globe,
  ArrowRight,
  Star,
  Mail,
  Shield,
  Phone,
  ChevronDown,
  MapPin,
  Award,
  Zap,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Home,
  Car,
  GraduationCap,
  CreditCard,
  RefreshCw,
} from "lucide-react";
import CreditScoreSimulator from "@/components/credit-score-simulator";
import { CreditEducationSection } from "@/components/CreditEducationSection";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import { StepsProcess } from "@/components/StepsProcess";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { Spinner } from "@/components/spinner";

// Advanced Interactive Quiz Component with Slider Design
const QuizComponent = ({ quiz }: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswer = (solution: string, color: string) => {
    setIsAnimating(true);
    const newAnswers = [...selectedAnswers, solution];
    setSelectedAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnimating(false);
      } else {
        const priorityOrder = [
          "urgent",
          "cleanup",
          "medium",
          "partial",
          "check",
          "financing",
          "credit",
          "business",
          "prevention",
        ];
        const finalSolution = newAnswers.reduce((prev, curr) =>
          priorityOrder.indexOf(curr) < priorityOrder.indexOf(prev)
            ? curr
            : prev,
        );
        setResult(quiz.solutions[finalSolution]);
        setShowResult(true);
        setIsAnimating(false);
      }
    }, 600);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setResult(null);
    setIsAnimating(false);
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswers(selectedAnswers.slice(0, -1));
    }
  };

  if (showResult && result) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative"
      >
        {/* Result Card with Premium Design */}
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F2E5C] via-[#3C4A75] to-[#1F2E5C] opacity-90 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 via-transparent to-[#4CAF50]/20 rounded-3xl" />

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-[#D86C1F]/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#4CAF50]/20 rounded-full blur-xl animate-pulse delay-1000" />

          <div className="relative z-10 p-8 text-white">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <span className="text-2xl mr-3">
                  {result.color?.includes("red")
                    ? "🚨"
                    : result.color?.includes("yellow") ||
                        result.color?.includes("orange")
                      ? "⚠️"
                      : result.color?.includes("green")
                        ? "✅"
                        : "🔍"}
                </span>
                <span className="font-semibold text-lg">
                  {result.color?.includes("red")
                    ? "SITUAÇÃO CRÍTICA"
                    : result.color?.includes("yellow") ||
                        result.color?.includes("orange")
                      ? "ATENÇÃO NECESSÁRIA"
                      : result.color?.includes("green")
                        ? "SITUAÇÃO CONTROLADA"
                        : "ANÁLISE REQUERIDA"}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4">{result.title}</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                {result.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => (window.location.href = "#contact")}
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[250px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 {result.action}
                </motion.button>

                <button
                  onClick={resetQuiz}
                  className="text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-6 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  ↺ Refazer Quiz
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative">
      {/* Question Slider Container */}
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
        {/* Progress Header */}
        <div className="bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                {currentQuestion + 1}
              </div>
              <div>
                <div className="text-sm opacity-80">
                  Pergunta {currentQuestion + 1} de {quiz.questions.length}
                </div>
                <div className="text-lg font-semibold">
                  Diagnóstico Personalizado
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                {Math.round(
                  ((currentQuestion + 1) / quiz.questions.length) * 100,
                )}
                %
              </div>
              <div className="text-sm opacity-80">Completo</div>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="relative">
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#4CAF50] via-[#D86C1F] to-[#4CAF50] rounded-full relative"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: isAnimating ? 0 : 1,
              x: isAnimating ? -100 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-[#1F2E5C] mb-8 leading-tight">
              {quiz.questions[currentQuestion].question}
            </h3>

            {/* Answer Options Slider */}
            <div className="space-y-4 max-w-2xl mx-auto">
              {quiz.questions[currentQuestion].options.map(
                (option: any, index: number) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.solution, option.color)}
                    disabled={isAnimating}
                    className="group relative w-full p-6 rounded-2xl transition-all duration-300 text-left overflow-hidden bg-white border-2 border-gray-200 hover:border-[#D86C1F] hover:shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center relative z-10">
                      <div
                        className={`w-6 h-6 rounded-full mr-4 flex-shrink-0 flex items-center justify-center font-bold text-white
                      ${
                        option.color === "red"
                          ? "bg-[#D86C1F]"
                          : option.color === "yellow"
                            ? "bg-[#D86C1F]"
                            : option.color === "green"
                              ? "bg-[#4CAF50]"
                              : "bg-[#1F2E5C]"
                      }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900">
                        {option.text}
                      </span>
                      <ChevronRight className="w-5 h-5 ml-auto text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-[#D86C1F]" />
                  </motion.button>
                ),
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={goToPrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 text-gray-500 hover:text-[#1F2E5C] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>
              <div className="flex gap-2">
                {quiz.questions.map((_: any, index: number) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300
                      ${
                        index < currentQuestion
                          ? "bg-[#4CAF50]"
                          : index === currentQuestion
                            ? "bg-[#D86C1F]"
                            : "bg-gray-200"
                      }`}
                  />
                ))}
              </div>
              <div className="w-16" /> {/* Spacer for balance */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Revolutionary Credit Impact Section with Vertical Slider
const CreditImpactSlider = ({ barriers, timeline, title, subtitle }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Enhanced barriers data with improved copy and timeline focus
  const enhancedBarriers = [
    {
      title: "🚗 Alugar Imóvel → Comprar Casa Própria",
      description:
        "Score baixo = fiador exigido, caução alta, documentação rejeitada. Com score bom: financiamento aprovado, juros menores, realização do sonho.",
      stat: "73%",
      statDescription:
        "das pessoas com score baixo são negadas no financiamento habitacional",
      timeline: {
        before: "Alugar eternamente",
        after: "Casa própria conquistada",
        icon: "���",
        consequences: [
          "Fiador necessário",
          "Caução 3x maior",
          "Aluguéis altos sem fim",
        ],
      },
      gradient: "from-slate-900 via-gray-800 to-slate-900",
      accentColor: "#D86C1F",
      line: (
        <div className="flex items-center justify-center gap-4 text-4xl">
          <span className="opacity-50">🏠</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-green-500"></div>
          <span className="text-green-400">🏡</span>
        </div>
      ),
    },
    {
      title: "💼 Empregado → Abrir Negócio",
      description:
        "Sem crédito = sonho empreendedor travado. Com score limpo: capital de giro aprovado, cartão empresarial, crescimento acelerado.",
      stat: "82%",
      statDescription:
        "dos pequenos empreendedores são negados por score baixo",
      timeline: {
        before: "Empregado sempre",
        after: "Empresário de sucesso",
        icon: "💼",
        consequences: [
          "Capital negado",
          "Sem linha de crédito",
          "Dependência do salário",
        ],
      },
      gradient: "from-gray-900 via-slate-800 to-gray-900",
      accentColor: "#4CAF50",
      line: (
        <div className="flex items-center justify-center gap-4 text-4xl">
          <span className="opacity-50">👔</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-green-500"></div>
          <span className="text-green-400">💼</span>
        </div>
      ),
    },
    {
      title: "🚌 Transporte Público → Carro Zero",
      description:
        "Score ruim = financiamento negado, juros abusivos. Score bom: aprovação rápida, prestações baixas, liberdade de movimento.",
      stat: "68%",
      statDescription:
        "das solicitações de financiamento automotivo são recusadas",
      timeline: {
        before: "Dependente de outros",
        after: "Mobilidade total",
        icon: "🚗",
        consequences: [
          "Transporte limitado",
          "Tempo perdido",
          "Dependência de terceiros",
        ],
      },
      gradient: "from-slate-800 via-gray-900 to-slate-800",
      accentColor: "#1F2E5C",
      line: (
        <div className="flex items-center justify-center gap-4 text-4xl">
          <span className="opacity-50">🚌</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-green-500"></div>
          <span className="text-green-400">🚗</span>
        </div>
      ),
    },
    {
      title: "💳 Juros Altos → Crédito Barato",
      description:
        "Score baixo = 340% mais juros. Score alto: melhores condições, cartões premium, investimentos rentáveis.",
      stat: "340%",
      statDescription: "maior taxa de juros para quem tem score baixo",
      timeline: {
        before: "Pagando juros abusivos",
        after: "Crédito favorável",
        icon: "💰",
        consequences: [
          "Taxas astronômicas",
          "Cartões básicos",
          "Sem limite para investir",
        ],
      },
      gradient: "from-gray-800 via-slate-900 to-gray-800",
      accentColor: "#D86C1F",
      line: (
        <div className="flex items-center justify-center gap-4 text-4xl">
          <span className="opacity-50 text-red-400">📈</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-green-500"></div>
          <span className="text-green-400">📊</span>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % enhancedBarriers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated geometric patterns */}
        <div className="absolute top-20 left-20 w-1 h-40 bg-gradient-to-b from-[#D86C1F]/30 to-transparent animate-pulse delay-700" />
        <div className="absolute top-40 right-32 w-40 h-1 bg-gradient-to-r from-transparent via-[#4CAF50]/20 to-transparent animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-1 h-32 bg-gradient-to-t from-[#1F2E5C]/40 to-transparent animate-pulse delay-300" />

        {/* Subtle grid overlay */}
        <div
          className={
            'absolute inset-0 opacity-5 bg-[url(\'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%23ffffff" stroke-width="0.5"%3E%3Cpath d="M0 20h40M20 0v40"/%3E%3C/g%3E%3C/svg%3E\')]'
          }
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-20 lg:px-8">
        {/* Compact Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#D86C1F]/10 backdrop-blur-sm border border-[#D86C1F]/20 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse mr-2" />
            <span className="text-[#D86C1F] font-semibold text-xs md:text-sm">
              REALIDADE FINANCEIRA
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Crédito ruim trava seus planos?
            <br />
            <span className="bg-gradient-to-r from-[#D86C1F] to-[#FF8C42] bg-clip-text text-transparent">
              Desbloqueie oportunidades agora.
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Um score baixo fecha portas. Veja o que você está perdendo e como
            reverter isso:
          </p>
        </motion.div>

        {/* Compact 3-Column Layout */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {enhancedBarriers.slice(0, 3).map((barrier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden"
            >
              {/* Compact Header */}
              <div className="bg-gradient-to-r from-[#D86C1F]/20 to-[#FF8C42]/10 p-4 text-center border-b border-white/10">
                <div className="text-2xl mb-2">{barrier.line}</div>
                <div className="text-[#D86C1F] font-bold text-lg">
                  {barrier.stat}
                </div>
              </div>

              {/* Compact Content */}
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-bold text-white text-center">
                  {barrier.title}
                </h3>

                {/* Before/After Compact */}
                <div className="space-y-3">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 text-center">
                    <div className="text-red-400 text-sm font-semibold mb-1">
                      ❌ Agora
                    </div>
                    <div className="text-red-200 text-xs">
                      {barrier.timeline.before}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-red-400 to-green-400"></div>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 text-center">
                    <div className="text-green-400 text-sm font-semibold mb-1">
                      ✅ Com Score Limpo
                    </div>
                    <div className="text-green-200 text-xs">
                      {barrier.timeline.after}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#D86C1F] to-[#FF8C42] p-1 rounded-2xl inline-block">
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#D86C1F]/20 border border-[#D86C1F]/30 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-[#D86C1F] rounded-full animate-ping mr-2" />
                <span className="text-[#D86C1F] font-semibold text-xs">
                  ⚡ AÇÃO NECESSÁRIA ⚡
                </span>
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Pare de perder oportunidades
              </h3>

              <p className="text-gray-300 mb-6 text-sm md:text-base">
                Desbloqueie seu potencial financeiro hoje mesmo.
              </p>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D86C1F] to-[#FF8C42] text-white px-6 py-3 rounded-xl font-bold text-base shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Liberte seu crédito agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <div className="flex justify-center items-center gap-4 mt-4 text-gray-400 text-xs">
                <span>✓ 100% Seguro</span>
                <span>✓ Análise Gratuita</span>
                <span>✓ Sem Compromisso</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function HomePage() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem("fixpath-language") as
      | "pt"
      | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  const t = translations[language];

  const formSchema = z.object({
    name: z.string().min(2, t.contact.form.errorMessages.name),
    email: z.string().email(t.contact.form.errorMessages.email),
    phone: z.string().regex(phoneRegex, t.contact.form.errorMessages.phone),
    message: z
      .string()
      .min(15, t.contact.form.errorMessages.message)
      .or(z.literal(""))
      .default(""),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Retirar pós implementação do webhook/api
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Colocar aqui a chamada para Webhook ou API...

      // Timeout pra simular a requisição para o webhook/api.
      await delay(3000);
      console.log(data);

      toast({
        title: t.contact.form.successMessages.onSubmit.title,
        description: t.contact.form.successMessages.onSubmit.description,
        variant: "success",
      });
      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: t.contact.form.errorMessages.title,
        description: t.contact.form.errorMessages.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroImages = [
    {
      src: "/images/first_image_hero.jpg",
      alt: "Mulher feliz usando smartphone para controlar suas finanças",
    },
    {
      src: "/images/second_image_hero.png",
      alt: "Homem confiante verificando seu score de crédito no celular",
    },
    {
      src: "/images/third_image_hero.jpeg",
      alt: "Homem feliz vendo seu score de crédito no celular",
    },
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrolled(latest > 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.95,
    transition: { duration: 0.1 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip Navigation Link - Para usuários de teclado/leitores de tela */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#1F2E5C] text-white px-4 py-2 z-50 focus:z-[60]"
        onFocus={() => console.log("Skip link focused")}
      >
        {language === "pt"
          ? "Pular para o conteúdo principal"
          : "Skip to main content"}
      </a>

      {/* Navigation */}
      <Navigation
        language={language}
        setLanguage={setLanguage}
        translations={translations}
        scrolled={scrolled}
      />

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section
          className="relative min-h-screen overflow-hidden w-full flex items-center"
          aria-labelledby="hero-title"
          role="region"
        >
          {/* Modern gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
            aria-hidden="true"
          ></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <motion.div
              className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-[#D86C1F]/10 to-[#4CAF50]/10 blur-3xl"
              animate={{
                x: [0, 20, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-[#4CAF50]/10 to-[#1F2E5C]/10 blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="min-h-screen pt-9 flex items-center relative z-10 w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-20 lg:px-12 xl:px-16 2xl:px-20">
              <div className="min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center py-8">
                <motion.div
                  className="text-center lg:text-left order-2 lg:order-1 w-full"
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer}
                >
                  <motion.h1
                    id="hero-title"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-[#1F2E5C] max-w-full break-words"
                    variants={fadeInUp}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {t.hero.title}
                  </motion.h1>
                  <motion.p
                    className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-slate-600 leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {t.hero.subtitle}
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    role="group"
                    aria-label={
                      language === "pt"
                        ? "Botões de ação principal"
                        : "Main action buttons"
                    }
                  >
                    <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                      <Button
                        size="lg"
                        className="relative bg-[#D86C1F] hover:bg-[#C55A0F] text-white px-8 py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 group overflow-hidden"
                        aria-describedby="cta1-description"
                        onClick={() =>
                          window.open(
                            "https://fixpath.getcredittheplnow.com/start",
                            "_blank",
                          )
                        }
                      >
                        {/* Button shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                        <span className="relative mr-2">{t.hero.cta1}</span>
                        <ArrowRight
                          className="w-5 h-5 inline-block relative"
                          aria-hidden="true"
                        />
                      </Button>
                      <span id="cta1-description" className="sr-only">
                        {language === "pt"
                          ? "Botão principal para iniciar o processo de recuperação de crédito"
                          : "Main button to start the credit repair process"}
                      </span>
                    </motion.div>
                    <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-[#1F2E5C] text-[#1F2E5C] hover:bg-[#1F2E5C] hover:text-white px-8 py-4 text-base font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1F2E5C] focus:ring-offset-2"
                        aria-describedby="cta2-description"
                        onClick={() => {
                          const formElement = document.getElementById("form");
                          formElement?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {t.hero.cta2}
                      </Button>
                      <span id="cta2-description" className="sr-only">
                        {language === "pt"
                          ? "Botão secundário para saber mais sobre nossos serviços"
                          : "Secondary button to learn more about our services"}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end py-8 lg:py-12"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="relative w-full h-full max-w-sm lg:max-w-lg xl:max-w-xl">
                    {/* Background decoration - expanded to fill container */}
                    <div
                      className="absolute -inset-8 sm:-inset-12 lg:-inset-16 bg-gradient-to-r from-[#D86C1F]/15 via-[#4CAF50]/15 to-[#D86C1F]/15 rounded-full blur-3xl opacity-60"
                      aria-hidden="true"
                    ></div>

                    {/* Secondary gradient layer for smooth blending */}
                    <div
                      className="absolute -inset-6 sm:-inset-8 lg:-inset-12 bg-gradient-to-br from-[#4CAF50]/10 via-transparent to-[#D86C1F]/10 rounded-3xl blur-2xl"
                      aria-hidden="true"
                    ></div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                      <motion.img
                        key={currentHeroImage}
                        src={heroImages[currentHeroImage].src}
                        alt={heroImages[currentHeroImage].alt}
                        className="w-full h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[500px] object-cover rounded-xl"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        role="img"
                      />
                    </div>

                    {/* Image indicators */}
                    <div
                      className="flex justify-center mt-6 space-x-2"
                      role="tablist"
                      aria-label={
                        language === "pt"
                          ? "Indicadores de imagem do carrossel"
                          : "Carousel image indicators"
                      }
                    >
                      {heroImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentHeroImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 ${
                            index === currentHeroImage
                              ? "bg-[#D86C1F] scale-125"
                              : "bg-gray-300"
                          }`}
                          role="tab"
                          aria-selected={index === currentHeroImage}
                          aria-label={`${
                            language === "pt" ? "Imagem" : "Image"
                          } ${index + 1} ${language === "pt" ? "de" : "of"} ${
                            heroImages.length
                          }`}
                          tabIndex={index === currentHeroImage ? 0 : -1}
                          onKeyDown={(e) => {
                            if (e.key === "ArrowLeft" && index > 0) {
                              setCurrentHeroImage(index - 1);
                            } else if (
                              e.key === "ArrowRight" &&
                              index < heroImages.length - 1
                            ) {
                              setCurrentHeroImage(index + 1);
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Enhanced Background with gradient and floating elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
            {/* Multiple gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Enhanced floating geometric elements */}
            {[
              { id: 0, size: 45, x: 15, y: 20, delay: 0.5 },
              { id: 1, size: 35, x: 75, y: 10, delay: 1.2 },
              { id: 2, size: 50, x: 25, y: 70, delay: 0.8 },
              { id: 3, size: 30, x: 85, y: 55, delay: 2.1 },
              { id: 4, size: 40, x: 55, y: 25, delay: 1.5 },
              { id: 5, size: 38, x: 10, y: 85, delay: 0.3 },
              { id: 6, size: 42, x: 65, y: 75, delay: 1.8 },
              { id: 7, size: 33, x: 90, y: 35, delay: 2.5 },
            ].map((element) => (
              <motion.div
                key={element.id}
                className="absolute opacity-20"
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + element.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.delay,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1F2E5C]/40 to-[#D86C1F]/40 rounded-xl transform rotate-45 shadow-lg" />
              </motion.div>
            ))}

            {/* Additional decorative elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-1 h-1 bg-[#4CAF50] rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#1F2E5C] rounded-full animate-pulse delay-500" />
          </div>

          {/* Background da seção "Você se identifica" na parte inferior */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
            {/* Multiple gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Enhanced floating geometric elements */}
            {[
              { id: 0, size: 25, x: 15, y: 20, delay: 0.5 },
              { id: 1, size: 20, x: 75, y: 10, delay: 1.2 },
              { id: 2, size: 30, x: 25, y: 70, delay: 0.8 },
              { id: 3, size: 18, x: 85, y: 55, delay: 2.1 },
              { id: 4, size: 22, x: 55, y: 25, delay: 1.5 },
              { id: 5, size: 20, x: 10, y: 85, delay: 0.3 },
            ].map((element) => (
              <motion.div
                key={element.id}
                className="absolute opacity-20"
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + element.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.delay,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1F2E5C]/40 to-[#D86C1F]/40 rounded-xl transform rotate-45 shadow-lg" />
              </motion.div>
            ))}

            {/* Additional decorative elements */}
            <div className="absolute top-4 left-20 w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse" />
            <div className="absolute top-8 right-32 w-1 h-1 bg-[#4CAF50] rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-[#1F2E5C] rounded-full animate-pulse delay-500" />
          </div>

          {/* Curved bottom wave shape */}
          <div
            className="absolute bottom-0 left-0 w-full z-20"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="processBgGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="50%" stopColor="#eff6ff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#fff7ed" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
                fill="url(#processBgGradient)"
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-20 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-30">
            <motion.div
              className="max-w-4xl mx-auto text-center px-20 pt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Main value proposition */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center bg-white/60 text-[#1F2E5C] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#1F2E5C]/10">
                  <svg
                    className="w-4 h-4 mr-2 text-[#4CAF50]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Nova no Mercado
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2E5C] mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] bg-clip-text text-transparent text-4xl">
                    Começando Nossa Jornada de
                  </span>
                  <br />
                  <span className="text-[#D86C1F] text-4xl">
                    Restauração de Crédito
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Somos uma empresa nova com metodologia fundamentada em
                  práticas legais estabelecidas. Nosso foco é ajudar você a
                  identificar e corrigir inconsistências em seu relatório de
                  crédito.
                </p>
              </motion.div>

              {/* Features cards - more subtle */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Feature 1 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 shadow-sm">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4CAF50] to-[#2E7A32] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-[#1F2E5C] mb-1">
                      Análise Completa
                    </div>
                    <div className="text-xs text-gray-600">
                      Identificação de inconsistências
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 shadow-sm">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D86C1F] to-[#E1893D] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-[#1F2E5C] mb-1">
                      100% Legal
                    </div>
                    <div className="text-xs text-gray-600">
                      Métodos aprovados e seguros
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 shadow-sm">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1F2E5C] to-[#3C4A75] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-[#1F2E5C] mb-1">
                      Atendimento Dedicado
                    </div>
                    <div className="text-xs text-gray-600">
                      Suporte personalizado
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced CTA */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/30 to-[#4CAF50]/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <motion.button
                    className="relative group bg-gradient-to-r from-[#D86C1F] via-[#E1893D] to-[#D86C1F] hover:from-[#E1893D] hover:via-[#D86C1F] hover:to-[#E1893D] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-3 overflow-hidden"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open(
                          "https://fixpath.getcredittheplnow.com/start",
                          "_blank",
                        );
                      }
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                    {/* Pulsing dot indicator */}
                    <div className="relative">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></div>
                    </div>

                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>

                    <span className="relative z-10">
                      Solicitar Análise Gratuita
                    </span>

                    {/* Arrow with animation */}
                    <svg
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Educational Section */}
        <CreditEducationSection t={t} />

        {/* What Makes Us Different Section */}
        <WhatMakesUsDifferent />

        {/* Process Section */}
        <section
          id="process"
          className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 min-h-[70vh] lg:h-[70vh] text-white relative overflow-hidden"
          aria-labelledby="process-title"
          role="region"
        >
          {/* Modern Background Elements - Same as CreditEducationSection */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#D86C1F]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4CAF50]/15 rounded-full blur-3xl transform translate-x-1/3"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1F2E5C]/25 rounded-full blur-3xl transform translate-y-1/2"></div>
            {/* Subtle geometric patterns */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-lg rotate-12"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/10 rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-6xl mx-auto px-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                className="text-center mb-8 md:mb-12 lg:mb-16"
                variants={fadeInUp}
              >
                <h2
                  id="process-title"
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4"
                >
                  {t.process.title}
                </h2>
                <p className="text-base md:text-lg text-blue-100">
                  {t.process.subtitle}
                </p>
              </motion.div>

              {/* Process Steps */}
              <div className="relative pb-8 md:pb-12">
                {/* Connection Line */}
                <div
                  className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-[#D86C1F]/30"
                  aria-hidden="true"
                ></div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-4"
                  role="list"
                  aria-label="Etapas do processo"
                >
                  {t.process.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="text-center relative"
                      role="listitem"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {/* Step Number */}
                      <div className="relative mb-4 md:mb-6">
                        {/* Green Icon Background */}
                        <div
                          className="w-16 h-16 md:w-20 md:h-20 bg-[#4CAF50] rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg"
                          role="img"
                          aria-label={`Ícone da etapa ${index + 1}`}
                        >
                          {index === 0 && (
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                                clipRule="evenodd"
                              />
                              <path d="M8 6h4v2H8V6zM8 10h4v2H8v-2z" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1-1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                          )}
                        </div>

                        {/* Orange Number - Desktop */}
                        {index < t.process.steps.length - 1 && (
                          <div
                            className="hidden lg:flex absolute -right-8 top-4 md:top-6 w-6 h-6 md:w-8 md:h-8 bg-[#D86C1F] rounded-full items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg"
                            aria-label={`Etapa ${index + 1}`}
                          >
                            {index + 1}
                          </div>
                        )}

                        {/* Mobile Number */}
                        <div
                          className="lg:hidden w-6 h-6 md:w-8 md:h-8 bg-[#D86C1F] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg mx-auto mb-3 md:mb-4"
                          aria-label={`Etapa ${index + 1}`}
                        >
                          {index + 1}
                        </div>
                      </div>

                      <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 px-2">
                        {step.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed text-sm md:text-sm px-2">
                        {step.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who Needs Credit Repair - Interactive Quiz */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Enhanced Background with gradient and floating elements - Same as WhatMakesUsDifferent */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
            {/* Multiple gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Enhanced floating geometric elements */}
            {[
              { id: 0, size: 45, x: 15, y: 20, delay: 0.5 },
              { id: 1, size: 35, x: 75, y: 10, delay: 1.2 },
              { id: 2, size: 50, x: 25, y: 70, delay: 0.8 },
              { id: 3, size: 30, x: 85, y: 55, delay: 2.1 },
              { id: 4, size: 40, x: 55, y: 25, delay: 1.5 },
              { id: 5, size: 38, x: 10, y: 85, delay: 0.3 },
              { id: 6, size: 42, x: 65, y: 75, delay: 1.8 },
              { id: 7, size: 33, x: 90, y: 35, delay: 2.5 },
            ].map((element) => (
              <motion.div
                key={element.id}
                className="absolute opacity-20"
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + element.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.delay,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1F2E5C]/40 to-[#D86C1F]/40 rounded-xl transform rotate-45 shadow-lg" />
              </motion.div>
            ))}

            {/* Additional decorative elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-1 h-1 bg-[#4CAF50] rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#1F2E5C] rounded-full animate-pulse delay-500" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
            <motion.div
              className="max-w-4xl mx-auto px-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="text-center mb-12" variants={fadeInUp}>
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#1F2E5C] via-[#3C4A75] to-[#1F2E5C] bg-clip-text text-transparent">
                    {t.whoNeedsCredit.title}
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t.whoNeedsCredit.subtitle}
                </p>
              </motion.div>

              {/* Interactive Quiz */}
              <QuizComponent quiz={t.whoNeedsCredit.quiz} />
            </motion.div>
          </div>
        </section>

        {/* Credit Impact - Premium Impact Slider */}
        <CreditImpactSlider
          barriers={t.creditImpact.barriers}
          timeline={t.creditImpact.timeline}
          title={t.creditImpact.title}
          subtitle={t.creditImpact.subtitle}
        />

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="relative py-24 md:py-32 overflow-hidden"
          aria-label="Depoimentos de clientes"
        >
          {/* Enhanced Background with gradient and floating elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
            {/* Multiple gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Enhanced floating geometric elements */}
            {[
              { id: 0, size: 45, x: 15, y: 20, delay: 0.5 },
              { id: 1, size: 35, x: 75, y: 10, delay: 1.2 },
              { id: 2, size: 50, x: 25, y: 70, delay: 0.8 },
              { id: 3, size: 30, x: 85, y: 55, delay: 2.1 },
              { id: 4, size: 40, x: 55, y: 25, delay: 1.5 },
              { id: 5, size: 38, x: 10, y: 85, delay: 0.3 },
              { id: 6, size: 42, x: 65, y: 75, delay: 1.8 },
              { id: 7, size: 33, x: 90, y: 35, delay: 2.5 },
            ].map((element) => (
              <motion.div
                key={element.id}
                className="absolute opacity-20"
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + element.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.delay,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1F2E5C]/40 to-[#D86C1F]/40 rounded-xl transform rotate-45 shadow-lg" />
              </motion.div>
            ))}

            {/* Additional decorative elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-1 h-1 bg-[#4CAF50] rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#1F2E5C] rounded-full animate-pulse delay-500" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="text-center mb-12" variants={fadeInUp}>
                <h2 className="text-2xl lg:text-4xl font-bold text-[#1F2E5C] mb-4">
                  {t.testimonials.title}
                </h2>
                <p className="text-lg text-slate-600">
                  {t.testimonials.subtitle}
                </p>
              </motion.div>

              <div
                className="grid md:grid-cols-3 gap-8"
                role="list"
                aria-label="Depoimentos de clientes"
              >
                {t.testimonials.items.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-[#D86C1F] focus-within:ring-offset-2"
                    role="listitem"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    tabIndex={0}
                  >
                    <div
                      className="flex mb-4"
                      role="img"
                      aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#D86C1F] fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="text-slate-600 leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-12 h-12 bg-[#1F2E5C] rounded-full flex items-center justify-center text-white font-bold"
                        role="img"
                        aria-label={`Avatar de ${testimonial.name}`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <cite className="font-bold text-[#1F2E5C] not-italic">
                          {testimonial.name}
                        </cite>
                        <div className="text-slate-500 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section
          id="trust"
          className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
          aria-label="Nossa confiabilidade"
        >
          {/* Modern Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#D86C1F]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4CAF50]/15 rounded-full blur-3xl transform translate-x-1/3"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1F2E5C]/25 rounded-full blur-3xl transform translate-y-1/2"></div>
            {/* Subtle geometric patterns */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-lg rotate-12"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/10 rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-6xl relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Header */}
              <motion.div className="text-center mb-16" variants={fadeInUp}>
                <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Confiança e Segurança
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  {t.trust.title}
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {t.trust.subtitle}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "6rem" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#4CAF50] mx-auto rounded-full"
                  />
                </div>
              </motion.div>

              {/* Steps Process */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <StepsProcess />
              </motion.div>

              {/* Bottom Section */}
              <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="max-w-2xl mx-auto">
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Nossa missão é restaurar não apenas seu crédito, mas também
                    sua confiança no sistema financeiro.
                  </p>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
                  >
                    <Shield className="w-5 h-5 text-[#4CAF50]" />
                    <span className="text-white font-medium">
                      100% Seguro e Legal
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="relative py-24 md:py-32 overflow-hidden"
          aria-label="Perguntas frequentes"
        >
          {/* Enhanced Background with gradient and floating elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
            {/* Multiple gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Enhanced floating geometric elements */}
            {[
              { id: 0, size: 45, x: 15, y: 20, delay: 0.5 },
              { id: 1, size: 35, x: 75, y: 10, delay: 1.2 },
              { id: 2, size: 50, x: 25, y: 70, delay: 0.8 },
              { id: 3, size: 30, x: 85, y: 55, delay: 2.1 },
              { id: 4, size: 40, x: 55, y: 25, delay: 1.5 },
              { id: 5, size: 38, x: 10, y: 85, delay: 0.3 },
              { id: 6, size: 42, x: 65, y: 75, delay: 1.8 },
              { id: 7, size: 33, x: 90, y: 35, delay: 2.5 },
            ].map((element) => (
              <motion.div
                key={element.id}
                className="absolute opacity-20"
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + element.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.delay,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1F2E5C]/40 to-[#D86C1F]/40 rounded-xl transform rotate-45 shadow-lg" />
              </motion.div>
            ))}

            {/* Additional decorative elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-1 h-1 bg-[#4CAF50] rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#1F2E5C] rounded-full animate-pulse delay-500" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="text-center mb-12" variants={fadeInUp}>
                <h2 className="text-2xl lg:text-4xl font-bold text-[#1F2E5C] mb-4">
                  {t.faq.title}
                </h2>
                <p className="text-lg text-slate-600">{t.faq.subtitle}</p>
              </motion.div>

              <div
                className="space-y-4"
                role="list"
                aria-label="Lista de perguntas frequentes"
              >
                {t.faq.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
                    role="listitem"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-all duration-300 focus:outline-none"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenFaq(openFaq === index ? null : index);
                        }
                      }}
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span className="font-semibold text-[#1F2E5C] pr-4">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-5 h-5 text-[#1F2E5C]" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      id={`faq-answer-${index}`}
                      aria-labelledby={`faq-question-${index}`}
                      role="region"
                    >
                      <div className="px-6 pb-4 text-slate-600 leading-relaxed bg-slate-50">
                        {item.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden text-white"
          aria-label="Entre em contato"
        >
          {/* Modern Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#D86C1F]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4CAF50]/15 rounded-full blur-3xl transform translate-x-1/3"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1F2E5C]/25 rounded-full blur-3xl transform translate-y-1/2"></div>
            {/* Subtle geometric patterns */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-lg rotate-12"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/10 rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl lg:text-4xl font-bold text-center mb-6"
                variants={fadeInUp}
              >
                {t.contact.title}
              </motion.h2>
              <motion.p
                className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                {t.contact.subtitle}
              </motion.p>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div variants={fadeInLeft}>
                  <Card className="border-0 shadow-xl h-full bg-white/10 backdrop-blur-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-8 text-white">
                        {t.contact.info.title}
                      </h3>
                      <div
                        className="space-y-8"
                        role="list"
                        aria-label="Informações de contato"
                      >
                        <motion.div
                          className="flex items-center space-x-4"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          role="listitem"
                        >
                          <div
                            className="w-12 h-12 bg-[#4CAF50] rounded-2xl flex items-center justify-center shadow-lg"
                            role="img"
                            aria-label="Ícone de telefone"
                          >
                            <Phone
                              className="w-6 h-6 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-blue-100">
                              {t.contact.info.phone_label}
                            </div>
                            <a
                              href={`tel:${t.contact.info.phone.replace(
                                /\D/g,
                                "",
                              )}`}
                              className="text-white text-lg hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F2E5C] rounded-md"
                            >
                              {t.contact.info.phone}
                            </a>
                          </div>
                        </motion.div>
                        <motion.div
                          className="flex items-center space-x-4"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          role="listitem"
                        >
                          <div
                            className="w-12 h-12 bg-[#D86C1F] rounded-2xl flex items-center justify-center shadow-lg"
                            role="img"
                            aria-label="Ícone de email"
                          >
                            <Mail
                              className="w-6 h-6 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-blue-100">
                              E-mail
                            </div>
                            <a
                              href={`mailto:contact@fixpathcredit.org`}
                              className="text-white text-lg hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F2E5C] rounded-md"
                            >
                              contact@fixpathcredit.org
                            </a>
                          </div>
                        </motion.div>

                        <p className="text-white text-sm">
                          {t.contact.legalDisclaimer.content}
                        </p>
                        <p className="text-white text-sm">
                          {t.contact.legalDisclaimer.paragraph}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInRight}>
                  <Card className="border-0 shadow-xl bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center bg-green-50 text-green-700 p-3 rounded-lg mb-6 border border-green-200">
                        <Shield
                          className="w-5 h-5 mr-2 text-green-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium">
                          {t.contact.security}
                        </span>
                      </div>

                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        id="form"
                        className="space-y-6"
                        role="form"
                        aria-label="Formulário de contato"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="contact-name"
                              className="block text-sm font-medium text-[#333333] mb-2"
                            >
                              {t.contact.form.name}{" "}
                              <span
                                className="text-red-500"
                                aria-label="campo obrigatório"
                              >
                                *
                              </span>
                            </label>
                            <Input
                              id="contact-name"
                              type="text"
                              className="border-[#B0B9C6] focus:border-[#1F2E5C] rounded-lg"
                              placeholder={t.contact.form.name}
                              aria-describedby="name-error"
                              {...register("name")}
                            />
                            <div id="name-error" aria-live="polite">
                              {errors.name && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.name.message}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="contact-email"
                              className="block text-sm font-medium text-[#333333] mb-2"
                            >
                              {t.contact.form.email}{" "}
                              <span
                                className="text-red-500"
                                aria-label="campo obrigatório"
                              >
                                *
                              </span>
                            </label>
                            <Input
                              id="contact-email"
                              type="email"
                              className="border-[#B0B9C6] focus:border-[#1F2E5C] rounded-lg"
                              placeholder={t.contact.form.email}
                              aria-describedby="email-error"
                              {...register("email")}
                            />
                            <div id="email-error" aria-live="polite">
                              {errors.email && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.email.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="block text-sm font-medium text-[#333333] mb-2"
                          >
                            {t.contact.form.phone}
                          </label>
                          <Input
                            id="contact-phone"
                            type="tel"
                            className="border-[#B0B9C6] focus:border-[#1F2E5C] rounded-lg"
                            placeholder={t.contact.form.phone}
                            aria-describedby="phone-help"
                            {...register("phone")}
                          />
                          <div
                            id="phone-help"
                            className="text-sm text-gray-500 mt-1"
                          >
                            {errors.phone && (
                              <p className="mt-1 text-xs text-red-600">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="contact-message"
                            className="block text-sm font-medium text-[#333333] mb-2"
                          >
                            {t.contact.form.message}{" "}
                            <span
                              className="text-red-500"
                              aria-label="campo obrigatório"
                            >
                              *
                            </span>
                          </label>
                          <Textarea
                            id="contact-message"
                            className="border-[#B0B9C6] focus:border-[#1F2E5C] min-h-[120px] rounded-lg"
                            placeholder={t.contact.form.placeholder}
                            aria-describedby="message-help message-error"
                            {...register("message")}
                          />
                          <div
                            id="message-help"
                            className="text-sm text-gray-500 mt-1"
                          >
                            {t.contact.form.describeYourSituation}
                          </div>
                          <div id="message-error" aria-live="polite">
                            {errors.message && (
                              <p className="mt-1 text-sm text-red-600">
                                {errors.message.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <motion.div
                          whileHover={buttonHover}
                          whileTap={buttonTap}
                        >
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-[#D86C1F] hover:bg-[#C55A0F] text-white text-base font-semibold rounded-xl shadow-lg hover:shadow-xl border-0 focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2"
                            aria-describedby="submit-help"
                          >
                            {isSubmitting ? (
                              <Spinner />
                            ) : (
                              <>
                                <span className="mr-2">
                                  {t.contact.form.submit}
                                </span>
                                <ArrowRight
                                  className="w-5 h-5 inline-block"
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </Button>
                          <div id="submit-help" className="sr-only">
                            Clique para enviar o formulário de contato
                          </div>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer language={language} translations={translations} />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-[#D86C1F] z-50"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        role="progressbar"
        aria-label="Progresso de leitura da página"
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Screen Reader Announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {/* Anúncios dinâmicos para leitores de tela serão inseridos aqui via JavaScript */}
      </div>
    </div>
  );
}
