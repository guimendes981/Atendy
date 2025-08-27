'use client';

import Link from "next/link";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import ChatDemo from "@/components/chatDemo";

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

const whatsLink = (msg: string) => {
  const base = "https://wa.me/" + (PHONE || "");
  const text = encodeURIComponent(msg);
  return `${base}?text=${text}`;
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-radial-fade -z-10" />
        <div className="absolute inset-0 bg-brand-gradient opacity-90 -z-20" />
        <div className="container grid md:grid-cols-2 gap-12 items-center section">
          <div className="text-white">
            <div className="badge bg-white/15 text-white border border-white/25">
              Campo Mourão • PR
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-4 font-heading text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Atendimento{" "}
              <span className="underline decoration-white/40">automático</span>{" "}
              que transforma mensagens em vendas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-5 text-white/90 text-lg"
            >
              O Atendy responde o cliente na hora, organiza os dados e passa
              para um humano quando precisa. Sem complicação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href={whatsLink("Quero um piloto de 7 dias do Atendy.")}
                className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-brand hover:opacity-90"
              >
                Teste piloto (7 dias)
              </Link>
              <a
                href="#features"
                className="rounded-xl border border-white/40 text-white px-6 py-3 font-semibold hover:bg-white/10"
              >
                Ver recursos
              </a>
            </motion.div>

            <p className="mt-4 text-white/80 text-sm">
              Sem cartão. Sem contrato. Cancelamento a qualquer momento.
            </p>
          </div>

          {/* Chat demo interativa */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <ChatDemo />
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            Recursos que importam
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Atendimento 24/7",
                desc: "Seu cliente sempre atendido, mesmo fora do horário.",
              },
              {
                title: "IA na prática",
                desc: "Respostas naturais para as dúvidas mais comuns.",
              },
              {
                title: "Handoff simplificado",
                desc: "Com um clique, transfere para um humano.",
              },
              {
                title: "Captura de dados",
                desc: "Nome, telefone e assunto organizados em planilha.",
              },
              {
                title: "Scripts prontos",
                desc: "Fluxos prontos para loja, salão, pizzaria e consultórios.",
              },
              {
                title: "Relatórios mensais",
                desc: "Volume de mensagens, horários e assuntos mais comuns.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card"
              >
                <div className="font-bold text-lg">{f.title}</div>
                <p className="text-slate-600 mt-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-slate-50 section">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Entenda seu negócio",
              desc: "Você escolhe um template e enviamos as perguntas certas.",
            },
            {
              step: "02",
              title: "Ative o WhatsApp",
              desc: "Conectamos seu número ao Atendy e configuramos em minutos.",
            },
            {
              step: "03",
              title: "Vendas no piloto",
              desc: "O bot responde na hora; se precisar, chama um humano.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="card"
            >
              <div className="text-brand.blue font-heading text-2xl">
                {s.step}
              </div>
              <div className="mt-2 font-bold text-lg">{s.title}</div>
              <p className="text-slate-600 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            Planos simples
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              {
                name: "Start",
                price: "R$ 49/mês",
                features: ["Fluxo básico", "IA para FAQs", "Transferência p/ humano"],
              },
              {
                name: "Pro",
                price: "R$ 99/mês",
                features: ["Fluxos personalizados", "Cadastro de produtos", "Relatórios mensais"],
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`card ${i === 1 ? "ring-2 ring-brand.blue" : ""}`}
              >
                <div className="text-sm uppercase tracking-wide text-slate-500">
                  {p.name}
                </div>
                <div className="mt-3 text-3xl font-extrabold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.features.map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
                <a
                  href={whatsLink(`Quero o plano ${p.name} do Atendy`)}
                  className="mt-6 inline-block w-full text-center px-4 py-3 rounded-xl bg-brand.blue text-white font-semibold hover:opacity-90"
                >
                  Assinar agora
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 section">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            Dúvidas frequentes
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "Preciso de cartão no teste?",
                a: "Não. O piloto de 7 dias é 100% gratuito.",
              },
              {
                q: "Funciona só no WhatsApp?",
                a: "Começamos pelo WhatsApp. Em breve: Instagram e Webchat.",
              },
              {
                q: "Posso falar com humano?",
                a: "Sim. A qualquer momento o cliente pode pedir um atendente.",
              },
            ].map((f, i) => (
              <motion.details
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
              >
                <summary className="font-semibold cursor-pointer">
                  {f.q}
                </summary>
                <p className="text-slate-600 mt-2">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="container text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl font-extrabold"
          >
            Pronto para não perder mais nenhuma venda?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 mt-2"
          >
            Ative o Atendy hoje e veja o impacto já na primeira semana.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href={whatsLink("Quero ativar o Atendy hoje!")}
            className="mt-6 inline-block rounded-xl bg-brand.blue text-white px-6 py-3 font-semibold shadow-brand hover:opacity-90"
          >
            Falar no WhatsApp
          </motion.a>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.svg" alt="Atendy" className="h-7 w-7" />
            <span className="font-semibold">
              Atendy © {new Date().getFullYear()}
            </span>
          </div>
          <div className="text-slate-500 text-sm">
            Feito em Campo Mourão — PR
          </div>
        </div>
      </footer>
    </main>
  );
}
