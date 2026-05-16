import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ErpNumbers({ data, palette }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { numbers } = data;

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: palette.base }}
    >
      {/* Soft saffron glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${palette.saffronGlow}, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 mb-14 lg:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: palette.brass, opacity: 0.5 }} />
              <span
                className="text-[0.65rem] tracking-[0.25em] uppercase font-semibold"
                style={{ color: palette.brass, fontFamily: "'JetBrains Mono', monospace" }}
              >
                {numbers.kicker}
              </span>
            </div>
            <h2
              className="font-bold tracking-[-0.02em] leading-[1.0]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
                color: palette.ink,
              }}
            >
              {numbers.heading}
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-base leading-relaxed lg:mt-2 max-w-[460px]"
            style={{
              color: palette.inkSoft,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {numbers.sub}
          </motion.p>
        </div>

        {/* Before / After comparison header strip — only on desktop */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="hidden lg:grid grid-cols-[1.4fr_1fr_auto_1fr] gap-6 items-center pb-3 mb-1 border-b"
          style={{ borderColor: palette.rule }}
        >
          <div
            className="text-[0.6rem] tracking-[0.25em] uppercase font-semibold"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Operation
          </div>
          <div
            className="text-[0.6rem] tracking-[0.25em] uppercase font-semibold"
            style={{ color: palette.fail, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Before
          </div>
          <div className="w-6" />
          <div
            className="text-[0.6rem] tracking-[0.25em] uppercase font-semibold"
            style={{ color: palette.pass, fontFamily: "'JetBrains Mono', monospace" }}
          >
            After
          </div>
        </motion.div>

        {/* Comparison rows */}
        <div className="divide-y" style={{ borderColor: palette.rule }}>
          {numbers.comparisons.map((c, i) => (
            <motion.div
              key={c.operation}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={3 + i}
              className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_auto_1fr] gap-3 lg:gap-6 items-start lg:items-center py-5 lg:py-6 border-b"
              style={{ borderColor: palette.rule }}
            >
              <div
                className="text-[0.95rem] font-semibold"
                style={{
                  color: palette.ink,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                {c.operation}
              </div>

              <div className="flex items-center gap-2 lg:block">
                <span
                  className="lg:hidden text-[0.55rem] tracking-[0.2em] uppercase font-semibold flex-shrink-0"
                  style={{ color: palette.fail, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Before
                </span>
                <div
                  className="text-[0.88rem] leading-snug"
                  style={{
                    color: palette.inkSoft,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    textDecoration: "line-through",
                    textDecorationColor: `${palette.fail}80`,
                    textDecorationThickness: "1px",
                  }}
                >
                  {c.before}
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center w-6">
                <ArrowRight size={14} style={{ color: palette.saffronDeep }} />
              </div>

              <div className="flex items-start gap-2 lg:block">
                <span
                  className="lg:hidden text-[0.55rem] tracking-[0.2em] uppercase font-semibold mt-0.5 flex-shrink-0"
                  style={{ color: palette.pass, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  After
                </span>
                <div
                  className="text-[0.92rem] font-semibold leading-snug flex items-center gap-2"
                  style={{
                    color: palette.ink,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      background: palette.pass,
                      boxShadow: `0 0 6px ${palette.pass}`,
                    }}
                  />
                  {c.after}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scale metrics strip — small, secondary */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={10}
          className="mt-12 pt-8 border-t"
          style={{ borderColor: palette.rule }}
        >
          <div
            className="text-[0.6rem] tracking-[0.25em] uppercase font-semibold mb-5"
            style={{ color: palette.inkMute, fontFamily: "'JetBrains Mono', monospace" }}
          >
            And the scale it runs at
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
            {numbers.scale.map((s) => (
              <div key={s.label}>
                <div
                  className="text-3xl lg:text-5xl font-bold leading-none mb-1.5 tracking-[-0.02em]"
                  style={{
                    color: palette.ink,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[0.78rem]"
                  style={{
                    color: palette.inkSoft,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
