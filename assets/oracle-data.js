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

  // Ordered from most capable to least capable (Artificial Analysis Intelligence Index v5 / Arena)
  models: [
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
      note: "Artificial Analysis leader (~65) · Analytical & cautious calibration"
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
      note: "Nov 2026 flagship (~62) · Scientific & multi-step synthesis"
    },
    {
      id: "gemini-4-neon",
      name: "Gemini 4 Neon",
      shortName: "Gemini 4 Neon",
      lab: "Google",
      lineage: "google",
      region: "US",
      weights: "Closed",
      effort: "High",
      accent: "#4fd1c5",
      note: "Nov 2026 frontier (~61) · Fast frontier reasoning & agentic coding"
    },
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
      note: "LMArena top tier (~59) · Deep long-horizon reasoning"
    },
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      shortName: "Claude Opus",
      lab: "Anthropic",
      lineage: "anthropic",
      region: "US",
      weights: "Closed",
      effort: "High",
      accent: "#d97757",
      note: "Sep 2026 flagship (~58) · Daily-driver reasoning & agentic coding"
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
      note: "LMArena top 3 (~56 / ~1512 Elo) · Consumer & agentic prior"
    },
    {
      id: "kimi-k3-1-pro",
      name: "Kimi K3.1 Pro",
      shortName: "Kimi K3.1",
      lab: "Moonshot AI",
      lineage: "kimi",
      region: "CN",
      weights: "Open",
      effort: "Max",
      accent: "#818cf8",
      note: "2.8T open-weights MoE (~46–55) · Leading open-weights on Index v5"
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
      note: "Contrarian training prior (~46) · High-conviction cultural & market calls"
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
      note: "2.4T MoE (~43) · Asian industrial, trade & infrastructure worldview"
    },
    {
      id: "qwen-3-8-flash",
      name: "Qwen 3.8 Flash",
      shortName: "Qwen 3.8",
      lab: "Alibaba",
      lineage: "qwen",
      region: "CN",
      weights: "API",
      effort: "Flash",
      accent: "#e86ca8",
      note: "1M-context MoE (~29) · Fast Asian industrial & tech worldview"
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
      note: "1.05T MoE ('Le Chonk', ~26) · Sovereign European lens for CH"
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
      note: "1.6T open-weights MoE (~23) · Counterweight to Silicon Valley consensus"
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
      predictions: [
        // ── Claude Fable 5.2 (2026-11-21) ──────────────────────────
        {
          modelId: "claude-fable-5-2",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "By autumn 2027 the unemployment rate among Swiss software developers tops 6 percent, roughly double the national rate. At least one of Swisscom, Swiss Post or the Federal Railways cuts its application-development apprenticeship intake by a third or more.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-fable-5-2",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "By 2029 a euro-zone debt scare centred on France pushes the euro below 0.85 francs and the Swiss National Bank returns to negative interest rates. Ten-year mortgages fall under 1 percent and condominium prices around Zurich jump another 15 percent.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-fable-5-2",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "By 2036 Geneva or Basel records its first 40 °C day and cantons scrap their permit hurdles for air conditioning. Tenancy law lets you claim a rent reduction when your flat stays above 28 °C for days.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-fable-5-2",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "By 2046 one in four Swiss residents is over 65 and salary deductions no longer carry the first pension pillar. More than half of old-age insurance is financed by a federal levy on automated value creation, and the regular retirement age is 68.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-fable-5-2",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "By the end of 2027 a self-propagating worm spread by autonomous coding agents through npm and Packagist compromises tens of thousands of production systems. Insurers and European regulators respond by requiring a named human to sign off every dependency change.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-fable-5-2",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "By 2029 a Chinese 'quarantine' of Taiwan stops advanced chip shipments for months. Cloud and AI computing capacity is rationed, prices triple, and the coding agents your team depends on are throttled or waitlisted.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-fable-5-2",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "By 2036 hand-written code is a niche craft and 'software engineer' is a licensed, liability-carrying profession in the European Union. AI builds the systems and a certified human must sign for them, the way an auditor signs accounts.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-fable-5-2",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "By 2046 global warming has passed 2 °C and world population has already peaked below 9 billion. Ageing rich countries, Switzerland included, stop capping immigration and start bidding for young workers with tax breaks and fast-track citizenship.",
          status: "sealed",
          comment: ""
        },

        // ── GPT-6.2 Astra (2026-11-21) ─────────────────────────────
        {
          modelId: "gpt-6-2-astra",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "SBB will issue a heatwave timetable for the Zürich–Bern line, cutting at least one afternoon InterCity train per hour for three consecutive weekdays because of track temperatures.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gpt-6-2-astra",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "A major Swiss health insurer will make an AI symptom check compulsory before routine appointments on its cheapest basic-insurance plan in at least ten cantons. In Zürich, keeping the option to call a nurse first will cost at least CHF 30 more per month at the same deductible.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gpt-6-2-astra",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "The Federal Supreme Court will uphold a summer rent reduction of at least 10% for a flat where the tenant’s temperature log shows the bedroom repeatedly stayed above 28°C overnight.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gpt-6-2-astra",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "Swiss voters will approve an AHV pension age of 68 for people born after 1990, with a year off that age for every five years spent caring for a dependent relative.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gpt-6-2-astra",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "At least two of Google, Microsoft and Amazon will make reviewing an AI-written patch a standard interview round for senior engineers, including Swiss hires. The patch will pass every supplied test and still contain a bug serious enough to block release.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gpt-6-2-astra",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "France and Germany will each require bidders for a national health-data contract to prove the service can run for 30 days after losing access to its US cloud provider. A Swiss bidder whose backup needs the same cloud login to restore it will fail the drill.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gpt-6-2-astra",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "AWS and Google Cloud will guarantee a price at least 70% below their on-demand rate for batch jobs if you give them 24 hours to finish and let them choose the region with the cheapest electricity.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gpt-6-2-astra",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "In Japan, Germany and Switzerland, long-term care coverage will pay for a home robot that can move an adult from bed to wheelchair without a caregiver in the room. Someone who wakes at 3 a.m. will be able to get up before the morning care visit.",
          status: "sealed",
          comment: ""
        },

        // ── Gemini 4 Neon (2026-11-21) ─────────────────────────────
        {
          modelId: "gemini-4-neon",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "By late 2027, at least two major US tech employers in Zurich will cut junior and mid-level SWE headcount by over 40% in favor of agentic pipelines while freezing local cash band raises. Simultaneously, FINMA's new AI-audit rules will spark a bidding war for senior 'verification engineers' who carry formal sign-off accountability for AI-generated production code in finance and medtech.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gemini-4-neon",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "As cantons roll out the Eigenmietwert repeal in 2028–2029, losing mortgage-interest deductions will break the tax math for leveraged buyers while encouraging debt-free retirees to stay put, freezing suburban family-home supply around Zurich and pushing high-end rents up 15–20%. To plug the resulting municipal tax hole, at least one low-tax Lake Zurich or Zug commune will hike its Steuerfuss by over 10 percentage points for the first time in decades.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gemini-4-neon",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "By 2036, surging elderly-care costs will push standard Zurich KVG health insurance premiums past CHF 1,000 a month unless you switch to an 'AI-First' managed-care tier where an algorithmic agent gates specialist referrals using continuous wearable biometrics. At the same time, Swiss voters will pass a dedicated 2% high-earner payroll levy on top of AHV to keep cantonal hospitals and nursing homes solvent.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gemini-4-neon",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "By 2046, disappearing Alpine glacier meltwater will turn summer Swiss hydropower into a rationed asset, bringing mandatory smart-meter throttling of home cooling and EV charging alongside routine SBB summer heat speed caps across the Mittelland. Meanwhile, an influx of wealthy climate migrants from Southern Europe will drive a popular initiative requiring multi-year cantonal residency before anyone can purchase residential property.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gemini-4-neon",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "Within 12 months, an autonomous AI worm exploiting zero-days across core open-source libraries will cause a multi-billion-dollar global outage, forcing GitHub, npm, and PyPI to mandate verified cryptographic identities and paid security attestations for maintainers. Your daily workflow will abruptly shift from pulling free community packages to shipping inside locked-down, insurer-whitelisted dependency registries.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gemini-4-neon",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "By 2029, severe US and European power-grid bottlenecks will invert cloud economics as hyperscalers impose peak-hour kilowatt-hour surge pricing that triples frontier AI inference costs. Software engineers will pivot from feature velocity to re-architecting apps around tiny local models and strict energy budgets, making low-level efficiency engineering the industry's highest-paid specialty.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gemini-4-neon",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "By 2036, spiraling pension and debt-service costs will push the US and major Eurozone states into explicit financial repression—combining bond-yield caps with cross-border capital-outflow taxes—and drive the Swiss franc another 30% higher. For a Swiss-based earner, unhedged US-heavy global equity ETFs will deliver flat-to-negative real returns in CHF over the decade, upending the standard 'buy-and-hold global index' wealth playbook.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "gemini-4-neon",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "By 2046, AI-designed epigenetic and cellular-repair therapies will reliably add 15+ healthy working years for roughly the price of a mid-size car, launching out-of-pocket in hubs like Switzerland before entering public coverage. Facing collapsing working-age ratios, governments across the OECD will abolish fixed retirement ages in favor of health-span-indexed pensions, locking knowledge workers into 55-year careers punctuated by mandatory retraining sabbaticals.",
          status: "sealed",
          comment: ""
        },

        // ── Claude Opus 5.5 (2026-11-21) ───────────────────────────
        {
          modelId: "claude-opus-5-5",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "On 28 February 2027, with the Iran-war energy shock showing up in every power bill, voters narrowly lift the ban on new nuclear plants. Yet by year-end no utility has applied for a permit without a federal financing guarantee, and 2028 household electricity tariffs still rise by double digits.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-opus-5-5",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "In the 2028 vote, the European Union treaty package wins a popular majority but fails because most cantons vote no. Brussels freezes updates to the old bilateral agreements, and the electricity deal dies with it, leaving Switzerland outside the European power market as Beznau heads for shutdown.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-opus-5-5",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "By 2036, over-60s outnumber under-25s among Swiss temporary workers as baby-boomer retirements leave several hundred thousand jobs unfilled. Scheduling around partial pensions, post-65 pension contributions and limited weekly availability becomes a core feature of every staffing platform.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-opus-5-5",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "By 2046, the standard basic health insurance premium for an adult passes 1,000 francs a month. After defeats in 2007 and 2014, voters finally replace the competing insurers with a single public health insurer per canton.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-opus-5-5",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "By late 2027, at least one big US tech company publicly reports that AI coding agents open and merge more pull requests than its human engineers. Senior engineering job ads start ranking agent orchestration and review of AI-written code above any programming language.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-opus-5-5",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "By 2029, AI data centers colliding with Europe's gas squeeze after the Strait of Hormuz disruptions make electricity the binding constraint. The big three cloud providers raise compute prices in their European regions, Zurich included, by 25% or more, ending two decades of ever-cheaper cloud hosting.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-opus-5-5",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "By 2036, a single European summer kills more than 100,000 people from heat. Binding rules that stop outdoor and event work above set heat thresholds spread across most of Europe, Switzerland included.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "claude-opus-5-5",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "By 2046, humanoid robots deliver the majority of hands-on elder-care hours in Japan, South Korea and Western Europe. Robot-assisted ageing at home, not the nursing home, becomes the default retirement path.",
          status: "sealed",
          comment: ""
        },

        // ── Muse Wonder (2026-11-21) ───────────────────────────────
        {
          modelId: "muse-wonder",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "In 2027, cantons Aargau and Zurich impose a moratorium on new AI data centres after a dry summer strains power and cooling water, forcing your employer to move workloads abroad. Your Gemeinde simultaneously introduces dynamic electricity tariffs that triple your home-office power price on winter evenings.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "muse-wonder",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "By 2029, the maximum Krankenkasse franchise rises to CHF 5,000 and insurers require AI-app triage before reimbursing a Hausarzt visit. Healthy software engineers will effectively pay serious illness costs out of pocket despite monthly premiums above CHF 600.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "muse-wonder",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "By 2036, Switzerland crosses 10 million residents and voters approve a hard population cap, making B-permits for foreign developers subject to employer quotas. In Zurich, the median one-bedroom Mietzins exceeds CHF 3,500 despite emergency housing construction.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "muse-wonder",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "By 2046, the AHV retirement age reaches 70 and BVG conversion rates are cut by a quarter as retirees outnumber full-time workers in half of all cantons. You will supervise AI systems part-time into your late sixties while care robots, not human nurses, staff your parents' Altersheim.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "muse-wonder",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "By late 2027, over 40% of junior developer job postings worldwide have disappeared as AI agents absorb entry-level coding. Surviving employers interview you in person, without AI, and pay premiums only for security, systems, and legacy-code expertise.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "muse-wonder",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "By 2029, US-China tech controls split GitHub, cloud regions, and model access into incompatible blocs. Working remotely from Switzerland for a US company will require export-control screening, location-locked code, and maintaining separate US and non-US codebases.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "muse-wonder",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "By 2036, AI energy demand forces major economies to price compute like peak electricity, making overnight training and CI runs a budgeted corporate resource. Simultaneously, uninsurable homes in Florida, southern Spain, and coastal Asia push millions of affluent climate migrants into northern Europe, bidding up your housing market.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "muse-wonder",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "By 2046, autonomous agents write and operate over 90% of commercial software, collapsing the traditional developer career ladder to a small class of auditors and system owners. Citizenship-based AI dividends replace part of wages, making your Swiss passport worth over CHF 1 million in lifetime rights and payments.",
          status: "sealed",
          comment: ""
        },

        // ── Kimi K3.1 Pro (2026-11-21) ─────────────────────────────
        {
          modelId: "kimi-k3-1-pro",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "By November 2027, Zürich will require new large data centres to accept winter load-shedding and supply district heating; Swiss firms will schedule AI training around household heating peaks.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "kimi-k3-1-pro",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "By November 2029, FINMA will require replayable audit trails and a named human accountable for every AI-generated production change at banks and insurers; “AI-agent supervisor” becomes a regulated Swiss engineering speciality.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "kimi-k3-1-pro",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "By 2036, Swiss banks will apply parcel-level heat, flood and debris-flow scores at mortgage renewal; after insurers retreat from parts of Valais and Graubünden, some occupied Alpine flats become effectively unmortgageable.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "kimi-k3-1-pro",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "By 2046, Switzerland’s retirement age is 68 and KVG/LAMal basic insurance reimburses certified home-care robots; human-only eldercare becomes a private luxury.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "kimi-k3-1-pro",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "By November 2027, at least two of the world’s ten largest listed software firms will report AI writing over 80% of new code while cutting graduate engineering hiring by half from 2025 levels.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "kimi-k3-1-pro",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "By 2029, an AI-assisted state cyberattack will disable card payments across a G20 country for at least 48 hours; Switzerland and the EU will require banks and phone wallets to provide offline payment fallbacks.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "kimi-k3-1-pro",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "By 2036, at least two megacities will impose week-long statutory heat shutdowns every year, closing offices and throttling data centres; distributed software teams will plan releases around “heat seasons.”",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "kimi-k3-1-pro",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "By 2046, at least one G20 member will grant limited legal personality to autonomous AI firms, letting them sign contracts and hold insurance; Swiss engineers will compete to become their licensed guarantors rather than their programmers.",
          status: "sealed",
          comment: ""
        },

        // ── Grok 4.7 (2026-11-21) ──────────────────────────────────
        {
          modelId: "grok-4-7",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "Voters keep the nuclear construction ban on 28 February 2027; by the following winter EKZ and Swissgrid impose binding load caps on commercial connections in the Zurich region, restricting your local GPU and office capacity to nights and weekends and pushing a large share of inference to pricier EU cloud.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "grok-4-7",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "By 2029 mandatory climate-hazard disclosure plus clustered Aare and Rhine floods cause cantonal insurers to non-renew cover on thousands of Plateau properties; lenders red-line entire communes near Zurich, your landlord sells, and any larger apartment you can still finance forces a much longer daily commute.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "grok-4-7",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "By 2036 data-center demand and an AHV deficit produce a statutory levy per commercial GPU-hour while the reference retirement age reaches 68; a fifth of your variable pay is tied to inference-efficiency targets and promotion slots stay blocked by colleagues who no longer leave at 65.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "grok-4-7",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "By 2046 a constitutional amendment gives citizens and long-term C-permit holders priority on new urban leases, and permafrost damage has permanently cut Alpine base-tunnel capacity; on a B permit you cannot secure a Zurich or Lausanne apartment and cross-border client travel takes roughly twice as long.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "grok-4-7",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "Through 2027 Hormuz-related energy shocks colliding with the AI build-out drive European GPU cloud prices up by at least 30%; your employer freezes open reqs, halves the bonus pool, and pulls you off feature work onto cost-cutting refactors for the rest of the year.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "grok-4-7",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "By 2029 US chip-export controls and EU high-risk AI enforcement split model availability by jurisdiction; Swiss bank and pharma clients ban US-hosted foundation models on regulated workloads, so most of your sprints go to rebuilding stacks on constrained European models you cannot match for quality.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "grok-4-7",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "By 2036 recurring summer grid emergencies produce legal compute curfews in major US and southern European cloud regions; for weeks each year your CI and staging systems are throttled in the European afternoon and release calendars are set by power allotments rather than sprint goals.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "grok-4-7",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "By 2046 an EU-led care-contribution rule for high earners in automatable jobs—a 5% income levy or 120 verified hours a year—is enforced on cross-border contracts; to keep EU clients and Schengen work travel you must either give up roughly a month of net pay or log evening care shifts through a digital identity wallet.",
          status: "sealed",
          comment: ""
        },

        // ── Qwen 3.8 Flash (2026-11-21) ────────────────────────────
        {
          modelId: "qwen-3-8-flash",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "Swiss federal agencies and at least two major banks begin mandatory AI-usage logging for contractors, and a EU-adequacy-linked dispute over the revised DSFG forces Swiss dev shops to self-certify LLM pipelines by 2028. Freelance rates for juniors visibly crater while senior AI-integration contractors command record day rates.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "qwen-3-8-flash",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "The revised CO2 ordinance bites: cantons from Zürich to Geneva enforce building-renovation and heat-pump mandates with fines, and office landlords retrofit or lose tenants — software campuses in Zürich West and Genève-Biocampus start advertising 'EU-taxonomy-compliant' compute and floorspace as a hiring lure. Simultaneously, Swiss electricity tariffs jump 30%+ as grid upgrades and Alpine solar push-through costs hit households.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "qwen-3-8-flash",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "Switzerland's foreign-worker permits become the scarce asset: with AI absorbing routine dev work and EU-Swiss relations renegotiated into sectoral deals, IT contractors from Germany and Italy flood across the border under new bilateral protocols, and domestic 45+ engineers pivot en masse into oversight, security, and physical-automation roles. EPFL and ETH overhaul CS curricula around verification and human-AI teaming after youth tech-unemployment briefly tops 15%.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "qwen-3-8-flash",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "A warm, dry Swiss plateau forces the first inter-cantonal water-rights disputes, hydropower 'water insurance' schemes, and summer work-from-home mandates during lethal heat waves in Basel and Geneva — Swiss apartments are valued by cooling and shade, not view. Direct democracy is used to vote on national AI-labor policy three times, and Switzerland's bank secrecy is long dead, replaced by a quiet niche as the world's premier jurisdiction for verified human-made code and data provenance.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "qwen-3-8-flash",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "A major US or European enterprise suffers a breach or outage traced to an autonomous AI agent gone wrong, triggering the first wave of 'agentic liability' insurance exclusions and forcing every software shop to rebuild audit trails. The US CHIPS-era buildout collides with grid queues: data center power contracts start pricing electricity like oil, and one hyperscaler publicly reroutes a model training run to Iceland or Norway purely for megawatts.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "qwen-3-8-flash",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "China's demographic cliff and AI manufacturing push combine: factory automation exports become Beijing's top geopolitical lever, and the first G7 country mandates human-review of all AI-written code in critical infrastructure. A tier-2 Swiss or EU city becomes a global AI compute hub solely because it can promise cheap firm hydro/nuclear power with fast grid connection.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "qwen-3-8-flash",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "The engineer population pyramid inverts: China, Japan, Korea, and Italy face critical software-workforce shortages and begin recruiting mid-career Western engineers with fast-track visas and six-figure relocation packages. Coding becomes a licensed-profession analog — 'responsible AI engineer' certifications are contractually required in US and EU government-adjacent procurement, and unverified AI-generated code is uninsurable.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "qwen-3-8-flash",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "Climate migration and AI-driven deflation of white-collar wages collide: large parts of the global south's youth boom have leapfrogged into AI-augmented work, while Western middle-class engineers live materially below their parents — a political earthquake that ends the Anglo-Saxon tech-optimist consensus. The energy transition's real winner is small modular fission and ultra-deep geothermal, and the single most valuable career skill of the 2040s is orchestrating autonomous systems that maintain physical infrastructure humans no longer touch.",
          status: "sealed",
          comment: ""
        },

        // ── Mistral Large 4 (2026-11-21) ───────────────────────────
        {
          modelId: "mistral-large-4",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "By mid-2027 the SNB cuts rates back below zero as safe-haven franc inflows surge in the US–China tariff war, pushing new 10-year fixed mortgages under 1% — while layoffs begin in pharma, watches, and machinery exporters.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "mistral-large-4",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "By 2029, after deadly heat summers break over-75 mortality records in Swiss cities, the Confederation mandates air conditioning in all new buildings and adds a 30–50% climate-risk surcharge to building insurance premiums in Ticino, Valais, and Geneva.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "mistral-large-4",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "By 2036, nursing shortages and cantonal deficits force the closure or merger of roughly half of Switzerland's ~280 hospitals, so emergency care in rural cantons routinely means 60+ minute ambulance or Rega helicopter transfers.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "mistral-large-4",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "By 2046, agentic AI has eliminated most routine coding jobs and Switzerland passes the world's first national 'robot tax' referendum, funding a universal basic income that every salaried engineer — including you — pays into.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "mistral-large-4",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "By end-2027 the tariff war triggers a sovereign debt scare: 10-year US Treasury yields above 6%, a 30%+ global equity correction, and the franc spiking below 0.85 per dollar, repricing every internationally exposed portfolio.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "mistral-large-4",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "By 2029, AI coding agents write the majority of production code at large tech firms and entry-level software engineering hiring worldwide has collapsed by more than half — the junior developer career ladder largely disappears.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "mistral-large-4",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "By 2036, data centers consume over 1,500 TWh globally and Ireland, the Netherlands, and Singapore have banned new builds — cloud compute becomes carbon-rationed and priced, reshaping where and how you deploy software.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "mistral-large-4",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "By 2046, extreme heat makes parts of Phoenix, Dhaka, or the Gulf officially uninhabitable in summer, triggering the first mass climate migration into Europe — Switzerland adopts a federal climate-migrant quota that reshapes its housing and labor markets.",
          status: "sealed",
          comment: ""
        },

        // ── DeepSeek-V4 Pro (2026-11-21) ───────────────────────────
        {
          modelId: "deepseek-v4-pro",
          date: "2026-11-21",
          scope: "CH",
          horizon: "1Y",
          prediction: "The SNB cuts again in 2027 and the mortgage reference rate sinks to an all-time-low 1.00%: your rent legally falls 2.91%, but only if you send the registered claim within the deadline — so your landlord banks your silence, as most tenants never file.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "deepseek-v4-pro",
          date: "2026-11-21",
          scope: "CH",
          horizon: "3Y",
          prediction: "Bilaterals III fails at the 2028 ballot box over the dynamic-alignment 'guillotine' clause; the EU retaliates by not renewing Swiss data adequacy, so your employer opens an EU data hub and every feature touching customer data now ships under two legal regimes.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "deepseek-v4-pro",
          date: "2026-11-21",
          scope: "CH",
          horizon: "10Y",
          prediction: "By 2036 data-centre and heat-pump winter demand outruns Swiss hydro, so the grid operator switches on automated, price-signalled curtailment of EV chargers and heat pumps: your car stops charging on cold weekday evenings unless you pay a triple winter-peak tariff.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "deepseek-v4-pro",
          date: "2026-11-21",
          scope: "CH",
          horizon: "20Y",
          prediction: "With barely two workers per retiree by 2046, Switzerland means-tests the 13th AHV pension and links your statutory retirement age to life expectancy: your pension statement now assumes 69 and your second-pillar payout is quietly recalculated downward.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "deepseek-v4-pro",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "1Y",
          prediction: "On 2 August 2027 the EU AI Act's high-risk obligations snap into force, and because your employer sells AI features into the EU, compliance — logging, human oversight, post-market monitoring — replaces feature work at the top of your backlog.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "deepseek-v4-pro",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "3Y",
          prediction: "By 2029 power, not chips, becomes the binding constraint on AI: hyperscalers lock up most new grid capacity and cloud GPU prices jump about 40% in a year, so your employer shelves its self-hosted models and tells you to squeeze more from small open-source ones.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "deepseek-v4-pro",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "10Y",
          prediction: "As Europe's working-age population contracts by over ten million, 'return-to-code' programs for retirees become the hottest dev pipeline: your employer shifts to 90%-time contracts with full pension accrual and pays senior engineers to stay past 67.",
          status: "sealed",
          comment: ""
        },
        {
          modelId: "deepseek-v4-pro",
          date: "2026-11-21",
          scope: "WORLD",
          horizon: "20Y",
          prediction: "By 2046 Mediterranean coastal assets become routinely uninsurable against heat and fire, and the repricing ripples into your Swiss pension fund's global real-estate sleeve: your annual statement books a 'climate repricing' haircut while the fund pivots into alpine water and cooling assets.",
          status: "sealed",
          comment: ""
        }
      ]
    }
  ]
};
