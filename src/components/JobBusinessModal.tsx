import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';
import type { JobData } from '../constants';

interface Props {
  job: JobData;
  onClose: () => void;
}

function generateCards(job: JobData) {
  const t = job.title;
  return [
    {
      emoji: '🎬',
      title: 'Media Empire (YouTube + Blotato)',
      gradient: 'from-purple-600 to-violet-800',
      border: 'border-purple-500/30',
      sections: [
        { label: '📹 Canal YouTube', text: `Creează un canal YouTube despre "${t}" — împărtășește expertiză, studii de caz și insight-uri din industrie. Conținut educațional + entertainment = creștere organică.` },
        { label: '📱 Auto-posting via Blotato', text: `Fiecare video se transformă automat în clipuri scurte pentru Instagram Reels, TikTok, LinkedIn și Facebook. Blotato automatizează tot procesul de distribuție.` },
        { label: '💰 Revenue Streams', text: `• YouTube AdSense: 500-3.000 RON/lună\n• Brand Deals cu companii din domeniu: 2.000-10.000 RON/deal\n• Link-uri afiliate pentru tool-uri din nișa ta: 1.000-5.000 RON/lună` },
        { label: '🎯 Primii 3 pași', text: `1. Creează canalul YouTube și primele 5 videoclipuri despre "${t}"\n2. Conectează Blotato pentru auto-posting pe toate platformele\n3. Contactează 10 branduri din domeniu pentru parteneriate` },
        { label: '📊 Venit estimat România', text: `Luna 1-3: 500-1.500 RON\nLuna 6: 3.000-8.000 RON\nLuna 12: 10.000-25.000 RON/lună` },
      ],
    },
    {
      emoji: '🛠️',
      title: 'SaaS din Expertiza Ta',
      gradient: 'from-blue-600 to-cyan-700',
      border: 'border-blue-500/30',
      sections: [
        { label: '💡 Ideea SaaS', text: `${job.pivot2 || `Un software B2B care automatizează procesele specifice din domeniul "${t}" — economisind timp și bani pentru IMM-uri din România.`}` },
        { label: '🏢 Target: IMM-uri România', text: `Vinde soluția către firmele mici și medii care au nevoie de expertiza ta dar nu-și permit un specialist full-time. SaaS-ul tău devine "angajatul" lor digital.` },
        { label: '⚙️ 3 funcționalități core', text: `1. Dashboard de monitorizare specific domeniului "${t}"\n2. Rapoarte automate și alerte inteligente\n3. Integrare cu tool-urile existente (facturare, CRM, email)` },
        { label: '💳 Model de prețuri', text: `• Starter: 49 RON/lună (1 utilizator)\n• Professional: 149 RON/lună (5 utilizatori)\n• Enterprise: 499 RON/lună (nelimitat + suport prioritar)` },
        { label: '🎯 Primii 3 pași', text: `1. Validează ideea cu 20 de potențiali clienți din domeniu\n2. Construiește MVP cu no-code (Bubble/Softr) în 30 de zile\n3. Lansează beta gratuit pentru primii 10 clienți` },
      ],
    },
    {
      emoji: '📄',
      title: 'Produs Digital PDF',
      gradient: 'from-emerald-600 to-green-700',
      border: 'border-emerald-500/30',
      sections: [
        { label: '📋 Produsul', text: `${job.pivot3 || `Ghid complet PDF: "Totul despre ${t} — De la zero la expert". Template-uri, checklist-uri și framework-uri practice.`}` },
        { label: '🛒 Platforme de vânzare', text: `Vinde pe Gumroad sau Lemon Squeezy — zero costuri upfront, doar comision per vânzare. Setup în 30 de minute.` },
        { label: '💰 Preț sugerat', text: `• PDF Basic: 49-99 RON (ghid simplu)\n• PDF Premium: 149-299 RON (cu template-uri bonus)\n• Bundle Complet: 399-599 RON (ghid + video walkthrough)` },
        { label: '📑 5 secțiuni în PDF', text: `1. Introducere: Starea actuală a domeniului "${t}" în era AI\n2. Framework de adaptare: 10 pași practici\n3. Template-uri gata de folosit (15+ template-uri)\n4. Studii de caz: 5 povești de succes reale\n5. Resurse bonus: Tool-uri, link-uri, comunități` },
        { label: '🎯 Primii 3 pași', text: `1. Scrie conținutul în Google Docs (2-3 săptămâni)\n2. Design profesional în Canva (3-5 zile)\n3. Listează pe Gumroad + promovează pe LinkedIn/Facebook` },
      ],
    },
    {
      emoji: '🎓',
      title: 'Academia Online',
      gradient: 'from-orange-500 to-amber-600',
      border: 'border-orange-500/30',
      sections: [
        { label: '🏫 Ideea de curs', text: `${job.pivot4 || `Școală online: "Masterclass ${t}" — transformă-ți experiența profesională într-un curs structurat pe care alții îl pot urma pas cu pas.`}` },
        { label: '🖥️ Platformă recomandată', text: `• Skool.com — ideal pentru comunitate + curs (recomandat)\n• Teachable — pentru cursuri video structurate\n• Udemy — pentru reach maxim (dar marjă mai mică)` },
        { label: '📚 3 Module de curs', text: `Modul 1: Fundamente — Ce trebuie să știi despre "${t}" în 2025\nModul 2: Aplicare practică — 10 proiecte hands-on\nModul 3: Monetizare — Cum faci bani din expertiza ta` },
        { label: '💰 Model de venituri', text: `• Curs one-time: 499-999 RON\n• Membership lunar: 99-199 RON/lună\n• Coaching 1:1 premium: 500-2.000 RON/oră\n• Venit potențial: 5.000-30.000 RON/lună cu 50-100 studenți` },
        { label: '🎯 Primii 3 pași', text: `1. Structurează curriculum-ul (10 lecții, 5-15 min fiecare)\n2. Înregistrează cu telefonul + microfon decent (investiție: 200 RON)\n3. Lansează pe Skool cu preț introductiv de 49 RON/lună` },
      ],
    },
    {
      emoji: '🤖',
      title: '6 Agenți AI — AIOPENCLAW.ai',
      gradient: 'from-rose-600 to-pink-700',
      border: 'border-rose-500/30',
      sections: [
        { label: '🎯 Viziune', text: `Rulează toate cele 4 business-uri de mai sus pe autopilot folosind 6 agenți AI configurați pe AIOPENCLAW.ai, specifici pentru "${t}".` },
        { label: '🔍 Agent 1: Content Research', text: `Scanează trending topics, competitori și oportunități din nișa "${t}". Generează săptămânal 20 idei de conținut validate cu date.` },
        { label: '✍️ Agent 2: Content Creation', text: `Scrie scripturi video, articole, postări social media și email-uri — toate personalizate pe vocea ta și expertiza în "${t}".` },
        { label: '📤 Agent 3: Publishing via Blotato', text: `Publică automat pe YouTube, Instagram, TikTok, LinkedIn, Facebook. Programează, optimizează hashtag-uri, testează orele de posting.` },
        { label: '💼 Agent 4: Sales & Outreach', text: `Trimite mesaje personalizate către potențiali clienți B2B. Follow-up automat. Califică lead-uri și programează demo-uri.` },
        { label: '🎧 Agent 5: Customer Support', text: `Răspunde la întrebări frecvente, gestionează onboarding studenți noi, rezolvă probleme tehnice 24/7.` },
        { label: '📊 Agent 6: Analytics & Optimization', text: `Monitorizează KPI-uri, identifică ce funcționează și ce nu, sugerează optimizări săptămânal. Dashboard automat.` },
        { label: '⚡ Setup pe AIOPENCLAW.ai', text: `1. Creează cont pe aiopenclaw.ai\n2. Configurează cei 6 agenți (template-uri pre-făcute)\n3. Conectează toate platformele (YouTube, social, email)\n4. Setează reguli de automatizare` },
        { label: '⏰ Timp economisit', text: `~35-40 ore/săptămână economisiți. De la 60+ ore muncă manuală la ~20 ore supraveghere și strategie.` },
      ],
    },
  ];
}

export default function JobBusinessModal({ job, onClose }: Props) {
  const cards = generateCards(job);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (idx: number) => {
    const card = cards[idx];
    const text = `${card.emoji} ${card.title}\n\n${card.sections.map(s => `${s.label}\n${s.text}`).join('\n\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Panel */}
        <motion.div
          className="relative w-full md:max-w-3xl h-full bg-slate-950 overflow-y-auto shadow-2xl md:border-l border-slate-800"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 p-3 md:p-5 flex items-center justify-between">
            <div className="min-w-0 flex-1 mr-2">
              <h2 className="text-base md:text-xl font-black text-white truncate">{job.title}</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">{job.category}</span>
                <span className={`text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 rounded-full ${job.automationRisk > 80 ? 'bg-rose-500/20 text-rose-400' : job.automationRisk > 50 ? 'bg-amber-500/20 text-amber-400' : 'bg-green-500/20 text-green-400'}`}>
                  {job.automationRisk}%
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cards */}
          <div className="p-3 md:p-5 space-y-4 md:space-y-5">
            <p className="text-slate-400 text-xs md:text-sm">5 modele de business construite pe expertiza ta în <span className="text-white font-bold">{job.title}</span>.</p>

            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl border ${card.border} overflow-hidden`}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-r ${card.gradient} p-3 md:p-5 flex items-center justify-between`}>
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <span className="text-xl md:text-3xl">{card.emoji}</span>
                    <h3 className="text-sm md:text-lg font-black text-white truncate">{card.title}</h3>
                  </div>
                  <button
                    onClick={() => handleCopy(idx)}
                    className="flex-shrink-0 flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-[10px] md:text-xs font-bold transition-colors"
                  >
                    {copiedIdx === idx ? <><Check className="w-3.5 h-3.5" /> Copiat!</> : <><Copy className="w-3.5 h-3.5" /> Copiază ideea</>}
                  </button>
                </div>

                {/* Card content */}
                <div className="bg-slate-900/80 p-3 md:p-5 space-y-3 md:space-y-4">
                  {card.sections.map((section, si) => (
                    <div key={si}>
                      <h4 className="text-xs md:text-sm font-bold text-slate-300 mb-0.5 md:mb-1">{section.label}</h4>
                      <p className="text-[11px] md:text-sm text-slate-400 whitespace-pre-line leading-relaxed">{section.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Bottom CTA */}
            <div className="text-center py-8">
              <p className="text-slate-500 text-sm mb-3">Alege o idee și transformă-o în realitate</p>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold hover:from-indigo-600 hover:to-violet-600 transition-all"
              >
                🚀 Lansează proiect — $9
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
