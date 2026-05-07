// ──────────────────────────────────────────────────────────────
// Contact Page — Content & Config
// Matches the VDS home landing palette. Form posts to a backend
// endpoint that the team will wire up with SendGrid / MailerSend /
// similar. See `form.endpoint` below.
// ──────────────────────────────────────────────────────────────

export const contactData = {
  // Palette kept in sync with home.js (duplicated here to avoid cross-page
  // import; update both if the brand tokens ever change).
  palette: {
    bg: "#000000",
    bg2: "#050507",
    bg3: "#07070a",
    card: "#0a0a0c",
    cardHover: "#0a0a0f",

    orange: "#F18F00",
    orangeDeep: "#CC7700",
    amber: "#FFB24C",

    white: "#ffffff",
    text: "rgba(255,255,255,0.92)",
    textDim: "rgba(255,255,255,0.65)",
    textMuted: "rgba(255,255,255,0.40)",
    textFaint: "rgba(255,255,255,0.28)",

    border: "rgba(255,255,255,0.08)",
    borderStrong: "rgba(255,255,255,0.18)",
    line: "rgba(255,255,255,0.06)",
    danger: "#E5484D",
  },

  // ── Top bar ──────────────────────────────────────────
  // Logo LEFT, "Back to Home" ghost pill RIGHT (we're already on /contact,
  // so no Book-a-Call CTA makes sense here).
  topBar: {
    logo: {
      src: "/vasishtha-logo.png",
      alt: "Vasishtha Digital Solutions",
      to: "/",
    },
    cta: {
      label: "Back to Home",
      to: "/",
    },
  },

  // ── Intro block ─────────────────────────────────────
  intro: {
    kicker: "Get in touch",
    headline: "Let's talk.",
    subtext:
      "Tell us what you're launching, growing, or shipping. We reply within a business day with a shortlist of what we'd actually do first — no boilerplate decks.",
  },

  // ── Form config ─────────────────────────────────────
  form: {
    // TODO: Replace with your backend endpoint. The handler POSTs JSON
    // to this URL. Wire SendGrid / MailerSend / Nodemailer / etc. on the
    // server to forward the submission to info@vasishtha.co.
    // Payload shape: { name, email, company, interests: string[], budget, message }
    endpoint: "/api/contact",

    // Copy
    nameLabel: "Your name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email address",
    emailPlaceholder: "you@company.com",
    companyLabel: "Company or brand",
    companyPlaceholder: "Optional",
    helpLabel: "What do you need help with?",
    helpHint: "Pick one or more",
    helpOptions: [
      { value: "social", label: "Social Media" },
      { value: "software", label: "Software" },
      { value: "influencer", label: "Influencer" },
    ],
    budgetLabel: "Budget range",
    budgetOptions: [
      "Not sure yet",
      "Under ₹1 Lakh",
      "₹1 – 5 Lakhs",
      "₹5 – 15 Lakhs",
      "₹15 Lakhs +",
    ],
    messageLabel: "Tell us about the project",
    messagePlaceholder:
      "Goals, timeline, specific questions... anything helps.",

    // Button states
    submit: {
      idle: "Send it",
      sending: "Sending…",
      done: "Sent",
      retry: "Try again",
    },

    // Success / error
    successTitle: "Got it.",
    successBody:
      "We'll reply within 1 business day from info@vasishtha.co. If anything comes up in the meantime, just reply to that email — we keep all project chats in one thread.",
    errorFallback:
      "Couldn't send just now. Please email info@vasishtha.co directly and we'll pick it up from there.",
  },

  // ── Side info (right column) ────────────────────────
  sideInfo: {
    kicker: "Or reach us directly",
    channels: [
      {
        label: "info@vasishtha.co",
        sub: "Direct email · primary",
        href: "mailto:info@vasishtha.co",
        kind: "email",
      },
      {
        label: "+91 99089 62504",
        sub: "WhatsApp · fastest reply during work hours",
        href: "https://wa.me/919908962504",
        kind: "whatsapp",
      },
      {
        label: "+91 99089 62504",
        sub: "Phone · same number, direct line",
        href: "tel:+919908962504",
        kind: "phone",
      },
      {
        label: "@vasishtha_digital_solutions",
        sub: "Instagram · studio work and behind-the-scenes",
        href: "https://www.instagram.com/vasishtha_digital_solutions/",
        kind: "instagram",
      },
      {
        label: "Vasishtha Digital Solutions",
        sub: "LinkedIn · company page",
        href: "https://www.linkedin.com/company/vasishtha-digital-solutions/",
        kind: "linkedin",
      },
    ],
    location: {
      label: "Studio",
      city: "Hyderabad, India",
      note: "Remote-friendly · working globally",
    },
    statusNote: "Replying in ~1 business day",
  },
}
