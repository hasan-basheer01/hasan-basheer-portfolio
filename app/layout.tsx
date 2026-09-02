import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hasanbasheer.dev";
const description =
  "Hasan Basheer — AI Engineer and Software Engineer building RAG assistants, developer tools and engineering automation with Python, LangChain, FAISS and full-stack systems.";

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
    "AI Engineer",
    "Software Engineer",
    "Generative AI",
    "RAG",
    "LangChain",
    "FAISS",
    "Python",
    "PLM",
    "ENOVIA",
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
  themeColor: "#08080a",
  colorScheme: "dark",
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
    "Vector Search",
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
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
