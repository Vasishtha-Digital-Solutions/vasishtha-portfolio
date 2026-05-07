import { motion } from "framer-motion";
import AisleSign from "./_shared/AisleSign";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SECTION 6 · AISLE 04 / RESTOCK THE SHELF
   Paper backdrop. Amber aisle sign. A dark, full-bleed
   conveyor strip with two animated layers — the belt surface
   ridges (fast, 3s) and coloured package blocks riding on top
   (slow, 20s). Below: 4 hard-shadow loop cards describing the
   weekly optimisation cycle, and a red-arrow footnote.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const reveal = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// Colour map for the conveyor packages (matches .conveyor-item.* in CSS)
const ITEM_TONES = {
  red: { bg: "#C8321C", color: "#FDF3D8" },
  amber: { bg: "#BA7517", color: "#FDF3D8" },
  green: { bg: "#3B6D11", color: "#FDF3D8" },
  cream: { bg: "#FDF3D8", color: "#2d1f14" },
};

// ── Conveyor belt ───────────────────────────────────────────
function ConveyorBelt({ items, itemsDurationSec, beltDurationSec }) {
  // Triple the items for a seamless -33.33% loop (matches
  // @keyframes slowMarquee in the HTML).
  const loopItems = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: 80,
        background:
          "linear-gradient(180deg, #5a4a38 0%, #3d3126 50%, #2a2119 100%)",
        borderTop: "3px solid #1a1410",
        borderBottom: "3px solid #1a1410",
        // Full-bleed: break out of the 5vw section padding
        margin: "0 -5vw 3.5rem",
      }}
    >
      {/* Belt-surface ridges (fast scroll) */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #3d3126 0, #3d3126 30px, #2a2119 30px, #2a2119 32px, #3d3126 32px, #3d3126 60px)",
          backgroundRepeat: "repeat",
        }}
        animate={{ backgroundPositionX: ["0px", "-62px"] }}
        transition={{
          duration: beltDurationSec,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Packages riding on top (slow scroll) */}
      <motion.div
        className="absolute inset-0 flex items-center"
        style={{
          gap: 60,
          padding: "0 20px",
          width: "max-content",
          willChange: "transform",
        }}
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: itemsDurationSec,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopItems.map((item, i) => {
          const t = ITEM_TONES[item.tone] || ITEM_TONES.cream;
          return (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: 50,
                height: 50,
                borderRadius: 4,
                background: t.bg,
                color: t.color,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                fontWeight: 700,
                boxShadow: "2px 3px 0 rgba(0,0,0,0.3)",
              }}
            >
              {item.label}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ── Loop card ───────────────────────────────────────────────
function LoopCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1, ease: EASE }}
      whileHover={{
        x: -4,
        y: -4,
        boxShadow: "10px 10px 0 #2d1f14",
        transition: { duration: 0.3, ease: EASE },
      }}
      className="relative"
      style={{
        background: "#FEFCF5",
        border: "3px solid #2d1f14",
        borderRadius: 7,
        padding: "1.75rem 1.25rem",
        boxShadow: "6px 6px 0 #2d1f14",
        transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      {/* Red circle pin, top-left, protruding past the border */}
      <span
        aria-hidden="true"
        className="absolute"
        style={{
          top: -3,
          left: -3,
          width: 20,
          height: 20,
          background: "#C8321C",
          borderRadius: "50%",
          border: "3px solid #2d1f14",
        }}
      />

      <p
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontStyle: "italic",
          fontSize: 44,
          fontWeight: 700,
          color: "#C8321C",
          lineHeight: 1,
          marginBottom: 12,
        }}
      >
        {card.n}
      </p>
      <p
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: "#2d1f14",
          marginBottom: 6,
        }}
      >
        {card.name}
      </p>
      <p style={{ fontSize: 13, color: "#5c4a3a", lineHeight: 1.55 }}>
        {card.desc}
      </p>
    </motion.div>
  );
}

// ── Main section ────────────────────────────────────────────
export default function TownCartAisle04({ data }) {
  const { aisle04 } = data;

  return (
    <section
      className="relative overflow-hidden"
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
      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
        {/* Aisle sign */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <AisleSign
            num={aisle04.sign.num}
            name={aisle04.sign.name}
            tone={aisle04.sign.tone}
          />
        </motion.div>

        {/* Headline */}
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
          {aisle04.headlineStart}{" "}
          <em style={{ fontStyle: "italic", color: "#C8321C" }}>
            {aisle04.headlineAccent}
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
          {aisle04.lede}
        </motion.p>
      </div>

      {/* Conveyor belt (full bleed) */}
      <ConveyorBelt
        items={aisle04.conveyor.items}
        itemsDurationSec={aisle04.conveyor.itemsDurationSec}
        beltDurationSec={aisle04.conveyor.beltDurationSec}
      />

      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
        {/* Loop grid — 4 cols desktop, 2 cols mobile */}
        <div
          className="mx-auto grid gap-4 grid-cols-2 min-[680px]:grid-cols-4"
          style={{ maxWidth: 840 }}
        >
          {aisle04.loopCards.map((c, i) => (
            <LoopCard key={i} card={c} index={i} />
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
          style={{
            marginTop: "2.5rem",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#5c4a3a",
            letterSpacing: "0.22em",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              color: "#C8321C",
              fontSize: 18,
              verticalAlign: "middle",
              marginRight: 8,
            }}
          >
            ↺
          </span>
          {aisle04.loopFootnote}
        </motion.p>
      </div>
    </section>
  );
}
