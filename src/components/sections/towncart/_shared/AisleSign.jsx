/* ═════════════════════════════════════════════════════════════
   TOWNCART — SHARED AISLE-SIGN COMPONENT
   A supermarket-style hanging sign. Rendered with two little
   metal "rods" (the ::before/::after in the CSS) reproduced
   here as real spans so the component is portable.

   Tones (match the approved design):
   - red    → red base, red-dark shadow (Aisle 01, Aisle 03)
   - amber  → dark-amber base, deep brown shadow (Aisle 04)
   - cream  → cream face, amber-dark shadow, ink text (Aisle 02)
   - bright → bright amber face, amber-dark shadow, ink text (Checkout)
   ═════════════════════════════════════════════════════════════ */

const TONES = {
  red: {
    bg: "#C8321C",
    text: "#FDF3D8",
    shadow1: "#7A1D10", // the "depth" beneath the sign
    shadow2: "rgba(0, 0, 0, 0.5)",
  },
  amber: {
    bg: "#BA7517",
    text: "#FDF3D8",
    shadow1: "#633806",
    shadow2: "rgba(0, 0, 0, 0.5)",
  },
  cream: {
    bg: "#FDF3D8",
    text: "#2d1f14",
    shadow1: "#BA7517",
    shadow2: "rgba(0, 0, 0, 0.6)",
  },
  bright: {
    bg: "#FFB84D",
    text: "#2d1f14",
    shadow1: "#BA7517",
    shadow2: "rgba(0, 0, 0, 0.7)",
  },
};

export default function AisleSign({ num, name, tone = "red" }) {
  const t = TONES[tone] || TONES.red;

  return (
    <div className="inline-block relative group" style={{ textAlign: "center" }}>
      {/* Left hanging rod */}
      <span
        aria-hidden="true"
        className="absolute"
        style={{
          top: -18,
          left: "22%",
          width: 4,
          height: 24,
          background: "linear-gradient(180deg, #8a8a8a, #5F5E5A)",
          borderRadius: 2,
          boxShadow: "1px 1px 0 rgba(0,0,0,0.15)",
          transform: "rotate(8deg)",
        }}
      />
      {/* Right hanging rod */}
      <span
        aria-hidden="true"
        className="absolute"
        style={{
          top: -18,
          right: "22%",
          width: 4,
          height: 24,
          background: "linear-gradient(180deg, #8a8a8a, #5F5E5A)",
          borderRadius: 2,
          boxShadow: "1px 1px 0 rgba(0,0,0,0.15)",
          transform: "rotate(-8deg)",
        }}
      />

      <div
        className="transition-transform duration-500 group-hover:translate-y-[-4px] group-hover:rotate-0"
        style={{
          background: t.bg,
          color: t.text,
          padding: "16px 32px",
          borderRadius: 5,
          transform: "rotate(-1.5deg)",
          boxShadow: `0 8px 0 -2px ${t.shadow1}, 0 16px 32px -10px ${t.shadow2}`,
          transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <span
          className="block"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.28em",
            opacity: 0.8,
            marginBottom: 2,
          }}
        >
          {num}
        </span>
        <span
          className="block"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
