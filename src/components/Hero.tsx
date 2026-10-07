"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      <div className="max-w-[960px] mx-auto px-6 text-center flex flex-col items-center">

        {/* Main Full-Width Double Shade Heading */}
        <h1 className="hero-title-exact mb-6 reveal-heading">
          Data <span className="gradient-text">services</span> for the AI models you are building
        </h1>

        {/* Subtitle Description */}
        <div className="max-w-[680px] mb-8 reveal-on-scroll delay-150">
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
            PiBi Tech prepares, labels, and validates the data behind AI.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#123c64] mt-1">
            Choose a solution to see what we cover.
          </p>
        </div>

        {/* Action Buttons Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 reveal-on-scroll delay-300">
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-bold text-white btn-gradient cursor-pointer"
          >
            <span>View solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:contact@pibi.tech"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-[#123c64] btn-secondary cursor-pointer"
          >
            Contact our team
          </Link>
        </div>

      </div>
    </section>
  );
}
