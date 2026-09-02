"use client";

import React, { useState } from "react";
import { ISSUES_DATA, IssueComparison } from "@/data/issues";
import { CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Scale, Zap, Shield, BookOpen, Building2, HeartHandshake, Trees, Coins, ArrowRight, Home } from "lucide-react";

export default function ComparisonMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedIssue, setExpandedIssue] = useState<string | null>("housing-affordability-zoning");

  const categories = ["All", "Housing & Zoning", "Energy & Utilities", "Taxes & Economy", "District Investments", "Public Safety", "Education", "Small Business", "Healthcare & Rights", "Environment"];

  const filteredIssues = selectedCategory === "All"
    ? ISSUES_DATA
    : ISSUES_DATA.filter((i) => i.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Housing & Zoning":
        return <Home className="w-4 h-4 text-orange-500" />;
      case "Energy & Utilities":
        return <Zap className="w-4 h-4 text-amber-500" />;
      case "Taxes & Economy":
        return <Coins className="w-4 h-4 text-emerald-500" />;
      case "District Investments":
        return <Building2 className="w-4 h-4 text-blue-500" />;
      case "Public Safety":
        return <Shield className="w-4 h-4 text-indigo-500" />;
      case "Education":
        return <BookOpen className="w-4 h-4 text-purple-500" />;
      case "Small Business":
        return <Building2 className="w-4 h-4 text-cyan-500" />;
      case "Healthcare & Rights":
        return <HeartHandshake className="w-4 h-4 text-rose-500" />;
      case "Environment":
        return <Trees className="w-4 h-4 text-green-600" />;
      default:
        return <Scale className="w-4 h-4 text-blue-500" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedIssue(expandedIssue === id ? null : id);
  };

  return (
    <section id="comparison" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200 mb-3">
            <Scale className="w-3.5 h-3.5" /> Side-by-Side Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Honest Issue Comparison: Record vs. Rhetoric
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Compare Debbie Rizzo’s stated campaign platform with Raghib Allie-Brennan’s actual legislative votes, enacted laws, and district results.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Issues List / Accordion */}
        <div className="space-y-6">
          {filteredIssues.map((issue) => {
            const isExpanded = expandedIssue === issue.id;

            return (
              <div
                key={issue.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Issue Header Bar */}
                <div
                  onClick={() => toggleExpand(issue.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
                      {getCategoryIcon(issue.category)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {issue.category}
                        </span>
                        <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Raghib Advantage
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                        {issue.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <div className="text-right hidden sm:block">
                      <div className="text-xs text-slate-500 font-medium">Effectiveness Score</div>
                      <div className="text-sm font-black text-slate-800">
                        <span className="text-blue-600">{issue.verdict.impactScore.raghibScore}</span> vs{" "}
                        <span className="text-slate-400">{issue.verdict.impactScore.rizzoScore}</span>
                      </div>
                    </div>
                    <button
                      className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Comparison Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-600 italic mb-6">
                      Context: {issue.importanceDescription}
                    </p>

                    {/* Side-by-Side Comparison Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Left: Raghib Allie-Brennan (Incumbent Record) */}
                      <div className="rounded-xl bg-blue-50/70 border-2 border-blue-400/80 p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-800 bg-blue-200/80 px-2.5 py-1 rounded-md">
                              Raghib Allie-Brennan (Democrat)
                            </span>
                            <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4 text-blue-600" /> Proven Enacted Record
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-slate-900 mb-2">
                            {issue.raghibStance.summary}
                          </h4>

                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-4">
                            {issue.raghibStance.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          {issue.raghibStance.enactedLegislation.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-blue-200/60">
                              <span className="text-xs font-bold text-blue-900 block mb-1">
                                Key Enacted Legislation / Bonding:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {issue.raghibStance.enactedLegislation.map((bill, bIdx) => (
                                  <span
                                    key={bIdx}
                                    className="px-2 py-0.5 bg-white text-blue-800 rounded text-xs font-medium border border-blue-200"
                                  >
                                    {bill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t border-blue-200/60 text-xs text-blue-900 font-medium">
                          <strong>Bipartisan Credibility:</strong> {issue.raghibStance.bipartisanCred}
                        </div>
                      </div>

                      {/* Right: Debbie Rizzo (Challenger Platform) */}
                      <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-red-800 bg-red-100 px-2.5 py-1 rounded-md">
                              Debbie Rizzo (Republican)
                            </span>
                            <span className="text-xs font-medium text-slate-500">
                              Campaign Platform
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-slate-800 mb-2">
                            {issue.rizzoStance.summary}
                          </h4>

                          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 mb-4">
                            {issue.rizzoStance.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-slate-400 font-bold shrink-0">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-3 pt-3 border-t border-slate-200">
                            <span className="text-xs font-bold text-slate-700 block mb-1">
                              Stated Platform Quote:
                            </span>
                            <p className="text-xs text-slate-600 italic bg-white p-2.5 rounded border border-slate-200">
                              "{issue.rizzoStance.quotesOrPlatform}"
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-amber-800 bg-amber-50 p-2.5 rounded border border-amber-200 flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>Platform Limitation:</strong> {issue.rizzoStance.limitations}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Line Verdict Card */}
                    <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-xl p-5 border border-blue-900 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Scale className="w-4 h-4 text-blue-400" />
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-300">
                          The Bottom Line for Bethel & Danbury Voters
                        </h4>
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed font-medium mb-3">
                        {issue.verdict.summary}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/10">
                        {issue.verdict.whyRaghibWins}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
