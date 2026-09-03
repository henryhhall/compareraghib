"use client";

import React, { useState } from "react";
import { Zap, Landmark, Shield, HeartPulse, CheckCircle2, XCircle, ArrowRight, ExternalLink } from "lucide-react";

export default function IssueDeepDive() {
  const [activeTopic, setActiveTopic] = useState<number>(0);

  const topics = [
    {
      id: "utility-crisis",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Electric Rates & Utility Regulation",
      headline: "Performance-Based Ratemaking Under Public Act 20-5",
      summary: "Electric rates reflect regional wholesale generation prices, transmission grid costs, and state policy charges.",
      problemAnalysis: "Electric rates increased due to natural gas price spikes in wholesale auctions, regional transmission charges, and state policy charges. Utility companies historically passed storm recovery and capital expenditures directly onto consumers under cost-plus regulatory formulas.",
      rizzoApproach: "Debbie Rizzo criticizes the public benefits charge and calls for repealing state clean energy mandates. However, repealing clean energy mandates without baseload generation replacement fails to lower wholesale market rates set by ISO-New England, offering no legal mechanism to constrain Eversource's corporate return on equity.",
      raghibAction: "As Vice Chair of the Energy & Technology Committee, Raghib Allie-Brennan co-authored and passed the Take Back Our Grid Act (PA 20-5). This law directed Connecticut's Public Utilities Regulatory Authority (PURA) to implement Performance-Based Ratemaking. Under PA 20-5, if Eversource fails to restore power promptly or cuts maintenance, PURA has statutory authority to reduce shareholder returns.",
      raghibStatutes: [
        "PA 20-5: Take Back Our Grid Act (Performance-Based Regulation)",
        "Mandatory customer reimbursements for spoiled food/medicine during extended outages",
        "PURA aggressive rate docket audits resulting in multi-million dollar utility penalty reviews"
      ],
      theTakeaway: "Raghib co-authored PA 20-5 establishing performance-based regulation and mandatory outage compensation for spoiled food and medicine. Rizzo proposes auditing utility charges and pausing clean energy mandates."
    },
    {
      id: "property-taxes",
      icon: <Landmark className="w-5 h-5 text-emerald-500" />,
      title: "State Income Taxes & Local Property Taxes",
      headline: "Middle-Class Tax Reductions and Municipal Aid",
      summary: "Municipal property taxes in Bethel and Danbury are linked to state education and PILOT funding levels.",
      problemAnalysis: "Local property taxes fund schools, municipal roads, and emergency services. If state aid formulas decrease, municipalities must adjust local property tax rates to balance town budgets.",
      rizzoApproach: "Rizzo proposes slashing state spending in Hartford to 'relieve homeowner tax burdens.' Yet she has not identified a single state program to cut, and broad spending cuts directly jeopardize Education Cost Sharing (ECS) and municipal road aid.",
      raghibAction: "Raghib voted to extend Connecticut's 2017 fiscal guardrails (spending cap, revenue cap, and volatility deposit caps) while approving the 2023 middle-class state income tax cut (PA 23-204). He also supported full state tax exemptions on pension and 401(k) retirement income for qualifying retirees.",
      raghibStatutes: [
        "PA 23-204: Lowering state income tax rates from 3% to 2% and 5% to 4.5%",
        "Full state income tax exemption for pensions, annuities, and 401(k) distributions",
        "Record $4.1 Billion in state reserves & $7 Billion paid toward unfunded pension debt",
        "CBIA 'Affordability Champion' award for fiscal discipline"
      ],
      theTakeaway: "Raghib voted to lower middle-class state income taxes and exempt pensions while protecting local Education Cost Sharing (ECS) grants. Rizzo proposes broad state spending cuts to lower overall taxes."
    },
    {
      id: "public-safety",
      icon: <Shield className="w-5 h-5 text-indigo-500" />,
      title: "Public Safety & Victim Protection",
      headline: "First Responder Grants and Domestic Violence Statutes",
      summary: "Local emergency services require specialized equipment, turnout gear, and statutory tools for crime prevention.",
      problemAnalysis: "Western Connecticut emergency services require direct capital support for volunteer fire departments in Bethel, youth diversion programs in Danbury, and standardized law enforcement procedures for domestic violence calls.",
      rizzoApproach: "Rizzo's platform uses standard 'Back the Blue' rhetoric and calls to repeal 2020 police accountability provisions, but proposes no new equipment funding or specialized crime-prevention initiatives.",
      raghibAction: "Raghib authored and passed bipartisan legislation (PA 23-115) requiring standardized domestic violence lethality assessments across all Connecticut law enforcement agencies, providing officers with risk-screening tools during calls. He also secured state equipment grants for Stony Hill and Bethel volunteer firefighters and Danbury PAL youth programs.",
      raghibStatutes: [
        "PA 23-115: Standardizing Domestic Violence Lethality Assessments statewide",
        "Direct state assistance grants for Bethel Volunteer Fire Dept and Stony Hill Fire Dept",
        "State youth diversion funding for Danbury Police Activities League (PAL)"
      ],
      theTakeaway: "Raghib secured equipment funding for Bethel and Stony Hill volunteer fire houses and authored Public Act 23-115 establishing statewide lethality assessment standards. Rizzo advocates for law enforcement support and revisiting 2020 police accountability statutes."
    },
    {
      id: "healthcare-freedom",
      icon: <HeartPulse className="w-5 h-5 text-rose-500" />,
      title: "Healthcare Access & Medical Privacy",
      headline: "Healthcare Privacy and Mental Health Parity",
      summary: "State statutory protections govern reproductive healthcare access, clinician liability, and behavioral health insurance parity.",
      problemAnalysis: "Out-of-state legal challenges concerning reproductive healthcare have created regulatory questions for clinicians and patients traveling to Connecticut for care.",
      rizzoApproach: "Rizzo remains silent on reproductive choice and LGBTQ+ youth rights, treating social issues as secondary or settled matters, leaving voters with no certainty about how she would vote on conscience or healthcare protection bills.",
      raghibAction: "Raghib co-sponsored and voted for the Reproductive Freedom Defense Act (PA 22-19), protecting Connecticut patients and clinicians from out-of-state subpoenas and civil actions. He also supported youth mental health legislation (PA 22-47) expanding coverage for adolescent behavioral health.",
      raghibStatutes: [
        "PA 22-19: Reproductive Freedom Defense Act",
        "PA 22-47: Children & Youth Mental Health Expansion",
        "Advocacy for inclusive schools, media literacy, and anti-discrimination protections"
      ],
      theTakeaway: "Raghib voted for Public Act 22-19 protecting patients and clinicians under Connecticut law and expanded adolescent mental health coverage. Rizzo focuses campaign statements on fiscal issues and has not taken positions on healthcare privacy statutes."
    }
  ];

  const current = topics[activeTopic];

  return (
    <section id="deep-dive" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800 text-slate-200 border border-slate-700 mb-3">
            Policy Analysis
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Policy Analysis: Key Issues for District 2
          </h2>
          <p className="mt-3 text-base text-slate-600">
            An examination of four key policy areas facing Bethel, Danbury, and Connecticut, comparing legislative voting records and candidate platforms.
          </p>
        </div>

        {/* Topic Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {topics.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveTopic(idx)}
              className={`p-4 rounded-2xl text-left transition-all border flex items-start gap-3 ${
                activeTopic === idx
                  ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-600/20"
                  : "bg-white/60 border-slate-200 hover:bg-white text-slate-700"
              }`}
            >
              <div className="p-2 rounded-xl bg-slate-100 shrink-0">
                {t.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Issue 0{idx + 1}
                </div>
                <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                  {t.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Deep Dive Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <span>Special Report</span> • <span>CT House District 2</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
            {current.headline}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-4xl">
            {current.summary}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* The Reality & Rizzo Approach */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 bg-red-100 px-3 py-1 rounded-md w-fit mb-4">
                  Challenger Perspective: Debbie Rizzo
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  The Problem & Rhetoric
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {current.problemAnalysis}
                </p>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 block mb-1">Rizzo's Proposed Approach:</strong>
                  {current.rizzoApproach}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
                Platform based on campaign releases and Danbury/Bethel GOP forums.
              </div>
            </div>

            {/* The Record & Raghib Action */}
            <div className="bg-blue-50/70 rounded-2xl p-6 border-2 border-blue-500/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-200 px-3 py-1 rounded-md w-fit mb-4">
                  Legislative Record: Rep. Raghib Allie-Brennan
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  Enacted Legislation & Documented Impact
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {current.raghibAction}
                </p>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-950 block">
                    Key Statutes & Results:
                  </span>
                  {current.raghibStatutes.map((stat, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-blue-900 bg-white p-2.5 rounded-lg border border-blue-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-200 text-xs text-blue-900 font-semibold">
                Verified via Connecticut General Assembly Legislative Record (cga.ct.gov).
              </div>
            </div>
          </div>

          {/* Deep Dive Conclusion Callout */}
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 text-white p-6 border border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-600 text-white shrink-0 hidden sm:block">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                  Summary Comparison
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
                  {current.theTakeaway}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
