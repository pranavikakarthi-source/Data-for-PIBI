"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f8fafc]/85 backdrop-blur-md border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-2.5 group z-10">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/images/pibi-icon.png"
              alt="PiBi Logo Icon"
              width={36}
              height={36}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#169b97]">
            Pibi Tech
          </span>
        </Link>

        {/* Centered Nav Links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="#services" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="#approach" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Our Approach
          </Link>
          <Link href="#industries" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Industries
          </Link>
          <Link href="#capabilities" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Capabilities
          </Link>
          <Link href="mailto:contact@pibi.tech" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right side placeholder to keep balance */}
        <div className="hidden md:block w-28" />
      </div>
    </header>
  );
}
