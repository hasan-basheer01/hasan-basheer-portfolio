import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechConstellation } from "@/components/visuals/TechConstellation";

export function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeader
        label="Expertise"
        title="A technology map, not a skills bar chart."
        intro="Five domains, connected. Every technology below says what it is actually used for and which project it shows up in — no invented proficiency scores."
      />
      <div className="mt-14">
        <TechConstellation />
      </div>
    </Section>
  );
}
