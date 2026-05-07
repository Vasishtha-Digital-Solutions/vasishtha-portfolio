import { ywiData } from "../data/projects/ywi";
import YWIHero from "../components/sections/ywi/YWIHero";
import YWIMarquee from "../components/sections/ywi/YWIMarquee";
import YWIBrief from "../components/sections/ywi/YWIBrief";
import YWISystem from "../components/sections/ywi/YWISystem";
import YWICtaEngine from "../components/sections/ywi/YWICtaEngine";
import YWIResults from "../components/sections/ywi/YWIResults";
import YWITakeaway from "../components/sections/ywi/YWITakeaway";

/* ═════════════════════════════════════════════════════════════
   YELLOW WALL INTERIORS — CASE STUDY PAGE (003)
   Standalone layout (no shared nav/footer, like Sri Rudra /
   Lumeria / TownCart). Page background matches hero base so
   edges never flash a different colour during load.
   Sections added one-by-one with user approval.
   ═════════════════════════════════════════════════════════════ */

export default function YWICase() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: ywiData.palette.bg,
        color: ywiData.palette.cream,
      }}
    >
      <YWIHero data={ywiData} />
      <YWIMarquee data={ywiData} />
      <YWIBrief data={ywiData} />
      <YWISystem data={ywiData} />
      <YWICtaEngine data={ywiData} />
      <YWIResults data={ywiData} />
      <YWITakeaway data={ywiData} />
    </div>
  );
}
