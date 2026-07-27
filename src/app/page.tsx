import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExpandableText, SeeMore } from "@/components/see-more"
import { WorkGrid } from "@/components/case-study"
import { HeroName } from "@/components/hero-name"
import {
  clientCredits,
  education,
  experience,
  focusAreas,
  outsideWork,
  profile,
  testimonials,
  type ExperienceItem,
} from "@/lib/resume"
import { ArrowUpRight, Calendar, Download, Mail, MapPin, Phone } from "lucide-react"

const FEATURED_EXPERIENCE_COUNT = 4
const VISIBLE_BULLETS = 2

function MicroLabel({ children }: { children: React.ReactNode }) {
  return <p className="micro-label">{children}</p>
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <div className="section-header mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div>
        <MicroLabel>{label}</MicroLabel>
        <h2 className="section-header__title mt-2">{title}</h2>
      </div>
      {description ? (
        <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-sm">
          {description}
        </p>
      ) : null}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 max-w-2xl space-y-3 sm:space-y-2">
      {items.map((bullet) => (
        <li
          key={bullet}
          className="flex gap-3 text-base leading-relaxed text-foreground/85 sm:text-sm sm:text-foreground/80"
        >
          <span
            aria-hidden
            className="mt-[0.55em] size-1.5 shrink-0 bg-foreground sm:size-1"
          />
          {bullet}
        </li>
      ))}
    </ul>
  )
}

function ExperienceRole({ item }: { item: ExperienceItem }) {
  const bullets = item.bullets ?? []
  const visibleBullets = bullets.slice(0, VISIBLE_BULLETS)
  const hiddenBullets = bullets.slice(VISIBLE_BULLETS)

  return (
    <li className="grid gap-4 border-t border-foreground/12 py-8 md:grid-cols-[180px_1fr] md:gap-10">
      <div className="flex flex-col gap-1 pt-0.5">
        <time className="text-xs text-muted-foreground">{item.period}</time>
        {item.location ? (
          <span className="text-xs text-muted-foreground/80">{item.location}</span>
        ) : null}
        {item.current ? (
          <span className="micro-label mt-2 inline-flex w-fit items-center gap-1.5 text-foreground">
            <span className="size-1.5 bg-foreground motion-safe:animate-pulse" />
            Active
          </span>
        ) : null}
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {item.company}
          </h3>
          {item.badge ? <Badge variant="secondary">{item.badge}</Badge> : null}
        </div>
        <p className="mt-1 text-base font-medium text-foreground/75 sm:text-sm sm:text-foreground/70">
          {item.role}
        </p>
        <div className="mt-3 max-w-2xl">
          <ExpandableText
            text={item.summary}
            className="text-base leading-relaxed text-muted-foreground sm:text-sm"
          />
        </div>
        {bullets.length > 0 ? (
          hiddenBullets.length > 0 ? (
            <SeeMore
              moreLabel={`See ${hiddenBullets.length} more`}
              lessLabel="Show less"
              preview={<BulletList items={visibleBullets} />}
            >
              <BulletList items={hiddenBullets} />
            </SeeMore>
          ) : (
            <BulletList items={bullets} />
          )
        ) : null}
      </div>
    </li>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-foreground/18 bg-canvas/90 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
      <div className="mx-auto flex min-h-14 max-w-5xl items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:px-6 md:px-8">
        <a
          href="#top"
          lang="ur"
          dir="rtl"
          className="shrink-0 text-lg leading-none font-semibold tracking-tight text-foreground transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
          style={{ fontFamily: "var(--font-urdu), 'Noto Nastaliq Urdu', serif" }}
        >
          {profile.nameUrdu}
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 sm:flex"
        >
          {[
            ["Work", "#work"],
            ["Experience", "#experience"],
            ["Practice", "#practice"],
            ["Testimonials", "#testimonials"],
            ["Outside", "#outside"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="micro-label text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {label}
            </a>
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
      {/* Mobile section jump — readable chips, easy thumb reach */}
      <nav
        aria-label="Sections"
        className="flex gap-2 overflow-x-auto border-t border-foreground/12 px-4 py-2 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {[
          ["Work", "#work"],
          ["Experience", "#experience"],
          ["Practice", "#practice"],
          ["Outside", "#outside"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="inline-flex shrink-0 items-center justify-center border border-foreground/18 bg-canvas px-3 py-2 text-xs font-medium tracking-wide text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="border-b border-foreground/18">
      <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-5xl flex-col justify-center px-4 py-12 sm:min-h-[calc(100svh-3.5rem)] sm:px-6 sm:py-16 md:px-8 md:py-24">
        <div className="animate-rise max-w-3xl">
          <MicroLabel>Product design · Systems · Strategy</MicroLabel>
          <HeroName />
        </div>

        <p className="animate-rise-delay-1 mt-5 max-w-2xl text-lg leading-snug font-medium tracking-tight text-foreground/90 text-balance sm:mt-6 sm:text-xl sm:text-foreground/85">
          {profile.title}
        </p>

        <p className="animate-rise-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
          {profile.summary}
        </p>

        <div className="animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
          <Button render={<a href={`mailto:${profile.email}`} />} size="lg">
            Start a conversation
            <ArrowUpRight className="size-4" />
          </Button>
          <Button
            render={
              <a
                href={profile.calendly}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
          >
            <Calendar className="size-4" />
            Schedule a call
          </Button>
          <Button
            render={
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
          >
            LinkedIn
            <ArrowUpRight className="size-4" />
          </Button>
          <Button
            render={<a href="/Shahrukh-Azhar-Resume.pdf" download />}
            variant="ghost"
            size="lg"
          >
            <Download className="size-4" />
            Resume
          </Button>
        </div>

        <p className="animate-rise-delay-3 mt-8 flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="size-3.5" aria-hidden />
          {profile.location}
        </p>
      </div>
    </section>
  )
}

function WorkSection() {
  return (
    <section id="work" className="scroll-mt-28 sm:scroll-mt-16 border-b border-foreground/18">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-24">
        <SectionHeader
          label="Selected work"
          title="Case studies"
          description="Compartmentalizing years of work into neat case studies is its own craft problem — the cobbler’s children have no shoes. Still: deep dives from Unlayer, Sendoso, and more."
        />
        <WorkGrid />
      </div>
    </section>
  )
}

function ExperienceSection() {
  const featured = experience.slice(0, FEATURED_EXPERIENCE_COUNT)
  const earlier = experience.slice(FEATURED_EXPERIENCE_COUNT)

  return (
    <section id="experience" className="scroll-mt-28 sm:scroll-mt-16 border-b border-foreground/18">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-24">
        <SectionHeader
          label="Career"
          title="Experience"
          description={profile.highlight}
        />

        <ol>
          {featured.map((item) => (
            <ExperienceRole
              key={`${item.company}-${item.period}`}
              item={item}
            />
          ))}
        </ol>

        {earlier.length > 0 ? (
          <Accordion className="mt-2 border-t border-foreground/12">
            <AccordionItem value="earlier-roles">
              <AccordionTrigger>
                Earlier roles
                <span className="ml-2 font-normal text-muted-foreground">
                  ({earlier.length})
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <ol>
                  {earlier.map((item) => (
                    <ExperienceRole
                      key={`${item.company}-${item.period}`}
                      item={item}
                    />
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : null}
      </div>
    </section>
  )
}

function PracticeSection() {
  return (
    <section
      id="practice"
      className="scroll-mt-28 sm:scroll-mt-16 border-b border-foreground/18"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-24">
        <SectionHeader
          label="Practice"
          title="What I focus on"
        />

        <div className="mb-10 surface-quiet bg-card px-5 py-4 md:px-6">
          <MicroLabel>How I work</MicroLabel>
          <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            People · Design · Money
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Build the team first. Protect craft second. Let the money follow.
          </p>
        </div>

        <div>
          <MicroLabel>Focus areas</MicroLabel>
          <ul className="mt-4 space-y-0">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="border-t border-foreground/12 py-3 text-base font-medium tracking-tight text-foreground first:border-t-0 first:pt-0"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <Accordion className="mt-10 border-t border-foreground/12">
          <AccordionItem value="collaborations">
            <AccordionTrigger>Collaborations</AccordionTrigger>
            <AccordionContent>
              <p className="pt-1 text-base leading-relaxed text-muted-foreground sm:text-sm">
                A few names from the ledger — one line each. The cobbler’s
                children problem applies here too: years of client work, very
                little room to over-explain.
              </p>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                {(
                  [
                    ["US", "us"],
                    ["MENA", "mena"],
                  ] as const
                ).map(([label, region]) => (
                  <div key={region}>
                    <MicroLabel>{label}</MicroLabel>
                    <ul className="mt-3 space-y-0 border-t border-foreground/12">
                      {clientCredits
                        .filter((c) => c.region === region)
                        .map((client) => (
                          <li
                            key={client.name}
                            className="border-b border-foreground/12 py-3"
                          >
                            <p className="text-base font-semibold tracking-tight text-foreground sm:text-sm">
                              {client.name}
                            </p>
                            <p className="mt-1 text-base leading-relaxed text-muted-foreground sm:text-sm">
                              {client.line}
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-28 border-b border-foreground/18 sm:scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-24">
        <SectionHeader
          label="Testimonials"
          title="What people say"
          description="Recommendations from clients, colleagues, and collaborators."
        />
        <div className="grid gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name + testimonial.company}
              className="rounded-lg border border-foreground/12 bg-background/40 p-6 transition-colors hover:border-foreground/20"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.title}
                    {testimonial.company && ` · ${testimonial.company}`}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground/70">
                    {testimonial.relationship}
                  </p>
                </div>
                <time className="shrink-0 text-xs text-muted-foreground">
                  {testimonial.date}
                </time>
              </div>
              <p className="text-sm leading-relaxed text-foreground/85">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OutsideWorkSection() {
  return (
    <section
      id="outside"
      className="scroll-mt-28 border-b border-foreground/18 sm:scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-24">
        <SectionHeader
          label="Outside work"
          title="Who I am beyond the CV"
          description={outsideWork.intro}
        />
        <ul className="max-w-2xl space-y-0 border-t border-foreground/12">
          {outsideWork.lines.map((line) => (
            <li
              key={line.slice(0, 48)}
              className="border-b border-foreground/12 py-4 text-base leading-relaxed text-foreground/85 sm:text-sm"
            >
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="border-b border-foreground/18">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
        <div className="section-header">
          <MicroLabel>Education</MicroLabel>
          <h2 className="section-header__title mt-2">{education.school}</h2>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {education.degree}
          {education.focus ? ` — ${education.focus}` : null}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">{education.period}</p>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 sm:scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <div className="section-header max-w-xl">
          <MicroLabel>Contact</MicroLabel>
          <h2 className="section-header__title mt-2 text-balance md:text-[2.5rem]">
            Let&apos;s design the next chapter.
          </h2>
        </div>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-sm">
          Open to fractional head of design roles, product design leadership,
          and select consultancy engagements through Phoenux.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            render={
              <a
                href={profile.calendly}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            size="lg"
          >
            <Calendar className="size-4" />
            Schedule a call
          </Button>
          <Button render={<a href={`mailto:${profile.email}`} />} variant="outline" size="lg">
            <Mail className="size-4" />
            {profile.email}
          </Button>
          <Button
            render={<a href={profile.phoneHref} />}
            variant="outline"
            size="lg"
          >
            <Phone className="size-4" />
            {profile.phone}
          </Button>
          <Button
            render={
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
          >
            LinkedIn
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
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
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-background hover:underline focus-visible:text-background focus-visible:underline focus-visible:outline-none"
          >
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-canvas">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <PracticeSection />
        <TestimonialsSection />
        <OutsideWorkSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
