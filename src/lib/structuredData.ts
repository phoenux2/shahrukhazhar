import { PERSON, SITE_URL } from "@/lib/site"

type Faq = { question: string; answer: string }

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
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: PERSON.name,
    description: PERSON.description,
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  }
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `${PERSON.name} — ${PERSON.jobTitle}`,
    description: PERSON.description,
    mainEntity: { "@id": `${SITE_URL}/#person` },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function caseStudyJsonLd(input: {
  name: string
  description: string
  path: string
  company: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    about: {
      "@type": "Organization",
      name: input.company,
    },
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    mainEntityOfPage: `${SITE_URL}${input.path}`,
  }
}
