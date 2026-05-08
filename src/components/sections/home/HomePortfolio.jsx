// ──────────────────────────────────────────────────────────────
// Home — PORTFOLIO (Section 3)
// Bento grid — 11 cards (3 featured col-span-2).
// Cards: taller, cleaner scrim, tagline visible, no index counter.
// ──────────────────────────────────────────────────────────────

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  motion,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { homeData } from "../../../data/home"

const EASE = [0.22, 1, 0.36, 1]

const revealUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: EASE },
})

export default function HomePortfolio() {
  const { palette, portfolio } = homeData
  const [active, setActive] = useState("All")

  const filtered =
    active === "All"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.category === active)

  return (
    <section
      id="portfolio"
      className="relative"
      style={{ background: palette.bg, color: palette.text }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">

        {/* ── Header ──────────────────────────────────────── */}
        <motion.span
          {...revealUp(0)}
          className="block text-[11px]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.24em",
            color: palette.textMuted,
            textTransform: "uppercase",
          }}
        >
          {portfolio.kicker}
        </motion.span>

        <motion.h2
          {...revealUp(0.1)}
          className="mt-4 max-w-3xl font-extrabold leading-[1.02]"
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "clamp(2.2rem, 5.4vw, 4.6rem)",
            letterSpacing: "-0.03em",
            color: palette.white,
          }}
        >
          {portfolio.heading}
        </motion.h2>

        {/* ── Filter pills ────────────────────────────────── */}
        <motion.div
          {...revealUp(0.2)}
          className="mt-10 flex flex-wrap items-center"
        >
          <LayoutGroup id="portfolio-filter">
            <div
              className="inline-flex items-center gap-1 rounded-full border p-1"
              style={{
                borderColor: palette.border,
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(8px)",
              }}
            >
              {portfolio.filters.map((f) => {
                const isActive = active === f
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors md:text-sm"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      color: isActive ? "#0a0a0a" : palette.textDim,
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-filter-pill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${palette.orange}, ${palette.amber})`,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{f}</span>
                    {f === "All" && (
                      <span
                        className="relative z-10 text-[10px]"
                        style={{ opacity: isActive ? 0.6 : 0.4, letterSpacing: "0.1em" }}
                      >
                        {portfolio.projects.length}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </LayoutGroup>
        </motion.div>

        {/* ── Bento grid ──────────────────────────────────── */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                palette={palette}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

/* ═════════════════════════════════════════════════════════════
   PortfolioCard
   ═════════════════════════════════════════════════════════════ */
function PortfolioCard({ project, palette }) {
  const [imgError, setImgError] = useState(false)
  const hasImage = Boolean(project.image) && !imgError

  const toneColor =
    { orange: palette.orange, amber: palette.amber, white: palette.white }[
      project.tone
    ] || palette.orange

  const Wrapper = project.external ? "a" : Link
  const wrapperProps = project.external
    ? { href: project.caseHref, target: "_blank", rel: "noreferrer" }
    : { to: project.caseHref }

  const firstLetter = project.title.charAt(0).toUpperCase()

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 26,
        opacity: { duration: 0.25 },
      }}
      className={`group relative overflow-hidden rounded-3xl border ${
        project.featured ? "sm:col-span-2" : ""
      }`}
      style={{
        background: palette.card,
        borderColor: palette.border,
        minHeight: project.featured ? 430 : 340,
      }}
    >
      <Wrapper {...wrapperProps} className="block h-full w-full">

        {/* ── Background image ── */}
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            style={{ objectPosition: project.imagePosition || "center center" }}
            loading="lazy"
            draggable={false}
            onError={() => setImgError(true)}
          />
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, ${toneColor}22 0%, transparent 55%),
                  radial-gradient(circle at 80% 80%, ${toneColor}11 0%, transparent 60%)
                `,
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.035) 0 2px, transparent 2px 14px)`,
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute select-none"
              style={{
                right: "-4%",
                bottom: "-18%",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: project.featured ? "22rem" : "16rem",
                fontWeight: 800,
                color: toneColor,
                opacity: 0.06,
                letterSpacing: "-0.06em",
                lineHeight: 1,
              }}
            >
              {firstLetter}
            </span>
          </>
        )}

        {/* ── Tone overlay ── */}
        {hasImage && (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: toneColor, opacity: 0.08, mixBlendMode: "overlay" }}
          />
        )}

        {/* ── Scrim: deeper and more gradual for tagline readability ── */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to top,
              rgba(0,0,0,0.96) 0%,
              rgba(0,0,0,0.82) 20%,
              rgba(0,0,0,0.52) 38%,
              rgba(0,0,0,0.16) 55%,
              transparent 68%
            )`,
          }}
        />

        {/* ── Category badge — top-left ── */}
        <div className="absolute top-5 left-5">
          <span
            className="rounded-full border px-2.5 py-1 text-[9px] backdrop-blur-sm"
            style={{
              borderColor: "rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.4)",
              color: toneColor,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* ── Hover CTA — top-right ── */}
        <div className="absolute top-5 right-5 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold backdrop-blur-sm"
            style={{
              background: `linear-gradient(90deg, ${palette.orange}, ${palette.amber})`,
              color: "#0a0a0a",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            {project.external ? "Visit Site" : "View Study"}
            <ArrowUpRight size={10} strokeWidth={2.5} />
          </span>
        </div>

        {/* ── Bottom meta block ── */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">

          {/* Tag */}
          <p
            className="mb-2 text-[10px] uppercase"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.2em",
            }}
          >
            {project.tag}
          </p>

          {/* Title */}
          <h3
            className="font-extrabold leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: project.featured
                ? "clamp(1.5rem, 2.3vw, 2.1rem)"
                : "clamp(1.15rem, 1.6vw, 1.45rem)",
              letterSpacing: "-0.02em",
              color: palette.white,
            }}
          >
            {project.title}
          </h3>

          {/* Tagline */}
          <p
            className="mt-1.5 max-w-md text-sm leading-snug"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            {project.tagline}
          </p>

          {/* Metric row */}
          <div className="mt-3 flex items-baseline gap-2">
            <span
              className="font-extrabold"
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: project.featured ? "1.7rem" : "1.4rem",
                color: toneColor,
                letterSpacing: "-0.015em",
                lineHeight: 1,
              }}
            >
              {project.metric}
            </span>
            <span
              className="text-xs"
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.08em",
              }}
            >
              {project.metricFoot}
            </span>
          </div>
        </div>

      </Wrapper>
    </motion.article>
  )
}
