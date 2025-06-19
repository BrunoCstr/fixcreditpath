"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface CreditEducationSectionProps {
  t: any;
}

export function CreditEducationSection({ t }: CreditEducationSectionProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
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

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D86C1F]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#4CAF50]/15 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1F2E5C]/25 rounded-full blur-3xl transform translate-y-1/2"></div>
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Entenda Como Funciona
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              O Que É Restauração de Crédito?
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A restauração de crédito é um processo técnico e legal que
                identifica e corrige informações incorretas em seu relatório de
                crédito, helping você a recuperar a pontuação que realmente
                merece.
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

          {/* Key Points */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm text-white rounded-3xl p-8 md:p-12 border border-white/10"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Por Que Escolher a Restauração Profissional?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-blue-100">
                      <strong className="text-white">
                        Conhecimento Especializado:
                      </strong>{" "}
                      Sabemos exatamente quais argumentos legais usar para cada
                      tipo de contestação
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-blue-100">
                      <strong className="text-white">Economia de Tempo:</strong>{" "}
                      Cuidamos de toda a burocracia e acompanhamento enquanto
                      você foca no que importa
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-blue-100">
                      Nossa metodologia especializada nos permite identificar
                      oportunidades que você pode não perceber
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-blue-100">
                      <strong className="text-white">Suporte Contínuo:</strong>{" "}
                      Não é apenas sobre corrigir erros, mas sobre construir um
                      futuro financeiro mais sólido
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* Background gradient decoration - more subtle */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/8 via-[#D86C1F]/8 to-[#4CAF50]/8 rounded-3xl blur-xl transform scale-110"></div>

                <motion.div
                  className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Floating decorative elements - more subtle */}
                  <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-[#4CAF50]/10 to-[#D86C1F]/10 rounded-full blur-md"></div>
                  <div className="absolute bottom-2 left-2 w-16 h-16 bg-gradient-to-br from-[#D86C1F]/10 to-[#4CAF50]/10 rounded-full blur-md"></div>

                  <div className="relative text-center">
                    {/* Icon badge */}
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7A32] rounded-2xl mb-4 shadow-lg"
                      initial={{ rotateY: 0 }}
                      whileInView={{ rotateY: 360 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
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
                    </motion.div>

                    <motion.div
                      className="text-3xl font-bold bg-gradient-to-r from-[#D86C1F] to-[#E1893D] bg-clip-text text-transparent mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Fato Importante
                    </motion.div>

                    <motion.p
                      className="text-blue-100 mb-6 text-lg leading-relaxed max-w-md mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      Muitas pessoas têm direito a um score maior do que o
                      atual, mas não sabem como identificar e corrigir os
                      problemas.
                    </motion.p>

                    <motion.button
                      className="relative bg-gradient-to-r from-[#D86C1F] via-[#E1893D] to-[#D86C1F] hover:from-[#E1893D] hover:via-[#F5A62B] hover:to-[#E1893D] text-white px-8 h-14 rounded-2xl text-base font-bold transition-all duration-300 shadow-xl hover:shadow-2xl group overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          const contactSection =
                            document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                        }
                      }}
                    >
                      {/* Button shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                      <span className="relative flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
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
                        Análise Gratuita Disponível
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                      </span>
                    </motion.button>

                    {/* Trust indicator - always below button */}
                    <motion.div
                      className="mt-3 inline-flex items-center gap-2 text-green-300 text-sm font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      <svg
                        className="w-4 h-4"
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
                      100% Seguro e Confidencial
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            className="text-center mt-12 text-sm text-gray-400"
            variants={fadeInUp}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="italic">
              Based on internal data from 2010–2024. Individual results may
              vary.
            </p>
            <p className="mt-2">
              A restauração de crédito é um processo legal garantido pela
              legislação brasileira. Todos os métodos utilizados são aprovados
              pelos órgãos reguladores.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
