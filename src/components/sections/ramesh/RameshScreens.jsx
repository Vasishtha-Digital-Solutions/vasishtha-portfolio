import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1]

function PhoneFrame({ src, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          width: 160,
          borderRadius: 24,
          background: "#1a1a1a",
          padding: 5,
          boxShadow: "0 20px 50px rgba(0,0,0,0.14), 0 6px 16px rgba(0,0,0,0.08)",
          flexShrink: 0,
        }}
      >
        <div style={{ borderRadius: 19, overflow: "hidden", height: 320 }}>
          <img
            src={src}
            alt={label}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
      <p
        className="mt-3 text-xs font-medium text-center"
        style={{ color: "rgba(28,10,20,0.45)", fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
    </div>
  )
}

export default function RameshScreens({ data }) {
  const { palette, screens } = data
  const [activeTab, setActiveTab] = useState("customer")
  const activeData = screens.tabs.find((t) => t.id === activeTab)

  return (
    <section className="py-24 md:py-32" style={{ background: palette.bg2 }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: palette.pink, fontFamily: "'DM Sans', sans-serif" }}
          >
            {screens.kicker}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: palette.text,
              letterSpacing: "-0.02em",
            }}
          >
            {screens.headline}
          </motion.h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-1 rounded-full border p-1"
            style={{ borderColor: palette.border, background: palette.white }}
          >
            {screens.tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: isActive ? "#fff" : palette.textDim,
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="screen-tab-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${palette.pink}, ${palette.pinkLight})` }}
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Phone screens grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {activeData.screens.map((screen) => (
              <PhoneFrame key={screen.src} src={screen.src} label={screen.label} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
