// ──────────────────────────────────────────────────────────────
// Home — FOOTER (Section 6 · final)
// Four-column layout on md+, stacks on mobile:
//   1 · Brand (logo + tagline + status)
//   2 · Studio (internal page links)
//   3 · Case studies (7 case page links)
//   4 · Reach (email + socials)
// Bottom divider bar with copyright and "Now booking" micro-status.
// ──────────────────────────────────────────────────────────────

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { homeData } from "../../../data/home"

const EASE = [0.22, 1, 0.36, 1]

const revealUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function HomeFooter() {
  const { palette, footer, topBar } = homeData

  return (
    <footer
      className="relative"
      style={{
        background: palette.bg,
        borderTop: `1px solid ${palette.line}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-20 md:pb-10">
        {/* ── Top grid (4 cols on md+) ─────────────────── */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
          {/* Brand column */}
          <motion.div {...revealUp(0)} className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={topBar.logo.src}
                alt={topBar.logo.alt}
                className="h-12 w-auto md:h-14"
                draggable={false}
                style={{ objectFit: "contain", display: "block" }}
              />
            </Link>

            <p
              className="mt-6 max-w-xs text-sm leading-relaxed"
              style={{ color: palette.textDim }}
            >
              {footer.tagline}
            </p>

            {/* Live status pill */}
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
              style={{
                borderColor: palette.border,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full"
                  style={{ background: palette.orange, opacity: 0.6 }}
                />
                <span
                  className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: palette.orange }}
                />
              </span>
              <span
                className="text-[10px] uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.2em",
                  color: palette.textDim,
                }}
              >
                Now booking · Q3 2026
              </span>
            </div>
          </motion.div>

          {/* Link columns */}
          {footer.columns.map((col, i) => (
            <motion.div key={col.title} {...revealUp(0.1 + i * 0.08)}>
              <h4
                className="text-[11px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.24em",
                  color: palette.textMuted,
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                {col.title}
              </h4>

              <ul className="space-y-3">
                {col.links.map((link) => {
                  const isExternal = Boolean(link.href)
                  if (isExternal) {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                          className="group inline-flex items-center gap-1 text-sm transition-colors hover:text-white"
                          style={{
                            color: palette.text,
                            fontFamily:
                              "'Plus Jakarta Sans', system-ui, sans-serif",
                          }}
                        >
                          <span
                            className="transition-all group-hover:underline"
                            style={{ textUnderlineOffset: 4 }}
                          >
                            {link.label}
                          </span>
                        </a>
                      </li>
                    )
                  }

                  // Internal link — respect "scroll" hashes vs page routes
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="group inline-flex items-center gap-1 text-sm transition-colors hover:text-white"
                        style={{
                          color: palette.text,
                          fontFamily:
                            "'Plus Jakarta Sans', system-ui, sans-serif",
                        }}
                      >
                        <span
                          className="transition-all group-hover:underline"
                          style={{ textUnderlineOffset: 4 }}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom bar ───────────────────────────────── */}
        <div
          className="mt-16 flex flex-col items-start justify-between gap-4 pt-8 md:mt-20 md:flex-row md:items-center"
          style={{ borderTop: `1px solid ${palette.line}` }}
        >
          <p
            className="text-xs"
            style={{
              color: palette.textMuted,
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            {footer.copyright}
          </p>

          <p
            className="text-[10px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.22em",
              color: palette.textFaint,
              textTransform: "uppercase",
            }}
          >
            Social · Software · Influence
          </p>
        </div>
      </div>
    </footer>
  )
}
