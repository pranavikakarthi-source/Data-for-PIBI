"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal-card bg-white border border-slate-200/90 rounded-[2rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden">

          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-radial from-cyan-400/15 to-transparent blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#123c64] tracking-tight mb-6 reveal-heading">
              Powering AI with High-Quality <span className="gradient-text">Data</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal reveal-on-scroll delay-150">
              PiBi Tech delivers intelligent data labeling and curation solutions designed to help businesses build accurate, reliable, and AI ready datasets. Our domain focused approach combines human expertise, automation, and quality validation to transform raw data into high quality training data for AI and machine learning applications.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
