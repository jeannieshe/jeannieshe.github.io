# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Cloudflare Pages commands (alternative deployment)
npm run pages:build    # Build for Cloudflare Pages
npm run pages:watch    # Watch mode for Pages
npm run pages:dev      # Dev server for Pages
```

## Architecture Overview

This is a personal portfolio and blog website built with Next.js 16 App Router, using:
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4.0 (alpha) with Geist fonts
- **Runtime**: Edge runtime for optimal performance
- **Content**: MDX-based blog with filesystem-based routing
- **Deployment**: Designed for Vercel (primary) with Cloudflare Pages support

### Key Architectural Patterns

**Blog System**: The blog uses a filesystem-based content management approach:
- Blog posts are MDX files stored in `app/blog/posts/`
- `app/blog/utils.ts` provides utilities to read and parse MDX files at build time
- Posts include frontmatter (title, publishedAt, summary, image) parsed via regex
- `app/components/mdx.tsx` configures MDX rendering with custom components (syntax highlighting via sugar-high, custom links, images, headings with anchor links)
- Blog pages are statically generated at build time using `generateStaticParams()`

**Component Reusability**: The `Card` component (`app/components/card.tsx`) is the primary reusable UI element used across:
- Homepage "what i'm up to" sections
- Projects page with tech stacks, keywords, and image galleries
- Coursework/teaching page

**Route Structure**:
- `/` - Homepage with bio, current activities, and recent blog posts
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog post pages (statically generated)
- `/projects` - Projects showcase
- `/coursework` - Teaching and coursework information

### Important Configuration Details

**TypeScript**: `strict: false` in tsconfig.json but `strictNullChecks: true` is enabled. Code uses minimal typing.

**Edge Runtime**: Most pages use `export const runtime = 'edge'` for Vercel Edge deployment.

**Base URL**: Currently set to `https://portfolio-blog-starter.vercel.app` in `app/sitemap.ts` - update this when changing domains.

**MDX Frontmatter Format**: Blog posts require this exact frontmatter structure:
```yaml
---
title: Post Title
publishedAt: YYYY-MM-DD
summary: Brief description
image: /path/to/image (optional)
---
```

## Working with Blog Posts

When creating or modifying blog posts:
1. Place `.mdx` files in `app/blog/posts/`
2. Include proper frontmatter (see format above)
3. The slug is derived from the filename
4. Run `npm run build` to verify posts are parsed correctly
5. Posts are automatically sorted by `publishedAt` date (newest first)

## Important Notes

- **No linting/testing setup**: There are no lint or test commands configured
- **Component imports**: Use absolute imports from `app/` (e.g., `import Card from 'app/components/card'`)
- **Client components**: Only `/projects` page uses `"use client"` for Framer Motion animations
- **Vercel Analytics**: Both Analytics and SpeedInsights are integrated in the root layout
