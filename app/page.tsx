import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { AILab } from "@/components/sections/AILab";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { ContentSection } from "@/components/sections/ContentSection";
import { AskHasan } from "@/components/sections/AskHasan";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WhatIBuild />
        <Expertise />
        <Projects />
        <Experience />
        <AILab />
        <CurrentlyBuilding />
        <ContentSection />
        <AskHasan />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
