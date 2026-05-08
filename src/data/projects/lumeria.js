// Lumeria Skincare — Case Study Data
// Images: transparent PNGs in public/assets/lumeria/
//   clear-glow.png, hydra-shield.png, dream-fix.png, star-shine.png
// Pricing is placeholder — update when client confirms

export const lumeriaData = {
  // Meta
  slug: "lumeria",
  title: "Lumeria",
  subtitle: "make it simple...",
  description:
    "We didn't just build a website or run a campaign. We launched an entire skincare brand from scratch — the store, the audience, and the strategy that connects them.",
  categories: ["E-Commerce", "Social Media"],
  liveSite: "https://lumeriaskincare.com",
  nextProject: {
    title: "One Day Stories",
    slug: "one-day-stories",
    tagline: "10 Weddings Closed Through Focused Campaigns",
  },

  // Hero stats (bold numbers on warm cream background)
  heroStats: [
    { value: "4", label: "Products Launched" },
    { value: "100%", label: "Custom Built" },
    { value: "Day 1", label: "Sales Ready" },
  ],

  // Hero product arrangement — large transparent PNGs, composed so bottles own the right 60%.
  // Widths are sized relative to each PNG's natural aspect ratio so all bottles LOOK proportional
  // (tall pumps tall, short jar short) when rendered.
  //
  // Natural aspect ratios (from trimmed PNGs):
  //   clear-glow     379×940  →  0.403  (tall body wash pump)
  //   hydra-shield   234×940  →  0.249  (slim day cream)
  //   dream-fix      746×940  →  0.794  (squat jar, wider than tall)
  //   star-shine     268×940  →  0.285  (slim face wash pump)
  //
  // Container is ~680px tall on desktop. zIndex stacks front-to-back.
  heroProducts: [
    {
      id: "clear-glow",
      name: "Clear Glow",
      type: "Body Wash",
      image: "/assets/lumeria/clear-glow.png",
      width: 210, // → ~520px tall
      rotate: -9,
      top: "10%",
      left: "-2%",
      zIndex: 2,
      floatDelay: 0,
    },
    {
      id: "hydra-shield",
      name: "Hydra Shield",
      type: "Day Cream SPF 50",
      image: "/assets/lumeria/hydra-shield.png",
      width: 125, // → ~500px tall
      rotate: -3,
      top: "8%",
      left: "32%",
      zIndex: 4, // front-most, anchoring the group
      floatDelay: 0.8,
    },
    {
      id: "star-shine",
      name: "Star Shine",
      type: "Face Wash",
      image: "/assets/lumeria/star-shine.png",
      width: 130, // → ~455px tall
      rotate: 7, // reduced from 12 — was clipping the right edge
      top: "12%",
      left: "58%", // pulled inward from 68%, and zIndex raised above Dream Fix
      zIndex: 3,
      floatDelay: 2.2,
    },
    {
      id: "dream-fix",
      name: "Dream Fix",
      type: "Night Cream",
      image: "/assets/lumeria/dream-fix.png",
      width: 240, // → ~300px tall (squat jar)
      rotate: 5,
      top: "48%", // pushed down — sits on the "floor" in front of the taller bottles
      left: "62%", // shifted right + down so it clears Star Shine's label
      zIndex: 2, // behind Star Shine now (was 3)
      floatDelay: 1.4,
    },
  ],

  // Ingredient pills — now a single consolidated row at the bottom of the hero
  // (we render as a flex-row with small gaps, not scattered absolute positions).
  heroIngredients: [
    "Kojic Acid",
    "SPF 50 PA++++",
    "Glutathione",
    "Niacinamide",
    "Salicylic Acid",
    "Aloe Vera",
    "Licorice Extract",
  ],

  // ───────────────────────────────────────────────
  // SECTION 2: The Website We Built (live iframe embed of lumeriaskincare.com)
  // ───────────────────────────────────────────────
  // ───────────────────────────────────────────────
  // SECTION 4: Content Timeline — 3-4 months of buildup before launch
  // Each month is a phone mockup, staircased upward (heights grow),
  // with the gold accent color intensifying month-by-month.
  // ───────────────────────────────────────────────
  timeline: {
    kicker: "3-4 Months Before Launch",
    headline: "The content",
    headlineAccent: "timeline",
    supporting:
      "We didn't wait for launch day. We started early — not selling, just teaching.",
    months: [
      {
        id: "m1",
        label: "Month 1",
        stage: "Skincare Education",
        desc: "Basics, routines, why it matters.",
        post: "What does Vitamin C actually do for your skin?",
        phoneHeight: 340,
        color: "#daa520",
        engagement: { likes: "2.4K", shares: "890", saves: "156" },
        reel: "https://res.cloudinary.com/dqwbrgtay/video/upload/q_auto,f_auto/v1778231209/lumeria-reel-2_zblqha.mp4",
      },
      {
        id: "m2",
        label: "Month 2",
        stage: "Building Curiosity",
        desc: "Ingredient stories, behind the scenes.",
        post: "We spent 6 months perfecting this formula…",
        phoneHeight: 370,
        color: "#c9a84c",
        engagement: { likes: "4.1K", shares: "1.2K", saves: "310" },
        reel: "https://res.cloudinary.com/dqwbrgtay/video/upload/q_auto,f_auto/v1778231207/lumeria-reel-3_ajngxz.mp4",
      },
      {
        id: "m3",
        label: "Month 3",
        stage: "The Tease",
        desc: "Brand hints, packaging reveals.",
        post: "Something beautiful is coming. Stay tuned.",
        phoneHeight: 400,
        color: "#d4a843",
        engagement: { likes: "7.8K", shares: "2.4K", saves: "890" },
        reel: "https://res.cloudinary.com/dqwbrgtay/video/upload/q_auto,f_auto/v1778231242/lumeria-reel-4_o3e3bg.mp4",
      },
      {
        id: "launch",
        label: "Launch",
        stage: "Brand Reveal",
        desc: "Full launch with audience ready.",
        post: "Meet Lumeria.\nMake it simple.",
        phoneHeight: 430,
        color: "#ffd700",
        engagement: { likes: "18.6K", shares: "5.7K", saves: "2.1K" },
        isLaunch: true,
        reel: "https://res.cloudinary.com/dqwbrgtay/video/upload/q_auto,f_auto/v1778231209/lumeria-reel-1_aswip7.mp4",
      },
    ],
  },

  // ───────────────────────────────────────────────
  // SECTION 6: The Key Insight — Philosophical payoff of the case study
  // A quiet, confident moment after the Transformation section.
  // Single centered card, gold-shimmer pull-quote with supporting paragraph.
  // ───────────────────────────────────────────────
  // ───────────────────────────────────────────────
  // SECTION 7: Footer — Services delivered + Next Project CTA + VDS branding
  // Closes the page. Dark brown Next Project strip mirrors Sri Rudra's.
  // ───────────────────────────────────────────────
  services: [
    "E-Commerce Development",
    "UI/UX Design",
    "Content Strategy",
    "Social Media Management",
    "Pre-Launch Campaigns",
    "SEO Optimization",
    "Payment Integration",
    "Brand Positioning",
  ],

  insight: {
    kicker: "The Takeaway",
    // Quote rendered in three parts — dark body + single gold-shimmer phrase + dark close.
    // This makes the gold accent feel EARNED and readable against cream.
    quoteStart: "The brand entered the market with",
    quoteAccent: "attention already in place",
    quoteEnd: "— not starting from zero.",
    supporting:
      "By combining a premium e-commerce experience with months of trust-building content, Lumeria launched with an audience that was already curious, educated, and ready to buy.",
    attribution: "Vasishtha Digital Solutions · Lumeria Playbook",
  },

  // ───────────────────────────────────────────────
  // SECTION 5: The Transformation — Before / After Vasishtha
  // Red-tinted "Before" card (all problems), brown-tinted "After" card (all solutions)
  // Arrangement: 1fr → arrow → 1fr
  // ───────────────────────────────────────────────
  transformation: {
    kicker: "The Transformation",
    headline: "From pre-launch void to",
    headlineAccent: "Day-1 revenue",
    before: {
      label: "Before Vasishtha",
      items: [
        "No online presence",
        "No e-commerce platform",
        "No social media strategy",
        "No audience or followers",
        "No brand recognition",
        "Starting from absolute zero",
      ],
    },
    after: {
      label: "After Vasishtha",
      items: [
        "Full e-commerce platform live",
        "4 products launched on Day 1",
        "3-4 months of pre-launch content",
        "Engaged audience waiting at launch",
        "Brand recognition before first sale",
        "Revenue from Day 1",
      ],
    },
  },

  // ───────────────────────────────────────────────
  // SECTION 3: The Merge — Content drives Commerce
  // Dark brown section with 3 split-card rows showing how each
  // social media post drove to a specific product page.
  // ───────────────────────────────────────────────
  merge: {
    kicker: "Where Both Worlds Meet",
    headline: "Content on the left. Commerce on the right.",
    supporting:
      "Every social media post we created for Lumeria was designed to drive traffic directly to the e-commerce platform.",
    rows: [
      {
        id: "educational",
        social: {
          label: "Social Media — Educational Post",
          title: "Why Vitamin C matters for your skin",
          desc:
            "Carousel explaining benefits, ingredients, daily routines — no product push, just value.",
        },
        commerce: {
          label: "E-Commerce — Product Page",
          title: "Hydra Shield Day Cream",
          price: "₹599",
          desc:
            "SPF 50 PA++++ — the exact product the post educated about.",
          productImage: "/assets/lumeria/hydra-shield.png",
        },
      },
      {
        id: "behind-scenes",
        social: {
          label: "Social Media — Behind the Scenes",
          title: "How we formulate our Night Cream",
          desc:
            "Lab footage, ingredient sourcing, quality testing — the kind of trust you can't buy.",
        },
        commerce: {
          label: "E-Commerce — Product Page",
          title: "Dream Fix Night Cream",
          price: "₹549",
          desc:
            "Glutathione + Kojic Acid — viewers now trust what goes into it.",
          productImage: "/assets/lumeria/dream-fix.png",
        },
      },
      {
        id: "launch",
        social: {
          label: "Social Media — Launch Announcement",
          title: "We're finally here. Meet Lumeria.",
          desc:
            "Brand reveal reel — 3 months of buildup culminating in this moment.",
        },
        commerce: {
          label: "E-Commerce — Full Line",
          title: "The Full Product Line",
          price: "Shop Now",
          desc:
            "Audience lands on a ready, polished store with 4 products waiting.",
          productImage: "/assets/lumeria/clear-glow.png",
        },
      },
    ],
  },

  website: {
    kicker: "The Website We Built",
    headline: "A fully custom e-commerce\nexperience from scratch",
    supporting:
      "Built on modern web tech, designed for conversion, launched with 4 products on Day 1.",
    browserUrl: "lumeriaskincare.com",
    iframeHeight: 700, // px on desktop
    techStack: [
      "Custom E-Commerce",
      "Payment Integration",
      "Mobile-First Design",
      "SEO Optimized",
      "Product Catalog",
    ],
    credit: {
      prefix: "Designed & Built by",
      studio: "Vasishtha Digital Solutions",
      meta: [
        { value: "4 Months", label: "Build Time" },
        { value: "100%", label: "Custom Code" },
        { value: "Q1 · 2026", label: "Launched" },
      ],
    },
  },

  // Full product line (for future product showcase section)
  products: [
    {
      id: "clear-glow",
      name: "Clear Glow",
      type: "Body Wash",
      size: "250ml",
      ingredients: ["Kojic Acid", "Licorice Extract"],
      image: "/assets/lumeria/clear-glow.png",
    },
    {
      id: "hydra-shield",
      name: "Hydra Shield",
      type: "Day Cream",
      size: "50gm",
      ingredients: ["SPF 50 PA++++"],
      image: "/assets/lumeria/hydra-shield.png",
    },
    {
      id: "dream-fix",
      name: "Dream Fix",
      type: "Night Cream",
      size: "50gm",
      ingredients: [
        "Kojic Acid",
        "Glutathione",
        "Licorice Extract",
        "Vitamin C",
        "Alpha Arbutin",
      ],
      image: "/assets/lumeria/dream-fix.png",
    },
    {
      id: "star-shine",
      name: "Star Shine",
      type: "Face Wash",
      size: "100ml",
      ingredients: ["Salicylic Acid", "Aloe Vera"],
      image: "/assets/lumeria/star-shine.png",
    },
  ],
};
