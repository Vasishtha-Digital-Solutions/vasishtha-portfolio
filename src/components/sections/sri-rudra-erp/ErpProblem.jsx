import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, FileWarning, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const painIcons = [AlertTriangle, FileWarning, Layers];

export default function ErpProblem({ data, palette }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { problem } = data;

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: palette.base }}
    >
      {/* Section divider — top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${palette.rule} 30%, ${palette.rule} 70%, transparent)`,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Kicker */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="flex items-center gap-3 mb-8"
        >
          <span
            className="text-[0.68rem] tracking-[0.25em] uppercase font-semibold"
            style={{ color: palette.fail, fontFamily: "'JetBrains Mono', monospace" }}
          >
            ◆ {problem.kicker}
          </span>
          <div className="h-px flex-1 max-w-[140px]" style={{ background: palette.rule }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-bold tracking-[-0.02em] leading-[1.05] mb-10 max-w-[900px]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(1.9rem, 4.2vw, 3.4rem)",
            color: palette.ink,
          }}
        >
          Tally captures snapshots.
          <br />
          The business runs in{" "}
          <span style={{ color: palette.saffronDeep }}>cycles.</span>
        </motion.h2>

        {/* Body paragraphs */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20 max-w-[1100px]">
          {problem.body.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2 + i}
              className="text-base lg:text-[1.05rem] leading-relaxed"
              style={{
                color: palette.inkSoft,
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {problem.painPoints.map((pain, i) => {
            const Icon = painIcons[i];
            return (
              <motion.article
                key={pain.kicker}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={5 + i}
                className="relative p-6 lg:p-7 rounded-lg overflow-hidden"
                style={{
                  background: palette.paper,
                  border: `1px solid ${palette.paperEdge}`,
                }}
              >
                {/* Left red rail */}
                <div
                  className="absolute top-5 bottom-5 left-0 w-[3px] rounded-r"
                  style={{ background: palette.fail, opacity: 0.85 }}
                />

                <div className="flex items-center justify-between mb-5 pl-2">
                  <span
                    className="text-[0.62rem] tracking-[0.22em] uppercase font-semibold"
                    style={{
                      color: palette.fail,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {pain.kicker}
                  </span>
                  {Icon && (
                    <Icon
                      size={16}
                      style={{ color: palette.fail, opacity: 0.6 }}
                    />
                  )}
                </div>

                <h3
                  className="text-xl lg:text-[1.35rem] font-bold tracking-tight leading-snug mb-3 pl-2"
                  style={{
                    color: palette.ink,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {pain.title}
                </h3>

                <p
                  className="text-[0.92rem] leading-relaxed pl-2"
                  style={{
                    color: palette.inkSoft,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {pain.body}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bridge line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={9}
          className="flex items-center gap-4 pt-8 border-t"
          style={{ borderColor: palette.rule }}
        >
          <span
            className="text-2xl lg:text-3xl font-bold tracking-tight max-w-[760px]"
            style={{
              color: palette.ink,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {problem.bridge}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
