import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";

export interface SocialLink {
  key: string;
  label: string;
  href: string;
  icon: LucideIcon;
  /** Shown in the footer / contact grid. */
  handle: string;
  /** TODO links still need real URLs before launch. */
  confirmed: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    // TODO: confirm GitHub profile URL.
    href: "https://github.com/hasan-basheer01",
    icon: Github,
    handle: "@hasan-basheer01",
    confirmed: false,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/basheer-hasan-b0ab4b220/",
    icon: Linkedin,
    handle: "in/basheer-hasan",
    confirmed: true,
  },
  {
    key: "youtube",
    label: "YouTube",
    // TODO: replace with real channel URL (or remove if unused).
    href: "https://www.youtube.com/@hasanbasheer",
    icon: Youtube,
    handle: "@hasanbasheer",
    confirmed: false,
  },
  {
    key: "email",
    label: "Email",
    href: "mailto:hasanbasheer01@gmail.com",
    icon: Mail,
    handle: "hasanbasheer01@gmail.com",
    confirmed: true,
  },
];

export const socialByKey = (key: string) =>
  socialLinks.find((l) => l.key === key);
