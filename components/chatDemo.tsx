'use client';

import { useState, useRef, useEffect } from "react";

type Message = { from: "bot" | "user"; text: string };

const demoFlow: Record<string, { message: string; options: string[] }> = {
  start: {
    message: "Oi! Como posso ajudar?",
    options: ["Produtos", "Horários", "Falar com humano"],
  },
  Produtos: {
    message: "Temos promoções hoje! 🍕 Quer ver o cardápio?",
    options: ["Sim, mostrar cardápio", "Voltar ao menu"],
  },
  Horários: {
    message: "Funcionamos de segunda a sábado das 9h às 18h ⏰",
    options: ["Voltar ao menu"],
  },
  "Falar com humano": {
    message: "Um atendente foi chamado. Aguarde um instante 👩‍💼",
    options: ["Voltar ao menu"],
  },
  "Sim, mostrar cardápio": {
    message: "Pizza, salgados e bebidas. Qual deseja? 😋",
    options: ["Voltar ao menu"],
  },
  "Voltar ao menu": {
    message: "Oi! Como posso ajudar?",
    options: ["Produtos", "Horários", "Falar com humano"],
  },
};

export default function ChatDemo() {
  const [history, setHistory] = useState<Message[]>([
    { from: "bot", text: demoFlow.start.message },
  ]);
  const [options, setOptions] = useState(demoFlow.start.options);
  const [typing, setTyping] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  // rolar só dentro da caixa de chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [history, typing]);

  const handleClick = (opt: string) => {
    // mensagem do usuário
    setHistory((h) => [...h, { from: "user", text: opt }]);

    const flow = demoFlow[opt];
    if (flow) {
      setTyping(true);

      setTimeout(() => {
        // mensagem do bot após 3s
        setHistory((h) => [...h, { from: "bot", text: flow.message }]);
        setOptions(flow.options);
        setTyping(false);
      }, 3000);
    }
  };

  return (
    <div className="glass rounded-2xl p-1 shadow-brand">
      <div className="rounded-2xl bg-white p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img src="/logo-mark.svg" alt="Atendy" className="h-8 w-8 rounded-md" />
          <div className="font-semibold">Atendy • Bot</div>
        </div>

        {/* Histórico de mensagens */}
        <div
          ref={chatRef}
          className="mt-4 space-y-3 text-sm max-h-64 overflow-y-auto"
        >
          {history.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                m.from === "bot"
                  ? "bg-slate-100 text-slate-800 shadow-sm"
                  : "bg-brand.blue text ml-auto shadow"
              }`}
            >
              {m.text}
            </div>
          ))}

          {/* Animação de digitação */}
          {typing && (
            <div className="bg-slate-100 rounded-2xl px-4 py-3 w-fit shadow-sm">
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
              </div>
            </div>
          )}
        </div>

        {/* Opções de resposta */}
        <div className="mt-5 flex flex-wrap gap-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleClick(opt)}
              disabled={typing}
              className="px-3 py-2 rounded-xl border text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
