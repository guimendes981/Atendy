import Link from "next/link";

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

const whatsLink = (msg: string) => {
  const base = "https://wa.me/" + (PHONE || "");
  const text = encodeURIComponent(msg);
  return `${base}?text=${text}`;
};

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-100" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <header className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <img src="/logo-mark.svg" alt="Atendy" className="h-9 w-9 brand-glow rounded-xl" />
              <span className="font-bold text-2xl">Atendy</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="hover:opacity-90">Recursos</a>
              <a href="#pricing" className="hover:opacity-90">Planos</a>
              <a href="#faq" className="hover:opacity-90">Dúvidas</a>
            </nav>
            <Link
              href={whatsLink("Oi! Quero automatizar meu WhatsApp com o Atendy.")}
              className="bg-white text-slate-900 px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition brand-glow"
            >
              Falar no WhatsApp
            </Link>
          </header>
          <div className="mt-16 grid md:grid-cols-2 items-center gap-10">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Atendimento automático que <span className="underline decoration-white/40">não perde vendas</span>.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/90">
                Bot com IA para WhatsApp. Responde na hora, coleta dados e transfere para um humano quando precisa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}