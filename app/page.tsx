"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import {
  ArrowRight,
  Star,
  Mail,
  Shield,
  Phone,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CreditEducationSection } from "@/components/CreditEducationSection";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import { StepsProcess } from "@/components/StepsProcess";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { Spinner } from "@/components/spinner";

// Advanced Interactive Quiz Component with Slider Design
const QuizComponent = ({ quiz, t }: any) => {
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
        // Always show the generic solution regardless of answers
        setResult(quiz.solutions.generic);
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
                <span className="text-2xl mr-3">🔍</span>
                <span className="font-semibold text-lg">
                  {t.whoNeedsCredit.quiz.status.analysisRequired}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4">{result.title}</h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                {result.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => (window.location.href = "#contact")}
                  className="relative bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white px-10 py-5 text-lg font-extrabold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 min-w-[250px] group overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Enhanced Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                  {/* Additional glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 to-[#E1893D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                  <span className="relative mr-3 text-white font-extrabold tracking-wide">
                    🚀 {result.action}
                  </span>
                </motion.button>

                <button
                  onClick={resetQuiz}
                  className="text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-6 py-3 rounded-xl font-medium transition-all duration-200"
                >
                  ↺ {t.whoNeedsCredit.quiz.redo}
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
                  {t.whoNeedsCredit.quiz.questionLabel} {currentQuestion + 1} of{" "}
                  {quiz.questions.length}
                </div>
                <div className="text-lg font-semibold">
                  {t.whoNeedsCredit.quiz.diagnosticLabel}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                {Math.round(
                  ((currentQuestion + 1) / quiz.questions.length) * 100
                )}
                %
              </div>
              <div className="text-sm opacity-80">
                {t.whoNeedsCredit.quiz.completeLabel}
              </div>
            </div>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="relative">
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#4CAF50] via-[#D86C1F] to-[#4CAF50] rounded-full relative"
                initial={{ width: 0 }}
                animate={{
                  width: `${
                    ((currentQuestion + 1) / quiz.questions.length) * 100
                  }%`,
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
                )
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
                {t.whoNeedsCredit.quiz.previousLabel}
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
const CreditImpactSlider = ({ barriers, title, subtitle, t }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % barriers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, barriers.length]);

  return (
    <section className="py-48 md:py-72 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
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
              {/* Badge pode ser adicionado na tradução se desejar */}
              {title}
            </span>
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {title}
            <br />
            <span className="bg-gradient-to-r from-[#D86C1F] to-[#FF8C42] bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h2>
        </motion.div>
        {/* Compact 3-Column Layout */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {barriers.slice(0, 3).map((barrier: any, index: number) => (
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
                <div className="text-2xl mb-2">{barrier.icon}</div>
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
                      ❌{" "}
                      {barrier.urgency === "high"
                        ? barrier.beforeLabel || "Now"
                        : "Now"}
                    </div>
                    <div className="text-red-200 text-xs">
                      {barrier.consequence || (barrier.timeline?.before ?? "")}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-red-400 to-green-400"></div>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 text-center">
                    <div className="text-green-400 text-sm font-semibold mb-1">
                      ✅{" "}
                      {barrier.urgency === "high"
                        ? barrier.afterLabel || "With Clean Score"
                        : "With Clean Score"}
                    </div>
                    <div className="text-green-200 text-xs">
                      {barrier.solution || (barrier.timeline?.after ?? "")}
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
                  {t.creditImpact.cta.badge}
                </span>
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {t.creditImpact.cta.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                {t.creditImpact.cta.description}
              </p>
              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#D86C1F] to-[#FF8C42] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white px-8 py-4 rounded-2xl font-extrabold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Enhanced Button shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                {/* Additional glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 to-[#FF8C42]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                <div className="relative w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="relative text-white font-extrabold tracking-wide">
                  {t.creditImpact.cta.button}
                </span>
                <ArrowRight className="relative w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <div className="flex justify-center items-center gap-4 mt-4 text-gray-400 text-xs">
                {t.creditImpact.cta.items &&
                  t.creditImpact.cta.items.map((item: string, idx: number) => (
                    <span key={idx}>{item}</span>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
  const { t } = useLanguage();

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
      alt: "Happy woman using smartphone to control her finances",
    },
    {
      src: "/images/second_image_hero.png",
      alt: "Confident man checking his credit score on his phone",
    },
    {
      src: "/images/third_image_hero.jpeg",
      alt: "Happy man seeing his credit score on his phone",
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
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation
        language="en"
        setLanguage={() => {}}
        translations={t}
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
            <div className="container mx-auto px-4 sm:px-20 md:px-20 lg:px-12 xl:px-16 2xl:px-20">
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
                    aria-label={"Main action buttons"}
                  >
                    <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                      <Button
                        size="lg"
                        className="relative bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white px-10 py-5 text-lg rounded-2xl shadow-2xl hover:shadow-3xl border-0 focus:outline-none focus:ring-4 focus:ring-[#D86C1F] focus:ring-offset-4 group overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                        aria-describedby="cta1-description"
                        onClick={() =>
                          window.open(
                            "https://fixpath.getcredittheplnow.com/start",
                            "_blank"
                          )
                        }
                      >
                        {/* Enhanced Button shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                        {/* Additional glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 to-[#E1893D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                        <span className="relative mr-3 text-white font-extrabold tracking-wide">
                          {t.hero.cta1}
                        </span>
                        <ArrowRight
                          className="w-6 h-6 inline-block relative group-hover:translate-x-1 transition-transform duration-300"
                          aria-hidden="true"
                        />
                      </Button>
                      <span id="cta1-description" className="sr-only">
                        Main button to start the credit repair process
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
                        Secondary button to learn more about our services
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Disclaimer */}
                  <motion.p
                    className="text-xs sm:text-sm text-slate-500 mt-4 sm:mt-6 mb-12 sm:mb-16 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {t.hero.disclaimer}
                  </motion.p>
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
                      aria-label="Carousel image indicators"
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
                          aria-label={`Image ${index + 1} of ${
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

        {/* Process Section - Professional Timeline */}
        <section
          id="process"
          className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"
          aria-labelledby="process-title"
          role="region"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-[#D86C1F]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/3 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#4CAF50]/15 rounded-full blur-3xl transform translate-x-1/3"></div>
            <div className="absolute bottom-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-[#1F2E5C]/25 rounded-full blur-3xl transform translate-y-1/2"></div>

            {/* Geometric patterns */}
            <div className="absolute top-20 right-8 md:right-20 w-16 md:w-32 h-16 md:h-32 border border-white/10 rounded-lg rotate-12"></div>
            <div className="absolute bottom-32 left-8 md:left-16 w-12 md:w-24 h-12 md:h-24 border border-white/10 rounded-full"></div>

            {/* Timeline Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Header */}
              <motion.div
                className="text-center mb-12 md:mb-16"
                variants={fadeInUp}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6"
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[#4CAF50] rounded-full mr-2 md:mr-3 animate-pulse"></div>
                  <span className="text-xs md:text-sm font-semibold tracking-wide">
                    {t.process.badge}
                  </span>
                </motion.div>

                <h2
                  id="process-title"
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2"
                >
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    {t.process.title.split(" ").slice(0, -1).join(" ")}
                  </span>
                  <br />
                  <span className="text-[#D86C1F]">
                    {t.process.title.split(" ").slice(-1)}
                  </span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                  {t.process.description}
                </p>
              </motion.div>

              {/* Professional Timeline */}
              <div className="relative">
                {/* Main Timeline Line - Hidden on mobile */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute left-8 lg:left-12 top-0 w-1 bg-gradient-to-b from-[#4CAF50] via-[#D86C1F] to-[#1F2E5C] opacity-60"
                />

                {/* Timeline Steps */}
                <div className="space-y-8 md:space-y-16">
                  {t.process.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative flex flex-col md:flex-row items-start"
                    >
                      {/* Timeline Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className="relative z-10 flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0"
                      >
                        {/* Icon Background */}
                        <div
                          className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl ${
                            index === 0
                              ? "bg-gradient-to-br from-[#4CAF50] to-[#45a049]"
                              : index === 1
                              ? "bg-gradient-to-br from-[#2196F3] to-[#1976D2]"
                              : index === 2
                              ? "bg-gradient-to-br from-[#D86C1F] to-[#e17a2f]"
                              : "bg-gradient-to-br from-[#1F2E5C] to-[#3C4A75]"
                          }`}
                        >
                          {index === 0 && (
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                              />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg
                              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Step Number Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + 0.6,
                          }}
                          viewport={{ once: true }}
                          className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-[#D86C1F] rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg border-2 md:border-4 border-gray-900"
                        >
                          {index + 1}
                        </motion.div>
                      </motion.div>

                      {/* Content Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                        viewport={{ once: true }}
                        className="md:ml-6 lg:ml-8 flex-1 w-full"
                      >
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 group">
                          {/* Timeline Indicator */}
                          <div className="flex items-center mb-3 md:mb-4">
                            <div className="text-[#D86C1F] font-bold text-xs md:text-sm tracking-wider">
                              {t.process.stepLabel} {index + 1}
                            </div>
                            <div className="ml-2 md:ml-4 h-px bg-gradient-to-r from-[#D86C1F]/50 to-transparent flex-1"></div>
                          </div>

                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-blue-100 transition-colors leading-tight">
                            {step.title}
                          </h3>

                          <p className="text-blue-100 leading-relaxed text-sm md:text-base lg:text-lg mb-4 md:mb-6">
                            {step.description}
                          </p>

                          {/* Additional Details */}
                          <div className="space-y-2 md:space-y-3">
                            {step.details?.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="flex items-start text-xs md:text-sm text-blue-200"
                              >
                                <div
                                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0 ${
                                    index === 0
                                      ? "bg-[#4CAF50]"
                                      : index === 1
                                      ? "bg-[#2196F3]"
                                      : index === 2
                                      ? "bg-[#D86C1F]"
                                      : "bg-[#1F2E5C]"
                                  }`}
                                ></div>
                                <span className="leading-relaxed">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-center mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/20"
                >
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white px-4">
                    {t.process.cta.title}
                  </h3>
                  <p className="text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base px-4">
                    {t.process.cta.subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="relative inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#D86C1F] to-[#e17a2f] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-extrabold text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group mx-4 overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                  >
                    {/* Enhanced Button shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                    {/* Additional glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 to-[#e17a2f]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                    <svg
                      className="relative w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="relative text-center text-white font-extrabold tracking-wide">
                      {t.process.cta.button}
                    </span>
                    <svg
                      className="relative w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <WhatMakesUsDifferent />

        {/* Value Proposition Section */}

        {/* Educational Section */}
        <CreditEducationSection t={t} />

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
              className="max-w-4xl mx-auto px-1 xl:px-12"
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
              <QuizComponent quiz={t.whoNeedsCredit.quiz} t={t} />
            </motion.div>
          </div>
        </section>

        {/* Credit Impact - Premium Impact Slider */}
        <CreditImpactSlider
          barriers={t.creditImpact.barriers}
          title={t.creditImpact.title}
          subtitle={t.creditImpact.subtitle}
          t={t}
        />

        {/* Trust Section */}
        <section
          id="trust"
          className="relative py-24 md:py-32 overflow-hidden"
          aria-label="Nossa confiabilidade"
        >
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
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Header */}
              <motion.div className="text-center mb-16" variants={fadeInUp}>
                <div className="inline-flex items-center bg-[#1F2E5C]/10 text-[#1F2E5C] px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-[#1F2E5C]/20">
                  <Shield className="w-4 h-4 mr-2" />
                  Trust and Security
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2E5C] mb-6 leading-tight">
                  {t.trust.title}
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
                <StepsProcess theme="light" />
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
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Our mission is to restore not only your credit, but also
                    your confidence in the financial system.
                  </p>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-[#4CAF50]/10 backdrop-blur-sm border border-[#4CAF50]/20 rounded-full px-6 py-3"
                  >
                    <Shield className="w-5 h-5 text-[#4CAF50]" />
                    <span className="text-[#1F2E5C] font-medium">
                      100% Safe and Legal
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
          className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden text-white"
          aria-label="Perguntas frequentes"
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
              className="max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="text-center mb-12" variants={fadeInUp}>
                <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Frequently Asked Questions
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  {t.faq.title}
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {t.faq.subtitle}
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

              <div
                className="space-y-4"
                role="list"
                aria-label="Lista de perguntas frequentes"
              >
                {t.faq.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:bg-white/15 transition-all duration-300"
                    role="listitem"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-all duration-300 focus:outline-none text-white"
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
                      <span className="font-semibold text-white pr-4">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-5 h-5 text-white" />
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
                      <div className="px-6 pb-4 text-gray-300 leading-relaxed bg-white/5">
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
          className="relative py-24 md:py-32 overflow-hidden"
          aria-label="Entre em contato"
        >
          {/* Enhanced Background with gradient and floating elements - Same as Trust Section */}
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
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl lg:text-4xl font-bold text-center mb-6 text-[#1F2E5C]"
                variants={fadeInUp}
              >
                {t.contact.title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                {t.contact.subtitle}
              </motion.p>

              <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                <motion.div variants={fadeInLeft} className="w-full">
                  <Card className="border-0 shadow-xl h-full bg-white/80 backdrop-blur-lg border border-white/20 w-full">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-8 text-[#1F2E5C]">
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
                            <div className="font-semibold text-gray-700">
                              {t.contact.info.phone_label}
                            </div>
                            <a
                              href={`tel:${t.contact.info.phone.replace(
                                /\D/g,
                                ""
                              )}`}
                              className="text-[#1F2E5C] text-lg hover:text-[#D86C1F] focus:outline-none focus:ring-2 focus:ring-[#1F2E5C] focus:ring-offset-2 rounded-md"
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
                            <div className="font-semibold text-gray-700">
                              E-mail
                            </div>
                            <a
                              href={`mailto:contact@fixpathcredit.org`}
                              className="text-[#1F2E5C] text-lg hover:text-[#D86C1F] focus:outline-none focus:ring-2 focus:ring-[#1F2E5C] focus:ring-offset-2 rounded-md"
                            >
                              contact@fixpathcredit.org
                            </a>
                          </div>
                        </motion.div>

                        <p className="text-gray-600 text-sm">
                          {t.contact.legalDisclaimer.content}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {t.contact.legalDisclaimer.paragraph}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInRight} className="w-full">
                  <Card className="border-0 shadow-xl bg-white w-full">
                    <CardContent className="p-8">
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
                            className="relative w-full bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white text-lg font-extrabold rounded-2xl shadow-2xl hover:shadow-3xl border-0 focus:ring-4 focus:ring-[#D86C1F] focus:ring-offset-4 group overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                            aria-describedby="submit-help"
                          >
                            {/* Enhanced Button shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                            {/* Additional glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 to-[#E1893D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                            {isSubmitting ? (
                              <Spinner />
                            ) : (
                              <>
                                <span className="relative mr-3 text-white font-extrabold tracking-wide">
                                  {t.contact.form.submit}
                                </span>
                                <ArrowRight
                                  className="relative w-6 h-6 inline-block group-hover:translate-x-1 transition-transform duration-300"
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
      <Footer language="en" translations={t} />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-[#D86C1F] z-50"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        role="progressbar"
        aria-label="Page reading progress"
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
