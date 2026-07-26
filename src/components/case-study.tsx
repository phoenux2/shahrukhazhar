import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CaseStudyImage } from "@/components/case-study-image"
import { caseStudies } from "@/lib/case-studies"
import { profile } from "@/lib/resume"
import { ArrowLeft, ArrowUpRight, Calendar, Mail } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"

export function SiteChrome({
  children,
  active,
}: {
  children: React.ReactNode
  active?: "work" | "home"
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-canvas">
      <header className="sticky top-0 z-20 border-b border-foreground/18 bg-canvas/90 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto flex min-h-14 max-w-5xl items-center justify-between gap-2 px-4 py-2 sm:px-6 md:px-8">
          <Link
            href="/#top"
            lang="ur"
            dir="rtl"
            className="shrink-0 text-lg leading-none font-semibold tracking-tight text-foreground transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
            style={{ fontFamily: "var(--font-urdu), 'Noto Nastaliq Urdu', serif" }}
          >
            {profile.nameUrdu}
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
            {[
              ["Work", "/#work"],
              ["Experience", "/#experience"],
              ["Practice", "/#practice"],
              ["Contact", "/#contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`micro-label transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  active === "work" && label === "Work"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              render={
                <a
                  href={profile.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="sm"
            >
              <Calendar className="size-3.5" />
              Call
            </Button>
            <Button render={<a href={`mailto:${profile.email}`} />} size="sm">
              <Mail className="size-3.5" />
              Email
            </Button>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-background/55">
            <a
              href={profile.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-background hover:underline focus-visible:text-background focus-visible:underline focus-visible:outline-none"
            >
              Schedule a call
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-background hover:underline focus-visible:text-background focus-visible:underline focus-visible:outline-none"
            >
              Email
            </a>
            <Link
              href="/#work"
              className="transition-colors hover:text-background hover:underline focus-visible:text-background focus-visible:underline focus-visible:outline-none"
            >
              Work
            </Link>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function WorkGrid({ limit }: { limit?: number }) {
  const studies = limit ? caseStudies.slice(0, limit) : caseStudies

  return (
    <ul className="grid gap-0 border-t border-foreground/12">
      {studies.map((study) => {
        const comingSoon = study.status === "coming-soon"
        const body = (
          <>
            <div className="relative aspect-[4/3] overflow-hidden border border-foreground/18 bg-muted">
              <Image
                src={study.cover}
                alt=""
                fill
                className={
                  comingSoon
                    ? "object-cover opacity-50 grayscale"
                    : "object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                }
                sizes="220px"
              />
              {comingSoon ? (
                <div className="absolute inset-0 flex items-center justify-center bg-canvas/40 backdrop-blur-[2px]">
                  <span className="border border-foreground/18 bg-canvas px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] text-foreground uppercase">
                    Coming soon
                  </span>
                </div>
              ) : null}
            </div>
            <div>
              <p className="micro-label">{study.company}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {study.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {study.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {comingSoon ? (
                  <Badge variant="secondary">Coming soon</Badge>
                ) : null}
                {study.tags.slice(0, comingSoon ? 2 : 3).map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <span
              className={`hidden items-center gap-1 text-sm font-medium md:inline-flex ${
                comingSoon ? "text-muted-foreground" : "text-foreground"
              }`}
            >
              {comingSoon ? (
                "Coming soon"
              ) : (
                <>
                  View
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </span>
          </>
        )

        return (
          <li key={study.slug} className="border-b border-foreground/12">
            {comingSoon ? (
              <div
                aria-disabled="true"
                className="grid cursor-not-allowed gap-6 py-8 opacity-80 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-10 md:py-10"
              >
                {body}
              </div>
            ) : (
              <Link
                href={`/work/${study.slug}`}
                className="group grid gap-6 py-8 transition-colors hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:grid-cols-[220px_1fr_auto] md:items-center md:gap-10 md:py-10"
              >
                {body}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const isDocument = study.presentation === "document"

  return (
    <article>
      <div className="border-b border-foreground/18">
        <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-14">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft className="size-3.5" />
            All work
          </Link>

          <p className="micro-label mt-8">
            {study.company} · {study.year}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight text-foreground text-balance md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium tracking-tight text-foreground/80 text-balance">
            {study.subtitle}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{study.role}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {!isDocument ? (
        <div className="border-b border-foreground/18 bg-muted/40">
          <div className="mx-auto max-w-5xl px-6 py-8 md:px-8">
            <CaseStudyImage
              src={study.cover}
              alt={`${study.title} cover`}
              priority
            />
          </div>
        </div>
      ) : null}

      {isDocument ? (
        <div className="mx-auto max-w-5xl space-y-16 px-6 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="micro-label">Overview</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {study.summary}
              </p>
            </div>
            <div>
              <p className="micro-label">Challenge</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="micro-label">Outcomes</p>
              <ul className="mt-3 space-y-2">
                {study.outcome.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] size-1 shrink-0 bg-foreground"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {study.sections.map((section) => (
            <section key={section.title} className="space-y-6">
              {section.title !== "Hero" ? (
                <div className="section-header">
                  <h2 className="section-header__title text-xl md:text-2xl">
                    {section.title}
                  </h2>
                </div>
              ) : null}
              {section.body.length && section.title !== "Hero" ? (
                <div className="max-w-3xl space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}
              {section.bullets?.length ? (
                <ul className="max-w-3xl space-y-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55em] size-1 shrink-0 bg-foreground"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.figures?.length ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {section.figures.map((figure) => (
                    <CaseStudyImage
                      key={figure.src}
                      src={figure.src}
                      alt={figure.alt}
                      caption={figure.caption}
                      priority={section.title === "Hero"}
                      size="compact"
                      className={
                        section.figures!.length === 1 ? "sm:col-span-2" : undefined
                      }
                    />
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      ) : (
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-14 md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-8 md:py-20">
          <div className="space-y-8">
            <div>
              <p className="micro-label">Overview</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {study.summary}
              </p>
            </div>
            <div>
              <p className="micro-label">Challenge</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="micro-label">Outcomes</p>
              <ul className="mt-3 space-y-3">
                {study.outcome.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] size-1 shrink-0 bg-foreground"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-14">
            {study.sections.map((section) => (
              <section key={section.title}>
                <div className="section-header">
                  <h2 className="section-header__title text-xl md:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.55em] size-1 shrink-0 bg-foreground"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.figures?.length ? (
                  <div className="mt-8 grid gap-4">
                    {section.figures.map((figure) => (
                      <CaseStudyImage
                        key={figure.src}
                        src={figure.src}
                        alt={figure.alt}
                        caption={figure.caption}
                        size="compact"
                      />
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-foreground/18">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="micro-label">Next</p>
            <p className="mt-2 text-lg font-semibold tracking-tight">
              Let&apos;s design the next chapter.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button render={<a href={`mailto:${profile.email}`} />} size="lg">
              Start a conversation
              <ArrowUpRight className="size-4" />
            </Button>
            <Button render={<Link href="/#work" />} variant="outline" size="lg">
              More work
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
