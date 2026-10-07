"use client";

import React from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { ServiceData } from "./Services";

interface ServiceModalProps {
  service: ServiceData | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0b2545]/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[2rem] max-w-xl w-full p-8 md:p-10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
          Enterprise Solution
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b2545] tracking-tight mb-2">
          {service.title}
        </h3>
        
        <p className="text-sm font-semibold text-blue-600 mb-4">
          {service.subtitle}
        </p>

        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
          {service.desc}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider mb-3">
            Key Capabilities & Deliverables
          </h4>
          <ul className="space-y-2.5">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full py-3.5 rounded-full text-sm font-bold text-white btn-gradient flex items-center justify-center gap-2"
          >
            <span>Get Started with {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
