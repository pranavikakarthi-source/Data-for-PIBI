"use client";

import React, { useState } from "react";
import {
  Database,
  Code2,
  Brain,
  BarChart3,
  CheckCircle2,
  Layers,
  Sparkles,
  Workflow,
  Cpu,
  Server,
  Activity,
  Zap,
  Boxes,
  Compass,
} from "lucide-react";

export interface SubService {
  name: string;
  desc?: string;
}

export interface BranchData {
  id: string;
  title: string;
  countLabel: string;
  tagline: string;
  iconType: "code" | "brain" | "chart" | "usecases";
  colorClass: string;
  badgeBg: string;
  services: string[];
  useCases?: string[];
}

export const dataEngineeringBranches: BranchData[] = [
  {
    id: "app-dev",
    title: "Application Development",
    countLabel: "5 services within Data Engineering",
    tagline: "High-performance transactional layers, APIs & event streams powering modern software.",
    iconType: "code",
    colorClass: "from-blue-600 to-cyan-500",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    services: [
      "Databases & Data Models",
      "APIs & Data Services",
      "Event Streaming",
      "Application Logs & Telemetry",
      "Performance & Scalability",
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    countLabel: "6 services within Data Engineering",
    tagline: "End-to-end dataset prep, feature stores, and automated training & deployment pipelines.",
    iconType: "brain",
    colorClass: "from-indigo-600 to-blue-500",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    services: [
      "Data Collection",
      "Data Cleaning",
      "Feature Engineering",
      "Training Datasets & Versioning",
      "Model Deployment Pipelines",
      "Data Quality",
    ],
  },
  {
    id: "bi",
    title: "Business Intelligence",
    countLabel: "6 services within Data Engineering",
    tagline: "Unified lakehouses, semantic layers, and real-time marts for executive decisions.",
    iconType: "chart",
    colorClass: "from-cyan-600 to-emerald-500",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    services: [
      "ELT / ETL",
      "Data Warehouse & Data Lake",
      "Data Modeling",
      "Data Quality",
      "Data Freshness & Streaming",
      "Semantic Layer & Data Marts",
    ],
  },
];

export default function DataEngineeringMindmap() {
  const [activeTab, setActiveTab] = useState<string>("app-dev");
  const [viewMode, setViewMode] = useState<"mindmap" | "interactive-tabs">("mindmap");

  const activeBranch = dataEngineeringBranches.find((b) => b.id === activeTab) || dataEngineeringBranches[0];

  return (
    <section id="mindmap" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 pulse-blue" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Interactive Ecosystem Architecture
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b2545] tracking-tight mb-5">
            The Complete <span className="gradient-text">Data Engineering</span> Mindmap
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Build scalable data foundations, pipelines and services that support AI applications, analytics and business intelligence — all visualized in a unified single-page architecture.
          </p>

          {/* View Mode Toggle */}
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full mt-8 border border-slate-200 shadow-inner">
            <button
              onClick={() => setViewMode("mindmap")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                viewMode === "mindmap"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>Mindmap Tree View</span>
            </button>
            <button
              onClick={() => setViewMode("interactive-tabs")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                viewMode === "interactive-tabs"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Interactive Deep-Dive</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            VIEW 1: MINDMAP TREE VISUALIZER (Visual Mindmap matching user request)
           ========================================================================= */}
        {viewMode === "mindmap" && (
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            
            {/* Ambient subtle decorative grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            {/* Central Hub */}
            <div className="flex flex-col items-center justify-center text-center relative z-10 mb-14">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-white border-2 border-blue-200 rounded-2xl p-6 md:px-10 shadow-lg flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                    <Database className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">Central Core</span>
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 pulse-green" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0b2545] tracking-tight">
                      Data Engineering
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium max-w-xl mt-4">
                Build scalable data foundations, pipelines and services that support AI applications, analytics and business intelligence.
              </p>
            </div>

            {/* 3 Radiating Mindmap Branches */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {dataEngineeringBranches.map((branch) => {
                const isSelected = activeTab === branch.id;
                return (
                  <div
                    key={branch.id}
                    onClick={() => setActiveTab(branch.id)}
                    className={`rounded-3xl p-7 flex flex-col border transition-all duration-300 cursor-pointer relative group ${
                      isSelected
                        ? "bg-gradient-to-b from-white via-blue-50/50 to-white border-blue-300 shadow-xl shadow-blue-500/10 scale-[1.02]"
                        : "bg-white/90 border-slate-200 hover:border-blue-200 hover:shadow-lg shadow-sm"
                    }`}
                  >
                    {/* Top Branch Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                              : "bg-blue-50 text-blue-600 border border-blue-100"
                          }`}
                        >
                          {branch.iconType === "code" && <Code2 className="w-6 h-6" />}
                          {branch.iconType === "brain" && <Brain className="w-6 h-6" />}
                          {branch.iconType === "chart" && <BarChart3 className="w-6 h-6" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[#0b2545] tracking-tight">
                            {branch.title}
                          </h4>
                          <span className="text-xs text-slate-500 font-medium">
                            {branch.countLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                      {branch.tagline}
                    </p>

                    {/* Branch Services Pills / Sub-nodes */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Sub-Services & Capabilities
                      </span>
                      {branch.services.map((srv, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-blue-50/60 hover:border-blue-100 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-xs md:text-sm font-semibold text-slate-700">
                            {srv}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Status Tag */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-blue-600 group-hover:underline">
                        Click to Focus
                      </span>
                      <span className="text-slate-400 font-medium">
                        {branch.services.length} Capabilities
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* =========================================================================
            VIEW 2: INTERACTIVE DEEP-DIVE (Exact replication of reference images layout)
           ========================================================================= */}
        {viewMode === "interactive-tabs" && (
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50">
            
            {/* Top Main Banner */}
            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Database className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#0b2545] tracking-tight">
                  Data Engineering
                </h3>
                <p className="text-sm md:text-base text-slate-600 mt-1">
                  Build scalable data foundations, pipelines and services that support AI applications, analytics and business intelligence.
                </p>
              </div>
            </div>

            {/* Sidebar & Content Split (Matches Reference Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Sidebar Navigation */}
              <div className="md:col-span-4 bg-slate-50/80 border border-slate-200 rounded-3xl p-4 flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-4 py-2">
                  Navigation
                </span>

                {dataEngineeringBranches.map((branch) => {
                  const isCur = activeTab === branch.id;
                  return (
                    <button
                      key={branch.id}
                      onClick={() => setActiveTab(branch.id)}
                      className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                        isCur
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                      }`}
                    >
                      <span>{branch.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${isCur ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"}`}>
                        {branch.services.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Content Display Box (Matching Reference Cards) */}
              <div className="md:col-span-8 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div className="mb-6">
                  <h4 className="text-2xl font-extrabold text-[#0b2545] tracking-tight mb-1">
                    {activeBranch.title}
                  </h4>
                  <p className="text-sm font-semibold text-blue-600">
                    {activeBranch.countLabel}
                  </p>
                </div>

                <div className="bg-slate-50/60 border border-slate-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      {activeBranch.iconType === "code" && <Code2 className="w-5 h-5" />}
                      {activeBranch.iconType === "brain" && <Brain className="w-5 h-5" />}
                      {activeBranch.iconType === "chart" && <BarChart3 className="w-5 h-5" />}
                    </div>
                    <span className="text-lg font-bold text-[#0b2545]">
                      {activeBranch.title}
                    </span>
                  </div>

                  {/* 2-Column Subservices Checklist (Exact Reference match) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeBranch.services.map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Every capability within <strong className="text-slate-700">{activeBranch.title}</strong> is deployed with high-availability clustering, automated CI/CD validation, and enterprise SLA monitoring.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
