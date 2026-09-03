"use client";

import React from "react";
import { Vote, Shield, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About Project */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Vote className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">
                CT District 2 Candidate Comparison Project
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              This voter education platform reviews the 2026 election for Connecticut's 2nd House District, representing Bethel and Danbury. It compiles public records, legislative roll-call votes, committee actions, and published campaign platforms to assist voters in evaluating candidate records and proposals.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-900 p-3 rounded-lg border border-slate-800">
              <strong>Methodology:</strong> Statements by Debbie Rizzo are sourced from her 2026 campaign releases, municipal forum remarks, and public campaign positions. Legislative actions of Rep. Raghib Allie-Brennan are verified through official Connecticut General Assembly records (cga.ct.gov), public acts, and State Bond Commission minutes.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Website Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#candidates" className="hover:text-white transition-colors">
                  Candidate Profiles
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Side-by-Side Issue Matrix
                </a>
              </li>
              <li>
                <a href="#housing-affordability" className="hover:text-white transition-colors">
                  Housing Affordability & 8-30g
                </a>
              </li>
              <li>
                <a href="#hb-8002" className="hover:text-white transition-colors">
                  HB 8002 Special Session Vote
                </a>
              </li>
              <li>
                <a href="#deep-dive" className="hover:text-white transition-colors">
                  Policy Analysis
                </a>
              </li>
              <li>
                <a href="#district-impact" className="hover:text-white transition-colors">
                  Bethel & Danbury Funding
                </a>
              </li>
              <li>
                <a href="#voter-guide" className="hover:text-white transition-colors">
                  Polling Locations & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Civic Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official CT Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://cga.ct.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  CT General Assembly <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://portal.ct.gov/sots"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  CT Secretary of the State <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.bethel-ct.gov/departments/registrars-of-voters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Bethel Registrars of Voters <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.danbury-ct.gov/departments/registrar-of-voters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Danbury Registrar of Voters <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cbia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  CBIA Affordability Scorecard <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-850 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div>
            © 2026 CT District 2 Voter Guide & Candidate Comparison. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
          >
            <ArrowUp className="w-4 h-4" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
