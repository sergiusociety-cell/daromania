import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';
import AgentPricingCard from './components/AgentPricingCard';

export default function HermesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DaRomaniaBackButton onClick={() => navigate('/')} />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* HERO */}
        <div className="text-center space-y-6 pt-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight">HermesClaw</h1>
          <p className="text-lg md:text-xl text-[#22c55e] font-bold max-w-2xl mx-auto">
            Agentul AI Full-Stack · Kimi K2 Thinking · 28 tools · 74 skills
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🧠 Kimi K2 Thinking', '🔧 28 Tools', '📚 74 Skills', '📱 Telegram conectat'].map((b) => (
              <span key={b} className="border border-[#f59e0b] rounded-full px-4 py-1.5 text-sm font-semibold text-[#f59e0b]">{b}</span>
            ))}
          </div>
          <a
            href="https://hermes.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Deschide HermesClaw →
          </a>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '🧠', title: 'Kimi K2 Thinking', desc: 'Model de raționament avansat, rezolvă probleme complexe pas cu pas cu acuratețe maximă.' },
            { icon: '🔧', title: '28 Tools active', desc: 'Browser, cod, fișiere, web search, imagine generare și multe altele — toate disponibile instant.' },
            { icon: '📚', title: '74 Skills specializate', desc: 'GitHub, research, DevOps, data science, social media și altele — gata de utilizare.' },
            { icon: '📱', title: 'Telegram Gateway', desc: 'Trimite task-uri din Telegram, Hermes execută și livrează rezultate — oriunde, oricând.' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#1a1a1a] bg-[#111111] p-6 hover:scale-[1.02] transition-transform">
              <p className="text-3xl mb-3">{f.icon}</p>
              <h3 className="text-xl font-black mb-2 text-white">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black text-center text-white">Cum funcționează?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Trimite un task', desc: 'Pe Telegram sau direct pe hermes.daromania.online' },
              { step: '2', title: 'HermesClaw execută', desc: 'Analizează, folosește tool-urile necesare și lucrează autonom' },
              { step: '3', title: 'Primești rezultatul', desc: 'Cod, fișiere, rapoarte, analize — totul complet' },
            ].map((s) => (
              <div key={s.step} className="text-center space-y-3 p-6 rounded-2xl border border-[#1a1a1a] bg-[#111111]">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#22c55e] text-black font-black text-lg">
                  {s.step}
                </div>
                <h3 className="text-lg font-black text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <AgentPricingCard agentName="HermesClaw" />

        {/* CTA */}
        <div className="rounded-2xl bg-[#22c55e] p-10 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-black">Full-stack AI, gata de acțiune</h2>
          <p className="text-black/70 font-bold">28 tools · 74 skills · Telegram · Zero config</p>
          <a
            href="https://hermes.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black hover:bg-black/80 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Pornește HermesClaw →
          </a>
        </div>
      </div>
    </div>
  );
}
