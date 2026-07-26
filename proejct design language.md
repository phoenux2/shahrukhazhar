Reduce cognitive load (quiet chrome)

The soft canvas (#e4e4e2) already lowered glare. Remaining load comes from equal-weight chrome everywhere: 2–3px borders + 4px hard shadows on most containers, uppercase mono on almost every label/title, double rules on section headers, and tilt on process cards.

Decision locked: keep JetBrains Mono site-wide (brand), and quiet surface treatment + hierarchy. No body-font swap in this pass.

Approach

Dial neobrutalism from “default on everything” to “accent on primary actions.” Reading surfaces get thinner borders, no offset shadow, and sentence/title case. Primary CTA / key interactive cards keep the hard edge.

flowchart LR
  tokens[Token defaults] --> chrome[Nav Footer Headers]
  tokens --> ui[Card Button Badge]
  tokens --> home[Home bands Process Marquee]
  tokens --> hubs[Services Rates articles]

1. Soften design tokens

In [app/globals.css](app/globals.css) :root:





Keep --border-width: 2px for interactive UI; introduce --border-subtle: 1px solid … as the default container edge (already partially exists — make it the card/section default).



Soften default --shadow-hard usage: cards/process/SKU → no offset shadow; reserve hard shadow for primary .btn / black CTA only.



Leave canvas/foreground as-is (already settled).

2. Demote section header chrome

.section-header currently uses 3px top + 3px bottom + uppercase. Change to:





Single bottom hairline (1px) or weight-only hierarchy



Title case (drop forced uppercase / wide tracking on section titles)



Keep uppercase only for true micro-labels (.form-label, badge, nav items if needed)

Touches home bands in [app/(site)/page.tsx](app/(site)/page.tsx) via shared CSS.

3. Quiet UI kit defaults





[components/ui/card.tsx](components/ui/card.tsx): border-2 → 1px subtle; remove default hard shadow (interactive variant may keep a lighter press, not 4px rest shadow).



[components/ui/button.tsx](components/ui/button.tsx): keep hard shadow on default (black) only; secondary/outline → border only, no offset.



[components/ui/badge.tsx](components/ui/badge.tsx) + [ConsentBanner](components/consent/ConsentBanner.tsx): match card (1px, no shadow).

4. Home: fewer equal-weight objects

In globals + motion components:





Process steps ([ProcessSteps](components/motion/ProcessSteps.tsx) / .process-steps__item): drop tilt; 1px border; no hard shadow.



Client marquee ([ClientMarquee](components/motion/ClientMarquee.tsx)): title-case names; remove extra top/bottom rails if .home-band already borders the section; keep motion but slightly slower or respect existing reduced-motion.



Pillar / cred blocks: keep structure; remove rest-state hard shadow where cards stack.

5. Nav + footer density





Mega menu: drop box-shadow: var(--shadow-hard); keep 1–2px bottom border only ([.nav-mega](app/globals.css)).



Footer links: underline on hover/focus only, not every link at rest (.footer-list a, .footer-links a).

6. Services / rates article titles

In [.pillar-article__title](app/globals.css) (and rates equivalent):





Drop text-transform: uppercase



Soften scale from ~`4.5rem clamp toward ~2.5–3rem`



Reduce per-item hairline noise in lists slightly (keep structure, fewer competing lines)

Out of scope (this pass)





Swapping body font to sans



Rewriting home section count / copy



Removing Win98 cursors or GridDebug (unless you ask)



Dark mode

Success check





First viewport and mid-page bands feel calmer without looking “flat generic”



Primary black CTA still reads as the hard brutalist accent



Contrast stays WCAG AA/AAA on #e4e4e2 / #141414



Spot-check: home, services, rates, one case study, mobile nav

