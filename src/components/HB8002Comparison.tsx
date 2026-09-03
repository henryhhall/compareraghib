"use client";

import React, { useState } from "react";
import {
  FileText,
  CheckCircle2,
  XCircle,
  AlertOctagon,
  Scale,
  ShieldCheck,
  Building,
  Car,
  Coins,
  ArrowRight,
  Info,
  ExternalLink,
} from "lucide-react";

export default function HB8002Comparison() {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const provisions = [
    {
      id: "grant-penalties",
      icon: <Coins className="w-5 h-5 text-rose-600" />,
      title: "State Grant Withholding & Financial Coercion",
      billText: "Ties municipal eligibility for discretionary state infrastructure grants to compliance with state-approved housing growth frameworks.",
      districtImpact: "Threatened critical capital bonding for Bethel's roads, parks, and downtown streetscapes if town boards did not meet regional housing targets.",
      raghibAction: "Voted NO on the House floor. Strongly opposed withholding state taxpayer-funded grants from suburban towns that are acting responsibly within their municipal infrastructure limits.",
      rizzoStance: "Criticizes financial penalties as an unfair tactic to force municipal compliance, but offers no strategy to secure state bonding from the minority party.",
    },
    {
      id: "regional-cogs",
      icon: <Building className="w-5 h-5 text-indigo-600" />,
      title: "Regional COG Control vs. Local Town Boards",
      billText: "Requires municipalities to submit 5-year housing growth plans to regional Councils of Governments (COGs) and Hartford's Office of Policy and Management (OPM).",
      districtImpact: "Transfers long-term planning oversight away from Bethel and Danbury Planning & Zoning commissions to unelected regional bodies.",
      raghibAction: "Voted NO. Denounced the consolidation of planning authority in Hartford, declaring that local land use and infrastructure decisions belong to local residents.",
      rizzoStance: "Attacks the bill as a Hartford power grab that strips towns of autonomy and adds bureaucratic overhead to local government.",
    },
    {
      id: "parking-summary",
      icon: <Car className="w-5 h-5 text-amber-600" />,
      title: "Parking Caps & 'Summary Review' Bypassing Hearings",
      billText: "Restricts municipal authority to enforce off-street parking minimums and allows 'summary reviews' for commercial-to-residential conversions.",
      districtImpact: "Risks worsening parking shortages on historic Bethel streets and compromising emergency vehicle access for volunteer fire apparatus.",
      raghibAction: "Voted NO. Stood with Bethel fire marshals and zoning commissioners who warned that state parking caps ignore suburban road layouts.",
      rizzoStance: "Vocal opponent of curbing public hearings and eliminating town discretion over parking minimums for multi-family projects.",
    },
  ];

  return (
    <section
      id="hb-8002"
      className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-400/30 mb-3">
            <AlertOctagon className="w-3.5 h-3.5 text-red-400" /> Special Session Landmark Vote
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            House Bill 8002 (Public Act 25-1)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Passed during the contentious November 2025 Special Session, HB 8002 is Connecticut's
            most debated housing growth law. Here is the head-to-head comparison of where both candidates stand.
          </p>
        </div>

        {/* Head-to-Head Candidate Roll-Call Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Raghib Allie-Brennan Card */}
          <div className="rounded-3xl bg-slate-800/90 border-2 border-blue-500/80 p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between backdrop-blur-sm">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white shadow-md flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Official Legislative Roll Call
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                Democratic Incumbent
              </div>
              <h3 className="text-2xl font-black text-white">
                Rep. Raghib Allie-Brennan
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Chief Majority Whip • Moderate Democratic Caucus
              </p>

              {/* The Actual Vote Banner */}
              <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/40 mb-6 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-red-300 uppercase tracking-wider block">
                    House Floor Roll Call
                  </span>
                  <span className="text-2xl font-black text-white flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-400" /> VOTED NO
                  </span>
                </div>
                <div className="text-right text-xs text-slate-300">
                  <span className="font-semibold block text-white">Nov 2025 Special Session</span>
                  Broke with party leadership
                </div>
              </div>

              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Why Raghib Voted Against HB 8002:
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Defended Bethel Home Rule:</strong> Stated on the floor that transferring planning decisions to regional COGs and Hartford OPM silences local community voices.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Rejected Grant Withholding:</strong> Strongly opposed provisions that weaponize state infrastructure grants against towns that want to preserve neighborhood character.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>True Political Independence:</strong> Proved he will stand up to his own party's governor and leadership whenever a bill threatens Bethel and Danbury.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/60 text-xs text-blue-300 font-medium">
              <strong>Legislative Muscle:</strong> As Chief Majority Whip, Raghib has the internal coalition influence to negotiate rollbacks and amendments to PA 25-1 in the upcoming session.
            </div>
          </div>

          {/* Debbie Rizzo Card */}
          <div className="rounded-3xl bg-slate-800/60 border border-slate-700 p-6 sm:p-8 shadow-xl relative flex flex-col justify-between backdrop-blur-sm">
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-700 text-slate-200 border border-slate-600 shadow-md">
              Candidate Platform
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Republican Challenger
              </div>
              <h3 className="text-2xl font-black text-white">
                Debbie Rizzo
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                GOP Nominee • Danbury & Bethel
              </p>

              {/* The Campaign Stance Banner */}
              <div className="p-4 rounded-2xl bg-slate-750 border border-slate-700 mb-6 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Campaign Position
                  </span>
                  <span className="text-2xl font-black text-white flex items-center gap-2">
                    <AlertOctagon className="w-6 h-6 text-amber-400" /> Opposes Bill
                  </span>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <span className="font-semibold block text-slate-200">Campaign Rhetoric</span>
                  No legislative votes
                </div>
              </div>

              <h4 className="text-sm font-bold text-white mb-3">
                Debbie Rizzo’s Campaign Arguments:
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    •
                  </div>
                  <span>
                    <strong>Attacks "Hartford Overreach":</strong> Uses HB 8002 as a primary campaign talking point against the legislature's Democratic majority.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    •
                  </div>
                  <span>
                    <strong>Unfunded Mandate Critique:</strong> Accuses the state of placing burdensome reporting mandates on local municipal staff.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    •
                  </div>
                  <span>
                    <strong>Roll Call Context:</strong> Campaign materials critique Hartford Democrats generally, but Raghib Allie-Brennan voted NO on the House floor.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/60 text-xs text-amber-300/90 font-medium">
              <strong>Legislative Context:</strong> In a legislature with Democratic majorities, a member of the minority caucus faces procedural barriers to amending Public Act 25-1 without cross-aisle sponsorship.
            </div>
          </div>
        </div>

        {/* Detailed Bill Provisions Breakdown */}
        <div className="bg-slate-800/80 rounded-3xl border border-slate-700 p-6 sm:p-10 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Statutory Breakdown
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Inside the 3 Most Controversial Clauses of HB 8002
              </h3>
            </div>
            <div className="text-xs text-slate-400 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-slate-700">
              Select a clause below to compare stances
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {provisions.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedTopic(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  selectedTopic === idx
                    ? "bg-blue-600 text-white border-blue-500 shadow-lg scale-[1.02]"
                    : "bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`p-2 rounded-xl ${
                      selectedTopic === idx ? "bg-blue-700 text-white" : "bg-slate-800"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                    Clause {idx + 1}
                  </span>
                </div>
                <div className="font-bold text-sm leading-snug">{item.title}</div>
              </button>
            ))}
          </div>

          {/* Active Provision Details */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-750">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Statutory Mechanism
                </span>
                <p className="text-sm text-slate-200 mt-1 mb-4 leading-relaxed font-medium">
                  {provisions[selectedTopic].billText}
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Bethel & Danbury Local Impact
                </span>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  {provisions[selectedTopic].districtImpact}
                </p>
              </div>

              <div className="space-y-4 pt-4 lg:pt-0 lg:border-l lg:border-slate-800 lg:pl-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" /> Rep. Raghib Allie-Brennan
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {provisions[selectedTopic].raghibAction}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-slate-400" /> Debbie Rizzo (Challenger)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    {provisions[selectedTopic].rizzoStance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-slate-800/80 border border-blue-500/40 p-8 sm:p-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
            <Scale className="w-3.5 h-3.5" /> Legislative Summary on HB 8002
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white max-w-2xl mx-auto">
            Candidate Positions on HB 8002 (PA 25-1)
          </h3>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            In the November Special Session, Representative Raghib Allie-Brennan voted against HB 8002 alongside Bethel and Danbury municipal officials. Debbie Rizzo strongly opposes the bill's regional mandates, while Raghib exercised his floor vote in Hartford to oppose state preemption of local zoning.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#housing-affordability"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              Explore Full 8-30g Housing Section
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm transition-all"
            >
              Back to Full Issue Matrix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
