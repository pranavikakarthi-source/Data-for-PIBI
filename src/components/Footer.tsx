import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-100">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <Image
                  src="/images/logo-icon.png"
                  alt="pibi Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold text-[#0b2545] tracking-tight">
                pibi tech
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              pibi tech prepares, labels, and validates the data behind AI. Enterprise data engineering, training dataset curation, and predictive analytics.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Data Engineering</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Data for AI</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Data Science & BI</Link></li>
              <li><Link href="#industries" className="hover:text-blue-600 transition-colors">Industries We Serve</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#0b2545] uppercase tracking-wider mb-4">
              Platform & Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Data Services</Link></li>
              <li><Link href="#approach" className="hover:text-blue-600 transition-colors">Our Approach</Link></li>
              <li><Link href="#industries" className="hover:text-blue-600 transition-colors">Industries</Link></li>
              <li><Link href="#capabilities" className="hover:text-blue-600 transition-colors">Capabilities</Link></li>
              <li><Link href="mailto:contact@pibi.tech" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} pibi tech. All rights reserved.</p>
          <p>Engineered for Enterprise Data & AI Acceleration.</p>
        </div>
      </div>
    </footer>
  );
}
