# Growing Sendoso

**Shahrukh Azhar** · Senior Product Designer · Sendoso · 2019–2022  
**Focus:** Product design · UX research · Information architecture · Design QA  
**Industry:** Corporate gifting & B2B engagement platform

> Marketers and sales were flying blind — Touches were hard to find, harder to measure, and trust between the two sides was thin.

---

## Summary

Sendoso is a B2B corporate gifting platform. Companies send Touches — physical gifts, eGifts, and more — to prospects and clients as part of sales and marketing campaigns.

Two people have to make it work: marketers who set budget, build Touches, manage teams, and prove ROI — and senders who use those Touches with their own prospects.

I led product design from research through shipped UI across the send flow, marketplace, tracking, and admin surfaces — working with Sendoso product and design leadership to turn research into screens that raised engagement.

**Outcome:** ~30% increase in monthly active users. One guided Touch flow. Shared visibility into every send via tracker and notifications. Clearer marketplace paths so senders didn’t start from zero.

---

## Vision

**One platform both sides can trust**

Managers needed control without babysitting every send. Senders needed confidence without waiting on a creator for every gift. The product had to support marketer-led campaigns and seller judgment in the same system.

---

## Challenge

**The problem with Touches**

Touches were underused, too numerous to manage, and tough to track once sent. Search in the library wasn’t precise. There was no reliable alert when a new Touch became available. Managers couldn’t see what converted — and didn’t fully trust sales to pick the right gift after past misuse damaged the brand.

Senders felt overwhelmed and needed heavy guidance. Reusing a Touch often meant cloning it just to swap funding source or gift item. Marketing and sales friction made the whole loop slower than the business needed.

---

## Solution

**A guided send system — not another pile of campaigns**

I rebuilt Touch creation into one flow: recipients, gift, billing and source of funds, Salesforce campaign linking, limits, and expiry — with required and optional settings clearly separated.

Around it: a marketplace home with budget, curated picks, and templates; a send tracker for every gift; a notification center for new Touches and redemptions; and team assignment plus branding controls so managers could standardize without micromanaging.

---

## Metrics

| Signal | Detail |
|--------|--------|
| **30%** | Increase in monthly active users |
| **1 flow** | Guided Touch builder replacing fragmented creation |
| **Shared** | Visibility for managers and senders via tracker + alerts |

---

## How I worked

Discovery through retro — research first, then screens.

- Discovery — stakeholder and customer interviews across manager and sender roles
- Synthesis — persona (Marketer as primary manager) and pain-point list
- HMW framing — turn friction into design opportunities
- Journey mapping — Explore → Enable (manual/triggered) → Tracking → Manage
- Design — Touch builder, marketplace, tracker, notifications
- Retro — what worked, what didn’t, actions next

### How might we

- Guide assignment of Touches to teams and individuals for better ROI
- Surface sending performance so creators can see what’s working
- Give senders catalog access without waiting on a creator every time
- Support manual and triggered sending in one place

---

## Chapters

### Research — Two users, one messy middle

As a Marketer, you set accounts, roles, budget, and Touches — then measure whether any of it worked. As a sender, you need the right gift for a real prospect without inventing strategy from scratch.

Interview notes made the tension plain: “How do I know which Touch is more successful?” “Should this be automated, or have sales involved?” “Physical is nice — but do we even have the address?”

![Marketplace research context](/case-studies/sendoso/marketplace.jpg)

### Craft — The Touch builder

I collapsed creation into one guided path: pick recipients (individual or group), assign the gift, set billing and source of funds, link Salesforce, set sending limits and expiry, and write the message — required vs optional called out clearly.

Managers could standardize process. Sellers who knew their prospect still had room to act. Manual and triggered sending lived in the same system so campaigns didn’t have to be built twice.

![Touch builder](/case-studies/sendoso/touch-builder.jpg)

### Marketplace — Start from something, not nothing

The marketplace home put budget, curated collections, trending picks, campaign templates, and “gifts by goal” in front of senders. Catalog views separated eGifts, physical gifts, and other types with filters by status and price.

Popular choices and personalization hints (interests like gaming or streaming) reduced the freeze that used to kill first sends.

![Gift marketplace](/case-studies/sendoso/marketplace.jpg)

### Visibility — Tracker and notifications close the loop

A single send tracker listed recipient, item, amount, status, and date — the shared source of truth research said was missing.

The notification center alerted people when Touches became available and when gifts were redeemed, answering the “no way to alert” pain point directly.

![Send tracker](/case-studies/sendoso/send-tracker.jpg)

### Admin — Teams, branding, and control without micromanaging

Customization flows covered gift-email branding and team assignment so managers could set defaults once. Roles and permissions stayed part of the same engagement story — standardize the brand and the budget path, then let senders move.

I also pushed Teams & Users into main navigation for discoverability, simplified IA so ops could manage teams and roles without friction, and designed for license utilization, invite conversion, and enterprise scale — taking wires to hi-fi through the Sendoso design system.

![Teams & branding](/case-studies/sendoso/teams-customization.jpg)
![Teams & Users hi-fi](/case-studies/sendoso/teams.png)

### Ship — From research board to release

Screens moved through design review with product and design leadership. The engagement recorded a ~30% lift in monthly active users — the clearest public signal that the platform got easier to use.

A closing retro captured what went well, what didn’t, and what to improve next — the same loop I used to open the work.

![Invite email](/case-studies/sendoso/invite-email.jpg)

---

## Product surfaces

| Surface | Description | Image |
|---------|-------------|-------|
| Touch builder | Guided flow for recipients, gifts, budget, Salesforce linking, limits, and expiry | `touch-builder.jpg` |
| Gift marketplace | Budget, curated picks, filters, and templates so senders don’t start from a blank catalog | `marketplace.jpg` |
| Send tracker | One table for every Touch sent — recipient, amount, status, date | `send-tracker.jpg` |
| Teams & branding | Team assignment and gift-email theme settings for consistent, controlled sends | `teams-customization.jpg` |

---

## Takeaways

1. **Trust is a design problem** — Manager/sales friction wasn’t only permissions — it was a visibility gap. Shared data beat more micromanagement.
2. **One flow beats five workarounds** — People cloned Touches just to change a funding source. Consolidating the builder removed the need for the workaround.
3. **Alerting is part of the product** — A Touch nobody knows about might as well not exist. Notifications made new inventory real.
4. **Design for both modes** — Some campaigns stay marketer-led. Others need seller judgment. The platform has to hold both.

---

## Assets

All images live under `public/case-studies/sendoso/`:

- `hero.jpg` — cover
- `touch-builder.jpg`, `marketplace.jpg`, `send-tracker.jpg`, `teams-customization.jpg`, `invite-email.jpg`
- `teams.png`, `wire-1.png`, `wire-2.png` — Teams & Users detail
- `gallery-1.jpg` … `gallery-9.jpg` — supporting UI shots

Wired into the site via `src/lib/case-studies.ts` → slug `sendoso`.
