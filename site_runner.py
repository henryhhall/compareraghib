"""Site Runner and Automation Utility for Next.js Comparison Website.

This module provides automation functions to verify project structure, check
environment dependencies, and inspect Next.js application assets.

All code is styled according to PEP 8 standards.
"""

import os
import shutil
from typing import Dict, List, Tuple


REQUIRED_PROJECT_FILES: List[str] = [
    "package.json",
    "tsconfig.json",
    "tailwind.config.js",
    "postcss.config.mjs",
    "next.config.mjs",
    os.path.join("src", "app", "page.tsx"),
    os.path.join("src", "app", "layout.tsx"),
    os.path.join("src", "app", "globals.css"),
    os.path.join("src", "components", "Navbar.tsx"),
    os.path.join("src", "components", "HeroSection.tsx"),
    os.path.join("src", "components", "ComparisonMatrix.tsx"),
    os.path.join("src", "components", "HousingAffordabilityComparison.tsx"),
    os.path.join("src", "components", "HB8002Comparison.tsx"),
    os.path.join("src", "components", "IssueDeepDive.tsx"),
    os.path.join("src", "components", "DistrictImpactScorecard.tsx"),
    os.path.join("src", "components", "VoterGuide.tsx"),
    os.path.join("src", "components", "Footer.tsx"),
    os.path.join("src", "data", "candidates.ts"),
    os.path.join("src", "data", "issues.ts"),
    os.path.join("src", "data", "accomplishments.ts"),
    "housing_analysis.py",
    "hb8002_analysis.py",
    os.path.join("public", "robots.txt"),
    ".gitignore",
]


def check_runtime_prerequisites() -> Dict[str, bool]:
    """Check if required runtime command line tools are available on PATH.

    Returns:
        Dictionary mapping tool names ('node', 'npm', 'python') to presence.
    """
    tools = ["node", "npm", "python"]
    return {tool: shutil.which(tool) is not None for tool in tools}


def verify_project_integrity(base_dir: str = ".") -> Tuple[bool, List[str]]:
    """Verify that all required source and configuration files exist.

    Args:
        base_dir: Root directory of the project.

    Returns:
        Tuple of (all_files_present_bool, missing_files_list).
    """
    missing_files: List[str] = []

    for rel_path in REQUIRED_PROJECT_FILES:
        full_path = os.path.join(base_dir, rel_path)
        if not os.path.exists(full_path):
            missing_files.append(rel_path)

    is_intact = len(missing_files) == 0
    return is_intact, missing_files


def get_site_summary() -> str:
    """Generate a descriptive overview of the comparison website features.

    Returns:
        Multi-line string describing web features and architecture.
    """
    return (
        "===========================================================\n"
        "  CT House District 2 Candidate Comparison Website\n"
        "  Raghib Allie-Brennan (Incumbent) vs. Debbie Rizzo (GOP)\n"
        "===========================================================\n"
        "  Framework:  Next.js 15 (App Router), TypeScript, Tailwind CSS\n"
        "  District:   Connecticut 2nd District (Bethel & Danbury)\n"
        "  Core Pages & Modules:\n"
        "    - Hero: Head-to-head comparison cards & record metrics\n"
        "    - Issue Matrix: Filterable 9-category comparison\n"
        "    - Housing Comparison: CT 8-30g, fire safety & local zoning\n"
        "    - Special Session: HB 8002 (PA 25-1) roll call & analysis\n"
        "    - Deep Dives: Eversource/electric bills, taxes, safety, rights\n"
        "    - District Impact: $5M+ in Bethel & Danbury capital bonding\n"
        "    - Voter Guide: Bethel & Danbury precincts and dates\n"
        "==========================================================="
    )
