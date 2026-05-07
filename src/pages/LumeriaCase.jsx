import { lumeriaData } from "../data/projects/lumeria";
import LumeriaHero from "../components/sections/lumeria/LumeriaHero";
import LumeriaWebsite from "../components/sections/lumeria/LumeriaWebsite";
import LumeriaMerge from "../components/sections/lumeria/LumeriaMerge";
import LumeriaTimeline from "../components/sections/lumeria/LumeriaTimeline";
import LumeriaTransformation from "../components/sections/lumeria/LumeriaTransformation";
import LumeriaInsight from "../components/sections/lumeria/LumeriaInsight";
import LumeriaFooter from "../components/sections/lumeria/LumeriaFooter";

export default function LumeriaCase() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#f5ede0", color: "#2a2012" }}>
      <LumeriaHero data={lumeriaData} />
      <LumeriaWebsite data={lumeriaData} />
      <LumeriaMerge data={lumeriaData} />
      <LumeriaTimeline data={lumeriaData} />
      <LumeriaTransformation data={lumeriaData} />
      <LumeriaInsight data={lumeriaData} />
      <LumeriaFooter data={lumeriaData} />
    </div>
  );
}
