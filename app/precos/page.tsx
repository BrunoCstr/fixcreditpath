"use client";

import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";

// Variantes de animação para reutilização
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
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
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function PricingPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Seção de Planos - Background Gradiente */}
        <motion.section
          id="planos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-32 pb-20 relative overflow-hidden"
        >
          {/* Enhanced Background with gradient and floating elements - Same as hero section */}
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
          <div className="container mx-auto px-4 relative z-30">
            <div className="max-w-7xl mx-auto pt-[35px]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2E5C] leading-tight mb-6"
                >
                  Escolha Seu Plano de
                  <span className="block text-[#D86C1F] mt-2">
                    Recuperação de Crédito
                  </span>
                </motion.h1>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Soluções transparentes e eficazes para cada necessidade. Todos
                  os planos incluem garantia de satisfação.
                </p>
              </motion.div>

              {/* Cards de Planos */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Plano Básico */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gray-300"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-[#3C4A75] rounded-full flex items-center justify-center mx-auto mb-6"
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-2">
                      Básico
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Ideal para análise inicial completa
                    </p>
                    <div className="text-4xl font-bold text-[#D86C1F] mb-2">
                      R$ 297
                    </div>
                    <p className="text-sm text-gray-500">Pagamento único</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "Análise completa de crédito em 72h",
                      "Relatório detalhado de erros e inconsistências",
                      "Plano de ação personalizado",
                      "1 rodada de disputas profissionais",
                      "Suporte por email",
                      "Garantia de 30 dias",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <svg
                          className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="/contato"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-[#1F2E5C] py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-300"
                  >
                    Escolher Plano Básico
                  </motion.a>
                </motion.div>

                {/* Plano Profissional - Mais Popular */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-[#D86C1F] rounded-2xl p-8 shadow-xl relative transform lg:scale-105"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D86C1F] text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>

                  <div className="text-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-[#D86C1F] rounded-full flex items-center justify-center mx-auto mb-6"
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-2">
                      Profissional
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Para resultados consistentes e rápidos
                    </p>
                    <div className="text-4xl font-bold text-[#D86C1F] mb-2">
                      R$ 697<span className="text-lg">/mês</span>
                    </div>
                    <p className="text-sm text-gray-500">Faturamento mensal</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "Tudo do plano Básico incluído",
                      "Disputas ilimitadas até resolução",
                      "Negociação ativa com credores",
                      "Monitoramento mensal contínuo",
                      "Suporte prioritário por telefone e WhatsApp",
                      "Relatórios mensais de progresso",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <svg
                          className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">
                          {index === 0 ? <strong>{feature}</strong> : feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="/contato"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#D86C1F] hover:bg-[#E1893D] text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-300 shadow-lg"
                  >
                    Escolher Plano Profissional
                  </motion.a>
                </motion.div>

                {/* Plano Premium */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gray-300"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-[#256D2A] rounded-full flex items-center justify-center mx-auto mb-6"
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
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-2">
                      Premium
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Solução completa com suporte dedicado
                    </p>
                    <div className="text-4xl font-bold text-[#D86C1F] mb-2">
                      R$ 1.197<span className="text-lg">/mês</span>
                    </div>
                    <p className="text-sm text-gray-500">Faturamento mensal</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "Tudo do plano Profissional incluído",
                      "Consultor dedicado exclusivo",
                      "Suporte 24/7 por todos os canais",
                      "Garantia estendida de 120 dias",
                      "Consultoria financeira completa",
                      "Preparação para grandes compras (casa, carro)",
                      "Proteção completa contra fraudes",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <svg
                          className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">
                          {index === 0 ? <strong>{feature}</strong> : feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="/contato"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#256D2A] hover:bg-[#4CAF50] text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-300"
                  >
                    Escolher Plano Premium
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Garantias, Benefícios e Diferenciais */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-20"
          style={{
            background: `linear-gradient(135deg, #1F2E5C 0%, #2C4B73 25%, #1F2E5C 50%, #1F2E5C 70%, #2A3F66 85%, #1F2E5C 100%)`,
          }}
        >
          {/* Enhanced decorative overlay patterns */}
          <div className="absolute inset-0">
            {/* Multiple gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/10 via-transparent to-[#3C4A75]/8" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F2E5C]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#256D2A]/5 via-transparent to-[#D86C1F]/5" />

            {/* Enhanced floating geometric elements */}
            {[
              {
                id: 0,
                size: 60,
                x: 10,
                y: 15,
                delay: 0.5,
                color: "from-[#D86C1F]/30 to-[#D86C1F]/10",
              },
              {
                id: 1,
                size: 45,
                x: 85,
                y: 20,
                delay: 1.2,
                color: "from-[#3C4A75]/20 to-[#2C4B73]/10",
              },
              {
                id: 2,
                size: 55,
                x: 20,
                y: 80,
                delay: 0.8,
                color: "from-[#D86C1F]/20 to-[#1F2E5C]/10",
              },
              {
                id: 3,
                size: 40,
                x: 90,
                y: 70,
                delay: 2.1,
                color: "from-[#2C4B73]/15 to-[#1F2E5C]/10",
              },
              {
                id: 4,
                size: 35,
                x: 50,
                y: 10,
                delay: 1.8,
                color: "from-[#4CAF50]/20 to-[#256D2A]/10",
              },
              {
                id: 5,
                size: 48,
                x: 75,
                y: 85,
                delay: 2.5,
                color: "from-[#D86C1F]/25 to-[#E1893D]/10",
              },
            ].map((element) => (
              <motion.div
                key={element.id}
                className="absolute"
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
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 12 + element.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.delay,
                }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${element.color} rounded-2xl transform rotate-45 shadow-lg`}
                />
              </motion.div>
            ))}

            {/* Additional decorative elements */}
            <div className="absolute top-32 left-32 w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse opacity-60" />
            <div className="absolute top-60 right-48 w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse delay-1000 opacity-40" />
            <div className="absolute bottom-40 left-64 w-4 h-4 bg-[#256D2A] rounded-full animate-pulse delay-500 opacity-50" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#256D2A] text-white px-6 py-3 rounded-full shadow-lg">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-white rounded-full"
                    ></motion.div>
                    <span className="font-semibold text-sm">
                      POR QUE ESCOLHER A FIX PATH?
                    </span>
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  Mais do que Promessas,
                  <span className="block text-[#D86C1F] mt-2">
                    Entregamos Garantias
                  </span>
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="h-1.5 bg-gradient-to-r from-[#D86C1F] to-[#E1893D] mx-auto mb-8"
                />
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Trabalhamos com total transparência e oferecemos garantias
                  sólidas para sua tranquilidade.
                  <span className="block mt-4 text-lg text-[#4CAF50] font-medium">
                    Especialistas dedicados em restauração de crédito!
                    ⭐⭐⭐⭐⭐
                  </span>
                </p>
              </motion.div>

              {/* Main Guarantees Grid */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid lg:grid-cols-3 gap-8 mb-20"
              >
                {[
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-white"
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
                    ),
                    title: "Garantia de Satisfação",
                    description:
                      "Sua confiança é nossa prioridade. Se nossa análise não identificar oportunidades reais de melhoria, devolvemos seu investimento.",
                    color: "bg-[#4CAF50]",
                    stats: "30 dias",
                    badge: "100% do dinheiro de volta",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    ),
                    title: "Preço Fixo Garantido",
                    description:
                      "O preço que você vê é o preço que você paga. Sem surpresas, sem cobranças extras, sem taxas escondidas.",
                    color: "bg-[#D86C1F]",
                    stats: "0 taxas extras",
                    badge: "Transparência total",
                  },
                  {
                    icon: (
                      <svg
                        className="w-10 h-10 text-white"
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
                    ),
                    title: "Flexibilidade Total",
                    description:
                      "Cancele a qualquer momento sem multas ou penalidades. Mude de plano quando quiser. Você está no controle.",
                    color: "bg-[#3C4A75]",
                    stats: "0 multas",
                    badge: "Cancele quando quiser",
                  },
                ].map((guarantee, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-20 h-20 ${guarantee.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl`}
                    >
                      {guarantee.icon}
                    </motion.div>

                    <div className="mb-4">
                      <div
                        className={`inline-block px-3 py-1 text-xs font-bold rounded-full text-white ${guarantee.color} mb-2`}
                      >
                        {guarantee.badge}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 text-base">
                      {guarantee.description}
                    </p>

                    <div className="text-3xl font-bold text-[#4CAF50] mb-2">
                      {guarantee.stats}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Rápido sobre Preços */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
        >
          {/* Enhanced Background with gradient and floating elements - Same as pricing section */}
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
          <div className="container mx-auto px-4 relative z-30">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Perguntas Frequentes sobre Preços
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    question: "Posso mudar de plano a qualquer momento?",
                    answer:
                      "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Entre em contato conosco e ajustaremos sua assinatura conforme sua necessidade.",
                  },
                  {
                    question: "Há desconto para pagamento anual?",
                    answer:
                      "Sim! Oferecemos 2 meses grátis para pagamentos anuais nos planos Profissional e Premium. Entre em contato para conhecer as condições especiais.",
                  },
                  {
                    question: "O que acontece se eu não tiver resultados?",
                    answer:
                      "Oferecemos garantia de satisfação. Se não identificarmos oportunidades de melhoria em sua análise inicial, devolvemos 100% do valor investido.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section Secundário */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Não Encontrou o Que Precisa?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Nossa equipe de especialistas pode criar uma solução
                  personalizada para sua situação específica.
                </p>
                <motion.a
                  href="/contato"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block bg-[#1F2E5C] hover:bg-[#3C4A75] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Fale Conosco
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section Final */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-[#1F2E5C] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-[#D86C1F]/10 rounded-full translate-x-32 -translate-y-32"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-[#256D2A]/10 rounded-full -translate-x-40 translate-y-40"
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comece Sua Recuperação de Crédito Hoje
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Escolha o plano ideal para sua situação e dê o primeiro passo
                rumo à liberdade financeira. Consulta inicial gratuita para
                todos os planos.
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
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Quero Recuperar Meu Crédito
                </motion.a>
                <motion.a
                  href="/servicos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Conhecer Serviços
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
