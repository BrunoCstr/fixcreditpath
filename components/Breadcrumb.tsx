"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  language: "pt" | "en";
}

export function Breadcrumb({ items, language }: BreadcrumbProps) {
  const homeLabel = language === "pt" ? "Início" : "Home";

  return (
    <nav
      aria-label={
        language === "pt" ? "Navegação estrutural" : "Breadcrumb navigation"
      }
      className="py-4 bg-gray-50 border-b border-gray-200"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home link */}
          <li>
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-[#D86C1F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 rounded-md px-1 py-1"
            >
              <Home className="w-4 h-4 mr-1" />
              <span>{homeLabel}</span>
            </Link>
          </li>

          {/* Breadcrumb items */}
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight
                className="w-4 h-4 text-gray-400 mx-2"
                aria-hidden="true"
              />
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-[#D86C1F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D86C1F] focus:ring-offset-2 rounded-md px-1 py-1"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
