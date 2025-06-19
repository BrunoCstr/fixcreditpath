"use client";

import { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1F2E5C] via-[#3C4A75] to-[#1F2E5C] text-white pt-24 lg:pt-28 pb-20 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Fale com Nossos
                <span className="text-[#D86C1F] block">Especialistas</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Estamos prontos para ajudar você a recuperar seu crédito.
                Atendimento personalizado e consulta inicial gratuita.
              </p>
              <div className="bg-[#D86C1F] text-white px-6 py-3 rounded-full inline-block">
                <span className="font-semibold">
                  ✨ Resposta garantida em até 24 horas
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Canais de Contato */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Escolha Como Prefere Falar Conosco
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Oferecemos múltiplos canais de atendimento para sua comodidade
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {/* Telefone */}
                <a
                  href="tel:+551140002030"
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:border-[#D86C1F] transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#D86C1F] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Telefone
                  </h3>
                  <p className="text-2xl font-bold text-[#D86C1F] mb-2">
                    (11) 4000-2030
                  </p>
                  <p className="text-sm text-gray-600">
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="text-sm text-gray-600">Sábado: 8h às 12h</p>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5511999990000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:border-[#4CAF50] transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    WhatsApp
                  </h3>
                  <p className="text-2xl font-bold text-[#4CAF50] mb-2">
                    (11) 99999-0000
                  </p>
                  <p className="text-sm text-gray-600">Disponível 24/7</p>
                  <p className="text-sm text-gray-600">Resposta rápida</p>
                </a>

                {/* Email */}
                <a
                  href="mailto:contato@fixpathcredit.com"
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:border-[#3C4A75] transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#3C4A75] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Email
                  </h3>
                  <p className="text-lg font-bold text-[#3C4A75] mb-2">
                    contato@fixpathcredit.com
                  </p>
                  <p className="text-sm text-gray-600">Resposta em até 24h</p>
                  <p className="text-sm text-gray-600">Segunda a Sexta</p>
                </a>

                {/* Chat Online */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:border-[#256D2A] transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-[#256D2A] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Chat Online
                  </h3>
                  <p className="text-lg font-bold text-[#256D2A] mb-2">
                    Atendimento Imediato
                  </p>
                  <p className="text-sm text-gray-600">
                    Segunda a Sexta: 8h às 22h
                  </p>
                  <p className="text-sm text-gray-600">Clique para iniciar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Formulário */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold text-[#1F2E5C] mb-6">
                    Solicite Sua Consulta Gratuita
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Preencha o formulário abaixo e nossa equipe entrará em
                    contato em até 24 horas para agendar sua consulta inicial
                    gratuita.
                  </p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CPF *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
                          placeholder="000.000.000-00"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone/WhatsApp *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
                          placeholder="(11) 99999-0000"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Situação Atual do Crédito
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors">
                        <option value="">Selecione sua situação</option>
                        <option value="name-clean">
                          Nome limpo, mas score baixo
                        </option>
                        <option value="name-dirty">
                          Nome sujo nos órgãos de proteção
                        </option>
                        <option value="debt-negotiation">
                          Preciso negociar dívidas
                        </option>
                        <option value="score-improvement">
                          Quero melhorar meu score
                        </option>
                        <option value="credit-monitoring">
                          Quero monitorar meu crédito
                        </option>
                        <option value="other">Outra situação</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Melhor Horário para Contato
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors">
                        <option value="">Selecione o horário</option>
                        <option value="morning">Manhã (8h às 12h)</option>
                        <option value="afternoon">Tarde (12h às 18h)</option>
                        <option value="evening">Noite (18h às 22h)</option>
                        <option value="anytime">Qualquer horário</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem (Opcional)
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D86C1F] focus:border-transparent transition-colors"
                        placeholder="Conte-nos mais sobre sua situação ou dúvidas específicas..."
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 text-[#D86C1F] focus:ring-[#D86C1F] border-gray-300 rounded"
                        required
                      />
                      <label className="ml-3 text-sm text-gray-600">
                        Concordo em receber contato da Fix Path Credit e aceito
                        os{" "}
                        <a
                          href="/legal"
                          className="text-[#D86C1F] hover:underline"
                        >
                          termos de uso e política de privacidade
                        </a>
                        . *
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D86C1F] hover:bg-[#E1893D] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      Solicitar Consulta Gratuita
                    </button>
                  </form>
                </div>

                {/* Informações Adicionais */}
                <div className="space-y-8">
                  <div className="relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2F3764069ee1124d83a25b8e6a1c67ea29?format=webp&width=800"
                      alt="Consulta personalizada com especialista da Fix Path Credit"
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-[#4CAF50] text-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold">Grátis</div>
                      <div className="text-sm">Consulta Inicial</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-4">
                      O que você ganha na consulta gratuita:
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                        <span className="text-gray-700">
                          Análise inicial do seu CPF
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                        <span className="text-gray-700">
                          Identificação de oportunidades de melhoria
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                        <span className="text-gray-700">
                          Estratégia personalizada para seu caso
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                        <span className="text-gray-700">
                          Orientações sobre próximos passos
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                        <span className="text-gray-700">
                          Esclarecimento de todas as suas dúvidas
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#1F2E5C] to-[#3C4A75] rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">
                      Garantias da Fix Path Credit
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#D86C1F] mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>100% dos dados protegidos</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#D86C1F] mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Conformidade total com LGPD</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#D86C1F] mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Garantia de satisfação</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-[#D86C1F] mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Sem taxas escondidas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Endereços dos Escritórios */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Nossos Escritórios
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Estamos presentes em 15 estados com escritórios
                  estrategicamente localizados
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* São Paulo - Matriz */}
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1F2E5C]">
                        São Paulo - Matriz
                      </h3>
                      <span className="text-sm text-[#D86C1F] font-semibold">
                        Escritório Principal
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>Av. Paulista, 1578 - 12º andar</p>
                    <p>Bela Vista - São Paulo/SP</p>
                    <p>CEP: 01310-200</p>
                    <p className="font-semibold text-[#1F2E5C]">
                      Atendimento presencial:
                    </p>
                    <p>Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>

                {/* Rio de Janeiro */}
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#256D2A] rounded-full flex items-center justify-center mr-4">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1F2E5C]">
                        Rio de Janeiro
                      </h3>
                      <span className="text-sm text-[#256D2A] font-semibold">
                        Escritório Regional
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>Av. Rio Branco, 156 - 8º andar</p>
                    <p>Centro - Rio de Janeiro/RJ</p>
                    <p>CEP: 20040-020</p>
                    <p className="font-semibold text-[#1F2E5C]">
                      Atendimento presencial:
                    </p>
                    <p>Segunda a Sexta: 8h às 17h</p>
                  </div>
                </div>

                {/* Belo Horizonte */}
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1F2E5C]">
                        Belo Horizonte
                      </h3>
                      <span className="text-sm text-[#3C4A75] font-semibold">
                        Escritório Regional
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>Av. Afonso Pena, 867 - 5º andar</p>
                    <p>Centro - Belo Horizonte/MG</p>
                    <p>CEP: 30130-002</p>
                    <p className="font-semibold text-[#1F2E5C]">
                      Atendimento presencial:
                    </p>
                    <p>Segunda a Sexta: 8h às 17h</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Também atendemos remotamente em todos os estados do Brasil
                </p>
                <a
                  href="tel:+551140002030"
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
                >
                  (11) 4000-2030 - Ligue Agora
                </a>
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
                  Dúvidas Frequentes sobre Contato
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Em quanto tempo vocês retornam o contato?
                  </h3>
                  <p className="text-gray-600">
                    Garantimos retorno em até 24 horas para todos os contatos
                    recebidos. Nos horários comerciais, geralmente respondemos
                    em poucas horas.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    A consulta inicial é realmente gratuita?
                  </h3>
                  <p className="text-gray-600">
                    Sim! A consulta inicial é 100% gratuita e sem compromisso.
                    Nosso objetivo é entender sua situação e mostrar como
                    podemos ajudar.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">
                    Preciso me deslocar até um escritório?
                  </h3>
                  <p className="text-gray-600">
                    Não é obrigatório. Atendemos remotamente em todo o Brasil. O
                    atendimento presencial está disponível nas cidades onde
                    temos escritórios.
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
                Não Perca Mais Tempo!
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Cada dia sem crédito é uma oportunidade perdida. Entre em
                contato agora e comece hoje mesmo sua jornada rumo à liberdade
                financeira.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5511999990000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="tel:+551140002030"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
