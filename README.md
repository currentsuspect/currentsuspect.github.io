# currentsuspect.me

Personal site built with [Astro](https://astro.build). Output is static, served via GitHub Pages from `docs/`.

## Develop

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # static output → ./docs
bun run preview  # serve the built output
```

## Adding a new essay

Drop a markdown file into `src/content/essays/`:

```md
---
title: "Your title"
description: "One-sentence summary, used for SEO and the index list."
publishDate: 2026-07-12
draft: false
---

Body in markdown. `## h2` sections are auto-numbered (01, 02, ...).
Use `<p class="essay-pull">…</p>` for a pull-quote.
```

Frontmatter fields: `title`, `description`, `publishDate`, `updatedDate` (optional), `draft`.

## Deploy

Push to `main`. GitHub Pages is configured to serve from `/docs`.
The CNAME file in `public/` is preserved through the build.
