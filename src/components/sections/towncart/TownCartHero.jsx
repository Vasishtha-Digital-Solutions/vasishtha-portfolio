import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PriceTag from "./_shared/PriceTag";

/* ═════════════════════════════════════════════════════════════
   TOWNCART CASE STUDY — HERO
   Exact visual port of approved towncart-case-study.html hero.
   - Asymmetric editorial layout
   - Supermarket-interior pastiche (paper texture + grain overlay)
   - Cascading price-tag stack (right column on desktop, wraps
     above stats on mobile)
   - Framer Motion replaces CSS keyframes per portfolio rules
   ═════════════════════════════════════════════════════════════ */

// Master easing — matches the CSS cubic-bezier(0.2, 0.8, 0.2, 1)
const EASE = [0.2, 0.8, 0.2, 1];

// Tokens borrowed from data.palette so the component can stand alone
// even when the palette changes in data.
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE },
});

// Price-tag drop-in — matches @keyframes dropTag (0→65%→100%)
const dropTag = (delay = 0, finalRotate = 0) => ({
  initial: { opacity: 0, y: -60, rotate: -15 },
  animate: {
    opacity: 1,
    y: [0, 8, 0],
    rotate: [-15, 5, finalRotate],
  },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.3, 1.5, 0.4, 1],
    times: [0, 0.65, 1],
  },
});

// ── Helper: render H1 with italic "cart" accent + pink underlay ──
function HeroHeadline({ lines }) {
  return (
    <h1
      className="m-0"
      style={{
        fontFamily: "'Fraunces', Georgia, serif",
        fontWeight: 500,
        lineHeight: 0.98,
        letterSpacing: "-0.035em",
        color: "#1a1410",
        fontSize: "clamp(50px, 7.5vw, 104px)",
        maxWidth: 920,
        margin: "0 0 2rem",
      }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line.italicAccent ? (
            <>
              {line.text}
              <span
                className="relative inline-block"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                {line.italicAccent}
                {/* Pink highlight underlay */}
                <span
                  aria-hidden="true"
                  className="absolute"
                  style={{
                    bottom: "0.12em",
                    left: -4,
                    right: -4,
                    height: "0.24em",
                    background: "rgba(232, 183, 192, 0.55)",
                    zIndex: -1,
                  }}
                />
              </span>
              {line.textAfter}
            </>
          ) : (
            line.text
          )}
        </span>
      ))}
    </h1>
  );
}

export default function TownCartHero({ data }) {
  const { hero } = data;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: 720,
        padding: "3rem 4vw 4rem",
        background: "#F0E8D4",
        backgroundImage: [
          "radial-gradient(ellipse at 15% 20%, rgba(139, 90, 43, 0.06) 0, transparent 55%)",
          "radial-gradient(ellipse at 85% 80%, rgba(200, 50, 28, 0.04) 0, transparent 55%)",
          "repeating-linear-gradient(45deg, transparent 0, transparent 2px, rgba(139, 90, 43, 0.02) 2px, rgba(139, 90, 43, 0.02) 4px)",
        ].join(", "),
        color: "#1a1410",
      }}
    >
      {/* ─── Section-scoped grain overlay ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          opacity: 0.06,
          mixBlendMode: "multiply",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* ─── Minimal back-link nav (matches Lumeria pattern) ─── */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-10 py-3.5 flex items-center justify-between">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.1em",
            color: "rgba(26,20,16,0.5)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C8321C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26,20,16,0.5)")}
        >
          <ArrowLeft size={14} />
          ALL PROJECTS
        </Link>
        <img
          src="/vasishtha-logo.png"
          alt="Vasishtha Digital Solutions"
          style={{ height: 28, width: "auto" }}
          draggable={false}
        />
      </nav>

      {/* ═══ Hero container ═══ */}
      <div className="relative mx-auto w-full" style={{ maxWidth: 1280, zIndex: 2 }}>
        {/* Top meta row — CASE STUDY · 001 · PAID SOCIAL · LEAD GEN · 2026 */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-wrap items-center gap-x-7 gap-y-2 mt-16 md:mt-20 mb-10"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: "#2d1f14",
          }}
        >
          {hero.meta.map((m, i) => (
            <span key={i} className="contents">
              <span>{m}</span>
              {i < hero.meta.length - 1 && (
                <span style={{ opacity: 0.35 }}>·</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Tilted red ribbon */}
        <motion.div {...fadeUp(0.25)} className="inline-block">
          <span
            className="inline-block mb-8"
            style={{
              background: "#C8321C",
              color: "#FEFCF5",
              padding: "7px 18px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              fontWeight: 500,
              transform: "rotate(-1deg)",
              boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.12)",
            }}
          >
            {hero.ribbon}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.4)} transition={{ duration: 1.2, delay: 0.4, ease: EASE }}>
          <HeroHeadline lines={hero.headline} />
        </motion.div>

        {/* Italic lede */}
        <motion.p
          {...fadeUp(0.7)}
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(18px, 2vw, 23px)",
            lineHeight: 1.45,
            color: "#3d2817",
            maxWidth: 620,
            margin: "0 0 3.5rem",
            fontWeight: 400,
          }}
        >
          {hero.lede}
        </motion.p>

        {/* Mobile-only tag strip — price tags above stats on small screens */}
        <div
          className="lg:hidden relative mb-10 flex flex-wrap gap-3 items-start"
          style={{ zIndex: 2 }}
        >
          {hero.priceTags.map((t, i) => (
            <motion.div key={i} {...dropTag(1.1 + i * 0.15, t.rotate)}>
              <PriceTag tone={t.tone} label={t.label} value={t.value} />
            </motion.div>
          ))}
        </div>

        {/* Stats strip — 4 cols desktop, 2 cols mobile */}
        <motion.div
          {...fadeUp(0.9)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-7"
          style={{
            borderTop: "0.5px solid rgba(45, 31, 20, 0.25)",
            maxWidth: 920,
          }}
        >
          {hero.stats.map((s) => (
            <div key={s.kicker}>
              <p
                className="m-0 mb-2.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  color: "#7a5f4a",
                }}
              >
                {s.kicker}
              </p>
              <p
                className="m-0"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "clamp(28px, 3vw, 38px)",
                  fontWeight: 600,
                  color: "#1a1410",
                  lineHeight: 1,
                  marginBottom: 5,
                }}
              >
                {s.big}
              </p>
              <p
                className="m-0"
                style={{ fontSize: 12, color: "#5c4a3a", lineHeight: 1.4 }}
              >
                {s.foot}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ─── Desktop-only cascading price-tag stack (right edge, centered) ─── */}
        <div
          className="hidden lg:flex flex-col items-end"
          style={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
            width: 200,
            gap: 14,
            zIndex: 3,
          }}
        >
          {hero.priceTags.map((t, i) => (
            <motion.div
              key={i}
              {...dropTag(1.1 + i * 0.15, t.rotate)}
              style={{
                // Even tags nudge left slightly to give the stack a
                // hand-placed, not-quite-aligned feel (matches HTML).
                marginRight: i % 2 === 1 ? i === 1 ? 14 : 22 : 0,
              }}
            >
              <PriceTag tone={t.tone} label={t.label} value={t.value} />
            </motion.div>
          ))}

          {/* Handwritten note under the stack */}
          <motion.p
            {...fadeUp(1.8)}
            className="m-0"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: "italic",
              fontSize: 17,
              color: "#C8321C",
              margin: "12px 6px 0 0",
              transform: "rotate(-3deg)",
              textAlign: "right",
              lineHeight: 1.2,
            }}
          >
            {hero.tagNote.map((ln, i) => (
              <span key={i} className="block">
                {ln}
              </span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
