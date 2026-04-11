import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';
import AgentPricingCard from './components/AgentPricingCard';

export default function SergiuClawPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DaRomaniaBackButton onClick={() => navigate('/')} />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* HERO */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-5 py-2 text-sm font-bold text-indigo-700">
            🤖 Powered by Paperclip AI
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Sergiu<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Claw</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Orchestrează-ți agenții AI · Proiecte · Tasks · Automatizări
          </p>
          <p className="text-slate-400 text-sm">Platforma ta privată de management AI agents</p>
          <a
            href="https://sergiuclaw.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Deschide SergiuClaw →
          </a>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: '🤖',
              title: 'Agenți AI multipli',
              desc: 'Creează și gestionează echipe de agenți specializați. Fiecare agent cu rolul, personalitatea și accesul propriu.',
              accent: 'border-indigo-200 bg-indigo-50/50',
            },
            {
              icon: '📋',
              title: 'Task Management',
              desc: 'Asignează task-uri agenților, urmărește progresul în timp real. Workflow-uri complexe, gestionate simplu.',
              accent: 'border-violet-200 bg-violet-50/50',
            },
            {
              icon: '🔄',
              title: 'Rutine automate',
              desc: 'Automatizări programate care rulează fără intervenție umană. Cron jobs, triggers, pipelines — totul automat.',
              accent: 'border-indigo-200 bg-indigo-50/50',
            },
            {
              icon: '📊',
              title: 'Dashboard complet',
              desc: 'Costuri, activitate, rapoarte într-un singur loc. Vizibilitate totală asupra întregii infrastructuri AI.',
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
        <AgentPricingCard agentName="SergiuClaw" />

        {/* CTA */}
        <div className="text-center space-y-4 pb-8">
          <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Gata să-ți orchestrezi agenții?</h2>
          <p className="text-slate-400">Cont gratuit · Setup în 5 minute · Fără card</p>
          <a
            href="https://sergiuclaw.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Creează cont gratuit →
          </a>
        </div>
      </div>
    </div>
  );
}
