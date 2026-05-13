// ──────────────────────────────────────────────────────────────
// Vasishtha Digital Solutions — Home Page Content Data
// Source: design_handoff_vasishtha_landing, re-skinned black + orange
// Palette: #000 + #F18F00 (orange) + #FFB24C (amber) + white
// ──────────────────────────────────────────────────────────────

export const homeData = {
  // ── Shared brand palette ────────────────────────────
  palette: {
    bg: "#000000",         // page base
    bg2: "#050507",        // CTA section bg
    bg3: "#07070a",        // service card bg
    card: "#0a0a0c",       // portfolio card bg
    cardHover: "#0a0a0f",  // service card hover

    orange: "#F18F00",         // primary accent
    orangeDeep: "#CC7700",     // pressed / darker
    orangeSoft: "rgba(241,143,0,0.12)",
    amber: "#FFB24C",          // secondary accent (gradient pair)
    amberSoft: "rgba(255,178,76,0.12)",

    white: "#ffffff",
    text: "rgba(255,255,255,0.92)",
    textDim: "rgba(255,255,255,0.65)",
    textMuted: "rgba(255,255,255,0.40)",
    textFaint: "rgba(255,255,255,0.28)",

    border: "rgba(255,255,255,0.08)",
    borderStrong: "rgba(255,255,255,0.15)",
    line: "rgba(255,255,255,0.06)",
  },

  // ── Top bar (fixed, no menu links) ──────────────────
  // Position: logo LEFT · CTA RIGHT (conventional)
  topBar: {
    logo: {
      src: "/vasishtha-logo.png",
      alt: "Vasishtha Digital Solutions",
      to: "/",
    },
    cta: {
      label: "Book a Call",
      to: "/contact",
    },
  },

  // ── Hero ────────────────────────────────────────────
  hero: {
    eyebrow: {
      label: "Now booking · Q3 2026",
    },
    // Headline words — masked entrance; `accent: true` gets the orange/amber gradient
    headline: [
      { text: "We Turn" },
      { text: "Digital Noise" },
      { text: "Into" },
      { text: "Business", accent: true },
      { text: "Growth." },
    ],
    subtext:
      "We run the social, ship the software, and book the creators. One accountable studio — so your growth doesn't wait on three agencies to sync.",
    primaryCTA: { label: "Start Your Growth Sprint", to: "/contact" },
    secondaryCTA: { label: "See the work", scrollTo: "portfolio" },
  },

  // ── Marquee strip (below hero) ──────────────────────
  marquee: [
    "Sri Rudra",
    "Lumeria Skincare",
    "One Day Stories",
    "TownCart",
    "Yellow Wall Interiors",
    "Flexcellence",
    "Handover Experts",
    "Sufala",
    "Ramesh Makeup Studio",
    "Now booking Q3 2026",
    "Replying in ~1 business day",
  ],

  // ── Portfolio (11 cards — 3 featured col-span-2) ────
  // Order is tuned for an ASYMMETRIC bento. In a 4-col grid, auto-flow
  // places items row-by-row. Pattern below places featured tiles at
  // alternating sides of each row:
  //   Row 1 ── [  F1  ][S][S]       (featured LEFT)
  //   Row 2 ── [S][S][  F2  ]       (featured RIGHT)
  //   Row 3 ── [  F3  ][S][S]       (featured LEFT)
  //   Row 4 ── [S][S]
  portfolio: {
    kicker: "Selected Work · 2024–2026",
    heading: "Campaigns that moved numbers.",
    filters: ["All", "Social Media", "Software", "Influencer"],
    projects: [
      // ── Row 1 ── Featured first (₹3Cr hook as the opener)
      // Sri Rudra Franchise moved to Row 3 (pos 9) so the two Sri Rudra
      // cards are maximally separated in the grid.
      {
        id: "sri-rudra-ganesh",
        title: "Sri Rudra",
        caseHref: "/projects/sri-rudra-influencer",
        external: false,
        category: "Influencer",
        tag: "Ganesh Chaturthi",
        tagline: "Festive influencer campaign that delivered big.",
        metric: "₹3 Cr",
        metricFoot: "on ₹3L spend · 4M+ reach",
        featured: true, // ★ F1 — cols 1-2
        tone: "orange",
        image: "/assets/Portfolio_Banners/sri-rudra-ganesh.jpg",
        imagePosition: "center 30%",
      },
      {
        id: "handover-expert",
        title: "Handover Experts",
        caseHref: "/projects/handover-expert",
        external: false,
        category: "Influencer",
        tag: "New Category",
        tagline: "Making people realize a service they didn't know they needed.",
        metric: "New category",
        metricFoot: "built in Hyderabad",
        featured: false,
        tone: "amber",
        image: "/assets/Portfolio_Banners/handover-experts.jpg",
        imagePosition: "left top",
      },
      {
        id: "lumeria-social",
        title: "Lumeria Skincare",
        caseHref: "/projects/lumeria",
        external: false,
        category: "Social Media",
        tag: "Launch Buzz",
        tagline: "Audience built before the first sale.",
        metric: "3–4 mo",
        metricFoot: "pre-launch runway",
        featured: false,
        tone: "amber",
        image: "/assets/Portfolio_Banners/lumeria-square.jpg",
        imagePosition: "center center",
      },

      // ── Row 2 ── Two standards + Featured on the right
      {
        id: "towncart",
        title: "TownCart",
        caseHref: "/projects/towncart",
        external: false,
        category: "Social Media",
        tag: "Paid Media",
        tagline: "Smart ads, real results.",
        metric: "₹15 CPL",
        metricFoot: "1,200 leads on ₹18K spend",
        featured: false,
        tone: "white",
        image: "/assets/Portfolio_Banners/towncart.jpg",
        imagePosition: "center center",
      },
      {
        id: "ywi",
        title: "Yellow Wall Interiors",
        caseHref: "/projects/yellow-wall-interiors",
        external: false,
        category: "Social Media",
        tag: "Organic Growth",
        tagline: "From content to consistent organic leads.",
        metric: "10K",
        metricFoot: "followers · 1 month",
        featured: false,
        tone: "amber",
        image: "/assets/Portfolio_Banners/ywi.jpg",
        imagePosition: "center center",
      },
      {
        id: "one-day-stories",
        title: "One Day Stories",
        caseHref: "/projects/one-day-stories",
        external: false,
        category: "Social Media",
        tag: "Performance",
        tagline: "Performance marketing for boutique wedding photography.",
        metric: "10 weddings",
        metricFoot: "1M account reach",
        featured: true, // ★ F2 — cols 3-4
        tone: "orange",
        image: "/assets/Portfolio_Banners/one-day-stories.jpg",
        imagePosition: "center center",
      },

      // ── Row 3 ── Featured on the left again, then two standards
      {
        id: "lumeria-ecom",
        title: "Lumeria Skincare",
        caseHref: "/projects/lumeria",
        external: false,
        category: "Software",
        tag: "E-commerce Build",
        tagline: "Full custom e-commerce — shipped live.",
        metric: "Live",
        metricFoot: "lumeriaskincare.com",
        featured: true, // ★ F3 — cols 1-2
        tone: "orange",
        image: "/assets/Portfolio_Banners/lumeria-wide.jpg",
        imagePosition: "center top",
      },
      {
        id: "flexcellence",
        title: "Flexcellence",
        caseHref: "/projects/flexcellence",
        external: false,
        category: "Influencer",
        tag: "Awareness",
        tagline: "Fitness app made everyday-relatable.",
        metric: "9–15",
        metricFoot: "creators · 2 months",
        featured: false,
        tone: "white",
        image: "/assets/Portfolio_Banners/flexcellence.jpg",
        imagePosition: "center center",
      },
      {
        id: "sri-rudra-franchise",
        title: "Sri Rudra",
        caseHref: "/projects/sri-rudra-social",
        external: false,
        category: "Social Media",
        tag: "Franchise Growth",
        tagline: "Turning content into franchise growth.",
        metric: "13 franchises",
        metricFoot: "closed in 3 months",
        featured: false,
        tone: "orange",
        image: "/assets/Portfolio_Banners/sri-rudra-franchise.jpg",
        imagePosition: "center center",
      },

      // ── Row 4 ── Two standards + Featured ERP on the right
      {
        id: "sufala",
        title: "Sufala",
        caseHref: "https://www.sufala.in/",
        external: true,
        category: "Software",
        tag: "E-commerce Build",
        tagline: "Custom e-commerce store, end-to-end.",
        metric: "Live",
        metricFoot: "sufala.in",
        featured: false,
        tone: "white",
        image: "/assets/Portfolio_Banners/sufala.jpg",
        imagePosition: "center center",
      },
      {
        id: "ramesh-makeup",
        title: "Ramesh Makeup Studio",
        caseHref: "/projects/ramesh-makeup",
        external: false,
        category: "Software",
        tag: "Custom App",
        tagline: "Studio ops app, built for a beauty studio.",
        metric: "App",
        metricFoot: "shipped for studio ops",
        featured: false,
        tone: "amber",
        image: "/assets/Portfolio_Banners/ramesh-makeup.jpg",
        imagePosition: "center center",
      },
      {
        id: "sri-rudra-erp",
        title: "Sri Rudra",
        caseHref: "/projects/sri-rudra-erp",
        external: false,
        category: "Software",
        tag: "Custom ERP",
        tagline: "The operating system behind 3,094 SKUs.",
        metric: "9 modules",
        metricFoot: "live · 60 employees daily",
        featured: true, // ★ F4 — cols 3-4 (RIGHT, completes L-R-L-R rhythm)
        tone: "orange",
        // TODO: swap to a proper ERP banner once shot. Using a Sri Rudra brand image as placeholder so card doesn't break.
        image: "/assets/Portfolio_Banners/sri-rudra-franchise.jpg",
        imagePosition: "center center",
      },
    ],
  },

  // ── Services (3 pillars — matches brief) ────────────
  services: {
    kicker: "Capabilities",
    heading: "Three disciplines. One accountable team.",
    items: [
      {
        num: "01",
        title: "Social Media Marketing",
        desc: "Content strategy, performance creative, and paid media that compound into real business outcomes. We make the reel, run the ads, and measure what moved.",
        tags: ["Reels", "Performance creative", "Content funnels", "Paid media"],
      },
      {
        num: "02",
        title: "Software Projects",
        desc: "Custom e-commerce builds, web apps, and studio-grade websites — shipped end-to-end with analytics and CRO built in from day one.",
        tags: ["E-commerce", "React / Next.js", "Analytics", "CRO"],
      },
      {
        num: "03",
        title: "Influencer Marketing",
        desc: "Creator-mix strategy from high-reach to niche — structured campaigns that drive awareness and revenue, not vanity. Attribution included.",
        tags: ["Creator strategy", "Campaign ops", "UGC", "Attribution"],
      },
    ],
  },

  // ── Final CTA card ──────────────────────────────────
  finalCTA: {
    kicker: "Your move",
    heading: "Got something worth growing?",
    body:
      "Tell us what you're launching, growing, or shipping. We'll reply within a business day with a shortlist of what we'd actually do first.",
    primaryCTA: { label: "Start Your Growth Sprint", to: "/contact" },
    email: {
      label: "info@vasishtha.co",
      href: "mailto:info@vasishtha.co",
    },
  },

  // ── Footer ──────────────────────────────────────────
  footer: {
    tagline: "Performance-driven digital studio. Built in India, booking globally.",
    columns: [
      {
        title: "Studio",
        links: [
          { label: "Work", to: "#portfolio", scroll: true },
          { label: "Services", to: "#services", scroll: true },
          { label: "Book a Call", to: "/contact" },
        ],
      },
      {
        title: "Case studies",
        links: [
          { label: "Sri Rudra — Franchise", to: "/projects/sri-rudra-social" },
          { label: "Sri Rudra — Ganesh", to: "/projects/sri-rudra-influencer" },
          { label: "Sri Rudra — ERP", to: "/projects/sri-rudra-erp" },
          { label: "Lumeria", to: "/projects/lumeria" },
          { label: "One Day Stories", to: "/projects/one-day-stories" },
          { label: "TownCart", to: "/projects/towncart" },
          { label: "Yellow Wall Interiors", to: "/projects/yellow-wall-interiors" },
          { label: "Flexcellence", to: "/projects/flexcellence" },
          { label: "Handover Expert", to: "/projects/handover-expert" },
        ],
      },
      {
        title: "Reach",
        links: [
          { label: "info@vasishtha.co", href: "mailto:info@vasishtha.co" },
          { label: "Instagram", href: "https://www.instagram.com/vasishtha_digital_solutions/" },
          { label: "LinkedIn", href: "https://www.linkedin.com/company/vasishtha-digital-solutions/" },
        ],
      },
    ],
    copyright: "© 2026 Vasishtha Digital Solutions. Made in India.",
  },
}
