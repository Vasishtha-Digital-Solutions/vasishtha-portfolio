import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SriRudraFooter({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { services, nextProject } = data;

  return (
    <section className="relative overflow-hidden bg-[#0d0505]">
      {/* Stone divider top */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-[1]"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(184,134,11,0.15) 50%, transparent 95%)",
        }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Services delivered */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="mb-20"
        >
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-6 h-px bg-[rgba(184,134,11,0.3)]" />
            <span className="text-[0.65rem] font-semibold text-[rgba(245,230,211,0.3)] tracking-[3px] uppercase">
              Services Delivered
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="px-5 py-2.5 rounded-full text-[0.78rem] font-medium backdrop-blur-sm"
                style={{
                  background: "rgba(184,134,11,0.06)",
                  border: "1px solid rgba(184,134,11,0.1)",
                  color: "rgba(245,230,211,0.45)",
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Next project CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
        >
          <div className="text-[0.65rem] font-semibold text-[rgba(245,230,211,0.2)] tracking-[3px] uppercase mb-4">
            Next Project
          </div>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="group block rounded-lg p-8 lg:p-10 transition-all duration-500 hover:border-[rgba(232,93,4,0.15)]"
            style={{
              background: "rgba(245,230,211,0.02)",
              border: "1px solid rgba(245,230,211,0.04)",
            }}
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <h3 className="font-[Playfair_Display] text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-[#f5e6d3] mb-2 group-hover:text-[#E85D04] transition-colors duration-500">
                  {nextProject.title}
                </h3>
                <p className="text-[0.88rem] text-[rgba(245,230,211,0.3)]">
                  {nextProject.tagline}
                </p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-[rgba(245,230,211,0.06)] group-hover:border-[rgba(232,93,4,0.2)] group-hover:bg-[rgba(232,93,4,0.08)] transition-all duration-500">
                <ArrowRight
                  size={18}
                  className="text-[rgba(245,230,211,0.3)] group-hover:text-[#E85D04] transition-colors duration-500"
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Bottom branding */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="mt-20 pt-8 border-t border-[rgba(245,230,211,0.04)] flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="w-[26px] h-[26px] rounded-md bg-gradient-to-br from-[#B8860B] to-[#8B6914] flex items-center justify-center font-[Syne] text-[0.45rem] font-extrabold text-[#1a0a0a]">
              VDS
            </div>
            <span className="font-[Syne] text-xs font-bold text-[rgba(245,230,211,0.4)]">
              Vasishtha Digital Solutions
            </span>
          </div>
          <Link
            to="/projects"
            className="text-[0.75rem] text-[rgba(245,230,211,0.25)] hover:text-[rgba(245,230,211,0.5)] transition-colors"
          >
            All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
