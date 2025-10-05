"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyAchievements from "@/components/KeyAchievements";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <Hero />
      <About />
      <KeyAchievements />
      <Skills />
      <Experience />
      <ThoughtLeadership />
      <Certifications />
      <Education />
      <Contact />
    </main>
  );
}
