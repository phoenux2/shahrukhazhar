export const profile = {
  name: "Shahrukh Azhar",
  nameUrdu: "شاہ رخ اظہر",
  monogram: "SA",
  title:
    "Product Designer & Design Leader",
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
    "Hey, I'm Shahrukh. I'm a product designer with 12+ years working on B2B SaaS, enterprise platforms, and AI products. I founded Phoenux.Design in 2019 — a design studio that embeds with product teams. Before that, I was Lead Product Designer at Unlayer (YC W22) and Senior Product Designer at Sendoso during their $100M raise.",
  highlight:
    "I operate from a simple priority: people, design, money — in that order.",
}

export const outsideWork = {
  intro:
    "Who I am when the Figma file is closed.",
  lines: [
    "I'm a father.",
    "I play table tennis. A lot. I'm pretty good at it.",
    "I'm really into cars.",
    "I geek out about renewable energy.",
    "We run Phoenux a bit like Dunder Mifflin. I'm probably the Michael Scott.",
    "I'm type 1 diabetic. It's pushed my limits more than almost anything else. Without it, I might have been just a normal kid doing normal things.",
  ],
}

export const focusAreas = [
  "Product & UX Strategy",
  "Design Leadership",
  "Design Systems & Ops",
  "B2B & Enterprise Products",
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
    line: "Senior Product Designer during $100M raise. Gifting platform, Cameo integration, Salesforce apps.",
  },
  {
    name: "Whirlpool",
    region: "us",
    line: "Bluetooth product experiences. Only designer among 40+ engineers.",
  },
  {
    name: "Dealpath",
    region: "us",
    line: "Commercial real estate SaaS. Phoenux engagement.",
  },
  {
    name: "Listen Labs",
    region: "us",
    line: "Generative AI products. Phoenux engagement.",
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
      "Founded Phoenux in 2019. We embed design teams with product companies — helping founders and PMs ship better products faster. Clients include Foodics, STC, Dealpath, Listen Labs, and several enterprise/ServiceNow projects across North America and the Gulf.",
    bullets: [
      "Hired and placed designers inside client orgs where they work as part of the product team.",
      "Recent work: enterprise platforms, F&B tech, generative AI products, and compliance software.",
      "Run the studio on a simple principle: people, design, money — in that order.",
    ],
  },
  {
    company: "Ferd.AI",
    role: "Founder",
    period: "Oct 2024 – Present",
    current: true,
    summary:
      "Started building an AI agent for design ops and front-end development. The first version got overtaken by how fast AI moved. Taking a pause to rethink it — will pick it back up when the timing is right.",
  },
  {
    company: "Unlayer",
    role: "Lead Product Designer",
    period: "Aug 2022 – Jan 2026",
    location: "United Arab Emirates",
    badge: "YC W22",
    summary:
      "Joined as a product designer, grew into leading design for the entire platform. Unlayer is one of the most widely adopted email and page builders — used by SaaS and enterprise teams worldwide. Managed the template design team and rethought the core product experience for developers and power users.",
  },
  {
    company: "Sendoso",
    role: "Senior Product Designer",
    period: "Oct 2019 – Jul 2022",
    location: "Phoenix, AZ",
    summary:
      "Joined during Sendoso's $100M raise. Designed across the gifting platform — fulfillment, integrations, Salesforce apps, and recipient experiences. Co-created the Cameo integration (imagine waking up to a Snoop Dogg birthday video with your gift). The feature drove major product marketing momentum, even when commercial outcomes were mixed.",
  },
  {
    company: "Tintash",
    role: "Senior UI/UX Designer",
    period: "Feb 2019 – Oct 2019",
    location: "Lahore, Pakistan",
    summary:
      "Designed web and mobile products for international clients. Ran a lot of POC work to help pre-sales land new engagements.",
  },
  {
    company: "Kwanso",
    role: "Senior UX Designer",
    period: "May 2017 – Jan 2019",
    summary:
      "The only designer in a team of 40+ engineers. Shipped retail, ecommerce, edtech, and healthtech products. Several startup clients went on to raise $20M+ pre-seed rounds. Also designed Bluetooth product experiences for Whirlpool.",
  },
  {
    company: "TkXel",
    role: "UI/UX Designer",
    period: "Feb 2014 – Sep 2016",
    summary:
      "Started as a graphic designer, became the second person in the design department. Grew it into a full team. Designed for TCS Pakistan, Ford, Barclays, NBCUniversal, and other enterprise and consumer brands.",
  },
  {
    company: "PopCorn",
    role: "Co-Founder",
    period: "Jan 2015 – Jan 2016",
    location: "Lahore",
    summary:
      "Co-founded a design and digital media agency. Shipped websites and brand work for Royal Balm, Fatburger, and other clients.",
  },
]

export const education = {
  school: "Bahria University",
  degree: "Bachelor of Science in Information Technology",
  focus: "Project Management",
  period: "2014 – 2018",
}

export type Testimonial = {
  name: string
  title: string
  company: string
  relationship: string
  date: string
  text: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Greg N.",
    title: "CEO",
    company: "Sendoso",
    relationship: "Greg managed Shahrukh directly",
    date: "Apr 2025",
    text: "Shahrukh and team are amazing at turning product ideas into design. They are fast and reliable, have a good grasp of UX qualities, and translated clean lines into my latest startup product idea. I constantly seek thoughtful UX designs, and Shahrukh delivers. He is diligent, passionate, curious about achieving great work, inquiry driven, and I appreciate working with him and his team.",
  },
  {
    name: "Jack Kearney III",
    title: "Founder, CEO",
    company: "Listen Labs",
    relationship: "Jack worked with Shahrukh on the same team",
    date: "Apr 2025",
    text: "Shahrukh delivered stellar work across all of our product lines. His designs were consistently both visually beautiful, and functionally clean. His flow and UX consistency was thoughtful. He was reliable and easy to work with, and met every deadline in our build. I very much appreciated working with him, and would eagerly do so again.",
  },
  {
    name: "Daniel S.",
    title: "VP, Product at Dealpath",
    company: "Dealpath",
    relationship: "worked with Shahrukh but on different teams",
    date: "Apr 2025",
    text: "I worked with Shahrukh for 17 months at Dealpath. Shahrukh took on an ambitious project in a VERY niche and complex domain (commercial real estate finance) and cranked through years' worth of features. When PRs felt like it would take 3 months to prep, he would bust them out in 3 weeks. His secret weapon is outstanding design sense that will take apart any product for a team in an afternoon. Imagine a guy who can look at a bunch of buttons, text, and concepts with a sharpie and magically show you the future of your product that quickly gets traction. Shahrukh is somehow that rare combo of designer who thinks like a product strategist. They mentioned this group of us is highly recommend this group of features.",
  },
  {
    name: "Moiz Ali",
    title: "Creative Director, Digital Consultant",
    company: "",
    relationship: "Moiz worked with Shahrukh but on different teams",
    date: "Jan 2020",
    text: "I've had the pleasure of working with Shahrukh on several projects and cannot recommend him highly enough for his technical and design skills — Shahrukh is one of the most thoughtful, methodical, and business savvy product designers I've had the chance to collaborate with. He proactively thinks through the best use of UX patterns/design solutions as opposed to blindly making requests to stakeholders. They mentioned we are constantly getting praise from clients about his work, and how much he elevates their products. I highly recommend any PM/team who collaborates with Shahrukh will quickly see why he's a cut above most designers.",
  },
]
