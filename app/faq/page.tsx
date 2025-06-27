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
      category: "Legal",
      question: "Is this legal?",
      answer:
        "Yes. The Fair Credit Reporting Act (FCRA) protects your right to dispute any inaccurate, outdated, or unverifiable information on your credit reports. Our process is fully compliant with FCRA, CROA, and all U.S. consumer protection laws.",
    },
    {
      id: "faq-2",
      category: "Process",
      question: "Do you pull my credit?",
      answer:
        "No. You pull your own reports securely through Credit Hero, which links your credit reports to your client portal. We never ask for your login credentials. You stay in control.",
    },
    {
      id: "faq-3",
      category: "Results",
      question: "Can you guarantee deletions?",
      answer:
        "No one can legally guarantee specific results in credit repair. We guarantee that we will work professionally, ethically, and within the law to help you challenge inaccurate information.",
    },
    {
      id: "faq-4",
      category: "Services",
      question: "What's the difference between the Compliance Audit and Credit Repair?",
      answer:
        "- Audit: A one-time full report that checks if your credit data complies with FCRA and Metro 2 standards — plus dispute documents and guidance. - Credit Repair: Ongoing monthly support where we manage dispute processes for you over time.",
    },
    {
      id: "faq-5",
      category: "Process",
      question: "Does this hurt my credit score?",
      answer:
        "No. Pulling your reports through a monitoring service like Credit Hero is a soft inquiry and does not impact your credit score.",
    },
    {
      id: "faq-6",
      category: "Billing",
      question: "How do I cancel?",
      answer:
        "Simple. You can cancel at any time — no contracts, no penalties.",
    },
  ];

  const filteredQuestions = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
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
        {/* Hero Section - Enhanced Design */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              {/* Question mark pattern */}
              <div className="absolute top-20 left-1/4 w-6 h-6 text-[#1F2E5C]/10 text-4xl transform rotate-12">
                ?
              </div>
              <div className="absolute top-32 right-1/3 w-6 h-6 text-[#D86C1F]/10 text-2xl transform -rotate-12">
                ?
              </div>
              <div className="absolute bottom-20 left-1/3 w-6 h-6 text-[#256D2A]/10 text-3xl transform rotate-45">
                ?
              </div>
              <div className="absolute top-1/2 right-1/4 w-6 h-6 text-[#3C4A75]/10 text-5xl transform -rotate-45">
                ?
              </div>

              {/* Floating geometric shapes */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-16 right-16 w-12 h-12 bg-gradient-to-br from-[#D86C1F]/20 to-[#E1893D]/10 rounded-xl transform rotate-45"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-24 left-16 w-8 h-8 bg-gradient-to-br from-[#1F2E5C]/20 to-[#3C4A75]/10 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 left-20 w-6 h-6 bg-gradient-to-br from-[#256D2A]/20 to-[#4CAF50]/10 rounded-lg transform rotate-12"
              />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center bg-white/80 backdrop-blur-sm text-[#1F2E5C] px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#D86C1F]/20 shadow-sm"
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
                Specialized Help Center
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1F2E5C] mb-8 leading-tight"
              >
                Frequently
                <span className="block bg-gradient-to-r from-[#D86C1F] to-[#E1893D] bg-clip-text text-transparent mt-2">
                  Asked Questions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto"
              >
                Find answers to the main questions about
                <strong className="text-[#1F2E5C]"> credit restoration</strong>,
                our services and processes. More than{" "}
                <strong className="text-[#D86C1F]">50 questions</strong>{" "}
                answered by experts.
              </motion.p>

              {/* Enhanced Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/10 to-[#D86C1F]/10 rounded-2xl blur-xl group-focus-within:blur-2xl transition-all duration-300"></div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search questions... (e.g. 'how does it work', 'how long', 'prices')"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-6 py-4 pl-14 text-lg border-2 border-gray-200 rounded-2xl focus:border-[#D86C1F] focus:outline-none bg-white/90 backdrop-blur-sm shadow-xl transition-all duration-300 placeholder-gray-400"
                    />
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400 group-focus-within:text-[#D86C1F] transition-colors duration-300"
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
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#D86C1F] transition-colors duration-300"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Search Results Info */}
                {searchTerm && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/60 backdrop-blur-sm border border-[#D86C1F]/20 rounded-xl px-6 py-4 inline-block shadow-lg mt-6"
                  >
                    <p className="text-gray-700 font-medium">
                      <span className="text-[#D86C1F] font-bold">
                        {filteredQuestions.length}
                      </span>{" "}
                      resultado(s) encontrado(s) para "
                      <span className="text-[#1F2E5C] font-semibold">
                        {searchTerm}
                      </span>
                      "
                    </p>
                  </motion.div>
                )}
              </motion.div>
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
                    No results found
                  </h3>
                  <p className="text-gray-600 mb-8">
                    We couldn't find any questions related to "{searchTerm}".
                    Try using other search terms.
                  </p>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Clear Search
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
                      className="group relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#D86C1F]/30 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Subtle gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 to-[#D86C1F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full px-8 py-8 text-left bg-white group-hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 transition-all duration-200 relative z-10"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-6">
                            <div className="flex items-center mb-4">
                              <span
                                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold mr-4 ${getCategoryColor(
                                  faq.category
                                )}`}
                              >
                                {faq.category}
                              </span>
                              {openQuestion === faq.id && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="inline-flex items-center px-2 py-1 bg-[#D86C1F]/10 text-[#D86C1F] rounded-full text-xs font-medium"
                                >
                                  Open
                                </motion.span>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2E5C] leading-relaxed group-hover:text-[#1F2E5C] transition-colors duration-200">
                              {faq.question}
                            </h3>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <motion.div
                              animate={{
                                rotate: openQuestion === faq.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="w-12 h-12 bg-gray-50 group-hover:bg-[#D86C1F]/10 rounded-xl flex items-center justify-center transition-colors duration-300"
                            >
                              <svg
                                className="w-6 h-6 text-gray-500 group-hover:text-[#D86C1F] transition-colors duration-300"
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden relative z-10"
                          >
                            <div className="px-8 pb-8 bg-gradient-to-b from-gray-50/50 to-gray-50">
                              <div className="border-t border-gray-200 pt-6">
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                  <p className="text-gray-700 leading-relaxed text-lg">
                                    {faq.answer}
                                  </p>
                                </div>
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

        {/* Enhanced Help Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#1F2E5C] to-[#3C4A75] overflow-hidden">
          {/* Background decorative elements */}
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
              className="absolute top-10 right-10 w-32 h-32 bg-[#D86C1F]/10 rounded-full blur-xl"
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
              className="absolute bottom-10 left-10 w-40 h-40 bg-[#256D2A]/10 rounded-full blur-xl"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-.75 19.5A9.75 9.75 0 0112 2.25z"
                      />
                    </svg>
                    Specialized Support
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Need to
                    <span className="block text-[#D86C1F]">More Help?</span>
                  </h2>

                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Our team of experts is always available to answer your
                    questions and offer the support you need.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center text-white">
                      <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Guaranteed response within 24 hours</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Credit Restoration Specialists</span>
                    </div>
                    <div className="flex items-center text-white">
                      <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Personalized and humanized service</span>
                    </div>
                  </div>
                </motion.div>

                {/* Right Content - Contact Options */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="grid gap-6"
                >
                  {[
                    {
                      title: "Phone",
                      value: "(123) 456-7890",
                      description: "Monday–Friday, 9 AM – 6 PM (EST)",
                      color: "from-[#D86C1F] to-[#E1893D]",
                      icon: (
                        <svg
                          className="w-6 h-6"
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
                      ),
                    },
                    {
                      title: "WhatsApp",
                      value: "(123) 456-7890",
                      description: "Quick and direct response",
                      color: "from-[#4CAF50] to-[#2E7A32]",
                      icon: (
                        <svg
                          className="w-6 h-6"
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
                      ),
                    },
                    {
                      title: "E-mail",
                      value: "support@fixpathcredit.org",
                      description: "Detailed response within 24h",
                      color: "from-[#3C4A75] to-[#1F2E5C]",
                      icon: (
                        <svg
                          className="w-6 h-6"
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
                      ),
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}
                        >
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#1F2E5C] mb-1">
                            {contact.title}
                          </h3>
                          <p className="text-[#1F2E5C] font-semibold mb-1">
                            {contact.value}
                          </p>
                          <p className="text-sm text-gray-600">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* CTA Button */}
                  <motion.a
                    href="/contato"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-colors duration-300 text-center shadow-xl hover:shadow-2xl"
                  >
                    Talk to an Expert Now
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
