"use client";

import { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";

export default function FAQPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1F2E5C] via-[#3C4A75] to-[#1F2E5C] text-white pt-24 lg:pt-28 pb-20 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Perguntas Frequentes
                <span className="text-[#D86C1F] block">
                  Sobre Restauração de Crédito
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Encontre respostas para as principais dúvidas sobre nossos
                serviços, processos e resultados. Mais de 50 perguntas
                respondidas por especialistas.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#D86C1F] mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">
                    Perguntas Respondidas
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D86C1F] mb-2">
                    24h
                  </div>
                  <div className="text-sm text-gray-600">
                    Resposta Garantida
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D86C1F] mb-2">
                    Nova
                  </div>
                  <div className="text-sm text-gray-600">e Inovadora</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D86C1F] mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Foco no Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categorias de FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <a
                  href="#geral"
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-[#1F2E5C] hover:text-white group"
                >
                  <div className="w-12 h-12 bg-[#D86C1F] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-[#D86C1F]"
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
                  </div>
                  <h3 className="font-bold mb-2">Geral</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-200">
                    Informações básicas sobre crédito
                  </p>
                </a>

                <a
                  href="#servicos"
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-[#1F2E5C] hover:text-white group"
                >
                  <div className="w-12 h-12 bg-[#256D2A] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-[#256D2A]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">Serviços</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-200">
                    Como funcionam nossos serviços
                  </p>
                </a>

                <a
                  href="#precos"
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-[#1F2E5C] hover:text-white group"
                >
                  <div className="w-12 h-12 bg-[#3C4A75] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-[#3C4A75]"
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
                  </div>
                  <h3 className="font-bold mb-2">Preços</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-200">
                    Planos e investimento
                  </p>
                </a>

                <a
                  href="#resultados"
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-[#1F2E5C] hover:text-white group"
                >
                  <div className="w-12 h-12 bg-[#D86C1F] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-[#D86C1F]"
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
                  </div>
                  <h3 className="font-bold mb-2">Resultados</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-200">
                    Prazos e expectativas
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Seção Geral */}
              <div id="geral" className="mb-16">
                <h2 className="text-3xl font-bold text-[#1F2E5C] mb-8 flex items-center">
                  <span className="w-8 h-8 bg-[#D86C1F] rounded-full flex items-center justify-center mr-4 text-white text-lg">
                    G
                  </span>
                  Perguntas Gerais
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      O que é restauração de crédito?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A restauração de crédito é um processo legal que envolve a
                      identificação e contestação de informações incorretas,
                      imprecisas ou ultrapassadas em seu relatório de crédito.
                      Seguimos rigorosamente as leis da FCRA e legislação
                      brasileira para garantir que seu relatório reflita
                      informações precisas e atualizadas.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      A restauração de crédito é legal no Brasil?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sim, é completamente legal. Você tem o direito garantido
                      por lei de contestar informações incorretas em seu
                      relatório de crédito. Utilizamos apenas métodos legais e
                      aprovados pelos órgãos reguladores para ajudar nossos
                      clientes.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Qualquer pessoa pode usar esses serviços?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sim! Nossos serviços são para qualquer pessoa maior de 18
                      anos que tenha CPF e queira melhorar seu score de crédito.
                      Atendemos desde pessoas que nunca tiveram crédito até
                      aquelas com histórico complexo de endividamento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seção Serviços */}
              <div id="servicos" className="mb-16">
                <h2 className="text-3xl font-bold text-[#1F2E5C] mb-8 flex items-center">
                  <span className="w-8 h-8 bg-[#256D2A] rounded-full flex items-center justify-center mr-4 text-white text-lg">
                    S
                  </span>
                  Sobre Nossos Serviços
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Como funciona o processo de restauração?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nosso processo tem 4 etapas: 1) Análise completa do seu
                      CPF em todos os órgãos, 2) Criação de estratégia
                      personalizada, 3) Execução das contestações e negociações,
                      4) Monitoramento contínuo dos resultados. Você recebe
                      relatórios regulares sobre o progresso.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Vocês conseguem remover qualquer tipo de informação
                      negativa?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Podemos contestar informações incorretas, imprecisas,
                      incompletas ou desatualizadas. Informações corretas e
                      dentro do prazo legal não podem ser removidas. Nossa
                      expertise está em identificar erros e inconsistências que
                      prejudicam injustamente seu score.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Preciso fornecer senhas ou dados pessoais?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nunca pedimos senhas de contas bancárias ou cartões.
                      Trabalhamos apenas com informações públicas dos órgãos de
                      proteção e documentos que você nos autoriza expressamente.
                      Toda comunicação é segura e criptografada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seção Preços */}
              <div id="precos" className="mb-16">
                <h2 className="text-3xl font-bold text-[#1F2E5C] mb-8 flex items-center">
                  <span className="w-8 h-8 bg-[#3C4A75] rounded-full flex items-center justify-center mr-4 text-white text-lg">
                    P
                  </span>
                  Preços e Planos
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Qual a diferença entre os planos?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      O Básico (R$ 297) inclui análise e uma rodada de disputas.
                      O Profissional (R$ 697/mês) tem disputas ilimitadas e
                      monitoramento contínuo. O Premium (R$ 1.197/mês) adiciona
                      consultor dedicado e suporte 24/7. Todos incluem garantia.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Existem taxas escondidas?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Não! Todos os custos são informados claramente antes da
                      contratação. O que você vê é exatamente o que você paga,
                      sem surpresas ou cobranças extras.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Posso cancelar a qualquer momento?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sim! Não temos fidelidade. Você pode cancelar a qualquer
                      momento sem multas. Oferecemos garantia de 30 dias para o
                      plano Básico e até 120 dias para o Premium.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seção Resultados */}
              <div id="resultados" className="mb-16">
                <h2 className="text-3xl font-bold text-[#1F2E5C] mb-8 flex items-center">
                  <span className="w-8 h-8 bg-[#D86C1F] rounded-full flex items-center justify-center mr-4 text-white text-lg">
                    R
                  </span>
                  Resultados e Prazos
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Quanto tempo leva para ver resultados?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Os primeiros resultados geralmente aparecem entre 30-60
                      dias. O processo completo pode levar de 3 a 6 meses,
                      dependendo da complexidade da sua situação. Nossa média é
                      de 120 pontos de aumento no score em 90 dias.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      Vocês garantem resultados específicos?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Não podemos garantir um número específico de pontos, pois
                      cada caso é único. Porém, garantimos que identificaremos
                      todas as oportunidades de melhoria e executaremos as
                      melhores estratégias para sua situação.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                      O que acontece se eu não tiver resultados?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Oferecemos garantia de satisfação. Se não conseguirmos
                      identificar oportunidades de melhoria em sua análise ou se
                      não ficar satisfeito com nosso trabalho, devolvemos 100%
                      do valor investido.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ainda tem dúvidas? */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                    Ainda Tem Dúvidas?
                  </h2>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                      Nossa equipe de especialistas está sempre disponível para
                      esclarecer suas dúvidas e ajudá-lo a tomar a melhor
                      decisão para sua situação financeira.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D86C1F] rounded-full flex items-center justify-center mr-4">
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-[#1F2E5C]">
                            Telefone
                          </div>
                          <div className="text-gray-600">(11) 4000-2030</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4">
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-[#1F2E5C]">
                            WhatsApp
                          </div>
                          <div className="text-gray-600">(11) 99999-0000</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#3C4A75] rounded-full flex items-center justify-center mr-4">
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
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-[#1F2E5C]">
                            Email
                          </div>
                          <div className="text-gray-600">
                            contato@fixpathcredit.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2F3764069ee1124d83a25b8e6a1c67ea29?format=webp&width=800"
                    alt="Especialista da Fix Path Credit oferecendo suporte personalizado ao cliente"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#4CAF50] text-white p-6 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-sm">Resposta Garantida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1F2E5C] to-[#3C4A75] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para Começar?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Não deixe mais dúvidas impedirem você de recuperar seu crédito.
                Fale conosco e comece hoje mesmo sua jornada rumo à liberdade
                financeira.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contato"
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Falar com Especialista
                </a>
                <a
                  href="/precos"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Ver Nossos Planos
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
