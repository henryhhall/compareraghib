"""HB 8002 (An Act Concerning Housing Growth) Legislative Analysis Module.

This module provides comprehensive research, statutory breakdowns, roll-call
voting records, and candidate position comparisons regarding Connecticut House
Bill 8002 (enacted as Public Act 25-1 during the November 2025 Special Session)
for Connecticut's 2nd Assembly District (Bethel & Danbury).

All code is strictly styled according to PEP 8 standards and fully documented.
"""

from dataclasses import dataclass, field
from typing import Dict, List


@dataclass
class BillProvisionAnalysis:
    """Represents a specific statutory mechanism in HB 8002 (PA 25-1).

    Attributes:
        provision_name: Name of the statutory clause.
        mechanism: How the provision operates in practice.
        municipal_impact: Concrete impact on Bethel and Danbury.
        raghib_action: Action, floor debate, or vote by Raghib Allie-Brennan.
        rizzo_critique: Position and campaign statements by Debbie Rizzo.
    """

    provision_name: str
    mechanism: str
    municipal_impact: str
    raghib_action: str
    rizzo_critique: str


@dataclass
class HB8002ComparisonReport:
    """Comprehensive candidate comparison report on House Bill 8002.

    Attributes:
        bill_title: Formal legislative title and public act designation.
        session_context: Legislative backdrop of the Special Session.
        provisions: List of analyzed statutory components.
        roll_call_verdict: Comparative analysis of candidate stances and reality.
        strategic_summary: Key takeaway for Bethel and Danbury voters.
    """

    bill_title: str
    session_context: str
    provisions: List[BillProvisionAnalysis] = field(default_factory=list)
    roll_call_verdict: Dict[str, str] = field(default_factory=dict)
    strategic_summary: str = ""


def get_hb8002_analysis() -> HB8002ComparisonReport:
    """Compile and return in-depth research on candidate stances on HB 8002.

    Returns:
        Populated HB8002ComparisonReport instance with detailed research findings.
    """
    bill_title = "HB 8002: An Act Concerning Housing Growth (Public Act 25-1)"
    session_context = (
        "Convened in a high-stakes November 2025 Special Session, Governor "
        "Ned Lamont and legislative leadership introduced HB 8002 as an omnibus "
        "statewide housing framework. The bill established regional housing "
        "growth plans, restricted local parking minimums, created summary review "
        "procedures for commercial conversions, and tied municipal access to "
        "state discretionary infrastructure grants to compliance with state targets."
    )

    provisions = [
        BillProvisionAnalysis(
            provision_name="Regional Growth Mandates & COG Oversight",
            mechanism=(
                "Transfers long-term housing planning from autonomous town boards "
                "to regional Councils of Governments (COGs) and OPM, requiring "
                "state-approved 5-year housing growth frameworks starting in 2028."
            ),
            municipal_impact=(
                "Penalizes municipalities like Bethel that seek to balance housing "
                "needs with local water, sewer, and volunteer fire capabilities."
            ),
            raghib_action=(
                "Voted NO on HB 8002 in the November 2025 Special Session. Denounced "
                "the top-down consolidation of planning authority in Hartford, "
                "asserting that zoning and infrastructure decisions belong to local "
                "residents and town commissions."
            ),
            rizzo_critique=(
                "Heavily campaigns against HB 8002, labeling it an unfunded state "
                "mandate and a Hartford power grab that strips towns of autonomy."
            ),
        ),
        BillProvisionAnalysis(
            provision_name="Grant Withholding & Financial Penalties",
            mechanism=(
                "Ties state discretionary infrastructure and bonding grants to "
                "municipal adherence to state housing growth targets."
            ),
            municipal_impact=(
                "Threatens critical local capital assistance for Bethel and "
                "Danbury roads, parks, and downtown streetscapes."
            ),
            raghib_action=(
                "Broke party ranks to oppose leveraging state grants against "
                "suburban towns. Fought to ensure Bethel's $5M+ in capital "
                "bonding remains protected regardless of regional quota fights."
            ),
            rizzo_critique=(
                "Criticizes Hartford for coercing towns into state-mandated "
                "zoning through financial threats, but offers no alternative "
                "strategy to secure state bonding for District 2."
            ),
        ),
        BillProvisionAnalysis(
            provision_name="Off-Street Parking Caps & Summary Reviews",
            mechanism=(
                "Limits municipal authority to mandate off-street parking for "
                "certain multi-unit developments and creates streamlined "
                "'summary review' pathways that restrict public hearing time."
            ),
            municipal_impact=(
                "Exacerbates on-street congestion around Bethel's historic "
                "commercial corridors and creates safety hazards on narrow roads."
            ),
            raghib_action=(
                "Stood with Bethel Planning & Zoning Commissioners who warned "
                "that state parking caps ignore real-world suburban traffic "
                "and first-responder ladder truck clearances."
            ),
            rizzo_critique=(
                "Vocal critic of bypassing local public hearings and stripping "
                "zoning boards of parking regulation authority."
            ),
        ),
    ]

    roll_call_verdict = {
        "Raghib Allie-Brennan (Incumbent Democrat)": (
            "Actual Roll-Call Vote: Voted NO on HB 8002 on the House floor. "
            "Defied Governor Lamont and progressive legislative leaders to "
            "protect Bethel and Danbury home rule. As Chief Majority Whip and "
            "Moderate Caucus leader, Raghib has the internal leverage to negotiate "
            "statutory amendments and protect town grants."
        ),
        "Debbie Rizzo (Republican Challenger)": (
            "Campaign Position: Attacks HB 8002 using partisan rhetoric as evidence "
            "of 'Hartford Democrats overreaching.' However, her critique ignores "
            "that the Democratic incumbent actually voted against the bill. As a "
            "freshman in a legislative minority, Rizzo would possess zero votes "
            "or leverage to repeal Public Act 25-1."
        ),
    }

    strategic_summary = (
        "The race for District 2 presents a stark contrast on HB 8002: Debbie "
        "Rizzo campaigns on anger against state zoning overreach from the outside, "
        "while Representative Raghib Allie-Brennan actually used his legislative "
        "vote on the House floor to vote NO against his own party leadership. "
        "Raghib proved his hometown loyalty supersedes party loyalty."
    )

    return HB8002ComparisonReport(
        bill_title=bill_title,
        session_context=session_context,
        provisions=provisions,
        roll_call_verdict=roll_call_verdict,
        strategic_summary=strategic_summary,
    )


def format_hb8002_summary(report: HB8002ComparisonReport) -> str:
    """Format the HB 8002 comparison report into a clear multi-line string.

    Args:
        report: HB8002ComparisonReport instance to format.

    Returns:
        Formatted multi-line text summary.
    """
    lines: List[str] = [
        "=" * 68,
        f"  {report.bill_title.upper()}",
        "=" * 68,
        f"\nContext:\n  {report.session_context}\n",
        "-" * 68,
        "KEY BILL PROVISIONS & CANDIDATE COMPARISONS:",
        "-" * 68,
    ]

    for prov in report.provisions:
        lines.extend(
            [
                f"\nProvision: {prov.provision_name.upper()}",
                f"  Statutory Mechanism: {prov.mechanism}",
                f"  Municipal Impact:    {prov.municipal_impact}",
                f"  Raghib Allie-Brennan:{prov.raghib_action}",
                f"  Debbie Rizzo:        {prov.rizzo_critique}",
            ]
        )

    lines.extend(
        [
            "\n" + "-" * 68,
            "CANDIDATE ROLL-CALL VERDICT & STRATEGIC REALITY:",
            "-" * 68,
        ]
    )
    for cand, verdict in report.roll_call_verdict.items():
        lines.append(f"\n[{cand}]:\n  {verdict}")

    lines.extend(
        [
            "\n" + "-" * 68,
            f"VOTER TAKEAWAY:\n  {report.strategic_summary}",
            "=" * 68,
        ]
    )
    return "\n".join(lines)
