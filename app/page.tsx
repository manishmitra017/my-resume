"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import GeometricShapes from "@/components/GeometricShapes";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-300 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Geometric decorations */}
      <GeometricShapes />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
