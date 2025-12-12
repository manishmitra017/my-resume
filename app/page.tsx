"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background mesh */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-4xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/15 rounded-full blur-4xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/15 rounded-full blur-4xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />

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
