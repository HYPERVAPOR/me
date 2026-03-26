<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Agent Behavior Rules

**DO NOT** perform the following actions unless explicitly requested by the user:

- ❌ Create documentation files (README.md, docs, etc.)
- ❌ Run `git commit`, `git push`, or create pull requests

---

## Project Overview

Personal website project with core features:
- **Blog**: Technical articles and thoughts
- **Music Player**: Online music playback functionality
- **i18n**: Auto-detect user language → display Chinese for Chinese users, English for others; manual language toggle supported
For details @docs/prd.md

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 16.2.1 |
| React | 19.2.4 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| pnpm | - |

### Tailwind v4 CSS 变量语法

在 Tailwind v4 中使用 CSS 变量时，**必须使用 `var()` 函数包装**：

| 错误写法 | 正确写法 |
|---------|---------|
| `bg-[--accent-primary]` ❌ | `bg-[var(--accent-primary)]` ✅ |
| `text-[--foreground]` ❌ | `text-[var(--foreground)]` ✅ |
| `border-[--glass-border]` ❌ | `border-[var(--glass-border)]` ✅ |

或者使用在 `@theme` 中定义的颜色（推荐）：
- `bg-accent-primary`
- `text-foreground`
- `border-glass-border`

Additional:
- ESLint 9
- babel-plugin-react-compiler
- **lucide-react** - General UI icons
- **react-icons** - Brand icons (GitHub, LinkedIn, Discord, etc.)

## UI Design Style

**Linear Style / Modern SaaS Dark Mode**

Core visual language: Deep, Layered, Minimalist

### Color Foundation
- **Dark Background**: Not pure black, but deep tones (#050505 or deep navy), with subtle noise/grain texture creating a cosmic depth
- **Ambient Glow**: Subtle radial gradients in background, such as dark red/purple glows, making the page feel 3D rather than flat

### UI Components
- **Glassmorphism**: Semi-transparent cards with background blur (backdrop-filter: blur), 1px thin borders simulating glass edge reflections
- **High-Contrast Accents**: Bright, saturated coral/red-orange used for logos, icons, and key buttons for strong visual impact

### Typography & Space
- **Sans-Serif Fonts**: Inter / Geist / SF Pro with clear weight distribution; headlines are large, bold, and tight on letter-spacing
- **Negative Space**: Generous whitespace between components; each module floats like an independent island in deep space

### Interaction Cues
- **Terminal Aesthetic**: Mac-style red/yellow/green close buttons, developer-friendly vibe
- **Linear Iconography**: Ultra-thin stroke, minimalist icons with glow or gradient effects

## Deployment

- **Platform**: Vercel
- **Domain**: Custom domain

---

## Development Scripts

### Logging Development Server

Use `pnpm run dev:log` to start the development server with automatic logging:

```bash
pnpm run dev:log
```

**Features:**
- Captures all stdout and stderr output
- Displays output in terminal while saving to file
- Creates `dev-logs/` directory automatically
- Generates timestamped log files: `dev-logs/dev-YYYYMMDD-HHMMSS.log`

**Use Cases:**
- Debugging build errors
- Reviewing server startup issues
- Tracking compilation warnings
- Sharing logs for troubleshooting

