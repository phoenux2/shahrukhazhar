export type CaseStudyFigure = {
  src: string
  alt: string
  caption?: string
}

export type CaseStudySection = {
  title: string
  body: string[]
  bullets?: string[]
  figures?: CaseStudyFigure[]
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  company: string
  role: string
  year: string
  tags: string[]
  cover: string
  summary: string
  challenge: string
  outcome: string[]
  sections: CaseStudySection[]
  figmaNodeId: string
  /** Full-bleed PDF / document sequence — preserves image order and aspect */
  presentation?: "default" | "document"
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "unlayer",
    title: "Unlayer",
    subtitle: "Scaling a YC Product to Global Enterprise Standards",
    company: "Unlayer (YC W22)",
    role: "User Research · Surveys · Journey Mapping · Wireframing · Screen Flows · Visual Design · Interaction Design",
    year: "2022-25",
    tags: ["Editor UX", "Design Systems", "Enterprise SaaS", "AI"],
    cover: "/case-studies/unlayer/cover.png",
    presentation: "document",
    summary:
      "Trusted by companies like Netflix, Bank of America, and Fidelity, Unlayer is one of the leading embeddable email builders in the U.S. I helped modernize its core experience—refining the editor, accelerating innovation, and improving usability at scale.",
    challenge:
      "When I joined, the product had strong technical foundations but minimal design maturity. It had been built by developers, for developers. Studio attracted users, but revenue and long-term value were clearly in Embed.",
    outcome: [
      "Less Tickets — reduced support tickets around image resizing and editing",
      "Discoverability — improved discoverability of controls",
      "Intuitiveness — cleaner editing experience with fewer user errors",
      "Scalablity — stronger enterprise credibility",
      "Increased average ticket size",
      "Clearer packaging of premium capabilities",
      "Better alignment between product usage and revenue",
    ],
    figmaNodeId: "485:819",
    sections: [
      {
        title: "Hero",
        body: [],
        figures: [
          {
            src: "/case-studies/unlayer/figma/01-hero-collage.png",
            alt: "Unlayer embed editor and product collage",
          },
        ],
      },
      {
        title: "Overview",
        body: [
          "Unlayer provides an embeddable email editor SDK used by major enterprises. When I joined, the product had strong technical foundations but minimal design maturity. It had been built by developers, for developers.",
          "The company had two parallel directions: Unlayer Studio (B2C): A Canva-like standalone editor for individuals. Unlayer Embed (B2B): A white-labeled SDK integrated into enterprise platforms.",
          "While Studio attracted users, revenue and long-term value were clearly in Embed.",
          "My mandate was to take design ownership, define direction, and elevate the product to enterprise-grade quality.",
        ],
        figures: [
          {
            src: "/case-studies/unlayer/figma/02-overview-collage.png",
            alt: "Unlayer product collage — Studio and Embed surfaces",
          },
        ],
      },
      {
        title: "Phase 1 — Defining Vision & Design Foundation",
        body: [
          "Before touching the UI, I worked with stakeholders to clarify product vision.",
          "Through brand workshops and alignment sessions, we extracted a core direction:",
          "Make email design accessible. Anyone should be able to design beautifully, without expertise.",
          "From this, we defined:",
        ],
        bullets: [
          "Visual tone and product personality",
          "Accessibility standards",
          "UI principles",
          "Foundations of a scalable design system",
        ],
      },
      {
        title: "Phase 2 — Modernizing the Core Editor (Without Breaking It)",
        body: [
          "The editor was the heart of the product but it was fragile, developer-built, and complex. The engineering team was understandably protective.",
          "Instead of proposing a risky rebuild, I introduced a low-friction strategy",
          "Phase 1: Reskin and modernize",
          "Phase 2: Improve interaction patterns gradually",
          "Once visual trust was established, I began improving usability.",
        ],
        bullets: [
          "Refined typography and hierarchy",
          "Fixed accessibility issues (contrast, states, consistency)",
          "Standardised components",
          "Introduced subtle micro-interactions",
        ],
        figures: [
          {
            src: "/case-studies/unlayer/figma/03-editor-reskin.png",
            alt: "Editor ReSkin — 16 June 2023",
            caption: "Editor ReSkin",
          },
        ],
      },
      {
        title: "Outcome",
        body: [],
        bullets: [
          "Less Tickets — Reduced support tickets around image resizing and editing",
          "Discoverability — Improved discoverability of controls",
          "Intuitiveness — Cleaner editing experience with fewer user errors",
          "Scalablity — Stronger enterprise credibility",
        ],
      },
      {
        title: "Usability Audit",
        body: [
          "I did a brief usability audit of editor when we joined the company and found some very obvious issues. I also did asked our in house power user to share their frustration they face in their daily usage. Also did some high level competitor analysis to see whats working for them.",
        ],
        figures: [
          {
            src: "/case-studies/unlayer/figma/04-usability-shots.png",
            alt: "Usability audit — documented issues and Miro board",
          },
          {
            src: "/case-studies/unlayer/figma/05-usability-compare-1.png",
            alt: "Usability audit — before and after control patterns",
          },
          {
            src: "/case-studies/unlayer/figma/06-usability-compare-2.png",
            alt: "Usability audit — interaction and component refinements",
          },
        ],
      },
      {
        title: "Phase 3 — Designing AI Adoption (Before AI Was Easy)",
        body: [
          "Unlayer introduced generative image AI into the editor.",
          "The problem: Users were not familiar with prompt writing. They treated it like Unsplash search typing short phrases and generating poor results. This caused: Low satisfaction, High credit burn, Increased infrastructure cost.",
          "A classic UX literacy problem",
          "My Approach to Solution — Structured Prompt Workflow. Instead of a single input field, I redesigned the experience.",
          "This flow: User describes intent in simple language → System rewrites the prompt into an enhanced version → User chooses from refined prompt options → User selects visual style → Image is generated.",
          "This flow: Reduced failed attempts, Reduced credit waste, Increased quality of output.",
        ],
        figures: [
          {
            src: "/case-studies/unlayer/figma/07-phase3-ai.png",
            alt: "Generative image AI in the Unlayer editor",
          },
          {
            src: "/case-studies/unlayer/figma/08-phase3-phone.png",
            alt: "AI-assisted email preview on mobile",
          },
        ],
      },
      {
        title: "Phase 4 — Console & Monetization Strategy",
        body: [
          "As the company shifted focus fully to Embed, the Console became central.",
          "The Console managed: Domain publishing, API keys, Templates, Team collaboration, Custom fonts, Feature controls.",
          "Then, we introduced structured upsells inside the product: Locked premium templates, Custom domains as upgrade triggers, Team collaboration tiers, Custom fonts, Advanced features behind plan walls.",
          "I restructured navigation and information architecture to support scalability and developer-first positioning.",
          "Instead of aggressive paywalls, we used contextual upgrade nudges tied to user intent.",
        ],
        figures: [
          {
            src: "/case-studies/unlayer/figma/09-console-overview.png",
            alt: "Unlayer Console overview — projects and builders",
          },
          {
            src: "/case-studies/unlayer/figma/10-console-builders.png",
            alt: "Console builders and project workspace",
          },
          {
            src: "/case-studies/unlayer/figma/11-console-domains.png",
            alt: "Custom domains upgrade surface",
          },
          {
            src: "/case-studies/unlayer/figma/12-console-features.png",
            alt: "Additional features and plan comparison",
          },
          {
            src: "/case-studies/unlayer/figma/13-console-templates.png",
            alt: "Premium template add-on upsell",
          },
        ],
      },
      {
        title: "Result",
        body: [],
        bullets: [
          "Increased average ticket size",
          "Clearer packaging of premium capabilities",
          "Better alignment between product usage and revenue",
        ],
      },
      {
        title: "Phase 5 — Studio → Embed Strategic Shift",
        body: [
          "Unlayer Studio (B2C) required heavy marketing investment and showed limited conversion.",
        ],
        figures: [
          {
            src: "/case-studies/unlayer/figma/14-phase5-projects.png",
            alt: "Embed console — projects and builder tiles",
          },
          {
            src: "/case-studies/unlayer/figma/15-phase5-dropdown.png",
            alt: "Embed console — project and builder navigation",
          },
          {
            src: "/case-studies/unlayer/figma/16-phase5-customize.png",
            alt: "Customization centre — fonts, colors, and branding",
          },
          {
            src: "/case-studies/unlayer/figma/17-phase5-storage.png",
            alt: "Add file storage — Amazon S3 configuration",
          },
          {
            src: "/case-studies/unlayer/figma/18-phase5-builders.png",
            alt: "Create a project — builder selection",
          },
        ],
      },
    ],
  },
  {
    slug: "sendoso",
    title: "Growing Sendoso",
    subtitle: "Teams & Users — enterprise-ready identity inside a gifting platform",
    company: "Sendoso",
    role: "Senior Product Designer",
    year: "2019 – 2022",
    tags: ["B2B SaaS", "IA", "Enterprise", "Design System"],
    cover: "/case-studies/sendoso/hero.jpg",
    summary:
      "A look at how a small multi-disciplinary team iteratively built solutions that helped Sendoso achieve user goals — focusing on Teams & Users so ops managers could assign roles quickly and keep license utilization healthy.",
    challenge:
      "There was no single place to view all users on the platform regardless of team. CX had to pull lists manually via Active Admin. Many customers were over their seat limit with no in-product nudge to upgrade. Teams & Users needed a clearer home in the IA so findability matched its importance.",
    outcome: [
      "Moved Teams & Users into main navigation for discoverability",
      "Simplified IA so ops could manage teams and roles without friction",
      "Designed for license utilization, invite conversion, and enterprise scale",
      "Took wireframes to hi-fi through the Sendoso design system",
    ],
    figmaNodeId: "143:861",
    sections: [
      {
        title: "Design principles at Sendoso",
        body: [
          "I believe in a goal-driven and objective design process, where decisions can be justified using research and KPIs rather than opinion alone. At Sendoso that meant progressive disclosure, clear CTAs, obvious hierarchy, and doing tedious work for the user — only asking for what we need.",
        ],
        bullets: [
          "Use plain, understandable language; images reflect real people",
          "Adapt to different ways people need to interact with us",
          "Offer guidance through as few words as possible",
          "Provide data and insights that guide decisions in the context of a task",
        ],
      },
      {
        title: "Discovery to definition",
        body: [
          "After kick-off and reading the PRD, I deep-dived into live designs and ran sessions with the PM. We explored comparative analysis, HMW framing, and near-term commitments before wiring solutions.",
          "We needed a place where managers could manage teams and assign roles based on responsibilities — quick and simple so ops could focus on the work that matters.",
        ],
        figures: [
          {
            src: "/case-studies/sendoso/wire-1.png",
            alt: "Sendoso Teams & Users early wireframes",
            caption: "Wireframing after requirements alignment",
          },
          {
            src: "/case-studies/sendoso/wire-2.png",
            alt: "Sendoso role assignment wireframes",
            caption: "Exploring role assignment and invite flows",
          },
        ],
      },
      {
        title: "Hi-fidelity in the design system",
        body: [
          "Once wires were solid we moved to hi-fidelity using the Sendoso design system. Success metrics focused on invite conversion, license utilization, brand awareness of the feature, and enterprise-grade scalability for large teams.",
        ],
        figures: [
          {
            src: "/case-studies/sendoso/teams.png",
            alt: "Sendoso Teams & Users hi-fi interface",
            caption: "Teams & Users — findable, scannable, enterprise-ready",
          },
        ],
      },
    ],
  },
  {
    slug: "campaigns",
    title: "Reinventing Touches in Sendoso",
    subtitle:
      "From opaque touches to campaign-led sending — discovery through rollout",
    company: "Sendoso",
    role: "Product Strategy · UX Strategy · Research · Visual Design",
    year: "2022",
    tags: ["B2B SaaS", "Campaigns", "Research", "IA"],
    cover: "/case-studies/campaigns/cover.jpg",
    presentation: "document",
    summary:
      "An 8-month engagement reinventing how Sendoso users create and manage “touches.” Touches were hard to understand, costly to set up, and weak at mapping into CRM campaigns — driving low adoption and retention risk.",
    challenge:
      "Platform required too much time and effort with no strong self-serve model. Touches failed to map cleanly with CRM campaigns, education was thin, and design wasn’t intuitive — especially for new customers who needed more prescriptive guidance.",
    outcome: [
      "Hard gifts became roughly twice as easy to find in the new hierarchy during campaign creation",
      "Sentiment ~10–15% more positive toward the new hierarchy",
      "Participants immediately resonated with campaigns being assigned to them",
      "Users completed setup tasks faster without external help (funding, teams, domain)",
      "Handed off to engineering with full-scale rollout targeted for Fall 2022",
    ],
    figmaNodeId: "3009:5420",
    sections: [
      {
        title: "Hero",
        body: [],
        figures: [
          {
            src: "/case-studies/campaigns/hero-product.jpg",
            alt: "Sendoso gifting bundle — reinventing touches",
          },
        ],
      },
      {
        title: "Problem Discovery",
        body: [
          "Being a market leader and category creator, Sendoso was trusted — but churn analysis and P0 selection surfaced a clear cluster: creating touches, low adoption, unintuitive design, weak education, CRM mapping failures, and low suggestive direction.",
          "All iterations were driven by measurable primary and secondary goals, supplemented by unique one-off goals around conversion (activated and retained users), experience quality, and retention.",
        ],
        bullets: [
          "Product Strategy",
          "UX Strategy / Planning",
          "Research Partner",
          "Information Architecture",
          "Visual Design Partner",
          "Usability Testing Partner",
          "Timeline: 8 months",
        ],
      },
      {
        title: "Research",
        body: [
          "Core research focused on user interviews, journey mapping with internal and external stakeholders, and analysis that turned interview data into a testable hypothesis for MVP use cases.",
          "N = 69 across design & PM experts, super senders, and naive users. Journey maps covered onboarding, funding, explore, enable, track, and manage — exposing where touches broke down across ABM, sales, marketing, HR, and admin roles.",
        ],
        figures: [
          {
            src: "/case-studies/campaigns/02-key-takeaways.png",
            alt: "Key research takeaways from exploratory research",
          },
          {
            src: "/case-studies/campaigns/03-opportunity.png",
            alt: "Opportunity statements and research results",
          },
        ],
      },
      {
        title: "Foundation before pixels",
        body: [
          "Before jumping into design, I partnered with product marketing, sales, and engineering to lock basic requirements. Studying Salesforce, HubSpot, Alyce, and other CRM / marketing automation tools helped uncover the 101 requirements to create and establish campaigns.",
        ],
        figures: [
          {
            src: "/case-studies/campaigns/04-foundation.png",
            alt: "Cross-functional foundation for campaign requirements",
          },
          {
            src: "/case-studies/campaigns/12-ia.png",
            alt: "IA — key action for campaigns",
          },
          {
            src: "/case-studies/campaigns/05-navigation.png",
            alt: "New navigation for Sendoso campaigns",
          },
        ],
      },
      {
        title: "Selected Wireframes",
        body: [
          "Wireframes explored campaign lists, creation, tracking, and detail views — making campaign structure scannable before visual design.",
        ],
        figures: [
          {
            src: "/case-studies/campaigns/06-wireframes.png",
            alt: "Selected campaign wireframes",
          },
        ],
      },
      {
        title: "Hi-fidelity & Prototype",
        body: [
          "Hi-fi campaign landing, marketplace, and creation flows brought the new hierarchy to life. Final prototype v1.0 was used for customer and stakeholder validation.",
        ],
        figures: [
          {
            src: "/case-studies/campaigns/08-campaign-landing.png",
            alt: "Campaign landing and sends hi-fidelity UI",
          },
          {
            src: "/case-studies/campaigns/09-prototype.png",
            alt: "Final prototype v1.0",
          },
        ],
      },
      {
        title: "What's Next",
        body: [
          "Campaigns were built and handed off to engineering. Initial customer response was strong, with more updates planned from research, sales, and marketing findings. Full-scale rollout expected Fall 2022.",
        ],
        figures: [
          {
            src: "/case-studies/campaigns/11-whats-next.png",
            alt: "What's next — handoff and Fall 2022 rollout",
          },
        ],
      },
    ],
  },
  {
    slug: "marketplace",
    title: "Sendoso Marketplace",
    subtitle:
      "In-app marketplace for local vendors — strengthening Sendoso Direct for global expansion",
    company: "Sendoso",
    role: "Product Strategy · UX Strategy · Research · Visual Design",
    year: "2022",
    tags: ["B2B SaaS", "Marketplace", "Ecommerce", "IA"],
    cover: "/case-studies/marketplace/cover.png",
    presentation: "document",
    summary:
      "I led the design of Marketplace (customer-facing). Sendoso Direct was already the second most popular touch type — 500K+ gifts in a recent month, ~$0.5M to local vendors in January 2022 alone — and with EU expansion ahead, we needed an in-app marketplace so senders and managers could choose from a wider range of local gift options.",
    challenge:
      "The current experience felt like an imposter marketplace: little or no search/filters/facets, weak vendor and country visibility, too much coupling with touches/campaigns instead of a standalone destination, and no multi-country support for local vendors after EU expansion.",
    outcome: [
      "Positioned Marketplace as the destination for searching and evaluating send options",
      "Enabled sending and send curation from Marketplace — closer to familiar ecommerce models",
      "Expanded local vendor empowerment and reduced warehouse burden",
      "Designed manager flows to create campaigns from marketplace items and filtered views",
      "Shipped customer-facing marketplace UI across browse, detail, and send flows",
    ],
    figmaNodeId: "3009:6683",
    sections: [
      {
        title: "Hero",
        body: [],
        figures: [
          {
            src: "/case-studies/marketplace/01-hero.png",
            alt: "Sendoso Marketplace case study hero",
          },
          {
            src: "/case-studies/marketplace/alt-hero.png",
            alt: "Marketplace product collage and gift options",
          },
        ],
      },
      {
        title: "Opportunity",
        body: [
          "We had seen ~50% growth in Sendoso Direct. More gifting options meant more sending strategies, empowerment of local vendors, less warehouse supply-chain burden, and a bigger revenue stream — especially critical with EU expansion in sight.",
        ],
        bullets: [
          "Product Strategy",
          "UX Strategy / Planning",
          "Research Partner",
          "Information Architecture",
          "Visual Design Partner",
          "Usability Testing Partner",
          "Timeline: 6 months",
        ],
      },
      {
        title: "Current state & research",
        body: [
          "Internal and external product surveys plus expert and user sessions clarified that Marketplace should be the destination for searching and evaluating send options — and that users would benefit from sending directly from Marketplace, just like other ecommerce models.",
          "Derived user stories covered managers creating campaigns from marketplace items, understanding which campaign a gift belongs to, and creating campaigns from filtered marketplace views.",
        ],
        figures: [
          {
            src: "/case-studies/marketplace/02-current-state.png",
            alt: "Current state — marketplace as an imposter experience",
          },
          {
            src: "/case-studies/marketplace/03-insights.png",
            alt: "Research insights and key takeaways",
          },
          {
            src: "/case-studies/marketplace/04-ia.png",
            alt: "Information architecture for marketplace key actions",
          },
        ],
      },
      {
        title: "Marketplace product design",
        body: [
          "Designed browse, category, and detail experiences so vendors could surface products with clear country and inventory context — including wine & spirits and full item detail views connected to send flows.",
        ],
        figures: [
          {
            src: "/case-studies/marketplace/05-marketplace-ui.png",
            alt: "Marketplace browse and category UI",
          },
          {
            src: "/case-studies/marketplace/06-wine.png",
            alt: "Marketplace wine and spirits category",
          },
          {
            src: "/case-studies/marketplace/07-item-detail.png",
            alt: "Marketplace item detail full view",
          },
          {
            src: "/case-studies/marketplace/08-home.png",
            alt: "Marketplace home — customer-facing experience",
          },
        ],
      },
    ],
  },
  {
    slug: "devnation",
    title: "DevNation",
    subtitle: "Designing an AI-powered learning platform for developers",
    company: "Client engagement",
    role: "Product Designer",
    year: "Case study",
    tags: ["EdTech", "Discovery", "IA", "AI Learning"],
    cover: "/case-studies/devnation/hero.jpg",
    summary:
      "DevNation is a learning platform designed to help developers grow through structured courses, mentorship, and community-driven learning. I worked across research, experience definition, and interface design to improve discovery, clarity, and engagement.",
    challenge:
      "As the platform expanded, users struggled to understand which learning paths were relevant and how to evaluate content quickly. The experience felt dense, text-heavy, and overwhelming — especially early in the journey, despite valuable content underneath.",
    outcome: [
      "Helped users understand relevance faster when choosing a learning path",
      "Reduced cognitive load during discovery",
      "Made progress and outcomes more visible",
      "Aligned journeys from onboarding through course completion for students and instructors",
    ],
    figmaNodeId: "123:13308",
    sections: [
      {
        title: "Research signals",
        body: [
          "A few clear patterns emerged during research. Despite offering valuable content, users faced friction early. Surveys, interviews, and journey mapping shaped how-might-we questions for both students and instructors.",
        ],
        bullets: [
          "Help students choose their career path",
          "Provide seamless asynchronous teaching for instructors",
          "Make learning more engaging and competitive",
          "Ensure discoverability of lectures",
          "Incentivize teachers to encourage learners",
        ],
        figures: [
          {
            src: "/case-studies/devnation/research.png",
            alt: "DevNation research and survey synthesis",
            caption: "Surveys & user interviews",
          },
        ],
      },
      {
        title: "Principles over complexity",
        body: [
          "Based on research, the experience focused on three core principles: helping users understand relevance faster, reducing cognitive load during discovery, and making progress and outcomes more visible. Rather than introducing new complexity, the goal was to remove friction and guide users through clearer choices.",
        ],
        figures: [
          {
            src: "/case-studies/devnation/flows.png",
            alt: "DevNation user journey flows",
            caption: "Mapped journeys from onboarding to course completion",
          },
        ],
      },
      {
        title: "Interface design",
        body: [
          "Exploration, ideation, and early validation led into wireframes, screen flows, visual design, and interaction design — keeping the experience flexible and scalable as the content library grew.",
        ],
        figures: [
          {
            src: "/case-studies/devnation/dashboard.jpg",
            alt: "DevNation learner dashboard with goals, activity, and career path",
            caption: "Learner dashboard — progress and outcomes made visible",
          },
        ],
      },
    ],
  },
  {
    slug: "imgry",
    title: "Imgry.com",
    subtitle: "Image automation for marketing teams that are not design experts",
    company: "Client engagement",
    role: "Product Designer",
    year: "Case study",
    tags: ["B2B", "Automation", "Editor UX", "Usability"],
    cover: "/case-studies/imgry/hero.png",
    summary:
      "Imgry is an emerging image automation, design, and publishing tool. This B2B product helps businesses boost marketing by creating image-based content from well-curated pre-made templates.",
    challenge:
      "There were almost no direct competitors for this exact product. Existing image automation tools (Canva-adjacent players like Bannerbear, Pixelied, Dynapictures, and others) had a steep learning curve and felt too technical. We had to balance simplicity for low-tech-savvy marketers with enough fidelity for intermediate designers and developers.",
    outcome: [
      "Validated demand through user research, market analysis, and discovery workshops",
      "Designed an MVP that stayed intuitive without stripping power",
      "Applied Jakob’s Law so onboarding matched familiar market patterns",
      "Iterated flows through unit and usability testing with strong task success signals",
    ],
    figmaNodeId: "247:15634",
    sections: [
      {
        title: "Preliminary research",
        body: [
          "Since the product was new, user research tested whether there was substantial demand. Market analysis mapped what platforms target users already relied on, and discovery workshops with the client finalized MVP scope, layouts, and intuition bets.",
        ],
        figures: [
          {
            src: "/case-studies/imgry/niches.png",
            alt: "List of identified marketing niches for Imgry templates",
            caption: "List of identified niches",
          },
        ],
      },
      {
        title: "Competitor analysis & challenges",
        body: [
          "Competitor analysis covered direct and indirect players. Most existing automation tools were too technical — a UX and design challenge that pushed the team toward an interface that felt approachable first.",
          "The design philosophy leaned on standard UX principles, especially Jakob’s Law: users prefer your product to work like the sites they already know. Niches, moods, and template charts were extracted from survey and competitive data.",
        ],
        figures: [
          {
            src: "/case-studies/imgry/competitors.png",
            alt: "Imgry competitor landscape whiteboard",
            caption: "Competitor analysis workshop",
          },
        ],
      },
      {
        title: "Product surfaces",
        body: [
          "From landing and auth through the editor, dashboard, and pricing — each surface was designed to keep automation powerful without feeling like a developer tool.",
        ],
        figures: [
          {
            src: "/case-studies/imgry/home.png",
            alt: "Imgry application home",
            caption: "Application home",
          },
          {
            src: "/case-studies/imgry/editor.png",
            alt: "Imgry template editor",
            caption: "The editor",
          },
          {
            src: "/case-studies/imgry/dashboard.png",
            alt: "Imgry dashboard",
            caption: "Dashboard",
          },
        ],
      },
      {
        title: "Usability testing",
        body: [
          "Based on different use cases, prototypes and flows were tested with questionnaires. Responses shaped the next iteration — including frequency-of-use patterns across daily, weekly, and monthly cohorts.",
        ],
      },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export function getCaseStudySlugs() {
  return caseStudies.map((study) => study.slug)
}
