"""Housing Affordability & Local Zoning Research Module for CT House District 2.

This module provides comprehensive research, policy comparisons, and analysis
on the critical issues of housing affordability, Connecticut General Statutes
Section 8-30g (Affordable Housing Appeals Procedure), and municipal zoning
control in Bethel and Danbury, comparing incumbent State Representative
Raghib Allie-Brennan with challenger Debbie Rizzo.

All code is styled according to the PEP 8 style guide and thoroughly documented.
"""

from dataclasses import dataclass, field
from typing import Dict, List


@dataclass
class HousingPolicyDimension:
    """Represents a specific policy dimension within housing affordability.

    Attributes:
        dimension_id: Short unique identifier.
        topic: Name of the policy issue.
        district_context: Background detailing Bethel and Danbury impact.
        raghib_record: Legislative actions and votes by Raghib Allie-Brennan.
        rizzo_platform: Campaign positions and critiques from Debbie Rizzo.
        analytical_verdict: Impartial assessment of legislative capability.
    """

    dimension_id: str
    topic: str
    district_context: str
    raghib_record: str
    rizzo_platform: str
    analytical_verdict: str


@dataclass
class HousingResearchReport:
    """Comprehensive research report on candidate housing affordability records.

    Attributes:
        statutory_background: Overview of CT 8-30g and regional housing dynamics.
        dimensions: List of structured policy dimension comparisons.
        legislative_feasibility: Analysis of legislative leverage in Hartford.
    """

    statutory_background: str
    dimensions: List[HousingPolicyDimension] = field(default_factory=list)
    legislative_feasibility: Dict[str, str] = field(default_factory=dict)


def get_housing_affordability_data() -> HousingResearchReport:
    """Compile and return deep research data on District 2 housing policies.

    Returns:
        Populated HousingResearchReport instance with detailed research findings.
    """
    background = (
        "Connecticut General Statutes Sec. 8-30g allows developers to override "
        "local municipal zoning decisions in towns where less than 10% of "
        "housing stock meets state deed-restricted affordability guidelines. "
        "In Bethel and surrounding Greater Danbury neighborhoods, developers "
        "have repeatedly leveraged 8-30g to propose high-density, multi-story "
        "complexes that test local sewer infrastructure, traffic capacity, and "
        "volunteer fire safety capabilities."
    )

    dimensions = [
        HousingPolicyDimension(
            dimension_id="statute_8_30g",
            topic="Reforming CT 8-30g & Protecting Municipal Zoning",
            district_context=(
                "Developers have exploited 8-30g court appeals against Bethel's "
                "Planning & Zoning Commission, most notably regarding the "
                "controversial 75-unit, five-story Vessel Technologies proposal."
            ),
            raghib_record=(
                "Called top-down housing policies that silence local voices "
                "'lazy policy.' Stood directly with Bethel residents and local "
                "officials to challenge predatory 8-30g proposals. Proposed "
                "statutory amendments awarding municipal 'housing unit-equivalent "
                "points' to towns that adopt proactive Affordable Housing Plans."
            ),
            rizzo_platform=(
                "Campaign calls for 'rolling back' 8-30g to restore town authority "
                "and opposes top-down state interference in local land use."
            ),
            analytical_verdict=(
                "Both candidates oppose 8-30g overreach, but Raghib is Chief "
                "Majority Whip with internal leverage to craft amendments within "
                "the House Democratic caucus, whereas a minority freshman lacks "
                "the committee votes to enact full statutory repeal."
            ),
        ),
        HousingPolicyDimension(
            dimension_id="fire_safety_modular",
            topic="Life Safety Reports & Prefabricated Construction",
            district_context=(
                "Developers are increasingly utilizing proprietary modular and "
                "prefabricated designs under 8-30g, raising alarms for volunteer "
                "fire departments in Bethel and Stony Hill regarding emergency "
                "access and structural fire behavior."
            ),
            raghib_record=(
                "Co-sponsored legislative provisions authorizing municipalities "
                "to require upfront 'Life Safety Reports' on novel or "
                "prefabricated construction materials, ensuring fire chief "
                "clearance before state court overrides can take effect."
            ),
            rizzo_platform=(
                "General statements prioritizing neighborhood safety and "
                "volunteer first responders, but has not authored or proposed "
                "specific regulatory standards for building code review."
            ),
            analytical_verdict=(
                "Raghib translated neighborhood fire safety concerns into "
                "concrete statutory language that directly protects volunteer "
                "firefighters and future tenants."
            ),
        ),
        HousingPolicyDimension(
            dimension_id="top_down_mandates",
            topic="Omnibus Housing Mandates (HB 5002 & 'Fair Share')",
            district_context=(
                "Hartford advocates have repeatedly pushed statewide zoning "
                "overhauls, including mandatory density minimums and regional "
                "'Fair Share' allocation targets for small suburban municipalities."
            ),
            raghib_record=(
                "Broke with progressive caucus leadership to vote NO on top-down "
                "housing bills (such as HB 5002) that failed to account for "
                "school capacity, local infrastructure limits, and municipal "
                "tax burdens in Bethel and Danbury."
            ),
            rizzo_platform=(
                "Vigorously campaigns against 'Fair Share' housing mandates and "
                "HB 5396 (as-of-right commercial-to-residential conversions), "
                "arguing small towns lack big-city infrastructure."
            ),
            analytical_verdict=(
                "Raghib demonstrated the political independence to cast "
                "decisive votes against party-line housing mandates, proving his "
                "allegiance remains with Bethel and Danbury over party leaders."
            ),
        ),
        HousingPolicyDimension(
            dimension_id="transit_oriented_development",
            topic="Sensible Workforce Housing & Transit-Oriented Growth",
            district_context=(
                "Bethel Train Station (Danbury Branch) and Downtown Danbury "
                "represent strategic opportunities for organic, walk-to-rail "
                "revitalization that accommodates teachers, nurses, and young "
                "graduates without destroying single-family residential character."
            ),
            raghib_record=(
                "Champions incentive-based, community-driven transit development. "
                "Delivered millions in state capital bonding for downtown "
                "infrastructure (Clarke Business Park, Parloa Park) to support "
                "sustainable local economic development without state coercion."
            ),
            rizzo_platform=(
                "Emphasizes market-driven development and opposition to state "
                "subsidies, but lacks concrete proposals for affordable "
                "starter homes or young family retention."
            ),
            analytical_verdict=(
                "Raghib pairs defensive protection of town zoning with positive "
                "infrastructure investments that make smart, local growth "
                "feasible and economically rewarding."
            ),
        ),
    ]

    feasibility = {
        "Raghib Allie-Brennan": (
            "Senior legislative rank: Chief Majority Whip, Moderate Democratic "
            "Caucus Leader. Holds the procedural power to halt adverse zoning bills "
            "before they reach the House floor and negotiate statutory safeguards "
            "that protect suburban towns."
        ),
        "Debbie Rizzo": (
            "Challenger status: Would enter as a junior backbencher in a strong "
            "Democratic majority. Outspoken rhetorical critique of 8-30g, but "
            "has zero committee influence or cross-aisle leverage to pass repeal."
        ),
    }

    return HousingResearchReport(
        statutory_background=background,
        dimensions=dimensions,
        legislative_feasibility=feasibility,
    )


def format_housing_research_summary(report: HousingResearchReport) -> str:
    """Format the housing research report into a clean, human-readable summary.

    Args:
        report: HousingResearchReport instance to format.

    Returns:
        Structured multi-line string detailing candidate records and verdicts.
    """
    output_lines: List[str] = [
        "=" * 68,
        "  HOUSING AFFORDABILITY, 8-30g & LOCAL ZONING: DISTRICT 2 RESEARCH",
        "=" * 68,
        f"\nStatutory Context:\n  {report.statutory_background}\n",
        "-" * 68,
        "POLICY DIMENSIONS & CANDIDATE RECORD COMPARISON:",
        "-" * 68,
    ]

    for dim in report.dimensions:
        output_lines.extend(
            [
                f"\nTopic: {dim.topic.upper()}",
                f"  District Impact:     {dim.district_context}",
                f"  Raghib Allie-Brennan:{dim.raghib_record}",
                f"  Debbie Rizzo:        {dim.rizzo_platform}",
                f"  Analytical Verdict:  {dim.analytical_verdict}",
            ]
        )

    output_lines.extend(
        [
            "\n" + "-" * 68,
            "LEGISLATIVE LEVERAGE & FEASIBILITY ASSESSMENT:",
            "-" * 68,
        ]
    )
    for candidate, assessment in report.legislative_feasibility.items():
        output_lines.append(f"\n  [{candidate}]:\n    {assessment}")

    output_lines.append("\n" + "=" * 68)
    return "\n".join(output_lines)
