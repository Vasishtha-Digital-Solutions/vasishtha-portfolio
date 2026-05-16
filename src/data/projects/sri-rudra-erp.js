// ──────────────────────────────────────────────────────────────
// Sri Rudra — Custom ERP Case Study
// Story: Their business runs in a loop. We built the system
// that watches every turn of it.
// Note: client name/logo published with permission; employee
// names, vendor names, customer names, exact revenue figures
// have been anonymized.
// ──────────────────────────────────────────────────────────────

export const sriRudraErpData = {
  // ── Meta ──────────────────────────────────────────
  slug: "sri-rudra-erp",
  title: "Sri Rudra",
  subtitle: "The Operating System Behind 3,094 SKUs",
  description:
    "A pooja goods manufacturer outgrew Tally and Excel. We built a custom ERP that turned ten disconnected stores, sixty employees, and three thousand SKUs into one self-orchestrating loop.",
  categories: ["Software", "Custom ERP"],
  client: "Sri Rudra",
  industry: "Manufacturing",
  scale: "10+ stores · AP & TG",
  status: "Live in production",
  nextProject: {
    title: "Sri Rudra — Franchise Growth",
    slug: "sri-rudra-social",
    tagline: "13 franchises closed in 3 months through 10 strategic reels.",
  },

  // ── Palette ───────────────────────────────────────
  palette: {
    base: "#F5EEDD",
    paper: "#FFFAF0",
    paperEdge: "#EFE5D0",
    ink: "#1A0F08",
    inkSoft: "rgba(26,15,8,0.65)",
    inkMute: "rgba(26,15,8,0.42)",
    inkFaint: "rgba(26,15,8,0.22)",
    rule: "rgba(26,15,8,0.10)",

    sidebar: "#2A1810",
    sidebarText: "rgba(245,238,221,0.62)",
    sidebarActive: "#E8A93C",

    saffron: "#E8A93C",
    saffronDeep: "#D69020",
    saffronGlow: "rgba(232,169,60,0.18)",
    brass: "#B8860B",
    brassSoft: "rgba(184,134,11,0.10)",

    pass: "#2D7A2D",
    warn: "#D49B1E",
    fail: "#C8321C",
    info: "#2D5F8F",

    terminal: "#0E0805",
    terminalLine: "rgba(232,169,60,0.40)",
  },

  // ── Hero ──────────────────────────────────────────
  // Eyebrow names the case explicitly so cold readers know the subject
  // within 2 seconds. "Live" claim is reserved for the single pulse dot
  // in the metadata strip — no more triple-mention.
  hero: {
    eyebrow: "Sri Rudra · Custom ERP",
    titleLine1: "Your business",
    titleLine2: "runs in a loop",  // italic — only italic moment on this page besides CTA
    sub: "When stock, production, distribution, and reorders live in three different spreadsheets, the business runs blind. We built one connected operating system to replace all of it — and to watch every turn of the cycle.",
  },

  // ── The Problem ───────────────────────────────────
  // Sharpened pain points — each anchored to a specific operational moment
  problem: {
    kicker: "The brief",
    heading: "Tally captures snapshots.\nThe business runs in cycles.",
    body: [
      "Our client manufactures pooja goods at scale — 3,094 SKUs, 60 employees on the production floor, 10+ retail stores across Andhra Pradesh and Telangana, and a growing franchise network.",
      "They had Tally for accounting, Excel for inventory, WhatsApp for store reorders, and a paper register for production. Four systems. Zero of them talked to each other.",
    ],
    painPoints: [
      {
        kicker: "Pain 01",
        title: "Friday was reconciliation day. Every Friday.",
        body: "Matching raw material consumed against finished goods produced was an Excel exercise across ten stores. Six hours per store × ten stores = a multi-day job that was already stale the moment it finished.",
      },
      {
        kicker: "Pain 02",
        title: "Each franchise reordered on its own clock.",
        body: "Twelve franchises, twelve different product mappings, twelve different cadences. Off-the-shelf ERPs forced one reorder model on everyone — the team broke their workflow to fit the software.",
      },
      {
        kicker: "Pain 03",
        title: "The wastage number didn't exist.",
        body: "Asking 'what's our wastage this quarter?' got a shrug. RM consumption lived in one register, FG output in another, hours worked in a third. The number that actually mattered was unreachable.",
      },
    ],
    bridge: "Off-the-shelf ERP didn't fit. So we built one that did.",
  },

  // ── Why Custom (balanced) ─────────────────────────
  whyCustom: {
    kicker: "Why custom · Not Tally · Not Zoho · Not ERPNext",
    heading: "Three workflows no off-the-shelf tool could model.",
    balance: "Off-the-shelf is the right call for most businesses — Tally and Zoho exist because they fit ~80% of operations cleanly. Custom only earns its cost when those defaults force a real workflow into a wrong shape. For this client, three of them did.",
    points: [
      {
        n: "01",
        title: "Per-franchise reorder cycles",
        body: "Each franchise runs its own cadence and product list. Tally treats every customer the same. We modelled the actual cycle each franchise runs on — different for every one.",
      },
      {
        n: "02",
        title: "Four-way production worklogs",
        body: "Every shift logs hours · raw material consumed · finished goods produced · wastage — by employee. That four-way link is the difference between a number and a decision. No ERP we tested could express it without a custom field hack.",
      },
      {
        n: "03",
        title: "Permissions shaped to the org chart",
        body: "Eight roles, ninety-six permissions, mapped to the real reporting structure. The accountant sees vendor pricing; the production supervisor doesn't. Roles built around the team — not the other way around.",
      },
    ],
  },

  // ── The Loop (signature visualization) ────────────
  loop: {
    kicker: "The system, in one diagram",
    heading: "One loop. Four segments. Every module connected.",
    segments: [
      {
        n: "01",
        key: "sourcing",
        name: "Sourcing",
        angleStart: 270,
        angleEnd: 360,
        modules: ["Vendors", "Purchase Orders", "LR Tracking", "Raw Materials"],
        oneLiner: "Vendor → PO → in-transit → inventory.",
      },
      {
        n: "02",
        key: "production",
        name: "Production",
        angleStart: 0,
        angleEnd: 90,
        modules: ["Production Worklogs", "Finished Goods", "Stock Txns", "Wastage"],
        oneLiner: "Hours · RM consumed · FG produced · wastage — per employee.",
      },
      {
        n: "03",
        key: "distribution",
        name: "Distribution",
        angleStart: 90,
        angleEnd: 180,
        modules: ["Outward Orders", "Internal Transfers", "Customers", "Franchises"],
        oneLiner: "FG → outward order → store / franchise / customer → payment.",
      },
      {
        n: "04",
        key: "replenishment",
        name: "Replenishment",
        angleStart: 180,
        angleEnd: 270,
        modules: ["Low Stock Alert", "Reorder Cycles", "Categories", "Product Mappings"],
        oneLiner: "Alert fires → reorder triggered → loop restarts.",
      },
    ],
  },

  // ── Four Segments ─────────────────────────────────
  segments: {
    sourcing: {
      n: "Segment 01",
      key: "sourcing",
      title: "Sourcing",
      tagline: "How raw materials enter the loop.",
      narrative: [
        "Every raw material has a vendor, a price, a GST rate, and a lead time. We track all of it — and every purchase order moves through three states: raised, in transit (with LR — lorry receipt — tracking), and received.",
        "The moment goods arrive, raw material inventory updates. No manual entry. No 'I'll do it on Friday.' The loop begins its next turn.",
      ],
      modules: [
        { name: "Vendors", desc: "Vendor master with contact, GST, payment terms." },
        { name: "Purchase Orders", desc: "Raise · approve · receive · close. Linked to LR." },
        { name: "LR Tracking", desc: "In-transit visibility for every dispatched PO." },
        { name: "Raw Materials", desc: "719 items. Code, category, vendor, stock, landing price." },
      ],
      stat: {
        value: "719",
        label: "Raw material SKUs tracked",
      },
    },
    production: {
      n: "Segment 02",
      key: "production",
      title: "Production",
      tagline: "Where raw materials become finished goods.",
      narrative: [
        "Every shift opens a worklog. Hours worked. Raw materials consumed. Finished goods produced. Wastage. By employee. Per day. Every day.",
        "Average wastage across the floor sits at 0.8%. That number doesn't exist without measurement, and measurement doesn't exist without the four-way link between people, materials, output, and time.",
      ],
      modules: [
        { name: "Production Worklogs", desc: "Per-employee, per-shift production log." },
        { name: "Stock Transactions", desc: "Every RM consumed and FG produced ledger-style." },
        { name: "Finished Goods", desc: "FG inventory by product, available to dispatch." },
        { name: "Employee Performance", desc: "Output · hours · wastage by individual, over any date range." },
      ],
      stat: {
        value: "0.8%",
        label: "Average wastage across 60 employees",
      },
    },
    distribution: {
      n: "Segment 03",
      key: "distribution",
      title: "Distribution",
      tagline: "How finished goods reach customers, stores, and franchises.",
      narrative: [
        "Finished goods leave the warehouse on three paths: directly to a B2B customer, internally between locations, or to a franchise that placed a reorder.",
        "Every outward order has a status — pending, shipped, delivered, on-hold, partial. Every status change is logged. Nothing slips through because nothing is invisible.",
      ],
      modules: [
        { name: "Outward Orders", desc: "B2B customer dispatch — full order lifecycle." },
        { name: "Internal Transfers", desc: "Stock movement between warehouses and stores." },
        { name: "Customers", desc: "B2B customer master with order history and payment status." },
        { name: "Franchise Orders", desc: "Franchise-specific dispatch with product mappings." },
      ],
      stat: {
        value: "87",
        label: "Outward orders tracked this month",
      },
    },
    replenishment: {
      n: "Segment 04",
      key: "replenishment",
      title: "Replenishment",
      tagline: "How the loop closes — and starts again.",
      narrative: [
        "Low Stock Alert watches every raw material and finished good. When stock drops below the reorder level, the alert fires. The team raises a new purchase order — and the loop has started its next revolution.",
        "Franchises have their own reorder cycles, modelled per franchise. The system suggests the next order based on the cadence we've configured for each one. The retailer doesn't have to remember; the system does.",
      ],
      modules: [
        { name: "Low Stock Alert", desc: "Watchlist of items below reorder level — flagged in real time." },
        { name: "Reorder Cycles", desc: "Per-franchise cadence and product list." },
        { name: "Categories", desc: "Product taxonomy for filtering, reporting, mapping." },
        { name: "Product Mappings", desc: "Which products are available to which franchise." },
      ],
      stat: {
        value: "95",
        label: "Items currently flagged for reorder",
      },
    },
  },

  // ── Foundation (reframed — no L1/L2/L3) ───────────
  foundation: {
    kicker: "Underneath the loop",
    heading: "Three things turn a tool into a system.",
    sub: "A well-designed UI is the easy half of enterprise software. The hard half is what runs underneath — and these three are the difference between something the team uses and something the team trusts.",
    layers: [
      {
        key: "access",
        word: "Access",
        title: "The org chart, in code.",
        body: "Eight roles built around the actual team — Admin, Accountant, Manager, Production, PO & Transportation, Franchise, View All, Tally. Ninety-six permissions, each individually toggleable. The accountant sees what the accountant needs; the production supervisor sees only the production floor.",
        proofStat: "8 roles · 96 permissions",
      },
      {
        key: "audit",
        word: "Audit",
        title: "Every action, every user, every timestamp.",
        body: "Every PO raised, every stock transaction, every role change, every login is logged with who, when, and what. When something goes wrong, the answer is never 'we'll have to investigate.' The answer is in the log.",
        proofStat: "Full audit trail · queryable by user, action, or date",
      },
      {
        key: "alerts",
        word: "Alerts",
        title: "The system reaches out before the team has to ask.",
        body: "Configurable per role: low stock alerts to the warehouse manager, order status changes to sales, payment overdue to accounts. No more 'did anyone check the inventory?' — the inventory checks itself, and tells whoever needs to know.",
        proofStat: "Routed by role · triggered by event",
      },
    ],
  },

  // ── The Numbers (restructured as Before / After) ──
  numbers: {
    kicker: "What changed",
    heading: "Before the system. After the system.",
    sub: "Volume metrics prove a system exists. Improvement metrics prove it was worth building. Here are the operations that changed shape.",
    comparisons: [
      {
        operation: "Stock reconciliation across 10 stores",
        before: "Weekly Excel exercise · ~60 hrs",
        after: "Real-time dashboard · always current",
      },
      {
        operation: "Production wastage tracking",
        before: "Asked at quarter-end · best guess",
        after: "Measured per employee · 0.8% avg",
      },
      {
        operation: "Franchise reorder triggers",
        before: "Manual WhatsApp · easy to forget",
        after: "Per-franchise cycle · auto-suggested",
      },
      {
        operation: "Order status enquiries",
        before: "'Let me call and check' · phone game",
        after: "Live status pill · all 87 orders",
      },
      {
        operation: "Access control",
        before: "One shared login · everyone sees everything",
        after: "8 roles · 96 permissions · audited",
      },
      {
        operation: "Operations audit",
        before: "Oral history · 'who did this?'",
        after: "Full log · who, when, what, every time",
      },
    ],
    scale: [
      { value: "3,094", label: "Products" },
      { value: "719", label: "RM SKUs" },
      { value: "60", label: "Employees" },
      { value: "10+", label: "Stores" },
    ],
  },

  // ── Module Map (lives inside the Process section, BELOW the principles) ──
  // Layout: 3x3 grid. Dashboard at the centre — honestly framed as the entry
  // point (the screen everyone lands on), not as an architectural core. Spokes
  // point outward from Dashboard to each module — they represent navigation
  // paths, which is what they actually are.
  moduleMap: {
    transition: "Five principles. Here is what they produce.",
    heading: "Sri Rudra ERP, mapped.",
    sub: "Dashboard at the centre — the screen everyone lands on. Eight functional modules around it — where the work actually gets done. Twenty-eight sub-modules underneath. All live on every login.",
    modules: [
      // Row 1
      {
        id: "inventory",
        name: "Inventory",
        icon: "Boxes",
        subs: ["Raw Materials", "Finished Goods", "Catalogue", "Categories", "Stock Txns", "Internal Transfers", "Low Stock"],
      },
      {
        id: "purchase",
        name: "Purchase",
        icon: "ClipboardList",
        subs: ["Purchase Orders", "LR Tracking", "Vendors", "Companies"],
      },
      {
        id: "production",
        name: "Production",
        icon: "Hammer",
        subs: ["Worklogs"],
      },
      // Row 2
      {
        id: "sales",
        name: "Sales",
        icon: "Send",
        subs: ["Outward Orders", "Customers"],
      },
      {
        id: "dashboard",
        name: "Dashboard",
        icon: "LayoutDashboard",
        subs: ["Production Summary", "Revenue Trend", "Order Status", "Low Stock Alerts"],
        isCenter: true,
        coreLabel: "Entry point",
        coreNote: "The screen everyone lands on",
      },
      {
        id: "franchise",
        name: "Franchise",
        icon: "Store",
        subs: ["Franchises", "Reorder Cycles", "Franchise Orders", "Product Mappings"],
      },
      // Row 3
      {
        id: "hr",
        name: "HR",
        icon: "Users",
        subs: ["Employees", "Leave Mgmt"],
      },
      {
        id: "reports",
        name: "Reports",
        icon: "BarChart3",
        subs: ["Employee Perf.", "Product Report", "Purchase Orders", "Outward Orders"],
      },
      {
        id: "settings",
        name: "Settings",
        icon: "Settings",
        subs: ["Audit Logs", "User Management", "Roles & Permissions", "Email Notifications"],
      },
    ],
  },

  // ── How We Build Custom ERP (rewritten with teeth) ──
  process: {
    kicker: "How we build it",
    heading: "Five things we refuse to skip.",
    sub: "Most custom-software disasters start with skipping one of these. We've inherited enough of them to know which steps are non-negotiable. Here's where we won't bend.",
    steps: [
      {
        n: "01",
        title: "We map your workflow on paper before opening an editor.",
        body: "Not the spec. The actual cycle your team runs at 9am on a Monday — wrinkles, exceptions, workarounds. The mismatch between 'how it's supposed to work' and 'how it actually works' is where most projects die. We start there.",
      },
      {
        n: "02",
        title: "We don't start sprint one until the data model is signed.",
        body: "Every custom-software project we've rescued started by skipping this. If the schema is wrong, no UI saves it. We lock the data model in writing before a single screen exists.",
      },
      {
        n: "03",
        title: "Working software at the end of every two weeks.",
        body: "Not status reports. Not design comps. Software you can log into. If you can't click it, we haven't built it — and if a sprint doesn't end with a demo, the sprint didn't end.",
      },
      {
        n: "04",
        title: "Training happens on your floor, on your real data.",
        body: "Software no one uses is software you didn't build. We sit with each role for a day on the actual operations, in the actual language. No PDF manuals, no recorded sessions — humans, real workflows, until it's muscle memory.",
      },
      {
        n: "05",
        title: "We stay attached after delivery.",
        body: "Custom software grows with the business — new modules, edge cases, evolving teams. We don't ship-and-disappear; we stay on as the long-term technical partner. The system isn't 'done.' It's running, and we run it with you.",
      },
    ],
  },

  // ── CTA ───────────────────────────────────────────
  cta: {
    kicker: "Your business · Your loop · Your ERP",
    heading: "We built one operating system. We can build yours.",
    body: "If your business is run from a tangle of spreadsheets, WhatsApp groups, and Tally exports, there's a better version of it. We've built it once. We can build the one shaped to your business.",
    primary: { label: "Start the conversation", to: "/contact" },
    secondary: { label: "See all work", to: "/#portfolio" },
  },

  services: [
    "Custom ERP Development",
    "System Architecture & Data Modelling",
    "Role-Based Access Design",
    "Multi-Location Inventory",
    "Production Tracking",
    "Franchise Operations",
    "Sprint-Based Delivery",
    "Training & Rollout",
  ],
};
