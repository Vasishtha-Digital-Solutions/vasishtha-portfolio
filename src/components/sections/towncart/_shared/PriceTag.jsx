/* ═════════════════════════════════════════════════════════════
   TOWNCART — SHARED PRICE-TAG COMPONENT
   Supermarket price-tag shape: a rectangle with a triangular
   notch on the left pointing into the brand name, plus a
   hole-punch dot for the "string." Reproduces the CSS
   ::before triangle + ::after dot as real elements so the
   component is portable (no global CSS dependency).

   Tones match the approved design: red, amber, green, dark.
   ═════════════════════════════════════════════════════════════ */

const TAG_PALETTE = {
  red: { bg: "#C8321C" },
  amber: { bg: "#BA7517" },
  green: { bg: "#3B6D11" },
  dark: { bg: "#1a1410" },
};

export default function PriceTag({
  tone = "red",
  label,
  value,
  style,
  className = "",
}) {
  const palette = TAG_PALETTE[tone] || TAG_PALETTE.red;

  return (
    <div
      className={`relative inline-block font-semibold ${className}`}
      style={{
        padding: "11px 20px 11px 28px",
        background: palette.bg,
        color: "#FDF3D8",
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        fontSize: 13,
        letterSpacing: "0.06em",
        borderRadius: "0 4px 4px 0",
        boxShadow: "4px 5px 0 rgba(0, 0, 0, 0.3)",
        ...style,
      }}
    >
      {/* Pointed triangle on the left (::before) */}
      <span
        aria-hidden="true"
        className="absolute top-1/2"
        style={{
          left: -11,
          transform: "translateY(-50%)",
          width: 0,
          height: 0,
          borderTop: "22px solid transparent",
          borderBottom: "22px solid transparent",
          borderRight: `20px solid ${palette.bg}`,
        }}
      />
      {/* Hole-punch dot (::after) */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 rounded-full"
        style={{
          left: 4,
          transform: "translateY(-50%)",
          width: 10,
          height: 10,
          background: "#FDF3D8",
          boxShadow: "inset 0 0 0 2px rgba(0, 0, 0, 0.3)",
        }}
      />
      {/* When a `label` is provided, render the two-line stacked tag
          (used in the hero). When label is omitted, render a single
          compact line (used for the floating basket tags in Aisle 02). */}
      {label ? (
        <>
          <span
            className="block"
            style={{
              fontSize: 9,
              opacity: 0.85,
              letterSpacing: "0.15em",
              fontWeight: 400,
            }}
          >
            {label}
          </span>
          <span
            className="block"
            style={{ fontSize: 15, fontWeight: 600, marginTop: 1 }}
          >
            {value}
          </span>
        </>
      ) : (
        <span
          className="block"
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.15em",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
      )}
    </div>
  );
}
