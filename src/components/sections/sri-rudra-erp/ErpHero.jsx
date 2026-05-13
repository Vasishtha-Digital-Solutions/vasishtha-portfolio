import { motion } from "framer-motion";
import TheLoop from "./TheLoop";

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i = 0) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ErpHero({ data, palette }) {
  const { hero } = data;

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: palette.base }}
    >
      {/* Single atmospheric glow — was two, now one (less busy) */}
      <div
        className="absolute top-[-10%] right-[-15%] w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${palette.saffronGlow}, transparent 70%)`,
          filter: "blur(70px)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${palette.ink} 1px, transparent 1px), linear-gradient(90deg, ${palette.ink} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24">
        {/* Eyebrow — now names the case explicitly. Bumped from 0.65rem to 0.72rem
            and weight 700 so the most concrete content gets visible hierarchy. */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={-2}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <div className="w-8 h-px" style={{ background: palette.brass, opacity: 0.6 }} />
          <span
            className="text-[0.72rem] tracking-[0.22em] uppercase font-bold"
            style={{ color: palette.brass, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {hero.eyebrow}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — text */}
          <div>
            {/* 2-line headline — plain period on line 2 (saffron span dropped — was fragile) */}
            <h1
              className="font-bold leading-[0.95] tracking-[-0.02em] mb-8"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                color: palette.ink,
              }}
            >
              {[hero.titleLine1, hero.titleLine2].map((line, i) => (
                <span
                  key={i}
                  className="block overflow-hidden"
                  style={{
                    paddingBottom: "0.12em",
                    marginBottom: "-0.12em",
                  }}
                >
                  <motion.span
                    className="block"
                    variants={lineReveal}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    style={
                      i === 1
                        ? {
                            fontStyle: "italic",
                            fontFamily: "'Instrument Serif', serif",
                            fontWeight: 400,
                          }
                        : {}
                    }
                  >
                    {line}
                    {i === 1 && "."}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-base sm:text-lg leading-relaxed max-w-[560px] mb-10"
              style={{ color: palette.inkSoft, fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {hero.sub}
            </motion.p>

            {/* Metadata strip — the single source of truth for case info.
                "Live in production" pulse dot is the ONLY "live" indicator on the page now. */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 border-t"
              style={{ borderColor: palette.rule }}
            >
              {[
                { label: "Client", value: data.client },
                { label: "Industry", value: data.industry },
                { label: "Scale", value: data.scale },
                { label: "Status", value: data.status, accent: true },
              ].map((m) => (
                <div key={m.label}>
                  <div
                    className="text-[0.55rem] tracking-[0.2em] uppercase mb-1"
                    style={{
                      color: palette.inkMute,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {m.label}
                  </div>
                  <div
                    className="text-sm font-semibold flex items-center gap-1.5"
                    style={{
                      color: m.accent ? palette.pass : palette.ink,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {m.accent && (
                      <span
                        className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{
                          background: palette.pass,
                          boxShadow: `0 0 0 3px ${palette.pass}22`,
                          animation: "pulse-dot 2s ease-in-out infinite",
                        }}
                      />
                    )}
                    {m.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — The Loop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <TheLoop data={data} palette={palette} />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 3px ${palette.pass}22; }
          50%      { box-shadow: 0 0 0 6px ${palette.pass}11; }
        }
      `}</style>
    </section>
  );
}
