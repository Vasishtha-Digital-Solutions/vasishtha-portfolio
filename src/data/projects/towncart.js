// ──────────────────────────────────────────────────────────────
// TownCart Case Study — Content Data
// Approved HTML mockup: towncart-case-study.html
// Design metaphor: Supermarket aisle walkthrough
// Sections build one-by-one with approval between each.
// ──────────────────────────────────────────────────────────────

export const towncartData = {
  // ── Meta ──────────────────────────────────────────────
  slug: "towncart",
  title: "TownCart",
  caseNumber: "001",

  // Back-link + (placeholder) next project
  nextProject: {
    title: "TBD",
    slug: "",
    tagline: "",
  },

  // ── Shared brand palette (so sections stay in sync) ──
  palette: {
    cream: "#F5EEDD",
    cream2: "#FDF3D8",
    paper: "#FEFCF5",
    kraft: "#d4a574",
    kraftDark: "#b8874d",
    ink: "#1a1410",
    ink2: "#2d1f14",
    ink3: "#4a321f",
    red: "#C8321C",
    redDark: "#7A1D10",
    redBright: "#E8411F",
    amber: "#FFB84D",
    amberDark: "#BA7517",
    amberBright: "#FFD68C",
    green: "#3B6D11",
    greenMid: "#639922",
    greenLight: "#97C459",
    muted: "#7a5f4a",
    muted2: "#5c4a3a",
  },

  // ═════════════════════════════════════════════════════
  // SECTION 1 — HERO
  // Dramatic supermarket-interior pastiche.
  // Asymmetric editorial layout: left column (meta, ribbon,
  // big H1 with italic "cart" word, lede, 4-stat grid)
  // and right column with cascading price-tag stack.
  // ═════════════════════════════════════════════════════
  hero: {
    // Top meta row — mono caps with · separators
    meta: ["CASE STUDY", "001", "PAID SOCIAL", "LEAD GEN", "2026"],

    // Tilted red ribbon above H1
    ribbon: "SMART ADS · REAL RESULTS",

    // Headline is 3 lines; middle line has italic "cart" word
    // with pink-highlight underlay. We render segments to keep
    // the special word isolated for styling.
    headline: [
      { text: "How we filled" },
      { text: "TownCart's ", italicAccent: "cart", textAfter: " with" },
      { text: "1,200 leads." },
    ],

    lede:
      "A franchise brand. A tier-2 audience. A budget that wouldn't cover a single metro billboard. Here's how we shopped smart.",

    // 4-column stat strip at bottom-left
    stats: [
      { kicker: "AD SPEND", big: "₹18K", foot: "Meta ads, 30 days" },
      { kicker: "LEADS", big: "1,200", foot: "Qualified, quality-checked" },
      { kicker: "COST PER LEAD", big: "₹15", foot: "vs. ₹200 industry avg." },
      { kicker: "REACH", big: "AP + TS", foot: "Tier 2 + 3 cities" },
    ],

    // Cascading price-tag stack (right column, desktop-only pinned;
    // on mobile flows inline above the stats).
    // tone → which CSS color token the tag uses.
    priceTags: [
      { tone: "red", label: "PRICE PER", value: "LEAD · ₹15", rotate: 4 },
      { tone: "amber", label: "TOTAL", value: "LEADS · 1,200", rotate: -3 },
      { tone: "green", label: "YOU", value: "SAVED · ₹2.2L", rotate: 5 },
      { tone: "dark", label: "VS INDUSTRY", value: "13× CHEAPER", rotate: -2 },
    ],
    tagNote: ["every ₹ earned", "its place on the shelf ↓"],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 2 — MARQUEE STRIP
  // Red full-bleed band that scrolls horizontally. Amber
  // ✦ stars separate each phrase. 4px ink borders top/bottom.
  // ═════════════════════════════════════════════════════
  marquee: {
    // Phrases are duplicated in the component for a seamless loop.
    items: [
      "1,200 qualified leads",
      "₹15 cost per lead",
      "₹18,000 total ad spend",
      "13× below industry average",
      "zero fluff",
    ],
    // Total cycle time in seconds — lower = faster scroll
    durationSec: 50,
  },

  // ═════════════════════════════════════════════════════
  // SECTION 3 — AISLE 01 · THE SHOPPING LIST
  // Paper-texture background. A hanging "AISLE 01" sign,
  // two-line headline with red italic accent, lede, then
  // a slightly-rotated notebook paper card styled like a
  // shopping list (paperclip, coffee stain, red margin rule,
  // ruled lines, handwritten headlines, handwritten margin
  // note hanging off the right edge).
  // ═════════════════════════════════════════════════════
  aisle01: {
    sign: { num: "AISLE 01", name: "The shopping list", tone: "red" },
    // h2 breaks naturally on "An audience that scrolls past."
    // with the phrase in red italic.
    headlineStart: "A new account. No trust capital. An audience that",
    headlineAccent: "scrolls past.",

    lede: [
      "TownCart is a supermarket franchise chain across tier 2 and tier 3 towns in AP and Telangana. We weren't selling groceries — we were selling ",
      { accent: "investments" },
      ". To an audience that has every reason to keep scrolling.",
    ],

    // List title across the top of the paper card
    listTitle: "★ CONSTRAINTS · CHECKLIST",

    // 4 checklist items. `head` renders in handwritten Caveat,
    // `desc` in body font at ~14px.
    items: [
      {
        head: "Brand new ad account",
        desc:
          "No pixel data. No lookalikes. Starting from zero, without any history to lean on.",
      },
      {
        head: "High-skepticism offer",
        desc:
          "A franchise isn't a ₹499 impulse buy. Investors do their homework before filling a form.",
      },
      {
        head: "Tier 2/3 audience, two states",
        desc:
          "Smaller pool. Regional cues. Different trust signals than metros.",
      },
      {
        head: "₹18,000 total budget",
        desc:
          "One wrong audience test and half the budget is gone. No room to be lazy.",
      },
    ],

    // Handwritten red margin note (desktop only — hidden < 880px)
    marginNote: ["had to make", "every ₹ count!"],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 4 — AISLE 02 · WHO WENT IN THE CART
  // Dark ink backdrop with a subtle vanishing-point floor
  // grid (perspective lines). A flickering "open 24/7" neon
  // sign sits top-right. Cream aisle sign. Headline with a
  // quoted italic phrase. Below: 2-column basket split —
  // "IN THE BASKET" (green) and "LEFT ON THE SHELF" (red
  // strikethrough), each with a floating price tag and a
  // basket-shape SVG icon.
  // ═════════════════════════════════════════════════════
  aisle02: {
    sign: { num: "AISLE 02", name: "Who went in the cart", tone: "cream" },
    neon: "open 24/7",

    // Headline: "We stopped selling to <em>"anyone interested in business."</em>"
    headlineStart: "We stopped selling to",
    headlineAccent: "\u201Canyone interested in business.\u201D",

    lede:
      "That audience is 90% job-seekers, course-buyers, and tyre-kickers. On \u20B918K, they'd have eaten us alive. So we drew a line.",

    inBasket: {
      tag: "IN THE BASKET",
      icon: "cart", // rendered by TownCartAisle02 → shopping basket SVG
      items: [
        { head: "Small shop owners", desc: "Kirana + general store upgraders, ready to scale" },
        { head: "Side-income seekers", desc: "35\u201355, salaried, with \u20B915\u201330L investable" },
        { head: "Returnee NRIs", desc: "Settling back in hometown, seeking ventures" },
        { head: "Tier 2/3 geo-locks", desc: "Specific pin codes across AP + TS" },
      ],
    },
    onShelf: {
      tag: "LEFT ON THE SHELF",
      icon: "shelf", // rendered → crossed-out shelf SVG
      items: [
        { head: "Job seekers", desc: "Want employment, not investment" },
        { head: "Metro audiences", desc: "Higher CPMs, weaker model fit" },
        { head: "Under-25 browsers", desc: "Engage, rarely have franchise capital" },
        { head: "\u201CBusiness ideas\u201D broad", desc: "Infinite pool. Infinite waste." },
      ],
    },
  },

  // ═════════════════════════════════════════════════════
  // SECTION 5 — AISLE 03 · THE PRINCIPLE
  // Kraft (warm earth) texture backdrop. A huge translucent
  // quotation-mark watermark sits behind a pull-quote ("Speak
  // like a shopkeeper. Not a marketer."), followed by a lede
  // and three floating phone mockups showing the three ad
  // variants that actually ran: Hook / Proof / CTA. Bottom
  // strip names the pattern behind each ad.
  // ═════════════════════════════════════════════════════
  aisle03: {
    sign: { num: "AISLE 03", name: "The principle", tone: "red" },

    pullQuote: {
      lead: "Speak like a",
      // Word that gets the wavy red underline (kept separate so we
      // can style it without dangerouslySetInnerHTML).
      accent: "shopkeeper.",
      after: "Not a marketer.",
      attribution: "\u2014 OUR ONE RULE FOR EVERY AD",
    },

    lede:
      "Franchise ads usually shout. Ours didn't. We wrote like someone sitting across a counter \u2014 plain numbers, plain promises, plain proof. That's what a tier-2 shop owner responds to.",

    // Three phone mockups. Each Ad renders via a variant-specific
    // body component inside TownCartAisle03.jsx. All share the same
    // header (TC avatar · TownCart · Sponsored · ⓘ · ⋯) and a footer
    // pattern (headline + url + red Apply, then reactions row).
    ads: [
      {
        id: "hook",
        variant: "hook",
        accountName: "TownCart",
        body: {
          label: "EARN",
          bigNum: "\u20B960K\u201370K",
          sub: "per month, after expenses",
          ctaText: "See if your town qualifies \u2192",
        },
        footer: {
          head: "Franchise opportunity",
          url: "towncart.in",
          reactions: { likes: "1.2k", comments: "87", shares: "43" },
        },
      },
      {
        id: "proof",
        variant: "proof",
        accountName: "TownCart",
        body: {
          caption: {
            name: "Store #7 \u00B7 Kurnool",
            meta: "Opened 2024. ROI in 14 months.",
          },
        },
        footer: {
          head: "8 stores \u00B7 2 states \u00B7 real shops",
          url: "towncart.in",
          reactions: { likes: "3.4k", comments: "156", shares: "89" },
        },
      },
      {
        id: "cta",
        variant: "cta",
        accountName: "TownCart",
        body: {
          kicker: "NOW IN 8 TOWNS",
          headlineStart: "Is ",
          headlineAccent: "your town",
          headlineAfter: " next?",
          copy:
            "Check if TownCart is open for franchise in your pin code. Takes 30 seconds.",
          ctaText: "Check my town \u2192",
        },
        footer: {
          head: "Zero royalty fees",
          url: "towncart.in",
          reactions: { likes: "2.1k", comments: "132", shares: "67" },
        },
      },
    ],

    // Bottom strip — names the pattern behind each phone above
    principleLabels: [
      { num: "01 \u00B7 HOOK", label: "Lead with the number" },
      { num: "02 \u00B7 PROOF", label: "Show the real stores" },
      { num: "03 \u00B7 CTA", label: "One small ask" },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 6 — AISLE 04 · RESTOCK THE SHELF
  // Paper backdrop. Amber aisle sign. A full-bleed dark
  // conveyor-belt strip with two animated layers (the belt
  // surface scrolling at 3s, coloured package blocks riding
  // on top at 20s). Below, 4 hard-shadow "loop cards" each
  // labelled with a red circle pin: Launch → Read receipts →
  // Kill + double → Restock. Footnote names the cycle cadence.
  // ═════════════════════════════════════════════════════
  aisle04: {
    sign: { num: "AISLE 04", name: "Restock the shelf", tone: "amber" },
    headlineStart: "Every week, we killed what",
    headlineAccent: "wasn't selling.",
    lede:
      "On a \u20B918K budget, you don't get second chances. We ran tight 4-day cycles \u2014 promote winners, pull losers off the shelf, restock fast.",

    conveyor: {
      // Label + colour for each "package" riding the belt. Order
      // matters — visual variety comes from not repeating colours.
      items: [
        { label: "A1", tone: "red" },
        { label: "B2", tone: "cream" },
        { label: "C3", tone: "amber" },
        { label: "D4", tone: "green" },
        { label: "A5", tone: "red" },
        { label: "B6", tone: "cream" },
        { label: "C7", tone: "green" },
        { label: "D8", tone: "amber" },
        { label: "A9", tone: "red" },
        { label: "B1", tone: "green" },
        { label: "C2", tone: "amber" },
        { label: "D3", tone: "cream" },
        { label: "A4", tone: "red" },
        { label: "B5", tone: "amber" },
        { label: "C6", tone: "green" },
        { label: "D7", tone: "cream" },
      ],
      itemsDurationSec: 20, // package loop speed
      beltDurationSec: 3, // belt-surface ridge speed (faster)
    },

    loopCards: [
      { n: "01", name: "Launch", desc: "3\u20134 creatives, 2 audiences." },
      { n: "02", name: "Read receipts", desc: "CTR, CPL, form quality." },
      { n: "03", name: "Kill + double", desc: "Pull losers. 2\u00D7 winners." },
      { n: "04", name: "Restock", desc: "New winner variants. Repeat." },
    ],
    loopFootnote: "4-DAY CYCLE \u00B7 REPEAT WEEKLY",
  },

  // ═════════════════════════════════════════════════════
  // SECTION 7 — CHECKOUT · THE RESULTS
  // Dark-ink backdrop with an amber radial spotlight + a
  // soft spotlight cone. Bright aisle sign. Italic amber
  // intro. A "cash register" slot emits the receipt: two
  // faded shadow-paper layers behind a clipped-zigzag main
  // receipt (6 line items → total → ₹2,22,000 savings with
  // spinning stars → barcode with scanning red line). Below
  // the receipt, 3 animated-counter stat cards.
  // ═════════════════════════════════════════════════════
  checkout: {
    sign: { num: "CHECKOUT", name: "The results", tone: "bright" },
    intro: "Here's what \u20B918,000 actually bought.",

    receipt: {
      brand: "TOWNCART",
      sub: "META ADS \u00B7 LEAD GENERATION",
      date: "Campaign \u00B7 2025 \u00B7 AP + TS",
      items: [
        { label: "Qualified leads", value: "1,200" },
        { label: "Cost per lead", value: "\u20B915.00" },
        { label: "Campaign days", value: "~30" },
        { label: "Audience geo", value: "AP + TS" },
        { label: "Creative variants", value: "12" },
        { label: "Winning angles", value: "3" },
      ],
      totalLabel: "TOTAL SPEND",
      totalValue: "\u20B918,000",
      savings: {
        label: "YOU SAVED",
        amount: "\u20B92,22,000",
        vs: "vs. \u20B9200 industry avg CPL",
      },
      barcodeId: "TC-001-2026 \u00B7 THANK YOU",
    },

    // Stat trio — each counter animates on viewport entry.
    // `target` is the terminal number; `prefix`/`suffix` get
    // concatenated around the counter output; `comma` formats
    // large numbers with Indian locale commas.
    stats: [
      {
        tone: "amber",
        target: 15,
        prefix: "\u20B9",
        label: "COST PER LEAD",
        decoration: "01",
      },
      {
        tone: "green",
        target: 1200,
        comma: true,
        label: "QUALIFIED LEADS",
        decoration: "02",
      },
      {
        tone: "red",
        target: 13,
        suffix: "\u00D7",
        label: "BELOW INDUSTRY",
        decoration: "03",
      },
    ],
  },

  // ═════════════════════════════════════════════════════
  // SECTION 8 — FINAL TAKEAWAY
  // Paper backdrop. A decorative dashed-red horizontal rule
  // floats above the content. A small floating cart SVG
  // (with red / amber / green produce circles hovering over
  // it) sits above the italic Fraunces pull-quote. The
  // endmark ties the case to its ID (TC-001-2026).
  // ═════════════════════════════════════════════════════
  takeaway: {
    quote: {
      lead: "A small budget isn't a disadvantage.",
      start: "It just forces ",
      accent: "better decisions",
      end: " earlier.",
    },
    endMark: "\u2014 END OF CASE \u00B7 TC-001-2026 \u2014",
  },
};
