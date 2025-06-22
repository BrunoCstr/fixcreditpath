import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - Fix Path Credit | Fale com Nossos Especialistas",
  description:
    "Entre em contato com a Fix Path Credit. Telefone (11) 4000-2030, WhatsApp, email e formulário online. Atendimento personalizado para restauração de crédito.",
  keywords:
    "contato fix path credit, telefone restauração crédito, whatsapp crédito, email consulta crédito, falar especialista crédito",
  openGraph: {
    title: "Contato - Fix Path Credit",
    description:
      "Fale com nossos especialistas em restauração de crédito. Atendimento personalizado e consulta gratuita.",
    url: "https://fixpathcredit.org/contato",
    images: [
      {
        url: "/contato-social.png",
        width: 1200,
        height: 630,
        alt: "Contato Fix Path Credit - Fale Conosco",
      },
    ],
  },
  twitter: {
    title: "Contato - Fix Path Credit",
    description: "Fale com nossos especialistas em restauração de crédito.",
  },
  alternates: {
    canonical: "/contato",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
