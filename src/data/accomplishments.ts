export interface ProjectItem {
  id: string;
  town: "Bethel" | "Danbury" | "District-Wide" | "Statewide";
  category: "Parks & Recreation" | "Economic Development" | "Education" | "Public Safety" | "Infrastructure" | "Healthcare";
  title: string;
  fundingAmount?: string;
  year: string;
  description: string;
  impactHighlight: string;
}

export const DISTRICT_PROJECTS: ProjectItem[] = [
  {
    id: "parloa-park",
    town: "Bethel",
    category: "Parks & Recreation",
    title: "Parloa Park Complete Revitalization",
    fundingAmount: "$500,000+",
    year: "2022–2024",
    description: "Secured competitive state bond funds to rebuild Bethel's beloved Parloa Park, adding inclusive and ADA-accessible playground structures, safe rubberized surfacing, modern pavilion facilities, and upgraded walking trails.",
    impactHighlight: "Now serves hundreds of local children and families weekly with safe, modern, and accessible outdoor recreation."
  },
  {
    id: "clarke-business-park",
    town: "Bethel",
    category: "Economic Development",
    title: "Francis J. Clarke Industrial Park Expansion",
    fundingAmount: "$1,500,000+",
    year: "2021–2024",
    description: "Secured state economic development bonding to fund crucial roadway, water, and sewer infrastructure extensions into the Clarke Business Park expansion area.",
    impactHighlight: "Attracting high-wage manufacturing and corporate employers to expand Bethel's commercial tax base and reduce pressure on residential property taxpayers."
  },
  {
    id: "danbury-career-academy",
    town: "Danbury",
    category: "Education",
    title: "Danbury Career Academy at the Summit",
    fundingAmount: "$80,000,000+ (State Share)",
    year: "2022–2024",
    description: "Fought tirelessly alongside the Danbury legislative delegation to authorize state reimbursement and bonding for Danbury's transformative high school career academy campus.",
    impactHighlight: "Directly solves severe overcrowding in Danbury High School while providing cutting-edge career pathways in healthcare, engineering, and cybersecurity."
  },
  {
    id: "bethel-fire-departments",
    town: "Bethel",
    category: "Public Safety",
    title: "Volunteer Fire Department Gear & Facility Grants",
    fundingAmount: "$350,000+",
    year: "2020–2025",
    description: "Delivered state public safety assistance grants for the Bethel Volunteer Fire Department and Stony Hill Volunteer Fire Department to acquire modern turn-out gear, thermal imaging equipment, and apparatus upgrades.",
    impactHighlight: "Equipped volunteer first responders with life-saving equipment without burdening the town's local operating budget."
  },
  {
    id: "danbury-pal",
    town: "Danbury",
    category: "Public Safety",
    title: "Danbury Police Activities League (PAL) Youth Center",
    fundingAmount: "$250,000+",
    year: "2022–2025",
    description: "Won targeted state youth crime diversion grants for Danbury PAL programs, after-school sports clinics, and mentoring initiatives between police officers and local youth.",
    impactHighlight: "Proven crime reduction among teenagers and fostered trust and positive relationships between Danbury police and the community."
  },
  {
    id: "bethel-downtown-steap",
    town: "Bethel",
    category: "Infrastructure",
    title: "Greenwood Avenue Streetscape & Walkability Grants",
    fundingAmount: "$600,000+",
    year: "2021–2025",
    description: "Directed Small Town Economic Assistance Program (STEAP) grants for sidewalk reconstruction, decorative LED lighting, and pedestrian safety enhancements along Bethel's historic downtown Greenwood Avenue.",
    impactHighlight: "Boosted foot traffic for independent shops and restaurants while enhancing pedestrian safety for commuters and seniors."
  },
  {
    id: "school-mental-health",
    town: "District-Wide",
    category: "Education",
    title: "In-School Behavioral Health & Counselor Funding",
    fundingAmount: "Multi-Million Statewide / District Allocations",
    year: "2022–2025",
    description: "Co-authored and passed legislation funding school psychologists, social workers, and after-school counseling for Bethel and Danbury public schools.",
    impactHighlight: "Direct response to the youth mental health crisis, lowering student absentee rates and supporting educators."
  },
  {
    id: "utility-monopoly-reform",
    town: "Statewide",
    category: "Infrastructure",
    title: "The 'Take Back Our Grid Act' (PA 20-5)",
    fundingAmount: "Statutory Reform",
    year: "2020–present",
    description: "Co-crafted and passed Public Act 20-5, which revolutionized utility regulation by ending automatic cost-plus utility rate increases and transitioning Connecticut to performance-based regulation with strict storm response penalties.",
    impactHighlight: "Gave regulators legal teeth to penalize Eversource and United Illuminating for outages and poor customer service."
  }
];

export const VOTING_INFO = {
  electionDate: "Tuesday, November 3, 2026",
  pollsOpen: "6:00 AM – 8:00 PM EST",
  districtOverview: "Connecticut House District 2 encompasses the entire town of Bethel and portions of the City of Danbury.",
  towns: [
    {
      name: "Town of Bethel",
      registrarsOffice: "Bethel Municipal Center, 1 School Street, Bethel, CT 06801",
      phone: "(203) 794-8538",
      districts: [
        { name: "District 1", location: "Bethel Municipal Center (Gymnasium), 1 School St" },
        { name: "District 2", location: "Stony Hill Firehouse, 59 Stony Hill Rd" },
        { name: "District 3", location: "Frank A. Berry School, 200 Whittlesey Dr" },
        { name: "District 4", location: "Bethel High School, 300 Whittlesey Dr" }
      ]
    },
    {
      name: "City of Danbury (District 2 Portions)",
      registrarsOffice: "Danbury Town Hall, 155 Deer Hill Avenue, Danbury, CT 06810",
      phone: "(203) 797-4550",
      districts: [
        { name: "Ward 4 / District 2 Precincts", location: "Shelter Rock School, 2 Crows Nest Ln" },
        { name: "Ward 6 / District 2 Precincts", location: "Park Avenue School, 82 Park Ave" }
      ]
    }
  ],
  absenteeInfo: "Absentee ballots are available through your local Town Clerk. Any registered voter who cannot vote in person due to illness, physical disability, military service, absence from town during all polling hours, or religious tenets is eligible."
};
