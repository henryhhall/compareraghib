export interface IssueComparison {
  id: string;
  category: "Energy & Utilities" | "Taxes & Economy" | "District Investments" | "Public Safety" | "Education" | "Small Business" | "Healthcare & Rights" | "Environment" | "Housing & Zoning";
  title: string;
  importanceDescription: string;
  rizzoStance: {
    summary: string;
    keyPoints: string[];
    quotesOrPlatform: string;
    limitations: string;
  };
  raghibStance: {
    summary: string;
    keyPoints: string[];
    enactedLegislation: string[];
    fundingOrResults: string;
    bipartisanCred: string;
  };
  verdict: {
    summary: string;
    whyRaghibWins: string;
    impactScore: {
      raghibScore: number; // out of 100
      rizzoScore: number;
    };
  };
}

export const ISSUES_DATA: IssueComparison[] = [
  {
    id: "housing-affordability-zoning",
    category: "Housing & Zoning",
    title: "Housing Affordability, CT 8-30g & Local Zoning Control",
    importanceDescription: "Protecting municipal zoning control, volunteer fire safety, and infrastructure capacity in Bethel and Danbury while creating organic, affordable workforce housing options for young families and seniors.",
    rizzoStance: {
      summary: "Pledges to roll back Connecticut's 8-30g affordable housing statute and opposes regional 'Fair Share' zoning mandates.",
      keyPoints: [
        "Vocal critic of state Affordable Housing Appeals Procedure (Sec. 8-30g) overriding town boards",
        "Opposes HB 5396 and as-of-right commercial-to-residential conversions that bypass local public hearings",
        "Argues suburban towns like Bethel lack big-city water, sewer, and traffic infrastructure to absorb massive developments"
      ],
      quotesOrPlatform: "Emphasizes 'Common Sense Priorities' to protect town zoning boards and preserve Bethel and Danbury's suburban neighborhood character against Hartford mandates.",
      limitations: "Relying on campaign pledges to repeal 8-30g faces steep legislative hurdles in the General Assembly, where minority-party members lack the votes to repeal existing statutes without cross-party support, and Rizzo has not offered alternative policies to address local workforce housing costs."
    },
    raghibStance: {
      summary: "Chief Majority Whip who voted NO on omnibus state zoning mandates (HB 5002), supported Bethel's Planning & Zoning Commission in contested 8-30g development appeals, and sponsored fire safety reporting requirements for modular housing.",
      keyPoints: [
        "Publicly criticized top-down housing mandates and defended Bethel's Planning & Zoning Commission against the 75-unit Vessel Technologies development",
        "Co-sponsored legislative mandates requiring upfront 'Life Safety Reports' on modular and prefabricated construction to safeguard volunteer firefighters and residents",
        "Authored amendments to 8-30g awarding housing unit-equivalent points to municipalities that adopt proactive local Affordable Housing Plans, returning power to town boards",
        "Voted against omnibus top-down zoning bills (such as HB 5002) that failed to account for school enrollment, volunteer fire response, and local infrastructure",
        "Supports transit-oriented workforce housing around Bethel Train Station and Danbury Center backed by state infrastructure bonding"
      ],
      enactedLegislation: [
        "Co-sponsored Life Safety Report requirements for novel modular/prefabricated developments",
        "Proposed Municipal Incentive Amendments to Section 8-30g (Housing Unit-Equivalent Points)",
        "Key Moderate Caucus NO vote on top-down omnibus housing mandates (HB 5002)"
      ],
      fundingOrResults: "Secured over $5M in state infrastructure bonding to enhance municipal capacity in Bethel and Danbury, enabling sustainable downtown revitalization.",
      bipartisanCred: "Collaborated with Bethel and Danbury municipal leaders across both parties to protect home rule while serving as a senior leader in the Moderate Democratic Caucus."
    },
    verdict: {
      summary: "Both candidates oppose state overrides of local zoning. Raghib voted NO on omnibus zoning mandates (HB 5002) and authored amendments to Section 8-30g to award municipal points for local housing plans, while Rizzo advocates full statutory repeal without a legislative pathway.",
      whyRaghibWins: "Repealing Section 8-30g outright has failed repeatedly in the General Assembly. As Chief Majority Whip and a leader in the Moderate Democratic Caucus, Raghib voted against party leadership on HB 5002 and advanced targeted statutory changes, including life-safety reports and housing unit-equivalent credits for proactive town plans.",
      impactScore: {
        raghibScore: 95,
        rizzoScore: 56
      }
    }
  },
  {
    id: "energy-utilities",
    category: "Energy & Utilities",
    title: "Electric Bills, Eversource Accountability & Utility Rates",
    importanceDescription: "Electric utility rates in Connecticut are among the highest in the nation, driven by regional grid costs, supply contract mandates, and utility profit structures.",
    rizzoStance: {
      summary: "Pledges to reduce electric bills by cutting state green mandates and protesting the 'public benefits charge' on ratepayer bills.",
      keyPoints: [
        "Vocal opponent of recent Eversource electric rate increases",
        "Calls for pausing or repealing state renewable energy portfolio mandates",
        "Demands legislative audits of utility pricing structures"
      ],
      quotesOrPlatform: "Running on 'Common Sense Priorities' to deliver financial relief from crushing utility bills and hold power companies accountable.",
      limitations: "Offers campaign critiques of rates, but proposes eliminating renewable energy contracts without a plan to replace baseload power or address ISO-New England wholesale generation costs."
    },
    raghibStance: {
      summary: "Vice Chair of the Energy & Technology Committee who co-authored and passed Connecticut's 'Take Back Our Grid Act' (PA 20-5).",
      keyPoints: [
        "Championed the shift to 'Performance-Based Ratemaking', replacing automatic utility profits with performance benchmarks",
        "Mandated that utilities pay customer compensation for spoiled food and medicine during prolonged storm outages",
        "Spearheaded solar consumer protection laws to prevent deceptive third-party leasing while expanding rooftop clean energy",
        "Pushed PURA (Public Utilities Regulatory Authority) to enforce aggressive rate audits and reject unjust utility profit hikes"
      ],
      enactedLegislation: [
        "Public Act 20-5: Take Back Our Grid Act",
        "Public Act 23-102: Consumer Protections & Utility Customer Rights",
        "Public Act 21-162: Expanding Commercial and Residential Solar Choice"
      ],
      fundingOrResults: "Established statutory utility accountability in Connecticut general statutes and held Eversource leadership to public hearings in Hartford.",
      bipartisanCred: "Collaborated across party lines on the Energy & Technology Committee to pass utility reform with overwhelming bipartisan majorities."
    },
    verdict: {
      summary: "Rizzo calls for auditing utility charges and pausing clean energy mandates. Raghib co-authored Public Act 20-5 to end automatic ratepayer reimbursements and tie utility profits directly to storm restoration and grid performance.",
      whyRaghibWins: "Raghib co-authored and enacted Public Act 20-5 on the House floor, replacing cost-plus utility ratemaking with performance-based regulation and mandating customer compensation for extended storm outages. Rizzo advocates rate relief but has not proposed legislation to replace contracted baseload power.",
      impactScore: {
        raghibScore: 96,
        rizzoScore: 48
      }
    }
  },
  {
    id: "taxes-fiscal-health",
    category: "Taxes & Economy",
    title: "State Income Taxes, Property Tax Relief & Fiscal Guardrails",
    importanceDescription: "Balancing municipal aid, lowering household tax burdens, and maintaining the 2017 bipartisan fiscal guardrails.",
    rizzoStance: {
      summary: "Advocates for broad spending cuts in Hartford and pledges to oppose state tax increases to alleviate local homeowner burdens.",
      keyPoints: [
        "Calls for reducing Hartford's state budget footprint",
        "Advocates for easing the tax burden on Danbury and Bethel homeowners",
        "General pledge to resist any new state fees or taxes"
      ],
      quotesOrPlatform: "Promises 'responsible budgeting in Hartford to reduce the tax burden on local homeowners.'",
      limitations: "Lacks a plan for how municipal education aid (ECS) and PILOT funds would be protected if state revenue is cut broadly, which shifts costs to local property taxes."
    },
    raghibStance: {
      summary: "Recognized as an 'Affordability Champion' by the Connecticut Business & Industry Association (CBIA) for voting to reduce state income taxes and maintain fiscal guardrails.",
      keyPoints: [
        "Voted for the 2023–2024 state budget lowering income tax rates from 3% to 2% and 5% to 4.5% for working families",
        "Eliminated state taxes on pensions and 401(k) retirement income for qualifying seniors and retirees",
        "Voted repeatedly to uphold Connecticut's fiscal guardrails (spending cap, revenue cap, and volatility cap), resulting in a $4.1B Rainy Day Fund and $7B+ paid down in pension liabilities",
        "Increased state PILOT (Payment in Lieu of Taxes) funding for Danbury and Bethel to reduce local municipal tax burdens"
      ],
      enactedLegislation: [
        "Public Act 23-204: Middle Class Income Tax Cut & Senior Pension Exemption",
        "Statutory extension of the 2017 Bipartisan Fiscal Guardrails through 2028"
      ],
      fundingOrResults: "Saved average Bethel and Danbury families $600 to $1,200 annually, while shielding seniors from retirement income taxes.",
      bipartisanCred: "Rated 'Affordability Champion' by CBIA, Connecticut's leading nonpartisan business association."
    },
    verdict: {
      summary: "Raghib supported the 2023 income and retirement tax cuts (PA 23-204) while voting to extend the 2017 spending and volatility caps, which helped build a $4.1B reserve fund and reduce pension debt.",
      whyRaghibWins: "State municipal aid directly offsets local property taxes. Raghib voted to lower state income tax rates and exempt retirement pensions while protecting local Education Cost Sharing (ECS) formulas. Rizzo advocates broad state spending reductions without detailing how local town aid would be protected.",
      impactScore: {
        raghibScore: 94,
        rizzoScore: 52
      }
    }
  },
  {
    id: "district-investments",
    category: "District Investments",
    title: "Direct State Bonding & Infrastructure for Bethel & Danbury",
    importanceDescription: "State representatives advocate in Hartford to secure State Bond Commission grants and capital funds for local parks, municipal facilities, and economic infrastructure.",
    rizzoStance: {
      summary: "Emphasizes that local Danbury and Bethel infrastructure needs attention, but has not served in state government or secured state bond funding.",
      keyPoints: [
        "Critiques municipal road conditions and municipal spending priorities",
        "Has not worked with the State Bond Commission or state executive agencies",
        "Platform is centered on cutting state spending, which often reduces municipal capital grants"
      ],
      quotesOrPlatform: "Focuses on local Danbury concerns from her background as a Danbury resident and former municipal council candidate.",
      limitations: "As a member of the legislative minority campaigning to curtail state bonding, Rizzo would face constraints securing discretionary State Bond Commission allocations for District 2."
    },
    raghibStance: {
      summary: "Serving as Chief Majority Whip, Raghib has secured over $5 million in state capital bonding and STEAP grants for District 2 projects.",
      keyPoints: [
        "Secured state funding for the expansion of the Francis J. Clarke Industrial Park in Bethel, generating commercial revenue and local manufacturing jobs",
        "Delivered over $500,000 for the revitalization of Bethel's Parloa Park, creating inclusive play spaces, trail improvements, and accessible amenities",
        "Won state infrastructure grants for clean drinking water upgrades and local flood mitigation in western Connecticut",
        "Secured capital improvement funds for local Danbury cultural, youth, and non-profit centers"
      ],
      enactedLegislation: [
        "State Bond Commission Allocations for Francis J. Clarke Park Expansion",
        "State STEAP (Small Town Economic Assistance Program) Grants for Bethel",
        "Danbury Infrastructure Capital Allocations"
      ],
      fundingOrResults: "Over $5,000,000 in direct state bonding delivered for Bethel and Danbury infrastructure without raising municipal taxes.",
      bipartisanCred: "Coordinates with Bethel First Selectmen and Danbury Mayors across both political parties."
    },
    verdict: {
      summary: "Raghib's leadership position as Chief Majority Whip provides direct access to state bonding and grant negotiations for Bethel and Danbury.",
      whyRaghibWins: "State capital bonding requires sustained coordination between legislative leaders and state agencies. Raghib's allocations funded Clarke Business Park expansion and Parloa Park improvements without increasing local property taxes.",
      impactScore: {
        raghibScore: 98,
        rizzoScore: 35
      }
    }
  },
  {
    id: "public-safety",
    category: "Public Safety",
    title: "Police Support, Volunteer Firefighters & Domestic Violence Protection",
    importanceDescription: "Community public safety requires dedicated equipment and funding for volunteer firefighters, practical law enforcement support, and updated domestic violence statutes.",
    rizzoStance: {
      summary: "Runs on a platform emphasizing law enforcement support, criticizing 2020 criminal justice legislation.",
      keyPoints: [
        "Strong proponent of police recruitment and retention funding",
        "Criticizes state criminal justice reforms and bail policies",
        "Promises to advocate for Danbury and Bethel police departments"
      ],
      quotesOrPlatform: "Pledges to 'stand with our local law enforcement and ensure they have the tools and backing to keep our streets safe.'",
      limitations: "Focuses on campaign statements rather than specific statutory proposals or funding sources for emergency services."
    },
    raghibStance: {
      summary: "Secured state equipment grants for local volunteer fire departments and authored bipartisan domestic violence legislation.",
      keyPoints: [
        "Championed state funding for the Danbury Police Activities League (PAL), supporting youth engagement and crime prevention",
        "Delivered state equipment and turnout gear grants for the Bethel Volunteer Fire Department and Stony Hill Volunteer Fire Department",
        "Authored and led bipartisan passage of domestic violence legislation (PA 23-115) standardizing lethality assessments across Connecticut law enforcement",
        "Supported modern emergency communications equipment for western Connecticut first responders"
      ],
      enactedLegislation: [
        "Public Act 23-115: Domestic Violence Survivor Protections & Lethality Assessment Standards",
        "Volunteer Firefighter Recruitment & Equipment State Assistance Grants",
        "Danbury PAL Community Crime Prevention Grants"
      ],
      fundingOrResults: "Secured state grants for local fire departments, youth crime diversion, and first responder mental wellness.",
      bipartisanCred: "His domestic violence legislation passed both chambers with near-unanimous bipartisan support and received endorsements from police chiefs statewide."
    },
    verdict: {
      summary: "Raghib delivered turnout gear and apparatus grants to Bethel and Stony Hill volunteer fire houses and authored Public Act 23-115 establishing statewide lethality assessment standards.",
      whyRaghibWins: "Raghib translated local public safety needs into enacted statutes and funded grants: turn-out gear for Bethel and Stony Hill volunteer firefighters, youth program funding for Danbury PAL, and statewide risk-assessment tools for police responding to domestic incidents.",
      impactScore: {
        raghibScore: 95,
        rizzoScore: 55
      }
    }
  },
  {
    id: "education-schools",
    category: "Education",
    title: "Public School Funding, Danbury Career Academy & Student Mental Health",
    importanceDescription: "Public schools in Danbury face rapid enrollment growth and space pressures, while Bethel requires predictable state ECS formula funding.",
    rizzoStance: {
      summary: "Emphasizes parental rights and curriculum transparency while expressing concern over school district spending.",
      keyPoints: [
        "Supports expanding parental involvement in curriculum decisions",
        "Critical of state educational mandates that increase local administrative overhead",
        "General support for vocational training programs"
      ],
      quotesOrPlatform: "Advocates for returning focus to core academics and parental oversight in public education.",
      limitations: "Opposes state revenue mechanisms that fund the Education Cost Sharing (ECS) formula, creating fiscal risks for Danbury's school district."
    },
    raghibStance: {
      summary: "Delivered accelerated ECS funding formulas for Danbury and Bethel while supporting public education investments and mental health resources.",
      keyPoints: [
        "Voted to fully fund the accelerated Education Cost Sharing (ECS) formula phase-in, securing state aid for Danbury and Bethel schools",
        "Championed state bond funding and authorization for the Danbury Career Academy (Summit campus) to ease severe overcrowding",
        "Secured grants for school-based mental health clinics and youth counselors across District 2",
        "Authored legislation supporting media literacy education and inclusive curricula in K-12 classrooms"
      ],
      enactedLegislation: [
        "Public Act 23-150: Accelerated ECS Phase-In & Special Education Excess Cost Grants",
        "Public Act 21-168: School Mental Health Specialist Expansion",
        "State Bonding Authorization for Danbury Career Academy"
      ],
      fundingOrResults: "Secured state education aid to Danbury and Bethel, helping stabilize classroom sizes and local education budgets.",
      bipartisanCred: "Partnered with regional legislators to reform state special education reimbursement formulas."
    },
    verdict: {
      summary: "Raghib's votes for state education aid have helped shield Bethel and Danbury property taxpayers from funding school facility expansions alone.",
      whyRaghibWins: "Danbury's public school system faces rapid enrollment growth. Raghib voted to accelerate the Education Cost Sharing (ECS) formula and authorized state bonding for the Danbury Career Academy campus, easing classroom crowding and shifting facility costs from local taxpayers to the state share.",
      impactScore: {
        raghibScore: 97,
        rizzoScore: 42
      }
    }
  },
  {
    id: "small-business",
    category: "Small Business",
    title: "Main Street Revitalization, Regulation Review & Job Creation",
    importanceDescription: "District 2 features downtown centers in Bethel (Greenwood Ave) and Danbury (Main St), supported by hundreds of independent small businesses.",
    rizzoStance: {
      summary: "Pledges to cut state regulations and lower corporate filing fees to stimulate private sector business growth.",
      keyPoints: [
        "Advocates for reducing regulatory overhead for small enterprises",
        "Calls for lowering licensing costs and corporate fees",
        "Emphasizes free-market competition"
      ],
      quotesOrPlatform: "Pledges to 'foster an environment aimed at creating jobs and supporting Main Street businesses.'",
      limitations: "Has not presented specific statutes to revise, and lacks working ties with state economic development agencies (DECD)."
    },
    raghibStance: {
      summary: "The son of an immigrant small business owner, Raghib was recognized as an 'Affordability Champion' by CBIA for his record on business tax reduction.",
      keyPoints: [
        "Voted to eliminate the $250 Business Entity Tax, saving local LLCs and small shops recurring fees",
        "Championed the expansion of the Francis J. Clarke Industrial Park in Bethel, creating sites for manufacturing and tech businesses",
        "Secured Main Street revitalization and small business grant allocations for downtown Bethel and Danbury commercial corridors",
        "Advocates in the General Law Committee to simplify state licensing procedures for tradespeople and contractors"
      ],
      enactedLegislation: [
        "Public Act 21-1: Eliminating the Biennial Business Entity Tax",
        "Francis J. Clarke Business Park Infrastructure Expansion Bonding",
        "Small Town Economic Assistance Program (STEAP) Grants for Bethel Commercial Corridors"
      ],
      fundingOrResults: "Eliminated recurring corporate tax fees for small businesses and supported private sector employment through Clarke Business Park expansion.",
      bipartisanCred: "Received recognition from the Connecticut Business & Industry Association (CBIA)."
    },
    verdict: {
      summary: "Raghib paired tax reductions for small businesses with capital infrastructure expansions for local commercial parks.",
      whyRaghibWins: "Raghib voted to repeal the biennial $250 Business Entity Tax for small businesses and secured state infrastructure bonding to open new commercial parcels at Clarke Business Park in Bethel, earning recognition from the Connecticut Business & Industry Association (CBIA).",
      impactScore: {
        raghibScore: 95,
        rizzoScore: 50
      }
    }
  },
  {
    id: "healthcare-rights",
    category: "Healthcare & Rights",
    title: "Reproductive Freedom, Healthcare Access & Civil Rights",
    importanceDescription: "Protecting medical privacy, healthcare access, mental health parity, and civil liberties for Connecticut residents.",
    rizzoStance: {
      summary: "Holds traditional conservative positions, viewing reproductive rights as established in Connecticut law while prioritizing fiscal topics.",
      keyPoints: [
        "Focuses campaign messages on economic issues rather than social legislation",
        "Has not voiced support for state healthcare expansions or sanctuary reproductive laws",
        "Aligned with state party platforms on individual and social issues"
      ],
      quotesOrPlatform: "Focuses campaign statements primarily on taxes, electric rates, and state expenditures.",
      limitations: "Offers no protections for healthcare providers or patients against out-of-state legal claims, and has not taken stances on mental healthcare parity bills."
    },
    raghibStance: {
      summary: "Voted to protect reproductive autonomy and healthcare privacy under the Reproductive Freedom Defense Act.",
      keyPoints: [
        "Co-sponsored and voted for the Reproductive Freedom Defense Act (PA 22-19), protecting Connecticut doctors and patients from out-of-state prosecution",
        "Supported expanded access to reproductive healthcare and preventive medicine in Western Connecticut",
        "Voted for mental health insurance parity, requiring private insurers to cover behavioral healthcare equally with physical health",
        "Advocated for LGBTQ+ youth protections, anti-bullying initiatives, and equal rights"
      ],
      enactedLegislation: [
        "Public Act 22-19: Reproductive Freedom Defense Act",
        "Public Act 22-47: Children & Youth Mental Health Expansion",
        "Protections for LGBTQ+ youth in the state justice system"
      ],
      fundingOrResults: "Protected medical providers and patients from out-of-state legal action under PA 22-19, while expanding mental health insurance parity requirements in District 2.",
      bipartisanCred: "His mental health legislation earned bipartisan support for addressing youth anxiety, depression, and suicide prevention."
    },
    verdict: {
      summary: "Raghib co-sponsored Public Act 22-19 protecting patients and clinicians under Connecticut law, while Rizzo focuses primarily on fiscal topics and has not taken positions on healthcare privacy statutes.",
      whyRaghibWins: "Raghib voted for the Reproductive Freedom Defense Act (PA 22-19) to shield Connecticut patients and providers from out-of-state subpoenas and supported mental health parity mandates (PA 22-47) for adolescent behavioral health.",
      impactScore: {
        raghibScore: 99,
        rizzoScore: 40
      }
    }
  },
  {
    id: "environment-open-space",
    category: "Environment",
    title: "Parks, Open Space Preservation & Clean Drinking Water",
    importanceDescription: "Preserving western Connecticut's watersheds, open trails, and community parks while hardening infrastructure against severe weather.",
    rizzoStance: {
      summary: "Emphasizes the cost of green mandates and opposes environmental regulations that increase business or utility expenses.",
      keyPoints: [
        "Skeptical of state clean energy subsidies and EV mandates",
        "Prioritizes immediate economic cost reduction over long-term decarbonization goals",
        "Platform does not specify municipal park or open space funding"
      ],
      quotesOrPlatform: "Expresses concern that environmental regulations drive up electric and business costs in Connecticut.",
      limitations: "Focusing solely on immediate costs does not address capital needs for clean drinking water, flood mitigation, or municipal parks."
    },
    raghibStance: {
      summary: "Named Environmental Champion by the Connecticut League of Conservation Voters; secured $500,000 for Bethel's Parloa Park renovation.",
      keyPoints: [
        "Secured $500,000 in state bond funding to revitalize Parloa Park in Bethel with inclusive playgrounds and trail networks",
        "Supported clean drinking water infrastructure protections for local reservoirs and municipal well systems",
        "Authored legislation prohibiting retail puppy mill sales to protect animals and consumers",
        "Supported state funding for stormwater mitigation following flood events across Fairfield County"
      ],
      enactedLegislation: [
        "Parloa Park Revitalization State Bonding",
        "Public Act 21-121: Prohibiting Commercial Puppy Mill Sales in Retail Pet Shops",
        "Fairfield County Flood Resilience & Watershed Protection Grants"
      ],
      fundingOrResults: "Secured $500,000 to renovate Parloa Park with accessible facilities and protected local drinking water supplies through state conservation funding.",
      bipartisanCred: "Animal welfare and municipal park funding measures received bipartisan co-sponsorship."
    },
    verdict: {
      summary: "Raghib secured state bond funding for park facilities and clean drinking water infrastructure while co-sponsoring bipartisan animal welfare legislation.",
      whyRaghibWins: "Raghib secured state funding to rebuild Parloa Park and maintain municipal watershed safeguards, pairing recreational investments with local flood mitigation support.",
      impactScore: {
        raghibScore: 96,
        rizzoScore: 44
      }
    }
  }
];
