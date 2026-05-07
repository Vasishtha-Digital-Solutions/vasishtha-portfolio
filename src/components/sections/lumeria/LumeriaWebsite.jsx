import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Lock, ExternalLink, RefreshCw, ArrowUpRight } from "lucide-react";

/* ═════════════════════════════════════════════════════════════
   LUMERIA — SECTION 2 : The Website We Built
   Live iframe reveal of lumeriaskincare.com in a browser chrome,
   with graceful fallback and an elevated credit moment below.
   ═════════════════════════════════════════════════════════════ */

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LumeriaWebsite({ data }) {
  const w = data.website;
  const iframeRef = useRef(null);
  const [iframeBlocked, setIframeBlocked] = useState(false);

  // Fallback detection: if the iframe errors OR stays empty after 5s, show fallback.
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onError = () => setIframeBlocked(true);
    iframe.addEventListener("error", onError);

    const timer = setTimeout(() => {
      try {
        const doc = iframe.contentDocument;
        if (doc && doc.body && doc.body.innerHTML === "") {
          setIframeBlocked(true);
        }
      } catch {
        // Cross-origin access is expected to throw — that's actually fine;
        // it means the iframe IS loading a third-party page, which is the happy path.
      }
    }, 5000);

    return () => {
      iframe.removeEventListener("error", onError);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Layered cream background with soft depth shift behind the browser */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #f5ede0 0%, #ece4d4 50%, #f5ede0 100%)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.18), transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
        {/* ─── Centered section header ─── */}
        <div className="text-center mb-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(42,32,18,0.05)] border border-[rgba(42,32,18,0.08)]"
          >
            <div className="w-[18px] h-[18px] rounded-[5px] bg-gradient-to-br from-[#2a2012] to-[#1a1508] flex items-center justify-center font-[Syne] text-[0.4rem] font-extrabold text-[#daa520]">
              VDS
            </div>
            <span className="font-[Syne] text-[0.68rem] font-bold tracking-[2px] text-[#8b7340] uppercase">
              {w.kicker}
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="font-[Cormorant_Garamond] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight text-[#2a2012] mt-5 whitespace-pre-line"
          >
            {w.headline}
          </motion.h2>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="text-[0.95rem] text-[#8b7340] mt-3 max-w-[520px] mx-auto"
          >
            {w.supporting}
          </motion.p>
        </div>

        {/* ─── Browser frame with live iframe ─── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Browser chrome bar */}
          <div
            className="rounded-t-2xl px-5 py-3.5 flex items-center gap-3 border border-b-0"
            style={{
              background: "#2a2012",
              borderColor: "rgba(42,32,18,0.2)",
            }}
          >
            {/* Traffic lights */}
            <div className="flex gap-[7px] flex-shrink-0">
              <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
              <div className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
              <div className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
            </div>

            {/* URL bar */}
            <div
              className="flex-1 flex items-center gap-2 rounded-lg px-4 py-2"
              style={{ background: "rgba(245,237,224,0.08)" }}
            >
              <Lock size={12} style={{ color: "rgba(218,165,32,0.6)" }} />
              <span className="text-[0.78rem] tracking-[0.2px] font-[Plus_Jakarta_Sans]"
                style={{ color: "rgba(245,237,224,0.55)" }}>
                {w.browserUrl}
              </span>
            </div>

            {/* Right icons */}
            <div className="flex gap-2.5 flex-shrink-0">
              <ExternalLink size={14} style={{ color: "rgba(245,237,224,0.25)" }} />
              <RefreshCw size={14} style={{ color: "rgba(245,237,224,0.25)" }} />
            </div>
          </div>

          {/* Iframe container */}
          <div
            className="relative overflow-hidden rounded-b-2xl border border-t-0"
            style={{
              borderColor: "rgba(42,32,18,0.12)",
              boxShadow:
                "0 40px 100px rgba(42,32,18,0.18), 0 0 0 1px rgba(42,32,18,0.05)",
              background: "#f5ede0",
            }}
          >
            {!iframeBlocked && (
              <iframe
                ref={iframeRef}
                src={`https://${w.browserUrl}`}
                className="w-full block border-0"
                style={{ height: `${w.iframeHeight}px` }}
                loading="lazy"
                title={`${w.browserUrl} — Built by VDS`}
                onError={() => setIframeBlocked(true)}
              />
            )}

            {/* Fallback card — shows if iframe fails or is blocked */}
            {iframeBlocked && (
              <div
                className="flex flex-col items-center justify-center text-center px-10 py-20"
                style={{
                  height: `${w.iframeHeight}px`,
                  background:
                    "linear-gradient(135deg, #f5ede0, #e8d5b5)",
                }}
              >
                <div
                  className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-[#2a2012] to-[#1a1508] flex items-center justify-center mb-5"
                  style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#daa520]" />
                </div>
                <h3 className="font-[Cormorant_Garamond] text-[1.6rem] font-semibold text-[#2a2012] mb-2">
                  Lumeria Skincare
                </h3>
                <p className="text-sm text-[#8b7340] max-w-[400px] leading-relaxed mb-6">
                  The live website couldn't load here. View it in its natural
                  habitat:
                </p>
                <a
                  href={`https://${w.browserUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#2a2012] text-[#daa520] text-sm font-semibold hover:gap-3 transition-all"
                >
                  Visit Live Site
                  <ArrowUpRight size={15} />
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* ═══ ELEVATED CREDIT MOMENT (departure from approved) ═══
             Replaces the small floating corner badge with a proper centered callout
             that gives the "Designed & Built by Vasishtha" its own breathing room.
        */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="relative mt-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[rgba(42,32,18,0.08)]" />
            <span className="font-[Syne] text-[0.65rem] font-bold tracking-[3px] text-[#8b7340] uppercase">
              Credit
            </span>
            <div className="h-px flex-1 bg-[rgba(42,32,18,0.08)]" />
          </div>

          <div
            className="max-w-[880px] mx-auto rounded-2xl px-8 md:px-12 py-8 md:py-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(42,32,18,0.04), rgba(42,32,18,0.02))",
              border: "1px solid rgba(42,32,18,0.08)",
              boxShadow: "0 10px 40px rgba(42,32,18,0.06)",
            }}
          >
            {/* Studio badge */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div
                className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-[#2a2012] to-[#1a1508] flex items-center justify-center font-[Syne] text-[0.75rem] font-extrabold text-[#daa520]"
                style={{
                  boxShadow:
                    "0 8px 20px rgba(42,32,18,0.2), 0 0 20px rgba(218,165,32,0.08)",
                }}
              >
                VDS
              </div>
              <div>
                <div className="text-[0.65rem] font-[Syne] tracking-[2px] text-[#8b7340] uppercase">
                  {w.credit.prefix}
                </div>
                <div className="font-[Cormorant_Garamond] text-[1.3rem] font-semibold text-[#2a2012] leading-tight">
                  {w.credit.studio}
                </div>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block w-px self-stretch bg-[rgba(42,32,18,0.1)]" />

            {/* Meta stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
              {w.credit.meta.map((m) => (
                <div key={m.label} className="text-center md:text-left">
                  <div className="font-[Cormorant_Garamond] text-[1.3rem] font-semibold text-[#2a2012] leading-none">
                    {m.value}
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[1.5px] text-[#8b7340] mt-1.5 font-semibold">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Tech stack pill row ─── */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="flex flex-wrap gap-2 justify-center mt-10"
        >
          {w.techStack.map((tech, i) => (
            <motion.span
              key={tech}
              variants={reveal}
              custom={i + 2}
              className="px-4 py-2 rounded-full text-[0.75rem] font-medium"
              style={{
                background: "rgba(42,32,18,0.04)",
                border: "1px solid rgba(42,32,18,0.08)",
                color: "#8b7340",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
