# Site foundation: how to build a page

This is for anyone migrating a page onto the shared foundation. `index.html` + `CSS/index.css` is the reference implementation. Copy from it.

Files:

| File | Purpose |
|---|---|
| `CSS/base.css` | Tokens, reset, layout primitives, header/nav, page header, components, footer. **Shared: don't put page-specific rules here.** |
| `JS/site.js` | Mobile nav toggle, `aria-current` on nav links, footer year. No dependencies. Loaded with `defer`; the `js` class is set by an inline script in `<head>`. |
| `CSS/<page>.css` | Page-specific styles only (e.g. `itcareer.css`, `blog.css`, `Blog Posts/blog-post.css`). Loaded **after** `base.css`. |

## 1. `<head>` (exact order)

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IT Career | Ben Paquette</title>
    <meta name="description" content="One sentence describing this page.">
    <meta name="author" content="Ben Paquette">
    <meta name="theme-color" content="#242424">
    <meta name="color-scheme" content="dark">
    <link rel="icon" type="image/png" href="/Media/favicon.png">

    <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="/CSS/base.css">
    <link rel="stylesheet" href="/CSS/PAGE.css">
    <script>document.documentElement.classList.add("js");</script>
    <script src="/JS/site.js" defer></script>
</head>
```

- Title format: `Page Name | Ben Paquette`. For a blog post: `Post Title | Ben Paquette`.
- **Use root-absolute paths** (`/CSS/...`, `/Media/...`, `/techblog/...`) everywhere. Never use `../`.
- The blog-post stylesheet path contains a space. Write it as `/CSS/Blog%20Posts/blog-post.css`.
- The one-line inline script adds `class="js"` to `<html>` before first paint, so the mobile menu is collapsed with no flash. Keep it inline in `<head>`. `site.js` itself loads with **`defer`** (nav toggle, `aria-current`, footer year) and never blocks rendering.
- **Remove** from every page: the ionicons `<script>` tags, the `kit.fontawesome.com` script (it duplicates the cdnjs CSS), `X-UA-Compatible`, the dead `opentab`/`openmenu` code on pages that don't use it, and stray `<title>` tags inside `<body>` (gallery has one).

## 2. Header + nav (paste right after `<body>`)

```html
<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header">
    <div class="container site-header__inner">
        <a class="site-brand" href="/">
            <span class="site-brand__mark" aria-hidden="true">BP</span>
            Ben Paquette
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
            <span class="nav-toggle__bars" aria-hidden="true"></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Main">
            <ul class="site-nav__list">
                <li><a class="site-nav__link" href="/">Home</a></li>
                <li><a class="site-nav__link" href="/itcareer/">IT Career</a></li>
                <li><a class="site-nav__link" href="/techblog/">Tech Blog</a></li>
                <li><a class="site-nav__link" href="/gallery/">Gallery</a></li>
                <li><a class="site-nav__link" href="/projects/">Projects</a></li>
                <li class="site-nav__cta-item"><a class="btn btn--outline btn--small site-nav__cta" href="/Media/Resume_Paquette.pdf">R&eacute;sum&eacute;</a></li>
            </ul>
        </nav>
    </div>
</header>

<main id="main">
    ... page content ...
</main>
```

- Put `aria-current="page"` on the current section's link in the markup as well; it covers visitors without JS. `site.js` sets it anyway, and blog posts under `/techblog/...` highlight "Tech Blog" automatically.
- Nav links end in a trailing slash (`/itcareer/`). Keep it that way.
- The last item is the Résumé button (`.site-nav__cta`, an outline `.btn--small`). It becomes a full-width button in the mobile drawer. Between 768 and 1023px the nav is tightened so all six items fit on one row; if you add a nav item, re-check 768px.
- The old `.title` / `.line-break` / `.header` / `.container-header` markup goes away. The page title now lives inside `<main>` as a `.page-header` (see below). The site name is in the header brand.

## 3. Footer (paste right before `</body>`)

```html
<footer class="site-footer">
    <div class="site-footer__waves" aria-hidden="true">
        <div class="site-footer__wave"></div>
        <div class="site-footer__wave"></div>
        <div class="site-footer__wave"></div>
    </div>
    <div class="container site-footer__inner">
        <ul class="social-links">
            <li><a class="social-links__link" href="mailto:paquetteb21@gmail.com" aria-label="Email Ben"><i class="fa-solid fa-envelope" aria-hidden="true"></i></a></li>
            <li><a class="social-links__link" href="https://github.com/bennyP251/" target="_blank" rel="noopener" aria-label="GitHub (opens in a new tab)"><i class="fa-brands fa-github" aria-hidden="true"></i></a></li>
            <li><a class="social-links__link" href="https://www.linkedin.com/in/benjamin-paquette-/" target="_blank" rel="noopener" aria-label="LinkedIn (opens in a new tab)"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a></li>
        </ul>
        <nav aria-label="Footer">
            <ul class="footer-nav__list">
                <li><a class="footer-nav__link" href="/">Home</a></li>
                <li><a class="footer-nav__link" href="/itcareer/">IT Career</a></li>
                <li><a class="footer-nav__link" href="/techblog/">Tech Blog</a></li>
                <li><a class="footer-nav__link" href="/gallery/">Gallery</a></li>
                <li><a class="footer-nav__link" href="/projects/">Projects</a></li>
            </ul>
        </nav>
        <p class="site-footer__copy">&copy; <span data-current-year>2025</span> Benjamin Paquette. All rights reserved.</p>
    </div>
</footer>
```

- The footer is green with **dark text** (`--color-on-accent`). White on `#02B875` fails WCAG contrast (2.6:1). Don't switch it back to white.
- The waves use `/Media/wave_green.png` (referenced relative to base.css). They sit above the footer. The footer gets its own top margin, so don't add extra spacing or `padding-bottom` hacks to make room for them.
- Delete every old `.footer`, `.wave`, `#wave1..4`, `.social-icon*`, `.menu*` rule from the page CSS.

## 4. Page skeleton for inner pages

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

**Cards.** Blog cards, project items, explore links.

```html
<article class="card card--link">
    <div class="card__media"><img src="/CSS/images/blog-post-1.jpg" alt="..." loading="lazy" width="800" height="500"></div>
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
- **Images:** base.css already applies `max-width: 100%; height: auto`. Add `alt` (empty `alt=""` for decorative images), `loading="lazy"` for anything below the fold, and `width`/`height` attributes when you know them, to avoid layout shift. **Never modify, move or re-encode anything in `images/` or `CSS/images/`**. Just reference them.
- **Links:** external links get `target="_blank" rel="noopener"`.
- **Icons:** Font Awesome icons get `aria-hidden="true"`. Icon-only links get an `aria-label`.
- **Focus:** base.css gives everything a green `:focus-visible` outline. Don't remove outlines. If you restyle focus, keep it visible.
- **Motion:** base.css switches off animations and transitions under `prefers-reduced-motion`. For new animations, prefer `transform`/`opacity`.
- **No inline `style=""` for colours.** Use the tag modifiers or tokens.
- **Testing:** check 320, 375, 768, 1024, 1366 and 1920 widths, and confirm `document.documentElement.scrollWidth === clientWidth` at 320. Headless Chrome on Windows won't lay out narrower than about 500px with `--window-size`. To test narrow widths, render the page inside an `<iframe>` of the target width, or use DevTools device mode. Root-absolute paths need an HTTP server (not `file://`).
