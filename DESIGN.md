---
version: beta
name: Mocha TUI
description: |
  A single-pane terminal emulator as a homepage. The page is one bordered window with a
  tab bar, two tmux-style panes and a vim-ish statusline, painted in Catppuccin Mocha.
  Oversized bio in the left pane, project listing plus one featured repository in the
  right. Monospace everywhere, sharp corners, no shadows on content, no light theme.

colors:
  # Catppuccin Mocha — https://catppuccin.com/palette
  crust: "#11111b"
  mantle: "#181825"
  canvas: "#1e1e2e" # mocha base
  surface0: "#313244"
  surface1: "#45475a"
  surface2: "#585b70"
  overlay0: "#6c7086"
  overlay1: "#7f849c"
  overlay2: "#9399b2"
  subtext0: "#a6adc8"
  subtext1: "#bac2de"
  ink: "#cdd6f4" # mocha text
  accent: "#cba6f7" # mauve — primary accent
  accent-hover: "#f5c2e7" # pink
  green: "#a6e3a1"
  teal: "#94e2d5"
  blue: "#89b4fa"
  peach: "#fab387"
  yellow: "#f9e2af"
  red: "#f38ba8"
  hairline: "rgba(205,214,244,0.10)"
  hairline-strong: "rgba(205,214,244,0.22)"

typography:
  display-xl:
    fontFamily: JetBrains Mono
    fontSize: 56px # clamp(2rem, 6vw, 3.5rem)
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: -0.02em
  caption-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  tui-xs:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em

rounded:
  none: 0px
  sm: 2px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 96px

components:
  tui-frame:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.surface1}"
    borderWidth: 1px
  tui-pane:
    padding: 20px 28px
  tui-statusline:
    backgroundColor: "{colors.mantle}"
    textColor: "{colors.overlay1}"
    fontSize: 11px
  cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.crust}"
---

## Overview

The whole page is **one terminal window**, not a website with terminal decoration. It has
four stacked regions, in this order: tab bar, pane grid, statusline. Everything is
monospace, everything is square, everything is dim except the statement and the accent.

The frame floats on a `{colors.crust}` desktop with a faint 32px grid and a soft radial
vignette behind it. Nothing animates except the caret and a 420ms boot fade; both are
disabled under `prefers-reduced-motion`.

Mood: a stranger's machine, left unlocked. Quiet, precise, slightly withheld — the page
advertises what is shipped and only hints at what is not (`next ████ — sealed until it
works`).

## Structure

1. **Tab bar** (`.tui-chrome`) — `01:whoami`, `02:projects`; active tab carries a mauve
   dot and a `surface0` chip. Right side: a dim `hypervapor.org — zsh — 96×24` readout
   (hidden below `sm`).
2. **Pane grid** (`.tui-grid`) — one column below `1024px`, two columns above
   (`1.05fr / 1fr`), separated by a 1px `{colors.surface1}` rule.
3. **Left pane** — prompt line, the oversized statement, a two-line manifesto, and the
   contact icons anchored to the pane bottom.
4. **Right pane** — `ls -la ~/projects` listing, the featured repository block, and the
   redacted "next" line anchored to the pane bottom.
5. **Statusline** — mode chip, host, branch, encoding on the left; position, `⏎ featured`
   hint and a live UTC clock on the right.

## Colors

Catppuccin Mocha, unmodified. Roles:

- **`{colors.crust}`** — desktop (page background, also `<body>` and `theme-color`).
- **`{colors.mantle}`** — window chrome and statusline.
- **`{colors.canvas}`** — pane background, the only content surface.
- **`{colors.surface0/1/2}`** — active tab, divider rules, borders, redaction bars.
- **`{colors.ink}`** — the statement, command text, project names.
- **`{colors.subtext0}`** — body copy, descriptions.
- **`{colors.overlay1}`** — prompts, statusline text, block labels.
- **`{colors.overlay0}`** — the dimmest meta (`//`, `$` sigils, "sealed" copy).
- **`{colors.accent}`** (mauve) — links, caret, mode chip, CTA fill, focus ring.
- **`{colors.green}`** — user@host in prompts, `live` badge, branch, CTA hover.
- **`{colors.peach}`** — `new` badge and the featured-block diamond.
- **`{colors.blue}`** — `~` in prompts.

Body copy never drops below `{colors.subtext0}` on `{colors.canvas}` (~7:1). `overlay0` is
reserved for decoration and sigils, never for sentences that must be read.

## Typography

JetBrains Mono only. Three sizes exist:

- `{typography.display-xl}` — the statement, 56px bold, `clamp(2rem, 6vw, 3.5rem)`,
  `text-wrap: balance`, ending in a blinking mauve block caret.
- `{typography.caption-sm}` — 13px: manifesto, project rows, descriptions, prompts.
- `{typography.tui-xs}` — 11px: tab bar, badges, topic chips, clone line, statusline.

Signage is lowercase (`normal`, `live`, `new`) except tabs and buttons, which are
uppercase with `0.08–0.14em` tracking — the way a TUI bar renders.

## Components

**`tui-frame`** — 1px `{colors.surface1}` border, no radius, `max-width: 64rem`, one hard
outer shadow (`0 40px 120px -40px`) to lift it off the desktop. Nothing else in the page
casts a shadow.

**`tui-pane`** — `min-width: 0` so long commands truncate instead of blowing out the grid.

**`.prompt`** — `user@host ~ % command`, with color-coded sigils (`green@green`, `blue ~`,
`mauve %`) and the command in `{colors.ink}`. Commands are decorative but truthful: they
mirror what the pane shows.

**`display-statement`** — one statement, `Now building Riffpad.ai`, where only
`Riffpad.ai` is a link. Link is `{colors.accent}` with a 6px underline offset that
brightens to `{colors.accent-hover}`; 150ms.

**`project-row`** — `grid-cols-[1fr_auto]`, left rule that turns `{colors.accent}` on
hover, name in `{colors.ink}`, dim `web · audio` meta (hidden on phones), and a squared
outline badge (`badge-live` green, `badge-new` peach).

**`tui-block`** — bordered `{colors.surface1}` box whose label (`◆ herdr-pair-coding`)
straddles the top border on a `{colors.canvas}` chip, terminal-title style. Holds the
featured tagline, description, `#topic` chips, a select-all `git clone` line, and the CTA
row.

**`cta`** — solid mauve, `{colors.crust}` text, uppercase 11px, `⏎ open repo`. Hover fills
`{colors.green}`. Paired with `cta-ghost` (`cat README.md`) — 1px `{colors.surface1}`
border, `{colors.mute}` text, mauve on hover.

**`icon-button`** — 40×40, 1px `{colors.hairline-strong}`, 16px inline SVG icons
(GitHub, LinkedIn, mail, Discord), hover mauve. Always `aria-label`ed; the SVG is
`aria-hidden`.

**`tui-statusline`** — mode chip (`normal`) in mauve-on-crust, then segments separated by
whitespace. On phones only the mode chip, branch, the hint and the clock survive.
`aria-hidden` — it is chrome, not content.

## Interaction

- **Caret** — a 0.5em mauve block after the statement, blinking on a 1.1s step curve.
- **Boot fade** — panes fade in over 420ms, staggered by 60–80ms. Reduced motion kills it.
- **`⏎` opens the featured repository.** Enter navigates to `herdr-pair-coding` unless
  focus is on a link, button, form field or contenteditable — declared in the statusline so
  it is a shortcut, not a trap.
- **Live UTC clock** in the statusline, refreshed every second, `HH:MM UTC`.
- Hover/focus transitions are `150ms`; focus rings are 2px `{colors.accent}`.

## Do's and Don'ts

### Do
- Keep the page reading as a single application window: chrome, panes, statusline.
- Use borders, labels and monospace alignment to build hierarchy — not shadows or cards.
- Keep the statement the largest element on the page.
- Let the statusline and prompts carry character: `user@host`, `%`, `⎇`, `⏎`.
- Keep one secret on the page, at most, and keep it dim.

### Don't
- Don't introduce colors outside the Mocha palette.
- Don't round corners on panes, buttons, badges or the frame.
- Don't add gradients on text, glows, images, emoji, or a light theme.
- Don't animate more than the caret and the boot fade.
- Don't let decoration cover content: grid and vignette are fixed, `z-0`, pointer-none.

## Responsive Behavior

- `<1024px`: panes stack; the divider becomes a horizontal rule.
- `<768px`: the frame goes edge to edge (no desktop padding); project meta text hides;
  the statusline drops host, encoding and cursor position.
- Statement scales `clamp(2rem, 6vw, 3.5rem)`; pane padding steps 20px → 28px.
- Contact buttons stay ≥40px touch targets; the statusline never wraps or overflows.
- Test at 375px, 390px, 768px, 1024px and 1440px.
