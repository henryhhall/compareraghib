import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import HousingAffordabilityComparison from "@/components/HousingAffordabilityComparison";
import HB8002Comparison from "@/components/HB8002Comparison";
import IssueDeepDive from "@/components/IssueDeepDive";
import DistrictImpactScorecard from "@/components/DistrictImpactScorecard";
import VoterGuide from "@/components/VoterGuide";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero & Candidate Overview */}
      <HeroSection />

      {/* Interactive Side-by-Side Comparison Matrix */}
      <ComparisonMatrix />

      {/* In-depth Housing Affordability & 8-30g Local Zoning Breakdown */}
      <HousingAffordabilityComparison />

      {/* Special Session Landmark Vote: HB 8002 Comparison */}
      <HB8002Comparison />

      {/* In-depth 4 Core Issue Breakdowns */}
      <IssueDeepDive />

      {/* Raghib's $5M+ Bethel & Danbury District Wins */}
      <DistrictImpactScorecard />

      {/* Voter Information & Polling Locations */}
      <VoterGuide />

      {/* Citations & Footer */}
      <Footer />
    </main>
  );
}
