import { motion } from "framer-motion";
import AisleSign from "./_shared/AisleSign";
import PhoneFrame from "./_shared/PhoneFrame";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SECTION 5 · AISLE 03 / THE PRINCIPLE
   Kraft-texture backdrop, giant translucent quotation mark
   behind a pull-quote ("Speak like a shopkeeper."), then
   three floating phone mockups — Hook / Proof / CTA — with
   a principle strip below naming the pattern behind each ad.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const reveal = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// ── Shared ad header (avatar · TownCart · Sponsored · ⓘ · ⋯) ──
function AdHeader({ accountName }) {
  return (
    <div
      className="flex items-center"
      style={{
        padding: "11px 13px",
        background: "#fff",
        gap: 9,
        borderBottom: "1px solid #eee",
        flexShrink: 0,
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#C8321C",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        TC
      </div>
      <div style={{ fontSize: 10, lineHeight: 1.3, flex: 1 }}>
        <p style={{ margin: 0, fontWeight: 700, color: "#111", fontSize: 11 }}>
          {accountName}
        </p>
        <p style={{ margin: 0, color: "#888", fontSize: 9 }}>
          Sponsored · ⓘ
        </p>
      </div>
      <div style={{ color: "#888", fontSize: 14 }}>⋯</div>
    </div>
  );
}

// ── Shared ad footer (CTA head + url + red Apply + reactions) ──
function AdFooter({ footer }) {
  return (
    <div
      style={{
        padding: "9px 13px",
        fontSize: 9,
        color: "#666",
        background: "#fff",
        borderTop: "1px solid #eee",
        flexShrink: 0,
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ marginBottom: 6 }}
      >
        <div>
          <p style={{ margin: 0, fontWeight: 700, color: "#222", fontSize: 10 }}>
            {footer.head}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 8,
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {footer.url}
          </p>
        </div>
        <span style={{ color: "#C8321C", fontWeight: 700, fontSize: 10 }}>
          Apply
        </span>
      </div>
      <div
        className="flex justify-around"
        style={{
          paddingTop: 6,
          borderTop: "1px solid #f0f0f0",
          color: "#666",
          fontSize: 9,
          fontWeight: 600,
        }}
      >
        <span>♥ {footer.reactions.likes}</span>
        <span>💬 {footer.reactions.comments}</span>
        <span>↗ {footer.reactions.shares}</span>
      </div>
    </div>
  );
}

// ── Ad 1 body — HOOK (big earnings number on amber gradient) ──
function AdBodyHook({ body }) {
  return (
    <div
      className="flex-1 flex flex-col justify-center text-center relative"
      style={{
        background:
          "linear-gradient(160deg, #FDF3D8 0%, #FFB84D 60%, #E89A2E 100%)",
        padding: "24px 16px",
        overflow: "hidden",
      }}
    >
      {/* Dotted radial pattern */}
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 30% 20%, transparent 0, transparent 40px, rgba(255, 255, 255, 0.1) 40px, rgba(255, 255, 255, 0.1) 42px)",
          opacity: 0.6,
        }}
      />
      <div
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontStyle: "italic",
          fontSize: 12,
          letterSpacing: "0.2em",
          color: "#7A1D10",
          fontWeight: 600,
          marginBottom: 6,
          position: "relative",
        }}
      >
        {body.label}
      </div>
      <div
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 34,
          fontWeight: 700,
          color: "#2d1f14",
          lineHeight: 1,
          letterSpacing: "-0.025em",
          position: "relative",
        }}
      >
        {body.bigNum}
      </div>
      <div
        style={{
          fontSize: 11,
          color: "#2d1f14",
          marginTop: 8,
          fontWeight: 500,
          position: "relative",
        }}
      >
        {body.sub}
      </div>
      <div
        className="self-center"
        style={{
          marginTop: 18,
          padding: "10px 14px",
          background: "#C8321C",
          color: "#FDF3D8",
          fontSize: 11,
          fontWeight: 600,
          borderRadius: 3,
          position: "relative",
          boxShadow: "2px 2px 0 rgba(0,0,0,0.15)",
        }}
      >
        {body.ctaText}
      </div>
    </div>
  );
}

// ── Ad 2 body — PROOF (SVG storefront illustration + caption) ──
function AdBodyProof({ body }) {
  return (
    <div
      className="flex-1 relative overflow-hidden"
      style={{ background: "#2d1f14" }}
    >
      <svg
        viewBox="0 0 200 360"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
      >
        {/* Sky */}
        <rect width="200" height="360" fill="#4a321f" />
        {/* Sign header */}
        <rect x="0" y="0" width="200" height="85" fill="#C8321C" />
        <rect x="0" y="82" width="200" height="3" fill="#7A1D10" />
        <text
          x="100"
          y="42"
          textAnchor="middle"
          fill="#FDF3D8"
          fontFamily="system-ui, sans-serif"
          fontSize="24"
          fontWeight="800"
          letterSpacing="-0.5"
        >
          TownCart
        </text>
        <text
          x="100"
          y="62"
          textAnchor="middle"
          fill="#FDF3D8"
          fontFamily="system-ui, sans-serif"
          fontSize="9"
          letterSpacing="3"
        >
          SUPERMARKET
        </text>
        {/* Store interior */}
        <rect x="8" y="85" width="184" height="200" fill="#1a1410" />
        {/* Door */}
        <rect x="70" y="210" width="60" height="75" fill="#2d1f14" />
        <rect
          x="72"
          y="212"
          width="56"
          height="71"
          stroke="#5c4a3a"
          strokeWidth="1"
          fill="none"
        />
        <line x1="100" y1="212" x2="100" y2="283" stroke="#5c4a3a" strokeWidth="1" />
        {/* Shelves (4 sets of 4 coloured product rectangles) */}
        <g>
          {/* Shelf 1 (top-left) */}
          <rect x="16" y="95" width="56" height="50" fill="#3d2817" />
          <rect x="20" y="100" width="10" height="40" fill="#FFB84D" />
          <rect x="32" y="103" width="10" height="37" fill="#97C459" />
          <rect x="44" y="100" width="10" height="40" fill="#C8321C" />
          <rect x="56" y="105" width="12" height="35" fill="#FDF3D8" />
          {/* Shelf 2 (top-right) */}
          <rect x="132" y="95" width="56" height="50" fill="#3d2817" />
          <rect x="136" y="100" width="10" height="40" fill="#C8321C" />
          <rect x="148" y="103" width="10" height="37" fill="#FDF3D8" />
          <rect x="160" y="100" width="12" height="40" fill="#FFB84D" />
          <rect x="174" y="105" width="10" height="35" fill="#97C459" />
          {/* Shelf 3 (bottom-left) */}
          <rect x="16" y="150" width="56" height="50" fill="#3d2817" />
          <rect x="20" y="155" width="12" height="40" fill="#97C459" />
          <rect x="34" y="158" width="10" height="37" fill="#C8321C" />
          <rect x="46" y="155" width="10" height="40" fill="#FFB84D" />
          <rect x="58" y="160" width="10" height="35" fill="#FDF3D8" />
          {/* Shelf 4 (bottom-right) */}
          <rect x="132" y="150" width="56" height="50" fill="#3d2817" />
          <rect x="136" y="155" width="10" height="40" fill="#FDF3D8" />
          <rect x="148" y="158" width="10" height="37" fill="#FFB84D" />
          <rect x="160" y="155" width="10" height="40" fill="#97C459" />
          <rect x="172" y="160" width="12" height="35" fill="#C8321C" />
        </g>
        {/* Ground */}
        <rect x="0" y="285" width="200" height="75" fill="#2d1f14" />
        {/* OPEN sign over door */}
        <rect x="82" y="190" width="36" height="16" fill="#C8321C" />
        <text
          x="100"
          y="201"
          textAnchor="middle"
          fill="#FDF3D8"
          fontFamily="system-ui"
          fontSize="7"
          fontWeight="700"
        >
          OPEN
        </text>
      </svg>

      {/* Caption overlay with gradient fade */}
      <div
        className="absolute bottom-0 w-full"
        style={{
          zIndex: 5,
          padding: "12px 13px",
          background:
            "linear-gradient(transparent, rgba(26, 20, 16, 0.95))",
          color: "#F5EEDD",
        }}
      >
        <p style={{ margin: 0, fontSize: 13, fontWeight: 700 }}>
          {body.caption.name}
        </p>
        <p style={{ margin: 0, fontSize: 10, opacity: 0.85, marginTop: 2 }}>
          {body.caption.meta}
        </p>
      </div>
    </div>
  );
}

// ── Ad 3 body — CTA (paper bg, kicker + headline + copy + CTA) ──
function AdBodyCTA({ body }) {
  return (
    <div
      className="flex-1 flex flex-col justify-between relative"
      style={{ background: "#FEFCF5", padding: "26px 18px" }}
    >
      {/* Green check-circle watermark top-right */}
      <span
        aria-hidden="true"
        className="absolute"
        style={{
          top: 20,
          right: 18,
          width: 40,
          height: 40,
          opacity: 0.3,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><circle cx='20' cy='20' r='18' stroke='%23C8321C' stroke-width='2' fill='none'/><path d='M 14 20 L 20 26 L 30 12' stroke='%23C8321C' stroke-width='2.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div>
        <p
          style={{
            margin: 0,
            fontSize: 10,
            color: "#C8321C",
            letterSpacing: "0.2em",
            fontWeight: 700,
          }}
        >
          {body.kicker}
        </p>
        <p
          style={{
            margin: "10px 0 14px",
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 26,
            fontWeight: 500,
            color: "#2d1f14",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          {body.headlineStart}
          <em style={{ fontStyle: "italic", color: "#C8321C" }}>
            {body.headlineAccent}
          </em>
          {body.headlineAfter}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 11,
            color: "#5c4a3a",
            lineHeight: 1.55,
          }}
        >
          {body.copy}
        </p>
      </div>
      <div
        className="text-center"
        style={{
          padding: "10px 14px",
          background: "#2d1f14",
          color: "#FDF3D8",
          fontSize: 11,
          fontWeight: 600,
          borderRadius: 3,
          boxShadow: "2px 2px 0 rgba(0,0,0,0.15)",
        }}
      >
        {body.ctaText}
      </div>
    </div>
  );
}

// ── Variant router ──────────────────────────────────────────
function AdBody({ ad }) {
  if (ad.variant === "hook") return <AdBodyHook body={ad.body} />;
  if (ad.variant === "proof") return <AdBodyProof body={ad.body} />;
  return <AdBodyCTA body={ad.body} />;
}

// ── Main section ────────────────────────────────────────────
export default function TownCartAisle03({ data }) {
  const { aisle03 } = data;

  return (
    <section
      className="relative"
      style={{
        padding: "clamp(5rem, 9vw, 9rem) 5vw",
        background: "#d4a574",
        backgroundImage: [
          "radial-gradient(circle at 12% 22%, rgba(101, 60, 22, 0.22) 0, transparent 42%)",
          "radial-gradient(circle at 88% 78%, rgba(101, 60, 22, 0.18) 0, transparent 42%)",
          "repeating-linear-gradient(30deg, transparent 0, transparent 3px, rgba(101, 60, 22, 0.05) 3px, rgba(101, 60, 22, 0.05) 5px)",
        ].join(", "),
      }}
    >
      <div className="relative mx-auto" style={{ maxWidth: 1100 }}>
        {/* Aisle sign */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8"
        >
          <AisleSign
            num={aisle03.sign.num}
            name={aisle03.sign.name}
            tone={aisle03.sign.tone}
          />
        </motion.div>

        {/* ═══ Pull-quote block ═══ */}
        <div
          className="text-center relative"
          style={{ padding: "2.5rem 0 4rem" }}
        >
          {/* Giant translucent quotation-mark watermark */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              top: -20,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(260px, 34vw, 480px)",
              lineHeight: 0.8,
              color: "#2d1f14",
              opacity: 0.09,
              fontWeight: 600,
              zIndex: 0,
            }}
          >
            “
          </div>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(38px, 6vw, 72px)",
              lineHeight: 1.05,
              color: "#2d1f14",
              letterSpacing: "-0.025em",
              marginBottom: 18,
              fontWeight: 500,
              zIndex: 1,
            }}
          >
            {aisle03.pullQuote.lead}{" "}
            <span className="inline-block relative">
              {aisle03.pullQuote.accent}
              {/* Wavy red underline */}
              <span
                aria-hidden="true"
                className="absolute"
                style={{
                  bottom: -6,
                  left: 0,
                  right: 0,
                  height: 6,
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 6'><path d='M 0 3 Q 75 0, 150 3 T 300 3' stroke='%23C8321C' stroke-width='2.5' fill='none' stroke-linecap='round'/></svg>\")",
                  backgroundPosition: "center",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </span>
            <br />
            {aisle03.pullQuote.after}
          </motion.p>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.22em",
              color: "#5c4a3a",
              zIndex: 1,
            }}
          >
            {aisle03.pullQuote.attribution}
          </motion.p>
        </div>

        {/* Section lede */}
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mx-auto"
          style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto 3.5rem",
            color: "#5c4a3a",
          }}
        >
          {aisle03.lede}
        </motion.p>

        {/* ═══ Phone row ═══ */}
        <div
          className="mx-auto grid gap-6 grid-cols-1 min-[680px]:grid-cols-3"
          style={{ maxWidth: 820, perspective: "1000px", marginBottom: "2rem" }}
        >
          {aisle03.ads.map((ad, i) => (
            <PhoneFrame key={ad.id} index={i}>
              <AdHeader accountName={ad.accountName} />
              <AdBody ad={ad} />
              <AdFooter footer={ad.footer} />
            </PhoneFrame>
          ))}
        </div>

        {/* ═══ Principle labels row ═══ */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto text-center grid gap-6 grid-cols-1 min-[680px]:grid-cols-3"
          style={{ maxWidth: 820, marginTop: "2rem" }}
        >
          {aisle03.principleLabels.map((l, i) => (
            <div key={i}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#7A1D10",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {l.num}
              </p>
              <p
                style={{
                  marginTop: 6,
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#2d1f14",
                  fontStyle: "italic",
                }}
              >
                {l.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
