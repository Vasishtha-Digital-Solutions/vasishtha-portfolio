import { oneDayStoriesData } from "../data/projects/one-day-stories";
import OneDayHero from "../components/sections/one-day-stories/OneDayHero";
import OneDayMarquee from "../components/sections/one-day-stories/OneDayMarquee";
import OneDayWork from "../components/sections/one-day-stories/OneDayWork";
import OneDayOutcome from "../components/sections/one-day-stories/OneDayOutcome";

/* ═════════════════════════════════════════════════════════════
   ONE DAY STORIES — CASE STUDY PAGE (007)
   Standalone cinematic layout (no shared nav/footer, matching
   every other case study). Page background matches the hero's
   ink base so there's no colour flash on load or between
   section boundaries.

   Sections mount one-by-one as each is approved:
     ✓ 1. Hero
     ✓ 2. Marquee
     ✓ 3. Work
     ✓ 4. Outcome
       5. Testimonials     (pending approval)
       6. Footer           (pending approval)
   ═════════════════════════════════════════════════════════════ */

export default function OneDayStoriesCase() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: oneDayStoriesData.palette.black,
        color: oneDayStoriesData.palette.ivory,
      }}
    >
      <OneDayHero data={oneDayStoriesData} />
      <OneDayMarquee data={oneDayStoriesData} />
      <OneDayWork data={oneDayStoriesData} />
      <OneDayOutcome data={oneDayStoriesData} />
    </div>
  );
}
