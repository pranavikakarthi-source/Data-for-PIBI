"use client";

import React, { useState } from "react";
import { Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "data-for-ai",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-slate-200/90 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div className="reveal-left delay-100">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123c64] tracking-tight mb-4 leading-[1.14] reveal-heading">
              Ready to elevate your <span className="gradient-text">AI Data Foundation?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-7 font-normal reveal-on-scroll delay-150">
              Speak with our data architects to design custom pipelines, annotation workflows, or end to end data science solutions for your enterprise.
            </p>

            <div className="space-y-3.5 reveal-on-scroll delay-200">
              <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#123c64]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+1 (800) 555-PiBi / +91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#123c64]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contact@pibi.tech</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="reveal-right delay-200 bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 md:p-7 shadow-xs">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-[#092c57] mb-1.5">Request Received!</h3>
                <p className="text-xs text-slate-600 max-w-xs mx-auto mb-5">
                  Thank you! Our data solution architects will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-blue-600 bg-white border border-slate-200 hover:border-slate-300"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-[#092c57] uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#092c57] uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#092c57] uppercase tracking-wider mb-1.5">
                    Primary Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  >
                    <option value="data-engineering">Data Engineering Pipelines</option>
                    <option value="data-for-ai">Data for AI & Annotation</option>
                    <option value="data-science">Data Science & Analytics</option>
                    <option value="all-solutions">Full End-to-End Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#092c57] uppercase tracking-wider mb-1.5">
                    Project Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your dataset or AI model requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold text-white btn-gradient flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
