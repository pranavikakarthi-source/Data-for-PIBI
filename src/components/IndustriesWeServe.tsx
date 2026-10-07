"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";

export interface IndustryItem {
  id: string;
  title: string;
  desc: string;
  imageSrc: string;
  details: string[];
}

export const industriesList: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    desc: "Enable better patient outcomes with real time clinical data, analytics and secure data platforms.",
    imageSrc: "/images/healthcare.jpg",
    details: [
      "HIPAA compliant clinical dataset pipelines",
      "Medical imaging & radiological AI annotation",
      "Predictive patient monitoring & ICU telemetry",
      "Electronic Health Record (EHR) data lakehouses",
    ],
  },
  {
    id: "finance",
    title: "Finance",
    desc: "Detect risks, prevent fraud and accelerate decision making with trusted, real time data.",
    imageSrc: "/images/finance.jpg",
    details: [
      "Sub millisecond fraud anomaly detection engines",
      "Algorithmic trading & market stream processing",
      "Regulatory compliance & automated audit trails",
      "Credit risk modeling & customer lifetime prediction",
    ],
  },
  {
    id: "autonomous",
    title: "Autonomous Vehicles",
    desc: "Process sensor and telemetry data to power safer, smarter and connected mobility.",
    imageSrc: "/images/autonomous.jpg",
    details: [
      "High throughput LiDAR & 3D point cloud labeling",
      "Multi camera video segmentation & obstacle tracking",
      "Fleet telemetry streaming & edge ingestion",
      "Edge case discovery & synthetic scenario generation",
    ],
  },
  {
    id: "retail",
    title: "E-Commerce & Retail",
    desc: "Understand customers, optimize inventory and personalize experiences with data driven insights.",
    imageSrc: "/images/retail.jpg",
    details: [
      "Personalized recommendation & ranking engines",
      "Dynamic pricing & demand forecasting pipelines",
      "Omnichannel customer 360 data unification",
      "Real time inventory supply chain telemetry",
    ],
  },
];

export default function IndustriesWeServe() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndustry) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeIndustry]);

  const modalNode = activeIndustry && mounted ? (
    <div
      className="fixed inset-0 z-[9999] bg-[#0b2545]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={() => setActiveIndustry(null)}
    >
      <div
        className="bg-white rounded-[2rem] max-w-lg w-full p-8 md:p-10 shadow-2xl relative my-auto border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setActiveIndustry(null)}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
          Industry Solution
        </span>

        <h3 className="text-2xl font-bold text-[#123c64] tracking-tight mb-3">
          {activeIndustry.title}
        </h3>

        <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
          {activeIndustry.desc}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#123c64] uppercase tracking-wider mb-3">
            Key Solutions & Capabilities
          </h4>
          <ul className="space-y-2.5">
            {activeIndustry.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#contact"
          onClick={() => setActiveIndustry(null)}
          className="w-full py-3.5 rounded-full text-sm font-bold text-white btn-gradient flex items-center justify-center gap-2 cursor-pointer shadow-md"
        >
          <span>Explore {activeIndustry.title} Solutions</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  ) : null;

  return (
    <section id="industries" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#123c64] tracking-tight mb-4 reveal-heading">
            Industries <span className="gradient-text">We Serve</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed reveal-on-scroll delay-100">
            Tailored data engineering solutions for domain-specific enterprise challenges.
          </p>
        </div>

        {/* 4 Industries Cards Grid (Exact Reference Match) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesList.map((item, idx) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            const delayClass = delays[idx] || "delay-100";
            return (
              <div
                key={item.id}
                className={`reveal-card ${delayClass} bg-white border border-slate-200/90 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 shadow-2xs group`}
              >
                {/* Card Thumbnail Image */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#123c64] mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  {/* Learn More Link */}
                  <button
                    onClick={() => setActiveIndustry(item)}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Portal Mounted Modal */}
      {mounted && typeof document !== "undefined" && modalNode && createPortal(modalNode, document.body)}
    </section>
  );
}
