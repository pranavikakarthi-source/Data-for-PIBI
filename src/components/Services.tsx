"use client";

import React from "react";
import { Database, Brain, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  iconBg: "light" | "solid";
  iconType: "database" | "brain" | "chart";
  featured?: boolean;
  features: string[];
}

export const servicesList: ServiceData[] = [
  {
    id: "engineering",
    title: "Data Engineering",
    subtitle: "Scalable Infrastructure & Ingestion Pipelines",
    desc: "Scalable pipelines, warehouses and data services that form the foundation for AI and analytics.",
    iconBg: "light",
    iconType: "database",
    features: [
      "Automated ETL & ELT Batch & Stream Pipelines",
      "Modern Lakehouse & Distributed Warehouses",
      "Real-time Event Processing with 99.9% Uptime SLA",
    ],
  },
  {
    id: "ai",
    title: "Data for AI",
    subtitle: "Domain Annotation & Fine-Tuning Curation",
    desc: "High-quality, domain-specific data to build, train and evaluate accurate AI models.",
    iconBg: "solid",
    iconType: "brain",
    featured: true,
    features: [
      "Domain-expert Data Labeling & Multimodal Annotation",
      "RLHF & LLM Fine-Tuning Datasets",
      "Synthetic Data Generation & Rigorous QA Validation",
    ],
  },
  {
    id: "analytics",
    title: "Data Science & Analytics",
    subtitle: "Predictive ML & Decision Intelligence",
    desc: "Analytics, machine learning and BI that turn complex data into confident decisions.",
    iconBg: "light",
    iconType: "chart",
    features: [
      "Predictive Machine Learning & Decision Intelligence",
      "Executive BI Dashboards & Live KPI Tracking",
      "Statistical Modeling & A/B Testing Frameworks",
    ],
  },
];

interface ServicesProps {
  onSelectService: (service: ServiceData) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 pulse-blue" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              End-to-End Offerings
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b2545] tracking-tight mb-5">
            Our Core <span className="gradient-text">Data Services</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            We provide end-to-end data services that help businesses collect, prepare, manage, analyze and transform data into reliable AI-ready intelligence.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 relative border ${
                service.featured
                  ? "bg-gradient-to-b from-white via-blue-50/40 to-white border-blue-200 shadow-xl shadow-blue-500/5 hover:border-blue-300 hover:shadow-2xl"
                  : "bg-white border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${
                  service.iconBg === "solid"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-blue-50 border border-blue-100 text-blue-600"
                }`}
              >
                {service.iconType === "database" && <Database className="w-7 h-7" />}
                {service.iconType === "brain" && <Brain className="w-7 h-7" />}
                {service.iconType === "chart" && <BarChart3 className="w-7 h-7" />}
              </div>

              {/* Title & Desc */}
              <h3 className="text-2xl font-bold text-[#0b2545] mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 pt-6 border-t border-slate-100 mb-8 mt-auto">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Explore Button */}
              <button
                onClick={() => onSelectService(service)}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-all cursor-pointer group mt-auto"
              >
                <span>Explore {service.title}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
