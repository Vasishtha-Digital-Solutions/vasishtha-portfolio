import { motion } from "framer-motion";
import AisleSign from "./_shared/AisleSign";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SECTION 3 · AISLE 01 / THE SHOPPING LIST
   Paper-texture backdrop. A slightly-rotated notebook paper
   card with a paperclip at top, coffee stain, red margin rule,
   ruled horizontal lines, and 4 checklist items. A handwritten
   margin note hangs off the right edge (desktop only).
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

// Reveal — matches the original CSS .reveal/.in behaviour.
const reveal = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE },
  },
};

// Stagger for each checklist row
const rowReveal = (i) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, delay: 0.15 + i * 0.1, ease: EASE },
});

// ── Sub-components (kept local for tight coupling) ──────────

function Paperclip() {
  return (
    <div
      aria-hidden="true"
      className="absolute"
      style={{
        top: -16,
        left: "42%",
        width: 38,
        height: 66,
        border: "4px solid #9a9a9a",
        borderRadius: 16,
        borderBottom: "none",
        boxShadow: "2px 2px 3px rgba(0,0,0,0.15)",
      }}
    >
      <span
        className="absolute"
        style={{
          top: 8,
          left: 8,
          right: 8,
          bottom: 0,
          border: "4px solid #9a9a9a",
          borderRadius: 8,
          borderBottom: "none",
        }}
      />
    </div>
  );
}

function CoffeeStain() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      className="absolute"
      style={{ top: 10, right: 14, width: 70, height: 70, opacity: 0.35, pointerEvents: "none" }}
    >
      <defs>
        <radialGradient id="tc-coffee-gradient" cx="40%" cy="40%" r="60%">
          <stop offset="0" stopColor="#8B4513" stopOpacity="0.4" />
          <stop offset="0.7" stopColor="#8B4513" stopOpacity="0.15" />
          <stop offset="1" stopColor="#8B4513" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="40" cy="40" rx="32" ry="30" fill="url(#tc-coffee-gradient)" />
      <ellipse
        cx="38"
        cy="38"
        rx="24"
        ry="22"
        fill="none"
        stroke="#8B4513"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

function ChecklistCheckbox() {
  // A square outline with a red checkmark "drawn" inside.
  // The SVG overshoots the box slightly so the stroke feels hand-done.
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: 24,
        height: 24,
        border: "2.5px solid #2d1f14",
        borderRadius: 4,
        background: "#FEFCF5",
        marginTop: 3,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8321C"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute"
        style={{ inset: -6, width: 36, height: 36 }}
      >
        <path d="M5 13 L10 18 L20 6" />
      </svg>
    </div>
  );
}

function MarginNote({ lines }) {
  // Handwritten red note with an arrow pointing left toward the list.
  // Hidden on screens below the 880px breakpoint that matches the HTML.
  return (
    <div
      className="hidden min-[880px]:block absolute"
      style={{
        right: -80,
        top: "50%",
        transform: "rotate(-12deg)",
        fontFamily: "'Caveat', cursive",
        fontSize: 22,
        color: "#C8321C",
        width: 150,
        lineHeight: 1.1,
      }}
    >
      {/* Arrow pointing from the note back into the list */}
      <span
        aria-hidden="true"
        className="absolute"
        style={{
          left: -35,
          top: "50%",
          width: 30,
          height: 30,
          transform: "translateY(-50%)",
          background:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><path d='M 5 20 L 30 20 M 20 10 L 30 20 L 20 30' stroke='%23C8321C' stroke-width='2.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\") no-repeat",
        }}
      />
      {lines.map((ln, i) => (
        <span key={i} className="block">
          {ln}
        </span>
      ))}
    </div>
  );
}

// ── Main section ────────────────────────────────────────────

export default function TownCartAisle01({ data }) {
  const { aisle01 } = data;

  return (
    <section
      className="relative"
      style={{
        padding: "clamp(5rem, 9vw, 9rem) 5vw",
        background: "#F5EEDD",
        backgroundImage: [
          "radial-gradient(ellipse at 15% 25%, rgba(139, 90, 43, 0.08) 0, transparent 55%)",
          "radial-gradient(ellipse at 85% 75%, rgba(200, 50, 28, 0.06) 0, transparent 55%)",
          "repeating-linear-gradient(45deg, transparent 0, transparent 2px, rgba(139, 90, 43, 0.025) 2px, rgba(139, 90, 43, 0.025) 4px)",
        ].join(", "),
      }}
    >
      {/* Section container */}
      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
        {/* Section head — centered aisle sign */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 relative"
          style={{ zIndex: 2 }}
        >
          <AisleSign num={aisle01.sign.num} name={aisle01.sign.name} tone={aisle01.sign.tone} />
        </motion.div>

        {/* Headline with red italic accent */}
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto text-center"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: "clamp(32px, 5.5vw, 60px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 780,
            margin: "1.75rem auto 1.25rem",
            color: "#1a1410",
          }}
        >
          {aisle01.headlineStart}{" "}
          <em style={{ fontStyle: "italic", color: "#C8321C" }}>
            {aisle01.headlineAccent}
          </em>
        </motion.h2>

        {/* Lede */}
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mx-auto"
          style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto 3.5rem",
            color: "#5c4a3a",
          }}
        >
          {aisle01.lede.map((piece, i) =>
            typeof piece === "string" ? (
              <span key={i}>{piece}</span>
            ) : (
              <em
                key={i}
                style={{ fontStyle: "italic", color: "#C8321C", fontWeight: 500 }}
              >
                {piece.accent}
              </em>
            )
          )}
        </motion.p>

        {/* ═══ Shopping list paper card ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: EASE }}
          whileHover={{ rotate: 0, transition: { duration: 0.5, ease: EASE } }}
          className="relative mx-auto"
          style={{
            maxWidth: 560,
            background: "#FEFCF5",
            padding: "3rem 3.25rem",
            borderRadius: 3,
            boxShadow:
              "0 30px 60px -18px rgba(74, 50, 31, 0.35), 0 10px 20px -6px rgba(74, 50, 31, 0.2)",
            // Ruled notebook lines
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0, transparent 42px, rgba(200, 50, 28, 0.18) 42px, rgba(200, 50, 28, 0.18) 43px)",
          }}
        >
          {/* Red vertical margin rule */}
          <span
            aria-hidden="true"
            className="absolute"
            style={{
              left: 40,
              top: 0,
              bottom: 0,
              width: 1.5,
              background: "rgba(200, 50, 28, 0.3)",
            }}
          />

          <Paperclip />
          <CoffeeStain />

          {/* Title */}
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.2em",
              color: "#C8321C",
              marginBottom: 22,
              paddingTop: 12,
              paddingLeft: 20,
              fontWeight: 600,
            }}
          >
            {aisle01.listTitle}
          </p>

          {/* Items */}
          {aisle01.items.map((item, i) => (
            <motion.div
              key={i}
              {...rowReveal(i)}
              className="flex items-start"
              style={{ gap: 16, padding: "12px 0 16px 20px" }}
            >
              <ChecklistCheckbox />
              <div>
                <p
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: 28,
                    fontWeight: 600,
                    lineHeight: 1,
                    color: "#2d1f14",
                    marginBottom: 2,
                  }}
                >
                  {item.head}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#7a5f4a",
                    lineHeight: 1.55,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          <MarginNote lines={aisle01.marginNote} />
        </motion.div>
      </div>
    </section>
  );
}
