import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';

export default function SergiuClawPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <DaRomaniaBackButton onClick={() => navigate('/')} />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* HERO */}
        <div className="text-center space-y-6 pt-8">
          <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-5 py-2 text-sm font-bold text-violet-300">
            🤖 Powered by Paperclip AI
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Sergiu<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Claw</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Orchestrează-ți agenții AI · Proiecte · Tasks · Automatizări
          </p>
          <p className="text-white/40 text-sm">Platforma ta privată de management AI agents</p>
          <a
            href="https://agents.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
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
              accent: 'border-violet-500/30 bg-violet-500/5',
            },
            {
              icon: '📋',
              title: 'Task Management',
              desc: 'Asignează task-uri agenților, urmărește progresul în timp real. Workflow-uri complexe, gestionate simplu.',
              accent: 'border-blue-500/30 bg-blue-500/5',
            },
            {
              icon: '🔄',
              title: 'Rutine automate',
              desc: 'Automatizări programate care rulează fără intervenție umană. Cron jobs, triggers, pipelines — totul automat.',
              accent: 'border-emerald-500/30 bg-emerald-500/5',
            },
            {
              icon: '📊',
              title: 'Dashboard complet',
              desc: 'Costuri, activitate, rapoarte într-un singur loc. Vizibilitate totală asupra întregii infrastructuri AI.',
              accent: 'border-amber-500/30 bg-amber-500/5',
            },
          ].map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl border p-6 ${f.accent} hover:scale-[1.02] transition-transform`}
            >
              <p className="text-3xl mb-3">{f.icon}</p>
              <h3 className="text-xl font-black mb-2">{f.title}</h3>
              <p className="text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pb-8">
          <h2 className="text-2xl md:text-3xl font-black">Gata să-ți orchestrezi agenții?</h2>
          <p className="text-white/50">Cont gratuit · Setup în 5 minute · Fără card</p>
          <a
            href="https://agents.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline"
          >
            Creează cont gratuit →
          </a>
        </div>
      </div>
    </div>
  );
}
