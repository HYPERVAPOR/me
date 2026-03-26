# Personal Website - PRD

## Overview

A personal website with three main sections: profile, blog, and music player.

**Pages:** `/me`, `/blogs`, `/tracks`

---

## 1. /me - Profile Page

### Purpose
- Brief self-introduction
- Express job-seeking intention
- Contact information

### Layout
```
┌─────────────────────────────┐
│ navbar: me | blogs | tracks │
├─────────────────────────────┤
│                             │
│   Brief Self-Introduction   │
│                             │
│   ┌──────────┐ ┌──────────┐ │
│   │  blogs   │ │  tracks  │ │
│   └──────────┘ └──────────┘ │
│                             │
│      Contact Information    │
│                             │
└─────────────────────────────┘
```

### Contact Links
| Platform | Link |
|----------|------|
| Email | me@hypervapor.org |
| Discord | https://discord.gg/AdKb7d3r67 |
| LinkedIn | www.linkedin.com/in/zhening-liu-0a2b79364 |
| GitHub | https://github.com/HYPERVAPOR |

---

## 2. /blogs - Blog Page

### Overview
Display a list of blog articles.

### Structure
- Each blog = one MDX file
- Route: `/blog/[slug]`
- Bilingual: Chinese + English versions per article

### Language Strategy
- Auto-detect user language → Chinese → zh, others → en
- Manual language toggle supported

### SEO
**Critical** — Blog is the primary traffic acquisition channel.

### Metadata
- Published date
- Last modified date
- Author/Publisher

---

## 3. /tracks - Music Page

### Overview
Full-featured music player similar to YouTube Music / Spotify.

### Features
- Persistent player bar at bottom (play/pause, next/prev, progress, volume)
- Track list with cover art thumbnails
- Click to play, queue management
- Lyrics display (sync or scroll view)

### Content Source
Audio files and metadata from Cloudflare R2.

### Metadata
- Cover art
- Track title
- Creator/Artist
- Lyrics
- Duration
