import { sriRudraSocialData } from "../data/projects/sri-rudra-social";
import SriRudraHero from "../components/sections/sri-rudra/SriRudraHero";
import SriRudraFranchiseMap from "../components/sections/sri-rudra/SriRudraFranchiseMap";
import SriRudraContent from "../components/sections/sri-rudra/SriRudraContent";
import SriRudraFooter from "../components/sections/sri-rudra/SriRudraFooter";

export default function SriRudraSocialCase() {
  return (
    <div className="min-h-screen bg-[#1a0a0a] text-[#f5e6d3] overflow-x-hidden">
      <SriRudraHero data={sriRudraSocialData} />
      <SriRudraFranchiseMap data={sriRudraSocialData} />
      <SriRudraContent data={sriRudraSocialData} />
      <SriRudraFooter data={sriRudraSocialData} />
    </div>
  );
}
