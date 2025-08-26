import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-poppins" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Atendy — Atendimento automático e inteligente",
  description: "Automatize o WhatsApp do seu negócio com o Atendy. IA que responde na hora e transfere para humano quando precisa.",
  metadataBase: new URL("https://atendy.vercel.app"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Atendy — Atendimento automático e inteligente",
    description: "Bot com IA para WhatsApp: respostas imediatas e handoff para humano.",
    url: "https://atendy.vercel.app",
    siteName: "Atendy",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "pt_BR", type: "website"
  },
  twitter: { card: "summary_large_image", title: "Atendy", description: "Atendimento automático e inteligente", images: ["/og.png"] },
  other: { "theme-color": "#2563EB" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
