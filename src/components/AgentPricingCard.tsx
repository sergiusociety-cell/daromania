interface AgentPricingCardProps {
  agentName: string;
}

export default function AgentPricingCard({ agentName }: AgentPricingCardProps) {
  const whatsappText = encodeURIComponent(`Salut! Vreau să implementez ${agentName}`);

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-[480px] rounded-2xl border-2 border-[#f59e0b] bg-[#111111] p-8 space-y-6 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white">
          Implementează {agentName} în 48h
        </h2>

        <ul className="space-y-3 text-left text-slate-200 text-base">
          {['Acces direct la agent', 'Ghidaj pas cu pas prin chat', 'Support WhatsApp inclus', 'VPS setup complet'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-[#22c55e]">✅</span> {item}
            </li>
          ))}
        </ul>

        <div className="space-y-3 pt-2">
          <a
            href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#f59e0b] hover:bg-[#eab308] text-black font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline text-center"
          >
            Începe acum — $9 →
          </a>
          <a
            href={`https://wa.me/40768676141?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-[#22c55e] hover:text-[#4ade80] transition-colors no-underline"
          >
            💬 Întrebări? WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
}
