import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1]
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function RameshProblem({ data }) {
  const { palette, problem } = data

  return (
    <section
      className="py-24 md:py-32"
      style={{ background: palette.bg2 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.span
          {...reveal(0)}
          className="block text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: palette.pink, fontFamily: "'DM Sans', sans-serif" }}
        >
          {problem.kicker}
        </motion.span>

        <motion.h2
          {...reveal(0.08)}
          className="max-w-2xl font-bold leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: palette.text,
            letterSpacing: "-0.02em",
          }}
        >
          {problem.headline}
        </motion.h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {problem.items.map((item, i) => (
            <motion.div
              key={item.num}
              {...reveal(0.12 + i * 0.1)}
              className="relative overflow-hidden rounded-3xl border p-8"
              style={{
                background: palette.white,
                borderColor: palette.border,
                boxShadow: "0 4px 24px rgba(216,27,126,0.06)",
              }}
            >
              {/* Number */}
              <span
                className="block font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "3.5rem",
                  color: palette.pink,
                  opacity: 0.15,
                  lineHeight: 1,
                }}
              >
                {item.num}
              </span>

              <h3
                className="font-bold mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.4rem",
                  color: palette.text,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: palette.textDim, fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.desc}
              </p>

              {/* Pink corner accent */}
              <div
                aria-hidden
                className="absolute bottom-0 right-0 h-24 w-24 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 100% 100%, ${palette.pinkSoft} 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
