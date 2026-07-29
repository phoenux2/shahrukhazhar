import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  CaseStudyView,
  SiteChrome,
} from "@/components/case-study"
import JsonLd from "@/components/JsonLd"
import {
  getCaseStudy,
  getCaseStudySlugs,
  isCaseStudyPublished,
} from "@/lib/case-studies"
import {
  breadcrumbJsonLd,
  caseStudyJsonLd,
} from "@/lib/structuredData"
import { PERSON, SITE_URL } from "@/lib/site"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study || !isCaseStudyPublished(study)) return { title: "Case study" }

  const title = `${study.company} — ${study.title}`
  const ogImage = `/og?title=${encodeURIComponent(study.title)}&subtitle=${encodeURIComponent(study.subtitle)}`

  return {
    title,
    description: study.summary.slice(0, 160),
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      title: `${title} · ${PERSON.name}`,
      description: study.subtitle,
      url: `${SITE_URL}/work/${study.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630 }, { url: study.cover }],
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study || !isCaseStudyPublished(study)) notFound()

  const path = `/work/${study.slug}`

  return (
    <SiteChrome active="work">
      <JsonLd
        id={`work-${study.slug}-breadcrumb`}
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/#work" },
          { name: study.title, path },
        ])}
      />
      <JsonLd
        id={`work-${study.slug}-article`}
        data={caseStudyJsonLd({
          name: study.title,
          description: study.summary,
          path,
          company: study.company,
        })}
      />
      <main className="flex-1">
        <CaseStudyView study={study} />
      </main>
    </SiteChrome>
  )
}
