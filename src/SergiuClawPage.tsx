import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';
import AgentPricingCard from './components/AgentPricingCard';

export default function SergiuClawPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DaRomaniaBackButton onClick={() => navigate('/')} />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* HERO */}
        <div className="text-center space-y-6 pt-8">
          <h1 className="text-4xl md:text-6xl font-black leading-tight">SergiuClaw</h1>
          <p className="text-lg md:text-xl text-[#22c55e] font-bold max-w-2xl mx-auto">
            Orchestrează-ți agenții AI · Proiecte · Tasks · Automatizări
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['🤖 Agenți multipli', '📋 Task Management', '🔄 Rutine automate', '📊 Dashboard'].map((b) => (
              <span key={b} className="border border-[#f59e0b] rounded-full px-4 py-1.5 text-sm font-semibold text-[#f59e0b]">{b}</span>
            ))}
          </div>
          <a
            href="https://sergiuclaw.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Deschide SergiuClaw →
          </a>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '🤖', title: 'Agenți AI multipli', desc: 'Creează și gestionează echipe de agenți specializați. Fiecare agent cu rolul, personalitatea și accesul propriu.' },
            { icon: '📋', title: 'Task Management', desc: 'Asignează task-uri agenților, urmărește progresul în timp real. Workflow-uri complexe, gestionate simplu.' },
            { icon: '🔄', title: 'Rutine automate', desc: 'Automatizări programate care rulează fără intervenție umană. Cron jobs, triggers, pipelines — totul automat.' },
            { icon: '📊', title: 'Dashboard complet', desc: 'Costuri, activitate, rapoarte într-un singur loc. Vizibilitate totală asupra întregii infrastructuri AI.' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#1a1a1a] bg-[#111111] p-6 hover:scale-[1.02] transition-transform">
              <p className="text-3xl mb-3">{f.icon}</p>
              <h3 className="text-xl font-black mb-2 text-white">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* PRICING */}
        <AgentPricingCard agentName="SergiuClaw" />

        {/* CTA */}
        <div className="rounded-2xl bg-[#22c55e] p-10 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-black">Gata să-ți orchestrezi agenții?</h2>
          <p className="text-black/70 font-bold">Cont gratuit · Setup în 5 minute · Fără card</p>
          <a
            href="https://sergiuclaw.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black hover:bg-black/80 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Creează cont gratuit →
          </a>
        </div>
      </div>
    </div>
  );
}
