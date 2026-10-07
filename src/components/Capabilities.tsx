"use client";

import React from "react";
import { Zap, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export const capabilityHighlights = [
  {
    icon: Zap,
    title: "Faster AI Data Delivery",
    desc: "We help you collect, organize, and prepare data quickly, reducing the time needed to get your AI projects ready.",
    features: [
      "Fast data collection & processing",
      "Quick data preparation",
      "Continuous improvement",
    ],
  },
  {
    icon: Sparkles,
    title: "High-Quality & Accurate Data",
    desc: "We make sure your data is properly checked, reviewed, and ready to train reliable AI models.",
    features: [
      "Quality-checked datasets",
      "Human review & validation",
      "Error and duplicate detection",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Secure & Trusted Data",
    desc: "Your data stays protected with strong security practices and controlled access throughout the process.",
    features: [
      "Secure data handling",
      "Controlled user access",
      "Complete activity tracking",
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123c64] tracking-tight mb-4 reveal-heading">
            Why Choose <span className="gradient-text">Pibi Tech</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto reveal-on-scroll delay-100">
            Reliable data solutions that help businesses build better AI faster, with quality, security, and accuracy.
          </p>
        </div>

        {/* 3 Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilityHighlights.map((item, idx) => {
            const Icon = item.icon;
            const delays = ["delay-100", "delay-200", "delay-300"];
            const delayClass = delays[idx] || "delay-100";
            return (
              <div
                key={idx}
                className={`reveal-card ${delayClass} bg-white border border-slate-200/90 rounded-[2rem] p-8 md:p-9 shadow-xs hover:shadow-xl hover:border-[#2ec4b6] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group`}
              >
                {/* Card Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1f6fb2]/10 to-[#2ec4b6]/15 border border-[#2ec4b6]/30 flex items-center justify-center text-[#1f6fb2] shadow-2xs group-hover:bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] group-hover:text-white group-hover:border-transparent transition-all duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Card Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#123c64] mb-3 tracking-tight group-hover:text-[#1f6fb2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>

                {/* Key Bullet Features */}
                <ul className="space-y-2.5 pt-5 border-t border-slate-100 mt-auto">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-sm sm:text-[14.5px] font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2ec4b6] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
