# Analytics & conversion dashboards

After deploying with env vars from `.env.example`, complete this checklist once.

## Calendly (required for `calendly_booked`)

1. Open Calendly → Event type → Confirmation page.
2. Set redirect to `https://shahrukhazhar.com/?booked=1`.
3. Book a test event and confirm `calendly_booked` fires in PostHog / GA4 DebugView.

## GA4

1. Create a GA4 property; copy Measurement ID → `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
2. Admin → Events → mark as **key events**:
   - `calendly_click`
   - `lead_captured`
   - `calendly_booked`
3. Explore → Funnel: `page_view` → `cta_click` / `calendly_click` → `calendly_booked`.
4. Acquisition → Traffic acquisition for channel mix.

## PostHog

1. Create project; set `NEXT_PUBLIC_POSTHOG_KEY` (+ `NEXT_PUBLIC_POSTHOG_HOST` if EU).
2. Enable **Session replay** (inputs are masked in code).
3. Insight funnel:
   - `case_study_view` → `gate_view` → `gate_calendly` OR `lead_captured` → `calendly_booked`
4. Live events: click Call / submit gate / land with `?booked=1`.

## LinkedIn Insight Tag

1. Campaign Manager → Analyze → Insight Tag → Partner ID → `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`.
2. Accept cookies on the site (marketing consent) and verify the tag.
3. Create a retargeting audience: visited `/work/*` in last 30 days.

## Vercel

1. Project → Analytics / Speed Insights enabled for production.
2. Confirm `@vercel/analytics` and `@vercel/speed-insights` appear in the deployment.

## Resend (leads)

1. `RESEND_API_KEY`, `LEADS_TO_EMAIL`, verified `LEADS_FROM_EMAIL`.
2. Submit the case-study gate form; confirm inbox delivery.
3. If Resend is missing, the form falls back to `mailto:` and still fires `lead_captured`.

## Event taxonomy (code)

| Event | Meaning |
|---|---|
| `cta_click` | Any tracked CTA (`location`, `destination`) |
| `calendly_click` | Calendly CTA |
| `calendly_booked` | Returned from Calendly with `?booked=1` |
| `case_study_view` | Case study opened |
| `gate_view` / `gate_browse_first` / `gate_calendly` / `gate_submit_attempt` | Gate funnel |
| `lead_captured` | Gate lead (API or mailto fallback) |
| `resume_download` | Resume PDF click |
