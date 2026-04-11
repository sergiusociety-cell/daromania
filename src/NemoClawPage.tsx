import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';
import AgentPricingCard from './components/AgentPricingCard';

export default function NemoClawPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DaRomaniaBackButton onClick={() => navigate('/')} />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* HERO */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-5 py-2 text-sm font-bold text-indigo-700">
            ⚡ Powered by NVIDIA NemoClaw
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Nemo<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Claw</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Agentul tău AI în sandbox securizat
          </p>
          <p className="text-slate-400 text-sm">Powered by NVIDIA NemoClaw · GPT-5.4 · Brave Search · Telegram</p>
          <a
            href="https://nemoclaw.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Conectează-te →
          </a>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: '🧠',
              title: 'GPT-5.4 Cloud',
              desc: 'Inference rapid fără GPU local. Acces instant la cel mai puternic model AI disponibil, direct din cloud.',
              accent: 'border-indigo-200 bg-indigo-50/50',
            },
            {
              icon: '🔍',
              title: 'Brave Web Search',
              desc: 'Acces internet în timp real. Agentul tău caută, citește și sintetizează informații live de pe web.',
              accent: 'border-violet-200 bg-violet-50/50',
            },
            {
              icon: '📱',
              title: 'Telegram Bridge',
              desc: 'Controlează agentul direct din Telegram. Trimite comenzi, primește rezultate — oriunde, oricând.',
              accent: 'border-indigo-200 bg-indigo-50/50',
            },
            {
              icon: '🔒',
              title: 'Sandbox izolat',
              desc: 'Landlock + seccomp + netns, complet securizat. Agentul rulează izolat — datele tale sunt protejate 100%.',
              accent: 'border-violet-200 bg-violet-50/50',
            },
          ].map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl border p-6 ${f.accent} hover:scale-[1.02] transition-transform`}
            >
              <p className="text-3xl mb-3">{f.icon}</p>
              <h3 className="text-xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* PRICING */}
        <AgentPricingCard agentName="NemoClaw" />

        {/* CTA */}
        <div className="text-center space-y-4 pb-8">
          <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Sandbox AI securizat, gata de acțiune</h2>
          <p className="text-slate-400">Zero config · Securitate maximă · Start instant</p>
          <a
            href="https://nemoclaw.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Începe acum →
          </a>
        </div>
      </div>
    </div>
  );
}
