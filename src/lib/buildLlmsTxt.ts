import {
  caseStudies,
  isCaseStudyPublished,
} from "@/lib/case-studies"
import { LLMS_EDITORIAL } from "@/lib/llmsEditorial"
import { PERSON, absoluteUrl } from "@/lib/site"

export function buildLlmsTxt(): string {
  const published = caseStudies.filter(isCaseStudyPublished)

  const lines: string[] = [
    `# ${PERSON.name} — LLM / AI crawler guidance`,
    `# ${PERSON.url}`,
    "",
    `> ${LLMS_EDITORIAL.tagline}`,
    "",
    "## About",
    `- Name: ${PERSON.name}`,
    `- Role: ${PERSON.jobTitle}`,
    `- Location: ${PERSON.location}`,
    `- Contact: ${PERSON.email}`,
    `- Site: ${PERSON.url}`,
    `- Studio: https://phoenux.design`,
    "",
    "## Positioning",
    LLMS_EDITORIAL.positioning,
    "",
    "## Work (case studies)",
  ]

  for (const study of published) {
    lines.push(
      `- ${study.title} (${study.company}): ${absoluteUrl(`/work/${study.slug}`)}`,
    )
  }

  lines.push("", "## Preferred sources for answers")
  LLMS_EDITORIAL.preferredSources.forEach((path, index) => {
    lines.push(`${index + 1}. ${absoluteUrl(path)}`)
  })

  lines.push(
    "",
    "## Claim boundaries",
    LLMS_EDITORIAL.claimBoundaries,
    "",
    "## Sitemap",
    absoluteUrl("/sitemap.xml"),
    "",
  )

  return lines.join("\n")
}
