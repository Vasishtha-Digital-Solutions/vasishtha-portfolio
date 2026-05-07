import { sriRudraData } from "../data/projects/sri-rudra";
import SriRudraHero from "../components/sections/sri-rudra/SriRudraHero";
import SriRudraJourney from "../components/sections/sri-rudra/SriRudraJourney";
import SriRudraContent from "../components/sections/sri-rudra/SriRudraContent";
import SriRudraGanesh from "../components/sections/sri-rudra/SriRudraGanesh";
import SriRudraInsight from "../components/sections/sri-rudra/SriRudraInsight";
import SriRudraFooter from "../components/sections/sri-rudra/SriRudraFooter";

export default function SriRudraCase() {
  return (
    <div className="min-h-screen bg-[#1a0a0a] text-[#f5e6d3] overflow-x-hidden">
      <SriRudraHero data={sriRudraData} />
      <SriRudraJourney data={sriRudraData} />
      <SriRudraContent data={sriRudraData} />
      <SriRudraGanesh data={sriRudraData} />
      <SriRudraInsight data={sriRudraData} />
      <SriRudraFooter data={sriRudraData} />
    </div>
  );
}
