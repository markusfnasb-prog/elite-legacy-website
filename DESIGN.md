---
name: Elite Legacy Insurance Group
description: A warm, photo-led world for an independent, multi-carrier life insurance brokerage.
colors:
  cream: "#faf6ee"
  cream-2: "#f1e9d8"
  forest: "#16211b"
  forest-2: "#1e2b23"
  sage: "#7c9473"
  sage-bright: "#9db594"
  sage-deep: "#4f6349"
  ink: "#262b25"
  overlay-forest: "rgba(22,33,27,var(--alpha))"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 5.2vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  accent:
    fontFamily: "\"Source Serif 4\", Georgia, serif"
    fontStyle: "italic"
    fontWeight: 400
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.95rem–1.05rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  lg: "1rem"
  xl: "1rem"
  2xl: "1rem"
  full: "9999px"
spacing:
  section-y: "5rem–7rem"
  card-p: "1.75rem–2.25rem"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.forest}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.sage-bright}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  card:
    backgroundColor: "{colors.cream-2}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.card-p}"
---

# Design System: Elite Legacy Insurance Group

## Overview

**Creative North Star: "The Family in Frame"**

This is the second visual world for Elite Legacy, replacing an engraved-certificate identity with one pinned directly by the user from two reference images: a warm, photography-led insurance site with soft rounded UI, and a full-bleed real-family hero with mixed sans/italic typography. The old certificate world (navy/parchment, brass ornament, wax seals, ribbon-shaped buttons) is retired entirely — this world proves trust through a real family's face, not an institution's seal.

The system is built on a single real photograph doing the emotional work in the hero, a warm neutral cream base for reading sections, and deep forest-black for alternating dark sections and the footer. Sage green is the one working accent, kept to buttons, badges, and small warm highlights so it stays legible as "the accent" rather than decoration. Corners are consistently soft (rounded-2xl cards, fully-pill buttons) — the opposite of the certificate world's near-square, ruled-border language.

**Key Characteristics:**
- Real, diverse family photography carries warmth — a full-bleed hero photo, plus a supporting gallery — rather than any drawn/engraved mark
- Manrope (sans) for nearly everything, with Source Serif 4 italic reserved for a single warm emphasis word per headline
- Soft, fully-rounded pill buttons and 2xl-rounded cards throughout; no sharp corners, no ornamental clip-paths
- Alternating cream / forest section grounds for rhythm, sage green as the sole accent color
- Diverse representation is deliberate: the hero leads with a Black family; the supporting gallery spans other families and generations

## Colors

**Restrained-to-Committed** strategy: cream and forest both carry whole section grounds; sage is a single, disciplined accent — never spread across multiple competing colors.

### Primary
- **Cream** (`#faf6ee`): the dominant light section ground (family gallery, coverage cards, quote form).
- **Forest** (`#16211b`): the dominant dark section ground (hero base, how-it-works, testimonials, footer) — reads as an evening, at-home scene, not a corporate navy.

### Secondary
- **Sage** (`#7c9473`) / **Sage Bright** (`#9db594`): the one accent — primary buttons, step-number badges, coverage-range chips, hover states.
- **Sage Deep** (`#4f6349`): accent text on light grounds (needs the darker step to clear 4.5:1 on cream).

### Neutral
- **Ink** (`#262b25`): body text on cream grounds.
- **Cream text** (`#faf6ee`): body text on forest grounds.
- **Cream-2** (`#f1e9d8`): secondary light surface for cards sitting on cream, and for testimonial/how-it-works cards sitting on forest.
- **Forest-2** (`#1e2b23`): secondary dark surface, reserved for future use (hover states on dark UI).
- **Overlay Forest** (`rgba(22,33,27,α)`): the hero photo's legibility gradient — always the forest hex at varying alpha, never an unrelated black, so the photo still reads as sitting in this world's dark tone.

### Named Rules
**The One Accent Rule.** Sage is the only accent color in the system. If a second accent hue shows up, it's competing with sage for "the color that means action," and the page gets harder to scan.

## Typography

**Display/Body Font:** Manrope (with system-ui, sans-serif fallback)
**Accent Font:** Source Serif 4 italic (with Georgia, serif fallback)

**Character:** Manrope carries nearly the entire system — warm, humanist, geometric-but-friendly grotesk, equally at home in a headline or a form label. Source Serif 4's italic is used sparingly, one phrase per headline, for the emotional word the sentence turns on ("at every age").

### Hierarchy
- **Display** (800, `clamp(2.1rem, 5.2vw, 3.6rem)`, 1.08 line-height, -0.01em tracking): hero headline, Manrope with one italic Source Serif phrase inline.
- **Headline** (800, `clamp(1.5rem, 3vw, 2.1rem)`): section titles.
- **Title** (700, ~1.1rem): card and step titles.
- **Body** (400, 0.95rem–1.05rem, 1.6 line-height): paragraphs.
- **Label** (600–700, 0.7rem–0.85rem): buttons, badges, form labels; tracked and uppercase only for the small "We Work With" kicker-equivalent, otherwise sentence case.

### Named Rules
**The One Italic Rule.** Source Serif italic appears at most once per headline, on the single word or short phrase carrying the emotional turn. Used on a full sentence or a body paragraph, it stops reading as emphasis and starts reading as a font mismatch.

## Layout

Single-column, full-bleed sections, `max-w-4xl`–`max-w-6xl` centered content per section. Generous vertical rhythm (`py-16` to `py-28`). The hero is a full `100svh` photo viewport with content anchored bottom-left (following the pinned reference's composition) rather than centered. Responsive behavior is mobile-first Tailwind (`sm:` at 640px) — three/five-column grids (how-it-works, coverage cards, family gallery) collapse to one or two columns below that width.

## Elevation & Depth

Soft, diffused shadows only — no hard edges, no visible borders on cards (the certificate world's thin brass borders are retired). Depth comes from shadow + the cream-2-on-cream or cream-2-on-forest surface contrast, not from strokes.

### Shadow Vocabulary
- **`--shadow-card`** (`0 16px 36px -18px rgba(22,33,27,0.28)`): all cards — testimonials, coverage cards, form panels, gallery photos.
- **`--shadow-pill`** (`0 10px 24px -10px rgba(22,33,27,0.35)`): buttons.

### Named Rules
**The No-Border Rule.** Cards separate from their ground with shadow and fill contrast only, never a stroke. A bordered card is a leftover from the prior world and should be corrected on sight.

## Shapes

Uniformly soft: `rounded-2xl` (1rem) cards, `rounded-full` pill buttons and badges, `rounded-xl` (1rem) form inputs. No sharp corners anywhere in this world — that constraint is the clearest visual break from the retired certificate system, which was deliberately near-square.

## Components

### Buttons (Pill)
- **Shape:** fully rounded (`rounded-full`), no clip-path.
- **Primary** (sage fill, forest text): the quote action.
- **Outline** (transparent, cream border/text): used over the hero photo for secondary actions (call, book).
- **Cream** (cream/cream-2 fill, forest text): secondary actions off-photo (e.g. "Call Us" card).
- **Hover/Focus:** lifts slightly (`-translate-y-0.5`), fill brightens to `sage-bright`; `:focus-visible` gets the global sage-deep outline ring.

### Hero Photo (signature treatment)
A full-bleed `next/image` with a two-axis forest-tinted gradient (horizontal for text legibility on the left, vertical for the nav bar) — always built from the `forest` hex at varying alpha, never a generic black overlay. Content anchors bottom-left per the pinned reference, not centered.

### Cards / Containers
- **Corner Style:** `rounded-2xl`.
- **Background:** `cream-2` on forest grounds, `white`/`cream-2` on cream grounds — always a visible step up from the section ground.
- **Shadow Strategy:** `--shadow-card`.
- **Border:** none (see The No-Border Rule).

### Inputs / Fields
- **Style:** `rounded-lg`, 1px `ink/15` border, `cream` fill — a real bordered field, not the certificate world's underline-only style.
- **Focus:** border shifts to `sage-deep`.
- **Error:** required-but-empty submission shows red text naming the problem; submit button shows a `disabled`, "Sending…" loading state.

### Navigation
A pill-button-equipped header bar overlaid directly on the hero photo (wordmark left, phone + "Get a Free Quote" pill right) — no separate nav chrome elsewhere, since this is a single-scroll Persuade surface.

### Family Photos (signature component)
Real photographs in `rounded-2xl` frames (not circular lockets — that belonged to the retired world), `aspect-[4/5]`, soft shadow, captioned by life stage in small sentence-case type. The hero photo leads with a Black family per explicit user direction; the supporting gallery spans other families and generations. Captions never imply a specific pictured person gave a testimonial quote.

## Do's and Don'ts

### Do:
- **Do** keep sage as the only accent color (**The One Accent Rule**).
- **Do** use fully-rounded pills for every button and `rounded-2xl` for every card — no sharp corners in this world.
- **Do** build any photo overlay gradient from the `forest` hex at varying alpha, not an unrelated black.
- **Do** alternate cream and forest section grounds for rhythm.
- **Do** keep the Source Serif italic accent to one short phrase per headline (**The One Italic Rule**).

### Don't:
- **Don't** reintroduce the retired certificate-world elements: ribbon/clip-path buttons, engraved seals, brass ornament, roman numerals, underline-only inputs.
- **Don't** put a border/stroke on a card — separate it with shadow and fill contrast only (**The No-Border Rule**).
- **Don't** introduce a second accent color alongside sage.
- **Don't** caption real family photography with a name or quote implying a specific endorsement.
