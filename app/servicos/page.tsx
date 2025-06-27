"use client";

import { motion } from "framer-motion";
import { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import CreditScoreSavingsSimulator from "@/components/credit-score-savings-simulator";

// Reusable animation variants
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

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Professional and Impactful */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          pt-36
          pb-28
          className="min-h-screen text-white relative overflow-hidden flex items-center pt-40 pb-32"
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Text */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Badge with Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-[#D86C1F] text-white px-4 py-2 rounded-lg text-sm font-bold">
                      CREDIT REPAIR PROFESSIONALS
                    </div>
                    <div className="flex items-center gap-2 text-[#1F2E5C] text-sm font-medium">
                      <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
                      <span>Experienced, certified team</span>
                    </div>
                  </motion.div>

                  {/* Main Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2E5C] leading-tight"
                  >
                    Credit Report Review & Dispute Services
                    <span className="block bg-gradient-to-r from-[#D86C1F] to-[#E1893D] bg-clip-text text-transparent mt-2">
                      Compliant, Transparent, Client-Focused
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl text-gray-600 leading-relaxed"
                  >
                    We provide credit report analysis and dispute support in accordance with the Fair Credit Reporting Act (FCRA), Credit Repair Organizations Act (CROA), and all applicable U.S. regulations. Our process is transparent, respectful, and designed to help you understand your rights and options regarding your credit profile. No guarantees of specific outcomes are made. All actions are performed with your written authorization and in compliance with federal and state law.
                  </motion.p>

                  {/* Key Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-3 gap-6"
                  >
                    {[
                      {
                        number: "90+",
                        label: "Days of Service",
                        subtext: "Typical review period",
                      },
                      {
                        number: "72h",
                        label: "Initial Review",
                        subtext: "Personalized report",
                      },
                      {
                        number: "24/7",
                        label: "Client Portal",
                        subtext: "Access to your case",
                      },
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl md:text-3xl font-bold text-[#D86C1F]">
                          {metric.number}
                        </div>
                        <div className="text-sm font-semibold text-[#1F2E5C]">
                          {metric.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.subtext}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-r from-[#D86C1F] to-[#E1893D] hover:from-[#C55A0F] hover:to-[#D86C1F] text-white px-8 py-4 rounded-2xl font-extrabold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                    >
                      {/* Enhanced Button shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      {/* Additional glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/20 to-[#E1893D]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                      <span className="relative text-white font-extrabold tracking-wide">Request a Free, No-Obligation Review</span>
                    </motion.a>
                    <motion.a
                      href="#services"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-[#1F2E5C] text-[#1F2E5C] hover:bg-[#1F2E5C] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-center"
                    >
                      View Our Services
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Right Content - Service Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  {/* Enhanced Service Cards with Unique Designs */}
                  <div className="space-y-4">
                    {/* Comprehensive Analysis - Special Design */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-gradient-to-br from-white via-blue-50/30 to-slate-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60 overflow-hidden group"
                    >
                      {/* Animated background glow */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.2, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-gradient-to-br from-[#1F2E5C]/10 to-[#3C4A75]/5 rounded-2xl"
                      />

                      {/* Floating elements */}
                      <div className="absolute top-2 right-2 w-8 h-8 bg-[#1F2E5C]/10 rounded-full animate-pulse" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 bg-[#3C4A75]/20 rounded-full animate-pulse delay-500" />

                      <div className="relative flex items-start gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#1F2E5C] to-[#3C4A75] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          {/* Pulse ring */}
                          <motion.div
                            animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-2xl border-2 border-[#1F2E5C]/30"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1F2E5C] mb-2 group-hover:text-[#3C4A75] transition-colors">
                            Credit Report Analysis
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            We review your credit reports from major bureaus to identify inaccurate, unverifiable, or outdated information, in accordance with the FCRA. You receive a clear, written summary of findings and your rights.
                          </p>
                          <div className="flex items-center gap-2 text-xs text-[#1F2E5C] font-medium">
                            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
                            Written report within 72 hours
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Legal Disputes - Special Design */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-gradient-to-br from-white via-orange-50/30 to-red-50/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60 overflow-hidden group"
                    >
                      {/* Animated background pattern */}
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0 bg-gradient-to-r from-[#D86C1F]/5 to-transparent"
                      />

                      {/* Legal symbols */}
                      <div className="absolute top-3 right-3 text-[#D86C1F]/20 text-2xl transform rotate-12">
                        ⚖️
                      </div>

                      <div className="relative flex items-start gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#D86C1F] to-[#E1893D] rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform duration-300">
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
                          {/* Legal badge */}
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              ✓
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1F2E5C] mb-2 group-hover:text-[#D86C1F] transition-colors">
                            Dispute Assistance
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            We assist you in preparing and submitting disputes for information you believe is inaccurate, incomplete, or unverifiable. All disputes are made in your name, with your authorization, and in compliance with the FCRA and CROA. No legal advice is provided.
                          </p>
                          <div className="flex items-center gap-2 text-xs text-[#D86C1F] font-medium">
                            <div className="w-2 h-2 bg-[#D86C1F] rounded-full animate-pulse" />
                            FCRA/CROA compliant process
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Active Negotiation - Special Design */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-gradient-to-br from-white via-green-50/30 to-emerald-50/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60 overflow-hidden group"
                    >
                      {/* Handshake animation background */}
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-1/2 right-4 w-12 h-12 bg-[#256D2A]/10 rounded-full"
                      />

                      {/* Success indicators */}
                      <div className="absolute top-2 right-6 flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            className="w-1 h-4 bg-[#4CAF50]/40 rounded-full"
                          />
                        ))}
                      </div>

                      <div className="relative flex items-start gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#256D2A] to-[#4CAF50] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-200 transition-all duration-300">
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
                                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                              />
                            </svg>
                          </div>
                          {/* Progress indicator */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute -top-1 -right-1 w-4 h-4 border-2 border-[#4CAF50] border-t-transparent rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1F2E5C] mb-2 group-hover:text-[#256D2A] transition-colors">
                            Creditor Communication Support
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            We can support you in communicating with creditors regarding your accounts, upon your request and with your written authorization. All communications are conducted in accordance with the GLBA and applicable privacy laws. We do not negotiate settlements or make payments on your behalf.
                          </p>
                          <div className="flex items-center gap-2 text-xs text-[#256D2A] font-medium">
                            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" />
                            Client-authorized communications
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* 24/7 Monitoring - Special Design */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60 overflow-hidden group"
                    >
                      {/* Live monitoring indicators */}
                      <div className="absolute top-2 right-2 flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 bg-[#4CAF50] rounded-full"
                        />
                        <span className="text-xs font-medium text-[#4CAF50]">
                          LIVE
                        </span>
                      </div>

                      {/* Wave animation */}
                      <motion.div
                        animate={{
                          background: [
                            "linear-gradient(90deg, transparent 0%, rgba(60, 74, 117, 0.1) 50%, transparent 100%)",
                            "linear-gradient(90deg, transparent 20%, rgba(60, 74, 117, 0.1) 70%, transparent 100%)",
                            "linear-gradient(90deg, transparent 0%, rgba(60, 74, 117, 0.1) 50%, transparent 100%)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 rounded-2xl"
                      />

                      <div className="relative flex items-start gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#3C4A75] to-[#1F2E5C] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
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
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          {/* Clock indicator */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-[#3C4A75] flex items-center justify-center"
                          >
                            <div className="w-1 h-1 bg-[#3C4A75] rounded-full" />
                          </motion.div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1F2E5C] mb-2 group-hover:text-[#3C4A75] transition-colors">
                            Progress Monitoring
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            You have 24/7 access to your case status and updates through our secure client portal. We do not provide credit monitoring services, but keep you informed of all actions taken on your behalf.
                          </p>
                          <div className="flex items-center gap-2 text-xs text-[#3C4A75] font-medium">
                            <motion.div
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-2 h-2 bg-[#4CAF50] rounded-full"
                            />
                            Secure client access
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Trust Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="bg-gradient-to-r from-[#4CAF50] to-[#256D2A] rounded-2xl p-6 text-white text-center"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-bold">
                        Compliant with Federal Law
                      </span>
                    </div>
                    <p className="text-sm opacity-90">
                      All services provided in accordance with FCRA, CROA, and applicable regulations
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Animated Separator Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-2 bg-gradient-to-r from-[#1F2E5C] via-[#D86C1F] to-[#256D2A] origin-left"
        />

        {/* Detailed Services - Dark Background */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-[#1F2E5C]"
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Our Services
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-1 bg-[#D86C1F] mx-auto mb-6"
                />
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Professional credit report review and dispute assistance services designed to help you understand and exercise your rights under the Fair Credit Reporting Act
                </p>
              </motion.div>

              {/* Comprehensive Credit Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center mb-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-[#D86C1F] rounded-full flex items-center justify-center mr-4"
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
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white">
                        Credit Report Review
                      </h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-300 leading-relaxed"
                    >
                      We conduct a thorough review of your credit reports from the three major credit bureaus (Equifax, Experian, and TransUnion) to identify information that may be inaccurate, incomplete, or unverifiable. This review is performed in accordance with the Fair Credit Reporting Act (FCRA) and provides you with a detailed written analysis of our findings.
                    </motion.p>

                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {[
                        "Review of all three major credit bureaus",
                        "Identification of potential inaccuracies",
                        "Detailed written analysis",
                        "Explanation of your rights under FCRA",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center bg-white/10 p-3 rounded-lg shadow-sm border border-white/20 cursor-pointer hover:bg-white/20"
                        >
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-300">{item}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/assets/836e37a3bf8e47568022ee26234807f2/repair_your_credit_reclaim_your_future_2-3d86f8?format=webp&width=800"
                      alt="Professional credit report analysis and review process"
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 60, x: 60 }}
                      whileInView={{ opacity: 1, y: -6, x: -6 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute -bottom-6 -right-6 bg-[#256D2A] text-white p-6 rounded-xl shadow-lg cursor-pointer"
                    >
                      <div className="text-2xl font-bold">72h</div>
                      <div className="text-sm">Initial Review</div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Section divider */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center mb-20"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="flex space-x-2"
                >
                  {[
                    { color: "bg-[#D86C1F]" },
                    { color: "bg-[#1F2E5C]" },
                    { color: "bg-[#256D2A]" },
                  ].map((dot, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                      }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`w-3 h-3 ${dot.color} rounded-full`}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Credit Dispute Services */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1 relative"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/assets/836e37a3bf8e47568022ee26234807f2/reclaim_your_financial_future-b519c6?format=webp&width=800"
                      alt="Professional dispute assistance and credit report correction process"
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 60, x: -60 }}
                      whileInView={{ opacity: 1, y: -6, x: -6 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute -bottom-6 -left-6 bg-[#D86C1F] text-white p-6 rounded-xl shadow-lg cursor-pointer"
                    >
                      <div className="text-2xl font-bold">FCRA</div>
                      <div className="text-sm">Compliant</div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2 space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center mb-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-[#256D2A] rounded-full flex items-center justify-center mr-4"
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
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white">
                        Dispute Assistance
                      </h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-lg text-gray-300 leading-relaxed"
                    >
                      We assist you in preparing and submitting disputes for information in your credit reports that you believe is inaccurate, incomplete, or unverifiable. All disputes are submitted in your name, with your written authorization, and in strict compliance with the FCRA and Credit Repair Organizations Act (CROA). We do not provide legal advice, and no specific outcomes are guaranteed.
                    </motion.p>

                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 gap-4"
                    >
                      {[
                        "FCRA-compliant dispute process",
                        "Written authorization required",
                        "Multiple dispute rounds as needed",
                        "Complete documentation provided",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center bg-white/10 p-3 rounded-lg shadow-sm border border-white/20 cursor-pointer hover:bg-white/20"
                        >
                          <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                          <span className="text-sm text-gray-300">{item}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
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

        {/* Savings Simulator - Sophisticated Background */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 relative overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            {/* Grid Pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="absolute inset-0 opacity-20"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(31, 46, 92, 0.15) 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-[#1F2E5C]/10 to-[#3C4A75]/5 rounded-3xl blur-sm transform rotate-12"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 45 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 2, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-[#D86C1F]/15 to-[#E17A2F]/10 rounded-2xl blur-sm transform -rotate-12"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 50 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-24 left-20 w-20 h-20 bg-gradient-to-br from-[#256D2A]/10 to-[#2E7A32]/5 rounded-full blur-sm"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -50 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-16 right-24 w-28 h-28 bg-gradient-to-br from-[#3C4A75]/8 to-[#4A5A85]/5 rounded-2xl blur-sm transform rotate-45"
            />

            {/* Gradient Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#1F2E5C]/5 to-transparent rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#D86C1F]/5 to-transparent rounded-full blur-3xl"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced Header Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                {/* Decorative badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block mb-6"
                >
                  <div className="bg-gradient-to-r from-[#1F2E5C] to-[#3C4A75] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    💰 Educational Tool
                  </div>
                </motion.div>

                {/* Title with visual effect */}
                <div className="relative inline-block mb-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2E5C] relative z-10"
                  >
                    Understanding the{" "}
                    <span className="relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D86C1F] to-[#E17A2F]">
                        Financial Impact
                      </span>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D86C1F] to-[#E17A2F] rounded-full origin-left"
                      />
                    </span>
                  </motion.h2>

                  {/* Background glow effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -inset-8 bg-gradient-to-r from-[#1F2E5C]/5 via-[#D86C1F]/5 to-[#256D2A]/5 rounded-3xl blur-2xl"
                  />
                </div>

                {/* Enhanced subtitle styling */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto"
                >
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                    This educational tool helps illustrate how credit scores may affect interest rates and loan terms.{" "}
                    <strong className="text-[#1F2E5C]">
                      Individual results may vary
                    </strong>{" "}
                    based on many factors including credit history, income, and lender policies.
                  </p>
                  <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                    This calculator is for educational purposes only and does not guarantee specific loan terms or interest rates. Actual terms depend on individual circumstances and lender criteria.
                  </p>
                </motion.div>

                {/* Decorative icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex justify-center gap-6 mt-8"
                >
                  {[
                    { icon: "💳", label: "Credit Cards" },
                    { icon: "🏠", label: "Mortgages" },
                    { icon: "🚗", label: "Auto Loans" },
                    { icon: "📈", label: "Personal Loans" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-lg border border-gray-100">
                        {item.icon}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Simulator with enhanced container */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Shadow container */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E5C]/5 via-transparent to-[#D86C1F]/5 rounded-4xl blur-2xl transform scale-105" />

                <div className="relative">
                  <CreditScoreSavingsSimulator />
                </div>
              </motion.div>

              {/* Additional call-to-action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 max-w-2xl mx-auto">
                  <p className="text-gray-700 mb-4">
                    <strong>Educational information only</strong> - This tool demonstrates general credit score concepts. Individual results depend on many factors including credit history, income, debt-to-income ratio, and lender policies.
                  </p>
                  <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      For educational purposes
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      No guarantees of results
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section - Dark Blue Background */}
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
                Ready to Review Your Credit Reports?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Our team is ready to help you understand your rights under the Fair Credit Reporting Act and assist you in reviewing your credit reports for potential inaccuracies. We provide transparent, compliant services with no guarantees of specific outcomes.
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
                  className="bg-[#D86C1F] hover:bg-[#E1893D] text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Request a Free, No-Obligation Review
                </motion.a>
                <motion.a
                  href="/pricing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1F2E5C] px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                >
                  View Service Options
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  )
}
