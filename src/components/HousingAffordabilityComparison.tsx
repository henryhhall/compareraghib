"use client";

import React, { useState } from "react";
import {
  Home,
  ShieldAlert,
  Flame,
  FileCode,
  Building,
  CheckCircle2,
  XCircle,
  Scale,
  Award,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function HousingAffordabilityComparison() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "8-30g-defense",
      icon: <ShieldAlert className="w-5 h-5 text-amber-600" />,
      title: "CT 8-30g & Local Zoning Protection",
      shortLabel: "8-30g & Bethel Defense",
      headline: "Standing Up to Predatory Developers & Preserving Town Control",
      summary:
        "Connecticut General Statutes Sec. 8-30g allows developers to override local town zoning if fewer than 10% of homes meet state deed-restricted guidelines, putting pressure on Bethel and Danbury neighborhoods.",
      localBattle:
        "In Bethel, developer Vessel Technologies proposed a 75-unit, five-story apartment building on a transition parcel, attempting to use 8-30g to bypass local Planning & Zoning standards, fire department clearances, and parking ratios.",
      raghibAction: {
        tagline: "Voted Against Top-Down Mandates & Sponsored Local Planning Amendments",
        bullets: [
          "Supported Bethel residents and local P&Z Commissioners in contested 8-30g developer appeals.",
          "Authored amendments to Section 8-30g granting municipal 'housing unit-equivalent points' to towns that proactively craft their own Affordable Housing Plans.",
          "Used his role as Chief Majority Whip and Moderate Democratic Caucus leader to block omnibus developer-backed zoning preemption.",
        ],
        badge: "Chief Majority Whip Action",
      },
      rizzoStance: {
        tagline: "Campaign Calls to 'Roll Back' 8-30g Without Legislative Pathway",
        bullets: [
          "Opposes 8-30g overreach and criticizes state mandates overriding local zoning commissions.",
          "Demands broad rollbacks to protect suburban neighborhoods from high-density projects.",
          "Limitation: As a freshman in a legislative minority, Rizzo would face substantial hurdles to repeal 8-30g without bipartisan support.",
        ],
        badge: "Campaign Platform Position",
      },
      verdict:
        "Both candidates oppose state preemption of local zoning. Raghib voted against HB 5002 and advanced amendments granting municipal housing points for local housing plans, while Rizzo advocates statutory repeal.",
    },
    {
      id: "fire-safety-modular",
      icon: <Flame className="w-5 h-5 text-rose-600" />,
      title: "Modular Construction & First Responder Safety",
      shortLabel: "Fire Safety & Modular Tech",
      headline: "Mandating Upfront Life Safety Reports for Novel Construction",
      summary:
        "Developers have increasingly utilized 8-30g with prefabricated and modular building materials that present operational and structural considerations for local volunteer departments.",
      localBattle:
        "Bethel Volunteer Fire Dept and Stony Hill Fire Dept raised operational concerns regarding emergency access, ladder reach, and specialized ventilation in rapid-assembly developments.",
      raghibAction: {
        tagline: "Enacted Statutory Standards to Protect Firefighters and Tenants",
        bullets: [
          "Co-sponsored legislative requirements authorizing towns to demand upfront 'Life Safety Reports' from licensed fire engineers on prefabricated modular developments.",
          "Insisted that no developer can claim 8-30g immunity if local volunteer fire marshals determine life safety or emergency vehicle egress is compromised.",
          "Delivered direct funding and equipment grants for Bethel and Stony Hill volunteer fire houses.",
        ],
        badge: "Firefighter Safety Legislation",
      },
      rizzoStance: {
        tagline: "Platform Support for First Responders",
        bullets: [
          "Regularly emphasizes support for police and first responders in campaign speeches.",
          "Critiques 2020 police accountability statutes and supports volunteer firefighter benefits.",
          "Limitation: Has not proposed specific regulatory frameworks or building code statutes regarding modular construction.",
        ],
        badge: "Campaign Platform",
      },
      verdict:
        "Raghib brought the recommendations of local volunteer fire chiefs to the General Assembly, enacting statutory life-safety reporting standards and securing equipment funding for Bethel fire houses.",
    },
    {
      id: "state-mandates-hb5002",
      icon: <FileCode className="w-5 h-5 text-blue-600" />,
      title: "Omnibus Zoning Mandates (HB 5002 & 'Fair Share')",
      shortLabel: "HB 5002 & Top-Down Bills",
      headline: "Voting NO on Party-Line Mandates That Ignore School Capacity",
      summary:
        "Statewide housing coalitions introduced omnibus zoning bills (including HB 5002 and 'Fair Share' formulas) to assign unit quotas regardless of municipal sewer or school capacity.",
      localBattle:
        "Danbury schools face enrollment growth, and Bethel's municipal sewer treatment plant operates within strict environmental permits. Top-down quotas would impact municipal operating budgets.",
      raghibAction: {
        tagline: "Voted NO on Mandatory State Density Quotas",
        bullets: [
          "Cast a vote against HB 5002 and related mandatory density preemption measures that stripped town zoning oversight.",
          "Stated that statewide formulas fail to account for Bethel and Danbury's unique municipal bonding limits, classroom sizes, and traffic arteries.",
          "Received CBIA 'Affordability Champion' status for supporting spending limits and regulatory balance.",
        ],
        badge: "Bipartisan Independent Vote",
      },
      rizzoStance: {
        tagline: "Opposes 'Fair Share' & As-of-Right Commercial Conversions (HB 5396)",
        bullets: [
          "Opponent of 'Fair Share' regional quotas that affect towns lacking large-scale municipal infrastructure.",
          "Criticizes HB 5396, which would allow commercial-to-residential conversions without public hearings.",
          "Limitation: Offers no alternative policy to assist local workers who cannot afford regional market rents.",
        ],
        badge: "Opposition Platform",
      },
      verdict:
        "On the House floor, Raghib voted NO on HB 5002, opposing top-down density quotas that bypassed town infrastructure reviews.",
    },
    {
      id: "workforce-growth",
      icon: <Building className="w-5 h-5 text-emerald-600" />,
      title: "Workforce Housing & Transit-Oriented Downtowns",
      shortLabel: "Transit & Downtown Growth",
      headline: "Incentive-Based Growth Around Bethel Train Station & Danbury Center",
      summary:
        "Workforce housing initiatives focus on starter housing for teachers, healthcare workers, and municipal employees, planned with local community input.",
      localBattle:
        "Bethel's downtown rail district and Danbury's Main Street corridor show that walk-to-train, mixed-use housing supports small businesses.",
      raghibAction: {
        tagline: "Secured $5M+ in State Bonding for Infrastructure to Enable Downtown Growth",
        bullets: [
          "Delivered $1.5M for Clarke Business Park expansion and $500K for Parloa Park to bolster local municipal infrastructure.",
          "Supports voluntary, incentive-driven transit-oriented development around the Bethel Danbury Branch rail line.",
          "Supports targeted municipal tax relief for senior homeowners to help longtime residents remain in the community.",
        ],
        badge: "Capital Investment Record",
      },
      rizzoStance: {
        tagline: "Market Deregulation Without Proactive Starter-Home Plan",
        bullets: [
          "Advocates for free-market solutions and reducing government regulatory oversight.",
          "Believes lowering state business taxes will organically spur housing development.",
          "Limitation: Market solutions alone have not produced starter-home price points in Fairfield County without municipal infrastructure assistance.",
        ],
        badge: "Market-Oriented Platform",
      },
      verdict:
        "Raghib voted against state preemption while securing capital infrastructure bonding for downtown transit corridors. Rizzo opposes density mandates and supports market deregulation.",
    },
  ];

  const current = pillars[activeTab];

  return (
    <section
      id="housing-affordability"
      className="py-20 bg-gradient-to-b from-slate-100 via-white to-slate-100 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge & Title */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-900 border border-orange-200 mb-3">
            <Home className="w-3.5 h-3.5 text-orange-600" />
            2026 District 2 Key Battleground
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Housing Affordability, CT 8-30g & Local Zoning
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            From predatory 8-30g developer lawsuits in Bethel to top-down zoning mandates in Hartford,
            housing is one of the most urgent issues for District 2. Compare how incumbent{" "}
            <strong className="text-slate-900">Representative Raghib Allie-Brennan</strong> and challenger{" "}
            <strong className="text-slate-900">Debbie Rizzo</strong> approach local control, firefighter safety, and affordable living.
          </p>
        </div>

        {/* Dimension Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {pillars.map((pillar, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`p-2 rounded-xl ${
                      isActive ? "bg-slate-800 text-white" : "bg-slate-100"
                    }`}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isActive ? "text-orange-400" : "text-slate-500"
                    }`}
                  >
                    Focus {idx + 1}
                  </span>
                </div>
                <div className="font-bold text-sm sm:text-base leading-tight">
                  {pillar.shortLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Dimension Detailed Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12">
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                  Issue Breakdown • {current.title}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {current.headline}
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700 text-xs font-semibold text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-orange-400" /> Bethel & Danbury District Impact
              </div>
            </div>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              {current.summary}
            </p>
            <div className="mt-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Local Ground Truth:</strong> {current.localBattle}
              </div>
            </div>
          </div>

          {/* Side-by-Side Candidate Columns */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Raghib Allie-Brennan Column */}
            <div className="rounded-2xl border-2 border-blue-500/50 bg-gradient-to-b from-blue-50/40 via-white to-white p-6 sm:p-7 relative shadow-md">
              <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-blue-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                    Democratic Incumbent
                  </span>
                  <h4 className="text-xl font-black text-slate-900 mt-1">
                    Rep. Raghib Allie-Brennan
                  </h4>
                  <p className="text-xs text-slate-500">Chief Majority Whip • Moderate Caucus</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full bg-blue-600 text-white shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {current.raghibAction.badge}
                </span>
              </div>

              <div className="text-sm font-bold text-slate-800 mb-3">
                "{current.raghibAction.tagline}"
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
                {current.raghibAction.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-xl bg-blue-100/60 border border-blue-200 text-xs text-blue-950 font-medium">
                <strong>Legislative Action:</strong> Raghib works within the Moderate Democratic Caucus to block omnibus zoning preemption and protect municipal autonomy.
              </div>
            </div>

            {/* Debbie Rizzo Column */}
            <div className="rounded-2xl border border-slate-300 bg-gradient-to-b from-slate-50 via-white to-white p-6 sm:p-7 relative shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded-full">
                    Republican Challenger
                  </span>
                  <h4 className="text-xl font-black text-slate-900 mt-1">
                    Debbie Rizzo
                  </h4>
                  <p className="text-xs text-slate-500">GOP Nominee • Danbury & Bethel</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full bg-slate-700 text-white shadow-sm">
                  {current.rizzoStance.badge}
                </span>
              </div>

              <div className="text-sm font-bold text-slate-800 mb-3">
                "{current.rizzoStance.tagline}"
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
                {current.rizzoStance.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      •
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                <strong>Structural Challenge:</strong> In a legislature controlled by substantial Democratic majorities, a freshman minority member lacks the committee votes to repeal 8-30g.
              </div>
            </div>
          </div>

          {/* Verdict Banner */}
          <div className="px-6 py-5 sm:px-10 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-orange-100 text-orange-700 shrink-0 mt-0.5">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-800">
                  District 2 Comparative Verdict
                </span>
                <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                  {current.verdict}
                </p>
              </div>
            </div>
            <a
              href="#comparison"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 shrink-0"
            >
              See full matrix score <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Deep Analysis: Rhetoric vs. Majority Power in Hartford */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <Award className="w-3.5 h-3.5" /> Legislative Reality Check
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Why Rhetoric Doesn't Repeal 8-30g: <br className="hidden sm:inline" />
                The Power of the Moderate Democratic Caucus
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Republican candidates across Fairfield County regularly promise to "repeal 8-30g."
                However, with Democrats holding a solid majority in both the House and Senate,
                a freshman Republican backbencher has exactly zero votes to bring an 8-30g repeal bill to the floor.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                The only effective defense for Bethel and Danbury is having a senior, respected leader inside
                the majority party. As <strong className="text-white">Chief Majority Whip</strong> and a co-founder
                of the <strong className="text-white">Moderate Democratic Caucus</strong>, Raghib Allie-Brennan
                wields the actual procedural votes needed to kill extreme top-down mandates before they pass,
                force fire safety concessions into law, and safeguard municipal funding for our schools and roads.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Raghib’s 3 Pillars on Housing
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </div>
                  <span><strong>Protect Town Rule:</strong> Reject top-down density quotas that overwhelm Bethel and Danbury infrastructure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </div>
                  <span><strong>First Responder Safety:</strong> Mandate upfront fire and building code clearances for modular builds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </div>
                  <span><strong>Organic Workforce Housing:</strong> Incentivize walk-to-rail revitalization near Bethel Train Station.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
