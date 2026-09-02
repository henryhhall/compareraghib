"use client";

import React from "react";
import { CANDIDATES } from "@/data/candidates";
import { CheckCircle2, Award, Zap, ShieldCheck, FileText, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export default function HeroSection() {
  const raghib = CANDIDATES.raghib;
  const rizzo = CANDIDATES.rizzo;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5" /> 2026 Connecticut General Assembly Election
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-700/60 text-slate-300 border border-slate-600">
            Bethel & Danbury • District 2
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Proven Results vs. Campaign Rhetoric: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Who Truly Delivers for District 2?
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Bethel and Danbury face critical choices on electric utility bills, school funding, property taxes, and local infrastructure. Here is an honest, data-backed comparison of 4-term Democratic incumbent <strong className="text-white">Representative Raghib Allie-Brennan</strong> and Republican challenger <strong className="text-white">Debbie Rizzo</strong>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:-translate-y-0.5"
            >
              Explore Issue-by-Issue Matrix
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#district-impact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-600 transition-all"
            >
              See Raghib’s $5M+ Bethel & Danbury Wins
            </a>
          </div>
        </div>

        {/* Head-to-Head Candidate Cards */}
        <div id="candidates" className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Raghib Allie-Brennan */}
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-850/90 border-2 border-blue-500/60 shadow-2xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow-md flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Proven Incumbent Record
            </div>

            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center font-black text-2xl sm:text-3xl text-white shadow-lg border border-blue-400/40">
                  RA
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/70 border border-blue-700/50 px-2.5 py-0.5 rounded-md">
                      Democrat • Incumbent
                    </span>
                    <span className="text-xs text-slate-400">4 Terms (8 Years)</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {raghib.name}
                  </h2>
                  <p className="text-sm text-blue-200 font-medium">
                    Chief Majority Whip & Moderate Caucus Leader
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Raised in Bethel, Raghib combines lifelong community roots with top-tier legislative influence in Hartford. As Chief Majority Whip, he co-authored the <em>Take Back Our Grid Act</em> to rein in Eversource, secured landmark middle-class tax cuts recognized by CBIA, and delivered millions directly to Bethel and Danbury schools, parks, and first responders.
              </p>

              {/* Key Proof Points */}
              <div className="space-y-3 mb-6 bg-slate-900/60 rounded-xl p-4 border border-slate-700/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" /> Key Proven Accomplishments
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Author of Public Act 20-5 (Take Back Our Grid):</strong> Enacted performance-based utility ratemaking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>CBIA 'Affordability Champion':</strong> Voted for historic middle-class income & pension tax cuts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>$5,000,000+ Secured for District 2:</strong> Clarke Business Park, Parloa Park, Danbury Career Academy & volunteer fire grants.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <span className="font-semibold text-blue-300">Hometown: Bethel, CT</span>
              <div className="flex gap-2">
                <a
                  href={raghib.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline inline-flex items-center gap-1"
                >
                  CT House Bio <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Debbie Rizzo */}
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-850/60 border border-slate-700 shadow-xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm opacity-95">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-800/80 text-red-200 border border-red-700/50">
              Challenger Platform
            </div>

            <div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-700 to-rose-900 flex items-center justify-center font-black text-2xl sm:text-3xl text-white shadow-lg border border-red-500/30">
                  DR
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-700/50 px-2.5 py-0.5 rounded-md">
                      Republican • Challenger
                    </span>
                    <span className="text-xs text-slate-400">0 Legislative Years</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {rizzo.name}
                  </h2>
                  <p className="text-sm text-slate-300 font-medium">
                    Community Resident & 2023 City Council Candidate
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                A 45-year resident of Danbury, Debbie Rizzo enters the race emphasizing conservative fiscal principles, voice against Eversource rate increases, and traditional law enforcement support. While expressing ratepayer frustration, her campaign has not outlined how state funding cuts would protect Bethel and Danbury schools or prevent municipal tax hikes.
              </p>

              {/* Key Platform Points */}
              <div className="space-y-3 mb-6 bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-slate-400" /> Stated Campaign Priorities
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Electric Rates:</strong> Criticizes Eversource charges & calls for pausing state renewable energy mandates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>State Budget:</strong> General pledge for Hartford spending cuts to relieve homeowner property taxes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Public Safety:</strong> 'Back the Blue' rhetoric and calls to revisit 2020 police accountability statutes.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span>Hometown: Danbury, CT</span>
              <span>Nominee: Bethel & Danbury RTC</span>
            </div>
          </div>
        </div>

        {/* Quick Comparison Highlights Metric Bar */}
        <div className="mt-12 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 max-w-5xl mx-auto shadow-lg">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            At A Glance: Legislative Effectiveness & District Clout
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-slate-700/80 last:border-none pr-4">
              <div className="text-3xl font-extrabold text-blue-400">4 Terms</div>
              <div className="text-xs text-slate-300 mt-1">Raghib’s Track Record (vs. 0 for Rizzo)</div>
            </div>
            <div className="border-r border-slate-700/80 last:border-none pr-4">
              <div className="text-3xl font-extrabold text-emerald-400">$5M+</div>
              <div className="text-xs text-slate-300 mt-1">Direct State Grants Won for Bethel/Danbury</div>
            </div>
            <div className="border-r border-slate-700/80 last:border-none pr-4">
              <div className="text-3xl font-extrabold text-sky-400">#3 Leader</div>
              <div className="text-xs text-slate-300 mt-1">Raghib’s Rank (Chief Majority Whip)</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-amber-400">CBIA Award</div>
              <div className="text-xs text-slate-300 mt-1">Honored as 'Affordability Champion'</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
