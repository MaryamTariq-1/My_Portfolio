import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Effects } from "@/components/Effects";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  FooterSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection
} from "@/components/Sections";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <main className="site-main">
      <Suspense fallback={<div className="scroll-progress-fallback" />}>
        <ScrollProgress />
      </Suspense>
      <Effects />
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

