import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  CaseStudyView,
  SiteChrome,
} from "@/components/case-study"
import { CaseStudyGate } from "@/components/case-study-gate"
import {
  getCaseStudy,
  getCaseStudySlugs,
  isCaseStudyPublished,
} from "@/lib/case-studies"

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

  return {
    title: `${study.title} — Shahrukh Azhar`,
    description: study.subtitle,
    openGraph: {
      title: `${study.title} — Shahrukh Azhar`,
      description: study.subtitle,
      images: [{ url: study.cover }],
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study || !isCaseStudyPublished(study)) notFound()

  return (
    <SiteChrome active="work">
      <main className="flex-1">
        <CaseStudyGate slug={study.slug} title={study.title}>
          <CaseStudyView study={study} />
        </CaseStudyGate>
      </main>
    </SiteChrome>
  )
}
