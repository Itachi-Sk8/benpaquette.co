# Site foundation: how to build a page

The site is built with **Jekyll**; GitHub Pages builds it on every push to the publishing branch. Pages hold only their `<main>` content; the `<head>`, header and footer come from shared includes. `index.html` + `CSS/index.css` is the reference page and `_posts/` holds the blog posts. Copy from them.

Files:

| File | Purpose |
|---|---|
| `_config.yml` | Site title, tagline, description, URL, author, social links, plugins (`jekyll-seo-tag`, `jekyll-sitemap`), front-matter defaults, and `exclude:` (files that are not published). |
| `_layouts/default.html` | Every page: `<head>`, skip link, header, `<main id="main">` with the page content, footer, then any page scripts. |
| `_layouts/post.html` | Blog posts (wraps `default`): post header, body, prev/next links, "All posts". |
| `_includes/head.html` | The `<head>` (see §1). |
| `_includes/header.html`, `_includes/footer.html` | Site header/nav and footer. Nav links come from `_data/navigation.yml`. |
| `_includes/nav-current.html` | Works out which nav link gets `aria-current="page"`. |
| `_includes/person-json-ld.html` | Person structured data, on the homepage only (`person_json_ld: true`). |
| `_data/navigation.yml` | Main and footer nav links, in order. |
| `_data/gallery.yml` | Gallery photos (id, size, alt text), in page order. |
| `_posts/YYYY-MM-DD-slug.html` | Blog posts. |
| `_drafts/post-template.html` | Starting point for a new post. Not published. |
| `CSS/base.css` | Tokens, reset, layout primitives, header/nav, page header, components, footer. **Shared: don't put page-specific rules here.** |
| `JS/site.js` | Mobile nav toggle, `aria-current` on nav links, footer year. No dependencies. Loaded with `defer`; the `js` class is set by an inline script in `<head>`. |
| `CSS/<page>.css` | Page-specific styles only (e.g. `itcareer.css`, `blog.css`, `blog-post.css`). Loaded **after** `base.css`. |
| `assets/img/` | Web-sized images the site uses (see `assets/img/MANIFEST.md`). |

This file, `README.md`, `assets/img/MANIFEST.md`, `Archive/`, `HTML/`, `CSS/Not Live/` and the original full-size images are listed under `exclude:` in `_config.yml` and are not published.

## 1. Building, `<head>`, header and footer

Needs Ruby and Bundler. From the repo root:

```sh
bundle install                      # once: the same gems GitHub Pages uses
bundle exec jekyll serve            # http://localhost:4000, rebuilds on save
bundle exec jekyll serve --drafts   # also shows _drafts/
bundle exec jekyll build            # writes the site to _site/ (gitignored)
```

Changes to `_config.yml` need a restart of `jekyll serve`. `Gemfile.lock` is gitignored because it only resolves on the platform that made it.

**`<head>`.** `_includes/head.html` outputs, in order: charset, viewport, the `{% seo %}` block, theme-color, color-scheme, favicons (`/assets/img/icons/`), the font preload, Font Awesome, `base.css`, the page's own stylesheets, the inline `js` class script, and `site.js` with `defer`. Don't write a `<title>`, description, author, canonical or Open Graph tag by hand: `{% seo %}` (jekyll-seo-tag) writes all of them from front matter.

- Title format: `Page Name | Ben Paquette`, from `title:` plus the site title. For a blog post: `Post Title | Ben Paquette`. The homepage has no `title:`, so it gets `Ben Paquette | Information Technology Professional` (site title + `tagline`).
- `description:` becomes the meta description, `og:description` and the JSON-LD description.
- `image:` is the link-preview image (`og:image`, `twitter:image`). It defaults to `/assets/img/share/og-default.jpg`; posts set their own.
- **Use root-absolute paths** (`/CSS/...`, `/assets/...`, `/techblog/...`) everywhere. Never use `../`. The 404 page is served at any missing URL, so relative paths would break there.
- The one-line inline script adds `class="js"` to `<html>` before first paint, so the mobile menu is collapsed with no flash. `site.js` itself loads with **`defer`** (nav toggle, `aria-current`, footer year) and never blocks rendering.

**Header and nav** (`_includes/header.html`). `nav-current.html` marks the current section's link with `aria-current="page"`: Home only on `/`, any other link when the page URL starts with it, so posts under `/techblog/...` mark "Tech Blog". `site.js` applies the same rule in the browser; keep the two in step.

- Nav links end in a trailing slash (`/itcareer/`). Keep it that way. To add one, add it to `_data/navigation.yml`; it appears in the header and the footer.
- The last item is the Résumé button (`.site-nav__cta`, an outline `.btn--small`). It becomes a full-width button in the mobile drawer. Between 768 and 1023px the nav is tightened so all six items fit on one row; if you add a nav item, re-check 768px.

**Footer** (`_includes/footer.html`).

- The footer is green with **dark text** (`--color-on-accent`). White on `#02B875` fails WCAG contrast (2.6:1). Don't switch it back to white.
- The waves use `/Media/wave_green.png` (referenced relative to base.css). They sit above the footer. The footer gets its own top margin, so don't add extra spacing or `padding-bottom` hacks to make room for them.

## 2. How to add a page

1. Make a folder named after the URL with an `index.html` in it, e.g. `certifications/index.html` for `/certifications/`.
2. Start the file with front matter, then only the content that goes inside `<main>` (skeleton in §4):

```html
---
title: Certifications
description: "One sentence describing this page."
styles:
  - /CSS/certifications.css
# Optional page scripts, loaded at the end of <body>:
# scripts:
#   - /JS/tabs.js
---
        <header class="page-header container">
            <h1 class="page-header__title">Certifications</h1>
        </header>
        ...
```

3. Put page-only rules in `CSS/certifications.css` (§9), and add the page to `_data/navigation.yml` if it belongs in the nav.
4. It is added to `sitemap.xml` automatically. Add `sitemap: false` to the front matter to leave a page out.

## 3. How to add a blog post

1. Copy `_drafts/post-template.html` to `_posts/YYYY-MM-DD-slug.html`. The date in the file name is the publish date.
2. Fill in the front matter; the template explains each field:
   - `title` (plus optional `title_html` if the `<h1>` needs a `<br>`), `date`, `permalink: /techblog/slug/`, `description`
   - `category` and `tag_class` (Personal = `tag`, Career = `tag tag--info`, Resources = `tag tag--warning`), `read_time` (minutes, rounded up), `topics`
   - `summary` (card text), `card` (card photo: `src`, `srcset`, `width`, `height`, `alt`, optional `class`), `image` (share image)
3. Write the body under the front matter as plain HTML: `<p>` paragraphs, `<img class="post__image" ...>` images, and `<p class="post__signoff">~ Ben Paquette</p>` at the end.
4. Nothing else to edit. The post page, its card on `/techblog/` (newest first; the newest is featured), prev/next links (by date), the sitemap entry and BlogPosting JSON-LD are all generated.

- **Never change a published post's `permalink`**; it is the post's URL.
- Images: put web-sized copies in `assets/img/blog/` (an 800px long-edge copy plus a larger one, up to 1600px) and add them to `assets/img/MANIFEST.md`. Use `src` = the 800 file, a `srcset` with both, `sizes="(min-width: 800px) 44rem, 100vw"` and the 800 file's real `width`/`height`. The first image near the top of a post gets `fetchpriority="high"` and no `loading`; every other image gets `loading="lazy"`.
- Don't type `{{` or `{%` in post text; Jekyll reads them as Liquid. Wrap such text in `{% raw %}...{% endraw %}`.

## 4. Page skeleton for inner pages

The layout already writes `<main id="main">`; a page file holds only what goes inside it. The wrapper is shown here for context.

```html
<main id="main">
    <header class="page-header container">
        <span class="page-header__eyebrow">Optional small label</span>
        <h1 class="page-header__title">IT Career</h1>
        <p class="page-header__lead">Optional one-sentence intro.</p>
    </header>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Section heading</h2>
            ...
        </div>
    </section>
</main>
```

- **One `<h1>` per page.** Headings go in order after it (h2, h3). Don't use `<h1>`/`<h4>` for styling (e.g. the old `.cert-title` h1s and the `h4.category` elements). Use the right element and style it with a class.
- `.page-header__title` has no underline bar. Green is kept for links, buttons, the active nav item and at most one accent per view, so don't add decorative green rules or borders.

## 5. Design tokens (`:root` in base.css)

Always use tokens. Don't hard-code hex values, px font sizes or random spacing in page CSS.

**Colour:**
- `--color-bg` `#242424`, `--color-bg-alt` `#1c1c1c` (recessed bands), `--color-surface` `#2e2e2e` (cards), `--color-surface-hover`, `--color-border` `#3d3d3d`
- `--color-text` `#EBF2EB`, `--color-text-muted` `#b4bcb4`, `--color-heading` `#fff`
- `--color-accent` `#02B875`, `--color-accent-strong` (hover), `--color-accent-soft` (14% green tint for backgrounds), `--color-on-accent` (dark text for use on green)
- `--color-danger` `#ff6b6b`, `--color-warning` `#f5d547`, `--color-info` `#6cb6ff` (category colours for tags)

**Type:**
- `--font-body` is Inter. `--font-heading` is Poppins (applied to h1–h6 automatically).
- Fonts are self-hosted in `fonts/` (latin subset, `@font-face` at the top of base.css). Only these are loaded: **Inter 400 and 600, Inter 400 italic, Poppins 600 and 700.** Don't use other weights (500, 700 Inter, Poppins italic); the browser would fake them. Don't add Google Fonts `<link>`s. Every page preloads `/fonts/inter-latin.woff2` (the body font).
- Fluid scale: `--step--1` (small/meta), `--step-0` (body), `--step-1`, `--step-2`, `--step-3`, `--step-4`, `--step-5` (hero/page title). Defaults: h1 `--step-4`, h2 `--step-3`, h3 `--step-2`, h4 `--step-1`.
- Line heights: `--leading-tight`, `--leading-snug`, `--leading-body`.

**Spacing:**
- Scale: `--space-3xs` .25rem, `--space-2xs` .5, `--space-xs` .75, `--space-s` 1, `--space-m` 1.5, `--space-l` 2, `--space-xl` 3, `--space-2xl` 4.5, `--space-3xl` 6rem
- `--space-section` is the fluid vertical padding between sections. `--gutter` is the fluid container side padding.

**Layout:**
- `--container-max` 72rem (78rem at ≥1440px), `--container-wide` 84rem, `--container-narrow` 44rem
- `--header-h`

**Shape:**
- Radii: `--radius-s` 6px, `--radius-m` 12px, `--radius-l` 20px, `--radius-pill`
- Shadows: `--shadow-card`, `--shadow-lift`

**Motion:** `--ease`, `--dur-fast` 150ms, `--dur` 250ms

## 6. Breakpoints

Media queries can't read custom properties, so use these literal values. Write **mobile-first `min-width`** queries. Use `max-width` only for phone-only tweaks, with the `.98` form so it never overlaps the next range.

| Name | Query | Notes |
|---|---|---|
| Phone | default (no query) | Design for 320px first. There must be no horizontal scroll at 320. |
| Tablet | `@media (min-width: 600px)` | 2-column grids |
| Nav switch | `@media (min-width: 768px)` | Hamburger below this, inline nav at and above it |
| Laptop | `@media (min-width: 1024px)` | `.split` goes side by side, 3–4 column grids |
| Large | `@media (min-width: 1440px)` | Root font goes to 17px and the container widens slightly. Content stays capped. |

Phone-only override: `@media (max-width: 599.98px)`.

## 7. Layout primitives

| Class | Use |
|---|---|
| `.container` | Centred, max-width `--container-max`, fluid side padding. Wrap every section's content in it. |
| `.container--narrow` | Reading width (~70ch). Blog posts, long text. |
| `.container--wide` | Gallery. |
| `.section` | Standard vertical padding between page sections. |
| `.section--tight` | Half the padding. |
| `.section--alt` | Darker full-width band. |
| `.stack` | Even vertical spacing between direct children. Tune with `style="--stack-gap: var(--space-l)"` or in page CSS. |
| `.cluster` | Wrapping horizontal row (buttons, tags). `--cluster-gap`. |
| `.grid` | Auto-fitting responsive grid. Tune with `--grid-min` (default 18rem) and `--grid-gap`. For an exact column count per breakpoint, override `grid-template-columns` in page CSS (see `.explore__grid` in index.css). |
| `.split` | Two columns from 1024px, stacked below. `--split-cols` (default `1fr 1fr`), e.g. `--split-cols: 1fr 2fr` for photo + about text. |
| `.text-center`, `.text-muted`, `.accent` | Small helpers. `.accent` = green text, for highlighted words. |
| `.visually-hidden` | Screen-reader-only text. |

## 8. Components

**Buttons.** Use them on `<a>` or `<button>`.
- `.btn` is the primary: solid green with dark text.
- `.btn--outline` is secondary.
- `.btn--small` is compact.
- The IT Career "Download Resume" button becomes `<a class="btn" href="/Media/Resume_Paquette.pdf" download>`.

**Cards.** Blog cards, project items, explore links. (Blog cards on `/techblog/` are generated from post front matter; this is the markup they produce. The newest post adds `.blog-card--featured`, which spans two columns from 1024px.)

```html
<article class="card card--link">
    <div class="card__media"><img src="/assets/img/blog/blog-post-1-800.jpg" srcset="/assets/img/blog/blog-post-1-800.jpg 800w, /assets/img/blog/blog-post-1-1600.jpg 1600w" sizes="(min-width: 1024px) 33vw, (min-width: 600px) 50vw, 100vw" alt="..." loading="lazy" width="800" height="533"></div>
    <div class="card__body">
        <p class="blog-card__meta"><time datetime="2024-05-12">May 12, 2024</time><span aria-hidden="true">&middot;</span><span>5 min read</span></p>
        <h2 class="card__title"><a class="card__link" href="/techblog/slug/">Title</a></h2>
        <p class="card__text">Summary</p>
        <div class="card__footer"><span class="tag">Personal</span><span class="card__cue" aria-hidden="true">Read post <i class="fa-solid fa-arrow-right"></i></span></div>
    </div>
</article>
```

- `.card--link` together with the single `.card__link` makes the whole card clickable (a stretched `::after`), and gives it a hover lift and focus ring. Leave both off for static cards (e.g. project items).
- `.card__media` crops images to 16:10. Change the ratio with `--card-ratio: 4 / 3`.
- Dates are written `May 12, 2024` (no "th"/"nd") inside `<time datetime="YYYY-MM-DD">`. Read times are `N min read`, rounded up to a whole minute.
- `.card__icon` is a green-tinted icon tile.
- `.card__cue` is the visible "Read post →" style cue on `.card--link` cards (`<span class="card__cue" aria-hidden="true">Read post <i class="fa-solid fa-arrow-right"></i></span>`). Every whole-card link gets one so it reads as a link without hover.

**Tags.** `.tag` is a green pill ("Personal"). Add `.tag--info` (blue, the blog's "Career" category), `.tag--warning` (yellow, "Resources") or `.tag--danger` (red), or set a custom `--tag-color`. The text colour is lifted toward white automatically so every variant stays above 4.5:1; check a custom colour against `--color-surface` before using it.

**Headings.**
- `.section-title` is an h2 with standard bottom margin.
- `.eyebrow` is a small uppercase green label above a heading.

**Prose.** Put `.prose` on blog `.post-content` and other long text. It spaces paragraphs, lists, headings, images and blockquotes. **Delete the `<br>` elements between paragraphs** in blog posts, because `.prose` handles the spacing.

Inside `.prose`, long links wrap anywhere, `<pre><code>` blocks scroll sideways, tables go in `<div class="table-wrap">` (scrolls if too wide) and video iframes go in `<div class="embed">` (16:9).

Not provided (build these in page CSS, using tokens):
- IT Career tabs and progress bars. For tabs, use `<button role="tab" aria-selected aria-controls>` inside `role="tablist"` instead of `<p onclick>`. Page-local JS is fine.
- Gallery masonry.
- Blog post prev/next links.

## 9. Conventions

- **Page CSS holds only page-specific rules.** It starts with `/* <page>.css — <page> only. Loaded after base.css. Mobile-first. */`. Delete the duplicated reset/header/nav/footer blocks entirely. Don't re-declare `*`, `body`, `nav ul li`, `.container` or `.footer`.
- **Naming:** BEM-ish, `block__element--modifier`, prefixed by the page's block (`.about__photo`, `.blog-card__meta`, `.gallery__grid`). Don't style bare element selectors like `nav ul li` or `h1` in page CSS. Scope them to a class.
- **Mobile-first:** base rules target phones, and `min-width` queries add columns and size. Don't use fixed px widths. Use `%`, `fr`, `min()`, `clamp()` and tokens. Sizes of text come from `--step-*`.
- **Images:** base.css already applies `max-width: 100%; height: auto`. Add `alt` (empty `alt=""` for decorative images), `loading="lazy"` for anything below the fold, and `width`/`height` attributes when you know them, to avoid layout shift. Use the web-sized copies in `assets/img/` with `srcset`/`sizes` (see §3 and `assets/img/MANIFEST.md`), never the full-size originals. **Never modify, move or delete anything in `images/` or `CSS/images/`**: those originals stay in the repo but are excluded from the build. If a page starts referencing one again, remove it from `exclude:` in `_config.yml`.
- **Links:** external links get `target="_blank" rel="noopener"`.
- **Icons:** Font Awesome icons get `aria-hidden="true"`. Icon-only links get an `aria-label`.
- **Focus:** base.css gives everything a green `:focus-visible` outline. Don't remove outlines. If you restyle focus, keep it visible.
- **Motion:** base.css switches off animations and transitions under `prefers-reduced-motion`. For new animations, prefer `transform`/`opacity`.
- **No inline `style=""` for colours.** Use the tag modifiers or tokens.
- **Testing:** check 320, 375, 768, 1024, 1366 and 1920 widths, and confirm `document.documentElement.scrollWidth === clientWidth` at 320. Headless Chrome on Windows won't lay out narrower than about 500px with `--window-size`. To test narrow widths, render the page inside an `<iframe>` of the target width, or use DevTools device mode. Root-absolute paths need an HTTP server (not `file://`).
