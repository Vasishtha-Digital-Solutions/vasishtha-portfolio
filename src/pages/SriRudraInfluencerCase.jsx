import { sriRudraInfluencerData } from "../data/projects/sri-rudra-influencer";
import SriRudraHero from "../components/sections/sri-rudra/SriRudraHero";
import SriRudraGanesh from "../components/sections/sri-rudra/SriRudraGanesh";
import SriRudraInsight from "../components/sections/sri-rudra/SriRudraInsight";
import SriRudraFooter from "../components/sections/sri-rudra/SriRudraFooter";

export default function SriRudraInfluencerCase() {
  return (
    <div className="min-h-screen bg-[#1a0a0a] text-[#f5e6d3] overflow-x-hidden">
      <SriRudraHero data={sriRudraInfluencerData} />
      <SriRudraGanesh data={sriRudraInfluencerData} />
      <SriRudraInsight data={sriRudraInfluencerData} />
      <SriRudraFooter data={sriRudraInfluencerData} />
    </div>
  );
}
