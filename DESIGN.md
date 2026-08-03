---
version: alpha
name: Dark Minimal Terminal
description: |
  A low-key, terminal-native personal homepage with one oversized statement and a row
  of icon-only contact buttons. Near-black canvas, warm off-white ink, a single dim
  green accent. No chrome, no cards, no decoration — a big quiet statement, then
  nothing but contact icons.

colors:
  canvas: "#0b0b0c"
  surface-soft: "#121214"
  ink: "#e8e6e3"
  body: "#a8a8ad"
  mute: "#7c7c82"
  ash: "#56565c"
  hairline: "rgba(255,255,255,0.10)"
  hairline-strong: "rgba(255,255,255,0.22)"
  accent: "#7ee787"
  accent-hover: "#a4f0ba"

typography:
  display-xl:
    fontFamily: JetBrains Mono
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  caption-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 4px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 96px

components:
  display-statement:
    textColor: "{colors.ink}"
    fontSize: 64px
  icon-button:
    textColor: "{colors.mute}"
    minHeight: 44px
    minWidth: 44px
    borderColor: "{colors.hairline-strong}"
---

## Overview

One oversized statement — the bio — and one row of icon-only contact buttons,
centered on a near-black canvas. The page should feel like a quiet stranger's
terminal: no navigation, no footer, no cards, no decoration. The statement does
the talking; the icons let people reach out.

The background is a faint, static terminal grid — no cursor effects, no animation.
It is decoration only and never sits above content.

## Colors

- **Canvas** (`{colors.canvas}` — `#0b0b0c`): the only page background. Deep charcoal,
  never pure black.
- **Ink** (`{colors.ink}` — `#e8e6e3`): warm off-white for the statement and hover states.
- **Body** (`{colors.body}` — `#a8a8ad`): secondary text, high contrast on canvas (~7:1).
- **Mute** (`{colors.mute}` — `#7c7c82`): captions and icon buttons in their resting state.
- **Ash** (`{colors.ash}` — `#56565c`): the faintest text, reserved for future footnotes.
- **Accent** (`{colors.accent}` — `#7ee787`): dim terminal green. Used for the linked
  project name, icon hover, and keyboard focus outlines.
- **Hairline** (`{colors.hairline}`): 1px white-at-10% rules when separation is needed.
- **Grid lines**: 1px white-at-5% lines on a 44px grid, fixed behind all content.

## Typography

Everything renders in JetBrains Mono (open-source substitute for Berkeley Mono).
The bio is `{typography.display-xl}` — 64px bold with tight 1.05 leading; it scales
responsively via `clamp(2.75rem, 9vw, 6rem)` so it stays large on desktop and still
fits phones. The optional preceding caption is `{typography.caption-sm}` (13px).
The statement has no trailing punctuation. There is no blinking cursor anywhere on
the page — the terminal character comes from the prompt glyph and the grid, not from
animation.
No other type sizes exist.

## Layout

- Below `640px` the statement and contact row are centered — horizontally and
  vertically — in the viewport.
- At `640px` and above the page anchors to the **bottom-left corner**: content sits
  at the bottom-left of the viewport, left-aligned, with `40px` padding.
- Optional caption line (`$ whoami`) in `{colors.mute}`, 13px, above the statement.
- Statement: one line with `text-wrap: balance`, ending in a green period.
- Contact row: `flex-nowrap`, centered, `16px` gaps on phones / `24px` on desktop;
  each button is a `44px` square.

## Components

**`display-statement`** — the oversized bio
- `{typography.display-xl}`, `{colors.ink}`, responsive `clamp(2.75rem, 9vw, 6rem)`.
- Only the project name inside the statement is linked (e.g. `Riffpad.ai` →
  `https://riffpad.ai`); the lead text stays plain `{colors.ink}`.
- Link color is `{colors.accent}`; hover brightens to `{colors.accent-hover}` and adds
  an underline with generous offset; `150ms` transition.
- No trailing punctuation.

**`icon-button`** — a contact button
- `44×44px` square, `1px` `{colors.hairline-strong}` border, `{colors.mute}` icon.
- Icons are inline SVG (24px viewBox rendered at 20px): GitHub, LinkedIn, mail, Discord.
- Hover: border and icon shift to `{colors.accent}`; `150ms` transition.
- Every button carries an `aria-label`; the SVG itself is `aria-hidden`.

## Do's and Don'ts

### Do
- Make the bio the biggest thing on the page.
- Use icon buttons for contacts — inline SVG only, never text labels or emoji.
- Use `{colors.accent}` for the linked project name, icon hover, and focus outlines.
- Keep the grid faint (`≤5%` line alpha) so it never competes with the statement.
- Keep text contrast at or above WCAG AA.

### Don't
- Don't render contacts as bracketed text (e.g. `[github]`).
- Don't add cards, gradients, shadows, images, or a light theme.
- Don't introduce colors beyond the green accent, the blue link, and the neutral ramp.
- Don't add animation or sound.
- Don't let the grid or glow overlay content — it stays behind everything.

## Responsive Behavior

- Below `640px`: everything centers; `24px` page padding.
- At `640px` and above: bottom-left anchor, left-aligned, `40px` padding.
- The statement scales via `clamp(2.75rem, 9vw, 6rem)`; `text-wrap: balance` prevents
  orphan lines.
- The contact row stays a single row at every width; buttons remain `44px` touch targets.
- Test at 375px, 768px, and 1280px.
