"use client";

import React, { useState } from "react";
import { VOTING_INFO } from "@/data/accomplishments";
import { Calendar, Clock, MapPin, FileCheck, Phone, AlertCircle, ExternalLink } from "lucide-react";

export default function VoterGuide() {
  const [selectedTown, setSelectedTown] = useState<number>(0);

  return (
    <section id="voter-guide" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
            <FileCheck className="w-3.5 h-3.5" /> Official CT Voter Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Make Your Voice Heard in Bethel & Danbury
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Important dates, polling precincts, and voting instructions for Connecticut House District 2.
          </p>
        </div>

        {/* Quick Date / Time Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                General Election Day
              </span>
              <h3 className="text-lg font-extrabold text-white mt-0.5">
                {VOTING_INFO.electionDate}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Mark your calendar and plan your voting time.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Polling Hours
              </span>
              <h3 className="text-lg font-extrabold text-white mt-0.5">
                {VOTING_INFO.pollsOpen}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                If you are in line by 8:00 PM, you have the right to vote.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 flex items-start gap-4 sm:col-span-2 lg:col-span-1">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                District 2 Scope
              </span>
              <h3 className="text-lg font-extrabold text-white mt-0.5">
                All of Bethel + Danbury
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Includes all 4 Bethel districts & selected Danbury wards.
              </p>
            </div>
          </div>
        </div>

        {/* Polling Places Accordion / Tabs */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-700">
            <div>
              <h3 className="text-xl font-bold text-white">Find Your Polling Location</h3>
              <p className="text-xs text-slate-400">Select your municipality below:</p>
            </div>
            <div className="flex gap-2">
              {VOTING_INFO.towns.map((t, idx) => (
                <button
                  key={t.name}
                  onClick={() => setSelectedTown(idx)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedTown === idx
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Town Details */}
          {(() => {
            const town = VOTING_INFO.towns[selectedTown];
            return (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-700 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Registrar of Voters:</strong> {town.registrarsOffice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{town.phone}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {town.districts.map((dist, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-4 rounded-xl bg-slate-700/40 border border-slate-600/70 hover:border-blue-500/50 transition-colors"
                    >
                      <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                        {dist.name}
                      </div>
                      <div className="text-base font-semibold text-white">
                        {dist.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Absentee Ballot Guidance */}
          <div className="mt-8 pt-6 border-t border-slate-700 flex items-start gap-3 bg-blue-950/40 p-4 rounded-xl border border-blue-800/50 text-xs sm:text-sm text-slate-300">
            <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-blue-200">Voting by Absentee Ballot:</strong> {VOTING_INFO.absenteeInfo} Contact your local Town Clerk to request an application or check your registration status online at the CT Secretary of the State portal.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
