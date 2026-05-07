import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* ═════════════════════════════════════════════════════════════
   YWI CASE STUDY — HERO (Section 1)
   Exact visual port of approved ywi-case-study.html hero.
   ─ Editorial dark-warm stage
   ─ Right-side interior photo with cinematic gradient mask
   ─ Left column: badge, mono meta, big H1 (yellow middle line),
     short yellow underline bar, italic lede, 4-stat strip,
     tag chips
   ─ Left-edge yellow vertical accent line
   ─ Ambient grain + top-right yellow glow
   ─ Framer Motion for all entrance animations (no CSS keyframes)
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

// Standard fade-up used by most blocks
const fadeUp = (delay = 0, duration = 1) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: EASE },
});

// Yellow underline bar growth (matches .hl @keyframes lineGrow)
const lineGrow = (delay = 0.6) => ({
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function YWIHero({ data }) {
  const { hero, palette } = data;

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "3rem 5vw 4rem",
        background: palette.bg,
        color: palette.cream,
      }}
    >
      {/* ─── Subtle woven wood-grain texture (hero-tex) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(90deg, transparent 0, transparent 3px, rgba(139,104,64,0.025) 3px, rgba(139,104,64,0.025) 4px)",
            "repeating-linear-gradient(0deg, transparent 0, transparent 8px, rgba(139,104,64,0.012) 8px, rgba(139,104,64,0.012) 9px)",
          ].join(", "),
        }}
      />

      {/* ─── Top-right ambient yellow glow (hero-glow) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-10%",
          right: "-5%",
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(ellipse at center, rgba(255,200,60,0.04) 0%, transparent 65%)",
        }}
      />

      {/* ─── Left-edge yellow vertical accent line (hero-line-l) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-full"
        style={{
          width: 3,
          background: `linear-gradient(180deg, transparent 10%, ${palette.yellow} 30%, ${palette.yellow} 70%, transparent 90%)`,
          opacity: 0.3,
        }}
      />

      {/* ─── Section-scoped grain overlay (lighter than global) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.03,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* ─── Right-side interior photo with gradient mask (hero-ill) ─── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 bottom-0 lg:w-[55%] w-full overflow-hidden lg:opacity-100 opacity-30"
        style={{ zIndex: 1 }}
      >
        <motion.img
          src={hero.image.src}
          alt={hero.image.alt}
          loading="eager"
          className="w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
        />
        {/* Left-to-right bg-cover gradient (pushes focus onto left column) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background: `linear-gradient(90deg, ${palette.bg} 0%, rgba(20,18,16,0.7) 15%, rgba(20,18,16,0.3) 40%, rgba(20,18,16,0.08) 65%, transparent 100%)`,
          }}
        />
        {/* Top/bottom vignette for editorial framing */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 3,
            background:
              "linear-gradient(180deg, rgba(20,18,16,0.5) 0%, transparent 20%, transparent 80%, rgba(20,18,16,0.6) 100%)",
          }}
        />
      </div>

      {/* ─── Minimal back-link nav (matches Lumeria / TownCart pattern) ─── */}
      <nav className="absolute top-0 left-0 right-0 z-[60] px-6 md:px-10 py-3.5 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.1em",
            color: "rgba(242,237,230,0.5)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = palette.yellow)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(242,237,230,0.5)")
          }
        >
          <ArrowLeft size={14} />
          ALL PROJECTS
        </Link>
        <div
          className="flex items-center gap-2"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <div
            className="w-[28px] h-[28px] rounded flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #2a2520, #1a1714)",
              color: palette.yellow,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            VDS
          </div>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: palette.cream,
              letterSpacing: "0.08em",
            }}
          >
            Vasishtha
          </span>
        </div>
      </nav>

      {/* ═══ Hero content column (left-aligned, editorial) ═══ */}
      <div
        className="relative mx-auto w-full"
        style={{ maxWidth: 1280, zIndex: 2 }}
      >
        {/* ── Badge: yellow-ringed dot + wordmark ── */}
        <motion.div
          {...fadeUp(0.1, 0.8)}
          className="flex items-center gap-[14px] mb-12 mt-16 md:mt-20"
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 38,
              height: 38,
              border: "1.5px solid rgba(255,200,60,0.4)",
            }}
          >
            <span
              className="block rounded-full"
              style={{ width: 12, height: 12, background: palette.yellow }}
            />
          </div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              opacity: 0.85,
            }}
          >
            {hero.badge}
          </span>
        </motion.div>

        {/* ── Mono meta row — CASE STUDY / 003 / ORGANIC CONTENT / 2026 ── */}
        <motion.div
          {...fadeUp(0.2, 0.9)}
          className="flex items-center flex-wrap mb-10"
          style={{
            gap: 22,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.28em",
            color: palette.cream3,
          }}
        >
          {hero.meta.map((m, i) => (
            <span key={i} className="contents">
              <span>{m}</span>
              {i < hero.meta.length - 1 && (
                <span style={{ opacity: 0.4 }}>/</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* ── H1 — 3-line editorial headline, yellow middle line ── */}
        <motion.h1
          {...fadeUp(0.35, 1.1)}
          className="m-0 mb-8"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(42px, 7vw, 88px)",
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            maxWidth: 780,
            color: palette.cream,
          }}
        >
          {hero.headline.map((line, i) => (
            <span
              key={i}
              className="block"
              style={line.accent ? { color: palette.yellow } : undefined}
            >
              {line.text}
            </span>
          ))}
        </motion.h1>

        {/* ── Short yellow underline bar (52px, grows from left) ── */}
        <motion.div
          {...lineGrow(0.6)}
          className="origin-left"
          style={{
            width: 52,
            height: 2,
            background: palette.yellow,
            margin: "0 0 1.5rem",
          }}
        />

        {/* ── Italic lede ── */}
        <motion.p
          {...fadeUp(0.7, 1)}
          className="m-0"
          style={{
            fontSize: "clamp(16px, 1.6vw, 19px)",
            lineHeight: 1.65,
            color: palette.cream2,
            maxWidth: 540,
            margin: "0 0 3.5rem",
            fontWeight: 300,
          }}
        >
          {hero.lede}
        </motion.p>

        {/* ── 4-stat strip with hairline dividers ── */}
        <motion.div
          {...fadeUp(0.9, 1)}
          className="flex flex-wrap pt-6"
          style={{
            gap: "clamp(20px, 4vw, 48px)",
            borderTop: `1px solid ${palette.line}`,
            maxWidth: 720,
          }}
        >
          {hero.stats.map((s, i) => (
            <div key={s.kicker} className="flex items-start">
              <div>
                <p
                  className="m-0 mb-2.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    letterSpacing: "0.28em",
                    color: palette.yellow,
                    opacity: 0.85,
                  }}
                >
                  {s.kicker}
                </p>
                <p
                  className="m-0"
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: "clamp(30px, 3.5vw, 44px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: palette.cream,
                  }}
                >
                  {s.big}
                </p>
                <p
                  className="m-0"
                  style={{
                    fontSize: 12,
                    color: palette.cream3,
                    marginTop: 6,
                    fontWeight: 300,
                  }}
                >
                  {s.foot}
                </p>
              </div>
              {/* Hairline vertical divider (hidden after the last stat) */}
              {i < hero.stats.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden sm:block flex-shrink-0"
                  style={{
                    width: 1,
                    height: 60,
                    background: palette.line,
                    marginTop: 8,
                    marginLeft: "clamp(20px, 4vw, 48px)",
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Tag chips ── */}
        <motion.div {...fadeUp(1.1, 1)} className="flex gap-2.5 mt-10">
          {hero.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.2em",
                color: palette.cream3,
                padding: "5px 12px",
                border: "0.5px solid rgba(242,237,230,0.1)",
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
