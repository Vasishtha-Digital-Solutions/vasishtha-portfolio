// ──────────────────────────────────────────────────────────────
// Yellow Wall Interiors — Case Study Content Data
// Approved HTML mockup: ywi-case-study.html (Case 003)
// Design metaphor: Editorial dark-warm magazine feature
// Sections build one-by-one with user approval between each.
// ──────────────────────────────────────────────────────────────

export const ywiData = {
  // ── Meta ──────────────────────────────────────────────
  slug: "yellow-wall-interiors",
  title: "Yellow Wall Interiors",
  caseNumber: "003",

  // Back-link + (placeholder) next project
  nextProject: {
    title: "TBD",
    slug: "",
    tagline: "",
  },

  // ── Shared brand palette (so sections stay in sync) ──
  // Matches :root tokens in ywi-case-study.html
  palette: {
    bg: "#141210",       // page base
    bg2: "#1a1714",      // alt section bg
    bg3: "#231f1a",      // deeper layer
    card: "#1e1b17",     // card surface
    surface: "#2a2520",  // elevated surface / hover
    cream: "#F2EDE6",    // primary text
    cream2: "#D4CFC8",   // secondary text
    cream3: "#9B958D",   // muted / mono caps
    yellow: "#FFC83C",   // signature accent
    ydim: "#BF962E",     // dim yellow
    yglow: "rgba(255,200,60,0.12)", // accent wash
    wood: "#5a4228",     // warm wood accent (texture)
    line: "rgba(242,237,230,0.08)", // hairline dividers
  },

  // ═════════════════════════════════════════════════════
  // SECTION 1 — HERO
  // Editorial dark hero with right-side interior photo +
  // cinematic gradient mask. Left column contains:
  // badge (yellow dot + wordmark), mono meta row, big H1
  // with yellow accent line, short yellow underline bar,
  // lede, 4-stat strip with hairline dividers, tag chips.
  // ═════════════════════════════════════════════════════
  hero: {
    // Rounded yellow-ringed dot + wordmark (top-left badge)
    badge: "YELLOW WALL INTERIORS",

    // Monospace meta row — "CASE STUDY / 003 / ORGANIC CONTENT / 2026"
    meta: ["CASE STUDY", "003", "ORGANIC CONTENT", "2026"],

    // H1 splits into 3 lines; middle line highlighted in yellow.
    // Rendered as <span className="block"> in the component.
    headline: [
      { text: "Zero ad spend." },
      { text: "10K followers", accent: true }, // yellow line
      { text: "in 30 days." },
    ],

    // Italic lede under the yellow underline bar
    lede:
      "How we built Yellow Wall Interiors' Instagram from scratch — with nothing but content that homeowners actually wanted to watch.",

    // 4-stat strip — kicker / big value / footnote
    stats: [
      { kicker: "FOLLOWERS", big: "10.5K", foot: "From zero, organic" },
      { kicker: "AD SPEND", big: "₹0", foot: "Pure content strategy" },
      { kicker: "TIMELINE", big: "30", foot: "Days to 10K" },
      { kicker: "POSTS", big: "65", foot: "Reels + static" },
    ],

    // Tag chips at the very bottom of the hero
    tags: ["ORGANIC", "TELUGU", "REELS", "INSTAGRAM"],

    // Hero illustration — lives in public/ywi-interior.jpeg
    image: {
      src: "/ywi-interior.jpeg",
      alt: "Modern luxury interior with warm lighting and wood finishes",
    },
  },

  // ═════════════════════════════════════════════════════
  // SECTION 2 — MARQUEE STRIP
  // Full-bleed yellow band that scrolls horizontally. 6px
  // ink dots separate each phrase. Dark ink on yellow.
  // Items duplicated in the component for seamless loop.
  // ═════════════════════════════════════════════════════
  marquee: {
    items: [
      "10K followers in 30 days",
      "₹0 ad spend",
      "65 posts published",
      "Pure organic growth",
      "Telugu-first content",
      "Consistent lead generation",
    ],
    durationSec: 45, // full cycle time
  },

  // ═════════════════════════════════════════════════════
  // SECTION 3 — BRIEF (Chapter 01)
  // Chapter header: italic "01" numeral (yellow) + mono
  // label. Two-line h2 with yellow accent phrase. Italic
  // lede. Then a 3-card grid — each card has a yellow-glow
  // icon disc, symbol (0 / ! / ₹), h3 title, dim body copy.
  // Card hover: yellow top-bar grows, border tints yellow.
  // ═════════════════════════════════════════════════════
  brief: {
    chapter: { num: "01", label: ["THE BRIEF", "/ what we walked into"] },

    // h2 splits around yellow accent phrase
    headlineStart: "A brand-new page in a market where every interior firm",
    headlineAccent: "runs ads.",

    lede:
      "Yellow Wall Interiors had the craft but no digital presence. Zero followers, zero content, zero leads from Instagram. Every competitor was buying attention. We chose to earn it.",

    cards: [
      {
        symbol: "0",
        title: "Starting from zero",
        body:
          "No followers, no content library, no pixel data. A blank page with a logo and ambition.",
      },
      {
        symbol: "!",
        title: "Crowded market",
        body:
          "Hyderabad + Nellore are saturated with interior firms. All running Meta ads. All saying the same things.",
      },
      {
        symbol: "₹",
        title: "No ad budget",
        body:
          "No spend on paid promotion. Every follower, every lead, every DM had to be earned through content alone.",
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 4 — THE SYSTEM (Chapter 02)
  // Alternate dark-warm bg (palette.bg2). Chapter header
  // like Section 01. Two-line h2 with yellow accent phrase.
  // Italic lede. Then a 4-cell horizontal loop (single
  // rounded rectangle, hairline dividers between cells,
  // yellow "→" arrow on each divider except the last).
  // Cell contents: italic yellow numeral, label, description.
  // Footnote: "↺ EVERY REEL FOLLOWS THIS LOOP"
  // ═════════════════════════════════════════════════════
  system: {
    chapter: { num: "02", label: ["THE SYSTEM", "/ how every reel was built"] },

    headlineStart: "Four steps. Every reel.",
    headlineAccent: "No exceptions.",

    lede:
      "We didn't post randomly. Every single piece of content followed the same architecture — a loop designed to build trust, demonstrate expertise, and convert viewers into leads.",

    steps: [
      {
        num: "01",
        name: "Hook",
        desc:
          "Open with a problem the homeowner already has. Speak in Telugu. Sound like a friend, not a brand.",
      },
      {
        num: "02",
        name: "Educate",
        desc:
          "Teach something real — laminates, veneers, counter tops, layouts. Give them knowledge they can use.",
      },
      {
        num: "03",
        name: "Prove",
        desc:
          "Show the work. Before/after. Raw progress. Real materials. No stock photos, no renders.",
      },
      {
        num: "04",
        name: "Convert",
        desc:
          "End with a keyword CTA — \u201CPRICE ani comment cheyandi.\u201D Comments trigger DM conversations.",
      },
    ],

    footnote: "\u21BA EVERY REEL FOLLOWS THIS LOOP",
  },

  // ═════════════════════════════════════════════════════
  // SECTION 5 — THE CTA ENGINE (Chapter 03)
  // Back on palette.bg (alternating rhythm). Chapter header,
  // headline with yellow accent phrase ("opened a
  // conversation."), italic lede. Centred "device" card:
  // ─ Window chrome: 3 traffic-light dots + centred handle
  // ─ Reel preview: gradient bg, yellow play-triangle, italic
  //   reel caption + reel meta
  // ─ Comments list: 3 comments w/ avatar dots + user + "STONE"
  //   keyword highlight (yellow chip)
  // ─ Footer strip: "COMMENT TRIGGERS DM WITH PRICING"
  // ═════════════════════════════════════════════════════
  ctaEngine: {
    chapter: { num: "03", label: ["THE CTA ENGINE", "/ how content became leads"] },

    headlineStart: "Every reel ended with one word. That word",
    headlineAccent: "opened a conversation.",

    lede:
      "We designed a keyword-triggered DM system. Viewers comment a specific word, YWI responds with pricing and details. The comment itself is the lead.",

    // Account handle shown centred in the window chrome
    handle: "@THEYELLOWWALLINTERIORS",

    // Traffic-light window-control dots (left of chrome bar)
    trafficLights: ["#E24B4A", "#FFC83C", "#5DCF5D"],

    // Reel preview body
    reel: {
      caption: "\u201CCounter top ni replace cheskodam is expensive\u2026\u201D",
      meta: "REEL 03 \u00B7 Counter top materials",
    },

    // Comment list with keyword highlight
    keyword: "STONE",
    comments: [
      { user: "homeowner_hyd", before: "", after: "" },
      { user: "priya.interiors", before: "", after: " please share details" },
      { user: "ravi_nellore", before: "", after: "" },
    ],

    footerLine: "COMMENT TRIGGERS DM WITH PRICING",
  },

  // ═════════════════════════════════════════════════════
  // SECTION 6 — THE RESULTS (Chapter 04)
  // Back on palette.bg2 (alternating). Soft yellow radial
  // glow centred high in the section. Chapter header,
  // 2-line h2 with yellow accent on the big number, then
  // a 7-bar weekly growth chart (last bar yellow + "NOW"
  // label) with W1 → W7+ axis labels, and a 3-card stat
  // grid below. The first stat card animates a counter
  // from 0 → 10,500 with Indian-locale commas.
  // ═════════════════════════════════════════════════════
  results: {
    chapter: { num: "04", label: ["THE RESULTS", "/ what 30 days built"] },

    // h2 splits across 2 lines; the big number gets yellow
    headlineStart: "From zero to",
    headlineAccent: "10,500 followers.",
    headlineEnd: "Without spending a single rupee.",

    // 7 weekly bars — height is a % of chart-area height
    bars: [
      { week: "W1", value: "0.2K", height: 6 },
      { week: "W2", value: "0.8K", height: 14 },
      { week: "W3", value: "2.4K", height: 30 },
      { week: "W4", value: "5.1K", height: 55 },
      { week: "W5", value: "7.8K", height: 78 },
      { week: "W6", value: "9.2K", height: 92 },
      { week: "NOW", value: "10.5K", height: 100, highlight: true },
    ],
    // Axis labels under the chart
    axis: { left: "WEEK 1", right: "WEEK 7+" },

    // 3 result cards
    stats: [
      // First card uses the animated counter (0 → 10500, IN locale commas)
      { kind: "counter", target: 10500, comma: true, label: "FOLLOWERS" },
      { kind: "static", value: "₹0", label: "AD SPEND" },
      { kind: "static", value: "30", label: "DAYS" },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 7 — TAKEAWAY (editorial closer)
  // Centred, on palette.bg2. A small yellow dot (opacity .6)
  // sits above the pull-quote. Quote is italic DM Serif;
  // the phrase "content worth watching." inside flips to
  // upright yellow (em → non-italic + yellow per mockup).
  // Endmark below: mono caps with wide tracking.
  // ═════════════════════════════════════════════════════
  takeaway: {
    quote: {
      lead: "You don't need a budget to build an audience.",
      start: "You need ",
      accent: "content worth watching.",
    },
    endMark: "\u2014 END OF CASE \u00B7 YWI-003-2026 \u2014",
  },
};
