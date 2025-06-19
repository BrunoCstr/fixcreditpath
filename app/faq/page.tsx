"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("geral");
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const categories = [
    {
      id: "geral",
      name: "Geral",
      icon: "🔍",
      description: "Informações básicas sobre crédito",
      color: "bg-[#D86C1F]",
    },
    {
      id: "servicos",
      name: "Serviços",
      icon: "⚙️",
      description: "Como funcionam nossos serviços",
      color: "bg-[#256D2A]",
    },
    {
      id: "precos",
      name: "Preços",
      icon: "💰",
      description: "Planos e investimento",
      color: "bg-[#3C4A75]",
    },
    {
      id: "resultados",
      name: "Resultados",
      icon: "📈",
      description: "Prazos e expectativas",
      color: "bg-[#D86C1F]",
    },
  ];

  const faqData = {
    geral: [
      {
        id: "geral-1",
        question: "O que é restauração de crédito?",
        answer:
          "A restauração de crédito é um processo legal que envolve a identificação e contestação de informações incorretas, imprecisas ou ultrapassadas em seu relatório de crédito. Seguimos rigorosamente as leis da FCRA e legislação brasileira para garantir que seu relatório reflita informações precisas e atualizadas.",
        tags: ["processo", "legal", "relatório"],
      },
      {
        id: "geral-2",
        question: "A restauração de crédito é legal no Brasil?",
        answer:
          "Sim, é completamente legal. Você tem o direito garantido por lei de contestar informações incorretas em seu relatório de crédito. Utilizamos apenas métodos legais e aprovados pelos órgãos reguladores para ajudar nossos clientes.",
        tags: ["legal", "direito", "regulamentação"],
      },
      {
        id: "geral-3",
        question: "Qualquer pessoa pode usar esses serviços?",
        answer:
          "Sim! Nossos serviços são para qualquer pessoa maior de 18 anos que tenha CPF e queira melhorar seu score de crédito. Atendemos desde pessoas que nunca tiveram crédito até aquelas com histórico complexo de endividamento.",
        tags: ["elegibilidade", "idade", "CPF", "score"],
      },
    ],
    servicos: [
      {
        id: "servicos-1",
        question: "Como funciona o processo de restauração?",
        answer:
          "Nosso processo tem 4 etapas: 1) Análise completa do seu CPF em todos os órgãos, 2) Criação de estratégia personalizada, 3) Execução das contestações e negociações, 4) Monitoramento contínuo dos resultados. Você recebe relatórios regulares sobre o progresso.",
        tags: ["processo", "etapas", "análise", "estratégia"],
      },
      {
        id: "servicos-2",
        question:
          "Vocês conseguem remover qualquer tipo de informação negativa?",
        answer:
          "Podemos contestar informações incorretas, imprecisas, incompletas ou desatualizadas. Informações corretas e dentro do prazo legal não podem ser removidas. Nossa expertise está em identificar erros e inconsistências que prejudicam injustamente seu score.",
        tags: ["remoção", "informações", "contestação", "expertise"],
      },
      {
        id: "servicos-3",
        question: "Preciso fornecer senhas ou dados pessoais?",
        answer:
          "Nunca pedimos senhas de contas bancárias ou cartões. Trabalhamos apenas com informações públicas dos órgãos de proteção e documentos que você nos autoriza expressamente. Toda comunicação é segura e criptografada.",
        tags: ["segurança", "dados", "privacidade", "autorização"],
      },
    ],
    precos: [
      {
        id: "precos-1",
        question: "Qual a diferença entre os planos?",
        answer:
          "O Básico (R$ 297) inclui análise e uma rodada de disputas. O Profissional (R$ 697/mês) tem disputas ilimitadas e monitoramento contínuo. O Premium (R$ 1.197/mês) adiciona consultor dedicado e suporte 24/7. Todos incluem garantia.",
        tags: ["planos", "diferença", "básico", "profissional", "premium"],
      },
      {
        id: "precos-2",
        question: "Existem taxas escondidas?",
        answer:
          "Não! Todos os custos são informados claramente antes da contratação. O que você vê é exatamente o que você paga, sem surpresas ou cobranças extras.",
        tags: ["taxas", "transparência", "custos", "cobranças"],
      },
      {
        id: "precos-3",
        question: "Posso cancelar a qualquer momento?",
        answer:
          "Sim! Não temos fidelidade. Você pode cancelar a qualquer momento sem multas. Oferecemos garantia de 30 dias para o plano Básico e até 120 dias para o Premium.",
        tags: ["cancelamento", "fidelidade", "garantia", "multas"],
      },
    ],
    resultados: [
      {
        id: "resultados-1",
        question: "Quanto tempo leva para ver resultados?",
        answer:
          "Os primeiros resultados geralmente aparecem entre 30-60 dias. O processo completo pode levar de 3 a 6 meses, dependendo da complexidade da sua situação. Nossa média é de 120 pontos de aumento no score em 90 dias.",
        tags: ["tempo", "resultados", "prazo", "pontos", "score"],
      },
      {
        id: "resultados-2",
        question: "Vocês garantem resultados específicos?",
        answer:
          "Não podemos garantir um número específico de pontos, pois cada caso é único. Porém, garantimos que identificaremos todas as oportunidades de melhoria e executaremos as melhores estratégias para sua situação.",
        tags: ["garantia", "resultados", "específicos", "estratégias"],
      },
      {
        id: "resultados-3",
        question: "O que acontece se eu não tiver resultados?",
        answer:
          "Oferecemos garantia de satisfação. Se não conseguirmos identificar oportunidades de melhoria em sua análise ou se não ficar satisfeito com nosso trabalho, devolvemos 100% do valor investido.",
        tags: ["garantia", "satisfação", "devolução", "análise"],
      },
    ],
  };

  const filteredQuestions = faqData[
    activeCategory as keyof typeof faqData
  ].filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Moderno e Interativo */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative pt-32 pb-20 overflow-hidden"
        >
          {/* Enhanced Background with gradient and floating elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-orange-50/30">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Floating elements */}
            {[
              { id: 0, size: 45, x: 15, y: 20, delay: 0.5 },
              { id: 1, size: 35, x: 75, y: 10, delay: 1.2 },
              { id: 2, size: 50, x: 25, y: 70, delay: 0.8 },
              { id: 3, size: 30, x: 85, y: 55, delay: 2.1 },
              { id: 4, size: 40, x: 55, y: 25, delay: 1.5 },
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
          </div>

          <div className="container mx-auto px-4 relative z-30">
            <div className="max-w-6xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center bg-white/60 text-[#1F2E5C] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[#1F2E5C]/10"
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Central de Ajuda
              </motion.div>

              {/* Título Principal */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2E5C] leading-tight mb-6"
              >
                Perguntas Frequentes
                <span className="block text-[#D86C1F] mt-2">
                  Sobre Restauração de Crédito
                </span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12"
              >
                Encontre respostas para as principais dúvidas sobre nossos
                serviços, processos e resultados.
                <strong className="text-[#1F2E5C]">
                  Mais de 50 perguntas
                </strong>{" "}
                respondidas por especialistas.
              </motion.p>

              {/* Barra de Pesquisa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pesquisar dúvidas... (ex: 'tempo para resultados', 'preços', 'legal')"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-[#D86C1F] focus:outline-none bg-white/80 backdrop-blur-sm transition-all duration-300"
                  />
                  <svg
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
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

        {/* Categorias de FAQ - Navegação Interativa */}
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
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F2E5C] mb-6">
                  Escolha uma Categoria
                </h2>
                <p className="text-lg text-gray-600">
                  Navegue pelas categorias ou use a pesquisa para encontrar
                  respostas específicas
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {categories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearchTerm("");
                      setOpenQuestion(null);
                    }}
                    className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                      activeCategory === category.id
                        ? "border-[#D86C1F] bg-gradient-to-br from-[#D86C1F]/5 to-[#1F2E5C]/5"
                        : "border-gray-200 hover:border-[#D86C1F]/50"
                    }`}
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-bold text-lg text-[#1F2E5C] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                    {activeCategory === category.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-4 w-12 h-1 bg-[#D86C1F] rounded-full mx-auto"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Seção de Perguntas e Respostas - Accordion Moderno */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header da Categoria Ativa */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="text-4xl mr-4">
                    {categories.find((cat) => cat.id === activeCategory)?.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-[#1F2E5C]">
                    {categories.find((cat) => cat.id === activeCategory)?.name}
                  </h2>
                </div>
                {searchTerm && (
                  <p className="text-gray-600">
                    {filteredQuestions.length} resultado(s) encontrado(s) para "
                    {searchTerm}"
                  </p>
                )}
              </motion.div>

              {/* Lista de Perguntas */}
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  {filteredQuestions.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#D86C1F]/30 transition-all duration-300 overflow-hidden"
                    >
                      <motion.button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 rounded-2xl"
                        whileHover={{
                          backgroundColor: "rgba(248, 250, 252, 0.8)",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg md:text-xl font-bold text-[#1F2E5C] pr-4 leading-relaxed">
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{
                              rotate: openQuestion === faq.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <svg
                              className="w-6 h-6 text-[#D86C1F]"
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
                      </motion.button>

                      <AnimatePresence>
                        {openQuestion === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="border-t border-gray-200 pt-6">
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                  {faq.answer}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                  {faq.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="px-3 py-1 bg-[#D86C1F]/10 text-[#D86C1F] text-xs font-medium rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {filteredQuestions.length === 0 && searchTerm && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-2">
                      Nenhum resultado encontrado
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Não encontramos perguntas relacionadas a "{searchTerm}".
                      Tente outros termos ou navegue pelas categorias.
                    </p>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                    >
                      Limpar Pesquisa
                    </button>
                  </motion.div>
                )}
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

        {/* Ainda tem dúvidas? - Redesenhado */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                    Ainda Tem Dúvidas?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Nossa equipe de especialistas está sempre disponível para
                    esclarecer suas dúvidas e ajudá-lo a tomar a melhor decisão
                    para sua situação financeira.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "📞",
                        title: "Telefone",
                        value: "(11) 4000-2030",
                        color: "bg-[#D86C1F]",
                      },
                      {
                        icon: "💬",
                        title: "WhatsApp",
                        value: "(11) 99999-0000",
                        color: "bg-[#4CAF50]",
                      },
                      {
                        icon: "✉️",
                        title: "Email",
                        value: "contato@fixpathcredit.com",
                        color: "bg-[#3C4A75]",
                      },
                      {
                        icon: "⏰",
                        title: "Horário",
                        value: "Seg-Sex: 8h às 18h",
                        color: "bg-[#256D2A]",
                      },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-center">
                          <div className="text-2xl mr-3">{contact.icon}</div>
                          <div>
                            <div className="font-semibold text-[#1F2E5C] text-sm">
                              {contact.title}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {contact.value}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2F3764069ee1124d83a25b8e6a1c67ea29?format=webp&width=800"
                    alt="Especialista da Fix Path Credit oferecendo suporte personalizado ao cliente"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 60, x: 60 }}
                    whileInView={{ opacity: 1, y: -6, x: -6 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute -bottom-6 -right-6 bg-[#4CAF50] text-white p-6 rounded-xl shadow-lg cursor-pointer"
                  >
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm">Resposta Garantida</div>
                  </motion.div>
                </motion.div>
              </div>
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
                Pronto para Começar?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Não deixe mais dúvidas impedirem você de recuperar seu crédito.
                Fale conosco e comece hoje mesmo sua jornada rumo à liberdade
                financeira.
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
                  href="/precos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
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
