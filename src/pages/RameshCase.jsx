import { rameshData } from "../data/projects/ramesh"
import RameshHero from "../components/sections/ramesh/RameshHero"
import RameshProblem from "../components/sections/ramesh/RameshProblem"
import RameshRoles from "../components/sections/ramesh/RameshRoles"
import RameshAssignment from "../components/sections/ramesh/RameshAssignment"
import RameshScreens from "../components/sections/ramesh/RameshScreens"
import RameshOutcome from "../components/sections/ramesh/RameshOutcome"
import RameshFooter from "../components/sections/ramesh/RameshFooter"

export default function RameshCase() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: rameshData.palette.bg, color: rameshData.palette.text }}
    >
      <RameshHero data={rameshData} />
      <RameshProblem data={rameshData} />
      <RameshRoles data={rameshData} />
      <RameshAssignment data={rameshData} />
      <RameshScreens data={rameshData} />
      <RameshOutcome data={rameshData} />
      <RameshFooter data={rameshData} />
    </div>
  )
}
