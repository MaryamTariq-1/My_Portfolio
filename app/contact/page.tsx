import { Navbar } from "@/components/Navbar";
import { ContactSection, FooterSection } from "@/components/Sections";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Effects } from "@/components/Effects";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Maryam Tariq",
  description: "Send a message. Email confirmation when your message is delivered."
};

export default function ContactPage() {
  return (
    <main className="site-main">
      <Suspense fallback={<div className="scroll-progress-fallback" />}>
        <ScrollProgress />
      </Suspense>
      <Effects />
      <Navbar />
      <div className="contact-page-spacer" />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
