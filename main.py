"""Entry Point Script for CT District 2 Candidate Comparison System.

This script showcases the functionality of the candidate data analysis module
(`candidate_data.py`) and the site runner verification utility
(`site_runner.py`).

In strict adherence to the workspace rules:
- Code is formatted to PEP 8 standards.
- All code is thoroughly commented.
- The `main()` method contains no business logic; it solely dispatches to
  example showcase functions.
"""

from typing import Dict

import candidate_data
import hb8002_analysis
import housing_analysis
import site_runner


def example_display_candidate_profiles() -> None:
    """Showcase candidate profiles for CT House District 2.

    Retrieves and displays biographical and legislative details for both
    Democratic incumbent Raghib Allie-Brennan and Republican challenger
    Debbie Rizzo.
    """
    print("\n--- [EXAMPLE 1: CANDIDATE PROFILES] ---")
    for cand_id in ("raghib", "rizzo"):
        candidate = candidate_data.get_candidate(cand_id)
        if candidate:
            print(candidate_data.format_candidate_summary(candidate))
            print()


def example_display_issue_comparisons() -> None:
    """Showcase issue-by-issue comparison and legislative records.

    Iterates through the core policy areas (utilities, taxes, bonding, safety)
    and prints the side-by-side comparison between Raghib and Rizzo.
    """
    print("--- [EXAMPLE 2: ISSUE-BY-ISSUE COMPARISON] ---")
    for issue in candidate_data.ISSUE_STANCES:
        print(f"\nIssue: {issue.topic.upper()}")
        print(f"  Rep. Raghib Allie-Brennan (D): {issue.raghib_action}")
        print(f"  Challenger Debbie Rizzo (R):   {issue.rizzo_position}")
        print(f"  District Impact Verdict:       {issue.district_verdict}")
        print(
            f"  Score: Raghib [{issue.raghib_score}/100] vs. "
            f"Rizzo [{issue.rizzo_score}/100]"
        )

    # Display cumulative average score
    averages: Dict[str, float] = candidate_data.compute_average_effectiveness()
    print("\nCumulative Effectiveness Averages across Major District Issues:")
    for name, score in averages.items():
        print(f"  {name}: {score} / 100")


def example_verify_site_environment() -> None:
    """Showcase project verification and Next.js website architecture.

    Verifies the existence of all Next.js application files, components,
    and system runtime requirements.
    """
    print("\n--- [EXAMPLE 3: NEXT.JS WEBSITE ARCHITECTURE & INTEGRITY] ---")
    print(site_runner.get_site_summary())

    prereqs = site_runner.check_runtime_prerequisites()
    print("\nRuntime Tool Availability:")
    for tool, available in prereqs.items():
        status_str = "INSTALLED" if available else "MISSING"
        print(f"  - {tool}: {status_str}")

    intact, missing = site_runner.verify_project_integrity()
    if intact:
        print("\nAll required Next.js application components are present and intact!")
    else:
        print(f"\nWarning: Missing {len(missing)} expected file(s):")
        for file in missing:
            print(f"  - {file}")


def example_housing_affordability_analysis() -> None:
    """Showcase deep research on housing affordability and local zoning.

    Retrieves comprehensive research findings on CT Section 8-30g, modular
    fire safety legislation, omnibus housing votes, and candidate feasibility.
    """
    print("\n--- [EXAMPLE 3: HOUSING AFFORDABILITY & 8-30g LOCAL ZONING] ---")
    housing_data = housing_analysis.get_housing_affordability_data()
    print(housing_analysis.format_housing_research_summary(housing_data))


def example_hb8002_analysis() -> None:
    """Showcase legislative breakdown of HB 8002 (PA 25-1) and candidate records.

    Retrieves research on the November 2025 Special Session housing bill,
    statutory clauses, grant withholding, and candidate roll calls.
    """
    print("\n--- [EXAMPLE 4: HB 8002 SPECIAL SESSION HOUSING COMPARISON] ---")
    hb_report = hb8002_analysis.get_hb8002_analysis()
    print(hb8002_analysis.format_hb8002_summary(hb_report))


def main() -> None:
    """Entry point method showcasing functionality.

    Per workspace guidelines, no core logic resides in this function;
    it strictly invokes the dedicated example showcase methods above.
    """
    print("================================================================")
    print("  CONNECTICUT HOUSE DISTRICT 2 (BETHEL & DANBURY) VOTER SYSTEM  ")
    print("================================================================")

    # Showcase 1: Candidate Profiles
    example_display_candidate_profiles()

    # Showcase 2: Issue Comparisons & Scores
    example_display_issue_comparisons()

    # Showcase 3: Housing Affordability & 8-30g Local Zoning Deep Research
    example_housing_affordability_analysis()

    # Showcase 4: HB 8002 Special Session Roll Call & Candidate Comparison
    example_hb8002_analysis()

    # Showcase 5: Web Application Integrity & Architecture
    example_verify_site_environment()

    print("\nDone showcasing CT District 2 Comparison System.")


if __name__ == "__main__":
    main()
