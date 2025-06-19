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
        {/* Hero Section - Específico para Pricing */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className={
                'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')]'
              }
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header do Hero */}
              <div className="text-center mb-16">
                {/* Badge de Pricing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm mb-8"
                >
                  <svg
                    className="w-4 h-4 text-[#D86C1F]"
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
                  <span className="text-[#1F2E5C] text-sm font-semibold tracking-wide">
                    PLANOS TRANSPARENTES SEM SURPRESAS
                  </span>
                </motion.div>

                {/* Título Principal */}
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

                {/* Subtítulo */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12"
                >
                  Soluções eficazes com{" "}
                  <strong className="text-[#1F2E5C]">
                    garantia de satisfação
                  </strong>{" "}
                  e resultados comprovados. Compare nossos planos e encontre a
                  opção perfeita para sua situação.
                </motion.p>

                {/* Preview dos Preços */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
                >
                  {/* Básico Preview */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-bold text-[#1F2E5C] mb-2">
                      Básico
                    </h3>
                    <div className="text-3xl font-bold text-[#D86C1F] mb-2">
                      R$ 297
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      Pagamento único
                    </p>
                    <p className="text-sm text-gray-600">
                      Análise completa + 1 rodada de disputas
                    </p>
                  </div>

                  {/* Profissional Preview - Destaque */}
                  <div className="bg-gradient-to-br from-[#D86C1F] to-[#E17A2F] rounded-xl p-6 shadow-xl transform scale-105 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#1F2E5C] text-white px-4 py-1 rounded-full text-xs font-bold">
                      MAIS POPULAR
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Profissional
                    </h3>
                    <div className="text-3xl font-bold text-white mb-2">
                      R$ 697<span className="text-lg">/mês</span>
                    </div>
                    <p className="text-sm text-white/80 mb-4">
                      Faturamento mensal
                    </p>
                    <p className="text-sm text-white/90">
                      Disputas ilimitadas + suporte prioritário
                    </p>
                  </div>

                  {/* Premium Preview */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-lg font-bold text-[#1F2E5C] mb-2">
                      Premium
                    </h3>
                    <div className="text-3xl font-bold text-[#D86C1F] mb-2">
                      R$ 1.197<span className="text-lg">/mês</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      Faturamento mensal
                    </p>
                    <p className="text-sm text-gray-600">
                      Consultor dedicado + suporte 24/7
                    </p>
                  </div>
                </motion.div>

                {/* CTAs do Hero */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                >
                  <motion.a
                    href="#planos"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 25px rgba(31, 46, 92, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#1F2E5C] hover:bg-[#3C4A75] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 text-center"
                  >
                    Comparar Planos Detalhados
                  </motion.a>
                  <motion.a
                    href="/contato"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "#D86C1F",
                      backgroundColor: "#D86C1F",
                      color: "#ffffff",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-[#D86C1F] text-[#D86C1F] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-center hover:border-[#D86C1F]"
                  >
                    Consulta Gratuita
                  </motion.a>
                </motion.div>

                {/* Benefícios Únicos de Pricing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                >
                  {[
                    { icon: "💰", text: "Sem taxas escondidas" },
                    { icon: "✅", text: "Garantia de 30 dias" },
                    { icon: "📞", text: "Consulta inicial grátis" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                      className="flex items-center justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/50"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
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

        {/* Seção de Planos - Background Branco */}
        <motion.section
          id="planos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2E5C] mb-6">
                  Escolha Seu Plano Ideal
                </h2>
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

        {/* Gradient Line Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#256D2A] origin-center"
        />

        {/* Garantias e Benefícios */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-50"
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Nossas Garantias
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Trabalhamos com total transparência e garantias sólidas para
                  sua tranquilidade
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "Garantia de Satisfação",
                    description:
                      "Se não ficar satisfeito com nosso trabalho em 30 dias, devolvemos 100% do valor investido.",
                    color: "bg-[#4CAF50]",
                  },
                  {
                    icon: (
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    ),
                    title: "Sem Taxas Escondidas",
                    description:
                      "O preço que você vê é o preço que você paga. Sem surpresas, sem cobranças extras.",
                    color: "bg-[#D86C1F]",
                  },
                  {
                    icon: (
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
                    ),
                    title: "Cancelamento Flexível",
                    description:
                      "Pode cancelar a qualquer momento sem multas ou penalidades. Sem pegadinhas.",
                    color: "bg-[#3C4A75]",
                  },
                ].map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 ${guarantee.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      {guarantee.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Rápido sobre Preços */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
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
