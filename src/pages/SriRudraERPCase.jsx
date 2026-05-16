import { sriRudraErpData } from "../data/projects/sri-rudra-erp";
import ErpNav from "../components/sections/sri-rudra-erp/ErpNav";
import ErpHero from "../components/sections/sri-rudra-erp/ErpHero";
import ErpProblem from "../components/sections/sri-rudra-erp/ErpProblem";
import ErpWhyCustom from "../components/sections/sri-rudra-erp/ErpWhyCustom";
import ErpSegments from "../components/sections/sri-rudra-erp/ErpSegments";
import ErpFoundation from "../components/sections/sri-rudra-erp/ErpFoundation";
import ErpNumbers from "../components/sections/sri-rudra-erp/ErpNumbers";
import ErpProcess from "../components/sections/sri-rudra-erp/ErpProcess";
import ErpCTA from "../components/sections/sri-rudra-erp/ErpCTA";
import ErpFooter from "../components/sections/sri-rudra-erp/ErpFooter";

export default function SriRudraERPCase() {
  const data = sriRudraErpData;
  const { palette } = data;

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: palette.base, color: palette.ink }}
    >
      <ErpNav palette={palette} />
      <ErpHero data={data} palette={palette} />
      <ErpProblem data={data} palette={palette} />
      <ErpWhyCustom data={data} palette={palette} />
      <ErpSegments data={data} palette={palette} />
      <ErpFoundation data={data} palette={palette} />
      <ErpNumbers data={data} palette={palette} />
      <ErpProcess data={data} palette={palette} />
      <ErpCTA data={data} palette={palette} />
      <ErpFooter data={data} palette={palette} />
    </div>
  );
}
