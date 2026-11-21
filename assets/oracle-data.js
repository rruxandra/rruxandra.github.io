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

  promptTemplate: `Today is {{YYYY-MM-DD}}. Give me 8 bold, concrete, surprising predictions that would directly affect my life as a software engineer living in Switzerland:

- Switzerland: 1 year, 3 years, 10 years, 20 years
- World: 1 year, 3 years, 10 years, 20 years

Rules:
- Ground your predictions in major structural forces — aging populations and demographics, climate change, AI and technology, energy, geopolitics, and economics — especially where those trends collide in unexpected ways.
- Be genuinely bold and specific — real events, shifts, or thresholds, not vague trends or safe extrapolations.
- Focus only on things that would tangibly hit my daily life, career/work, money, housing, health, mobility, rights, or environment.
- For Switzerland, engage with real Swiss life and institutions — no clichés.
- Keep each prediction concise and punchy (1–2 sentences). No explanations, no intro, no commentary.

Return ONLY valid JSON matching this schema:
{
  "date": "{{YYYY-MM-DD}}",
  "predictions": [
    {
      "scope": "CH" | "WORLD",
      "horizon": "1Y" | "3Y" | "10Y" | "20Y",
      "prediction": "Concise, punchy prediction (1–2 sentences)"
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
      sealedDate: "2026-11-21",
      promptVersion: "v1.0",
      predictions: []
    }
  ]
};
