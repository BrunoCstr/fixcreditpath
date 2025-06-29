"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function PageLayout({ children, title, description }: PageLayoutProps) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrolled(latest > 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Skip to main content for accessibility
  const skipToMain = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        onClick={skipToMain}
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#1F2E5C] text-white px-4 py-2 z-[100] focus:z-[110] rounded-br-md"
      >
        Skip to main content
      </a>

      <Navigation
        language="en"
        setLanguage={() => {}}
        translations={t}
        scrolled={scrolled}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-[#D86C1F] z-[60]"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "center",
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.5 }}
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <main id="main-content" className="" role="main" tabIndex={-1}>
        {children}
      </main>

      <Footer language="en" translations={t} />
    </div>
  );
}
