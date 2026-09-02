"use client";

import React, { useState } from "react";
import { Vote, Menu, X, Award, MapPin, Scale, HelpCircle, CheckCircle2, Home, FileText } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Title */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Vote className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-lg">
                  CT District 2
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                  Bethel & Danbury
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Candidate Comparison & Legislative Record
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm font-medium text-slate-700">
            <a
              href="#candidates"
              className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors"
            >
              The Candidates
            </a>
            <a
              href="#comparison"
              className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Scale className="w-4 h-4 text-blue-600" />
              Issue Matrix
            </a>
            <a
              href="#housing-affordability"
              className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4 text-orange-600" />
              Housing & 8-30g
            </a>
            <a
              href="#hb-8002"
              className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-red-500" />
              HB 8002 Vote
            </a>
            <a
              href="#deep-dive"
              className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors"
            >
              Deep Dives
            </a>
            <a
              href="#district-impact"
              className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              Bethel & Danbury Impact
            </a>
            <a
              href="#voter-guide"
              className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-100 transition-colors"
            >
              Voting Info
            </a>
          </nav>

          {/* Quick CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#comparison"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              Compare Stances
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2">
          <a
            href="#candidates"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            The Candidates
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Issue Matrix
          </a>
          <a
            href="#housing-affordability"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Housing Affordability & 8-30g
          </a>
          <a
            href="#hb-8002"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            HB 8002 Special Session Vote
          </a>
          <a
            href="#deep-dive"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Issue Deep Dives
          </a>
          <a
            href="#district-impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Bethel & Danbury Funding & Projects
          </a>
          <a
            href="#voter-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Bethel & Danbury Polling Guide
          </a>
        </div>
      )}
    </header>
  );
}
