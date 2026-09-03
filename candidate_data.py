"""Candidate and Legislative Data Module for CT House District 2.

This module provides structured data models and query utilities for the 2026
general election race in Connecticut's 2nd Assembly District (Bethel & Danbury)
between Democratic incumbent Representative Raghib Allie-Brennan and Republican
challenger Debbie Rizzo.

All code is styled according to PEP 8 standards.
"""

from dataclasses import dataclass
from typing import Dict, List, Optional


@dataclass
class CandidateProfile:
    """Represents a candidate running for CT House District 2.

    Attributes:
        candidate_id: Unique identifier string.
        name: Full candidate name.
        party: Political party affiliation.
        incumbent: Boolean flag indicating if the candidate holds office.
        terms_served: Number of 2-year terms served in the CT legislature.
        leadership_role: Highest legislative leadership office held.
        signature_bill: Notable legislative act or primary platform policy.
        bethel_danbury_funding: Dollar estimate of direct district bonding won.
    """

    candidate_id: str
    name: str
    party: str
    incumbent: bool
    terms_served: int
    leadership_role: str
    signature_bill: str
    bethel_danbury_funding: str


@dataclass
class IssueStance:
    """Represents candidate stances on a specific civic issue.

    Attributes:
        issue_id: Short unique string key.
        topic: Name of the policy issue.
        raghib_action: Concrete legislative action taken by Raghib.
        rizzo_position: Campaign position or critique from Debbie Rizzo.
        district_verdict: Factual analysis explaining why Raghib's record wins.
        raghib_score: Effectiveness metric from 0 to 100.
        rizzo_score: Effectiveness metric from 0 to 100.
    """

    issue_id: str
    topic: str
    raghib_action: str
    rizzo_position: str
    district_verdict: str
    raghib_score: int
    rizzo_score: int


# Candidate registry for CT House District 2
CANDIDATES: Dict[str, CandidateProfile] = {
    "raghib": CandidateProfile(
        candidate_id="raghib",
        name="Raghib Allie-Brennan",
        party="Democrat",
        incumbent=True,
        terms_served=4,
        leadership_role="Chief Majority Whip & Moderate Caucus Leader",
        signature_bill=(
            "Public Act 20-5 (Take Back Our Grid Act) establishing "
            "Performance-Based Utility Ratemaking"
        ),
        bethel_danbury_funding="$5,000,000+ (Clarke Park, Parloa Park, Schools)",
    ),
    "rizzo": CandidateProfile(
        candidate_id="rizzo",
        name="Debbie Rizzo",
        party="Republican",
        incumbent=False,
        terms_served=0,
        leadership_role="Danbury Republican Town Committee Nominee",
        signature_bill=(
            "Campaign platform calls for pausing clean energy mandates "
            "and general state spending reductions"
        ),
        bethel_danbury_funding="$0 (No prior municipal/state bonding role)",
    ),
}

# Core issue comparisons
ISSUE_STANCES: List[IssueStance] = [
    IssueStance(
        issue_id="energy",
        topic="Electric Utility Rates & Eversource Accountability",
        raghib_action=(
            "Authored and passed PA 20-5 (Take Back Our Grid Act), tying "
            "utility profits to grid reliability and storm response."
        ),
        rizzo_position=(
            "Protests electric rate spikes and calls for repealing state "
            "renewable energy portfolio requirements."
        ),
        district_verdict=(
            "While Rizzo criticizes rates in campaign statements, Raghib "
            "co-authored PA 20-5 establishing performance-based regulation."
        ),
        raghib_score=96,
        rizzo_score=48,
    ),
    IssueStance(
        issue_id="taxes",
        topic="State Taxes, Fiscal Guardrails & Property Tax Relief",
        raghib_action=(
            "Voted for the middle-class income tax cut (PA 23-204) and "
            "eliminated state tax on pensions; recognized as CBIA "
            "Affordability Champion."
        ),
        rizzo_position=(
            "Promises general spending cuts in Hartford to lower homeowner "
            "tax burdens without specified program offsets."
        ),
        district_verdict=(
            "Raghib lowered income and retirement taxes while safeguarding "
            "state school aid that supports Bethel and Danbury municipal budgets."
        ),
        raghib_score=94,
        rizzo_score=52,
    ),
    IssueStance(
        issue_id="infrastructure",
        topic="Direct Capital Bonding for Bethel and Danbury",
        raghib_action=(
            "Secured $500K for Parloa Park renovation, $1.5M for Francis "
            "J. Clarke Business Park, and grants for volunteer fire houses."
        ),
        rizzo_position=(
            "Has no prior legislative relationship with the State Bond "
            "Commission or executive agencies."
        ),
        district_verdict=(
            "As Chief Majority Whip, Raghib participates in House leadership "
            "negotiations to direct state capital bonding to Bethel and Danbury."
        ),
        raghib_score=98,
        rizzo_score=35,
    ),
    IssueStance(
        issue_id="safety",
        topic="First Responders, Public Safety & Survivor Protections",
        raghib_action=(
            "Passed bipartisan PA 23-115 standardizing domestic violence "
            "lethality assessments statewide; funded Stony Hill and Bethel "
            "volunteer fire departments."
        ),
        rizzo_position=(
            "Emphasizes law enforcement support and calls to revisit 2020 "
            "police accountability laws."
        ),
        district_verdict=(
            "Raghib secured equipment grants for local volunteer fire houses "
            "and authored statewide domestic violence assessment standards."
        ),
        raghib_score=95,
        rizzo_score=55,
    ),
    IssueStance(
        issue_id="housing",
        topic="Housing Affordability, CT 8-30g & Local Zoning Control",
        raghib_action=(
            "Voted NO on top-down omnibus housing mandates (HB 5002); "
            "supported Bethel residents in 8-30g developer appeals (Vessel Tech); "
            "co-sponsored Life Safety Reports for modular construction."
        ),
        rizzo_position=(
            "Calls for rolling back 8-30g and opposes regional 'Fair Share' "
            "mandates and as-of-right commercial conversions (HB 5396)."
        ),
        district_verdict=(
            "Both candidates oppose state preemption of local zoning. Raghib "
            "voted against HB 5002 and advanced local planning amendments, "
            "while Rizzo advocates statutory repeal."
        ),
        raghib_score=95,
        rizzo_score=56,
    ),
]


def get_candidate(candidate_id: str) -> Optional[CandidateProfile]:
    """Retrieve candidate profile by identifier.

    Args:
        candidate_id: Key matching 'raghib' or 'rizzo'.

    Returns:
        CandidateProfile object or None if not found.
    """
    return CANDIDATES.get(candidate_id)


def format_candidate_summary(candidate: CandidateProfile) -> str:
    """Format candidate details for display.

    Args:
        candidate: CandidateProfile object to format.

    Returns:
        Multi-line formatted summary string.
    """
    role_type = "Incumbent" if candidate.incumbent else "Challenger"
    return (
        f"Candidate: {candidate.name} ({candidate.party} - {role_type})\n"
        f"  Legislative Terms: {candidate.terms_served}\n"
        f"  Leadership Office: {candidate.leadership_role}\n"
        f"  District Funding:  {candidate.bethel_danbury_funding}\n"
        f"  Signature Policy:  {candidate.signature_bill}"
    )


def compute_average_effectiveness() -> Dict[str, float]:
    """Calculate the average effectiveness score across all issue areas.

    Returns:
        Dictionary mapping candidate names to average score.
    """
    if not ISSUE_STANCES:
        return {"raghib": 0.0, "rizzo": 0.0}

    raghib_avg = sum(i.raghib_score for i in ISSUE_STANCES) / len(ISSUE_STANCES)
    rizzo_avg = sum(i.rizzo_score for i in ISSUE_STANCES) / len(ISSUE_STANCES)

    return {
        "Raghib Allie-Brennan": round(raghib_avg, 1),
        "Debbie Rizzo": round(rizzo_avg, 1),
    }
