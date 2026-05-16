import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ErpWhyCustom({ data, palette }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { whyCustom } = data;

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32"
      style={{ background: palette.base }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header row */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 mb-14 lg:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold"
                style={{
                  color: palette.saffronDeep,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                ⚙ {whyCustom.kicker}
              </span>
            </div>
            <h2
              className="font-bold tracking-[-0.02em] leading-[1.05]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(1.8rem, 3.8vw, 2.9rem)",
                color: palette.ink,
              }}
            >
              {whyCustom.heading}
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="flex items-end"
          >
            <p
              className="text-base leading-relaxed max-w-[480px] lg:ml-auto"
              style={{
                color: palette.inkSoft,
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              {whyCustom.balance}
            </p>
          </motion.div>
        </div>

        {/* Three dark cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {whyCustom.points.map((point, i) => (
            <motion.article
              key={point.n}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2 + i}
              className="relative p-7 lg:p-8 rounded-xl overflow-hidden group"
              style={{
                background: palette.terminal,
                border: `1px solid ${palette.terminalLine}`,
              }}
            >
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(${palette.saffron} 1px, transparent 1px), linear-gradient(90deg, ${palette.saffron} 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Top status row */}
              <div className="relative flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: palette.saffron }}
                  />
                  <span
                    className="text-[0.58rem] tracking-[0.2em] uppercase"
                    style={{
                      color: palette.saffron,
                      fontFamily: "'JetBrains Mono', monospace",
                      opacity: 0.7,
                    }}
                  >
                    Workflow / {point.n}
                  </span>
                </div>
              </div>

              {/* Big number */}
              <div
                className="text-7xl font-bold leading-none mb-5"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  color: palette.saffron,
                  opacity: 0.18,
                }}
              >
                {point.n}
              </div>

              <h3
                className="relative text-lg lg:text-xl font-bold tracking-tight leading-snug mb-3"
                style={{
                  color: palette.base,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                {point.title}
              </h3>

              <p
                className="relative text-[0.9rem] leading-relaxed"
                style={{
                  color: "rgba(245,238,221,0.62)",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                {point.body}
              </p>

              {/* Bottom corner accent */}
              <div
                className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at bottom right, ${palette.saffron}30, transparent 70%)`,
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
