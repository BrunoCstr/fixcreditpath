"use client";

import { motion } from "framer-motion";
import { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import CreditScoreSavingsSimulator from "@/components/credit-score-savings-simulator";

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

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Institucional e Impactante */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen text-white relative overflow-hidden flex items-center pt-32 pb-20"
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
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Text */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Badge with Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-[#D86C1F] text-white px-4 py-2 rounded-lg text-sm font-bold">
                      #1 EM RESULTADOS
                    </div>
                    <div className="flex items-center gap-2 text-[#1F2E5C] text-sm font-medium">
                      <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
                      <span>+5.000 clientes atendidos</span>
                    </div>
                  </motion.div>

                  {/* Main Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2E5C] leading-tight"
                  >
                    Soluções Profissionais em
                    <span className="block bg-gradient-to-r from-[#D86C1F] to-[#E1893D] bg-clip-text text-transparent mt-2">
                      Restauração de Crédito
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl text-gray-600 leading-relaxed"
                  >
                    Metodologia comprovada que combina{" "}
                    <strong className="text-[#1F2E5C]">
                      expertise técnica
                    </strong>{" "}
                    e
                    <strong className="text-[#D86C1F]">
                      {" "}
                      tecnologia avançada
                    </strong>{" "}
                    para entregar resultados consistentes e mensuráveis na
                    recuperação do seu score.
                  </motion.p>

                  {/* Key Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-3 gap-6"
                  >
                    {[
                      {
                        number: "120+",
                        label: "Pontos Médios",
                        subtext: "Aumento em 90 dias",
                      },
                      {
                        number: "72h",
                        label: "Análise Completa",
                        subtext: "Relatório detalhado",
                      },
                      {
                        number: "98%",
                        label: "Taxa de Sucesso",
                        subtext: "Clientes satisfeitos",
                      },
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl md:text-3xl font-bold text-[#D86C1F]">
                          {metric.number}
                        </div>
                        <div className="text-sm font-semibold text-[#1F2E5C]">
                          {metric.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.subtext}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <motion.a
                      href="/contato"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                    >
                      Começar Agora
                    </motion.a>
                    <motion.a
                      href="#servicos"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-[#1F2E5C] text-[#1F2E5C] hover:bg-[#1F2E5C] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-center"
                    >
                      Ver Serviços
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Right Content - Service Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  {/* Main Service Cards */}
                  <div className="grid gap-4">
                    {[
                      {
                        icon: "📊",
                        title: "Análise Profunda",
                        desc: "Identificação completa de erros e oportunidades",
                        color: "from-[#1F2E5C] to-[#3C4A75]",
                      },
                      {
                        icon: "⚖️",
                        title: "Contestações Legais",
                        desc: "Disputas fundamentadas e estratégicas",
                        color: "from-[#D86C1F] to-[#E1893D]",
                      },
                      {
                        icon: "🤝",
                        title: "Negociação Ativa",
                        desc: "Acordos vantajosos com credores",
                        color: "from-[#256D2A] to-[#4CAF50]",
                      },
                      {
                        icon: "📈",
                        title: "Monitoramento 24/7",
                        desc: "Acompanhamento contínuo do progresso",
                        color: "from-[#3C4A75] to-[#1F2E5C]",
                      },
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white text-lg font-bold`}
                          >
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-[#1F2E5C] mb-2">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Trust Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="bg-gradient-to-r from-[#4CAF50] to-[#256D2A] rounded-2xl p-6 text-white text-center"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-bold">
                        100% Legal e Regulamentado
                      </span>
                    </div>
                    <p className="text-sm opacity-90">
                      Métodos aprovados pelos órgãos competentes com garantia de
                      conformidade
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Barra de Separação Animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-2 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#256D2A] origin-left"
        />

        {/* Serviços Detalhados - Background Branco */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2E5C] mb-6">
                  Nossos Serviços Principais
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Um conjunto completo de serviços desenvolvidos para atender
                  todas as suas necessidades de crédito
                </p>
              </motion.div>

              {/* Análise Completa de Crédito */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center mb-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-[#D86C1F] rounded-full flex items-center justify-center mr-4"
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
                      <h3 className="text-3xl font-bold text-[#1F2E5C]">
                        Análise Completa de Crédito
                      </h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-600 leading-relaxed"
                    >
                      Realizamos uma avaliação detalhada e minuciosa do seu
                      histórico de crédito, identificando erros,
                      inconsistências, informações desatualizadas e
                      oportunidades de melhoria em todos os órgãos de proteção.
                    </motion.p>

                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {[
                        "Análise em Serasa, SPC, Quod",
                        "Identificação de erros",
                        "Relatório detalhado",
                        "Projeção de melhoria",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-100"
                        >
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2Fc09a86a294c74a68823667087f9d14eb?format=webp&width=800"
                      alt="Família feliz recebendo análise de crédito personalizada da Fix Path Credit"
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 60, x: 60 }}
                      whileInView={{ opacity: 1, y: -6, x: -6 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute -bottom-6 -right-6 bg-[#256D2A] text-white p-6 rounded-xl shadow-lg cursor-pointer"
                    >
                      <div className="text-2xl font-bold">72h</div>
                      <div className="text-sm">Análise Completa</div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Divisor entre seções */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center mb-20"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="flex space-x-2"
                >
                  {[
                    { color: "bg-[#D86C1F]" },
                    { color: "bg-[#1F2E5C]" },
                    { color: "bg-[#256D2A]" },
                  ].map((dot, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                      }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`w-3 h-3 ${dot.color} rounded-full`}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Contestação de Informações */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1 relative"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2F3764069ee1124d83a25b8e6a1c67ea29?format=webp&width=800"
                      alt="Consultoria especializada em contestação de informações incorretas no CPF"
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 60, x: -60 }}
                      whileInView={{ opacity: 1, y: -6, x: -6 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute -bottom-6 -left-6 bg-[#D86C1F] text-white p-6 rounded-xl shadow-lg cursor-pointer"
                    >
                      <div className="text-2xl font-bold">IA+</div>
                      <div className="text-sm">Tecnologia</div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2 space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center mb-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-[#256D2A] rounded-full flex items-center justify-center mr-4"
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
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-3xl font-bold text-[#1F2E5C]">
                        Contestação Profissional
                      </h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-600 leading-relaxed"
                    >
                      Processo profissional e estratégico de disputa de
                      informações imprecisas, incorretas ou desatualizadas em
                      seu relatório de crédito, seguindo todas as
                      regulamentações e melhores práticas do setor.
                    </motion.p>

                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {[
                        "Contestações fundamentadas",
                        "Acompanhamento jurídico",
                        "Múltiplas rodadas",
                        "Documentação completa",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 cursor-pointer"
                        >
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Gradient Line Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#256D2A] origin-center"
        />

        {/* Simulador de Economia - Background Sofisticado */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden"
        >
          {/* Elementos Decorativos de Fundo */}
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="absolute inset-0 opacity-20"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(31, 46, 92, 0.15) 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-[#1F2E5C]/10 to-[#3C4A75]/5 rounded-3xl blur-sm transform rotate-12"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 45 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 2, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-[#D86C1F]/15 to-[#E17A2F]/10 rounded-2xl blur-sm transform -rotate-12"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-24 left-20 w-20 h-20 bg-gradient-to-br from-[#256D2A]/10 to-[#2E7A32]/5 rounded-full blur-sm"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-16 right-24 w-28 h-28 bg-gradient-to-br from-[#3C4A75]/8 to-[#4A5A85]/5 rounded-2xl blur-sm transform rotate-45"
            />

            {/* Gradient Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#1F2E5C]/5 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#D86C1F]/5 to-transparent rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header Section com design mais elaborado */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                {/* Badge decorativo */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block mb-6"
                >
                  <div className="bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    💰 Calculadora Interativa
                  </div>
                </motion.div>

                {/* Título com efeito visual */}
                <div className="relative inline-block mb-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2E5C] relative z-10"
                  >
                    Quanto Você Pode{" "}
                    <span className="relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D86C1F] to-[#E17A2F]">
                        Economizar?
                      </span>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D86C1F] to-[#E17A2F] rounded-full origin-left"
                      />
                    </span>
                  </motion.h2>

                  {/* Background glow effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -inset-8 bg-gradient-to-r from-[#1F2E5C]/5 via-[#D86C1F]/5 to-[#256D2A]/5 rounded-3xl blur-2xl"
                  />
                </div>

                {/* Subtitle com melhor styling */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto"
                >
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                    Descubra o{" "}
                    <strong className="text-[#1F2E5C]">
                      impacto financeiro real
                    </strong>{" "}
                    de melhorar seu score de crédito
                  </p>
                  <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                    Nossa calculadora interativa mostra exatamente quanto você
                    pode economizar em financiamentos, cartões e empréstimos
                  </p>
                </motion.div>

                {/* Ícones decorativos */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex justify-center gap-6 mt-8"
                >
                  {[
                    { icon: "💳", label: "Cartões" },
                    { icon: "🏠", label: "Financiamentos" },
                    { icon: "🚗", label: "Empréstimos" },
                    { icon: "📈", label: "Investimentos" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-lg border border-gray-100">
                        {item.icon}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Simulador com container melhorado */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Shadow container */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5 rounded-4xl blur-2xl transform scale-105" />

                <div className="relative">
                  <CreditScoreSavingsSimulator />
                </div>
              </motion.div>

              {/* Call-to-action adicional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 max-w-2xl mx-auto">
                  <p className="text-gray-700 mb-4">
                    <strong>Resultados baseados em dados reais</strong> de
                    clientes que melhoraram seus scores com nossos serviços
                  </p>
                  <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      +15.000 clientes atendidos
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Economia média de R$ 850/mês
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section - Background Azul Escuro */}
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
                Pronto para Recuperar Seu Crédito?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Nossos especialistas estão prontos para analisar sua situação e
                criar um plano personalizado para recuperar seu score.
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
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Solicitar Análise Gratuita
                </motion.a>
                <motion.a
                  href="/precos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                >
                  Ver Preços
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
