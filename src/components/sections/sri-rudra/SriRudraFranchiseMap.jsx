import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Counter that animates from 0 to target ── */
function AnimatedCounter({ target, inView, delay = 0 }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  if (inView && !hasAnimated.current) {
    hasAnimated.current = true;
    const duration = 1500;
    const startTime = performance.now() + delay * 1000;

    const animate = (now) => {
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  return <span>{count}</span>;
}

/* ── Main Component ── */
export default function SriRudraFranchiseMap({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div
              className="w-8 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(184,134,11,0.3))" }}
            />
            <span className="text-[0.65rem] font-semibold text-[rgba(245,230,211,0.25)] tracking-[3px] uppercase">
              Franchise Expansion
            </span>
            <div
              className="w-8 h-px"
              style={{ background: "linear-gradient(90deg, rgba(184,134,11,0.3), transparent)" }}
            />
          </div>
          <h2 className="font-[Playfair_Display] text-[clamp(2rem,4vw,2.8rem)] font-bold text-[#f5e6d3]">
            From One Store to{" "}
            <span className="text-[#E85D04]">Ten</span>
          </h2>
          <p className="text-[0.88rem] text-[rgba(245,230,211,0.3)] mt-4 max-w-lg mx-auto leading-relaxed">
            One reel picked up momentum and went viral, bringing in serious inquiries. With the right messaging and timing, we turned attention into action.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="flex justify-center gap-8 lg:gap-14 mb-12 flex-wrap"
        >
          <div className="text-center">
            <div className="font-[Playfair_Display] text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none text-[#FFD700]">
              <AnimatedCounter target={10} inView={inView} delay={0.8} />
            </div>
            <div className="text-[0.65rem] font-semibold text-[rgba(245,230,211,0.25)] tracking-[2px] uppercase mt-1.5">
              Locations
            </div>
          </div>
          <div
            className="w-px self-stretch"
            style={{ background: "linear-gradient(180deg, transparent, rgba(184,134,11,0.15), transparent)" }}
          />
          <div className="text-center">
            <div className="font-[Playfair_Display] text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none text-[#E85D04]">
              2
            </div>
            <div className="text-[0.65rem] font-semibold text-[rgba(245,230,211,0.25)] tracking-[2px] uppercase mt-1.5">
              States
            </div>
          </div>
          <div
            className="w-px self-stretch"
            style={{ background: "linear-gradient(180deg, transparent, rgba(184,134,11,0.15), transparent)" }}
          />
          <div className="text-center">
            <div className="font-[Playfair_Display] text-[clamp(2.5rem,5vw,3.5rem)] font-black leading-none text-[#CD9B1D]">
              3
            </div>
            <div className="text-[0.65rem] font-semibold text-[rgba(245,230,211,0.25)] tracking-[2px] uppercase mt-1.5">
              Months
            </div>
          </div>
        </motion.div>

        {/* Franchise roadmap image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="relative rounded-xl overflow-hidden"
          style={{
            border: "1px solid rgba(184,134,11,0.1)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src={data.images.franchiseRoadmap}
            alt="Sri Rudra franchise expansion roadmap — 10 stores across Telangana and Andhra Pradesh"
            className="w-full h-auto block"
            loading="lazy"
          />

          {/* Subtle vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(13,5,5,0.3) 100%)",
            }}
          />
        </motion.div>

        {/* Bottom closing line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="text-center mt-12"
        >
          <div
            className="w-10 h-px mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, rgba(184,134,11,0.3), transparent)" }}
          />
          <p className="text-[0.88rem] text-[rgba(245,230,211,0.3)] leading-relaxed max-w-md mx-auto">
            Each franchise started with a DM that said{" "}
            <span className="text-[rgba(245,230,211,0.55)] font-semibold italic">
              &ldquo;I saw your reel.&rdquo;
            </span>
          </p>
        </motion.div>
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
