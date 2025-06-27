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
              {/* Hero Header */}
              <div className="text-center mb-16">
                {/* Compliance Badge */}
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
                  Compliant with FCRA, CROA, GLBA & Metro 2 Standards
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2E5C] leading-tight mb-6"
                >
                  Legal & Compliance
                  <span className="block text-[#D86C1F] mt-2">
                    Transparency & Consumer Rights
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12"
                >
                  Learn about our <strong className="text-[#1F2E5C]">Terms of Service</strong>, <strong className="text-[#D86C1F]">Privacy Policy</strong>, and our commitment to your rights and data protection under U.S. law.
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
                    href="#terms"
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
                      Terms of Service
                    </div>
                  </motion.a>
                  {/* Navigation 2 */}
                  <motion.a
                    href="#privacy"
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
                      Privacy Policy
                    </div>
                  </motion.a>
                  {/* Navigation 3 */}
                  <motion.a
                    href="#compliance"
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
                      Compliance Notice
                    </div>
                  </motion.a>
                  {/* Navigation 4 */}
                  <motion.a
                    href="#contact"
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
                      Contact & Rights
                    </div>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Terms of Service Section */}
        <motion.section
          id="terms"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
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
                    Terms of Service
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
              <div className="space-y-8 text-gray-700 text-lg">
                <ul className="list-disc pl-6 space-y-4">
                  <li>FixPathCredit is a credit services organization as defined under the Credit Repair Organizations Act (CROA).</li>
                  <li>We do not guarantee results. No credit repair company legally can.</li>
                  <li>You have the right to cancel services at any time without penalty.</li>
                  <li>This website provides general information. It does not constitute legal advice.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Privacy Policy Section */}
        <motion.section
          id="privacy"
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
                    Privacy Policy
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

              <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-lg">
                <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">How We Handle Your Information</h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>We do not sell, rent, or share your personal information.</li>
                  <li>Your credit reports are linked through a secure monitoring service that you control.</li>
                  <li>We only access the data you authorize for the purpose of providing our services.</li>
                </ul>
                <h3 className="text-2xl font-bold text-[#1F2E5C] mt-10 mb-4">What Information We Collect</h3>
                <ul className="list-disc pl-6 space-y-2 text-base">
                  <li>Personal information you provide (such as name, address, date of birth, Social Security Number, phone, and email).</li>
                  <li>Credit report data and related financial information, only as authorized by you.</li>
                  <li>Information necessary to provide and improve our services, comply with legal obligations, and prevent fraud.</li>
                </ul>
                <h3 className="text-2xl font-bold text-[#1F2E5C] mt-10 mb-4">How We Protect Your Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-base">
                  <li>We use industry-standard security measures, including SSL/TLS encryption, secure servers, and regular audits.</li>
                  <li>Access to your data is strictly limited to authorized personnel for service delivery only.</li>
                  <li>We maintain administrative, technical, and physical safeguards to protect your information.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Compliance Notice Section */}
        <motion.section
          id="compliance"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
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
                    Compliance Notice
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
              <div className="space-y-8 text-gray-700 text-lg">
                <ul className="list-disc pl-6 space-y-4">
                  <li>Our services comply with the Fair Credit Reporting Act (FCRA), Credit Repair Organizations Act (CROA), Gramm-Leach-Bliley Act (GLBA), Metro 2, and all other applicable federal and state laws.</li>
                  <li>You are entitled to dispute any inaccurate, outdated, or unverifiable information on your credit reports at no cost by contacting the credit bureaus directly.</li>
                  <li>We are committed to transparency, consumer rights, and the highest standards of data protection and legal compliance.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Regulatory Compliance Section */}
        <motion.section
          id="regulatory"
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
                    Regulatory Compliance
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
                {/* Compliance Commitment */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-[#256D2A] mb-4">
                      Our Compliance Commitment
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      FixPathCredit maintains full compliance with all applicable U.S. federal and state laws governing credit repair services, data protection, and consumer rights.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      Legal Framework
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: "FCRA", desc: "Fair Credit Reporting Act" },
                        { title: "CROA", desc: "Credit Repair Organizations Act" },
                        { title: "GLBA", desc: "Gramm-Leach-Bliley Act" },
                        { title: "Metro 2", desc: "Credit Reporting Standards" },
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

                {/* Consumer Rights */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">
                      Your Consumer Rights
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">Right to dispute inaccurate information on your credit reports</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">Right to cancel services at any time without penalty</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">Right to access and control your personal information</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">Right to file complaints with regulatory agencies</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#256D2A] to-[#4CAF50] rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">
                      Regulatory Agencies
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>• Consumer Financial Protection Bureau (CFPB)</div>
                      <div>• Federal Trade Commission (FTC)</div>
                      <div>• State Attorney General Offices</div>
                      <div>• Credit Reporting Agencies</div>
                    </div>
                    <div className="mt-4 text-sm bg-white/20 rounded-lg p-3">
                      <strong>Response Time:</strong> We respond to all inquiries within 30 days as required by law
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certifications & Standards Section */}
        <motion.section
          id="certifications"
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
                    Certifications & Standards
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
                    title: "CFPB",
                    desc: "Consumer Financial Protection Bureau compliance",
                    color: "from-[#1F2E5C] to-[#3C4A75]",
                  },
                  {
                    title: "FTC",
                    desc: "Federal Trade Commission standards",
                    color: "from-[#256D2A] to-[#4CAF50]",
                  },
                  {
                    title: "SOC 2",
                    desc: "Service Organization Control certification",
                    color: "from-[#D86C1F] to-[#E1893D]",
                  },
                  {
                    title: "PCI DSS",
                    desc: "Payment Card Industry standards",
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
                    cert: "SSL/TLS",
                    desc: "Advanced encryption for data protection",
                    icon: "lock",
                    color: "bg-[#4CAF50]",
                  },
                  {
                    cert: "Annual Audit",
                    desc: "Independent process auditing",
                    icon: "clipboard",
                    color: "bg-[#D86C1F]",
                  },
                  {
                    cert: "Data Encryption",
                    desc: "End-to-end data security",
                    icon: "check",
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

        {/* Contact & Consumer Rights Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
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
                    Contact & Consumer Rights
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
              <div className="space-y-8 text-gray-700 text-lg">
                <h3 className="text-2xl font-bold text-[#1F2E5C] mb-4">How to Contact Us</h3>
                <ul className="list-disc pl-6 space-y-2 text-base">
                  <li>Email: <a href="mailto:dpo@fixpathcredit.com" className="text-[#1F2E5C] underline">dpo@fixpathcredit.com</a></li>
                  <li>Phone: (11) 4000-2031</li>
                  <li>For all privacy, compliance, or service questions, you may contact our Data Protection Officer (DPO) directly.</li>
                </ul>
                <h3 className="text-2xl font-bold text-[#1F2E5C] mt-10 mb-4">Your Rights</h3>
                <ul className="list-disc pl-6 space-y-2 text-base">
                  <li>You have the right to access and review the information we hold about you.</li>
                  <li>You may request corrections to inaccurate or outdated information.</li>
                  <li>You may request deletion of your personal data, subject to legal requirements.</li>
                  <li>You have the right to receive a copy of your data in a portable format.</li>
                  <li>We will respond to all rights requests in accordance with applicable law.</li>
                </ul>
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
                Transparency & Security Assured
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Our legal compliance and commitment to protecting your data ensure you have complete security when contracting our services.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Speak with Specialist
                </motion.a>
                <motion.a
                  href="mailto:dpo@fixpathcredit.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Contact DPO
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
