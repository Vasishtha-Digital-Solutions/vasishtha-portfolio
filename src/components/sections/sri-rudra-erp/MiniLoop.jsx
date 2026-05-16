// Small loop indicator — "you are here" minimap shown at the top
// of each segment section. Makes the loop metaphor structural
// instead of decorative.

const SEGMENT_ORDER = ["sourcing", "production", "distribution", "replenishment"];

// Each quarter occupies 90° starting from top (12 o'clock)
const QUARTERS = {
  sourcing: { from: 270, to: 360 },      // top → right
  production: { from: 0, to: 90 },        // right → bottom
  distribution: { from: 90, to: 180 },    // bottom → left
  replenishment: { from: 180, to: 270 },  // left → top
};

const CX = 50;
const CY = 50;
const R = 36;

const polar = (angle, radius = R) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
};

const arcPath = (from, to, radius = R) => {
  const start = polar(from, radius);
  const end = polar(to, radius);
  const largeArc = to - from > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
};

export default function MiniLoop({ activeKey, palette, size = 80 }) {
  const activeIndex = SEGMENT_ORDER.indexOf(activeKey);
  const activeNumber = String(activeIndex + 1).padStart(2, "0");
  const activeQuarter = QUARTERS[activeKey];

  // Position the "you are here" dot at the middle of the active quarter
  const dotAngle = (activeQuarter.from + activeQuarter.to) / 2;
  const dot = polar(dotAngle, R);

  return (
    <div className="inline-flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        {/* Faint full ring (the whole loop) */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke={palette.ink}
          strokeOpacity="0.12"
          strokeWidth="1.4"
        />

        {/* Inactive quarters — faint */}
        {SEGMENT_ORDER.map((key) => {
          if (key === activeKey) return null;
          const q = QUARTERS[key];
          return (
            <path
              key={key}
              d={arcPath(q.from + 3, q.to - 3)}
              fill="none"
              stroke={palette.brass}
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}

        {/* Active quarter — saffron, prominent */}
        <path
          d={arcPath(activeQuarter.from + 3, activeQuarter.to - 3)}
          fill="none"
          stroke={palette.saffron}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* "You are here" dot at midpoint of active quarter */}
        <circle
          cx={dot.x}
          cy={dot.y}
          r="4"
          fill={palette.saffron}
        />
        <circle
          cx={dot.x}
          cy={dot.y}
          r="6"
          fill="none"
          stroke={palette.saffron}
          strokeOpacity="0.4"
          strokeWidth="0.8"
        >
          <animate
            attributeName="r"
            values="6;10;6"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.4;0;0.4"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Centre — segment number */}
        <text
          x={CX}
          y={CY + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            fontWeight: 700,
            fill: palette.ink,
          }}
        >
          {activeNumber}
        </text>
        <text
          x={CX}
          y={CY + 14}
          textAnchor="middle"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "6px",
            fill: palette.inkMute,
            letterSpacing: "0.15em",
          }}
        >
          / 04
        </text>
      </svg>

      <div className="flex flex-col gap-0.5">
        <span
          className="text-[0.55rem] tracking-[0.22em] uppercase font-semibold"
          style={{ color: palette.brass, fontFamily: "'JetBrains Mono', monospace" }}
        >
          In the loop
        </span>
        <span
          className="text-[0.7rem] font-medium"
          style={{ color: palette.inkSoft, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {activeKey.charAt(0).toUpperCase() + activeKey.slice(1)}
        </span>
      </div>
    </div>
  );
}
