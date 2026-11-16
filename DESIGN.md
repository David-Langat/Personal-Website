---
name: Precision Algorithmic Portfolio
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3f4850'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#00628d'
  on-tertiary: '#ffffff'
  tertiary-container: '#007cb1'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets high-stakes technical leadership, specialized machine learning engineering, and enterprise cloud/IT infrastructure. The visual philosophy merges architectural modernism with computational rigor: uncompromised legibility, high typographic density without clutter, and deliberate high-contrast elements that reflect mathematical precision.

The emotional signature is authoritative, sharp, and cerebral. Rather than generic corporate polish or heavy decorative skeuomorphism, the UI employs clean borders, high-value visual hierarchy, calibrated mono-spaced data badges, and an electric cybernetic cyan accent architecture. It speaks directly to engineering directors, executive hiring teams, and technical founders seeking elite ML and systems architecture expertise.

## Colors

The palette establishes an ultra-clean, high-contrast light mode environment with luminous clarity.

- **Canvas Surfaces**: Pure White (`#FFFFFF`) for base cards and primary work highlights; Off-White Base Canvas (`#F8FAFC`) for page backgrounds; Subtle Tint (`#F1F5F9`) for nested modules, metric panels, and side rails.
- **Typography & Dark Neutrals**: Deep Obsidian (`#0F172A`) for primary headers, critical telemetry, and heavy UI anchors; Slate Dark (`#1E293B`) for standard body text and component labels; Slate Medium (`#334155`) for meta descriptions, captions, and secondary status markers.
- **Accents & Telemetry**: Vibrant Electric Cyan (`#0EA5E9`) for active highlights and code tags; Focused Azure (`#0284C7`) for interactive primary targets, anchor links, and elevated CTAs; Deep Cyan (`#0369A1`) for interactive hover states and emphasized data viz lines.
- **Structural Dividers**: Slate Light Borders (`#E2E8F0`) for panel separations and layout grids; Slate Medium Border (`#CBD5E1`) for interactive input borders and card dividers.

## Typography

The typographic hierarchy relies on a pairing between high-precision sans-serif typefaces (`Geist`, `Inter`) and an uncompromising technical monospace (`JetBrains Mono`).

- **Headlines (`Geist`)**: Tight letter spacing with surgical tracking. Headlines communicate high information density without aggressive bulk.
- **Body Text (`Inter`)**: Tuned for prolonged technical reading, architecture diagrams, and comprehensive research summaries.
- **Labels, Telemetry, and Metas (`JetBrains Mono`)**: Applied to all model parameters (loss values, latency benchmarks, compute clusters), technical skill chips, timestamps, commit hashes, and status chips.

## Layout & Spacing

The layout model implements a strict 12-column fluid grid system pinned to a max-width container of `1280px` on desktop and centered dynamically.

- **Desktop (1024px+)**: 12-column layout, `1.5rem` gutters, and `3rem` canvas margins. Asymmetrical distributions (e.g., 8-column project narrative paired with a 4-column ML parameter metadata rail) govern technical project breakdowns.
- **Tablet (768px - 1023px)**: 8-column layout, `1.25rem` gutters, and `2rem` margins. Side-rail metadata collapses below primary content blocks.
- **Mobile (< 768px)**: 4-column layout, `1rem` gutters, and `1.25rem` canvas margins. Monospace tags stack horizontally with horizontal scroll where dense metric chips are present.
- **Vertical Spacing**: Enforced on a 4px and 8px baseline rhythm to align data visualizations, code snippets, and structural borders cleanly.

## Elevation & Depth

Visual hierarchy uses crisp hairline borders, light-tinted backgrounds, and low-amplitude ambient diffusion instead of heavy drop shadows:

- **Flat / Ground Level**: Canvas surfaces (`#F8FAFC`) with no elevation or shadow.
- **Base Level Cards & Panels**: Pure White (`#FFFFFF`) surfaces defined by a 1px border of `#E2E8F0` and an ultra-subtle ambient shadow: `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Hover & Active Lift**: Interactive modules lift slightly with a crisp border shift to `#CBD5E1` and an elevated shadow: `box-shadow: 0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.04)`.
- **Technical Overlays & Terminal Drawers**: Elevated high-contrast cards resting on a solid backdrop, bounded by `#CBD5E1` with a localized ambient glow: `box-shadow: 0 12px 24px -4px rgba(15, 23, 42, 0.08)`.

## Shapes

The design system embraces an architectural, semi-sharp geometry (`roundedness: 1`). 

- Standard interactive controls, cards, and input fields feature `0.25rem` (4px) corner radii.
- Larger container surfaces, metric dashboard tiles, and modal structures scale to `0.5rem` (8px).
- Badges and status pills leverage precise technical cuts or minimal 4px bounding geometry rather than generic fully-rounded pills, preserving a computational, high-end hardware aesthetic.

## Components

### Buttons
- **Primary Button**: Solid obsidian (`#0F172A`) or primary azure (`#0284C7`) background with white typography (`#FFFFFF`). 4px radius, 10px vertical and 18px horizontal padding. Font: `Inter` semi-bold (14px). Hover state transitions to deep cyan (`#0369A1`) or slate dark (`#1E293B`) with a 0.5px subtle outline.
- **Secondary Button**: Background `#FFFFFF`, border 1px solid `#E2E8F0`, text `#0F172A`. Hover transitions background to `#F8FAFC` and border to `#CBD5E1`.
- **Ghost / Monospace CTA**: Transparent background, text `#0284C7`, font: `JetBrains Mono` (13px), with an arrow icon offset by 4px on hover.

### Badges & Technical Chips
- **ML Metric / Tech Chip**: Background `#F1F5F9`, border 1px solid `#E2E8F0`, typography: `JetBrains Mono` (11px or 12px), text color `#334155`.
- **Active State Chip**: Background `rgba(14, 165, 233, 0.08)`, border 1px solid `rgba(2, 132, 199, 0.3)`, text `#0369A1`. A leading 6px circular indicator dot pulses or remains solid cyan (`#0EA5E9`).

### Cards & Project Showcase Surfaces
- Constructed on `#FFFFFF` backgrounds bounded by 1px solid `#E2E8F0`.
- Card headers incorporate a two-tier information schema: the human-readable project title (`Geist`, 20px) sitting alongside an inline monospaced classification token (`JetBrains Mono`, e.g., `[SYS.ML-04]`).
- Hover shifts card border color from `#E2E8F0` to `#0EA5E9` with zero layout shift.

### Lists & Architecture Schematics
- Parameter lists alternate clean rows separated by 1px `#F1F5F9` rules.
- Key labels utilize `#334155` (`Inter` 14px regular); values render in `#0F172A` (`JetBrains Mono` 13px medium).

### Inputs & Terminal Console Fields
- Clean background `#FFFFFF` with 1px border `#CBD5E1`, text `#0F172A`. Focus state shifts the border immediately to `#0284C7` with a matching 1px outer ring `rgba(2, 132, 199, 0.15)`. No rounded bubbly edges; strictly maintained at 4px radius.