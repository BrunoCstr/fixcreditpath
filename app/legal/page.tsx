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

export default function LegalPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Matching other pages design */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative pt-32 pb-20 overflow-hidden"
        >
          {/* Enhanced Background with gradient and floating elements - Same as other pages */}
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
            <div className="max-w-6xl mx-auto">
              {/* Header do Hero */}
              <div className="text-center mb-16">
                {/* Badge Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center bg-white/60 text-[#1F2E5C] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#1F2E5C]/10"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-[#D86C1F]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  100% Conforme LGPD
                </motion.div>

                {/* Título Principal */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2E5C] leading-tight mb-6"
                >
                  Documentos Legais
                  <span className="block text-[#D86C1F] mt-2">
                    e Transparência
                  </span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12"
                >
                  Conheça nossos{" "}
                  <strong className="text-[#1F2E5C]">
                    termos de uso, política de privacidade
                  </strong>{" "}
                  e compromissos com a{" "}
                  <strong className="text-[#D86C1F]">
                    proteção dos seus dados
                  </strong>{" "}
                  e conformidade legal.
                </motion.p>

                {/* Navigation Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
                >
                  {/* Navigation 1 */}
                  <motion.a
                    href="#termos"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/60 backdrop-blur-sm border-2 border-white/40 rounded-xl p-4 text-center shadow-lg hover:shadow-xl hover:border-[#1F2E5C]/50 transition-all duration-300 group"
                  >
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-[#1F2E5C] mb-1">
                      Termos de Uso
                    </div>
                  </motion.a>

                  {/* Navigation 2 */}
                  <motion.a
                    href="#privacidade"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/60 backdrop-blur-sm border-2 border-white/40 rounded-xl p-4 text-center shadow-lg hover:shadow-xl hover:border-[#D86C1F]/50 transition-all duration-300 group"
                  >
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
                      Privacidade
                    </div>
                  </motion.a>

                  {/* Navigation 3 */}
                  <motion.a
                    href="#lgpd"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/60 backdrop-blur-sm border-2 border-white/40 rounded-xl p-4 text-center shadow-lg hover:shadow-xl hover:border-[#256D2A]/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#256D2A] to-[#4CAF50] rounded-lg flex items-center justify-center mx-auto mb-3">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-[#1F2E5C] mb-1">
                      LGPD
                    </div>
                  </motion.a>

                  {/* Navigation 4 */}
                  <motion.a
                    href="#conformidade"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/60 backdrop-blur-sm border-2 border-white/40 rounded-xl p-4 text-center shadow-lg hover:shadow-xl hover:border-[#3C4A75]/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#3C4A75] to-[#1F2E5C] rounded-lg flex items-center justify-center mx-auto mb-3">
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
                          d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2H9m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-[#1F2E5C] mb-1">
                      Conformidade
                    </div>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Termos de Uso Section */}
        <motion.section
          id="termos"
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
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#1F2E5C] rounded-full flex items-center justify-center mr-4">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C]">
                    Termos de Uso
                  </h2>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#1F2E5C] mx-auto mb-6"
                />
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Company Info */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
                    <div className="bg-[#1F2E5C] text-white px-4 py-2 rounded-lg text-sm font-medium mb-4 inline-block">
                      Última atualização: 15 de dezembro de 2024
                    </div>

                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      1. Sobre a Fix Path Credit
                    </h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        A Fix Path Credit é uma empresa especializada em
                        consultoria para restauração de crédito, devidamente
                        registrada com CNPJ 12.345.678/0001-90.
                      </p>
                      <p>
                        <strong>Sede:</strong> Av. Paulista, 1578 - 12º andar,
                        Bela Vista, São Paulo/SP, CEP 01310-200.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      2. Serviços Oferecidos
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Análise completa e detalhada do histórico de crédito",
                        "Identificação de erros e inconsistências",
                        "Contestação de informações incorretas",
                        "Negociação com credores",
                        "Monitoramento contínuo do score",
                        "Consultoria financeira e educacional",
                        "Proteção contra fraudes",
                      ].map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                          <span className="text-gray-700">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Responsibilities */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      3. Responsabilidades do Cliente
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Fornecer informações verdadeiras e atualizadas",
                        "Apresentar toda a documentação solicitada",
                        "Efetuar o pagamento conforme acordado",
                        "Comunicar mudanças em sua situação financeira",
                        "Não realizar ações que prejudiquem o trabalho",
                        "Manter sigilo sobre estratégias utilizadas",
                      ].map((responsibility, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <span className="w-2 h-2 bg-[#D86C1F] rounded-full mr-3"></span>
                          <span className="text-gray-700">
                            {responsibility}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#D86C1F] to-[#E1893D] rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">
                      4. Pagamentos e Garantias
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <strong>Formas de Pagamento:</strong> Cartão de crédito,
                        débito, PIX, boleto bancário e transferência.
                      </div>
                      <div>
                        <strong>Cancelamento:</strong> Sem multas. Para serviços
                        mensais, solicitar até 5 dias antes do vencimento.
                      </div>
                      <div>
                        <strong>Garantia:</strong> 30 dias (Básico) até 120 dias
                        (Premium).
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Política de Privacidade Section */}
        <motion.section
          id="privacidade"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
        >
          {/* Background similar to other sections */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-30">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#D86C1F] rounded-full flex items-center justify-center mr-4">
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
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C]">
                    Política de Privacidade
                  </h2>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6"
                />
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Data Collection */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      1. Coleta de Dados
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Dados Pessoais:
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-2"></span>
                            Nome completo, CPF, RG
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-2"></span>
                            Data de nascimento
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-2"></span>
                            Endereço residencial
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full mr-2"></span>
                            Telefone e email
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Dados Financeiros:
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#D86C1F] rounded-full mr-2"></span>
                            Relatórios de crédito
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#D86C1F] rounded-full mr-2"></span>
                            Histórico de pagamentos
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#D86C1F] rounded-full mr-2"></span>
                            Informações sobre dívidas
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#D86C1F] rounded-full mr-2"></span>
                            Score de crédito
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Data Usage and Protection */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      2. Uso dos Dados
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Prestação dos serviços contratados",
                        "Comunicação sobre andamento dos serviços",
                        "Cumprimento de obrigações legais",
                        "Melhoria de nossos serviços",
                        "Prevenção de fraudes",
                      ].map((use, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                          <span className="text-gray-700 text-sm">{use}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#1F2E5C] to-[#3C4A75] rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">
                      3. Proteção dos Dados
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2">Técnicas:</h4>
                        <div className="space-y-1 text-sm">
                          <div>• Criptografia SSL/TLS</div>
                          <div>• Servidores seguros</div>
                          <div>• Backups criptografados</div>
                          <div>• Firewall avançado</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Administrativas:</h4>
                        <div className="space-y-1 text-sm">
                          <div>• Acesso restrito</div>
                          <div>• Treinamento de equipe</div>
                          <div>• Políticas internas</div>
                          <div>• Auditoria regular</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* LGPD Section */}
        <motion.section
          id="lgpd"
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
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#256D2A] rounded-full flex items-center justify-center mr-4">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C]">
                    Conformidade com LGPD
                  </h2>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#256D2A] mx-auto mb-6"
                />
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* LGPD Commitment */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-[#256D2A] mb-4">
                      Nosso Compromisso com a LGPD
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      A Fix Path Credit está 100% adequada à Lei Geral de
                      Proteção de Dados (LGPD - Lei nº 13.709/2018) e mantém
                      conformidade contínua com todas as suas exigências.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      Base Legal para Tratamento
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: "Consentimento", desc: "Art. 7º, V" },
                        { title: "Execução de Contrato", desc: "Art. 7º, V" },
                        { title: "Cumprimento Legal", desc: "Art. 7º, II" },
                        { title: "Interesse Legítimo", desc: "Art. 7º, VI" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gray-50 rounded-lg p-3 text-center"
                        >
                          <div className="font-bold text-[#1F2E5C] text-sm">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-600">
                            {item.desc}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* DPO Information */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      Encarregado de Dados (DPO)
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-[#1F2E5C] mb-2">
                          Contato:
                        </h4>
                        <div className="space-y-1 text-sm text-gray-700">
                          <p>
                            <strong>Nome:</strong> Dr. João Silva Santos
                          </p>
                          <p>
                            <strong>Email:</strong> dpo@fixpathcredit.com
                          </p>
                          <p>
                            <strong>Telefone:</strong> (11) 4000-2031
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1F2E5C] mb-2">
                          Responsabilidades:
                        </h4>
                        <div className="space-y-1 text-xs text-gray-600">
                          <div>• Aceitar reclamações</div>
                          <div>• Prestar esclarecimentos</div>
                          <div>• Adotar providências</div>
                          <div>• Comunicar à ANPD</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#256D2A] to-[#4CAF50] rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">
                      Seus Direitos LGPD
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { right: "Acesso", desc: "Saber quais dados temos" },
                        {
                          right: "Correção",
                          desc: "Corrigir dados incorretos",
                        },
                        { right: "Exclusão", desc: "Solicitar remoção" },
                        { right: "Portabilidade", desc: "Transferir dados" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white/20 rounded-lg p-3 text-center"
                        >
                          <div className="font-bold text-sm">{item.right}</div>
                          <div className="text-xs opacity-90">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-sm bg-white/20 rounded-lg p-3">
                      <strong>Prazo de Resposta:</strong> 15 dias conforme LGPD
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Conformidade Section */}
        <motion.section
          id="conformidade"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
        >
          {/* Background similar to other sections */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-30">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#3C4A75] rounded-full flex items-center justify-center mr-4">
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
                        d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2H9m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C]">
                    Conformidade Regulatória
                  </h2>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#3C4A75] mx-auto mb-6"
                />
              </motion.div>

              {/* Regulatory Bodies */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              >
                {[
                  {
                    title: "Banco Central",
                    desc: "Conformidade com regulamentações de crédito",
                    color: "from-[#1F2E5C] to-[#3C4A75]",
                  },
                  {
                    title: "ANPD",
                    desc: "Conformidade plena com LGPD",
                    color: "from-[#256D2A] to-[#4CAF50]",
                  },
                  {
                    title: "PROCON",
                    desc: "Conformidade com CDC",
                    color: "from-[#D86C1F] to-[#E1893D]",
                  },
                  {
                    title: "Órgãos de Proteção",
                    desc: "Credenciamento oficial",
                    color: "from-[#3C4A75] to-[#1F2E5C]",
                  },
                ].map((organ, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${organ.color} rounded-full flex items-center justify-center mx-auto mb-4`}
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1F2E5C] mb-2">
                      {organ.title}
                    </h3>
                    <p className="text-sm text-gray-600">{organ.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  {
                    cert: "ISO 27001",
                    desc: "Certificação em segurança da informação",
                    icon: "check",
                    color: "bg-[#4CAF50]",
                  },
                  {
                    cert: "SSL/TLS",
                    desc: "Criptografia avançada para proteção",
                    icon: "lock",
                    color: "bg-[#D86C1F]",
                  },
                  {
                    cert: "Auditoria Anual",
                    desc: "Auditoria independente de processos",
                    icon: "clipboard",
                    color: "bg-[#3C4A75]",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
                  >
                    <div
                      className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {cert.icon === "check" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        )}
                        {cert.icon === "lock" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        )}
                        {cert.icon === "clipboard" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2H9m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10"
                          />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1F2E5C] mb-2">
                      {cert.cert}
                    </h3>
                    <p className="text-sm text-gray-600">{cert.desc}</p>
                  </motion.div>
                ))}
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
                Transparência e Segurança Garantidas
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Nossa conformidade legal e compromisso com a proteção dos seus
                dados garantem que você tenha total segurança ao contratar
                nossos serviços.
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
                  Falar com Especialista
                </motion.a>
                <motion.a
                  href="mailto:dpo@fixpathcredit.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Contatar DPO
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
