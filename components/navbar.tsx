import Link from "next/link";

const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;

const whatsLink = (msg: string) => {
  const base = "https://wa.me/" + (PHONE || "");
  const text = encodeURIComponent(msg);
  return `${base}?text=${text}`;
};

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="container px-4 py-3">
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-soft px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.svg" className="h-8 w-8 rounded-xl shadow-brand" alt="Atendy" />
            <span className="font-heading font-extrabold text-lg">Atendy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#features" className="hover:text-slate-900">Recursos</a>
            <a href="#handoff" className="hover:text-slate-900">Humano</a>
            <a href="#pricing" className="hover:text-slate-900">Planos</a>
            <a href="#faq" className="hover:text-slate-900">Dúvidas</a>
          </nav>
          <Link href={whatsLink("Oi! Quero automatizar meu WhatsApp com o Atendy.")}
            className="hidden sm:inline-flex rounded-xl bg-brand.blue text-white px-4 py-2 font-semibold shadow-brand hover:opacity-90">
            Falar no WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
