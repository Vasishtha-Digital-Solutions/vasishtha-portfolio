// ──────────────────────────────────────────────────────────────
// Home — SERVICES (Section 4)
// Three discipline cards (Social / Software / Influencer) in a
// hairline-divided grid. Single row on desktop, stacked on mobile.
// Hover: arrow icon slides in + subtle orange glow from top-right.
// Matches the "one accountable team" framing from the hero subtext.
// ──────────────────────────────────────────────────────────────

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { homeData } from "../../../data/home"

const EASE = [0.22, 1, 0.36, 1]

// Scroll-reveal container + child variants (stagger)
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemFadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export default function HomeServices() {
  const { palette, services } = homeData

  return (
    <section
      id="services"
      className="relative py-24 md:py-32"
      style={{
        background: palette.bg,
        borderTop: `1px solid ${palette.line}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Header ────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemFadeUp}
            className="block text-[11px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.24em",
              color: palette.textMuted,
              textTransform: "uppercase",
            }}
          >
            {services.kicker}
          </motion.span>

          <motion.h2
            variants={itemFadeUp}
            className="mt-4 max-w-3xl font-extrabold leading-[1.02]"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(2.2rem, 5.4vw, 4.6rem)",
              letterSpacing: "-0.03em",
              color: palette.white,
            }}
          >
            {services.heading}
          </motion.h2>
        </motion.div>

        {/* ── Three-panel grid ───────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="relative mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border md:mt-20 md:grid-cols-3"
          style={{
            borderColor: palette.border,
            background: palette.border,
          }}
        >
          {/* Top-edge gradient — 1px sharp line + soft descending glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${palette.orange} 25%, ${palette.amber} 75%, transparent 100%)`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20"
            style={{
              background: `linear-gradient(to bottom, ${palette.orange}1a 0%, transparent 100%)`,
            }}
          />

          {services.items.map((service, i) => (
            <ServiceCard
              key={service.num}
              service={service}
              total={services.items.length}
              palette={palette}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════
   ServiceCard — single discipline panel
   ═════════════════════════════════════════════════════════════ */
function ServiceCard({ service, total, palette }) {
  return (
    <motion.article
      variants={itemFadeUp}
      className="group relative overflow-hidden"
      style={{
        background: palette.bg3,
        minHeight: 440,
      }}
    >
      {/* Hover glow — orange radial from top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 90% 0%, ${palette.orange}26 0%, transparent 55%)`,
        }}
      />

      {/* Card content */}
      <div className="relative flex h-full flex-col p-8 md:p-10">
        {/* Top row — index + arrow */}
        <div className="flex items-start justify-between">
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.24em",
              color: palette.orange,
              textTransform: "uppercase",
            }}
          >
            {service.num} / {String(total).padStart(2, "0")}
          </span>

          {/* Arrow — hidden at rest, slides + fades in on hover */}
          <ArrowUpRight
            size={22}
            strokeWidth={1.8}
            className="-translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-70"
            style={{ color: palette.white }}
          />
        </div>

        {/* Title */}
        <h3
          className="mt-10 font-extrabold md:mt-14"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "clamp(1.75rem, 2.4vw, 2.35rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: palette.white,
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="mt-5 max-w-sm text-sm leading-relaxed md:text-base"
          style={{ color: palette.textDim }}
        >
          {service.desc}
        </p>

        {/* Tags — pushed to bottom so cards line up evenly */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-2.5 py-1"
              style={{
                borderColor: palette.border,
                color: palette.textMuted,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
