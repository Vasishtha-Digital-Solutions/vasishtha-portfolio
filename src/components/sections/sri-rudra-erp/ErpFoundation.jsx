import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, FileText, Bell } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const layerIcons = { access: Shield, audit: FileText, alerts: Bell };

export default function ErpFoundation({ data, palette }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { foundation } = data;

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: palette.terminal }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${palette.saffron} 1px, transparent 1px), linear-gradient(90deg, ${palette.saffron} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top saffron line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${palette.saffron}55, transparent)`,
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 mb-16 lg:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[0.65rem] tracking-[0.22em] uppercase font-semibold"
                style={{ color: palette.saffron, fontFamily: "'JetBrains Mono', monospace" }}
              >
                ▣ {foundation.kicker}
              </span>
            </div>
            <h2
              className="font-bold tracking-[-0.02em] leading-[1.0]"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
                color: palette.base,
              }}
            >
              {foundation.heading}
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="text-base lg:text-[1.05rem] leading-relaxed lg:mt-2 max-w-[520px]"
            style={{
              color: "rgba(245,238,221,0.58)",
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {foundation.sub}
          </motion.p>
        </div>

        {/* Three sections */}
        <div className="space-y-4 lg:space-y-5">
          {foundation.layers.map((layer, i) => {
            const Icon = layerIcons[layer.key];
            return (
              <motion.article
                key={layer.key}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={2 + i}
                className="relative grid grid-cols-1 lg:grid-cols-[180px_1fr_240px] gap-6 lg:gap-10 p-6 lg:p-8 rounded-xl"
                style={{
                  background: "rgba(245,238,221,0.025)",
                  border: `1px solid ${palette.saffron}25`,
                }}
              >
                {/* Left: single word + icon */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${palette.saffron}15`,
                      border: `1px solid ${palette.saffron}40`,
                    }}
                  >
                    {Icon && <Icon size={20} style={{ color: palette.saffron }} />}
                  </div>
                  <div
                    className="text-4xl lg:text-5xl font-bold leading-none tracking-[-0.02em]"
                    style={{
                      color: palette.saffron,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {layer.word}
                  </div>
                </div>

                {/* Middle: title + body */}
                <div>
                  <h3
                    className="text-xl lg:text-2xl font-bold tracking-tight leading-tight mb-3"
                    style={{
                      color: palette.base,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {layer.title}
                  </h3>
                  <p
                    className="text-[0.95rem] leading-relaxed"
                    style={{
                      color: "rgba(245,238,221,0.62)",
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {layer.body}
                  </p>
                </div>

                {/* Right: proof stat */}
                <div className="flex lg:items-center">
                  <div
                    className="w-full p-4 rounded-md"
                    style={{
                      background: palette.terminal,
                      border: `1px dashed ${palette.saffron}40`,
                    }}
                  >
                    <div
                      className="text-[0.55rem] tracking-[0.25em] uppercase mb-2"
                      style={{
                        color: palette.saffron,
                        fontFamily: "'JetBrains Mono', monospace",
                        opacity: 0.7,
                      }}
                    >
                      Proof
                    </div>
                    <div
                      className="text-sm font-semibold leading-snug"
                      style={{
                        color: palette.base,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {layer.proofStat}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
