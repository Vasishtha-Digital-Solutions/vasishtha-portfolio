import { motion } from "framer-motion";
import AisleSign from "./_shared/AisleSign";
import PriceTag from "./_shared/PriceTag";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SECTION 4 · AISLE 02 / WHO WENT IN THE CART
   Dark ink backdrop with a vanishing-point perspective grid
   on the floor, a flickering "open 24/7" neon sign top-right,
   and a 2-column split between "IN THE BASKET" (green) and
   "LEFT ON THE SHELF" (red strikethrough).
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const reveal = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// ── Shopping-cart SVG (IN basket) ───────────────────────────
function CartIcon() {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="#97C459"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: 56, height: 56, margin: "1.25rem 0 1.5rem" }}
    >
      <path d="M 10 18 L 20 44 L 50 44 L 54 22 Z" />
      <line x1="22" y1="22" x2="24" y2="44" />
      <line x1="32" y1="22" x2="32" y2="44" />
      <line x1="42" y1="22" x2="40" y2="44" />
      <path d="M 8 18 L 4 10" />
      <circle cx="26" cy="52" r="4" />
      <circle cx="44" cy="52" r="4" />
    </svg>
  );
}

// ── Crossed-out shelf SVG (LEFT basket) ─────────────────────
function ShelfIcon() {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke="#F09595"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: 56, height: 56, margin: "1.25rem 0 1.5rem" }}
    >
      <rect x="10" y="14" width="44" height="36" rx="3" />
      <line x1="10" y1="26" x2="54" y2="26" />
      <line x1="10" y1="38" x2="54" y2="38" />
      <line x1="18" y1="8" x2="18" y2="56" strokeDasharray="3 3" />
      <line x1="46" y1="8" x2="46" y2="56" strokeDasharray="3 3" />
    </svg>
  );
}

// ── Perspective floor grid (SVG, ~12% opacity in HTML) ──────
function PerspectiveGrid() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.12 }}
    >
      <g stroke="#FDF3D8" strokeWidth="0.6" fill="none">
        {/* Vanishing-point lines */}
        <line x1="720" y1="0" x2="0" y2="800" />
        <line x1="720" y1="0" x2="240" y2="800" />
        <line x1="720" y1="0" x2="480" y2="800" />
        <line x1="720" y1="0" x2="720" y2="800" />
        <line x1="720" y1="0" x2="960" y2="800" />
        <line x1="720" y1="0" x2="1200" y2="800" />
        <line x1="720" y1="0" x2="1440" y2="800" />
        {/* Horizontal depth bands */}
        <line x1="0" y1="160" x2="1440" y2="160" />
        <line x1="0" y1="320" x2="1440" y2="320" />
        <line x1="0" y1="480" x2="1440" y2="480" />
        <line x1="0" y1="640" x2="1440" y2="640" />
      </g>
    </svg>
  );
}

// ── Flickering "open 24/7" neon ─────────────────────────────
// Uses a framer-motion keyframe sequence to mimic CSS flicker:
// 0%, 18–22%, 25%, 53–57%, 100% full; 20%, 24%, 55% dim.
function NeonSign({ text }) {
  const glow =
    "0 0 8px #E8411F, 0 0 20px #C8321C, 0 0 40px rgba(200, 50, 28, 0.6)";
  return (
    <motion.div
      aria-hidden="true"
      className="absolute hidden min-[680px]:block"
      style={{
        top: 30,
        right: "8%",
        fontFamily: "'Fraunces', Georgia, serif",
        fontStyle: "italic",
        fontSize: "clamp(20px, 2.2vw, 28px)",
        color: "#E8411F",
        textShadow: glow,
        letterSpacing: "0.04em",
        transform: "rotate(-4deg)",
        zIndex: 3,
      }}
      /* Matches original @keyframes flicker exactly:
         full on at 0, 18, 22, 25, 53, 57, 100 %
         dimmed (0.4) at 20, 24, 55 %                             */
      animate={{
        opacity: [0.9, 0.9, 0.4, 0.9, 0.4, 0.9, 0.9, 0.4, 0.9, 0.9],
      }}
      transition={{
        duration: 8,
        ease: "linear",
        repeat: Infinity,
        times: [0, 0.18, 0.2, 0.22, 0.24, 0.25, 0.53, 0.55, 0.57, 1],
      }}
    >
      {text}
    </motion.div>
  );
}

// ── Basket card ─────────────────────────────────────────────
function Basket({ variant, tag, icon, items }) {
  const isIn = variant === "in";

  const baseStyle = {
    borderRadius: 12,
    padding: "2.5rem 2rem 2rem",
    backdropFilter: "blur(2px)",
    position: "relative",
    transition: "transform 0.4s ease",
  };

  const inStyle = {
    background:
      "linear-gradient(135deg, rgba(59, 109, 17, 0.2), rgba(59, 109, 17, 0.08))",
    border: "1.5px solid #639922",
    boxShadow: "0 0 40px -10px rgba(99, 153, 34, 0.4)",
  };

  const outStyle = {
    background:
      "linear-gradient(135deg, rgba(163, 45, 45, 0.18), rgba(163, 45, 45, 0.08))",
    border: "1.5px solid rgba(226, 75, 74, 0.55)",
    opacity: 0.9,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: isIn ? 1 : 0.9, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay: isIn ? 0.1 : 0.25 }}
      whileHover={{ y: -6 }}
      style={{ ...baseStyle, ...(isIn ? inStyle : outStyle) }}
    >
      {/* Floating price tag hugging the top-left corner */}
      <motion.span
        className="absolute"
        style={{ top: -14, left: 24 }}
        animate={{ y: [0, -6, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        {/* Single-line floating tag — no `label`, full text as `value` */}
        <PriceTag tone={isIn ? "green" : "red"} value={tag} />
      </motion.span>

      {/* Icon */}
      {icon === "cart" ? <CartIcon /> : <ShelfIcon />}

      {/* Items */}
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            padding: "14px 0",
            borderTop: i === 0 ? "none" : "1px dashed rgba(255, 255, 255, 0.2)",
            paddingTop: i === 0 ? 4 : 14,
          }}
        >
          <p
            style={{
              fontSize: 17,
              fontWeight: 600,
              marginBottom: 4,
              color: "#F5EEDD",
              textDecoration: isIn ? "none" : "line-through",
              textDecorationColor: "#E24B4A",
              textDecorationThickness: "2.5px",
              opacity: isIn ? 1 : 0.7,
            }}
          >
            {item.head}
          </p>
          <p style={{ fontSize: 13, color: "rgba(245, 238, 221, 0.65)" }}>
            {item.desc}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

// ── Main section ────────────────────────────────────────────

export default function TownCartAisle02({ data }) {
  const { aisle02 } = data;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(5rem, 9vw, 9rem) 5vw",
        background: "linear-gradient(180deg, #1a1410 0%, #2d1f14 100%)",
        color: "#F5EEDD",
      }}
    >
      {/* Subtle repeating scanline overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255, 255, 255, 0.02) 3px, rgba(255, 255, 255, 0.02) 4px)",
        }}
      />

      <PerspectiveGrid />
      <NeonSign text={aisle02.neon} />

      <div className="relative mx-auto" style={{ maxWidth: 1100, zIndex: 3 }}>
        {/* Aisle sign */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <AisleSign
            num={aisle02.sign.num}
            name={aisle02.sign.name}
            tone={aisle02.sign.tone}
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
          }}
        >
          {aisle02.headlineStart}{" "}
          <em style={{ fontStyle: "italic", color: "#FFB84D" }}>
            {aisle02.headlineAccent}
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
            color: "rgba(245, 238, 221, 0.8)",
          }}
        >
          {aisle02.lede}
        </motion.p>

        {/* Basket split — 2 cols desktop, stacked on mobile (≤ 680px) */}
        <div
          className="relative grid gap-6 grid-cols-1 min-[680px]:grid-cols-2"
          style={{ zIndex: 3 }}
        >
          <Basket
            variant="in"
            tag={aisle02.inBasket.tag}
            icon={aisle02.inBasket.icon}
            items={aisle02.inBasket.items}
          />
          <Basket
            variant="out"
            tag={aisle02.onShelf.tag}
            icon={aisle02.onShelf.icon}
            items={aisle02.onShelf.items}
          />
        </div>
      </div>
    </section>
  );
}
