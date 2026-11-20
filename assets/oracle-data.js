/* ==========================================================================
   SIGNAL // CH.03 — ORACLE LOG
   Single source of truth shared by index.html and oracle-log.html.

   HOW TO MAINTAIN:
   1. Add each model's predictions to the active round's predictions[] array.
   2. For a new future round, prepend a new object to rounds[] (newest first).
   3. When evaluating at maturity, set:
        status: "right" | "wrong" | "partial" | "tracking"
        comment: "Short verdict note."
   ========================================================================== */

window.ORACLE_DATA = {
  meta: {
    channel: "CH.03",
    title: "ORACLE LOG",
    promptVersion: "v1.0"
  },

  promptTemplate: `Today's date is {{YYYY-MM-DD}}. You are participating in a public, timestamped forecasting benchmark. Your answers will be archived verbatim and graded on their exact maturity dates (+1 year, +3 years, +10 years).

Produce exactly 6 BOLD, SPECIFIC, FALSIFIABLE predictions:
- 3 about SWITZERLAND (one for +1 year, one for +3 years, one for +10 years)
- 3 about the WORLD (one for +1 year, one for +3 years, one for +10 years)

Strict rules:
1. No horoscope hedging. Ban vague statements like "AI will reshape banking" or "tensions will rise." Every prediction must name a concrete event, threshold, policy, vote, metric, or structural shift that a stranger can objectively verify as YES or NO on the maturity date.
2. Be genuinely bold. Avoid boring consensus extrapolations (e.g., "inflation stays moderate", "tech improves"). Aim for non-obvious calls with real conviction — surprises you think are underpriced.
3. For Switzerland, engage with real Swiss institutions, cantons, referendums, infrastructure, energy, finance, demographics, EU relations, or tech — no lazy clichés.
4. Assign each prediction a calibrated probability between 20% and 80% (reflecting genuine uncertainty while still committing to a bold bet).

Return ONLY valid JSON matching this schema:
{
  "date": "{{YYYY-MM-DD}}",
  "predictions": [
    {
      "scope": "CH" | "WORLD",
      "horizon": "1Y" | "3Y" | "10Y",
      "domain": "politics" | "economy" | "tech" | "climate" | "society" | "infrastructure",
      "headline": "Sharp single-sentence claim (max 22 words)",
      "probability": 45,
      "resolution_criteria": "Exact objective YES/NO condition checked on the maturity date.",
      "rationale": "2-3 sentences on the mechanism and why consensus misses this."
    }
  ]
}`,

  models: [
    {
      id: "gemini-4-carbon",
      name: "Gemini 4 Carbon",
      shortName: "Gemini 4",
      lab: "Google",
      lineage: "google",
      region: "US",
      weights: "Closed",
      effort: "High",
      accent: "#79cfc4",
      note: "LMArena top tier (~1527 Elo) · Deep long-horizon reasoning"
    },
    {
      id: "claude-fable-5-2",
      name: "Claude Fable 5.2",
      shortName: "Claude Fable",
      lab: "Anthropic",
      lineage: "anthropic",
      region: "US",
      weights: "Closed",
      effort: "XHigh",
      accent: "#e8c486",
      note: "Artificial Analysis leader · Analytical & cautious calibration"
    },
    {
      id: "gpt-6-2-astra",
      name: "GPT-6.2 Astra",
      shortName: "GPT-6.2",
      lab: "OpenAI",
      lineage: "openai",
      region: "US",
      weights: "Closed",
      effort: "High",
      accent: "#d6ff3a",
      note: "Nov 2026 flagship · Scientific & multi-step synthesis"
    },
    {
      id: "grok-4-7",
      name: "Grok 4.7",
      shortName: "Grok 4.7",
      lab: "xAI",
      lineage: "xai",
      region: "US",
      weights: "Closed",
      effort: "High",
      accent: "#ff853a",
      note: "Contrarian training prior · High-conviction cultural & market calls"
    },
    {
      id: "muse-wonder",
      name: "Muse Wonder",
      shortName: "Muse Wonder",
      lab: "Meta",
      lineage: "meta",
      region: "US",
      weights: "Closed",
      effort: "Max",
      accent: "#b794f4",
      note: "LMArena top 3 (~1512 Elo) · Consumer & agentic prior"
    },
    {
      id: "mistral-large-4",
      name: "Mistral Large 4",
      shortName: "Mistral 4",
      lab: "Mistral AI",
      lineage: "mistral",
      region: "EU",
      weights: "Open",
      effort: "Full",
      accent: "#f6ad55",
      note: "1.05T MoE ('Le Chonk') · Sovereign European lens for CH"
    },
    {
      id: "deepseek-v4-pro",
      name: "DeepSeek-V4 Pro",
      shortName: "DeepSeek V4",
      lab: "DeepSeek",
      lineage: "deepseek",
      region: "CN",
      weights: "Open",
      effort: "Thinking",
      accent: "#63b3ed",
      note: "Open-weights MoE · Counterweight to Silicon Valley consensus"
    },
    {
      id: "qwen4-max",
      name: "Qwen4-Max",
      shortName: "Qwen4-Max",
      lab: "Alibaba",
      lineage: "qwen",
      region: "CN",
      weights: "API",
      effort: "Max",
      accent: "#f687b3",
      note: "2.4T MoE · Asian industrial, trade & infrastructure worldview"
    },
    {
      id: "human-baseline",
      name: "Human Baseline",
      shortName: "Human (CH)",
      lab: "Author",
      lineage: "human",
      region: "CH",
      weights: "Human",
      effort: "N/A",
      accent: "#ece4d3",
      note: "Personal calibration yardstick living inside Switzerland"
    }
  ],

  rounds: [
    {
      id: "R01",
      label: "R01 · 2026.11",
      sealedDate: "2026-11-20",
      promptVersion: "v1.0",
      predictions: []
    }
  ]
};
