import { profile } from "@/content/profile";
import { socialLinks } from "@/content/socialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-12">
      <div className="container-tight flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm text-ink">{profile.shortName}</p>
          <p className="mt-1 max-w-xs text-xs leading-relaxed text-ink-faint">
            {profile.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((l) => (
            <a
              key={l.key}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs text-ink-faint transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container-tight mt-8 flex flex-col gap-2 border-t border-line pt-6 text-2xs text-ink-faint sm:flex-row sm:justify-between">
        <span>
          © {year} {profile.name}. Built with Next.js, TypeScript &amp; Framer Motion.
        </span>
        <span className="font-mono">Dindigul, India</span>
      </div>
    </footer>
  );
}
