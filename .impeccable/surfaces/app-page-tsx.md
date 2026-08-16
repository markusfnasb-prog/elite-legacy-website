---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

## Scope & Mode
Homepage (`app/page.tsx`), single-scroll marketing page. Mode: Persuade — design is the product; a first-time visitor must understand what this is, trust it, and act within seconds.

## Audience & Job
Everyday people (ages 0–85 coverage) evaluating a real financial decision for themselves or a loved one — spans parents insuring a newborn through older adults planning final-expense/legacy coverage. Not insurance experts; comparing options and deciding whether to trust an independent broker.

## Action / Task
Three equally-weighted conversion paths, all present above and reinforced at the bottom: request a free quote (form), call directly, or book a time (Calendly — placeholder until the owner supplies a real scheduling link).

## Proof / Content
Real carrier partnerships (Mutual of Omaha, Royal Neighbors, TransAmerica, Corebridge Financial, Americo, "and other appointed carriers"), real license numbers (GA #3719981, AL #30003543214), real contact info. Testimonials are sample/placeholder, clearly labeled, pending real client stories. Family photography is real (Unsplash-licensed), diverse (Black and white families across generations), captioned by life stage — never paired with the sample testimonial quotes, so no real person appears to endorse a quote they never gave.

## Constraints
- Licensed in Georgia and Alabama only; copy must never imply broader licensing.
- Coverage age range 0–85 is a real product fact, not a marketing number.
- No invented pricing, benchmarks, or customer counts.
- Quote form does not yet submit anywhere real — `components/ConversionPanel.tsx` has TODO comments marking where to wire a real endpoint before launch.

## Chosen Direction & Memorable Moment
"The Membership Certificate" (concept-seed direction round, seed key `e2383455`, assigned index 5 of 7 grounded candidates). The engraved seal medallion drawing itself on in the hero is the signature moment — see `DESIGN.md` for the full system.

## Unresolved Decisions
- Calendly URL not yet supplied (`components/ConversionPanel.tsx`, `CALENDLY_URL` constant).
- Quote form has no real backend/submission endpoint yet.
- Real client testimonials pending; sample copy in `components/Testimonials.tsx` marked for replacement.
- Full carrier roster beyond the five named carriers not confirmed — copy intentionally says "and other appointed carriers" rather than enumerating more.
