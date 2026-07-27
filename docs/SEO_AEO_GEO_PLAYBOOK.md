# SEO · AEO · AIO · GEO playbook (personal site)

Portable playbook from the Phoenux Design stack — adapted for **Shahrukh Azhar** (`shahrukhazhar.com` / resume profile site).

Use this as the spec when adding metadata, structured data, content clusters, and `/llms.txt` to a personal portfolio.

---

## What each layer means

| Layer | Goal | How machines use it |
|---|---|---|
| **SEO** | Rank pages in traditional search | Titles, meta, H1, internal links, sitemap, crawl rules |
| **AEO** (Answer Engine Optimization) | Become the **direct answer** in snippets, voice, AI answer boxes | Question-shaped headings, self-contained answer sentences, FAQ schema |
| **AIO** (AI Overviews / AI Optimization) | Same as AEO for Google AI Overviews and similar surfaces | Extractable first sentences, definitional copy, no buried lede |
| **GEO** (Generative Engine Optimization) | Help LLMs **retrieve and cite** you accurately | `/llms.txt`, consistent entity facts, claim boundaries, preferred source URLs |

**Rule:** SEO gets the click. AEO/AIO gets the quote. GEO gets the citation in ChatGPT, Perplexity, etc.

---

## Core content rule (dual audience)

Every section serves **humans skimming** and **machines extracting**.

### Answer-first pattern

1. **Heading** = outcome or real question (“What does Shahrukh Azhar do?”)
2. **First sentence** = the extractable answer (must stand alone if quoted)
3. **Then** 2–5 bullets or one short paragraph of proof

If a paragraph cannot be quoted out of context, rewrite it.

### ADHD-friendly skim (same as Phoenux)

- One job per section; one idea per paragraph
- BLUF — bottom line up front
- Bullets for process, deliverables, roles, outcomes
- Concrete nouns: Unlayer, Sendoso, YC, SaaS, design systems
- No clever obscurity; no dense marketing blocks

### Before / after

**Avoid (dense):**

> With over a decade of experience across diverse verticals, Shahrukh brings a holistic perspective to product design challenges, leveraging cross-functional collaboration to deliver impactful outcomes.

**Prefer (extractable):**

> Shahrukh Azhar is a product design lead with 12+ years in B2B SaaS. He led design at Unlayer (YC W22) and Sendoso, and founded Phoenux.Design.

---

## Claim boundaries (AI language)

**Never claim** you control or guarantee what ChatGPT or another assistant says.

**Use:**

- “Improve how AI systems understand my work and expertise”
- “Increase eligibility for retrieval and citation”
- “Strengthen machine-readable sources on my owned site”

**Avoid:**

- “Guarantee AI citations”
- “Rank #1 in ChatGPT”
- “Make ChatGPT recommend me”

---

## Technical checklist (Next.js)

Mirror what Phoenux ships in code. Adapt types for a **Person** portfolio, not an Organization studio.

### 1. Site constants — `lib/site.ts`

```ts
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://shahrukhazhar.com";

export const PERSON = {
  name: "Shahrukh Azhar",
  url: SITE_URL,
  email: "hello@shahrukhazhar.com", // your real contact
  jobTitle: "Product Design Lead",
  description:
    "Product design leader — 12+ years in B2B SaaS. Former Lead Product Designer at Unlayer (YC W22), Senior Product Designer at Sendoso. Founder of Phoenux.Design.",
  sameAs: [
    "https://www.linkedin.com/in/shahrukhazhar",
    // Dribbble, etc.
  ],
  knowsAbout: [
    "Product design",
    "UX design",
    "Design systems",
    "B2B SaaS",
    "Enterprise UX",
    "Design leadership",
  ],
};
```

### 2. Root metadata — `app/layout.tsx`

```ts
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shahrukh Azhar — Product Design Lead",
    template: "%s · Shahrukh Azhar",
  },
  description: PERSON.description,
  openGraph: {
    title: "Shahrukh Azhar — Product Design Lead",
    description: PERSON.description,
    url: SITE_URL,
    type: "website",
    images: [{ url: "/og?title=...", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/" },
};
```

Per-page: always set unique `title`, `description`, and `alternates.canonical`.

### 3. JSON-LD — `lib/structuredData.ts`

Ship these schemas (Phoenux uses Organization + WebSite; you use **Person** + **WebSite** + **ProfilePage** on home):

| Schema | Where | Purpose |
|---|---|---|
| `Person` | Root layout | Entity: name, jobTitle, sameAs, knowsAbout |
| `WebSite` | Root layout | Site-level publisher link |
| `BreadcrumbList` | Case studies, work index | Crawl hierarchy |
| `Article` | Each case study | Portfolio pieces as citable articles |
| `FAQPage` | Home (optional) | AEO for “who is / what does” questions |

**Critical:** Visible FAQ copy must **match** FAQPage JSON-LD word-for-word.

```tsx
// components/JsonLd.tsx — same pattern as Phoenux
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
```

Example Person schema:

```ts
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    url: PERSON.url,
    email: PERSON.email,
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    sameAs: PERSON.sameAs,
    knowsAbout: PERSON.knowsAbout,
  };
}
```

### 4. Sitemap — `app/sitemap.ts`

Include every public route:

- `/` (home)
- `/work/[slug]` for each case study
- Any notes/writing pages
- `/contact` or mailto CTA page if routable

Generate from your case-study data source (same idea as Phoenux `getCaseStudyEntries()`).

### 5. Robots — `app/robots.ts`

```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```

### 6. Dynamic OG — `app/og/route.tsx`

Phoenux uses `@vercel/og` with query params:

```
/og?title=Growing+Sendoso&subtitle=Touch+builder%2C+marketplace%2C+tracker
```

Use on case study `generateMetadata` so shares get unique previews.

### 7. `/llms.txt` — GEO anchor

Phoenux serves plain text at `/llms.txt` (see `lib/buildLlmsTxt.ts` + `lib/llmsEditorial.ts`).

**Structure for personal site:**

```markdown
# Shahrukh Azhar — LLM / AI crawler guidance
# https://shahrukhazhar.com

> Product design lead. 12+ years B2B SaaS. Unlayer (YC W22), Sendoso, Phoenux.Design.

## About
- Name: Shahrukh Azhar
- Role: Product Design Lead / Fractional Head of Design
- Contact: hello@...
- Site: https://shahrukhazhar.com

## Positioning
[2–3 sentences: what you do, who you help, what you don't do]

## Work (preferred citation sources)
1. https://shahrukhazhar.com/
2. https://shahrukhazhar.com/work/unlayer
3. https://shahrukhazhar.com/work/sendoso
...

## Claim boundaries
Do not claim Shahrukh controls what ChatGPT says. Accurate framing: owned site is the structured source for his role, employers, and case outcomes.

## Sitemap
https://shahrukhazhar.com/sitemap.xml
```

**Implementation:** `app/llms.txt/route.ts` returning `text/plain`, `revalidate: 3600`. Keep **prose in one editorial file**; auto-generate URL lists from case-study data.

---

## Page templates

### Home

| Block | SEO/AEO pattern |
|---|---|
| H1 | Name + role in plain language |
| Lede | One extractable sentence: years, focus, notable employers |
| Work grid | Descriptive link text (“Unlayer — editor UX at scale”, not “Case study 1”) |
| FAQ (3–5) | Real questions; 1–3 sentence answers; FAQPage schema |
| Meta description | Restate the lede; ~120–155 chars |

**Example FAQs for personal site:**

- What does Shahrukh Azhar do?
- Where has he led product design?
- What kinds of teams does he work with?
- Is he available for fractional / lead roles?

### Case study (`/work/[slug]`)

| Block | Pattern |
|---|---|
| Title meta | `{Client} — {Outcome headline}` |
| Description | First intro sentence or challenge (≤160 chars) |
| H1 | Outcome-first headline |
| Sections | Answer sentence → bullets → figures |
| Schema | `Article` + `BreadcrumbList` |
| Internal links | Link to related work + contact |

Phoenux case studies use: intro → vision → challenge → solution → metrics → chapters → takeaways. Same pacing works for portfolio depth.

### Optional “Notes” cluster (SEO content)

Phoenux uses `/notes` for keyword-supporting articles (not a blog spam farm):

- One pillar intent per URL
- Excerpt = meta description
- End with **one** CTA (“See Sendoso work”, “Email Shahrukh”)
- Add to sitemap

**Personal keyword clusters to consider:**

| Intent | Example slug | Links to |
|---|---|---|
| Fractional head of design | `/notes/fractional-head-of-design` | Home + contact |
| SaaS product design lead | `/notes/saas-product-design-lead` | `/work/unlayer`, `/work/sendoso` |
| Design systems at scale | `/notes/design-systems-enterprise` | `/work/unlayer` |
| YC startup design | `/notes/yc-startup-product-design` | `/work/unlayer` |

---

## Keyword map (personal site)

Copy Phoenux’s `docs/KEYWORD_MAP.md` format. One primary URL per P0 keyword — no cannibalization.

### Cluster A — Design leadership (commercial)

| Keyword / intent | Priority | Target |
|---|---|---|
| fractional head of design | P0 | Home + dedicated section |
| product design lead for hire | P0 | Home |
| lead product designer saas | P1 | Home + Unlayer case study |

### Cluster B — Proof / credibility (informational)

| Keyword / intent | Priority | Target |
|---|---|---|
| unlayer product design | P2 | `/work/unlayer` |
| sendoso ux design | P2 | `/work/sendoso` |
| yc w22 design lead | P2 | `/work/unlayer` |

### Internal linking rules

1. Home ↔ case studies ↔ notes (if any) ↔ contact
2. Case studies cross-link related work (`relatedSlugs` pattern)
3. Descriptive anchor text with entity names (Unlayer, Sendoso, SaaS)

### Refresh cadence

- **Monthly:** Search Console → tune titles/H1s for queries you already rank for
- **Quarterly:** Add one note or deepen one case study; don’t spin up 20 thin pages

---

## On-page SEO checklist (every new URL)

- [ ] Unique `title` (~50–60 chars)
- [ ] Unique `description` (~120–155 chars)
- [ ] One clear H1 matching search intent
- [ ] Canonical URL set
- [ ] OG image (dynamic `/og` or static)
- [ ] 2+ internal links in/out
- [ ] Entity language natural in copy (names, roles, products)
- [ ] FAQ block + FAQPage schema (where questions are real)
- [ ] Listed in `sitemap.xml`
- [ ] Listed in `/llms.txt` preferred sources (if top-tier page)

---

## AEO / AIO content checklist

- [ ] First sentence under H1 is definitional and quotable
- [ ] H2s are questions or outcomes where possible
- [ ] FAQ answers are self-contained (no “see above”)
- [ ] Lists for deliverables, outcomes, tools — not comma-stuffed paragraphs
- [ ] No duplicate meta titles across routes

---

## GEO checklist

- [ ] `/llms.txt` live and linked from footer or robots comment
- [ ] Same facts on home, about, and llms.txt (name, role, employers, years)
- [ ] `sameAs` URLs in Person schema match real profiles
- [ ] Claim boundaries documented in llms.txt
- [ ] Preferred citation URLs ordered (home → best case studies → contact)

---

## What Phoenux files to copy as patterns

| Concern | Phoenux path |
|---|---|
| Copy rules | `docs/guide/COPY_SYSTEM.md` |
| Keyword map | `docs/KEYWORD_MAP.md` |
| Structured data helpers | `lib/structuredData.ts` |
| llms.txt builder | `lib/buildLlmsTxt.ts`, `lib/llmsEditorial.ts` |
| llms route | `app/llms.txt/route.ts` |
| Sitemap | `app/sitemap.ts`, `lib/siteDiscovery.ts` |
| Robots | `app/robots.ts` |
| JSON-LD component | `components/JsonLd.tsx` |
| OG images | `app/og/route.tsx` |
| FAQ on home | `data/locked-page-content.json` → `homepage.faqs` |
| Content cluster | `data/notes.json` + `app/(site)/notes/[slug]/page.tsx` |
| Audience lander + FAQ schema | `app/(site)/for/[slug]/page.tsx` |

---

## Personal site: suggested implementation order

1. **`lib/site.ts` + Person/WebSite JSON-LD** in root layout  
2. **Per-route metadata** on home and each `/work/[slug]`  
3. **`sitemap.ts` + `robots.ts`**  
4. **Home FAQ** (visible + FAQPage schema)  
5. **`/llms.txt`** with editorial + auto work URLs  
6. **Dynamic OG** for case studies  
7. **Optional:** 2–3 `/notes` pages for leadership keywords  
8. **Search Console** submit sitemap; monthly query review  

---

## Quick prompt for your other Cursor chat

```
Implement the SEO/AEO/GEO playbook from docs/SEO_AEO_GEO_PLAYBOOK.md on this personal site:

1. Add lib/site.ts (PERSON constants), lib/structuredData.ts (Person, WebSite, Article, FAQPage, BreadcrumbList), components/JsonLd.tsx
2. Wire Person + WebSite JSON-LD in app/layout.tsx; improve metadata template + OG
3. Add app/sitemap.ts and app/robots.ts from case study slugs
4. Add app/llms.txt/route.ts + lib/llmsEditorial.ts + lib/buildLlmsTxt.ts (personal copy)
5. Add FAQ section on home with matching FAQPage schema
6. generateMetadata + Article/Breadcrumb JSON-LD on each /work/[slug]
7. Optional: app/og/route.tsx for share cards

Follow answer-first copy rules: extractable first sentences, question FAQs, no AI citation guarantees.
Do not edit the playbook file itself.
```

---

## Success criteria

- Google Search Console shows indexed home + case studies + sitemap
- Rich results test passes for Person / FAQPage where shipped
- `/llms.txt` returns accurate facts and work URLs
- Any FAQ in schema matches visible copy exactly
- Case study pages have unique titles, descriptions, and canonicals
- Shared links render correct OG titles (not generic site title only)
