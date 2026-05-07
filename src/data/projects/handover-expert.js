// ──────────────────────────────────────────────────────────────
// Handover Expert — Case Study Content Data
// Approved HTML mockup: handover_expert_v2.html (Case 006)
// Design metaphor: Architectural blueprint / inspection report —
// ink canvas with gold accents, technical type, measurement
// ruler, paper document sections. Product: home-inspection
// awareness campaign that built a new category in Hyderabad.
// Sections build one-by-one with user approval between each.
// ──────────────────────────────────────────────────────────────

export const handoverExpertData = {
  // ── Meta ──────────────────────────────────────────────
  slug: "handover-expert",
  title: "Handover Expert",
  caseNumber: "006",

  // Back-link + (placeholder) next project
  nextProject: {
    title: "TBD",
    slug: "",
    tagline: "",
  },

  // ── Shared brand palette (so sections stay in sync) ──
  // Matches :root tokens in handover_expert_v2.html
  palette: {
    ink: "#0A0E17",          // primary dark background
    navy: "#0F2144",          // secondary dark / accent section
    gold: "#F5C200",          // primary accent (NOT orange)
    gold2: "#FFD740",         // lighter accent / hover
    paper: "#F0EDE6",         // document cream background
    paper2: "#E8E4DB",        // softer cream / borders
    concrete: "#C8C4BA",      // muted grey / text
    rust: "#D64E12",          // warning accent
    green: "#16A34A",         // pass status
    red: "#DC2626",           // fail status
    greenLight: "#4ADE80",    // pass badge text
    redLight: "#F87171",      // fail badge text
  },

  // ── Typography stack ──
  fonts: {
    cond: "'Barlow Condensed', sans-serif",   // display type
    body: "'Barlow', sans-serif",              // body copy
    mono: "'Space Mono', monospace",           // technical labels
  },

  // ═════════════════════════════════════════════════════
  // NAV (fixed top bar — shared across case study)
  // 52px tall, ink background, gold bottom border.
  // Left: star mark + "Handover Expert" wordmark.
  // Center: mono ticker text.
  // Right: blinking gold dot + CS-006 tag.
  // ═════════════════════════════════════════════════════
  nav: {
    brand: "Handover Expert",
    ticker: "CASE STUDY — AWARENESS CAMPAIGN · 2024 — HYDERABAD",
    tickerAccent: "AWARENESS CAMPAIGN · 2024",
    tag: "CS–006",
  },

  // ═════════════════════════════════════════════════════
  // SECTION 1 — HERO
  // Full-bleed blueprint stage. Top ruler with px measurement
  // marks, faint blueprint grid background.
  // Left (55%): case label chip · GIANT 3-line display type
  //   ("The / Hidden / Truth" with outline + gold underline) ·
  //   bottom bar with descriptive lede + 2 stat cards.
  // Right (45%): "Property Inspection Report" panel with
  //   gold header, 6 numbered rows with pass/warn/fail status
  //   badges, and red defect count footer. Below: 2 corner-
  //   bracketed annotation cards (Homes Inspected · Avg defects).
  // ═════════════════════════════════════════════════════
  hero: {
    caseLabel: "Awareness Campaign · Influencer Strategy · 2024",

    // 3-line display type — solid / outline / gold+underline
    displayLine1: "The",
    displayLine2: "Hidden",   // outlined (transparent fill, 1px stroke)
    displayLine3: "Truth",    // solid gold with underline bar

    // Lede under the display type
    lede:
      "How we built awareness for a service most people in Hyderabad had never heard of — by showing them problems they didn't know they had inside their own homes.",

    // Left-bottom mini stats (2 cards divided by hairline)
    leftStats: [
      { num: "30K", label: "Followers built" },
      { num: "3×", label: "Enquiry lift" },
    ],

    // Right-side inspection report panel
    report: {
      title: "Property Inspection Report",
      id: "HE/GCB/2024/047",
      rows: [
        { n: "01", name: "Structural Integrity", status: "pass", badge: "✓ PASS" },
        { n: "02", name: "Electrical Systems", status: "warn", badge: "⚠ 2 ISSUES" },
        { n: "03", name: "Plumbing & Fixtures", status: "fail", badge: "✗ CRITICAL" },
        { n: "04", name: "Dampness & Leaks", status: "fail", badge: "✗ 3 AREAS" },
        { n: "05", name: "Area Measurement", status: "warn", badge: "⚠ −42 SQ FT" },
        { n: "06", name: "Construction Quality", status: "pass", badge: "✓ PASS" },
      ],
      footerLabel: "Defects requiring action",
      footerValue: "6",
    },

    // Corner-bracketed annotation cards (right column bottom)
    annotations: [
      {
        label: "Homes Inspected",
        value: "500+",
        sub: "Since launch",
      },
      {
        label: "Avg defects / home",
        value: "8.4",
        sub: "Most missed at handover",
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 2 — THE WORK (placeholder, built next)
  // Paper section. Stamp-style "06" header + italic title.
  // 3-column problem grid with SVG icons.
  // Dark-bg 4-step horizontal timeline.
  // ═════════════════════════════════════════════════════
  work: {
    stampNumber: "06",
    stampLabel: "The Work · Campaign Strategy",
    stampTitleTop: "Creating Awareness",
    stampTitleMid: "for a",
    stampTitleEm: "Category",
    stampTitleBottom: "That Didn't Exist Yet",

    // 3 problem cards — SVG icons replace emojis per brand rules
    problems: [
      {
        num: "PROBLEM 01",
        icon: "dampness",      // SVG key — resolved in component
        title: "Hidden Dampness",
        body:
          "Moisture behind plastered walls is invisible at possession. Within months it surfaces as mould, structural damage, and repairs costing ₹2–5 lakhs. Buyers had no idea it was there.",
      },
      {
        num: "PROBLEM 02",
        icon: "measure",
        title: "Missing Square Feet",
        body:
          "Builders routinely deliver 30–60 sq ft less than agreed. Without professional measurement, buyers never know. They paid for space they never received.",
      },
      {
        num: "PROBLEM 03",
        icon: "wiring",
        title: "Faulty Wiring",
        body:
          "Electrical faults hidden behind finished walls become fire hazards months later. By then, the builder's liability has expired. The homeowner carries the full cost.",
      },
    ],

    // Dark-bg strategy block
    strategy: {
      label: "Our Approach",
      titleTop: "Awareness",
      titleEm: "Before",
      titleBottom: "Sales",
      intro:
        "You can't sell a solution to someone who doesn't know they have a problem. So we led with the problem — always.",
      steps: [
        {
          n: "01",
          title: "Show The Problem",
          body:
            "Content that revealed the hidden issues every new homebuyer faces — things they'd experienced but never had words for.",
        },
        {
          n: "02",
          title: "Create The Moment",
          body:
            "Once the audience felt the problem, we introduced the inspection concept simply and practically. Never salesy.",
        },
        {
          n: "03",
          title: "Influencers Explain",
          body:
            "Real Hyderabadi homeowners sharing their inspection experience. Relatable voices, not corporate messaging.",
        },
        {
          n: "04",
          title: "Build Trust Slowly",
          body:
            "Consistent presence, real reports, real finds. Handover Expert became the trusted authority on home inspection in Hyderabad.",
        },
      ],
    },
  },

  // ═════════════════════════════════════════════════════
  // SECTION 3 — THE OUTCOME (placeholder, built later)
  // ═════════════════════════════════════════════════════
  outcome: {
    // Split hero — ink left / gold right
    splitLeft: {
      line1: "People",
      line2: "Finally",
      line3: "Noticed",   // outlined
    },
    splitRight: {
      quote:
        'They didn\'t just discover a service. They discovered a problem they already had.',
      quoteEm: "problem they already had.",
      body:
        'That shift — from unawareness to urgency — is what awareness-first marketing creates. Not just reach. Recognition. The moment someone says: "Wait, has this happened to me?" — you\'ve won.',
    },
    // 4 bold metric cards with navy hover
    metrics: [
      { num: "30K+", label: "Instagram Followers", sub: "Built from zero" },
      { num: "3×", label: "Enquiry Growth", sub: "Campaign period" },
      { num: "500+", label: "Homes Inspected", sub: "Since launch" },
      { num: "0→1", label: "Category Created", sub: "First mover · Hyderabad" },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 4 — TESTIMONIALS (placeholder)
  // Newspaper-column layout — big quote left, two cards right.
  // ═════════════════════════════════════════════════════
  testimonials: {
    featured: {
      text:
        "WE ALMOST SIGNED OFF ON 6 DEFECTS. THE BUILDER FIXED EVERYTHING BEFORE WE MOVED IN.",
      author: "Rahul & Priya M.",
      meta: "New homeowners, Gachibowli",
    },
    more: [
      {
        text:
          "I saw a reel about how builders deliver less carpet area. Got an inspection — my flat was 41 sq ft short. Handover Expert saved me from accepting it silently.",
        author: "Srikanth V.",
        meta: "Property investor, Hyderabad",
      },
      {
        text:
          "The dampness behind our bathroom wall would've cost us ₹3 lakhs in repairs. The inspector caught it in 10 minutes. Worth every rupee.",
        author: "Meghana & Aditya K.",
        meta: "First-time homeowners",
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 5 — FOOTER (placeholder)
  // Ink bg + gold top border. Left: giant "Handover / Expert"
  // wordmark + tagline. Right: CTA text + gold button.
  // Bottom strip: copyright + tag row.
  // ═════════════════════════════════════════════════════
  footer: {
    wordmarkTop: "Handover",
    wordmarkBottom: "Expert",
    tagline: "Inspecting today · Securing tomorrow",
    ctaText: "Want a campaign like this for your brand?",
    ctaLabel: "Start a Project",
    copy: "© 2024 Studio Portfolio. All rights reserved.",
    tags: ["Awareness Marketing", "Influencer Strategy", "Category Creation"],
  },
};

export default handoverExpertData;
