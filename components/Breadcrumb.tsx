"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  language: "en";
}

export function Breadcrumb({ items, language }: BreadcrumbProps) {
  const homeLabel = "Home";

  return (
    <nav
      className="flex items-center space-x-2 text-sm text-gray-600 mb-4"
      aria-label="Breadcrumb navigation"
    >
      <Link
        href="/"
        className="hover:text-[#D86C1F] transition-colors duration-200"
      >
        {homeLabel}
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {index === items.length - 1 ? (
            <span className="text-[#1F2E5C] font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-[#D86C1F] transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
