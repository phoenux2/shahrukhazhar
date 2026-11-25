import type { Metadata } from "next"
import Link from "next/link"
import { SiteChrome } from "@/components/case-study"
import { experience, profile } from "@/lib/resume"
import { PERSON } from "@/lib/site"

export const metadata: Metadata = {
  title: "Resume",
  description: PERSON.description,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: `${PERSON.name} — Resume`,
    description: PERSON.description,
    url: "/resume",
  },
}

export default function ResumePage() {
  return (
    <SiteChrome>
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <p className="micro-label">Resume</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-2 text-base text-foreground/80">{profile.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {profile.location} · {profile.email} · {profile.phone}
        </p>
        <p className="mt-2 text-sm">
          <a className="underline" href={profile.linkedin}>
            LinkedIn
          </a>
          {" · "}
          <a className="underline" href={profile.studio}>
            Phoenux
          </a>
          {" · "}
          <Link className="underline" href="/#work">
            Work
          </Link>
          {" · "}
          <a className="underline" href="/Shahrukh-Azhar-Resume.pdf">
            Download PDF
          </a>
        </p>

        <h2 className="mt-12 text-lg font-semibold tracking-tight">Experience</h2>
        <ul className="mt-4 space-y-8">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`}>
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <p className="mt-1 font-semibold">
                {item.role}, {item.company}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </SiteChrome>
  )
}
