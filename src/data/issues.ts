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
      summary: "Pledges to roll back Connecticut's 8-30g affordable housing statute and fiercely opposes regional 'Fair Share' zoning mandates.",
      keyPoints: [
        "Vocal critic of state Affordable Housing Appeals Procedure (Sec. 8-30g) overriding town boards",
        "Opposes HB 5396 and as-of-right commercial-to-residential conversions that bypass local public hearings",
        "Argues suburban towns like Bethel lack big-city water, sewer, and traffic infrastructure to absorb massive developments"
      ],
      quotesOrPlatform: "Emphasizes 'Common Sense Priorities' to protect town zoning boards and preserve Bethel and Danbury's suburban neighborhood character against Hartford mandates.",
      limitations: "Relying on campaign rhetoric to repeal 8-30g is unrealistic in a legislature with solid Democratic majorities; a freshman minority representative has zero leverage to pass statutory rollbacks and offers no plan to help local workers afford housing."
    },
    raghibStance: {
      summary: "Chief Majority Whip who broke with progressive party leadership to vote NO on top-down zoning mandates (HB 5002), stood with Bethel against predatory 8-30g developer lawsuits, and sponsored fire safety inspection requirements.",
      keyPoints: [
        "Publicly condemned developer-exploitative housing mandates as 'lazy policy' and defended Bethel's Planning & Zoning Commission against the 75-unit Vessel Technologies development",
        "Co-sponsored legislative mandates requiring upfront 'Life Safety Reports' on modular and prefabricated construction to safeguard volunteer firefighters and residents",
        "Authored amendments to 8-30g awarding housing unit-equivalent points to municipalities that adopt proactive local Affordable Housing Plans, returning power to town boards",
        "Voted against omnibus top-down zoning bills (such as HB 5002) that failed to account for school enrollment, volunteer fire response, and local infrastructure",
        "Champions transit-oriented workforce housing around Bethel Train Station and Danbury Center backed by state infrastructure bonding"
      ],
      enactedLegislation: [
        "Co-sponsored Life Safety Report requirements for novel modular/prefabricated developments",
        "Proposed Municipal Incentive Amendments to Section 8-30g (Housing Unit-Equivalent Points)",
        "Key Moderate Caucus NO vote on top-down omnibus housing mandates (HB 5002)"
      ],
      fundingOrResults: "Secured over $5M in state infrastructure bonding to enhance municipal capacity in Bethel and Danbury, enabling organic, sustainable downtown revitalization.",
      bipartisanCred: "Collaborated with Bethel and Danbury municipal leaders across both parties to protect home rule while serving as a senior leader in the Moderate Democratic Caucus."
    },
    verdict: {
      summary: "While Rizzo repeats popular campaign criticisms of 8-30g, Raghib is the Chief Majority Whip with actual legislative power who broke party lines to vote NO on state zoning mandates and enacted real first-responder safety standards.",
      whyRaghibWins: "Complaining about 8-30g on campaign signs cannot change Connecticut law. As Chief Majority Whip and Moderate Caucus leader, Raghib Allie-Brennan has the institutional clout and committee rank to stop hostile zoning bills from reaching the floor and negotiate statutory amendments that protect Bethel and Danbury. Raghib proved his independence by voting against Hartford leadership on housing, ensuring local town voices are respected.",
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
      limitations: "Offers campaign rhetoric criticizing rates, but proposes eliminating renewable energy contracts without a plan to replace baseload power or address ISO-New England wholesale generation spikes."
    },
    raghibStance: {
      summary: "Vice Chair and senior leader on the Energy & Technology Committee who co-authored and passed Connecticut's landmark 'Take Back Our Grid Act' (PA 20-5).",
      keyPoints: [
        "Championed the shift to 'Performance-Based Ratemaking', ending the era where Eversource was guaranteed automatic profits regardless of service failures",
        "Mandated that utilities pay customer compensation for spoiled food and medicine during prolonged storm outages",
        "Spearheaded solar consumer protection laws to prevent deceptive third-party leasing while expanding rooftop clean energy",
        "Directly pushed PURA (Public Utilities Regulatory Authority) to enforce aggressive rate audits and reject unjust utility profit hikes"
      ],
      enactedLegislation: [
        "Public Act 20-5: Take Back Our Grid Act",
        "Public Act 23-102: Consumer Protections & Utility Customer Rights",
        "Public Act 21-162: Expanding Commercial and Residential Solar Choice"
      ],
      fundingOrResults: "Directly forced utility accountability into Connecticut general statutes; held Eversource leadership to public hearings in Hartford.",
      bipartisanCred: "Collaborated across party lines on the Energy & Technology Committee to pass utility reform with overwhelming bipartisan majorities."
    },
    verdict: {
      summary: "While Rizzo echoes ratepayer anger, Raghib has spent years authoring and passing the statutory reforms that legally curb utility monopolies.",
      whyRaghibWins: "Anyone can post complaints about Eversource on social media. Raghib Allie-Brennan actually stood on the House floor and passed Public Act 20-5 to tie utility executive profits to grid performance. As Chief Majority Whip and a senior voice on Energy & Technology, Raghib has the legislative muscle and expertise to protect Bethel and Danbury ratepayers.",
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
    importanceDescription: "Balancing municipal aid, lowering the cost of living for families, and maintaining the state's historic fiscal guardrails and rainy-day surpluses.",
    rizzoStance: {
      summary: "Advocates for broad spending cuts in Hartford and pledges to oppose all state tax increases to alleviate local homeowner burdens.",
      keyPoints: [
        "Calls for reducing Hartford's state budget footprint",
        "Advocates for easing the tax burden on Danbury and Bethel homeowners",
        "General pledge to resist any new state fees or taxes"
      ],
      quotesOrPlatform: "Promises 'responsible budgeting in Hartford to reduce the tax burden on local homeowners.'",
      limitations: "Lacks a viable plan for how municipal education aid (ECS) and PILOT funds would be protected if state revenue is slashed across the board, potentially forcing local towns to hike property taxes."
    },
    raghibStance: {
      summary: "Recognized as an 'Affordability Champion' by the Connecticut Business & Industry Association (CBIA) for passing the largest middle-class income tax cut in Connecticut history.",
      keyPoints: [
        "Voted for the historic bipartisan 2023–2024 budget cutting state income tax rates from 3% to 2% and 5% to 4.5% for working families",
        "Completely eliminated state taxes on pensions and 401(k) retirement income for seniors and retirees",
        "Voted repeatedly to uphold Connecticut's strict 'fiscal guardrails' (spending cap, revenue cap, and volatility cap), resulting in a record $4.1B Rainy Day Fund and $7B+ paid down in pension liabilities",
        "Increased state PILOT (Payment in Lieu of Taxes) funding for Danbury and Bethel to reduce local municipal tax burdens"
      ],
      enactedLegislation: [
        "Public Act 23-204: Historic $1 Billion Middle Class Income Tax Cut & Senior Pension Exemption",
        "Statutory extension of the 2017 Bipartisan Fiscal Guardrails through 2028"
      ],
      fundingOrResults: "Saved average Bethel and Danbury families $600 to $1,200 annually, while shielding seniors from out-of-state retirement flight.",
      bipartisanCred: "Endorsed and rated 'Affordability Champion' by CBIA, Connecticut's leading nonpartisan business alliance."
    },
    verdict: {
      summary: "Raghib delivered Connecticut's biggest middle-class tax cut in a generation while preserving fiscal guardrails that earned Connecticut credit rating upgrades.",
      whyRaghibWins: "Rizzo's generic promises to 'cut taxes' ignore the reality that state funding protects local town budgets. Raghib delivers both: historic cuts to middle-class income and retirement taxes, while safeguarding the state surplus and protecting Bethel and Danbury from property tax spikes.",
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
    importanceDescription: "State representatives fight in Hartford to win State Bond Commission grants and capital funds for local parks, municipal facilities, and economic drivers.",
    rizzoStance: {
      summary: "Emphasizes that local Danbury and Bethel infrastructure needs attention, but has no mechanism or relationships in Hartford to deliver state bond funding.",
      keyPoints: [
        "Critiques municipal road conditions and municipal spending priorities",
        "Has never negotiated with the State Bond Commission or executive agencies",
        "Platform is centered on cutting state spending, which often targets municipal grants"
      ],
      quotesOrPlatform: "Focuses on local Danbury concerns from her background as a Danbury resident and former municipal council candidate.",
      limitations: "As a freshman in the minority party with a platform centered on cutting bonding, Rizzo would have virtually no leverage to secure capital grants for Bethel or Danbury."
    },
    raghibStance: {
      summary: "A master of constituent delivery who has secured over $5 million in state capital grants and bonding specifically for District 2 projects.",
      keyPoints: [
        "Secured critical state funding for the expansion of the Francis J. Clarke Industrial Park in Bethel, generating commercial revenue and hundreds of local jobs",
        "Delivered over $500,000 for the revitalization of Bethel's Parloa Park, creating inclusive play spaces, trail improvements, and accessible amenities",
        "Won state infrastructure grants for clean drinking water upgrades and local flood mitigation after severe weather in western Connecticut",
        "Secured capital improvement funds for local Danbury cultural, youth, and non-profit centers"
      ],
      enactedLegislation: [
        "State Bond Commission Allocations for Francis J. Clarke Park Expansion",
        "State STEAP (Small Town Economic Assistance Program) Grants for Bethel",
        "Danbury Infrastructure Capital Allocations"
      ],
      fundingOrResults: "Over $5,000,000 in direct state bonding delivered into Bethel and Danbury infrastructure without raising municipal taxes.",
      bipartisanCred: "Works closely with Bethel First Selectmen and Danbury Mayors regardless of their political party affiliation."
    },
    verdict: {
      summary: "Raghib's role as Chief Majority Whip gives Bethel and Danbury an influential seat at the table where state bonding decisions are actually made.",
      whyRaghibWins: "State funding doesn't arrive by accident; it requires legislative clout and relentless advocacy. Raghib has delivered tangible, visible transformations: from new equipment at Parloa Park to shovel-ready expansion at Clarke Business Park. Replacing a Chief Majority Whip with an untested minority candidate would silence District 2's voice in Hartford.",
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
    importanceDescription: "Protecting community safety requires robust first responder resources, modernized victim protections, and practical law enforcement support.",
    rizzoStance: {
      summary: "Runs on a conventional 'Back the Blue' platform, criticizing 2020 criminal justice legislation and demanding stronger law enforcement support.",
      keyPoints: [
        "Strong proponent of police recruitment and retention funding",
        "Criticizes state criminal justice reforms and bail policies",
        "Promises to advocate for Danbury and Bethel police departments"
      ],
      quotesOrPlatform: "Pledges to 'stand with our local law enforcement and ensure they have the tools and backing to keep our streets safe.'",
      limitations: "Relies primarily on partisan slogans; has not proposed concrete statutory reforms or secured state funding for emergency services."
    },
    raghibStance: {
      summary: "Combines concrete funding for first responders with groundbreaking legislative action on domestic violence prevention and victim safety.",
      keyPoints: [
        "Championed state funding for the Danbury Police Activities League (PAL), supporting youth engagement and crime prevention",
        "Consistently fought for and delivered state equipment and turnout gear grants for the Bethel Volunteer Fire Department and Stony Hill Volunteer Fire Department",
        "Authored and led bipartisan passage of landmark domestic violence legislation standardizing lethality assessments and victim tracking across Connecticut law enforcement",
        "Strong advocate for modern emergency communications equipment for western Connecticut first responders"
      ],
      enactedLegislation: [
        "Public Act 23-115: Domestic Violence Survivor Protections & Lethality Assessment Standards",
        "Volunteer Firefighter Recruitment & Equipment State Assistance Grants",
        "Danbury PAL Community Crime Prevention Grants"
      ],
      fundingOrResults: "Secured hundreds of thousands in state grants for local fire departments, youth crime diversion, and first responder mental wellness.",
      bipartisanCred: "His domestic violence legislation passed both chambers with unanimous or near-unanimous bipartisan support and received praise from police chiefs statewide."
    },
    verdict: {
      summary: "Raghib backs first responders with actual equipment grants and wrote the gold-standard law protecting women and families from domestic violence.",
      whyRaghibWins: "While Rizzo uses public safety as a campaign slogan, Raghib has delivered real safety: funding for Stony Hill and Bethel volunteer firefighters, support for Danbury PAL, and life-saving state laws that equip police to intervene before domestic violence turns deadly.",
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
      limitations: "Opposes state revenue mechanisms that fund the Education Cost Sharing (ECS) formula, creating severe risks for Danbury's underfunded school system."
    },
    raghibStance: {
      summary: "Consistently delivered accelerated ECS funding formulas for Danbury and Bethel while defending public education investments and mental health resources.",
      keyPoints: [
        "Voted to fully fund the accelerated Education Cost Sharing (ECS) formula phase-in, securing millions in additional state aid for Danbury and Bethel schools",
        "Championed state bond funding and authorization for the Danbury Career Academy (Summit campus) to ease severe overcrowding",
        "Secured grants for school-based mental health clinics and youth counselors across District 2",
        "Authored legislation supporting media literacy education and inclusive curricula in K-12 classrooms"
      ],
      enactedLegislation: [
        "Public Act 23-150: Accelerated ECS Phase-In & Special Education Excess Cost Grants",
        "Public Act 21-168: School Mental Health Specialist Expansion",
        "State Bonding Authorization for Danbury Career Academy"
      ],
      fundingOrResults: "Directly brought millions in state education aid to Danbury and Bethel, preventing teacher layoffs and keeping classroom sizes manageable.",
      bipartisanCred: "Partnered with legislators from across the region to reform state special education reimbursement formulas."
    },
    verdict: {
      summary: "Raghib's fight for state education aid has directly shielded Bethel and Danbury property taxpayers from having to fund school expansions alone.",
      whyRaghibWins: "Danbury's school enrollment boom is one of the most pressing fiscal issues in Western Connecticut. Raghib has delivered cold, hard cash from Hartford for Danbury and Bethel classrooms. Cutting state aid as Rizzo suggests would devastate local school budgets or trigger massive local property tax spikes.",
      impactScore: {
        raghibScore: 97,
        rizzoScore: 42
      }
    }
  },
  {
    id: "small-business",
    category: "Small Business",
    title: "Main Street Revitalization, Red Tape Reduction & Job Creation",
    importanceDescription: "District 2 features vibrant downtowns in Bethel (Greenwood Ave) and Danbury (Main St), supported by hundreds of independent small businesses.",
    rizzoStance: {
      summary: "Pledges to cut state regulations and lower corporate filing fees to stimulate private sector business growth.",
      keyPoints: [
        "Advocates for reducing regulatory red tape for small enterprises",
        "Calls for lowering licensing costs and corporate fees",
        "Emphasizes free-market competition"
      ],
      quotesOrPlatform: "Pledges to 'foster an environment aimed at creating jobs and supporting Main Street businesses.'",
      limitations: "Has not presented specific statutes to revise, and lacks relationships with state economic development agencies (DECD)."
    },
    raghibStance: {
      summary: "The son of an immigrant small business owner, Raghib was named an 'Affordability Champion' by CBIA for his practical support of local commerce.",
      keyPoints: [
        "Voted to eliminate the $250 Business Entity Tax, saving thousands of local LLCs and small shops annual fees",
        "Championed the expansion of the Francis J. Clarke Industrial Park in Bethel, creating a hub for modern manufacturing and tech jobs",
        "Secured Main Street revitalization and small business grant allocations for downtown Bethel and Danbury commercial corridors",
        "Consistently advocates in the General Law Committee to streamline state licensing procedures for tradespeople and contractors"
      ],
      enactedLegislation: [
        "Public Act 21-1: Eliminating the Biennial Business Entity Tax",
        "Francis J. Clarke Business Park Infrastructure Expansion Bonding",
        "Small Town Economic Assistance Program (STEAP) Grants for Bethel Commercial Corridors"
      ],
      fundingOrResults: "Eliminated recurring corporate tax fees for small businesses and created hundreds of private sector jobs through Clarke Business Park expansion.",
      bipartisanCred: "One of the few Democratic state representatives repeatedly celebrated by the Connecticut Business & Industry Association (CBIA)."
    },
    verdict: {
      summary: "Raghib understands small business from lived experience in his family, pairing tax cuts for LLCs with major commercial infrastructure expansions.",
      whyRaghibWins: "Raghib's business credentials aren't theoretical—they're endorsed by Connecticut's leading employer group (CBIA). He actually voted to eliminate the business entity tax and brought the funding that turned Clarke Park into a regional economic powerhouse.",
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
    importanceDescription: "Protecting privacy, women's healthcare autonomy, mental health parity, and civil liberties for all residents of Connecticut.",
    rizzoStance: {
      summary: "Holds traditional conservative positions, generally viewing reproductive rights as a settled matter in Connecticut while declining to champion expansion.",
      keyPoints: [
        "Focuses campaign messages on economic issues rather than social legislation",
        "Has not voiced support for state healthcare expansions or sanctuary reproductive laws",
        "Aligned with state party platforms on individual and social issues"
      ],
      quotesOrPlatform: "Maintains a low profile on social issues, focusing almost exclusively on taxes, electric rates, and immigration criticisms.",
      limitations: "Offers no protections for healthcare providers or patients against out-of-state legal attacks, and has not supported mental healthcare expansion bills."
    },
    raghibStance: {
      summary: "Staunch defender of individual liberty, reproductive autonomy, and healthcare privacy who helped pass the historic Reproductive Freedom Defense Act.",
      keyPoints: [
        "Co-sponsored and voted for the Reproductive Freedom Defense Act (PA 22-19), protecting Connecticut doctors and patients from out-of-state prosecution",
        "Expanded access to reproductive healthcare and preventive medicine across Western Connecticut",
        "Pushed for mental health insurance parity, forcing private insurers to cover behavioral healthcare at the same rates as physical ailments",
        "Champion for LGBTQ+ youth protections, anti-bullying initiatives, and civil rights equality"
      ],
      enactedLegislation: [
        "Public Act 22-19: Reproductive Freedom Defense Act",
        "Public Act 22-47: Landmark Children & Youth Mental Health Expansion",
        "Protections for LGBTQ+ youth in the state justice system"
      ],
      fundingOrResults: "Solidified Connecticut as a national beacon of privacy and individual healthcare freedom; expanded mental health coverage for thousands in District 2.",
      bipartisanCred: "His mental health legislation earned overwhelming bipartisan support for addressing youth anxiety, depression, and suicide prevention."
    },
    verdict: {
      summary: "Raghib is an unwavering champion of privacy, reproductive healthcare, and human dignity, while Rizzo remains silent on safeguarding these freedoms.",
      whyRaghibWins: "At a moment when fundamental healthcare freedoms and bodily autonomy are under assault nationwide, Bethel and Danbury need a Representative who stands firm. Raghib Allie-Brennan has consistently defended every resident's right to make their own private medical decisions without government interference.",
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
        "Little mention of local park or open space preservation in platform"
      ],
      quotesOrPlatform: "Expresses frustration that environmental regulations drive up electric and business costs in Connecticut.",
      limitations: "Viewing environmental protection solely as a cost ignores the real benefits of clean drinking water, flood mitigation, and beloved community parks like Parloa."
    },
    raghibStance: {
      summary: "Endorsed Environmental Champion by the Connecticut League of Conservation Voters who secured over $500,000 to transform Bethel's Parloa Park.",
      keyPoints: [
        "Won $500,000+ in state bond funding to completely revitalize Parloa Park in Bethel with inclusive playgrounds and trail networks",
        "Spearheaded clean drinking water infrastructure protections for local reservoirs and well systems",
        "Pioneered legislation banning retail puppy mills to prevent animal abuse and protect pet owners from predatory breeders",
        "Championed state investments in stormwater mitigation following catastrophic floods across Fairfield County"
      ],
      enactedLegislation: [
        "Parloa Park Revitalization State Bonding",
        "Public Act 21-121: Prohibiting Commercial Puppy Mill Sales in Retail Pet Shops",
        "Fairfield County Flood Resilience & Watershed Protection Grants"
      ],
      fundingOrResults: "Transformed Parloa Park into an accessible regional jewel; protected municipal aquifers and preserved open space in Bethel.",
      bipartisanCred: "Animal welfare and park funding bills enjoyed broad bipartisan co-sponsorship."
    },
    verdict: {
      summary: "Raghib's investments have created tangible outdoor spaces families enjoy every day, while protecting Bethel and Danbury's natural resources.",
      whyRaghibWins: "From the swings and trails at Parloa Park to clean water protections, Raghib demonstrates that environmental stewardship enhances quality of life and property values in District 2 without compromising economic growth.",
      impactScore: {
        raghibScore: 96,
        rizzoScore: 44
      }
    }
  }
];
