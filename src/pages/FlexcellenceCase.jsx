import { flexcellenceData } from "../data/projects/flexcellence";
import FlexcellenceHero from "../components/sections/flexcellence/FlexcellenceHero";
import FlexcellenceMarquee from "../components/sections/flexcellence/FlexcellenceMarquee";
import FlexcellenceWork from "../components/sections/flexcellence/FlexcellenceWork";
import FlexcellenceOutcome from "../components/sections/flexcellence/FlexcellenceOutcome";
import FlexcellenceFooter from "../components/sections/flexcellence/FlexcellenceFooter";

/* ═════════════════════════════════════════════════════════════
   FLEXCELLENCE — CASE STUDY PAGE (005)
   Standalone layout (no shared nav/footer, like Sri Rudra /
   Lumeria / TownCart / YWI). Page background matches hero base
   so edges never flash a different colour during load.
   Sections are added one-by-one with user approval.
   ═════════════════════════════════════════════════════════════ */

export default function FlexcellenceCase() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: flexcellenceData.palette.cream,
        color: flexcellenceData.palette.charcoal,
      }}
    >
      <FlexcellenceHero data={flexcellenceData} />
      <FlexcellenceMarquee data={flexcellenceData} />
      <FlexcellenceWork data={flexcellenceData} />
      <FlexcellenceOutcome data={flexcellenceData} />
      <FlexcellenceFooter data={flexcellenceData} />
    </div>
  );
}
