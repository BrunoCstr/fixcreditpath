"use client";

import { motion } from "framer-motion";
import { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";

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
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Design Único para Sobre */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden"
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

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    Nova empresa, resultados reais
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2E5C] mb-6 leading-tight"
                  >
                    Nossa Missão de
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="text-[#D86C1F] block"
                    >
                      Transformação
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    Fundada em 2024, somos uma empresa nova e inovadora dedicada
                    a ajudar famílias brasileiras a reconstruir seus sonhos
                    através da restauração de crédito.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.a
                      href="/contato"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      Conhecer Nossa Equipe
                    </motion.a>
                    <motion.a
                      href="/servicos"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-[#1F2E5C] text-[#1F2E5C] hover:bg-[#1F2E5C] hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                    >
                      Nossos Serviços
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
                      src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2F84cd75342a3c475da4fc848916288b4f?format=webp&width=800"
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
                    <div className="text-sm text-gray-600">Empresa Nova</div>
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
                    <div className="text-sm">Foco no Cliente</div>
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
                      <div className="text-xs text-gray-600">Empresa Nova</div>
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
                      <div className="text-xs">Foco no Cliente</div>
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
          className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="relative inline-block">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1F2E5C] mb-6 relative z-10">
                    Como Tudo Começou
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
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Uma jornada que começou com a missão de democratizar o acesso
                  ao crédito no Brasil
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                    className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-[#D86C1F] via-[#256D2A] to-[#3C4A75] opacity-30"
                  />

                  <div className="space-y-12">
                    {[
                      {
                        year: "2024",
                        title: "O Início",
                        content:
                          "A Fix Path Credit nasceu quando nossos fundadores perceberam que milhões de brasileiros estavam sendo prejudicados por informações incorretas em seus relatórios de crédito. Era preciso democratizar o acesso ao crédito justo.",
                        color: "from-[#D86C1F] to-[#E17A2F]",
                        bgColor:
                          "bg-gradient-to-br from-[#D86C1F]/5 to-[#E17A2F]/5",
                        iconColor: "bg-[#D86C1F]",
                      },
                      {
                        year: "2024",
                        title: "Desenvolvimento",
                        content:
                          "Desenvolvemos nossa plataforma própria de análise de crédito e montamos uma equipe especializada de consultores para oferecer o melhor atendimento aos nossos clientes.",
                        color: "from-[#256D2A] to-[#2E7A32]",
                        bgColor:
                          "bg-gradient-to-br from-[#256D2A]/5 to-[#2E7A32]/5",
                        iconColor: "bg-[#256D2A]",
                      },
                      {
                        year: "Hoje",
                        title: "Crescimento",
                        content:
                          "Como uma empresa nova e inovadora, estamos crescendo rapidamente com foco total na satisfação do cliente e resultados efetivos na restauração de crédito.",
                        color: "from-[#3C4A75] to-[#4A5A85]",
                        bgColor:
                          "bg-gradient-to-br from-[#3C4A75]/5 to-[#4A5A85]/5",
                        iconColor: "bg-[#3C4A75]",
                      },
                    ].map((item, index) => (
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
                          className={`absolute left-6 top-6 w-4 h-4 ${item.iconColor} rounded-full border-4 border-white shadow-lg z-10`}
                        />

                        {/* Timeline Card */}
                        <motion.div
                          whileHover={{
                            scale: 1.02,
                            x: 8,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                          }}
                          transition={{ duration: 0.3 }}
                          className={`ml-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 cursor-pointer group relative overflow-hidden ${item.bgColor}`}
                        >
                          {/* Gradient Background */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
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
                                className={`px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-bold shadow-lg`}
                              >
                                {item.year}
                              </motion.div>
                              <h3 className="text-xl font-bold text-[#1F2E5C] group-hover:text-[#2A3B6C] transition-colors">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                              {item.content}
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
                            className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${item.color} opacity-10 transform rotate-45 translate-x-8 -translate-y-8`}
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
                  className="relative lg:sticky lg:top-20"
                >
                  <div className="relative">
                    {/* Decorative Background Elements */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="absolute -inset-8 bg-gradient-to-br from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5 rounded-3xl blur-2xl"
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative bg-white rounded-3xl p-4 shadow-2xl"
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2Fc09a86a294c74a68823667087f9d14eb?format=webp&width=800"
                        alt="Família satisfeita representando nossa jornada de sucesso"
                        className="rounded-2xl w-full"
                      />

                      {/* Overlay com gradiente suave */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className="absolute inset-4 bg-gradient-to-t from-[#1F2E5C]/20 via-transparent to-transparent rounded-2xl"
                      />
                    </motion.div>

                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#D86C1F] to-[#E17A2F] text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm"
                    >
                      Nova e Inovadora
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Divisor Visual */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#256D2A] origin-left"
        />

        {/* Seção Pilares - Background Simples */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 md:py-24 bg-gray-50"
        >
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
                    NOSSOS FUNDAMENTOS
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Pilares Fundamentais
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6 rounded-full"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Os valores e princípios que nos guiam em nossa missão de
                  transformar vidas através da inovação e excelência
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  {
                    color: "#1F2E5C",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    title: "Nossa Missão",
                    content:
                      "Democratizar o acesso ao crédito justo e transparente, ajudando pessoas comuns a corrigir erros, melhorar suas pontuações e reconquistar o controle de suas vidas financeiras.",
                  },
                  {
                    color: "#D86C1F",
                    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                    title: "Nossa Visão",
                    content:
                      "Crescer como uma empresa de referência em restauração de crédito no Brasil, sendo reconhecida pela excelência, inovação e pelo impacto positivo na vida dos brasileiros.",
                  },
                  {
                    color: "#4CAF50",
                    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                    title: "Nossos Valores",
                    content: null,
                    values: [
                      "Transparência Total",
                      "Resultados Reais",
                      "Atendimento Humano",
                      "Conformidade Legal",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="mb-6">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: item.color }}
                      >
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
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[#1F2E5C] mb-4">
                        {item.title}
                      </h3>
                    </div>

                    {item.content ? (
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    ) : (
                      <ul className="space-y-3">
                        {item.values?.map((value, i) => (
                          <li key={i} className="flex items-center">
                            <div
                              className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-gray-600 font-medium">
                              {value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Divisor Visual */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#256D2A] origin-left"
        />

        {/* Seção da Equipe - Background Cinza Médio */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-100"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2Fa353a41cac8145b58d04e29133bfd951?format=webp&width=800"
                    alt="Profissional especialista da Fix Path Credit oferecendo consultoria financeira personalizada"
                    className="rounded-2xl shadow-2xl w-full"
                  />

                  {/* Card flutuante - Desktop apenas */}
                  <motion.div
                    initial={{ opacity: 0, y: 60, x: -60 }}
                    whileInView={{ opacity: 1, y: -6, x: -6 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-[#D86C1F] mb-1"
                    >
                      Nova
                    </motion.div>
                    <div className="text-sm text-gray-600">e Inovadora</div>
                  </motion.div>

                  {/* Card mobile - Abaixo da imagem */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="lg:hidden mt-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-[#D86C1F] mb-1"
                    >
                      Nova
                    </motion.div>
                    <div className="text-sm text-gray-600">e Inovadora</div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F2E5C] mb-6">
                      Nossa Equipe Especializada
                    </h2>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "6rem" }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="h-1 bg-[#D86C1F] mb-6"
                    />
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Como uma empresa nova e inovadora, nossa equipe é{" "}
                      <strong className="text-[#D86C1F]">
                        cuidadosamente selecionada
                      </strong>
                      , formada por profissionais qualificados incluindo
                      advogados especializados, analistas de crédito experientes
                      e consultores financeiros dedicados.
                    </p>
                  </div>

                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4 sm:gap-6"
                  >
                    {[
                      {
                        number: "2024",
                        label: "Ano de Fundação",
                        color: "text-[#D86C1F]",
                      },
                      {
                        number: "100%",
                        label: "Digital e Moderno",
                        color: "text-[#256D2A]",
                      },
                      {
                        number: "24/7",
                        label: "Suporte Online",
                        color: "text-[#3C4A75]",
                      },
                      {
                        number: "100%",
                        label: "Foco no Cliente",
                        color: "text-[#D86C1F]",
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        variants={scaleIn}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                        }}
                        className="bg-white rounded-lg p-6 text-center shadow-lg cursor-pointer"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 * index }}
                          viewport={{ once: true }}
                          className={`text-3xl font-bold ${stat.color} mb-2`}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-sm text-gray-600">
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

        {/* Como Funciona a Fix Path Credit - Background Moderno */}
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
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Como a Fix Path Credit Funciona
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6"
                />
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Nossa metodologia comprovada transforma seu perfil de crédito
                  através de um processo estruturado e transparente
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
                {[
                  {
                    number: "01",
                    title: "Análise Completa",
                    description:
                      "Avaliamos seu CPF nos 3 principais bureaus de crédito (Serasa, SPC, Quod) identificando erros, inconsistências e oportunidades de melhoria.",
                    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                    gradient: "from-[#D86C1F] to-[#E1893D]",
                  },
                  {
                    number: "02",
                    title: "Estratégia Personalizada",
                    description:
                      "Criamos um plano único baseado no seu perfil, priorizando as ações que gerarão maior impacto no seu score de crédito.",
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                    gradient: "from-[#256D2A] to-[#4CAF50]",
                  },
                  {
                    number: "03",
                    title: "Contestações Assertivas",
                    description:
                      "Executamos contestações fundamentadas junto aos órgãos de proteção, usando argumentação jurídica e técnica especializada.",
                    icon: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
                    gradient: "from-[#6366F1] to-[#8B5CF6]",
                  },
                  {
                    number: "04",
                    title: "Monitoramento Contínuo",
                    description:
                      "Acompanhamos a evolução do seu score e realizamos ajustes na estratégia para maximizar os resultados obtidos.",
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                    gradient: "from-[#F59E0B] to-[#F97316]",
                  },
                ].map((step, index) => (
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
                    className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
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
                          d={step.icon}
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

                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
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
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Nossa Metodologia Diferenciada
                </h3>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {[
                    {
                      title: "Tecnologia Avançada",
                      description:
                        "Sistemas automatizados para análise de dados e identificação de padrões nos relatórios de crédito.",
                      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    },
                    {
                      title: "Expertise Jurídica",
                      description:
                        "Equipe especializada em direito do consumidor e legislação de proteção de dados pessoais.",
                      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                    },
                    {
                      title: "Acompanhamento Humano",
                      description:
                        "Consultores dedicados para orientação personalizada e suporte durante todo o processo.",
                      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
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
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed">
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
                Pronto para Transformar Seu Futuro Financeiro?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Faça parte da nova geração de brasileiros que estão recuperando
                seu crédito conosco. Comece hoje mesmo sua jornada rumo à
                liberdade financeira.
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
                  Falar com Especialista
                </motion.a>
                <motion.a
                  href="/precos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                >
                  Ver Nossos Planos
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
