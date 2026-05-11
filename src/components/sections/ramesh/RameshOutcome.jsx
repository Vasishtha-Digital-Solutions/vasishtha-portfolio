import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1]
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function RameshOutcome({ data }) {
  const { palette, outcome } = data

  return (
    <section className="py-24 md:py-32" style={{ background: palette.bg }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            {...reveal(0)}
            className="block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: palette.pink, fontFamily: "'DM Sans', sans-serif" }}
          >
            {outcome.kicker}
          </motion.span>
          <motion.h2
            {...reveal(0.08)}
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: palette.text,
              letterSpacing: "-0.02em",
            }}
          >
            {outcome.headline}
          </motion.h2>
        </div>

        {/* Stats row */}
        <motion.div
          {...reveal(0.14)}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border md:grid-cols-4"
          style={{ borderColor: palette.border, background: palette.border }}
        >
          {outcome.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-10 px-6 text-center"
              style={{ background: palette.white }}
            >
              <span
                className="font-bold leading-none mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  color: palette.pink,
                }}
              >
                {s.value}
              </span>
              <span
                className="text-xs uppercase tracking-wider"
                style={{ color: palette.textMuted, fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Services delivered */}
        <motion.div {...reveal(0.22)} className="mt-12 text-center">
          <p
            className="mb-5 text-xs font-semibold uppercase tracking-widest"
            style={{ color: palette.textMuted, fontFamily: "'DM Sans', sans-serif" }}
          >
            Services delivered
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {outcome.services.map((s) => (
              <span
                key={s}
                className="rounded-full border px-4 py-2 text-xs font-medium"
                style={{
                  borderColor: palette.border,
                  color: palette.textDim,
                  background: palette.pinkSoft,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
