// ──────────────────────────────────────────────────────────────
// Home — HERO (Section 1)
// Dark canvas · grid bg · noise · ambient orange/amber orbs ·
// mouse-following gradient orb · glassmorphic top bar
// (Book-a-Call LEFT · VDS logo RIGHT) · pinging eyebrow badge ·
// masked-word headline · 2-col subtext + CTAs · shimmer CTA.
// Motion: Framer Motion springs + clip-path reveals.
// ──────────────────────────────────────────────────────────────

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { homeData } from "../../../data/home"

const EASE = [0.22, 1, 0.36, 1]

// Masked word clip-path reveal (per handoff: spring 90/18, stagger 0.08)
const wordMask = (i) => ({
  initial: { y: "110%", clipPath: "inset(0 0 100% 0)" },
  animate: { y: "0%", clipPath: "inset(0 0 0% 0)" },
  transition: {
    type: "spring",
    stiffness: 90,
    damping: 18,
    delay: 0.15 + i * 0.08,
  },
})

const fadeUp = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: EASE },
})

export default function HomeHero() {
  const { palette, topBar, hero } = homeData

  // ── Scroll state: glassmorphism on top bar once scrolled ──
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  // ── Mouse-following gradient orb (spring-lagged) ──
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const orbX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 1.2 })
  const orbY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 1.2 })
  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX - 160)
      mouseY.set(e.clientY - 160)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: palette.bg, color: palette.text }}
    >
      {/* ═════ BACKGROUND LAYERS ════════════════════════════ */}

      {/* Grid pattern with radial fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />

      {/* Noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.06,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Static ambient orb — orange top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "6%",
          left: "-8%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.orange} 0%, transparent 62%)`,
          filter: "blur(140px)",
          opacity: 0.28,
          zIndex: 0,
        }}
      />

      {/* Static ambient orb — amber mid-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: "38%",
          right: "-6%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.amber} 0%, transparent 62%)`,
          filter: "blur(150px)",
          opacity: 0.24,
          zIndex: 0,
        }}
      />

      {/* Mouse-following gradient orb (orange→amber, drift) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0"
        style={{
          x: orbX,
          y: orbY,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.orange} 0%, ${palette.amber} 45%, transparent 70%)`,
          filter: "blur(150px)",
          opacity: 0.55,
          zIndex: 1,
        }}
      />

      {/* ═════ TOP BAR (Logo LEFT · Book a Call RIGHT) ═════ */}
      <nav
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 md:px-8"
        style={{
          paddingTop: "12px",
          paddingBottom: "12px",
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          background: scrolled
            ? "rgba(8,8,10,0.78)"
            : "rgba(12,12,14,0.25)",
          backdropFilter: "blur(22px) saturate(140%)",
          WebkitBackdropFilter: "blur(22px) saturate(140%)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          transition: "background 260ms ease, border-color 260ms ease",
        }}
      >
        {/* Left · VDS logo (large, full lockup) */}
        <motion.div {...fadeUp(0.2)}>
          <Link to={topBar.logo.to} className="block">
            <img
              src={topBar.logo.src}
              alt={topBar.logo.alt}
              className="h-11 w-auto md:h-20"
              draggable={false}
              style={{ objectFit: "contain", display: "block" }}
            />
          </Link>
        </motion.div>

        {/* Right · Book a Call pill */}
        <motion.div {...fadeUp(0.25)}>
          <Link
            to={topBar.cta.to}
            className="group relative inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all md:px-6 md:py-3"
            style={{
              background: `linear-gradient(90deg, ${palette.orange}, ${palette.amber})`,
              color: "#0a0a0a",
              boxShadow: `0 10px 30px -12px ${palette.orange}80, 0 4px 14px -6px ${palette.amber}55`,
            }}
          >
            {topBar.cta.label}
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </span>
          </Link>
        </motion.div>
      </nav>

      {/* ═════ HERO CONTENT ═════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-16 md:pt-48 md:pb-20">
        {/* ── Eyebrow badge with pinging orange dot ── */}
        <motion.div
          {...fadeUp(0.35)}
          className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5"
          style={{
            borderColor: palette.border,
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="relative inline-flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full"
              style={{ background: palette.orange, opacity: 0.65 }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: palette.orange }}
            />
          </span>
          <span
            className="text-[11px] uppercase"
            style={{
              color: "rgba(255,255,255,0.82)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.2em",
            }}
          >
            {hero.eyebrow.label}
          </span>
        </motion.div>

        {/* ── Masked headline ── */}
        <h1
          className="mt-7 max-w-[1100px] font-extrabold leading-[0.98] tracking-tight"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "clamp(2.8rem, 8.4vw, 7.5rem)",
            color: palette.white,
            letterSpacing: "-0.035em",
          }}
        >
          {hero.headline.map((w, i) => (
            <span
              key={`${w.text}-${i}`}
              className="inline-block overflow-hidden pb-[0.15em] align-bottom"
              style={{ marginRight: "0.28em" }}
            >
              <motion.span
                {...wordMask(i)}
                className="inline-block"
                style={
                  w.accent
                    ? {
                        backgroundImage: `linear-gradient(100deg, #fff 0%, ${palette.amber} 45%, ${palette.orange} 100%)`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }
                    : undefined
                }
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* ── Subtext + CTAs (2-col on md+) ── */}
        <div className="mt-10 grid items-end gap-8 md:mt-12 md:grid-cols-2 md:gap-14">
          <motion.p
            {...fadeUp(0.9)}
            className="max-w-xl text-base leading-relaxed md:text-lg"
            style={{ color: palette.textDim }}
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            {...fadeUp(1.0)}
            className="flex flex-wrap items-center gap-3 md:justify-end"
          >
            {/* Primary shimmer CTA */}
            <Link
              to={hero.primaryCTA.to}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-transform active:scale-[0.98]"
              style={{
                background: `linear-gradient(90deg, ${palette.orange}, ${palette.amber})`,
                color: "#0a0a0a",
                boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 10px 40px -10px ${palette.orange}99, 0 6px 20px -8px ${palette.amber}66`,
              }}
            >
              <span className="relative z-[2]">{hero.primaryCTA.label}</span>
              <ArrowUpRight size={16} className="relative z-[2]" strokeWidth={2.4} />
              {/* Shimmer streak */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute"
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  top: "-20%",
                  bottom: "-20%",
                  left: 0,
                  width: "42%",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                  transform: "skewX(-20deg)",
                }}
              />
            </Link>

            {/* Secondary ghost CTA */}
            <button
              onClick={scrollToPortfolio}
              className="inline-flex items-center gap-1.5 rounded-full border px-6 py-3.5 text-sm font-medium transition-all hover:bg-white/5"
              style={{
                borderColor: palette.borderStrong,
                background: "rgba(255,255,255,0.02)",
                color: palette.text,
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              {hero.secondaryCTA.label}
            </button>
          </motion.div>
        </div>

        {/* ── Meta strip — live status (tiny, under content) ── */}
        <motion.div
          {...fadeUp(1.15)}
          className="mt-14 flex flex-wrap items-center gap-6 md:mt-20"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.22em",
            color: palette.textMuted,
          }}
        >
          <span>● REPLYING IN ~1 BUSINESS DAY</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>BASED IN INDIA</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>11 CAMPAIGNS LIVE</span>
        </motion.div>
      </div>
    </section>
  )
}
