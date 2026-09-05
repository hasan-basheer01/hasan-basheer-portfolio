import { Github, Linkedin, Mail } from "lucide-react";
import { SiX, SiReddit } from "react-icons/si";
import type { TechIcon } from "@/lib/techIcons";

export interface SocialLink {
  key: string;
  label: string;
  href: string;
  icon: TechIcon;
  /** Shown in the footer / contact grid. */
  handle: string;
  /** TODO links still need real URLs before launch. */
  confirmed: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    // Confirmed via the agentic-email-support-system repo link.
    href: "https://github.com/hasan-basheer01",
    icon: Github,
    handle: "@hasan-basheer01",
    confirmed: true,
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
    key: "x",
    label: "X",
    href: "https://x.com/Hasan__Basheer",
    icon: SiX,
    handle: "@Hasan__Basheer",
    confirmed: true,
  },
  {
    key: "reddit",
    label: "Reddit",
    href: "https://www.reddit.com/user/HasanBasheer01/",
    icon: SiReddit,
    handle: "u/HasanBasheer01",
    confirmed: true,
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
