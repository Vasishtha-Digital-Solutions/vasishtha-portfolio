import { handoverExpertData } from "../data/projects/handover-expert";
import HandoverHero from "../components/sections/handover-expert/HandoverHero";
import HandoverWork from "../components/sections/handover-expert/HandoverWork";
import HandoverOutcome from "../components/sections/handover-expert/HandoverOutcome";
import HandoverTestimonials from "../components/sections/handover-expert/HandoverTestimonials";
import HandoverFooter from "../components/sections/handover-expert/HandoverFooter";

/* ═════════════════════════════════════════════════════════════
   HANDOVER EXPERT — CASE STUDY PAGE (006)
   Standalone layout (no shared nav/footer, like all other
   case studies). Page background matches the hero's ink base
   so there's no colour flash during load.
   Sections mount one-by-one as each is approved.
   ═════════════════════════════════════════════════════════════ */

export default function HandoverExpertCase() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: handoverExpertData.palette.ink,
        color: "#fff",
      }}
    >
      <HandoverHero data={handoverExpertData} />
      <HandoverWork data={handoverExpertData} />
      <HandoverOutcome data={handoverExpertData} />
      <HandoverTestimonials data={handoverExpertData} />
      <HandoverFooter data={handoverExpertData} />
    </div>
  );
}
