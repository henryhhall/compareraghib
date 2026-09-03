"use client";

import React, { useState } from "react";
import { DISTRICT_PROJECTS, ProjectItem } from "@/data/accomplishments";
import { Building, Trees, GraduationCap, ShieldAlert, Sparkles, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";

export default function DistrictImpactScorecard() {
  const [activeTab, setActiveTab] = useState<"All" | "Bethel" | "Danbury" | "Statewide">("All");

  const filteredProjects = activeTab === "All"
    ? DISTRICT_PROJECTS
    : DISTRICT_PROJECTS.filter((p) => p.town === activeTab || p.town === "District-Wide");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Parks & Recreation":
        return <Trees className="w-5 h-5 text-emerald-600" />;
      case "Economic Development":
        return <Building className="w-5 h-5 text-blue-600" />;
      case "Education":
        return <GraduationCap className="w-5 h-5 text-purple-600" />;
      case "Public Safety":
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="district-impact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <MapPin className="w-3.5 h-3.5" /> State Capital Funding
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            State Capital Grants & Infrastructure in District 2
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A summary of state capital bonding and STEAP grants directed to Bethel and Danbury projects during Raghib Allie-Brennan's terms in office.
          </p>
        </div>

        {/* Town Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {(["All", "Bethel", "Danbury", "Statewide"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab === "All" ? "All Deliveries" : tab === "Statewide" ? "Statewide Impact" : `${tab} Specific`}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-extrabold bg-blue-100 text-blue-800">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" /> {project.town}
                  </span>
                  {project.fundingAmount && (
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {project.fundingAmount}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-200 shrink-0">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {project.category} • {project.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 bg-blue-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <div className="flex items-start gap-2 text-xs font-semibold text-blue-900">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-blue-950">Local Impact:</strong> {project.impactHighlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Legislative Seniority
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Legislative Leadership & District Funding Allocation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As <strong>Chief Majority Whip</strong> and an executive member of the <strong>Moderate Democratic Caucus</strong>, Raghib Allie-Brennan participates in House leadership meetings, committee scheduling, and State Bond Commission discussions. Debbie Rizzo has not previously served in legislative office and would enter the minority party without committee rank, which affects a representative's ability to direct state capital bonding and municipal grants.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-5 border border-white/10 text-center">
              <div className="text-4xl font-black text-white mb-1">$5,000,000+</div>
              <div className="text-xs text-blue-200 font-medium uppercase tracking-wider mb-3">
                Direct District 2 Bonding Secured
              </div>
              <p className="text-xs text-slate-300 italic">
                "Raghib works with officials across both parties, including town selectmen and mayors, to deliver capital projects for Bethel and Danbury."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
