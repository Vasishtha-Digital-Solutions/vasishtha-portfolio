import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SriRudraGanesh({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { ganesh, images } = data;

  return (
    <section className="relative overflow-hidden">
      {/* Transition in */}
      <div
        className="h-20"
        style={{ background: "linear-gradient(180deg, #1a0a0a, #110808)" }}
      />

      {/* Split layout */}
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] bg-[#110808] relative"
      >
        {/* LEFT — Ganesh Idol Image */}
        <div className="relative overflow-hidden min-h-[400px] lg:min-h-[600px]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${images.ganeshIdol}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Right edge fade */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background: "linear-gradient(90deg, transparent 55%, #110808 98%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28"
            style={{
              background: "linear-gradient(180deg, transparent, #110808)",
            }}
          />
          {/* Top fade */}
          <div
            className="absolute top-0 left-0 right-0 h-16"
            style={{
              background: "linear-gradient(0deg, transparent, #110808)",
            }}
          />
        </div>

        {/* RIGHT — Bold Stats */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-10 lg:py-20 lg:pl-10 lg:pr-16 relative">
          {/* Ambient glow */}
          <div
            className="absolute top-1/4 left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,107,0,0.04), transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Campaign label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="mb-10 lg:mb-11"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-px bg-[rgba(255,215,0,0.3)]" />
              <span className="text-[0.65rem] font-semibold text-[rgba(255,215,0,0.5)] tracking-[3px] uppercase">
                {ganesh.campaignLabel}
              </span>
            </div>
          </motion.div>

          {/* ₹3 Crore */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="mb-12"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-[Playfair_Display] text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold text-[#FFD700]">
                ₹
              </span>
              <span className="font-[Playfair_Display] text-[clamp(5rem,10vw,7.5rem)] font-black leading-[0.85] tracking-tight text-[#FFD700]">
                3
              </span>
            </div>
            <div className="font-[Playfair_Display] text-[clamp(3rem,6vw,5rem)] font-black leading-[0.8] tracking-tight text-[#FFD700] -mt-0.5">
              Crore
            </div>
            <div className="text-[0.7rem] font-semibold text-[rgba(245,230,211,0.3)] tracking-[2.5px] uppercase mt-3">
              Revenue Generated
            </div>
          </motion.div>

          {/* 4 Million */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="mb-10"
          >
            <div className="font-[Playfair_Display] text-[clamp(2.5rem,5vw,3.8rem)] font-extrabold leading-none tracking-tight text-[#E85D04]">
              4 Million
            </div>
            <div className="text-[0.7rem] font-semibold text-[rgba(245,230,211,0.25)] tracking-[2.5px] uppercase mt-2.5">
              People Reached
            </div>
          </motion.div>

          {/* 100x */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="mb-12"
          >
            <div className="font-[Playfair_Display] text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none tracking-tight text-[#CD9B1D]">
              100x
            </div>
            <div className="text-[0.7rem] font-semibold text-[rgba(245,230,211,0.2)] tracking-[2.5px] uppercase mt-2.5">
              Return on ₹3 Lakh Spent
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3.5}
          >
            <div
              className="w-12 h-px mb-6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(184,134,11,0.3), transparent)",
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
            className="text-[0.88rem] text-[rgba(245,230,211,0.35)] leading-relaxed max-w-[420px]"
          >
            This wasn't random. We built a{" "}
            <span className="text-[rgba(245,230,211,0.6)] font-semibold">
              deliberate influencer pyramid
            </span>{" "}
            — macro creators for reach, mid-tier for engagement, niche
            devotional voices for conversion. During Ganesh Chaturthi, with the
            entire country in a devotional mindset, Sri Rudra showed up
            everywhere that mattered.
          </motion.p>
        </div>
      </div>

      {/* Transition out */}
      <div
        className="h-20"
        style={{ background: "linear-gradient(180deg, #110808, #1a0a0a)" }}
      />
    </section>
  );
}
