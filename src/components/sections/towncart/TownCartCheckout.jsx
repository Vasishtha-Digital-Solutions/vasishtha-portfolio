import { motion } from "framer-motion";
import AisleSign from "./_shared/AisleSign";
import Counter from "./_shared/Counter";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — SECTION 7 · CHECKOUT / THE RESULTS
   The dramatic "results reveal": dark ink backdrop with an
   amber spotlight cone, a bright aisle sign, a cash-register
   slot emitting a clipped-zigzag receipt (with barcode scan
   line), and 3 animated-counter stat cards.
   ═════════════════════════════════════════════════════════════ */

const EASE = [0.2, 0.8, 0.2, 1];

const reveal = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// Zig-zag clip-path that chews the receipt's bottom edge into
// torn paper — identical to the HTML version.
const RECEIPT_CLIP = [
  "0 0",
  "100% 0",
  "100% calc(100% - 14px)",
  "96% 100%", "92% calc(100% - 12px)",
  "88% 100%", "84% calc(100% - 12px)",
  "80% 100%", "76% calc(100% - 12px)",
  "72% 100%", "68% calc(100% - 12px)",
  "64% 100%", "60% calc(100% - 12px)",
  "56% 100%", "52% calc(100% - 12px)",
  "48% 100%", "44% calc(100% - 12px)",
  "40% 100%", "36% calc(100% - 12px)",
  "32% 100%", "28% calc(100% - 12px)",
  "24% 100%", "20% calc(100% - 12px)",
  "16% 100%", "12% calc(100% - 12px)",
  "8% 100%", "4% calc(100% - 12px)",
  "0 100%",
].join(", ");

// ── Spotlights + cone (decorative layers) ───────────────────
function Spotlights() {
  return (
    <>
      {/* Soft radial spots — amber top-centre, red bottom-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse at 50% 25%, rgba(255, 184, 77, 0.22) 0%, transparent 55%)",
            "radial-gradient(ellipse at 20% 80%, rgba(200, 50, 28, 0.1) 0%, transparent 40%)",
          ].join(", "),
        }}
      />
      {/* Spotlight cone — a soft blurred triangle descending from top */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "180px solid transparent",
          borderRight: "180px solid transparent",
          borderTop: "400px solid rgba(255, 214, 140, 0.08)",
          filter: "blur(20px)",
        }}
      />
    </>
  );
}

// ── Cash register slot + receipt ────────────────────────────
function CashRegister({ receipt }) {
  return (
    <div
      className="relative mx-auto"
      style={{ maxWidth: 460, zIndex: 3 }}
    >
      {/* Register slot (the "mouth" the receipt emerges from) */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: 420,
          height: 12,
          background: "linear-gradient(180deg, #1a1410 0%, #2d1f14 100%)",
          borderRadius: "12px 12px 0 0",
          boxShadow:
            "inset 0 3px 6px rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <span
          aria-hidden="true"
          className="absolute"
          style={{
            top: 4,
            left: 20,
            right: 20,
            height: 4,
            background: "#000",
            borderRadius: 2,
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.8)",
          }}
        />
      </div>

      {/* Receipt wrapper — hides the top of the receipt behind the slot */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{ maxWidth: 400, paddingTop: 2 }}
      >
        {/* Fade into the slot at the top */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: 40,
            background:
              "linear-gradient(180deg, rgba(26, 20, 16, 0.4) 0%, transparent 100%)",
            zIndex: 3,
          }}
        />

        {/* Two faded "carbon copy" shadow layers */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "#FEFCF5",
            opacity: 0.55,
            transform: "rotate(3deg) translate(10px, 6px)",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "#FDF3D8",
            opacity: 0.72,
            transform: "rotate(-1.5deg) translate(-6px, 4px)",
            zIndex: 0,
          }}
        />

        {/* Main receipt — zigzag bottom, print-in animation */}
        <motion.div
          className="relative"
          style={{
            zIndex: 2,
            fontFamily: "'JetBrains Mono', monospace",
            color: "#2d1f14",
            padding: "2.5rem 2rem 1.5rem",
            background: "#FEFCF5",
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0, transparent 28px, rgba(0, 0, 0, 0.03) 28px, rgba(0, 0, 0, 0.03) 29px)",
            boxShadow:
              "0 36px 72px -16px rgba(0, 0, 0, 0.8), 0 16px 28px -8px rgba(0, 0, 0, 0.45)",
            clipPath: `polygon(${RECEIPT_CLIP})`,
            transform: "rotate(-1.5deg)",
          }}
          initial={{ maxHeight: 0 }}
          whileInView={{ maxHeight: 1200 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease: [0.2, 0.8, 0.3, 1] }}
        >
          {/* Head */}
          <div
            className="text-center"
            style={{ paddingBottom: 14, borderBottom: "1.5px dashed #2d1f14" }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 21,
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#C8321C",
                marginBottom: 6,
              }}
            >
              {receipt.brand}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 10,
                letterSpacing: "0.14em",
                opacity: 0.75,
                fontWeight: 500,
              }}
            >
              {receipt.sub}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 9,
                opacity: 0.65,
                marginTop: 4,
              }}
            >
              {receipt.date}
            </p>
          </div>

          {/* Items */}
          <div style={{ padding: "14px 0", fontSize: 13 }}>
            {receipt.items.map((row, i) => (
              <div
                key={i}
                className="flex justify-between"
                style={{ padding: "5px 0" }}
              >
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div
            style={{
              padding: "12px 0",
              borderTop: "1.5px dashed #2d1f14",
              borderBottom: "1.5px dashed #2d1f14",
            }}
          >
            <div
              className="flex justify-between"
              style={{ fontSize: 16, fontWeight: 700 }}
            >
              <span>{receipt.totalLabel}</span>
              <span>{receipt.totalValue}</span>
            </div>
          </div>

          {/* Savings block with spinning stars */}
          <div
            className="text-center relative"
            style={{ padding: "18px 0 10px" }}
          >
            <motion.span
              aria-hidden="true"
              className="absolute"
              style={{
                left: 30,
                top: 26,
                color: "#3B6D11",
                fontSize: 14,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            >
              ★
            </motion.span>
            <motion.span
              aria-hidden="true"
              className="absolute"
              style={{
                right: 30,
                top: 26,
                color: "#3B6D11",
                fontSize: 14,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            >
              ★
            </motion.span>
            <p
              style={{
                margin: 0,
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "#3B6D11",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              {receipt.savings.label}
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: 42,
                fontWeight: 700,
                color: "#3B6D11",
                lineHeight: 1,
                letterSpacing: "-0.025em",
              }}
            >
              {receipt.savings.amount}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 10,
                opacity: 0.7,
                marginTop: 10,
              }}
            >
              {receipt.savings.vs}
            </p>
          </div>

          {/* Foot — barcode with scan line */}
          <div
            className="text-center"
            style={{
              marginTop: 14,
              paddingTop: 14,
              borderTop: "1.5px dashed #2d1f14",
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                height: 38,
                marginBottom: 8,
                backgroundImage: [
                  "repeating-linear-gradient(90deg, #2d1f14 0 2px, transparent 2px 4px, #2d1f14 4px 6px, transparent 6px 11px, #2d1f14 11px 13px, transparent 13px 18px, #2d1f14 18px 20px, transparent 20px 25px)",
                ].join(", "),
              }}
            >
              {/* Red scan line sweeping the barcode */}
              <motion.span
                aria-hidden="true"
                className="absolute left-0 right-0"
                style={{
                  height: 3,
                  background: "#C8321C",
                  boxShadow: "0 0 12px #C8321C, 0 0 24px #C8321C",
                }}
                animate={{ y: ["-100%", "100%", "100%"] }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  times: [0, 0.5, 1],
                }}
              />
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 9,
                opacity: 0.75,
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              {receipt.barcodeId}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ── Stat card with animated counter ─────────────────────────
const STAT_TONES = {
  amber: {
    bg: "rgba(255, 184, 77, 0.12)",
    border: "1.5px solid rgba(255, 184, 77, 0.35)",
    num: "#FFB84D",
  },
  green: {
    bg: "rgba(151, 196, 89, 0.12)",
    border: "1.5px solid rgba(151, 196, 89, 0.35)",
    num: "#97C459",
  },
  red: {
    bg: "rgba(200, 50, 28, 0.18)",
    border: "1.5px solid rgba(240, 149, 149, 0.45)",
    num: "#F09595",
  },
};

function StatCard({ stat, index }) {
  const t = STAT_TONES[stat.tone] || STAT_TONES.amber;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1, ease: EASE }}
      whileHover={{ y: -6 }}
      className="text-center relative overflow-hidden"
      style={{
        padding: "2rem 1rem",
        borderRadius: 10,
        background: t.bg,
        border: t.border,
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: "clamp(44px, 6.5vw, 62px)",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: t.num,
        }}
      >
        {stat.prefix || ""}
        <Counter target={stat.target} comma={stat.comma} />
        {stat.suffix || ""}
      </p>
      <p
        style={{
          margin: 0,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#F5EEDD",
          opacity: 0.75,
          marginTop: 14,
          letterSpacing: "0.18em",
          fontWeight: 500,
        }}
      >
        {stat.label}
      </p>

      {/* Decorative big italic number bottom-right */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: -20,
          right: -20,
          fontFamily: "'Fraunces', Georgia, serif",
          fontStyle: "italic",
          fontSize: 120,
          opacity: 0.08,
          fontWeight: 700,
          lineHeight: 0.8,
        }}
      >
        {stat.decoration}
      </span>
    </motion.div>
  );
}

// ── Main section ────────────────────────────────────────────
export default function TownCartCheckout({ data }) {
  const { checkout } = data;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(5rem, 9vw, 9rem) 5vw",
        background: "linear-gradient(180deg, #1a1410 0%, #2d1f14 100%)",
        color: "#F5EEDD",
      }}
    >
      {/* Scanline overlay (shared with Aisle 02 for visual continuity) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255, 255, 255, 0.02) 3px, rgba(255, 255, 255, 0.02) 4px)",
        }}
      />

      <Spotlights />

      <div className="relative mx-auto" style={{ maxWidth: 1100, zIndex: 2 }}>
        {/* Aisle sign */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8"
        >
          <AisleSign
            num={checkout.sign.num}
            name={checkout.sign.name}
            tone={checkout.sign.tone}
          />
        </motion.div>

        {/* Italic amber intro */}
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.8vw, 30px)",
            color: "#FFB84D",
            margin: "2rem 0 3rem",
          }}
        >
          {checkout.intro}
        </motion.p>

        {/* Cash register + receipt */}
        <CashRegister receipt={checkout.receipt} />

        {/* Stat trio */}
        <div
          className="mx-auto grid gap-5 grid-cols-1 min-[680px]:grid-cols-3"
          style={{ maxWidth: 760, marginTop: "4rem" }}
        >
          {checkout.stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
