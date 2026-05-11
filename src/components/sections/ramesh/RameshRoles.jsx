import { motion } from "framer-motion"
import { Check } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1]
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: EASE },
})

function Phone({ src, alt, tilt = 0 }) {
  return (
    <div
      style={{
        width: 180,
        borderRadius: 26,
        background: "#1a1a1a",
        padding: 6,
        transform: `rotate(${tilt}deg)`,
        boxShadow: "0 24px 60px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.1)",
        flexShrink: 0,
      }}
    >
      <div style={{ borderRadius: 20, overflow: "hidden", height: 360 }}>
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
      </div>
    </div>
  )
}

export default function RameshRoles({ data }) {
  const { palette, roles } = data

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: palette.bg }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            {...reveal(0)}
            className="block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: palette.pink, fontFamily: "'DM Sans', sans-serif" }}
          >
            {roles.kicker}
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
            {roles.headline}
          </motion.h2>
        </div>

        {/* Three role cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {roles.items.map((role, i) => (
            <motion.div
              key={role.role}
              {...reveal(0.1 + i * 0.12)}
              className="flex flex-col items-center text-center rounded-3xl border p-8"
              style={{
                background: palette.white,
                borderColor: palette.border,
                boxShadow: "0 4px 24px rgba(216,27,126,0.06)",
              }}
            >
              {/* Phone mockup */}
              <div className="mb-8">
                <Phone src={role.screen} alt={role.role} tilt={i === 0 ? -2 : i === 2 ? 2 : 0} />
              </div>

              {/* Role badge */}
              <span
                className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-3"
                style={{
                  background: `${role.color}18`,
                  color: role.color,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {role.role}
              </span>

              {/* Tagline */}
              <p
                className="font-bold mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  color: palette.text,
                  letterSpacing: "-0.01em",
                }}
              >
                {role.tagline}
              </p>

              {/* Desc */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: palette.textDim, fontFamily: "'DM Sans', sans-serif" }}
              >
                {role.desc}
              </p>

              {/* Capabilities */}
              <ul className="w-full space-y-2 text-left">
                {role.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2.5 text-sm"
                    style={{ color: palette.text, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <Check size={14} strokeWidth={2.5} style={{ color: role.color, flexShrink: 0 }} />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
