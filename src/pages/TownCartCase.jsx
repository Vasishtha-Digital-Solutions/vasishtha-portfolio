import { towncartData } from "../data/projects/towncart";
import TownCartHero from "../components/sections/towncart/TownCartHero";
import TownCartMarquee from "../components/sections/towncart/TownCartMarquee";
import TownCartAisle01 from "../components/sections/towncart/TownCartAisle01";
import TownCartAisle02 from "../components/sections/towncart/TownCartAisle02";
import TownCartAisle03 from "../components/sections/towncart/TownCartAisle03";
import TownCartAisle04 from "../components/sections/towncart/TownCartAisle04";
import TownCartCheckout from "../components/sections/towncart/TownCartCheckout";
import TownCartTakeaway from "../components/sections/towncart/TownCartTakeaway";

/* ═════════════════════════════════════════════════════════════
   TOWNCART — CASE STUDY PAGE
   Standalone layout (no shared nav/footer, like Sri Rudra & Lumeria).
   Background = TownCart cream (matches hero seamlessly so page
   edges never flash a different color during load).
   Sections added section-by-section with user approval.
   ═════════════════════════════════════════════════════════════ */

export default function TownCartCase() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: towncartData.palette.cream,
        color: towncartData.palette.ink,
      }}
    >
      <TownCartHero data={towncartData} />
      <TownCartMarquee data={towncartData} />
      <TownCartAisle01 data={towncartData} />
      <TownCartAisle02 data={towncartData} />
      <TownCartAisle03 data={towncartData} />
      <TownCartAisle04 data={towncartData} />
      <TownCartCheckout data={towncartData} />
      <TownCartTakeaway data={towncartData} />
    </div>
  );
}
