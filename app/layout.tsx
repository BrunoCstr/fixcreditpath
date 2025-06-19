import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  ToastProvider as RadixToastProvider,
  ToastViewport,
} from "@/components/ui/toast";
import { Toaster } from "@/components/Toaster";
import { PasswordProtection } from "@/components/PasswordProtection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fix Path Credit - Restauração de Crédito Profissional",
  description:
    "Soluções profissionais para ajudar você a retomar o controle da sua vida financeira — de forma rápida, discreta e eficaz.",
  keywords:
    "restauração de crédito, limpeza de nome, score de crédito, consultoria financeira, Fix Path Credit",
  authors: [{ name: "Fix Path Credit" }],
  creator: "Fix Path Credit",
  publisher: "Fix Path Credit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fixpathcredit.org"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Fix Path Credit - Restauração de Crédito Profissional",
    description:
      "Soluções profissionais para ajudar você a retomar o controle da sua vida financeira — de forma rápida, discreta e eficaz.",
    url: "https://fixpathcredit.org",
    siteName: "Fix Path Credit",
    images: [
      {
        url: "/logo-social.png",
        width: 1200,
        height: 630,
        alt: "Fix Path Credit - Restauração de Crédito",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Path Credit - Restauração de Crédito Profissional",
    description:
      "Soluções profissionais para ajudar você a retomar o controle da sua vida financeira — de forma rápida, discreta e eficaz.",
    images: ["/logo-social.png"],
    creator: "@fixpathcredit",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
    apple: [{ url: "/logo-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "n9F1G9ytfdNICdRKtJ-bwOlzmaA9ft21C5tAuzt1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#1F2E5C" />
        <meta name="msapplication-TileColor" content="#1F2E5C" />
        <meta name="msapplication-TileImage" content="/logo-icon.png" />

        {/* Analytics - Only in production */}
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Plausible Analytics */}
            <Script
              defer
              data-domain="fixpathcredit.org"
              src="https://plausible.io/js/script.js"
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        {/* Google Analytics 4 - Only in production */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-XVHX9D9X9"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XVHX9D9X9', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}

        <RadixToastProvider swipeDirection="right">
          <PasswordProtection>{children}</PasswordProtection>
          <Toaster />
          <ToastViewport />
        </RadixToastProvider>
      </body>
    </html>
  );
}
