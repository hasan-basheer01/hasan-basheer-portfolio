import type { Metadata, Viewport } from "next";
import { Rajdhani, JetBrains_Mono, Orbitron } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { profile } from "@/content/profile";

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;

const sans = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const display = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hasanbasheer.dev";
const description =
  "Hasan Basheer — ENOVIA & 3DEXPERIENCE developer and GenAI/agentic AI builder, working with Python, LangChain, RAG, AutoGen, CrewAI and full-stack systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hasan Basheer — AI Engineer & Software Engineer",
    template: "%s · Hasan Basheer",
  },
  description,
  keywords: [
    "Hasan Basheer",
    "Hasan B",
    "GenAI Architect",
    "Agentic AI Developer",
    "Software Engineer",
    "Generative AI",
    "RAG",
    "LangChain",
    "AutoGen",
    "CrewAI",
    "Python",
    "PLM",
    "ENOVIA",
    "3DEXPERIENCE",
    "MQL",
    "TCL",
    "AI Automation",
    "Vector Search",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hasan Basheer — AI Engineer & Software Engineer",
    description,
    siteName: "Hasan Basheer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasan Basheer — AI Engineer & Software Engineer",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: profile.roles.join(", "),
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dindigul",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: profile.currentCompany },
  knowsAbout: [
    "Generative AI",
    "Retrieval-Augmented Generation",
    "Agentic AI",
    "AutoGen",
    "CrewAI",
    "LangChain",
    "Python",
    "Software Engineering",
    "PLM",
    "ENOVIA 3DEXPERIENCE",
    "MQL",
    "TCL",
    "Automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
