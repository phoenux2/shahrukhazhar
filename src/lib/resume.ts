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
  source?: "linkedin" | "clutch" | "client"
  category?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Cody Farmer",
    title: "VP, Product",
    company: "Sendoso",
    relationship: "Cody worked with Shahrukh on the same team",
    date: "Jun 2022",
    source: "linkedin",
    text: "I worked directly with Shahrukh on several product-related design items in our time at Sendoso and can vouch directly that he can design good products. Some of the most intuitive and well-designed pages in Sendoso came directly under Shahrukh's vision and the teamwork we were able to establish. Shahrukh worked closely with engineering to make sure the designs came to life as intended.",
  },
  {
    name: "Teri Durkin",
    title: "Director, Product Design",
    company: "Sendoso",
    relationship: "Teri worked with Shahrukh on the same team",
    date: "Jul 2022",
    source: "linkedin",
    text: "Shahrukh delivered design work across all of the core areas of the Sendoso platform. He can ramp up and contribute rapidly in any domain and digs deep to understand a problem space. He is positive and collaborative and really enhances the team culture. Shahrukh consistently works hard to deliver good work.",
  },
  {
    name: "Matt Samson",
    title: "Ex Tech Director",
    company: "Sendoso",
    relationship: "Matt worked with Shahrukh on the same team",
    date: "Jun 2022",
    source: "linkedin",
    text: "I worked with Shahrukh for 11 months at Sendoso. What struck me most about his work was how effectively he solved many of our core user needs, often without direct input from user research. Having a Design colleague in Shahrukh who was extremely collaborative, creative, consistent, AND had an intuitive grasp for our users helped our team move faster whilst also increasing product excellence. I hope to work with Shahrukh again some day.",
  },
  {
    name: "Kris R.",
    title: "CEO",
    company: "",
    relationship: "Client endorsement",
    date: "Nov 2025",
    source: "client",
    category: "Product design",
    text: "Shahrukh and team are amazing at product design and one of the best I've worked with. He quickly understood the vision, asked smart questions, and translated ideas into clean, intuitive, polished Figma designs. His communication is clear, his turnaround time is fast, and he consistently adds thoughtful UX improvements that take the product to the next level. He's proactive, reliable, creative, and truly cares about delivering great work. I highly recommend him and will absolutely hire him again.",
  },
  {
    name: "Salina N.",
    title: "Project Manager / Principal",
    company: "Darul Qasim Academy",
    relationship: "Client endorsement",
    date: "Apr 2026",
    source: "client",
    category: "Branding and print design",
    text: "After many months looking for the right fit for our small company, Shahrukh and his wonderful team were recommended to us. As a private high school based out of Illinois, USA, I was very impressed with our flyers, posters, prospectus and letterhead designs. The teams are creative, hard working and produce high quality work; the designs are modern as well as aesthetically pleasing, the copy is grammatically accurate and noteworthy. They respond well to feedback but maintain the integrity of their design and complete work to your deadline even with a short turnover time (my fault not theirs). Whether you are working on a marketing campaign, websites or anything design related I highly, highly recommend this group of talented individuals to provide a polished professional product.",
  },
  {
    name: "Braydan Young",
    title: "CEO",
    company: "SlashExperts",
    relationship: "Clutch review · Web design for peer-conversation platform",
    date: "Nov 2025",
    source: "clutch",
    category: "Web design",
    text: "We've been impressed with their quality of work. The team’s speed and quality of design stood out — positive feedback, actionable results, on-time delivery, and weekly updates.",
  },
  {
    name: "Dr. Fauzia Rahman",
    title: "Marketing Director",
    company: "Darul Qasim College",
    relationship: "Clutch review · Web design for Islamic college",
    date: "Jan 2026",
    source: "clutch",
    category: "Web design",
    text: "The team is amazing, very reliable, and has a strong work ethic. More engagement with the website, a more user-friendly interface, a refined design, a raised aesthetic, and a clearer brand — with reliable communication throughout.",
  },
  {
    name: "Executive",
    title: "Unlayer",
    company: "Unlayer",
    relationship: "Clutch review · UX/UI & graphic design",
    date: "Oct 2025",
    source: "clutch",
    category: "UX/UI design",
    text: "Always delivered on time. Impressed with the agility, responsiveness, and design work — partners communicate mainly through Slack.",
  },
]
