"use client";

import { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";

export default function LegalPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1F2E5C] via-[#3C4A75] to-[#1F2E5C] text-white pt-24 lg:pt-28 pb-20 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Documentos Legais
                <span className="text-[#D86C1F] block">e Transparência</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Conheça nossos termos de uso, política de privacidade e
                compromissos com a proteção dos seus dados e conformidade legal.
              </p>
              <div className="bg-[#D86C1F] text-white px-6 py-3 rounded-full inline-block">
                <span className="font-semibold">
                  ✨ 100% conforme LGPD e regulamentações
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Menu de Navegação dos Documentos */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a
                  href="#termos"
                  className="bg-[#1F2E5C] hover:bg-[#162347] text-white p-4 rounded-lg text-center transition-colors duration-300"
                >
                  <div className="font-semibold">Termos de Uso</div>
                </a>
                <a
                  href="#privacidade"
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white p-4 rounded-lg text-center transition-colors duration-300"
                >
                  <div className="font-semibold">Privacidade</div>
                </a>
                <a
                  href="#lgpd"
                  className="bg-[#256D2A] hover:bg-[#4CAF50] text-white p-4 rounded-lg text-center transition-colors duration-300"
                >
                  <div className="font-semibold">LGPD</div>
                </a>
                <a
                  href="#conformidade"
                  className="bg-[#3C4A75] hover:bg-[#2d3a5f] text-white p-4 rounded-lg text-center transition-colors duration-300"
                >
                  <div className="font-semibold">Conformidade</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Termos de Uso */}
        <section id="termos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#1F2E5C] rounded-full flex items-center justify-center mr-4">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C]">
                  Termos de Uso
                </h2>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Última atualização:</strong> 15 de dezembro de 2024
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Vigência:</strong> A partir da data de aceite
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    1. Sobre a Fix Path Credit
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      A Fix Path Credit é uma empresa especializada em
                      consultoria para restauração de crédito, devidamente
                      registrada com CNPJ 12.345.678/0001-90, com sede na Av.
                      Paulista, 1578 - 12º andar, Bela Vista, São Paulo/SP, CEP
                      01310-200.
                    </p>
                    <p>
                      Oferecemos serviços de análise de crédito, contestação de
                      informações incorretas, negociação de dívidas e
                      monitoramento contínuo, sempre dentro dos parâmetros
                      legais estabelecidos pela legislação brasileira.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    2. Serviços Oferecidos
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Nossos serviços incluem, mas não se limitam a:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Análise completa e detalhada do histórico de crédito
                      </li>
                      <li>
                        Identificação de erros e inconsistências em relatórios
                      </li>
                      <li>
                        Contestação de informações incorretas ou desatualizadas
                      </li>
                      <li>Negociação com credores para quitação de dívidas</li>
                      <li>Monitoramento contínuo do score de crédito</li>
                      <li>Consultoria financeira e educacional</li>
                      <li>Proteção contra fraudes e uso indevido de dados</li>
                    </ul>
                    <p>
                      <strong>Importante:</strong> Não garantimos resultados
                      específicos, pois cada caso é único e depende de diversos
                      fatores externos.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    3. Responsabilidades do Cliente
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Ao contratar nossos serviços, o cliente se compromete a:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fornecer informações verdadeiras e atualizadas</li>
                      <li>Apresentar toda a documentação solicitada</li>
                      <li>Efetuar o pagamento conforme acordado</li>
                      <li>Comunicar mudanças em sua situação financeira</li>
                      <li>
                        Não realizar ações que prejudiquem o trabalho em
                        andamento
                      </li>
                      <li>
                        Manter sigilo sobre estratégias e métodos utilizados
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    4. Pagamentos e Cancelamentos
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Formas de Pagamento:</strong> Aceitamos cartão de
                      crédito, débito, PIX, boleto bancário e transferência
                      bancária.
                    </p>
                    <p>
                      <strong>Política de Cancelamento:</strong> O cliente pode
                      cancelar o serviço a qualquer momento sem multas. Para
                      serviços mensais, o cancelamento deve ser solicitado até 5
                      dias antes do vencimento.
                    </p>
                    <p>
                      <strong>Garantia:</strong> Oferecemos garantia de
                      satisfação de 30 dias para o plano Básico e até 120 dias
                      para o plano Premium.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    5. Limitações de Responsabilidade
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      A Fix Path Credit não se responsabiliza por resultados
                      específicos, pois a melhoria do score depende de fatores
                      externos como políticas dos órgãos de proteção,
                      comportamento de pagamento do cliente e outras variáveis.
                    </p>
                    <p>
                      Nossa responsabilidade se limita ao valor pago pelos
                      serviços contratados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Política de Privacidade */}
        <section id="privacidade" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C]">
                  Política de Privacidade
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    1. Coleta de Dados
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Coletamos os seguintes tipos de dados:</p>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-[#1F2E5C] mb-3">
                        Dados Pessoais:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Nome completo, CPF, RG</li>
                        <li>Data de nascimento</li>
                        <li>Endereço residencial</li>
                        <li>Telefone e email</li>
                        <li>Informações profissionais</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="font-bold text-[#1F2E5C] mb-3">
                        Dados Financeiros:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Relatórios de crédito dos órgãos de proteção</li>
                        <li>Histórico de pagamentos</li>
                        <li>Informações sobre dívidas</li>
                        <li>Score de crédito</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    2. Uso dos Dados
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Utilizamos seus dados exclusivamente para:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Prestação dos serviços contratados</li>
                      <li>Comunicação sobre o andamento dos serviços</li>
                      <li>Cumprimento de obrigações legais</li>
                      <li>Melhoria de nossos serviços (dados anonimizados)</li>
                      <li>Prevenção de fraudes</li>
                    </ul>
                    <p className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <strong>Importante:</strong> Nunca compartilhamos seus
                      dados pessoais com terceiros para fins comerciais ou de
                      marketing.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    3. Proteção dos Dados
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Implementamos as seguintes medidas de segurança:</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Técnicas:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Criptografia SSL/TLS</li>
                          <li>Servidores seguros</li>
                          <li>Backups criptografados</li>
                          <li>Firewall avançado</li>
                          <li>Monitoramento 24/7</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-6">
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Administrativas:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Acesso restrito</li>
                          <li>Treinamento de equipe</li>
                          <li>Políticas internas</li>
                          <li>Auditoria regular</li>
                          <li>Contratos de confidencialidade</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    4. Seus Direitos
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Conforme a LGPD, você tem os seguintes direitos:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-2"></span>
                          <strong>Acesso</strong>
                        </div>
                        <p className="text-sm">
                          Saber quais dados temos sobre você
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-2"></span>
                          <strong>Correção</strong>
                        </div>
                        <p className="text-sm">Corrigir dados incorretos</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-2"></span>
                          <strong>Exclusão</strong>
                        </div>
                        <p className="text-sm">Solicitar remoção dos dados</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-2"></span>
                          <strong>Portabilidade</strong>
                        </div>
                        <p className="text-sm">
                          Transferir dados para outro serviço
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LGPD */}
        <section id="lgpd" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C]">
                  Conformidade com LGPD
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#256D2A] mb-4">
                    Nosso Compromisso com a LGPD
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A Fix Path Credit está 100% adequada à Lei Geral de Proteção
                    de Dados (LGPD - Lei nº 13.709/2018) e mantem conformidade
                    contínua com todas as suas exigências para garantir a
                    proteção dos dados pessoais de nossos clientes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    Base Legal para Tratamento de Dados
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Tratamos seus dados pessoais com base nas seguintes bases
                      legais da LGPD:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Art. 7º, V - Consentimento
                        </h4>
                        <p className="text-sm">
                          Para comunicações promocionais e melhorias de serviço,
                          mediante seu consentimento livre e informado.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Art. 7º, V - Execução de Contrato
                        </h4>
                        <p className="text-sm">
                          Para execução dos serviços de restauração de crédito
                          contratados ou procedimentos preliminares.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Art. 7º, II - Cumprimento Legal
                        </h4>
                        <p className="text-sm">
                          Para cumprimento de obrigação legal ou regulatória,
                          como prestação de informações aos órgãos competentes.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Art. 7º, VI - Interesse Legítimo
                        </h4>
                        <p className="text-sm">
                          Para prevenção de fraudes e segurança dos nossos
                          sistemas e dos dados dos clientes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    Encarregado de Dados (DPO)
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Conforme exigido pela LGPD, designamos um Encarregado de
                        Proteção de Dados (DPO) para servir como canal de
                        comunicação entre você, a Fix Path Credit e a ANPD.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-[#1F2E5C] mb-2">
                            Dados para Contato:
                          </h4>
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
                        <div>
                          <h4 className="font-bold text-[#1F2E5C] mb-2">
                            Responsabilidades:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Aceitar reclamações sobre LGPD</li>
                            <li>Prestar esclarecimentos</li>
                            <li>Adotar providências necessárias</li>
                            <li>Comunicar à ANPD quando necessário</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    Exercício dos Seus Direitos
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Para exercer qualquer um dos seus direitos previstos na
                      LGPD, você pode:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <div className="w-12 h-12 bg-[#D86C1F] rounded-full flex items-center justify-center mx-auto mb-4">
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
                        <h4 className="font-bold text-[#1F2E5C] mb-2">Email</h4>
                        <p className="text-sm">dpo@fixpathcredit.com</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
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
                        <h4 className="font-bold text-[#1F2E5C] mb-2">
                          Telefone
                        </h4>
                        <p className="text-sm">(11) 4000-2031</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <div className="w-12 h-12 bg-[#3C4A75] rounded-full flex items-center justify-center mx-auto mb-4">
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
                          </svg>
                        </div>
                        <h4 className="font-bold text-[#1F2E5C] mb-2">
                          Presencial
                        </h4>
                        <p className="text-sm">
                          Av. Paulista, 1578 - 12º andar
                        </p>
                      </div>
                    </div>
                    <p className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <strong>Prazo de Resposta:</strong> Respondemos às
                      solicitações relacionadas à LGPD em até 15 dias, conforme
                      previsto na lei.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conformidade Regulatória */}
        <section id="conformidade" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C]">
                  Conformidade Regulatória
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-6">
                    Órgãos Reguladores e Certificações
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h4 className="font-bold text-[#1F2E5C] mb-4">
                        Banco Central do Brasil
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Conformidade com regulamentações de crédito</p>
                        <p>• Adequação às normas do SCR</p>
                        <p>• Cumprimento das diretrizes do BC</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h4 className="font-bold text-[#1F2E5C] mb-4">
                        ANPD - Autoridade Nacional
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Conformidade plena com LGPD</p>
                        <p>• Relatórios de impacto à proteção de dados</p>
                        <p>• Adequação contínua às diretrizes</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h4 className="font-bold text-[#1F2E5C] mb-4">PROCON</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Conformidade com CDC</p>
                        <p>• Transparência nas relações de consumo</p>
                        <p>• Atendimento às normas de proteção</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h4 className="font-bold text-[#1F2E5C] mb-4">
                        Serasa, SPC, Quod
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>• Credenciamento oficial</p>
                        <p>• Acesso autorizado aos sistemas</p>
                        <p>• Conformidade com políticas internas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-6">
                    Certificações e Auditoria
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                      <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      <h4 className="font-bold text-[#1F2E5C] mb-2">
                        ISO 27001
                      </h4>
                      <p className="text-sm text-gray-600">
                        Certificação em segurança da informação
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                      <div className="w-16 h-16 bg-[#D86C1F] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      <h4 className="font-bold text-[#1F2E5C] mb-2">SSL/TLS</h4>
                      <p className="text-sm text-gray-600">
                        Criptografia avançada para proteção de dados
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                      <div className="w-16 h-16 bg-[#3C4A75] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      <h4 className="font-bold text-[#1F2E5C] mb-2">
                        Auditoria Anual
                      </h4>
                      <p className="text-sm text-gray-600">
                        Auditoria independente de processos e sistemas
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                    Contato Legal
                  </h3>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Departamento Jurídico
                        </h4>
                        <div className="space-y-2 text-gray-600">
                          <p>
                            <strong>Email:</strong> juridico@fixpathcredit.com
                          </p>
                          <p>
                            <strong>Telefone:</strong> (11) 4000-2032
                          </p>
                          <p>
                            <strong>Horário:</strong> Segunda a Sexta, 9h às 17h
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1F2E5C] mb-3">
                          Notificações Legais
                        </h4>
                        <div className="space-y-2 text-gray-600">
                          <p>
                            <strong>Email:</strong> legal@fixpathcredit.com
                          </p>
                          <p>
                            <strong>Endereço:</strong> Av. Paulista, 1578 - 12º
                            andar
                          </p>
                          <p>
                            <strong>CEP:</strong> 01310-200 - São Paulo/SP
                          </p>
                        </div>
                      </div>
                    </div>
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
                Transparência e Segurança Garantidas
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Nossa conformidade legal e compromisso com a proteção dos seus
                dados garantem que você tenha total segurança ao contratar
                nossos serviços.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contato"
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Falar com Especialista
                </a>
                <a
                  href="mailto:dpo@fixpathcredit.com"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Contatar DPO
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
