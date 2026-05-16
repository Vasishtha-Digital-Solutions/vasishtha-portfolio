import { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SriRudraSocialCase from "./pages/SriRudraSocialCase"
import SriRudraInfluencerCase from "./pages/SriRudraInfluencerCase"
import SriRudraERPCase from "./pages/SriRudraERPCase"
import LumeriaCase from "./pages/LumeriaCase"
import TownCartCase from "./pages/TownCartCase"
import YWICase from "./pages/YWICase"
import FlexcellenceCase from "./pages/FlexcellenceCase"
import HandoverExpertCase from "./pages/HandoverExpertCase"
import OneDayStoriesCase from "./pages/OneDayStoriesCase"
import RameshCase from "./pages/RameshCase"
import NotFound from "./pages/NotFound"

/**
 * ScrollToTop — resets window scroll to 0 on every route change.
 * React Router preserves scroll by default on client-side nav; this
 * restores the expected "new page starts at the top" behaviour so the
 * case-study heroes are visible when navigating in from Home.
 * Respects in-page anchor clicks (e.g. "#portfolio") by skipping the
 * reset when a hash is present.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home: standalone (no shared nav/footer) — has its own top bar */}
        <Route path="/" element={<Home />} />

        {/* Contact: standalone (matches Home aesthetic, not the old Layout) */}
        <Route path="/contact" element={<Contact />} />

        <Route element={<Layout />}>
          <Route path="about" element={<About />} />
        </Route>
        {/* Case study pages — standalone layout (no shared nav/footer) */}
        <Route path="/projects/sri-rudra-social" element={<SriRudraSocialCase />} />
        <Route path="/projects/sri-rudra-influencer" element={<SriRudraInfluencerCase />} />
        <Route path="/projects/sri-rudra-erp" element={<SriRudraERPCase />} />
        <Route path="/projects/lumeria" element={<LumeriaCase />} />
        <Route path="/projects/towncart" element={<TownCartCase />} />
        <Route path="/projects/yellow-wall-interiors" element={<YWICase />} />
        <Route path="/projects/flexcellence" element={<FlexcellenceCase />} />
        <Route path="/projects/handover-expert" element={<HandoverExpertCase />} />
        <Route path="/projects/one-day-stories" element={<OneDayStoriesCase />} />
        <Route path="/projects/ramesh-makeup" element={<RameshCase />} />

        {/* 404 — always last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
