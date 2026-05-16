import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ModuleMap from "./ModuleMap";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ErpProcess({ data, palette }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { process } = data;

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32"
      style={{ background: palette.paper }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
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
                style={{ color: palette.brass, fontFamily: "'JetBrains Mono', monospace" }}
              >
                ▸ {process.kicker}
              </span>
            </div>
            <h2
              className="font-bold tracking-[-0.02em] leading-[1.05]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
                color: palette.ink,
              }}
            >
              {process.heading}
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-base leading-relaxed lg:mt-3 max-w-[480px]"
            style={{
              color: palette.inkSoft,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {process.sub}
          </motion.p>
        </div>

        {/* Principles — full width, the methodology owns the section */}
        <div className="relative mb-20 lg:mb-28">
          <div
            className="absolute left-[26px] top-6 bottom-6 w-px hidden lg:block"
            style={{
              background: `linear-gradient(180deg, transparent, ${palette.brass}55 8%, ${palette.brass}55 92%, transparent)`,
            }}
          />

          <div className="space-y-7 lg:space-y-9">
            {process.steps.map((step, i) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={2 + i}
                className="relative grid grid-cols-[52px_1fr] gap-5 lg:gap-8 items-start"
              >
                <div className="relative z-10">
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-bold text-base"
                    style={{
                      background: palette.saffron,
                      color: palette.ink,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      boxShadow: `0 0 0 5px ${palette.paper}, 0 6px 20px -8px ${palette.saffronDeep}80`,
                    }}
                  >
                    {step.n}
                  </div>
                </div>

                <div className="pt-1.5">
                  <h3
                    className="text-lg lg:text-2xl font-bold tracking-tight leading-snug mb-2.5 max-w-[760px]"
                    style={{
                      color: palette.ink,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[0.95rem] leading-relaxed max-w-[720px]"
                    style={{
                      color: palette.inkSoft,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Module Map — appears below principles as the visual consequence */}
        <ModuleMap data={data} palette={palette} />
      </div>
    </section>
  );
}
