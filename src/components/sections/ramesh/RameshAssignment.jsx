import { motion } from "framer-motion"
import { Trophy, Clock, Star, BarChart2, ArrowRight } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1]
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: EASE },
})

const ICONS = { Trophy, Clock, Star, BarChart2 }

export default function RameshAssignment({ data }) {
  const { palette, assignment } = data

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: palette.bgDark }}
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/4 h-96 w-96"
        style={{
          background: "radial-gradient(circle, rgba(240,98,146,0.2) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96"
        style={{
          background: "radial-gradient(circle, rgba(216,27,126,0.15) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            {...reveal(0)}
            className="block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: palette.pinkLight, fontFamily: "'DM Sans', sans-serif" }}
          >
            {assignment.kicker}
          </motion.span>
          <motion.h2
            {...reveal(0.08)}
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: palette.white,
              letterSpacing: "-0.02em",
            }}
          >
            {assignment.headline}
          </motion.h2>
          <motion.p
            {...reveal(0.16)}
            className="mx-auto max-w-2xl text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {assignment.desc}
          </motion.p>
        </div>

        {/* Flow diagram */}
        <motion.div
          {...reveal(0.2)}
          className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-center md:gap-0 mb-16"
        >
          {assignment.flow.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center md:flex-row md:items-center">
              {/* Step node */}
              <div
                className="flex flex-col items-center justify-center rounded-2xl px-5 py-4 text-center"
                style={
                  step.isCore
                    ? {
                        background: `linear-gradient(135deg, ${palette.pink}, ${palette.pinkLight})`,
                        boxShadow: `0 0 40px rgba(216,27,126,0.5), 0 8px 24px rgba(0,0,0,0.2)`,
                        minWidth: 150,
                        transform: "scale(1.08)",
                      }
                    : {
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        minWidth: 130,
                        backdropFilter: "blur(8px)",
                      }
                }
              >
                <span
                  className="block text-sm font-bold leading-tight"
                  style={{
                    color: step.isCore ? "#fff" : "rgba(255,255,255,0.9)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {step.label}
                </span>
                <span
                  className="block text-[10px] mt-1"
                  style={{
                    color: step.isCore ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  {step.sub}
                </span>
              </div>

              {/* Arrow connector */}
              {i < assignment.flow.length - 1 && (
                <div className="flex items-center justify-center my-2 md:my-0 md:mx-2">
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="hidden md:block rotate-0"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  />
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="md:hidden rotate-90"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Criteria grid */}
        <motion.div {...reveal(0.3)}>
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Matching criteria
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {assignment.criteria.map((c, i) => {
              const Icon = ICONS[c.icon]
              return (
                <motion.div
                  key={c.label}
                  {...reveal(0.35 + i * 0.07)}
                  className="rounded-2xl border p-5 text-center"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: `${palette.pink}22` }}
                  >
                    {Icon && <Icon size={18} style={{ color: palette.pinkLight }} />}
                  </div>
                  <p
                    className="font-bold text-sm mb-1"
                    style={{ color: palette.white, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {c.label}
                  </p>
                  <p
                    className="text-xs leading-snug"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {c.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
