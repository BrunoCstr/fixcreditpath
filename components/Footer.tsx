"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  language: "en";
  translations: any;
}

export function Footer({ language, translations }: FooterProps) {
  const t = translations;

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/sobre", label: t.nav.about },
    { href: "/servicos", label: t.nav.services },
    { href: "/precos", label: t.nav.pricing },
  ];

  const supportLinks = [
    { href: "/faq", label: t.nav.faq },
    { href: "/contato", label: t.nav.contact },
    { href: "/legal", label: t.nav.legal },
  ];

  return (
    <footer className="bg-[#1F2E5C] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/assets/d4b41554fe4347138a3fcb4a4dd20041/fixpathcredit_main-bd19db?format=webp&width=800"
                alt="Fix Path Credit Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-lg">Fix Path Credit</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional credit restoration solutions. Transparency, dedication, and proven results.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-[#3C4A75] rounded-full flex items-center justify-center hover:bg-[#D86C1F] transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-[#D86C1F] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-[#D86C1F] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D86C1F]" />
                <span className="text-gray-300 text-sm">
                support@fixpathcredit.org
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D86C1F]" />
                <span className="text-gray-300 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#D86C1F]" />
                <span className="text-gray-300 text-sm">
                  Online service throughout the US
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-[#3C4A75]" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-300 text-sm">
            © {currentYear} Fix Path Credit. {t.footer.rights}
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/legal"
              className="text-gray-300 hover:text-[#D86C1F] transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/legal"
              className="text-gray-300 hover:text-[#D86C1F] transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
