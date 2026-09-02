import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about" divider={false}>
      <SectionHeader
        label="About"
        title={profile.aboutLead}
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          {profile.aboutBody.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="max-w-prose text-sm leading-relaxed text-ink-muted">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {profile.aboutCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <div className="card card-hover h-full p-4">
                <p className="font-mono text-2xs uppercase tracking-wider text-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-sm font-medium text-ink">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
