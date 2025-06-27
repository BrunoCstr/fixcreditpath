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
        {/* Seção de Planos - Background Gradiente */}
        <motion.section
          id="planos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-32 pb-20 relative overflow-hidden"
        >
          {/* Enhanced Background with gradient and floating elements - Same as hero section */}
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
            <div className="max-w-7xl mx-auto pt-[35px]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2E5C] leading-tight mb-6"
                >
                  Pricing
                  <span className="block text-[#D86C1F] mt-2">
                  Simple, Transparent, Flexible
                  </span>
                </motion.h1>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transparent and effective solutions for every need. All plans include a satisfaction guarantee.
                </p>
              </motion.div>

              {/* Service Plans Section - US Compliance Version */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Credit Repair Program */}
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
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-2">Credit Repair Program</h3>
                    <div className="text-4xl font-bold text-[#D86C1F] mb-2">$199 Setup + $129/mo</div>
                    <p className="text-sm text-gray-500">Full audit, monthly disputes, ongoing support</p>
                  </div>
                  <div className="space-y-4 mb-8 text-left">
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Comprehensive credit audit and analysis</li>
                      <li>Monthly dispute processing (FCRA & Metro 2 standards)</li>
                      <li>Ongoing support and education</li>
                      <li>Transparent process, no guaranteed outcomes</li>
                      <li>Cancel anytime, no penalty</li>
                      <li>Service provided in compliance with CROA, FCRA, GLBA</li>
                    </ul>
                  </div>
                  <motion.a
                    href="/contato"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] hover:from-[#0F1F3C] hover:to-[#1F2E5C] text-white py-4 px-8 rounded-xl font-bold text-lg text-center block transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                  >
                    Start Credit Repair
                  </motion.a>
                </motion.div>

                {/* Metro 2 & FCRA Compliance Audit */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-[#D86C1F] rounded-2xl p-8 shadow-xl relative"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-[#D86C1F] rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-2">Metro 2 & FCRA Compliance Audit</h3>
                    <div className="text-4xl font-bold text-[#D86C1F] mb-2">$500 One-Time</div>
                    <p className="text-sm text-gray-500">PDF report + disputes + submission guide</p>
                  </div>
                  <div className="space-y-4 mb-8 text-left">
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Detailed credit report audit (Metro 2 & FCRA)</li>
                      <li>PDF summary of findings</li>
                      <li>Dispute letter templates included</li>
                      <li>Submission instructions for self-advocacy</li>
                      <li>No ongoing service or monthly fees</li>
                      <li>Compliant with all US credit repair laws</li>
                    </ul>
                  </div>
                  <motion.a
                    href="/contato"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white py-4 px-8 rounded-xl font-bold text-lg text-center block transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Request Compliance Audit</span>
                  </motion.a>
                </motion.div>

                {/* Audit + Repair Bundle */}
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
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-2">Audit + Repair Bundle</h3>
                    <div className="text-4xl font-bold text-[#D86C1F] mb-2">$500 Audit + $99 Setup + $129/mo</div>
                    <p className="text-sm text-gray-500">Audit + discounted repair onboarding</p>
                  </div>
                  <div className="space-y-4 mb-8 text-left">
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Full Metro 2 & FCRA audit included</li>
                      <li>Discounted onboarding for repair program</li>
                      <li>Monthly disputes and support</li>
                      <li>Cancel anytime, no penalty</li>
                      <li>All services provided in compliance with US law</li>
                    </ul>
                  </div>
                  <motion.a
                    href="/contato"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#256D2A] to-[#4CAF50] hover:from-[#1B5E20] hover:to-[#256D2A] text-white py-4 px-8 rounded-xl font-bold text-lg text-center block transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">Start Bundle</span>
                  </motion.a>
                </motion.div>
              </div>
              {/* Flat Package Option */}
              <div className="max-w-3xl mx-auto mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-lg text-center"
                >
                  <h3 className="text-2xl font-bold text-[#1F2E5C] mb-2">Pay-in-Full Flat Package (Optional)</h3>
                  <div className="text-4xl font-bold text-[#D86C1F] mb-2">$999 One-Time</div>
                  <p className="text-gray-700 mb-4">Covers 6 months of repair — no monthly fees</p>
                  <ul className="list-disc list-inside text-gray-700 mb-6 text-left mx-auto max-w-md">
                    <li>All features of the Credit Repair Program</li>
                    <li>One-time payment, no recurring charges for 6 months</li>
                    <li>Transparent, compliant process</li>
                  </ul>
                  <motion.a
                    href="/contato"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] hover:from-[#0F1F3C] hover:to-[#1F2E5C] text-white py-4 px-8 rounded-xl font-bold text-lg text-center block transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                  >
                    Request Flat Package
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Guarantees, Benefits, and Compliance */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-20"
          style={{
            background: `linear-gradient(135deg, #1F2E5C 0%, #2C4B73 25%, #1F2E5C 50%, #1F2E5C 70%, #2A3F66 85%, #1F2E5C 100%)`,
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#256D2A] text-white px-6 py-3 rounded-full shadow-lg">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-white rounded-full"
                    ></motion.div>
                    <span className="font-semibold text-sm">
                      WHY CHOOSE FIX PATH CREDIT?
                    </span>
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  More Than Promises,
                  <span className="block text-[#D86C1F] mt-2">
                    We Deliver Transparency
                  </span>
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="h-1.5 bg-gradient-to-r from-[#D86C1F] to-[#E1893D] mx-auto mb-8"
                />
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  We operate with full transparency and strict adherence to all federal and state credit repair laws. Our team is dedicated to providing clear, honest, and compliant services. No false promises—just a commitment to ethical standards and your right to accurate credit reporting.
                </p>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid lg:grid-cols-3 gap-8 mb-20"
              >
                {[
                  {
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Satisfaction Commitment",
                    description:
                      "If our initial audit does not identify any actionable items under FCRA or Metro 2, you may request a refund of your setup or audit fee. See our full refund policy for details.",
                    color: "bg-[#4CAF50]",
                    stats: "Refund Policy",
                    badge: "Transparent Process",
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    ),
                    title: "Fixed, Upfront Pricing",
                    description:
                      "All fees are disclosed before you enroll. There are no hidden charges or surprise costs. You may cancel at any time without penalty.",
                    color: "bg-[#D86C1F]",
                    stats: "$0 Hidden Fees",
                    badge: "Full Disclosure",
                  },
                  {
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                    title: "Flexible Service",
                    description:
                      "You are in control. You may change or cancel your service at any time. No long-term contracts or cancellation fees.",
                    color: "bg-[#3C4A75]",
                    stats: "No Penalties",
                    badge: "You're in Control",
                  },
                ].map((guarantee, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-20 h-20 ${guarantee.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl`}
                    >
                      {guarantee.icon}
                    </motion.div>
                    <div className="mb-4">
                      <div className={`inline-block px-3 py-1 text-xs font-bold rounded-full text-white ${guarantee.color} mb-2`}>
                        {guarantee.badge}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{guarantee.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6 text-base">{guarantee.description}</p>
                    <div className="text-3xl font-bold text-[#4CAF50] mb-2">{guarantee.stats}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Pricing FAQ Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-30">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Frequently Asked Questions
                </h2>
              </motion.div>
              <div className="space-y-6">
                {[
                  {
                    question: "Can I change my plan at any time?",
                    answer:
                      "Yes. You may upgrade, downgrade, or cancel your plan at any time. There are no penalties or long-term commitments. Please contact us to adjust your service.",
                  },
                  {
                    question: "Is there a discount for annual payment?",
                    answer:
                      "We offer a two-month discount for annual prepayment on the Credit Repair Program and Audit + Repair Bundle. Please contact us for details and eligibility.",
                  },
                  {
                    question: "What if I do not see results?",
                    answer:
                      "We do not guarantee specific outcomes. If our initial audit finds no actionable items under FCRA or Metro 2, you may request a refund of your setup or audit fee. See our refund policy for more information.",
                  },
                  {
                    question: "Are your services compliant with US law?",
                    answer:
                      "Yes. All services are provided in compliance with the Credit Repair Organizations Act (CROA), Fair Credit Reporting Act (FCRA), Gramm-Leach-Bliley Act (GLBA), and Metro 2 standards."
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
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Custom Solution CTA */}
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
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our team can create a personalized plan for your unique credit situation. Contact us for a confidential, no-obligation consultation.
                </p>
                <motion.a
                  href="/contato"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-block bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] hover:from-[#0F1F3C] hover:to-[#1F2E5C] text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl group overflow-hidden transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 text-white font-bold tracking-wide">Contact Us</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-[#1F2E5C] text-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Credit Recovery Journey
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Choose the plan that fits your needs and take the first step toward better credit. All plans include a free initial consultation. No guarantees of specific results. All services are compliant with US law.
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
                  className="relative bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl group overflow-hidden transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 text-white font-bold tracking-wide">Get Started</span>
                </motion.a>
                <motion.a
                  href="/servicos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
