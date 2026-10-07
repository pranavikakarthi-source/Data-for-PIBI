import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveEcosystem from "@/components/InteractiveEcosystem";
import OurApproach from "@/components/OurApproach";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Capabilities from "@/components/Capabilities";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <ScrollRevealInit />
      <Navbar />
      <main className="flex-1">
        {/* Full Width Centered Hero with Double Shade Heading */}
        <Hero />

        {/* 3 Core Cards with Connected Interactive Deep-Dive Architecture Screen */}
        <InteractiveEcosystem />

        {/* OUR APPROACH - How We Support AI (6-step lifecycle) */}
        <OurApproach />

        {/* INDUSTRIES WE SERVE - Healthcare, Finance, Autonomous, Retail */}
        <IndustriesWeServe />

        {/* Enterprise Precision & Benchmarks */}
        <Capabilities />
      </main>
    </div>
  );
}
