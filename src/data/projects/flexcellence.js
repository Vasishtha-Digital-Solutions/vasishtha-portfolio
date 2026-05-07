// ──────────────────────────────────────────────────────────────
// Flexcellence — Case Study Content Data
// Approved HTML mockup: flexcellence_portfolio_final.html (Case 005)
// Design metaphor: Warm editorial — cream canvas, orange accent,
// charcoal work section. Product feel: "personal health team
// in your pocket" told through an influencer campaign.
// Sections build one-by-one with user approval between each.
// ──────────────────────────────────────────────────────────────

export const flexcellenceData = {
  // ── Meta ──────────────────────────────────────────────
  slug: "flexcellence",
  title: "Flexcellence",
  caseNumber: "005",

  // Back-link + (placeholder) next project
  nextProject: {
    title: "TBD",
    slug: "",
    tagline: "",
  },

  // ── Shared brand palette (so sections stay in sync) ──
  // Matches :root tokens in flexcellence_portfolio_final.html
  palette: {
    orange: "#F97316",        // primary accent
    orange2: "#FB923C",       // lighter accent / gradient pair
    orangePale: "#FFF4EC",    // pale tint (hover surface)
    orangeSoft: "#FFE8D0",    // soft tint (avatar ring)
    cream: "#FDFAF6",         // page base
    warmWhite: "#FAF6F0",     // alt section bg
    charcoal: "#1C1410",      // primary text / dark sections
    brown: "#3D2B1F",         // body copy on cream
    muted: "#8B7355",         // secondary text
    border: "#EAE0D0",        // hairline dividers
    border2: "#D4C4B0",       // stronger divider
  },

  // ═════════════════════════════════════════════════════
  // SECTION 1 — HERO
  // Split editorial hero (1fr / 1.05fr). Cream left column,
  // warm-white right column with the "product demo" photo
  // and four floating UI cards (coach / macros / result /
  // steps) plus a bottom app-bar badge. Left contains:
  // — pulsing-dot pill ("Case Study · 2024")
  // — big serif H1 ("Your Personal")
  // — italic orange subtitle ("Wellness, Evolved.")
  // — lede
  // — 5 rounded service chips (with orange dots)
  // — 4-stat strip divided by top hairline
  // Right contains:
  // — radial orange glow behind the photo card
  // — main photo (4:5, rounded, white border, subtle
  //   bottom orange wash)
  // — 4 floating cards (absolutely positioned around photo)
  // — vertical sidebar label ("Flexcellence · 2024 Campaign")
  // ═════════════════════════════════════════════════════
  hero: {
    // Top-right pill shown in fixed nav
    navPill: "Influencer Campaign · Case Study 2024",

    // Orange-pale pulsing-dot chip above H1
    kicker: "Case Study · 2024",

    // H1 + italic subtitle (rendered as separate lines)
    headlineTop: "Your Personal",
    headlineItalic: "Wellness, Evolved.",

    // Lede under the italic subtitle
    lede:
      "How we made a holistic health coaching app — with real certified coaches, personalised nutrition, and medical support — feel approachable to everyday people through authentic influencer storytelling.",

    // 5 service chips (bullet dot + label)
    chips: [
      "Nutrition Coaching",
      "Expert Coaches",
      "Medical Support",
      "PCOS & Thyroid",
      "Weight Management",
    ],

    // 4-stat strip at the bottom of the left column
    stats: [
      { big: "15", label: "Influencers" },
      { big: "8M+", label: "Reach" },
      { big: "60", label: "Days" },
      { big: "4.9★", label: "App Rating" },
    ],

    // Main hero photo (right column)
    image: {
      src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=700&q=85",
      alt: "Wellness at home — Flexcellence app user tracking health",
    },

    // Sidebar vertical label
    sideLabel: "Flexcellence · 2024 Campaign",

    // Floating UI cards — positions match approved mockup
    cards: {
      // Top-left floating: coach profile
      coach: {
        name: "Swetha",
        role: "Clinical Nutritionist",
        avatarEmoji: "👩‍⚕️",
        statusText: "Active Now",
        specLead: "Specialises in",
        specStrong: "PCOS, Diabetes & Weight Loss",
      },
      // Right-middle floating: macros tracker
      macros: {
        heading: "Today's Macros",
        rows: [
          { label: "Protein", value: "145g", dot: "#F97316" },
          { label: "Carbs", value: "200g", dot: "#F5C842" },
          { label: "Fats", value: "65g", dot: "#CBD5E1" },
        ],
        // Target fill for the progress bar (0-100)
        fillPct: 72,
      },
      // Bottom app-bar overlay on the photo
      appBar: {
        avatarEmoji: "🌟",
        name: "Coach Check-in",
        sub: "Today at 11:00 AM with Swetha",
        badge: "Live",
      },
      // Bottom-left floating: result pill (dark)
      result: {
        emoji: "🎉",
        strong: "Lost 5kg in 2 weeks",
        sub: "— Krishna Prasad",
      },
      // Bottom-right floating: steps card
      steps: {
        emoji: "👣",
        num: "8,432",
        label: "Steps today",
      },
    },
  },

  // ═════════════════════════════════════════════════════
  // SECTION 2 — MARQUEE STRIP (placeholder — built in its
  // own checkpoint).
  // ═════════════════════════════════════════════════════
  marquee: {
    items: [
      "Holistic Wellness",
      "Nutrition Coaching",
      "PCOS Management",
      "Certified Coaches",
      "Medical Consultations",
      "Diabetes Care",
      "Weight Management",
      "Influencer Campaign",
    ],
    durationSec: 30,
  },

  // ═════════════════════════════════════════════════════
  // SECTION 3 — THE WORK (placeholder — built in its own
  // checkpoint). Charcoal bg, eyebrow + headline, 3 service
  // cards, 4-step approach with connector line.
  // ═════════════════════════════════════════════════════
  work: {
    eyebrow: "Section 02 · The Work",
    headlineStart: "What we built",
    headlineAccent: "& how we built it",
    intro:
      "Flexcellence isn't a gym app. It's a personal health team in your pocket — combining certified nutrition coaches, fitness trainers, and medical professionals. Our campaign had one job: make that feel real and reachable for everyday people.",

    services: [
      {
        icon: "🥗",
        title: "Nutrition Plans",
        desc: "Certified nutritionists design macro-balanced meal plans personalised to your body, goals, and medical conditions.",
        chips: ["PCOS", "Diabetes", "Thyroid", "Maternal", "Weight Loss"],
      },
      {
        icon: "🏃",
        title: "Fitness Coaching",
        desc: "Custom workout routines from certified trainers built for your lifestyle, body type, and health conditions — not a one-size-fits-all plan.",
        chips: ["Prenatal", "Postnatal", "Rehab", "Fat Loss", "Strength"],
      },
      {
        icon: "🩺",
        title: "Medical Support",
        desc: "Certified medical professionals integrate real health data — food reactive tests, full body tests — into your wellness journey.",
        chips: ["Expert Consults", "Health Check-ins", "Body Tests"],
      },
    ],

    approachLabel: "Our Campaign Approach",
    steps: [
      {
        num: "01",
        title: "Cast for authenticity",
        desc: "Chose influencers who genuinely managed PCOS, diabetes, or weight — their audiences trusted them because they'd lived it.",
      },
      {
        num: "02",
        title: "Show the coach relationship",
        desc: "Content focused on real check-in moments — video calls, tracking meals, getting personal plans. Not workouts. Connection.",
      },
      {
        num: "03",
        title: "Home environments only",
        desc: "Kitchens. Living rooms. Lunch breaks. The message: you don't need a gym. You just need Flexcellence.",
      },
      {
        num: "04",
        title: "Micro first, macro amplify",
        desc: "Niche wellness creators drove 3× more saves than mega-reach posts. Trust outperformed scale every time.",
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 4 — THE OUTCOME (placeholder — built in its
  // own checkpoint). Cream bg, pull-quote + 4 metrics + 3
  // testimonial cards.
  // ═════════════════════════════════════════════════════
  outcome: {
    eyebrow: "Section 03 · The Outcome",
    headlineLines: ["People finally", "saw themselves"],
    headlineAccent: "in the brand",

    pullQuote:
      "I showed my followers how I check in with my Flexcellence nutritionist every morning with my coffee. They messaged saying they downloaded the app that same day. It didn't feel like an ad — it felt like sharing something that genuinely helped me manage my PCOS.",
    pullAttrName: "Jordan M.",
    pullAttrMeta: "@fitwithjordan · 2.4M followers",

    metrics: [
      { num: "8M+", label: "Total Impressions", sub: "Across 60 days", accent: true },
      { num: "4.7%", label: "Avg Engagement Rate", sub: "Industry avg: 1.2%", accent: false },
      { num: "↑63%", label: "Brand Familiarity Lift", sub: "Post-campaign survey", accent: true },
      { num: "240+", label: "Content Pieces Live", sub: "Reels · TikToks · Shorts", accent: false },
    ],

    testimonials: [
      {
        quote: "My PCOS community responded like nothing I'd seen before. They finally felt seen — a platform built for exactly their struggles, shown through someone who understood.",
        name: "Priya S.",
        handle: "@movewithpriya · 680K",
        avatar: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=100&q=80",
        featured: true,
      },
      {
        quote: "Showing real check-ins with my coach made it feel human. That's what wellness content has been missing.",
        name: "Jordan M.",
        handle: "@fitwithjordan · 2.4M",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
        featured: false,
      },
      {
        quote: "As a busy mum I never thought wellness coaching was for me. Flexcellence changed that completely.",
        name: "Meera K.",
        handle: "@homewellnessmom · 87K",
        avatar: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=100&q=80",
        featured: false,
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 5 — FOOTER
  // Charcoal bg. Left brand block (star + Flexcellence +
  // tagline). Right CTA ("Let's build your next campaign"
  // with orange italic "campaign" + orange pill button).
  // Bottom row: © line + service tag list.
  // ═════════════════════════════════════════════════════
  footer: {
    brand: {
      name: "Flexcellence",
      tagline:
        "Empowering people to live healthier lives through technology and expert human guidance.",
    },
    cta: {
      kicker: "Like what you see?",
      headStart: "Let's build your",
      headEnd: "next",
      headAccent: "campaign",
      buttonText: "Start a Project →",
    },
    copy: "© 2024 Studio Portfolio. All rights reserved.",
    tags: ["Influencer Marketing", "Holistic Wellness", "Brand Awareness"],
  },
};
