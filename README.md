# alexyoung.dev

Personal website with a CLI terminal theme. Visitors can type commands like `help`, `about`, `projects`, and `blog` to explore content — or scroll through traditional sections below.

## Tech Stack

- **Next.js 16** with static export
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **MDX** for blog posts

## Development

```bash
npm install
npm run dev
```

## Blog

Add new posts as `.mdx` files in `content/blog/`:

```
---
title: "Post Title"
date: "2026-03-28"
excerpt: "Short description."
tags: ["tag1", "tag2"]
---

Your content here...
```

## Build & Deploy

```bash
npm run build   # outputs to ./out/
```

Deployed automatically to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

## Customization

- **Projects**: Edit `src/lib/constants.ts` to update featured projects
- **Experience**: Edit `src/lib/constants.ts` to update work history
- **Social links**: Edit `src/lib/constants.ts` to update links
- **Terminal commands**: Edit `src/lib/commands.ts` to add new commands
