"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/i18n/translations";
import { useState } from "react";
import {
  Rocket,
  UserCog,
  Headphones,
  TrendingUp,
  ShieldCheck,
  Eye,
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Award,
  Scale,
  Languages,
  Wallet,
  UserCheck,
} from "lucide-react";

const iconMap = {
  rocket: Rocket,
  "user-cog": UserCog,
  headphones: Headphones,
  "trending-up": TrendingUp,
  "shield-check": ShieldCheck,
  eye: Eye,
  scale: Scale,
  languages: Languages,
  wallet: Wallet,
  "user-check": UserCheck,
  star: Star,
};

const WhatMakesUsDifferent = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Safety check for translations
  if (!t?.about?.whatMakesUsDifferent) {
    return null;
  }

  const floatingElements = [
    { id: 0, size: 45, x: 15, y: 20, delay: 0.5 },
    { id: 1, size: 35, x: 75, y: 10, delay: 1.2 },
    { id: 2, size: 50, x: 25, y: 70, delay: 0.8 },
    { id: 3, size: 30, x: 85, y: 55, delay: 2.1 },
    { id: 4, size: 40, x: 55, y: 25, delay: 1.5 },
    { id: 5, size: 38, x: 10, y: 85, delay: 0.3 },
    { id: 6, size: 42, x: 65, y: 75, delay: 1.8 },
    { id: 7, size: 33, x: 90, y: 35, delay: 2.5 },
  ];

  const cardVariants = {
    idle: {
      scale: 1,
      rotateY: 0,
      z: 0,
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    idle: {
      rotate: 0,
      scale: 1,
    },
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Enhanced Background with gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Enhanced floating geometric elements */}
        {floatingElements.map((element) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm border border-white/50 rounded-full px-4 md:px-8 py-2 md:py-3 mb-6 md:mb-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div>
              <Sparkles className="w-5 h-5 text-[#D86C1F]" />
            </motion.div>
            <span className="text-xs md:text-sm font-semibold text-[#1F2E5C] tracking-wide">
              NOSSOS DIFERENCIAIS EXCLUSIVOS
            </span>
          </motion.div>

          {/* Main Title with enhanced typography */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2E5C] mb-6 md:mb-8 leading-tight px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-[#1F2E5C] via-[#3C4A75] to-[#1F2E5C] bg-clip-text text-transparent">
              {t.about.whatMakesUsDifferent.title}
            </span>
          </motion.h2>

          {/* Subtitle with better spacing */}
          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.about.whatMakesUsDifferent.subtitle}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-32 h-1 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#4CAF50] rounded-full" />
          </motion.div>
        </motion.div>

        {/* Enhanced Cards Grid with improved mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {t.about.whatMakesUsDifferent.items.map((item, index) => {
            const IconComponent =
              iconMap[item.icon as keyof typeof iconMap] || Sparkles;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`group relative ${isEven ? "lg:mt-8" : ""}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                variants={cardVariants}
                animate={hoveredCard === index ? "hover" : "idle"}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{ perspective: 1000 }}
              >
                {/* Main Card */}
                <div className="relative h-full p-6 md:p-8 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/60 rounded-2xl md:rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D86C1F]/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Enhanced Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 bg-gradient-to-br from-[#1F2E5C] via-[#3C4A75] to-[#1F2E5C] rounded-xl md:rounded-2xl shadow-lg group-hover:shadow-xl relative overflow-hidden"
                      variants={iconVariants}
                      animate={hoveredCard === index ? "hover" : "idle"}
                    >
                      {/* Icon background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D86C1F] to-[#4CAF50] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" />

                      {/* Floating particles around icon */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-[#D86C1F] rounded-full opacity-0 group-hover:opacity-100"
                        animate={
                          hoveredCard === index
                            ? {
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Enhanced Title */}
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-[#1F2E5C] mb-4 md:mb-6 group-hover:text-[#D86C1F] transition-colors duration-300"
                      animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Enhanced Description */}
                    <motion.p
                      className="text-gray-600 leading-relaxed text-base md:text-lg font-light"
                      animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Animated bottom accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#4CAF50] rounded-full"
                      initial={{ width: "30%" }}
                      animate={
                        hoveredCard === index
                          ? { width: "100%" }
                          : { width: "30%" }
                      }
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Floating elements inside card */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-[#4CAF50] rounded-full opacity-0 group-hover:opacity-60"
                    animate={
                      hoveredCard === index
                        ? {
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Card number indicator */}
                <motion.div
                  className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#D86C1F] to-[#E1893D] rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  <span className="text-white text-sm font-bold">
                    {index + 1}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="text-center mt-16 md:mt-24 px-4 md:px-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm border border-white/60 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#1F2E5C] mb-4">
              Pronto para Transformar Seu Crédito?
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
              Faça parte da nova geração de clientes que estão recuperando seu
              crédito conosco.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Decorative bottom element */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-[#1F2E5C] to-[#D86C1F] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
