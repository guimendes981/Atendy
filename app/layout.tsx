import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atendy — Atendimento automático e inteligente",
  description: "Automatize o WhatsApp do seu negócio com o Atendy. Bot com IA + transferência para humano.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50">
        {children}
      </body>
    </html>
  );
}