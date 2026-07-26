export const profile = {
  name: "Shahrukh Azhar",
  nameUrdu: "شاہ رخ اظہر",
  monogram: "SA",
  title:
    "Fractional Head of Design · Product, Systems & UX Strategy",
  location: "Dubai, UAE · Lahore, Pakistan",
  email: "shahrukh@phoenux.design",
  phone: "+92 324 4135852",
  phoneHref: "tel:+923244135852",
  linkedin: "https://www.linkedin.com/in/shahrukhazhar1",
  linkedinLabel: "linkedin.com/in/shahrukhazhar1",
  calendly: "https://calendly.com/shahrukhazhar",
  studio: "https://phoenux.design",
  studioLabel: "phoenux.design",
  summary:
    "Product design leader with 12+ years shipping B2B SaaS, enterprise platforms, developer tools, ecommerce, and AI products. Builds and scales design teams that sit at the backbone of product orgs — helping founders, product managers, and engineers ship clearer, faster. Operates from a simple order of priority: people, design, money.",
  highlight:
    "Founder of Phoenux.Design and Ferd.AI. Previously Lead Product Designer at Unlayer (YC W22) and Senior Product Designer at Sendoso.",
}

/** Outside the CV — human context, not a pitch. */
export const outsideWork = {
  intro:
    "A little of who I am when the Figma file is closed.",
  lines: [
    "I'm a father.",
    "A self-glorified table tennis player — and I will take that title.",
    "I sometimes play snooker.",
    "I recently started playing padel.",
    "I'm really, really, really into cars.",
    "I'm a geek about renewable energy.",
    "I'm good at talking to anyone about anything.",
    "I sometimes act like Michael Scott of Phoenux — we do treat Phoenux a bit like Dunder Mifflin.",
    "I'm a type 1 diabetic. That has pushed my limits more than almost anything else. I am who I am — without it, I might have been just a normal kid doing normal things.",
  ],
}

export const focusAreas = [
  "Product & UX Strategy",
  "Design Leadership & Team Scaling",
  "Design Systems & Design Ops",
  "Discovery & Scoping",
  "Enterprise & Confined Frameworks",
  "AI-assisted Design Ops",
]

export const competencies = [
  "Product Strategy",
  "Product Discovery",
  "Design Leadership",
  "Team Scaling & Culture",
  "Design Systems",
  "Design Operations",
  "UX Research",
  "Interaction Design",
  "Information Architecture",
  "Prototyping",
  "Enterprise SaaS",
  "B2B Products",
  "Developer Platforms",
  "Salesforce & ServiceNow UX",
  "Analytics Platforms",
  "AI Products",
  "Cross-functional Leadership",
  "Stakeholder Management",
  "Workshop Facilitation",
  "Pre-sales & Engagement Design",
  "Team Mentorship",
]

export const tools = [
  "Figma",
  "FigJam",
  "Adobe Creative Suite",
  "Miro",
  "Jira",
  "Confluence",
  "Notion",
  "Google Analytics",
  "Hotjar",
  "Maze",
]

export type ClientCredit = {
  name: string
  region: "us" | "mena"
  line: string
}

/** Client roster with one-liners grounded in resume experience — no invented outcomes. */
export const clientCredits: ClientCredit[] = [
  {
    name: "Sendoso",
    region: "us",
    line: "Senior Product Designer through hypergrowth — gifting, Cameo, and Salesforce-bound product UX.",
  },
  {
    name: "Whirlpool",
    region: "us",
    line: "Bluetooth-connected product experiences while the only designer among 40+ engineers.",
  },
  {
    name: "Dealpath",
    region: "us",
    line: "Phoenux studio engagement across North American SaaS / enterprise product work.",
  },
  {
    name: "Listen Labs",
    region: "us",
    line: "Phoenux collaboration in the generative AI / product design lane.",
  },
  {
    name: "Ford",
    region: "us",
    line: "Enterprise brand surfaces while growing TkXel’s design function into a real department.",
  },
  {
    name: "Barclays",
    region: "us",
    line: "Global brand digital work out of TkXel’s early design team.",
  },
  {
    name: "NBCUniversal",
    region: "us",
    line: "Consumer and entertainment brand work from the same TkXel chapter.",
  },
  {
    name: "YMCA",
    region: "us",
    line: "On the collaboration roster — brief stays light where the NDA still does the talking.",
  },
  {
    name: "Adventist Risk Management",
    region: "us",
    line: "On the collaboration roster — details kept quiet on purpose.",
  },
  {
    name: "Foodics",
    region: "mena",
    line: "Phoenux engagement in F&B tech across the Gulf.",
  },
  {
    name: "STC",
    region: "mena",
    line: "Phoenux studio work with a major MENA telecom / digital product surface.",
  },
  {
    name: "TCS Pakistan",
    region: "mena",
    line: "Designed for Pakistan’s logistics giant during the TkXel years.",
  },
  {
    name: "Royal Balm",
    region: "mena",
    line: "Web and brand work from the PopCorn agency chapter.",
  },
  {
    name: "Fatburger",
    region: "mena",
    line: "Digital media and web delivery while co-founding PopCorn.",
  },
  {
    name: "Darul Qasim",
    region: "mena",
    line: "On the collaboration roster — story stays short where it should.",
  },
  {
    name: "MyKneeScan",
    region: "mena",
    line: "On the collaboration roster — details stay light where they should.",
  },
  {
    name: "Zoe Bios Creative",
    region: "mena",
    line: "On the collaboration roster — one line is enough for the homepage.",
  },
]

export const clients = {
  us: clientCredits.filter((c) => c.region === "us").map((c) => c.name),
  mena: clientCredits.filter((c) => c.region === "mena").map((c) => c.name),
}

export const achievements = [
  "Founded and scaled Phoenux into a delivery-focused, design-oriented studio — embedding design teams where design could be the backbone of product.",
  "Operates studios and product orgs around a core principle: people, design, money — in that order.",
  "Led Unlayer through template systems, product redesign, and a full rethink of a developer-relevant builder experience.",
  "At Sendoso, shaped fulfillment-to-recipient journeys and the Cameo integration that unlocked major product marketing momentum.",
  "As the sole designer among 40+ engineers at Kwanso, shipped polished retail, ecommerce, edtech, and healthtech products — including work that helped startups raise $20M+ pre-seed rounds.",
  "Grew TkXel's design function from a two-person start into a standalone department serving brands like Ford, Barclays, and NBCUniversal.",
]

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  badge?: string
  summary: string
  bullets?: string[]
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    company: "Phoenux.Design",
    role: "Founder & Principal Product Designer",
    period: "Sep 2019 – Present",
    location: "United Arab Emirates",
    current: true,
    summary:
      "Founded and scaled a product design consultancy into a multidisciplinary studio across design, content, and operations. Built and placed design teams inside client orgs where design could become the backbone — helping founders, product managers, and engineers ship better products. Runs a culture that is fiercely delivery-focused and deeply design-oriented, guided by a principle borrowed from an agency leader I follow closely: people, design, money — in exactly that order.",
    bullets: [
      "Scaled hiring, culture, quality, and delivery so multiple concurrent engagements stay sharp without burning out craft or trust.",
      "Own design ops and studio operations end-to-end — from discovery workshops and stakeholder alignment to handoff, retention, and repeat engagements.",
      "Partner directly with founders and product leaders to set north stars, UX architecture, and systems that grow with the product.",
      "Recent enterprise and platform work includes engagements like Ameta, plus ServiceNow-related POCs and smaller builds — shipping inside confined frameworks where constraints are the product.",
      "Client work spans SaaS, F&B tech, generative AI, compliance, health tech, and enterprise software across North America, the Gulf, and Pakistan (Foodics, STC, Dealpath, Listen Labs, and more).",
    ],
  },
  {
    company: "Ferd.AI",
    role: "Founder",
    period: "Oct 2024 – Present",
    current: true,
    summary:
      "Building the next-gen AI agent to streamline design ops and front-end development. The first chapter got overtaken by how fast the AI landscape moved — but the bet is still live. The plan is to pick it back up and ship a sharper, more current version when the timing is right.",
    bullets: [
      "Exploring AI-assisted workflows that compress the gap between design systems, ops, and production-ready front-end.",
      "Treating the product as a long game: if not this version today, a stronger one soon.",
    ],
  },
  {
    company: "Unlayer",
    role: "Lead Product Designer",
    period: "Aug 2022 – Jan 2026",
    location: "United Arab Emirates",
    badge: "YC W22",
    summary:
      "Joined as a product designer on one of the most widely adopted email and page builder platforms, then grew into leading design across the product. Managed the template design team, redesigned and redefined core surfaces, and ultimately rethought the entire product experience for a deeply developer-relevant platform used by SaaS and enterprise teams worldwide.",
    bullets: [
      "Started hands-on in the editor and dashboards, then scaled into design leadership across product and template systems.",
      "Led the template design function — setting quality, patterns, and throughput for a high-volume content surface.",
      "Drove a full product experience rethink: clarifying complex builder workflows while preserving the depth power users need.",
      "Partnered with product and engineering on enterprise journeys, interaction patterns, and design-system consistency.",
      "Mentored designers and raised the bar for craft across visual and product design.",
    ],
  },
  {
    company: "Sendoso",
    role: "Senior Product Designer",
    period: "Oct 2019 – Jul 2022",
    location: "Phoenix, AZ",
    summary:
      "Joined during a critical growth phase as Sendoso scaled and secured a $100M funding round. Designed across the full gifting and sending platform — from fulfillment and Sense to touch creation, integrations, managed apps, contacts, and the moment a recipient actually opens something they like.",
    bullets: [
      "Owned end-to-end experience across fulfillment, Sense, touch creation, integrations, Salesforce-managed apps, contacts, and recipient-facing moments.",
      "Learned to ship inside enterprise bounds early — Salesforce managed apps demanded clear UX within a confined framework, not a greenfield canvas.",
      "Co-created the Cameo integration from a late-night spark: a co-founder call, a US PM on the line, a PlayStation session, and the idea that someone could wake up to a gift with a Snoop Dogg birthday video. The feature drove outsized product marketing momentum and opened doors for other verticals — even when commercial outcomes for the two businesses were mixed.",
      "Re-imagined legacy operational workflows while preserving existing mental models, improving adoption across complex multi-step flows.",
      "Partnered tightly with product and engineering on analytics, reporting, finance, and gamification initiatives that supported retention and expansion.",
    ],
  },
  {
    company: "Tintash",
    role: "Senior UI/UX Designer",
    period: "Feb 2019 – Oct 2019",
    location: "Lahore, Pakistan",
    summary:
      "Designed web and mobile products for international clients from concept to production — with a strong focus on POCs and helping pre-sales land and shape new design engagements.",
    bullets: [
      "Ran POC design work that helped prove product direction quickly for prospective and active clients.",
      "Partnered with pre-sales to scope, pitch, and onboard design engagements — translating business needs into credible design plans.",
      "Created wireframes, prototypes, and reusable UI patterns that made it into shipped products.",
    ],
  },
  {
    company: "Kwanso",
    role: "Senior UX Designer",
    period: "May 2017 – Jan 2019",
    summary:
      "The only designer in a team of 40+ engineers. Owned UX across retail, ecommerce, automations, edtech, and healthtech products for startups and established brands — including a Bluetooth-connected Whirlpool engagement. Design polish was often a deciding factor in how ready products looked for the market.",
    bullets: [
      "Operated as the sole design voice in a large engineering org — setting IA, interaction models, and visual quality without a big design bench.",
      "Shipped solutions across retail, ecommerce, automations, edtech, and healthtech; several startup clients went on to raise $20M+ in pre-seed rounds with product presentation as a clear advantage.",
      "Designed Whirlpool-related Bluetooth product experiences within a complex hardware-software context.",
      "Ran research, workshops, and delivery partnership with engineering from discovery through launch.",
    ],
  },
  {
    company: "IQVIS",
    role: "Senior UI/UX Designer",
    period: "Jan 2017 – Apr 2017",
    location: "Lahore",
    summary:
      "Designed internal and client-facing digital products while working to raise the design culture and craft standard inside the team.",
    bullets: [
      "Shipped healthcare and enterprise product work across research, prototyping, and UI.",
      "Pushed for stronger design practice and team culture — not just ticket-level delivery.",
    ],
  },
  {
    company: "TkXel",
    role: "UI/UX Designer",
    period: "Feb 2014 – Sep 2016",
    summary:
      "Started as a graphic designer and became the second person in the design department. That pairing became a full standalone design team. Worked with major brands spanning Pakistan and global markets.",
    bullets: [
      "Helped grow design from a two-person start into a standalone department with real delivery capacity.",
      "Designed for TCS Pakistan, Ford, Barclays, NBCUniversal, Astrology.com, SKGF, and other enterprise and consumer brands.",
      "Owned discovery, wireframing, prototyping, and stakeholder presentations across web and mobile.",
    ],
  },
  {
    company: "PopCorn",
    role: "Co-Founder",
    period: "Jan 2015 – Jan 2016",
    location: "Lahore",
    summary:
      "Co-founded a design and digital media agency. Shipped websites and brand work for consumer brands including Royal Balm and Fatburger.",
    bullets: [
      "Built the early studio model — pitching, designing, and delivering digital work for recognizable brands.",
      "Shipped web and digital media projects for Royal Balm, Fatburger, and other clients.",
    ],
  },
  {
    company: "Microsoft Innovation Center",
    role: "Intern",
    period: "Mar 2013 – Feb 2014",
    summary:
      "Supported technology innovation and software product development initiatives — an early footing in product, software, and shipping culture.",
  },
]

export const education = {
  school: "Bahria University",
  degree: "Bachelor of Science in Information Technology",
  focus: "Project Management",
  period: "2014 – 2018",
}
