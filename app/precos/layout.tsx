import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços e Planos - Fix Path Credit | Restauração de Crédito",
  description:
    "Conheça nossos planos de restauração de crédito: Básico (R$ 297), Profissional (R$ 697/mês) e Premium (R$ 1.197/mês). Sem taxas escondidas.",
  keywords:
    "preços restauração crédito, planos fix path credit, quanto custa reparar crédito, valores serviços crédito, planos sem taxa escondida",
  openGraph: {
    title: "Preços e Planos - Fix Path Credit",
    description:
      "Planos transparentes para restauração de crédito. A partir de R$ 297. Garantia de satisfação de 30 dias.",
    url: "https://fixpathcredit.org/precos",
    images: [
      {
        url: "/precos-social.png",
        width: 1200,
        height: 630,
        alt: "Preços Fix Path Credit - Planos Transparentes",
      },
    ],
  },
  twitter: {
    title: "Preços e Planos - Fix Path Credit",
    description:
      "Planos transparentes para restauração de crédito a partir de R$ 297.",
  },
  alternates: {
    canonical: "/precos",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
