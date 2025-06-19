"use client";

import { PageLayout } from "@/components/PageLayout";

export default function PricingPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1F2E5C] via-[#3C4A75] to-[#1F2E5C] text-white pt-24 lg:pt-28 pb-20 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Planos Transparentes
                <span className="text-[#D86C1F] block">
                  Sem Taxas Escondidas
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Escolha o plano ideal para sua situação. Todos incluem garantia
                de satisfação de 30 dias e suporte especializado.
              </p>
              <div className="bg-[#D86C1F] text-white px-6 py-3 rounded-full inline-block">
                <span className="font-semibold">
                  ✨ Consulta inicial gratuita para todos os planos
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Planos de Preços */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Plano Básico */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-8">
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
                    <div className="flex items-start">
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
                        Análise completa de crédito em 72h
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Relatório detalhado de erros e inconsistências
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Plano de ação personalizado
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        1 rodada de disputas profissionais
                      </span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-gray-700">Suporte por email</span>
                    </div>
                    <div className="flex items-start">
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
                      <span className="text-gray-700">Garantia de 30 dias</span>
                    </div>
                  </div>

                  <a
                    href="/contato"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-[#1F2E5C] py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-300"
                  >
                    Escolher Plano Básico
                  </a>
                </div>

                {/* Plano Profissional - Mais Popular */}
                <div className="bg-white border-2 border-[#D86C1F] rounded-2xl p-8 shadow-xl relative transform lg:scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D86C1F] text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>

                  <div className="text-center mb-8">
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
                    <div className="flex items-start">
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
                        <strong>Tudo do plano Básico incluído</strong>
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Disputas ilimitadas até resolução
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Negociação ativa com credores
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Monitoramento mensal contínuo
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Suporte prioritário por telefone e WhatsApp
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Relatórios mensais de progresso
                      </span>
                    </div>
                  </div>

                  <a
                    href="/contato"
                    className="w-full bg-[#D86C1F] hover:bg-[#E1893D] text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-300 shadow-lg"
                  >
                    Escolher Plano Profissional
                  </a>
                </div>

                {/* Plano Premium */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-8">
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
                    <div className="flex items-start">
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
                        <strong>Tudo do plano Profissional incluído</strong>
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Consultor dedicado exclusivo
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Suporte 24/7 por todos os canais
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Garantia estendida de 120 dias
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Consultoria financeira completa
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Preparação para grandes compras (casa, carro)
                      </span>
                    </div>
                    <div className="flex items-start">
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
                        Proteção completa contra fraudes
                      </span>
                    </div>
                  </div>

                  <a
                    href="/contato"
                    className="w-full bg-[#256D2A] hover:bg-[#4CAF50] text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-300"
                  >
                    Escolher Plano Premium
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Garantias e Benefícios */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Nossas Garantias
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Trabalhamos com total transparência e garantias sólidas para
                  sua tranquilidade
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
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
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Garantia de Satisfação
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Se não ficar satisfeito com nosso trabalho em 30 dias,
                    devolvemos 100% do valor investido.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#D86C1F] rounded-full flex items-center justify-center mx-auto mb-6">
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
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Sem Taxas Escondidas
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    O preço que você vê é o preço que você paga. Sem surpresas,
                    sem cobranças extras.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#3C4A75] rounded-full flex items-center justify-center mx-auto mb-6">
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
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Cancelamento Flexível
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pode cancelar a qualquer momento sem multas ou penalidades.
                    Sem pegadinhas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados e Estatísticas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                    Resultados que Comprovam
                  </h2>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                      Nossos números falam por si só. Como uma empresa nova e
                      inovadora, utilizamos tecnologia avançada e foco total no
                      cliente para entregar os melhores resultados.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#D86C1F] mb-2">
                          120
                        </div>
                        <div className="text-sm text-gray-500">
                          Pontos de aumento médio no score
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#D86C1F] mb-2">
                          100%
                        </div>
                        <div className="text-sm text-gray-500">
                          Foco no cliente
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#D86C1F] mb-2">
                          60 dias
                        </div>
                        <div className="text-sm text-gray-500">
                          Tempo médio para primeiros resultados
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#D86C1F] mb-2">
                          50K+
                        </div>
                        <div className="text-sm text-gray-500">
                          Famílias já atendidas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2Fc09a86a294c74a68823667087f9d14eb?format=webp&width=800"
                    alt="Família satisfeita com os resultados dos serviços da Fix Path Credit"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#4CAF50] text-white p-6 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Suporte Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Rápido */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Perguntas Frequentes sobre Preços
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Posso mudar de plano a qualquer momento?
                  </h3>
                  <p className="text-gray-600">
                    Sim! Você pode fazer upgrade ou downgrade do seu plano a
                    qualquer momento. Entre em contato conosco e ajustaremos sua
                    assinatura conforme sua necessidade.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Há desconto para pagamento anual?
                  </h3>
                  <p className="text-gray-600">
                    Sim! Oferecemos 2 meses grátis para pagamentos anuais nos
                    planos Profissional e Premium. Entre em contato para
                    conhecer as condições especiais.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    O que acontece se eu não tiver resultados?
                  </h3>
                  <p className="text-gray-600">
                    Oferecemos garantia de satisfação. Se não identificarmos
                    oportunidades de melhoria em sua análise inicial, devolvemos
                    100% do valor investido.
                  </p>
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
                Comece Sua Recuperação de Crédito Hoje
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Escolha o plano ideal para sua situação e dê o primeiro passo
                rumo à liberdade financeira. Consulta inicial gratuita para
                todos os planos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contato"
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Falar com Consultor
                </a>
                <a
                  href="/servicos"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Conhecer Serviços
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
