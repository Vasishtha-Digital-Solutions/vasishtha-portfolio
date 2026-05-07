// ──────────────────────────────────────────────────────────────
// Home — Vasishtha Digital Solutions landing page
// Standalone (no shared Layout). Sections mount one-by-one
// as each is approved.
//
// Built: HomeHero, HomeMarquee, HomePortfolio, HomeServices, HomeCTA, HomeFooter
// Home landing is COMPLETE.
// ──────────────────────────────────────────────────────────────

import HomeHero from "../components/sections/home/HomeHero"
import HomeMarquee from "../components/sections/home/HomeMarquee"
import HomePortfolio from "../components/sections/home/HomePortfolio"
import HomeServices from "../components/sections/home/HomeServices"
import HomeCTA from "../components/sections/home/HomeCTA"
import HomeFooter from "../components/sections/home/HomeFooter"

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "#000000" }}
    >
      <HomeHero />
      <HomeMarquee />
      <HomePortfolio />
      <HomeServices />
      <HomeCTA />
      <HomeFooter />
    </main>
  )
}
