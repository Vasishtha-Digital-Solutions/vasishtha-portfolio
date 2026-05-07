import { motion } from "framer-motion";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SECTION 8 · FINAL TAKEAWAY
   The closing beat. Paper backdrop. A faint dashed-red rule
   floats across the top 20%. A small floating cart SVG sits
   above an italic Fraunces pull-quote, signed off with a mono
   endmark keyed to the case ID.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// ── Cart SVG with floating produce circles above ────────────
function CartMark() {
  return (
    <motion.div
      aria-hidden="true"
      className="mx-auto"
      style={{ width: 52, height: 52, marginBottom: "1.5rem" }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="#C8321C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Cart basket body */}
        <path d="M 20 30 L 30 60 L 62 60 L 68 34 Z" />
        {/* Basket ribs */}
        <line x1="34" y1="36" x2="36" y2="60" />
        <line x1="46" y1="36" x2="46" y2="60" />
        <line x1="58" y1="36" x2="56" y2="60" />
        {/* Handle stem */}
        <path d="M 18 30 L 10 18" />
        {/* Wheels */}
        <circle cx="38" cy="70" r="4" />
        <circle cx="58" cy="70" r="4" />
        {/* Produce circles — red / amber / green, rising above cart */}
        <circle cx="44" cy="20" r="3" fill="#C8321C" />
        <circle cx="52" cy="14" r="2" fill="#FFB84D" />
        <circle cx="62" cy="22" r="2.5" fill="#639922" />
      </svg>
    </motion.div>
  );
}

export default function TownCartTakeaway({ data }) {
  const { takeaway } = data;

  return (
    <section
      className="relative text-center"
      style={{
        padding: "clamp(5rem, 9vw, 8rem) 5vw",
        background: "#F5EEDD",
        backgroundImage: [
          "radial-gradient(ellipse at 15% 25%, rgba(139, 90, 43, 0.08) 0, transparent 55%)",
          "radial-gradient(ellipse at 85% 75%, rgba(200, 50, 28, 0.06) 0, transparent 55%)",
          "repeating-linear-gradient(45deg, transparent 0, transparent 2px, rgba(139, 90, 43, 0.025) 2px, rgba(139, 90, 43, 0.025) 4px)",
        ].join(", "),
      }}
    >
      {/* Decorative dashed-red rule, top 20% of section, 80% width */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "10%",
          width: "80%",
          height: 1,
          backgroundImage:
            "repeating-linear-gradient(90deg, #C8321C 0 8px, transparent 8px 16px)",
          opacity: 0.3,
        }}
      />

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto"
      >
        <CartMark />

        <p
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(28px, 4.5vw, 44px)",
            lineHeight: 1.25,
            color: "#2d1f14",
            maxWidth: 700,
            margin: "2rem auto 0",
            letterSpacing: "-0.02em",
            fontWeight: 500,
          }}
        >
          {takeaway.quote.lead}
          <br />
          {takeaway.quote.start}
          <em style={{ color: "#C8321C", fontWeight: 600 }}>
            {takeaway.quote.accent}
          </em>
          {takeaway.quote.end}
        </p>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#5c4a3a",
            letterSpacing: "0.3em",
            marginTop: "3.5rem",
            fontWeight: 600,
          }}
        >
          {takeaway.endMark}
        </p>
      </motion.div>
    </section>
  );
}
