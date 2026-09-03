export interface Candidate {
  id: string;
  name: string;
  party: string;
  partyColor: string;
  title: string;
  tagline: string;
  district: string;
  townsCovered: string;
  bio: string;
  experienceYears: number;
  leadershipRoles: string[];
  committees: string[];
  education: string;
  hometown: string;
  keyStrengths: string[];
  notableRecognitions: string[];
  avatarUrl: string;
  campaignUrl?: string;
  officialUrl?: string;
}

export const CANDIDATES: Record<string, Candidate> = {
  raghib: {
    id: "raghib",
    name: "Raghib Allie-Brennan",
    party: "Democrat",
    partyColor: "#1D4ED8",
    title: "State Representative (Incumbent) & Chief Majority Whip",
    tagline: "Legislative Leadership and Enacted Results for Bethel and Danbury",
    district: "Connecticut House District 2",
    townsCovered: "Bethel & Danbury",
    bio: "Raised in Bethel and a graduate of Bethel High School (2009) and Marymount Manhattan College, Raghib Allie-Brennan is the son of a small business owner who immigrated from Guyana. Prior to his election to the General Assembly in 2018, Raghib served as a congressional advisor in the U.S. House of Representatives specializing in energy policy, disaster mitigation, and civil rights. In his fourth term, Raghib is Chief Majority Whip and an executive member of the Moderate Caucus, working across party lines to enact performance-based utility reforms, state income tax reductions, and direct capital funding for local schools, parks, and first responders.",
    experienceYears: 8,
    leadershipRoles: [
      "Chief Majority Whip (2025–present)",
      "Deputy Majority Leader (2023–2024)",
      "Assistant Majority Leader & Whip (2019–2023)",
      "Executive Member, CT Moderate Democratic Caucus",
      "Vice Chair & Senior Member, Energy & Technology Committee"
    ],
    committees: [
      "Energy and Technology Committee",
      "General Law Committee",
      "Insurance and Real Estate Committee"
    ],
    education: "B.A. in International Relations, Marymount Manhattan College (2013); Bethel High School (2009)",
    hometown: "Bethel, CT (Lifelong resident)",
    keyStrengths: [
      "Authored and passed the 'Take Back Our Grid Act' (PA 20-5) establishing performance-based utility ratemaking",
      "Secured over $5M in state infrastructure bonding for Bethel and Danbury schools, parks, and roads",
      "Named 'Affordability Champion' by CBIA for voting to cut state income taxes and maintain fiscal guardrails",
      "Constituent advocate with an 8-year legislative record representing Bethel and Danbury",
      "Supported reproductive healthcare protections, youth mental health services, and ECS public school funding"
    ],
    notableRecognitions: [
      "CBIA 'Affordability Champion' Award (Connecticut Business & Industry Association)",
      "Future Caucus State Director & Bipartisan Policy Award",
      "Connecticut League of Conservation Voters (CTLCV) Environmental Champion",
      "Legislative Leader Award, Domestic Violence Intervention & Survivor Advocacy"
    ],
    avatarUrl: "/candidates/raghib.jpg",
    officialUrl: "https://www.housedems.ct.gov/allie-brennan",
    campaignUrl: "https://www.raghibforct.com"
  },
  rizzo: {
    id: "rizzo",
    name: "Debbie Rizzo",
    party: "Republican",
    partyColor: "#B91C1C",
    title: "Challenger & Community Activist",
    tagline: "Challenger Platform Focused on Utility Rates and State Spending Reductions",
    district: "Connecticut House District 2",
    townsCovered: "Bethel & Danbury",
    bio: "Debbie Rizzo is a 45-year resident of Danbury who previously ran for Danbury City Council in 2023. Selected by the Republican Town Committees of Bethel and Danbury, Rizzo has framed her campaign around conservative fiscal policy, opposition to Eversource rate increases, lower state taxes, and law enforcement support. Rizzo has not previously held legislative office and advocates broad reductions in state spending and pausing state renewable energy mandates.",
    experienceYears: 0,
    leadershipRoles: [
      "Danbury Republican Town Committee Nominee",
      "Former Danbury City Council Candidate (2023)"
    ],
    committees: [
      "No legislative committee experience"
    ],
    education: "Longtime Danbury community member and local resident",
    hometown: "Danbury, CT (45-year resident)",
    keyStrengths: [
      "Grassroots advocate focused on household electric bills and cost of living",
      "Advocates for law enforcement support and revisiting 2020 police accountability statutes",
      "Pledges to oppose new state taxes and reduce state agency expenditures"
    ],
    notableRecognitions: [
      "Endorsed by the Danbury & Bethel Republican Town Committees"
    ],
    avatarUrl: "/candidates/rizzo.jpg",
    campaignUrl: "https://rizzo2026.com"
  }
};
