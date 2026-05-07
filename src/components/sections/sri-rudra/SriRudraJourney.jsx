import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const intensityMap = {
  dim: {
    node: "rgba(184,134,11,0.3)",
    glow: "rgba(184,134,11,0.05)",
    line: "rgba(184,134,11,0.15)",
    accent: "#8B7355",
    label: "rgba(245,230,211,0.25)",
  },
  warm: {
    node: "rgba(232,93,4,0.5)",
    glow: "rgba(232,93,4,0.06)",
    line: "rgba(232,93,4,0.2)",
    accent: "#E85D04",
    label: "rgba(232,93,4,0.5)",
  },
  bright: {
    node: "#FF6B00",
    glow: "rgba(255,107,0,0.1)",
    line: "rgba(255,107,0,0.35)",
    accent: "#FF6B00",
    label: "rgba(255,107,0,0.7)",
  },
  golden: {
    node: "#FFD700",
    glow: "rgba(255,215,0,0.08)",
    line: "rgba(255,215,0,0.3)",
    accent: "#FFD700",
    label: "rgba(255,215,0,0.6)",
  },
  fire: {
    node: "#FF4500",
    glow: "rgba(255,69,0,0.1)",
    line: "rgba(255,69,0,0.35)",
    accent: "#FF4500",
    label: "rgba(255,69,0,0.7)",
  },
};

function MilestoneCard({ milestone, index, inView }) {
  const colors = intensityMap[milestone.intensity];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index + 1}
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 items-start"
    >
      {/* Left content (even) or empty spacer */}
      <div
        className={`${isEven ? "lg:pr-12 lg:text-right" : "lg:order-3 lg:pl-12"}`}
      >
        <div
          className={`rounded-lg p-6 lg:p-7 relative overflow-hidden transition-all duration-500 ${
            milestone.highlight ? "ring-1" : ""
          }`}
          style={{
            background: colors.glow,
            border: `1px solid ${colors.line}`,
            ...(milestone.highlight && {
              ringColor: colors.line,
              boxShadow: `0 0 40px ${colors.glow}, 0 0 80px ${colors.glow}`,
            }),
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.line}, transparent)`,
            }}
          />

          {/* Step label */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[0.6rem] font-bold tracking-[3px] uppercase"
              style={{ color: colors.label }}
            >
              {milestone.label}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-[Playfair_Display] text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold leading-tight mb-3"
            style={{ color: colors.accent }}
          >
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="text-[0.82rem] text-[rgba(245,230,211,0.35)] leading-relaxed">
            {milestone.description}
          </p>

          {/* City pills */}
          {milestone.cities && (
            <div className="flex flex-wrap gap-2 mt-4">
              {milestone.cities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 rounded-full text-[0.65rem] font-semibold"
                  style={{
                    background: `${colors.glow}`,
                    border: `1px solid ${colors.line}`,
                    color: colors.accent,
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center timeline spine — desktop only */}
      <div className="hidden lg:flex flex-col items-center relative lg:order-2">
        {/* Glowing node */}
        <div className="relative">
          <div
            className="w-4 h-4 rounded-full z-[2] relative"
            style={{
              background: colors.node,
              boxShadow: `0 0 12px ${colors.node}, 0 0 24px ${colors.glow}`,
            }}
          />
          {/* Pulse ring for highlighted step */}
          {milestone.highlight && (
            <div
              className="absolute -inset-2 rounded-full animate-ping"
              style={{
                background: colors.glow,
                animationDuration: "2s",
              }}
            />
          )}
        </div>
      </div>

      {/* Right content (even = empty) or content (odd) */}
      <div
        className={`${isEven ? "lg:order-3 lg:pl-12 hidden lg:block" : "lg:pr-12 lg:text-right hidden lg:block"}`}
      >
        {/* Empty spacer for alternating layout */}
      </div>
    </motion.div>
  );
}

export default function SriRudraJourney({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { journey } = data;

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-36"
      style={{
        background: "linear-gradient(180deg, #1a0a0a, #0d0505 30%, #0d0505 70%, #1a0a0a)",
      }}
    >
      {/* Stone divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(184,134,11,0.2) 50%, transparent 95%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.04), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div
              className="w-8 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(184,134,11,0.3))",
              }}
            />
            <span className="text-[0.65rem] font-semibold text-[rgba(245,230,211,0.25)] tracking-[3px] uppercase">
              The Story
            </span>
            <div
              className="w-8 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(184,134,11,0.3), transparent)",
              }}
            />
          </div>
          <h2 className="font-[Playfair_Display] text-[clamp(2rem,4vw,2.8rem)] font-bold text-[#f5e6d3]">
            The Sacred{" "}
            <span className="text-[#E85D04]">Journey</span>
          </h2>
          <p className="text-[0.88rem] text-[rgba(245,230,211,0.3)] mt-4 max-w-md mx-auto leading-relaxed">
            From one store to thirteen — a story told through content, conviction, and perfect timing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine line — desktop only */}
          <div
            className="absolute top-0 bottom-0 left-1/2 w-px hidden lg:block -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(184,134,11,0.15) 10%, rgba(232,93,4,0.2) 50%, rgba(255,69,0,0.15) 90%, transparent)",
            }}
          />

          {/* Milestone cards */}
          <div className="flex flex-col gap-10 lg:gap-14">
            {journey.map((milestone, i) => (
              <MilestoneCard
                key={milestone.step}
                milestone={milestone}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stone divider bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(184,134,11,0.2) 50%, transparent 95%)",
        }}
      />
    </section>
  );
}
