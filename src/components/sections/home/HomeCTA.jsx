// ──────────────────────────────────────────────────────────────
// Home — FINAL CTA (Section 5)
// Large rounded card, centered content, twin radial glows
// (orange top-left + amber bottom-right) over grid + noise bg.
// Primary: shimmer CTA → /contact. Secondary: email mailto link.
// Scroll-revealed with staggered children.
// ──────────────────────────────────────────────────────────────

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { homeData } from "../../../data/home"

const EASE = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export default function HomeCTA() {
  const { palette, finalCTA } = homeData

  return (
    <section
      className="relative py-24 md:py-32"
      style={{ background: palette.bg }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="relative overflow-hidden border text-center"
          style={{
            background: palette.bg2,
            borderColor: "rgba(241,143,0,0.2)",
            borderRadius: 36,
            padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem)",
            boxShadow: `
              0 0 0 1px rgba(241,143,0,0.12),
              0 8px 48px rgba(241,143,0,0.1),
              0 0 100px rgba(255,178,76,0.06)
            `,
          }}
        >
          {/* ── Background layers ── */}
          {/* Grid pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 85%)",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 85%)",
            }}
          />

          {/* Noise overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.05,
              mixBlendMode: "overlay",
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />

          {/* Orange radial glow — top-left */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              top: "-30%",
              left: "-10%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${palette.orange} 0%, transparent 60%)`,
              filter: "blur(110px)",
              opacity: 0.35,
            }}
          />

          {/* Amber radial glow — bottom-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              bottom: "-30%",
              right: "-10%",
              width: 520,
              height: 520,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${palette.amber} 0%, transparent 60%)`,
              filter: "blur(120px)",
              opacity: 0.3,
            }}
          />

          {/* ── Content ── */}
          <div className="relative z-10">
            {/* Kicker */}
            <motion.span
              variants={itemUp}
              className="block text-[11px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.26em",
                color: palette.orange,
                textTransform: "uppercase",
              }}
            >
              {finalCTA.kicker}
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={itemUp}
              className="mx-auto mt-5 max-w-4xl font-extrabold leading-[1.05]"
              style={{
                fontFamily:
                  "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: "clamp(2.2rem, 5.2vw, 4.6rem)",
                letterSpacing: "-0.03em",
                color: palette.white,
              }}
            >
              {finalCTA.heading}
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={itemUp}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: palette.textDim }}
            >
              {finalCTA.body}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-5 md:mt-12"
            >
              {/* Primary — shimmer CTA */}
              <Link
                to={finalCTA.primaryCTA.to}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-4 text-sm font-semibold transition-transform active:scale-[0.98] md:text-[15px]"
                style={{
                  background: `linear-gradient(90deg, ${palette.orange}, ${palette.amber})`,
                  color: "#0a0a0a",
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 14px 44px -12px ${palette.orange}aa, 0 6px 22px -8px ${palette.amber}66`,
                }}
              >
                <span className="relative z-[2]">
                  {finalCTA.primaryCTA.label}
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.4}
                  className="relative z-[2]"
                />
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

              {/* Secondary — direct email */}
              <a
                href={finalCTA.email.href}
                className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white md:text-[15px]"
                style={{
                  color: palette.text,
                  fontFamily:
                    "'Plus Jakarta Sans', system-ui, sans-serif",
                }}
              >
                <span className="border-b border-white/20 pb-0.5 transition-colors group-hover:border-white/60">
                  {finalCTA.email.label}
                </span>
              </a>
            </motion.div>

            {/* Small reassurance line (mono meta) */}
            <motion.div
              variants={itemUp}
              className="mt-8 inline-flex items-center gap-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: palette.textMuted,
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: palette.orange }}
              />
              <span>REPLYING IN ~1 BUSINESS DAY</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
