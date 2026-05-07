// ──────────────────────────────────────────────────────────────
// One Day Stories — Case Study Content Data (Case 007)
// Approved HTML mockup: one_day_stories_fixed2.html
// Design metaphor: Cinematic film / wedding editorial.
// Dark ink base, burgundy accent, champagne gold highlights,
// ivory cream for the light "Work" section. Film-grain overlay,
// aperture mark, film-strip header, Cormorant Garamond italic
// for display — DM Sans body — Space Mono labels.
// Product: performance marketing for a boutique wedding
// photography studio — emotion + funnel = 10 weddings closed,
// 1M account reach.
//
// Sections are built progressively; page mounts them one-by-one
// as each is approved by the user.
// ──────────────────────────────────────────────────────────────

export const oneDayStoriesData = {
  // ── Meta ──────────────────────────────────────────────
  slug: "one-day-stories",
  title: "One Day Stories",
  caseNumber: "007",

  // Back-link + (placeholder) next project
  nextProject: {
    title: "TBD",
    slug: "",
    tagline: "",
  },

  // ── Shared cinematic palette (so sections stay in sync) ──
  // Matches :root tokens in one_day_stories_fixed2.html
  palette: {
    black: "#0D0A09",       // primary dark background
    deep: "#1A1410",         // secondary dark / outcome section
    burgundy: "#6B1E2E",     // marquee / accent
    rose: "#C4566A",         // live-pulse / micro-accent
    champagne: "#E8D5B0",    // primary gold/italic accent
    ivory: "#FAF6EF",        // light section background
    warmGray: "#8C8178",     // muted text on ivory
    border: "rgba(232,213,176,0.15)",
    border2: "rgba(232,213,176,0.30)",
  },

  // ── Typography stack ──
  fonts: {
    display: "'Cormorant Garamond', serif",   // editorial title + italic
    body: "'DM Sans', sans-serif",             // body copy
    mono: "'Space Mono', monospace",           // labels / film meta
  },

  // ═════════════════════════════════════════════════════
  // NAV (fixed top bar — transparent gradient overlay)
  // Left: aperture mark (Lucide Aperture) + italic "One Day
  // Stories" wordmark in champagne + back arrow to /projects.
  // Right: mono meta tag "Performance Campaign · Case Study 2024".
  // ═════════════════════════════════════════════════════
  nav: {
    brand: "One Day Stories",
    meta: "Performance Campaign · Case Study 2024",
    tag: "CS–007",
  },

  // ═════════════════════════════════════════════════════
  // SECTION 1 — HERO
  // Full-bleed cinematic wedding photo with dark vertical
  // gradient. Top: 52px film-strip band with 8 film holes
  // and "Frame 001 — One Day Stories · 2024" meta text.
  // Bottom-left: live pulse dot + tag, massive editorial
  // title ("Every Moment" ivory / "Has a Story." italic
  // champagne), description + 3 stats. Right: vertical
  // scroll cue with animated line. Film-grain SVG overlay
  // on top of everything.
  // ═════════════════════════════════════════════════════
  hero: {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=85",
    imageAlt: "Wedding couple moment, backlit golden hour",

    // Small pulsing tag above title
    kicker: "Performance Marketing · Wedding Photography",

    // 2-part editorial title
    titleTop: "Every Moment",
    titleItalic: "Has a Story.",

    // Subtitle / lede
    lede:
      "How we helped a boutique photography studio close 10 weddings through clarity-first content and performance campaigns — reaching 1 million accounts while turning emotion into conversion.",
    ledeEm: "10 weddings", // phrase that renders in champagne italic inside the lede

    // 3 hero stats (no icons, numeric-first)
    // "6 MO" replaces the earlier "∞ Memories Captured" placeholder —
    // vague poetic stats undercut the credibility of the real numbers.
    // Three real data points: outcome (10), reach (1M), effort (6 MO).
    stats: [
      { num: "10", label: "Weddings Closed", countTo: 10 },
      { num: "1M", label: "Account Reach" },
      { num: "6 MO", label: "Campaign Run" },
    ],

    // Vertical scroll cue (right edge)
    scrollLabel: "Scroll",
  },

  // ═════════════════════════════════════════════════════
  // SECTION 2 — MARQUEE (placeholder, built next)
  // Burgundy band, 8 italic keywords looping horizontally.
  // ═════════════════════════════════════════════════════
  marquee: {
    items: [
      "Wedding",
      "Candid",
      "Cinematic",
      "Kids",
      "Maternity",
      "Brands",
      "Timeless",
      "Performance Marketing",
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 3 — THE WORK (placeholder)
  // Ivory/cream section. Split editorial header, photo
  // mosaic + 4 approach items, then 4-column services row
  // with lucide icons (hover-to-dark).
  // ═════════════════════════════════════════════════════
  work: {
    eyebrow: "02 · The Work",
    title: "Emotion that",
    titleEm: "converts", // italic burgundy
    intro:
      "Most photography studios market their portfolio. We marketed the feeling. Couples don't hire photographers for their gear — they hire them because they felt something. Our entire campaign was built around that emotional truth, then backed by performance infrastructure that turned feeling into bookings.",

    // Portrait crop forced via Unsplash params (h=1200, fit=crop)
    // — landscape sources are reframed to 2:3 portrait so the
    // mosaic reads as a magazine spread rather than two letterbox
    // stills. Captions live below each photo as mono frame-marks.
    mosaic: [
      {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=1200&fit=crop&q=80",
        alt: "Wedding candid moment",
        label: "Wedding · Candid",
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop&q=80",
        alt: "Couple cinematic portrait",
        label: "Cinematic · Timeless",
      },
    ],

    // Tighter approach bodies (2 lines max) to reduce the
    // density of the right column and keep the section's
    // reading rhythm even on tablet where the columns stack.
    approach: [
      {
        n: "01 · Insight",
        title: "Couples buy feelings, not frames",
        body:
          "Our content led with moments — a bride's laugh, a father's tear — not specs or pricing. Emotional resonance was the hook.",
      },
      {
        n: "02 · Strategy",
        title: "Wedding-first targeting",
        body:
          "Focus narrowed to wedding-intent audiences: couples engaged, browsing venues, comparing vendors. No scatter, only precision.",
      },
      {
        n: "03 · Performance",
        title: "Lead funnels built to convert",
        body:
          "Every asset had a structured path — awareness reel to inquiry form. Designed to move warm prospects toward a booking call.",
      },
      {
        n: "04 · Consistency",
        title: "Every post had a purpose",
        body:
          "Every reel, story, carousel — mapped to inform, attract, or convert. Consistency built trust. Trust closed weddings.",
      },
    ],

    // Services row — lucide icon keys resolved in the component.
    // Weddings is tagged `core: true` so the component can weight
    // it visually (wider column + subtle "Core service" tag) —
    // the other three are supporting services.
    services: [
      {
        icon: "gem",
        title: "Weddings",
        core: true, // anchor service — wider column + "Core" tag
        body:
          "Candid, cinematic, timeless. Every moment from the first look to the last dance — captured with intention.",
      },
      {
        icon: "baby",
        title: "Kids",
        body:
          "Pure, unscripted joy. Children at their most natural — laughing, exploring, being exactly who they are.",
      },
      {
        icon: "flower",
        title: "Maternity",
        body:
          "The quiet wonder of expecting. Intimate, warm photography that honours one of life's most profound transitions.",
      },
      {
        icon: "building",
        title: "Brands",
        body:
          "Visual identity that converts. Commercial photography and videography that makes brands feel alive and trustworthy.",
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 4 — THE OUTCOME (placeholder)
  // Dark section. Full-bleed ceremony photo with overlay
  // text, then 4-metric strip.
  // ═════════════════════════════════════════════════════
  outcome: {
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1800&q=80",
    imageAlt: "Wedding ceremony in golden light",

    eyebrow: "03 · The Outcome",
    titleLines: [
      "10 weddings.",
      "1 million reached.", // italic champagne
      "One clear strategy.",
    ],
    body:
      "When emotional content meets performance infrastructure, the results aren't just reach — they're real bookings, real couples, real moments that will be remembered forever.",

    // Metrics — `countTo` tells the component to animate the
    // number from 0 → value. Non-numeric display values (1M, ↑4×)
    // just scale-fade in instead of counting.
    metrics: [
      {
        num: "10",
        countTo: 10,
        label: "Weddings Booked & Closed",
        sub: "Direct campaign attribution",
      },
      { num: "1M", label: "Account Reach", sub: "Across campaign period" },
      { num: "↑4×", label: "Inquiry Growth", sub: "vs. pre-campaign baseline" },
      {
        num: "100%",
        countTo: 100,
        suffix: "%",
        label: "Purpose-Driven Content",
        sub: "Every post mapped to funnel",
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 5 — TESTIMONIALS (placeholder)
  // Split layout — featured italic quote left (with faint
  // champagne quote-mark ghost), three small star-rated
  // testimonials stacked right.
  // ═════════════════════════════════════════════════════
  testimonials: {
    featured: {
      text:
        "We didn't even know how to describe what we wanted — we just knew we wanted someone who would feel the day the way we felt it. When we saw One Day Stories' reel, we cried. We booked the same evening.",
      textEm: "feel the day the way we felt it.", // champagne bold inside
      author: "Ananya & Rohan",
      meta: "Booked through campaign · Hyderabad 2024",
    },
    more: [
      {
        stars: 5,
        text:
          "We'd been looking for three months. One reel stopped us mid-scroll. The way they captured real moments — not posed, not perfect — just real. That was it.",
        author: "Preethi & Karthik",
        meta: "Wedding, Chennai 2024",
      },
      {
        stars: 5,
        text:
          "The content felt like it was made for us. Candid, emotional, no drama. We enquired through the ad and were booked within a week.",
        author: "Meghana & Sai",
        meta: "Wedding, Hyderabad 2024",
      },
      {
        stars: 5,
        text:
          "Their maternity shoot was unlike anything I'd seen. Not clinical. Not staged. Pure feeling. Exactly what I wanted for this chapter of my life.",
        author: "Divya R.",
        meta: "Maternity session 2024",
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 6 — FOOTER (placeholder)
  // Ink bg + champagne top border. Left: italic wordmark
  // "One Day / Stories" + tagline. Right: CTA header with
  // outlined champagne button.
  // ═════════════════════════════════════════════════════
  footer: {
    wordmarkTop: "One Day",
    wordmarkBottom: "Stories", // bold italic champagne
    tagline: "Every moment has a story — we capture it",
    ctaSub: "Like what you see?",
    ctaHeadTop: "Let's tell your",
    ctaHeadBottom: "brand's",
    ctaHeadEm: "story", // italic champagne
    ctaLabel: "Start a Project",
    copy: "© 2024 Studio Portfolio. All rights reserved.",
    tags: ["Performance Marketing", "Lead Generation", "Wedding Photography"],
  },
};

export default oneDayStoriesData;
