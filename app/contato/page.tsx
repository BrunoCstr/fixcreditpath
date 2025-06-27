"use client";

import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { SimpleContactForm } from "@/components/SimpleContactForm";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/i18n/translations";

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

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Professional and Compliant */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
        >
          {/* Enhanced Background with gradient and floating elements */}
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
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                {/* Professional Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#256D2A] text-white px-6 py-3 rounded-full shadow-lg">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-white rounded-full"
                    ></motion.div>
                    <span className="font-semibold text-sm">
                      FCRA Compliant Services
                    </span>
                  </div>
                </motion.div>

                {/* Main Title - Professional and Clear */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F2E5C] leading-tight mb-6"
                >
                  Contact FixPath Credit
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-[#D86C1F] font-medium mt-4">
                    Professional Credit Repair Consultation
                  </span>
                </motion.h1>

                {/* Professional Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="max-w-4xl mx-auto mb-12"
                >
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
                    Get professional guidance on credit repair options and understand your rights under the Fair Credit Reporting Act (FCRA).
                  </p>

                  {/* Professional Stats */}
                  <div className="flex flex-wrap justify-center gap-8 text-center">
                    {[
                      { icon: "⚖️", text: "FCRA Compliant" },
                      { icon: "📋", text: "Free Consultation" },
                      { icon: "🔒", text: "Secure & Confidential" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-8 h-8 ${
                            index === 0
                              ? "bg-[#4CAF50]"
                              : index === 1
                              ? "bg-[#D86C1F]"
                              : "bg-[#3C4A75]"
                          } rounded-full flex items-center justify-center`}
                        >
                          <span className="text-white text-sm font-bold">
                            {stat.icon}
                          </span>
                        </div>
                        <span className="text-gray-700 font-medium">
                          {stat.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Professional CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="space-y-4"
                >
                  <motion.a
                    href="#contato"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#E1893D] hover:to-[#D86C1F] text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                  >
                    <span>Schedule Free Consultation</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>

                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    No obligation consultation to discuss your credit situation
                    <span className="inline-block ml-1">👇</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Methods Section - Professional and Compliant */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="min-h-screen relative overflow-hidden flex items-center"
          style={{
            background: `linear-gradient(135deg, #1F2E5C 0%, #2C4B73 25%, #1F2E5C 50%, #1F2E5C 70%, #2A3F66 85%, #1F2E5C 100%)`,
          }}
        >
          {/* Enhanced decorative overlay patterns */}
          <div className="absolute inset-0">
            {/* Multiple gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/10 via-transparent to-[#3C4A75]/8" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F2E5C]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#256D2A]/5 via-transparent to-[#D86C1F]/5" />

            {/* Enhanced floating geometric elements */}
            {[
              {
                id: 0,
                size: 60,
                x: 10,
                y: 15,
                delay: 0.5,
                color: "from-[#D86C1F]/30 to-[#D86C1F]/10",
              },
              {
                id: 1,
                size: 45,
                x: 85,
                y: 20,
                delay: 1.2,
                color: "from-[#3C4A75]/20 to-[#2C4B73]/10",
              },
              {
                id: 2,
                size: 55,
                x: 20,
                y: 80,
                delay: 0.8,
                color: "from-[#D86C1F]/20 to-[#1F2E5C]/10",
              },
              {
                id: 3,
                size: 40,
                x: 90,
                y: 70,
                delay: 2.1,
                color: "from-[#2C4B73]/15 to-[#1F2E5C]/10",
              },
              {
                id: 4,
                size: 35,
                x: 50,
                y: 10,
                delay: 1.8,
                color: "from-[#4CAF50]/20 to-[#256D2A]/10",
              },
              {
                id: 5,
                size: 48,
                x: 75,
                y: 85,
                delay: 2.5,
                color: "from-[#D86C1F]/25 to-[#E1893D]/10",
              },
            ].map((element) => (
              <motion.div
                key={element.id}
                className="absolute"
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
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 12 + element.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: element.delay,
                }}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${element.color} rounded-2xl transform rotate-45 shadow-lg`}
                />
              </motion.div>
            ))}

            {/* Additional decorative elements */}
            <div className="absolute top-32 left-32 w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse opacity-60" />
            <div className="absolute top-60 right-48 w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse delay-1000 opacity-40" />
            <div className="absolute bottom-40 left-64 w-4 h-4 bg-[#256D2A] rounded-full animate-pulse delay-500 opacity-50" />
          </div>

          <div className="container mx-auto px-4 relative z-30 w-full">
            <div className="max-w-7xl mx-auto py-20">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "6rem" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-1 bg-[#D86C1F] mx-auto mb-6"
                  />
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Reach out to our team for professional credit repair consultation and support.
                  </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                  {/* Phone */}
                  <motion.a
                    href="tel:+1-800-123-4567"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:border-[#D86C1F]/50 transition-all duration-300 group"
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
                    <h3 className="text-xl font-bold text-white mb-3">
                      Phone
                    </h3>
                    <p className="text-2xl font-bold text-[#D86C1F] mb-2">
                      1-800-123-4567
                    </p>
                    <p className="text-sm text-gray-300">
                      Mon-Fri: 9AM-6PM EST
                    </p>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:info@fixpathcredit.com"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:border-[#3C4A75]/50 transition-all duration-300 group"
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Email
                    </h3>
                    <p className="text-lg font-bold text-[#D86C1F] mb-2">
                      info@fixpathcredit.com
                    </p>
                    <p className="text-sm text-gray-300">
                      Response within 24 hours
                    </p>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:border-[#4CAF50]/50 transition-all duration-300 group"
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
                    <h3 className="text-xl font-bold text-white mb-3">
                      WhatsApp
                    </h3>
                    <p className="text-lg font-bold text-[#4CAF50] mb-2">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-gray-300">
                      Quick response
                    </p>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Consultation Form Section */}
        <motion.section
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2E5C] mb-6">
                  Request Your Free Consultation
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6"
                />
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Complete the form below to schedule your free initial consultation. Our team will contact you within 24 hours to discuss your credit situation and available options.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                >
                  <SimpleContactForm />
                </motion.div>

                {/* Consultation Information */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F4ebede5196e64a5d966bd3e1cbb33e66%2F3764069ee1124d83a25b8e6a1c67ea29?format=webp&width=800"
                      alt="Professional credit consultation with FixPath Credit specialist"
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
                      <div className="text-2xl font-bold">Free</div>
                      <div className="text-sm">Initial Consultation</div>
                    </motion.div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-[#1F2E5C] mb-4">
                      What to expect in your free consultation:
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Review of your current credit situation",
                        "Explanation of your rights under FCRA",
                        "Discussion of potential credit repair strategies",
                        "Overview of our services and process",
                        "Answer to your questions about credit repair",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Legal Disclaimers */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-[#1F2E5C] mb-3">
                      Important Information:
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• Credit repair services may not be suitable for everyone</p>
                      <p>• Results may vary and are not guaranteed</p>
                      <p>• You have the right to dispute inaccurate information directly with credit bureaus</p>
                      <p>• We comply with all applicable federal and state laws</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section - Professional and Compliant */}
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
                Take the First Step Toward Better Credit
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Contact us today to learn about your credit repair options and understand your rights under federal law.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="tel:+1-800-123-4567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Call Now
                </motion.a>
                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-300"
                >
                  Schedule Consultation
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
}
