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
    tagline: "Proven, Bipartisan Leadership Delivering Real Results for Bethel and Danbury",
    district: "Connecticut House District 2",
    townsCovered: "Bethel & Danbury",
    bio: "Raised in Bethel and a graduate of Bethel High School (2009) and Marymount Manhattan College, Raghib Allie-Brennan is the son of a small business owner who immigrated from Guyana. Prior to his election to the General Assembly in 2018, Raghib served as a congressional advisor in the U.S. House of Representatives specializing in energy policy, disaster mitigation, and civil rights. Serving his 4th term, Raghib serves as Chief Majority Whip and is a leading member of the Moderate Caucus, bridging party divides to secure landmark utility reforms, tax cuts, and millions for local schools, parks, and first responders.",
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
      "Authored & passed the landmark 'Take Back Our Grid Act' holding utilities like Eversource accountable",
      "Delivered over $5M+ in direct bonding for Bethel & Danbury infrastructure, parks, and safety",
      "Honored as 'Affordability Champion' by CBIA for voting to cut state income taxes & cap spending",
      "Openly accessible, trusted constituent advocate with an 8-year record of bipartisan problem solving",
      "Champion of reproductive freedom, mental health support, and public school funding"
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
    tagline: "Running on 'Common Sense Priorities' and Traditional Party Platform",
    district: "Connecticut House District 2",
    townsCovered: "Bethel & Danbury",
    bio: "Debbie Rizzo is a 45-year resident of Danbury who previously ran for Danbury City Council in 2023. Selected by the Republican Town Committees of Bethel and Danbury, Rizzo has framed her campaign around conservative economic principles, voicing deep frustration with rising Eversource electric rates, high state taxes, and immigration enforcement policies. While energetic on social media, Rizzo has no prior legislative or municipal voting record and proposes broad state spending reductions without specified funding offsets for local school or road aid.",
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
      "Energetic voice reflecting grassroots Republican sentiment on consumer electric bills",
      "Strong advocate for law enforcement and 'Back the Blue' rhetoric",
      "Pledges to oppose all new state taxes and regulations"
    ],
    notableRecognitions: [
      "Endorsed by the Danbury & Bethel Republican Town Committees"
    ],
    avatarUrl: "/candidates/rizzo.jpg",
    campaignUrl: "https://rizzo2026.com"
  }
};
