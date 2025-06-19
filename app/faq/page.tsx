"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqData = [
    {
      id: "faq-1",
      category: "Geral",
      question: "O que é restauração de crédito?",
      answer:
        "A restauração de crédito é um processo legal que envolve a identificação e contestação de informações incorretas, imprecisas ou ultrapassadas em seu relatório de crédito. Seguimos rigorosamente as leis da FCRA e legislação brasileira para garantir que seu relatório reflita informações precisas e atualizadas.",
    },
    {
      id: "faq-2",
      category: "Geral",
      question: "A restauração de crédito é legal no Brasil?",
      answer:
        "Sim, é completamente legal. Você tem o direito garantido por lei de contestar informações incorretas em seu relatório de crédito. Utilizamos apenas métodos legais e aprovados pelos órgãos reguladores para ajudar nossos clientes.",
    },
    {
      id: "faq-3",
      category: "Geral",
      question: "Qualquer pessoa pode usar esses serviços?",
      answer:
        "Sim! Nossos serviços são para qualquer pessoa maior de 18 anos que tenha CPF e queira melhorar seu score de crédito. Atendemos desde pessoas que nunca tiveram crédito até aquelas com histórico complexo de endividamento.",
    },
    {
      id: "faq-4",
      category: "Serviços",
      question: "Como funciona o processo de restauração?",
      answer:
        "Nosso processo tem 4 etapas: 1) Análise completa do seu CPF em todos os órgãos, 2) Criação de estratégia personalizada, 3) Execução das contestações e negociações, 4) Monitoramento contínuo dos resultados. Você recebe relatórios regulares sobre o progresso.",
    },
    {
      id: "faq-5",
      category: "Serviços",
      question: "Vocês conseguem remover qualquer tipo de informação negativa?",
      answer:
        "Podemos contestar informações incorretas, imprecisas, incompletas ou desatualizadas. Informações corretas e dentro do prazo legal não podem ser removidas. Nossa expertise está em identificar erros e inconsistências que prejudicam injustamente seu score.",
    },
    {
      id: "faq-6",
      category: "Serviços",
      question: "Preciso fornecer senhas ou dados pessoais?",
      answer:
        "Nunca pedimos senhas de contas bancárias ou cartões. Trabalhamos apenas com informações públicas dos órgãos de proteção e documentos que você nos autoriza expressamente. Toda comunicação é segura e criptografada.",
    },
    {
      id: "faq-7",
      category: "Preços",
      question: "Qual a diferença entre os planos?",
      answer:
        "O Básico (R$ 297) inclui análise e uma rodada de disputas. O Profissional (R$ 697/mês) tem disputas ilimitadas e monitoramento contínuo. O Premium (R$ 1.197/mês) adiciona consultor dedicado e suporte 24/7. Todos incluem garantia.",
    },
    {
      id: "faq-8",
      category: "Preços",
      question: "Existem taxas escondidas?",
      answer:
        "Não! Todos os custos são informados claramente antes da contratação. O que você vê é exatamente o que você paga, sem surpresas ou cobranças extras.",
    },
    {
      id: "faq-9",
      category: "Preços",
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim! Não temos fidelidade. Você pode cancelar a qualquer momento sem multas. Oferecemos garantia de 30 dias para o plano Básico e até 120 dias para o Premium.",
    },
    {
      id: "faq-10",
      category: "Resultados",
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os primeiros resultados geralmente aparecem entre 30-60 dias. O processo completo pode levar de 3 a 6 meses, dependendo da complexidade da sua situação. Nossa média é de 120 pontos de aumento no score em 90 dias.",
    },
    {
      id: "faq-11",
      category: "Resultados",
      question: "Vocês garantem resultados específicos?",
      answer:
        "Não podemos garantir um número específico de pontos, pois cada caso é único. Porém, garantimos que identificaremos todas as oportunidades de melhoria e executaremos as melhores estratégias para sua situação.",
    },
    {
      id: "faq-12",
      category: "Resultados",
      question: "O que acontece se eu não tiver resultados?",
      answer:
        "Oferecemos garantia de satisfação. Se não conseguirmos identificar oportunidades de melhoria em sua análise ou se não ficar satisfeito com nosso trabalho, devolvemos 100% do valor investido.",
    },
  ];

  const filteredQuestions = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Geral":
        return "bg-blue-100 text-blue-800";
      case "Serviços":
        return "bg-green-100 text-green-800";
      case "Preços":
        return "bg-orange-100 text-orange-800";
      case "Resultados":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Clean and Simple */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-[#1F2E5C] mb-6"
              >
                Perguntas Frequentes
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 mb-12 leading-relaxed"
              >
                Encontre respostas para as principais dúvidas sobre restauração
                de crédito, nossos serviços e processos.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl mx-auto mb-8"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pesquisar perguntas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-14 text-lg border-2 border-gray-200 rounded-xl focus:border-[#D86C1F] focus:outline-none bg-white shadow-sm transition-all duration-300"
                  />
                  <svg
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
                </div>
              </motion.div>

              {searchTerm && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-600 mb-8"
                >
                  {filteredQuestions.length} resultado(s) encontrado(s) para "
                  {searchTerm}"
                </motion.p>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredQuestions.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    Nenhum resultado encontrado
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Não encontramos perguntas relacionadas a "{searchTerm}".
                    Tente usar outros termos de busca.
                  </p>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Limpar Pesquisa
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full px-6 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-4">
                            <div className="flex items-center mb-2">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium mr-3 ${getCategoryColor(faq.category)}`}
                              >
                                {faq.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#1F2E5C] leading-relaxed">
                              {faq.question}
                            </h3>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <motion.div
                              animate={{
                                rotate: openQuestion === faq.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {openQuestion === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 bg-gray-50">
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Quick Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-[#1F2E5C] mb-4">
                  Precisa de Mais Ajuda?
                </h2>
                <p className="text-lg text-gray-600">
                  Nossa equipe está pronta para esclarecer suas dúvidas
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Telefone",
                    value: "(11) 4000-2030",
                    icon: "📞",
                    description: "Seg-Sex: 8h às 18h",
                  },
                  {
                    title: "WhatsApp",
                    value: "(11) 99999-0000",
                    icon: "💬",
                    description: "Resposta rápida",
                  },
                  {
                    title: "Email",
                    value: "contato@fixpathcredit.com",
                    icon: "✉️",
                    description: "Resposta em 24h",
                  },
                  {
                    title: "Chat Online",
                    value: "Disponível agora",
                    icon: "💻",
                    description: "Suporte em tempo real",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-3xl mb-4">{contact.icon}</div>
                    <h3 className="font-bold text-[#1F2E5C] mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      {contact.value}
                    </p>
                    <p className="text-xs text-gray-500">
                      {contact.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1F2E5C] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ainda Tem Dúvidas?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Fale com nossos especialistas e receba orientação personalizada
                para sua situação de crédito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contato"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Falar com Especialista
                </motion.a>
                <motion.a
                  href="/precos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Ver Planos
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
