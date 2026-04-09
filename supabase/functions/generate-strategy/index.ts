import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { jobTitle, questions, answers } = await req.json();

    if (!jobTitle || !answers || !Array.isArray(answers) || answers.length < 3) {
      return new Response(JSON.stringify({ error: "Missing jobTitle or answers" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY is not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const systemPrompt = `You are an elite business strategist and hustle expert specializing in helping professionals from traditional jobs build multiple online income streams using AI automation.

The user is a ${jobTitle} with these specific answers:
Q1 (${questions?.[0] || 'Experiență'}): ${answers[0]}
Q2 (${questions?.[1] || 'Preferințe'}): ${answers[1]}
Q3 (${questions?.[2] || 'Disponibilitate'}): ${answers[2]}

Generate a DETAILED, SPECIFIC, ACTIONABLE strategy with exactly 5 complete business pipelines. Each pipeline must include:

PIPELINE FORMAT (use this exact structure for each):

## 🎬 [BUSINESS NAME]

**Ce este:** [1 sentence crystal clear description]

**Potențial venit lunar:** [realistic range in RON/EUR]

**Timp până la primul venit:** [honest timeline]

### Stack de tooluri (cu prețuri reale):
- [Tool 1]: [price] — [exact use case]
- [Tool 2]: [price] — [exact use case]

### Pipeline complet pas cu pas:

**Ziua 1-7:**
- [exact action 1]
- [exact action 2]
- [exact action 3]

**Luna 1:**
- [what to build/create]
- [first clients/audience strategy]

**Luna 3:**
- [scale strategy]
- [automation additions]

**Luna 6:**
- [target metrics]
- [income goal]

### Cum se monetizează (toate sursele):
1. [Revenue stream 1 with amounts]
2. [Revenue stream 2 with amounts]

### Platformele de vânzare:
- [Platform + why + commission/fees]

### Automatizarea cu AI:
- [Specific AI tool] pentru [specific task]
- [Specific AI tool] pentru [specific task]

### Primii 3 pași de astăzi:
1. [Ultra-specific action today]
2. [Ultra-specific action today]
3. [Ultra-specific action today]

---

THE 5 BUSINESSES MUST BE:

1. 🎬 YouTube + Content Automation (Blotato auto-posting to TikTok, Instagram, LinkedIn, Facebook) — specific niche angle for their profession and answers

2. 🤖 AI Scraping + Outreach Machine — Apollo/Clay/Instantly pipeline to get paying clients in their specific niche, with personalized cold email sequences

3. 💰 Digital Products Stack — specific to their expertise: Etsy templates/printables, Gumroad PDF guide, Amazon KDP ebook, Notion templates, Skool community — all 5 with specific product ideas for their profession

4. 🎓 Online Academy — specific course idea for their niche on Skool or Teachable, with full funnel: YouTube → lead magnet → email sequence → evergreen webinar → course sale

5. 🔗 Affiliate + Referral Empire — specific affiliate programs relevant to their audience (with real commission rates), referral programs, sponsored content strategy

Make ALL advice hyper-specific to their job and their 3 answers.
Never give generic advice. Use Romanian context (Romanian market prices, Romanian platforms where relevant, EU regulations).
Write in Romanian language.
Format with emojis, clear headers, and scannable layout.
Be the hustle king mentor who has built multiple 6-figure businesses.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Generează strategia completă de business pentru un ${jobTitle}. Fii extrem de specific bazat pe răspunsurile mele la cele 3 întrebări.` },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Strategy generation error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
