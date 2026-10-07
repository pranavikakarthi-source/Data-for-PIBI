"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export interface LifecycleStep {
  step: string;
  title: string;
  desc: string;
}

export const approachSteps: LifecycleStep[] = [
  {
    step: "01",
    title: "Collect",
    desc: "Source diverse, representative data from trusted channels.",
  },
  {
    step: "02",
    title: "Prepare",
    desc: "Clean, normalize and structure data for downstream use.",
  },
  {
    step: "03",
    title: "Annotate",
    desc: "Label data with expert, quality-controlled workflows.",
  },
  {
    step: "04",
    title: "Analyze",
    desc: "Explore patterns and validate datasets and models.",
  },
  {
    step: "05",
    title: "Deploy",
    desc: "Ship data pipelines and models into production.",
  },
  {
    step: "06",
    title: "Monitor",
    desc: "Track drift, quality and feedback continuously.",
  },
];

export default function OurApproach() {
  return (
    <section id="approach" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123c64] tracking-tight mb-4 reveal-heading">
            How We Support <span className="gradient-text">AI</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed reveal-on-scroll delay-100">
            A proven lifecycle from raw data to monitored production AI.
          </p>
        </div>

        {/* 6 Lifecycle Step Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative items-stretch">
          {approachSteps.map((item, idx) => {
            const delays = ["delay-100", "delay-150", "delay-200", "delay-250", "delay-300", "delay-350"];
            const delayClass = delays[idx] || "delay-100";
            return (
              <div key={item.step} className={`reveal-card ${delayClass} relative flex flex-col`}>

                {/* Step Card */}
                <div className="bg-white border border-slate-200/90 rounded-3xl p-6 h-full flex flex-col transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1.5 shadow-2xs group">
                  <h3 className="text-xl font-bold text-[#123c64] mb-2.5 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal mt-auto">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow Connector Indicator (between items on desktop) */}
                {idx < approachSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-xs items-center justify-center text-slate-400">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
