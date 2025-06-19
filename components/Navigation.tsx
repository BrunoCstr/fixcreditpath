"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
  translations: any;
  scrolled?: boolean;
}

export function Navigation({
  language,
  setLanguage,
  translations,
  scrolled = false,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const t = translations[language];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close mobile menu on escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-language-selector]")) {
        setOpenDropdown(null);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    if (openDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, openDropdown]);

  const isHomePage = pathname === "/";

  // Navigation items - sempre apontam para páginas separadas
  const navItems = [
    {
      href: "/",
      label: t.nav.home,
      type: "page",
    },
    {
      href: "/sobre",
      label: t.nav.about,
      type: "page",
    },
    {
      href: "/servicos",
      label: t.nav.services,
      type: "page",
    },
    {
      href: "/precos",
      label: t.nav.pricing || "Preços",
      type: "page",
    },
    {
      href: "/faq",
      label: t.nav.faq,
      type: "page",
    },
    {
      href: "/contato",
      label: t.nav.contact,
      type: "page",
    },
    {
      href: "/legal",
      label: t.nav.legal || "Legal",
      type: "page",
    },
  ];

  const handleNavClick = (href: string, type: string) => {
    if (type === "scroll" && href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 rounded-lg"
          >
            <motion.img
              src="/logo-main.svg"
              alt="Fix Path Credit"
              className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.type)}
                  className={`text-gray-700 hover:text-[#D86C1F] transition-colors duration-200 font-medium text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 rounded-md px-2 py-1 relative ${
                    pathname === item.href ? "text-[#D86C1F]" : ""
                  }`}
                >
                  {item.label}
                </Link>
                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-2 h-0.5 bg-[#D86C1F] transition-all duration-300 ease-out ${
                    pathname === item.href
                      ? "w-[calc(100%-16px)]"
                      : "w-0 group-hover:w-[calc(100%-16px)]"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Selector */}
            <div className="relative" data-language-selector>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "language" ? null : "language",
                  )
                }
                className={`flex items-center space-x-1 sm:space-x-2 border-gray-300 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm transition-all duration-200 bg-white ${
                  openDropdown === "language"
                    ? "border-[#D86C1F] text-[#D86C1F] bg-[#D86C1F]/5"
                    : "text-gray-700 hover:border-[#D86C1F] hover:text-[#D86C1F] hover:bg-gray-50"
                }`}
                aria-label="Select language"
              >
                <Globe size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="uppercase font-medium flex-shrink-0">
                  {language}
                </span>
                <ChevronDown
                  size={12}
                  className={`sm:w-3.5 sm:h-3.5 flex-shrink-0 transition-transform duration-200 ${
                    openDropdown === "language" ? "rotate-180" : ""
                  }`}
                />
              </Button>

              <AnimatePresence>
                {openDropdown === "language" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-36 sm:w-40 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        setLanguage("pt");
                        localStorage.setItem("fixpath-language", "pt");
                        setOpenDropdown(null);
                      }}
                      className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-sm hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50 ${
                        language === "pt"
                          ? "bg-[#D86C1F]/10 text-[#D86C1F] font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      🇧🇷 Português
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        localStorage.setItem("fixpath-language", "en");
                        setOpenDropdown(null);
                      }}
                      className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-sm hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50 ${
                        language === "en"
                          ? "bg-[#D86C1F]/10 text-[#D86C1F] font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      🇺🇸 English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 sm:p-2 hover:bg-gray-100 focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X size={18} className="sm:w-5 sm:h-5" />
                ) : (
                  <Menu size={18} className="sm:w-5 sm:h-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleNavClick(item.href, item.type)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 ${
                        pathname === item.href
                          ? "bg-[#D86C1F]/10 text-[#D86C1F] shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#D86C1F]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  className="pt-4 mt-4 border-t border-gray-200"
                >
                  <Link
                    href="/contato"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-[#D86C1F] to-[#E17A2F] text-white text-center h-14 flex items-center justify-center px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 cursor-pointer"
                  >
                    {t.nav.contact || "Contato"}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
