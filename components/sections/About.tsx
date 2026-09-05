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
        intro={profile.aboutIntro}
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        {/* Manifest — short fragments, not paragraphs. */}
        <ol className="space-y-0">
          {profile.aboutBody.map((line, i) => (
            <Reveal key={line} delay={i * 0.04}>
              <li className="flex items-baseline gap-4 border-t border-line py-3 first:border-t-0">
                <span className="shrink-0 font-mono text-2xs text-accent-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug text-ink-muted">
                  {line}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="grid gap-3 sm:grid-cols-2">
          {profile.aboutCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <div className="frame-tech card card-hover h-full p-4">
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
