'use client';

import Link from "next/link";
import Navbar from "@/components/navbar";
import { useState } from "react";

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

const whatsLink = (msg: string) => {
  const base = "https://wa.me/" + (PHONE || "");
  const text = encodeURIComponent(msg);
  return `${base}?text=${text}`;
};

export default function Page() {
  const [yearly, setYearly] = useState(true);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-radial-fade -z-10" />
        <div className="absolute inset-0 bg-brand-gradient opacity-90 -z-20" />
        <div className="container grid md:grid-cols-2 gap-12 items-center section">
          <div className="text-white">
            <div className="badge bg-white/15 text-white border border-white/25">Campo Mourão • PR</div>
            <h1 className="mt-4 font-heading text-5xl md:text-6xl font-extrabold leading-tight">
              Atendimento <span className="underline decoration-white/40">automático</span> que transforma mensagens em vendas.
            </h1>
            <p className="mt-5 text-white/90 text-lg">
              O Atendy responde o cliente na hora, organiza os dados e passa para um humano quando precisa. Sem complicação.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={whatsLink("Quero um piloto de 7 dias do Atendy.")}
                className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-brand hover:opacity-90">
                Teste piloto (7 dias)
              </Link>
              <a href="#features"
                className="rounded-xl border border-white/40 text-white px-6 py-3 font-semibold hover:bg-white/10">
                Ver recursos
              </a>
            </div>
            <p className="mt-4 text-white/80 text-sm">Sem cartão. Sem contrato. Cancelamento a qualquer momento.</p>
          </div>

          {/* Chat mockup */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-black/10 blur-3xl" />
            <div className="glass rounded-2xl p-1 shadow-brand">
              <div className="rounded-2xl bg-white p-5 sm:p-6 w-full max-w-md">
                <div className="flex items-center gap-3">
                  <img src="/logo-mark.svg" alt="Atendy" className="h-8 w-8 rounded-md" />
                  <div className="font-semibold">Atendy • Bot</div>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-2xl bg-slate-100 px-4 py-3 w-fit">Oi! Como posso ajudar?</div>
                  <div className="rounded-2xl bg-brand.blue text-white px-4 py-3 w-fit ml-auto">Quero comprar</div>
                  <div className="rounded-2xl bg-slate-100 px-4 py-3 w-fit">
                    Legal! Me diga seu nome e o que procura 👇
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <button className="px-3 py-2 rounded-xl border text-slate-700 hover:bg-slate-50">Produtos</button>
                  <button className="px-3 py-2 rounded-xl border text-slate-700 hover:bg-slate-50">Horários</button>
                  <button className="px-3 py-2 rounded-xl border text-slate-700 hover:bg-slate-50">Falar com humano</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">Recursos que importam</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Atendimento 24/7", desc: "Seu cliente sempre atendido, mesmo fora do horário." },
              { title: "IA na prática", desc: "Respostas naturais para as dúvidas mais comuns." },
              { title: "Handoff simplificado", desc: "Com um clique, transfere para um humano." },
              { title: "Captura de dados", desc: "Nome, telefone e assunto organizados em planilha." },
              { title: "Scripts prontos", desc: "Fluxos prontos para loja, salão, pizzaria e consultórios." },
              { title: "Relatórios semanais", desc: "Volume de mensagens, horários e assuntos mais comuns." }
            ].map((f) => (
              <div key={f.title} className="card">
                <div className="font-bold text-lg">{f.title}</div>
                <p className="text-slate-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HANDOFF */}
      <section id="handoff" className="bg-slate-50 section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold">Quando precisa, passa para humano.</h2>
            <p className="text-slate-600 mt-4">
              Se o cliente pedir ajuda ou a IA não tiver certeza, o Atendy abre um chamado e envia a conversa para um atendente. 
              Tudo contínuo, sem perder o histórico.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Palavras-chave que disparam o handoff</li>
              <li>• Notificação no WhatsApp do atendente</li>
              <li>• Retorno automático se o humano demorar</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-1 shadow-brand">
            <div className="rounded-2xl bg-white p-6">
              <div className="text-sm text-slate-600">Conversa #4231</div>
              <div className="mt-3 rounded-xl bg-slate-100 p-4">Cliente: “Quero negociar pelo Pix, pode ser?”</div>
              <div className="mt-3 rounded-xl bg-slate-100 p-4">Bot: “Claro! Vou chamar um atendente para concluir.”</div>
              <div className="mt-4 rounded-xl bg-brand.blue text-white p-4">Status: Aguardando atendente…</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold">Planos simples</h2>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={yearly} onChange={() => setYearly(v => !v)} />
              <span>Pagar anual (2 meses grátis)</span>
            </label>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { name: "Start", price: yearly ? "R$ 99/mês" : "R$ 119/mês", features: ["Fluxo básico", "IA para FAQs", "Transferência p/ humano"] },
              { name: "Pro", price: yearly ? "R$ 199/mês" : "R$ 229/mês", features: ["Fluxo avançado", "Cadastro de produtos", "Relatórios semanais"] },
              { name: "Loja+", price: yearly ? "R$ 299/mês" : "R$ 339/mês", features: ["Integração c/ loja", "Horários & setores", "Suporte prioritário"] },
            ].map((p, i) => (
              <div key={p.name} className={`card ${i===1 ? "ring-2 ring-brand.blue" : ""}`}>
                <div className="text-sm uppercase tracking-wide text-slate-500">{p.name}</div>
                <div className="mt-3 text-3xl font-extrabold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.features.map((t) => <li key={t}>• {t}</li>)}
                </ul>
                <a href={whatsLink(`Quero o plano ${p.name} do Atendy`)}
                   className="mt-6 inline-block w-full text-center px-4 py-3 rounded-xl bg-brand.blue text-white font-semibold hover:opacity-90">
                  Assinar agora
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 section">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">Resultados reais</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { q: "Loja de roupas", a: "Redução de 60% no tempo de resposta e +18% em conversões." },
              { q: "Pizzaria", a: "Fila organizada e pedidos mais rápidos no horário de pico." },
              { q: "Salão", a: "Agendamentos automáticos fora do expediente." },
            ].map((t) => (
              <div key={t.q} className="card">
                <div className="font-bold">{t.q}</div>
                <p className="text-slate-600 mt-2">{t.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">Dúvidas frequentes</h2>
          <div className="mt-6 space-y-4">
            {[
              { q: "Preciso de cartão no teste?", a: "Não. O piloto de 7 dias é 100% gratuito." },
              { q: "Funciona só no WhatsApp?", a: "Começamos pelo WhatsApp. Em breve: Instagram e Webchat." },
              { q: "Posso falar com humano?", a: "Sim. A qualquer momento o cliente pode pedir um atendente." },
            ].map((f) => (
              <details key={f.q} className="card">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="text-slate-600 mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="container text-center">
          <h3 className="font-heading text-3xl font-extrabold">Pronto para não perder mais nenhuma venda?</h3>
          <p className="text-slate-600 mt-2">Ative o Atendy hoje e veja o impacto já na primeira semana.</p>
          <a href={whatsLink("Quero ativar o Atendy hoje!")}
             className="mt-6 inline-block rounded-xl bg-brand.blue text-white px-6 py-3 font-semibold shadow-brand hover:opacity-90">
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.svg" alt="Atendy" className="h-7 w-7" />
            <span className="font-semibold">Atendy © {new Date().getFullYear()}</span>
          </div>
          <div className="text-slate-500 text-sm">Feito em Campo Mourão — PR</div>
        </div>
      </footer>
    </main>
  );
}
