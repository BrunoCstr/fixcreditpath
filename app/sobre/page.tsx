"use client";

import { motion } from "framer-motion";
import { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/i18n/translations";
import { Target, Eye, Shield, Heart, Lock } from "lucide-react";

// Variantes de animação para reutilização
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations.aboutPage;

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Design Único para Sobre */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white min-h-screen flex items-center overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16"
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

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center lg:text-left"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-flex items-center bg-[#1F2E5C]/10 text-[#1F2E5C] px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.hero.badge}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2E5C] mb-6 leading-tight"
                  >
                    {t.hero.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    {t.hero.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <motion.a
                      href="/contato"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white px-8 py-4 rounded-2xl font-extrabold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl group overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                    >
                      {/* Enhanced Button shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      {/* Additional glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 to-[#E1893D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                      <span className="relative text-white font-extrabold tracking-wide">{t.hero.cta1}</span>
                    </motion.a>
                    <motion.a
                      href="/servicos"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-[#1F2E5C] text-[#1F2E5C] hover:bg-[#1F2E5C] hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                    >
                      {t.hero.cta2}
                    </motion.a>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="relative z-10"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/assets/836e37a3bf8e47568022ee26234807f2/repair_your_credit_reclaim_your_future_1-08a1b5?format=webp&width=800"
                      alt="Família feliz representando nossos clientes satisfeitos com os serviços da Fix Path Credit"
                      className="rounded-3xl shadow-2xl w-full"
                    />
                  </motion.div>

                  {/* Cards responsivos - Hidden no mobile, visíveis no desktop */}
                  <motion.div
                    initial={{ opacity: 0, y: 60, x: -60 }}
                    animate={{ opacity: 1, y: -8, x: -8 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="hidden lg:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 z-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="text-3xl font-bold text-[#D86C1F] mb-1"
                    >
                      2024
                    </motion.div>
                    <div className="text-sm text-gray-600">New Company</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -60, x: 60 }}
                    animate={{ opacity: 1, y: -8, x: -8 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="hidden lg:block absolute -top-8 -right-8 bg-[#256D2A] text-white p-6 rounded-2xl shadow-xl z-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="text-3xl font-bold mb-1"
                    >
                      100%
                    </motion.div>
                    <div className="text-sm">Customer Focus</div>
                  </motion.div>

                  {/* Cards mobile - Visíveis apenas no mobile, abaixo da imagem */}
                  <div className="lg:hidden mt-8 grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="text-2xl font-bold text-[#D86C1F] mb-1"
                      >
                        2024
                      </motion.div>
                      <div className="text-xs text-gray-600">New Company</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="bg-[#256D2A] text-white p-4 rounded-xl shadow-lg text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="text-2xl font-bold mb-1"
                      >
                        100%
                      </motion.div>
                      <div className="text-xs">Customer Focus</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Seção Separadora com Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-20 bg-gradient-to-r from-gray-50 to-gray-100"
        >
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className={`w-2 h-2 rounded-full ${
                    index === 0
                      ? "bg-[#D86C1F]"
                      : index === 1
                      ? "bg-[#1F2E5C]"
                      : "bg-[#256D2A]"
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Nossa História - Background com Gradiente Suave */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
        >
          {/* Background Pattern Moderno */}
          <div className="absolute inset-0">
            <div
              className={
                'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
              }
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/10 via-transparent to-[#D86C1F]/10"></div>
          </div>

          {/* Elementos Decorativos Suaves */}
          <div className="absolute inset-0" aria-hidden="true">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#D86C1F]/10 via-[#FF8C42]/5 to-transparent rounded-full blur-xl"
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#4CAF50]/8 via-[#256D2A]/5 to-transparent rounded-full blur-2xl"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="relative inline-block">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
                    {t.history.title}
                  </h2>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -inset-4 bg-gradient-to-r from-[#D86C1F]/5 via-[#1F2E5C]/5 to-[#256D2A]/5 rounded-2xl blur-xl"
                  />
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-[#D86C1F] via-[#1F2E5C] to-[#256D2A] mx-auto mb-8 rounded-full"
                />
                <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                  {t.history.subtitle}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute left-6 sm:left-8 top-0 w-0.5 bg-gradient-to-b from-[#D86C1F] via-[#256D2A] to-[#3C4A75] opacity-60"
                  />

                  <div className="space-y-12">
                    {t.history.timeline.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInLeft}
                        className="relative"
                      >
                        {/* Timeline Icon */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className={`absolute left-4 sm:left-6 top-4 sm:top-6 w-4 h-4 bg-[#D86C1F] rounded-full border-4 border-white shadow-lg z-10`}
                        />

                        {/* Timeline Card */}
                        <motion.div
                          whileHover={{
                            scale: 1.02,
                            x: 8,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                          }}
                          transition={{ duration: 0.3 }}
                          className="ml-12 sm:ml-16 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                        >
                          {/* Gradient Background */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br from-[#D86C1F] to-[#E17A2F] opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                          />

                          <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.2 + 0.3,
                                }}
                                viewport={{ once: true }}
                                className={`px-4 py-2 bg-gradient-to-r from-[#D86C1F] to-[#E17A2F] text-white rounded-full text-sm font-bold shadow-lg`}
                              >
                                {item.year}
                              </motion.div>
                              <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors">
                              {item.description}
                            </p>
                          </div>

                          {/* Decorative Corner */}
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.2 + 0.5,
                            }}
                            viewport={{ once: true }}
                            className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#D86C1F] to-[#E17A2F] opacity-10 transform rotate-45 translate-x-8 -translate-y-8`}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative lg:sticky lg:top-20 mt-8 lg:mt-0"
                >
                  <div className="relative mx-4 sm:mx-0">
                    {/* Decorative Background Elements */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5 rounded-3xl blur-2xl"
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/assets/836e37a3bf8e47568022ee26234807f2/repair_your_credit_reclaim_your_future_2-0e31dc?format=webp&width=800"
                        alt="Família satisfeita representando nossa jornada de sucesso"
                        className="rounded-2xl w-full h-96 sm:h-[28rem] lg:h-[32rem] object-cover"
                      />

                      {/* Overlay com gradiente suave */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className="absolute inset-0 bg-gradient-to-t from-[#1F2E5C]/20 via-transparent to-transparent rounded-2xl"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Seção Pilares - Background igual ao Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white min-h-screen flex items-center overflow-hidden py-12 md:py-16"
        >
          {/* Background decorativo animado */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-72 h-72 bg-[#1F2E5C]/5 rounded-full -translate-x-36 -translate-y-36"
            />
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-[#D86C1F]/5 rounded-full translate-x-48 translate-y-48"
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 bg-[#D86C1F]/10 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-[#D86C1F] rounded-full"></div>
                  <span className="text-[#1F2E5C] text-sm font-medium tracking-wide">
                    Values
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  What We Stand For
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6 rounded-full"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {t.mission.description}
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              >
                {/* Missão */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1F2E5C]/20 group min-h-[280px] lg:min-h-[300px]"
                >
                  <div className="mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ backgroundColor: "#1F2E5C" }}
                    >
                      <Lock className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-[#1F2E5C] mb-3 group-hover:text-[#D86C1F] transition-colors duration-300">
                      {t.mission.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {t.mission.description}
                  </p>
                </motion.div>
                
                {/* Visão */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D86C1F]/20 group min-h-[280px] lg:min-h-[300px]"
                >
                  <div className="mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ backgroundColor: "#D86C1F" }}
                    >
                      <Eye className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-[#1F2E5C] mb-3 group-hover:text-[#D86C1F] transition-colors duration-300">
                      {t.vision.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {t.vision.description}
                  </p>
                </motion.div>

                {/* Compliance */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#10B981]/20 group min-h-[280px] lg:min-h-[300px]"
                >
                  <div className="mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ backgroundColor: "#10B981" }}
                    >
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-[#1F2E5C] mb-3 group-hover:text-[#10B981] transition-colors duration-300">
                      {t.compliance.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {t.compliance.description}
                  </p>
                </motion.div>

                {/* Honestidade */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#EF4444]/20 group min-h-[280px] lg:min-h-[300px]"
                >
                  <div className="mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ backgroundColor: "#EF4444" }}
                    >
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-[#1F2E5C] mb-3 group-hover:text-[#EF4444] transition-colors duration-300">
                      {t.honesty.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {t.honesty.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Seção da Equipe - Background escuro igual ao Como Tudo Começou */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
        >
          {/* Background Pattern Moderno */}
          <div className="absolute inset-0">
            <div
              className={
                'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
              }
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/10 via-transparent to-[#D86C1F]/10"></div>
          </div>

          {/* Elementos Decorativos Suaves */}
          <div className="absolute inset-0" aria-hidden="true">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#D86C1F]/10 via-[#FF8C42]/5 to-transparent rounded-full blur-xl"
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#4CAF50]/8 via-[#256D2A]/5 to-transparent rounded-full blur-2xl"
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/assets/836e37a3bf8e47568022ee26234807f2/rebuild_your_credit-76b2b2?format=webp&width=800"
                    alt="Profissional especialista da Fix Path Credit oferecendo consultoria financeira personalizada"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      {t.team.title}
                    </h2>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "6rem" }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="h-1 bg-[#D86C1F] mb-6"
                    />
                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                      {t.team.subtitle}
                    </p>
                  </div>

                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4 sm:gap-6"
                  >
                    {t.team.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={scaleIn}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                        }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 * index }}
                          viewport={{ once: true }}
                          className={`text-2xl sm:text-3xl font-bold text-[#D86C1F] mb-2`}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-xs sm:text-sm text-white/80">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Como Funciona a Fix Path Credit - Background igual à Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white min-h-screen flex items-center overflow-hidden py-12 md:py-16"
        >
          {/* Background decorativo animado igual à hero */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-72 h-72 bg-[#1F2E5C]/5 rounded-full -translate-x-36 -translate-y-36"
            />
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-[#D86C1F]/5 rounded-full translate-x-48 translate-y-48"
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2E5C] mb-6">
                  {t.howItWorks.title}
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6"
                />
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t.howItWorks.subtitle}
                </p>
              </motion.div>

              {/* Processo Principal */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              >
                {t.howItWorks.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, y: 60 },
                      animate: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    className="relative bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#D86C1F]/30 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-16 h-16 bg-gradient-to-br from-[#D86C1F] to-[#E1893D] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-[#D86C1F] mb-2"
                    >
                      {step.number}
                    </motion.div>

                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Linha conectora */}
                    {index < 3 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#D86C1F]/50 origin-left"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Metodologia Detalhada */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#1F2E5C] mb-6 text-center">
                  {t.howItWorks.methodology.title}
                </h3>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {t.howItWorks.methodology.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#D86C1F]/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#D86C1F] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-[#1F2E5C] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section - Design Único */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-[#1F2E5C] relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-[#D86C1F]/10 rounded-full -translate-x-48 -translate-y-48"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-[#256D2A]/10 rounded-full translate-x-48 translate-y-48"
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t.cta.title}
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {t.cta.subtitle}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="/contato"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white px-8 py-4 rounded-2xl font-extrabold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl group overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                >
                  {/* Enhanced Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Additional glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 to-[#E1893D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                  <span className="relative text-white font-extrabold tracking-wide">{t.cta.cta1}</span>
                </motion.a>
                <motion.a
                  href="/precos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                >
                  {t.cta.cta2}
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
