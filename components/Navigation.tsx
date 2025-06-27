"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  language: "en";
  setLanguage: (lang: "en") => void;
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
  const t = translations;

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

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
      label: t.nav.pricing || "Pricing",
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

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden border-gray-300 px-3 py-2 text-sm transition-all duration-200 bg-white text-gray-700 hover:border-[#D86C1F] hover:text-[#D86C1F] hover:bg-gray-50"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                    className="block w-full bg-gradient-to-r from-[#D86C1F] to-[#E17A2F] text-white text-center h-12 flex items-center justify-center px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 cursor-pointer"
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
