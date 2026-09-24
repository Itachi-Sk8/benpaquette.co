# Image manifest

Web-sized copies generated from the originals, which are untouched. All JPEGs are baseline sRGB, 4:2:0, metadata stripped (no EXIF/GPS). Dimensions below are the exact pixel sizes to use for `width`/`height` attributes. Sizes: KB = 1024 bytes.

Formats: JPEG for photos, PNG for the UI screenshot and icons, SVG favicon. No WebP: no WebP encoder was found on the build machine (no `cwebp`; GDI+ has no WebP encoder, and the Windows WebP extension only decodes).

## Gallery (`gallery/index.html`)

Source for every size is the full-resolution original (the `href` file). Suggested wiring: `src` = `-800`, `srcset` = `-800 800w, -1600 1600w`, link `href` = `-2560`. Order below is page order.

| # | Current thumbnail `src` | Current full-size `href` | New 800 | New 1600 | New full-size 2560 |
|---|---|---|---|---|---|
| 1 | `/CSS/images/JPG/1.jpg` 6024×4020, 4.2 MB | `/images/1.png` 6024×4020, 45.2 MB | `/assets/img/gallery/1-800.jpg` 800×534, 87 KB | `/assets/img/gallery/1-1600.jpg` 1600×1068, 309 KB | `/assets/img/gallery/1-2560.jpg` 2560×1708, 775 KB |
| 2 | `/CSS/images/JPG/2.jpg` 4020×6024, 5.3 MB | `/images/2.png` 4020×6024, 46.7 MB | `/assets/img/gallery/2-800.jpg` 534×800, 101 KB | `/assets/img/gallery/2-1600.jpg` 1068×1600, 366 KB | `/assets/img/gallery/2-2560.jpg` 1708×2560, 923 KB |
| 3 | `/CSS/images/JPG/3.jpg` 6024×4020, 3.9 MB | `/images/3.png` 6024×4020, 45.6 MB | `/assets/img/gallery/3-800.jpg` 800×534, 80 KB | `/assets/img/gallery/3-1600.jpg` 1600×1068, 273 KB | `/assets/img/gallery/3-2560.jpg` 2560×1708, 678 KB |
| 4 | `/CSS/images/JPG/4.jpg` 6024×4020, 4.8 MB | `/images/4.png` 6024×4020, 48.0 MB | `/assets/img/gallery/4-800.jpg` 800×534, 98 KB | `/assets/img/gallery/4-1600.jpg` 1600×1068, 356 KB | `/assets/img/gallery/4-2560.jpg` 2560×1708, 898 KB |
| 17 | `/CSS/images/JPG/17.jpg` 6024×4020, 2.6 MB | `/images/17.png` 6024×4020, 41.8 MB | `/assets/img/gallery/17-800.jpg` 800×534, 46 KB | `/assets/img/gallery/17-1600.jpg` 1600×1068, 137 KB | `/assets/img/gallery/17-2560.jpg` 2560×1708, 338 KB |
| 16 | `/CSS/images/JPG/16.jpg` 3754×5625, 3.7 MB | `/images/16.png` 3754×5625, 40.0 MB | `/assets/img/gallery/16-800.jpg` 534×800, 97 KB | `/assets/img/gallery/16-1600.jpg` 1068×1600, 333 KB | `/assets/img/gallery/16-2560.jpg` 1708×2560, 800 KB |
| 21 | `/CSS/images/JPG/21.jpg` 4426×2953, 1.5 MB | `/images/21.png` 4426×2953, 20.3 MB | `/assets/img/gallery/21-800.jpg` 800×534, 54 KB | `/assets/img/gallery/21-1600.jpg` 1600×1068, 180 KB | `/assets/img/gallery/21-2560.jpg` 2560×1708, 443 KB |
| 22 | `/images/22.jpg` 6024×4020, 2.6 MB | `/images/22.jpg` 6024×4020, 2.6 MB | `/assets/img/gallery/22-800.jpg` 800×534, 52 KB | `/assets/img/gallery/22-1600.jpg` 1600×1068, 155 KB | `/assets/img/gallery/22-2560.jpg` 2560×1708, 375 KB |
| 26 | `/CSS/images/JPG/26.jpg` 2623×3554, 432 KB | `/images/26.png` 2623×3554, 3.4 MB | `/assets/img/gallery/26-800.jpg` 590×800, 23 KB | `/assets/img/gallery/26-1600.jpg` 1181×1600, 71 KB | `/assets/img/gallery/26-2560.jpg` 1889×2560, 173 KB |
| 6 | `/CSS/images/JPG/6.jpg` 5592×3968, 3.7 MB | `/images/6.png` 5592×3968, 39.7 MB | `/assets/img/gallery/6-800.jpg` 800×568, 109 KB | `/assets/img/gallery/6-1600.jpg` 1600×1135, 364 KB | `/assets/img/gallery/6-2560.jpg` 2560×1817, 848 KB |
| 7 | `/CSS/images/JPG/7.jpg` 6024×4020, 3.7 MB | `/images/7.png` 6024×4020, 43.7 MB | `/assets/img/gallery/7-800.jpg` 800×534, 95 KB | `/assets/img/gallery/7-1600.jpg` 1600×1068, 319 KB | `/assets/img/gallery/7-2560.jpg` 2560×1708, 750 KB |
| 8 | `/CSS/images/JPG/8.jpg` 4020×6024, 4.3 MB | `/images/8.png` 4020×6024, 47.0 MB | `/assets/img/gallery/8-800.jpg` 534×800, 104 KB | `/assets/img/gallery/8-1600.jpg` 1068×1600, 350 KB | `/assets/img/gallery/8-2560.jpg` 1708×2560, 833 KB |
| 9 | `/CSS/images/JPG/9.jpg` 6024×4020, 4.3 MB | `/images/9.png` 6024×4020, 46.0 MB | `/assets/img/gallery/9-800.jpg` 800×534, 95 KB | `/assets/img/gallery/9-1600.jpg` 1600×1068, 331 KB | `/assets/img/gallery/9-2560.jpg` 2560×1708, 817 KB |
| 10 | `/CSS/images/JPG/10.jpg` 4020×6024, 2.6 MB | `/images/10.png` 4020×6024, 39.6 MB | `/assets/img/gallery/10-800.jpg` 534×800, 58 KB | `/assets/img/gallery/10-1600.jpg` 1068×1600, 180 KB | `/assets/img/gallery/10-2560.jpg` 1708×2560, 424 KB |
| 18 | `/CSS/images/JPG/18.jpg` 6024×4020, 1.9 MB | `/images/18.png` 6024×4020, 34.3 MB | `/assets/img/gallery/18-800.jpg` 800×534, 41 KB | `/assets/img/gallery/18-1600.jpg` 1600×1068, 127 KB | `/assets/img/gallery/18-2560.jpg` 2560×1708, 314 KB |
| 19 | `/CSS/images/JPG/19.jpg` 3446×5163, 3.1 MB | `/images/19.png` 3446×5163, 33.1 MB | `/assets/img/gallery/19-800.jpg` 534×800, 94 KB | `/assets/img/gallery/19-1600.jpg` 1068×1600, 327 KB | `/assets/img/gallery/19-2560.jpg` 1709×2560, 778 KB |
| 23 | `/images/23.jpg` 4781×3860, 6.4 MB | `/images/23.jpg` 4781×3860, 6.4 MB | `/assets/img/gallery/23-800.jpg` 800×646, 64 KB | `/assets/img/gallery/23-1600.jpg` 1600×1292, 311 KB | `/assets/img/gallery/23-2560.jpg` 2560×2067, 1.0 MB |
| 24 | `/CSS/images/JPG/24.jpg` 3627×5436, 4.0 MB | `/images/24.png` 3627×5436, 43.0 MB | `/assets/img/gallery/24-800.jpg` 534×800, 34 KB | `/assets/img/gallery/24-1600.jpg` 1068×1600, 135 KB | `/assets/img/gallery/24-2560.jpg` 1708×2560, 479 KB |
| 11 | `/CSS/images/JPG/11.jpg` 4020×6024, 3.7 MB | `/images/11.png` 4020×6024, 45.7 MB | `/assets/img/gallery/11-800.jpg` 534×800, 69 KB | `/assets/img/gallery/11-1600.jpg` 1068×1600, 241 KB | `/assets/img/gallery/11-2560.jpg` 1708×2560, 610 KB |
| 12 | `/CSS/images/JPG/12.jpg` 4020×6024, 2.7 MB | `/images/12.png` 4020×6024, 41.0 MB | `/assets/img/gallery/12-800.jpg` 534×800, 52 KB | `/assets/img/gallery/12-1600.jpg` 1068×1600, 165 KB | `/assets/img/gallery/12-2560.jpg` 1708×2560, 397 KB |
| 13 | `/CSS/images/JPG/13.jpg` 4020×6024, 3.3 MB | `/images/13.png` 4020×6024, 42.8 MB | `/assets/img/gallery/13-800.jpg` 534×800, 70 KB | `/assets/img/gallery/13-1600.jpg` 1068×1600, 243 KB | `/assets/img/gallery/13-2560.jpg` 1708×2560, 602 KB |
| 14 | `/CSS/images/JPG/14.jpg` 3911×5860, 2.7 MB | `/images/14.png` 3911×5860, 32.6 MB | `/assets/img/gallery/14-800.jpg` 534×800, 71 KB | `/assets/img/gallery/14-1600.jpg` 1068×1600, 227 KB | `/assets/img/gallery/14-2560.jpg` 1709×2560, 540 KB |
| 15 | `/CSS/images/JPG/15.jpg` 6024×4020, 3.3 MB | `/images/15.png` 6024×4020, 41.6 MB | `/assets/img/gallery/15-800.jpg` 800×534, 62 KB | `/assets/img/gallery/15-1600.jpg` 1600×1068, 218 KB | `/assets/img/gallery/15-2560.jpg` 2560×1708, 553 KB |
| 20 | `/CSS/images/JPG/20.jpg` 5706×3933, 2.1 MB | `/images/20.png` 5706×3933, 29.5 MB | `/assets/img/gallery/20-800.jpg` 800×551, 75 KB | `/assets/img/gallery/20-1600.jpg` 1600×1103, 208 KB | `/assets/img/gallery/20-2560.jpg` 2560×1765, 448 KB |
| 25 | `/CSS/images/JPG/25.jpg` 3256×4560, 2.0 MB | `/images/25.png` 3256×4560, 16.7 MB | `/assets/img/gallery/25-800.jpg` 571×800, 56 KB | `/assets/img/gallery/25-1600.jpg` 1142×1600, 179 KB | `/assets/img/gallery/25-2560.jpg` 1828×2560, 479 KB |
| 27 | `/images/27.jpg` 5757×4020, 10.2 MB | `/images/27.jpg` 5757×4020, 10.2 MB | `/assets/img/gallery/27-800.jpg` 800×559, 117 KB | `/assets/img/gallery/27-1600.jpg` 1600×1117, 432 KB | `/assets/img/gallery/27-2560.jpg` 2560×1788, 1.2 MB |

**Totals (26 photos):** thumbnails currently 93.2 MB → 1.9 MB at 800 px (6.4 MB at 1600 px for 2× screens). Full-size links currently 886.4 MB → 16.1 MB at 2560 px. All gallery outputs together: 24.4 MB.

Notes: photos 22, 23 and 27 currently use the ~3–11 MB full JPEG as their thumbnail too. The source PNGs carry a standard gAMA 1/2.2 chunk and no ICC profile; colour of the outputs was checked against the existing JPG thumbnails (mean RGB within 0.2). `/images/5.png`, `CALS*.png`, `clouds.png`, `food.png`, `lake.png`, `lamp.png` exist but are not referenced by the gallery page, so were not processed.

## Blog (`techblog/**`)

Long edge 800 and 1600, never upscaled: when the original is smaller than 1600 the largest file is the original size and its name carries that size (e.g. `cybersecurity-1-1280.jpg`). File names are lower-cased.

| Original (as referenced) | Used in | Original | New files |
|---|---|---|---|
| `/CSS/images/blog-post-1.jpg` | `techblog/index.html` card | 6000×4000, 3.7 MB | `/assets/img/blog/blog-post-1-1600.jpg` 1600×1067, 151 KB<br>`/assets/img/blog/blog-post-1-800.jpg` 800×533, 46 KB |
| `/CSS/images/blog-post-2.jpg` | `techblog/index.html` card | 2750×1659, 876 KB | `/assets/img/blog/blog-post-2-1600.jpg` 1600×965, 200 KB<br>`/assets/img/blog/blog-post-2-800.jpg` 800×483, 50 KB |
| `/CSS/images/blog-post-3.JPG` | `techblog/index.html` card | 3417×3022, 1,023 KB | `/assets/img/blog/blog-post-3-1600.jpg` 1600×1415, 298 KB<br>`/assets/img/blog/blog-post-3-800.jpg` 800×708, 91 KB |
| `/CSS/images/grey-hack-1.jpg` | `techblog/tech-resource-guide/grey-hack/` | 1920×1080, 349 KB | `/assets/img/blog/grey-hack-1-1600.jpg` 1600×900, 148 KB<br>`/assets/img/blog/grey-hack-1-800.jpg` 800×450, 51 KB |
| `/CSS/images/grey-hack-2.jpg` | `techblog/tech-resource-guide/grey-hack/` | 329×153, 5 KB | `/assets/img/blog/grey-hack-2-329.jpg` 329×153, 8 KB |
| `/CSS/images/grey-hack-3.jpg` | `techblog/index.html` card; `techblog/tech-resource-guide/grey-hack/` | 1920×1080, 256 KB | `/assets/img/blog/grey-hack-3-1600.jpg` 1600×900, 132 KB<br>`/assets/img/blog/grey-hack-3-800.jpg` 800×450, 47 KB |
| `/CSS/images/grey-hack-4.jpg` | `techblog/tech-resource-guide/grey-hack/` | 962×298, 49 KB | `/assets/img/blog/grey-hack-4-962.jpg` 962×298, 33 KB<br>`/assets/img/blog/grey-hack-4-800.jpg` 800×248, 25 KB |
| `/CSS/images/Paquette_HDI_Certification.jpg` | `techblog/index.html` card | 3508×2481, 387 KB | `/assets/img/blog/paquette_hdi_certification-1600.jpg` 1600×1132, 163 KB<br>`/assets/img/blog/paquette_hdi_certification-800.jpg` 800×566, 63 KB |
| `/CSS/images/cybersecurity-1.jpg` | `techblog/clinical-trials-coordinator-to-the-world-of-information-technology/` | 1280×717, 168 KB | `/assets/img/blog/cybersecurity-1-1280.jpg` 1280×717, 100 KB<br>`/assets/img/blog/cybersecurity-1-800.jpg` 800×448, 50 KB |
| `/CSS/images/nola-1.jpg` | `techblog/clinical-trials-coordinator-to-the-world-of-information-technology/` | 1280×853, 431 KB | `/assets/img/blog/nola-1-1280.jpg` 1280×853, 258 KB<br>`/assets/img/blog/nola-1-800.jpg` 800×533, 113 KB |
| `/CSS/images/application-1.png` | `techblog/the-journey-to-the-helpdesk/` | 1334×743, 57 KB | `/assets/img/blog/application-1-1334.png` 1334×743, 54 KB<br>`/assets/img/blog/application-1-800.png` 800×446, 51 KB |

**Totals (11 images):** originals 7.2 MB → 596 KB for the smallest variant of each, 2.1 MB for all variants.

Notes:
- `application-1.png` is a Gmail screenshot with small text, so it stays PNG (JPEG would ring around the text). The 1334 px re-encode is about the same size as the original; the gain is only the 800 px copy.
- `blog-post-2.jpg` is an iPhone photo in **Display P3**; it was converted to sRGB before resizing, so colours match what browsers show for the original.
- `Paquette_HDI_Certification.jpg` is a certificate with text; encoded at q85 (others q80).
- `grey-hack-2.jpg` (329×153) is already tiny; the re-encode is slightly larger than the original (5.5 KB → 7.7 KB). Keeping the original is equally fine.
- `Blog/post-template.html` references `/CSS/images/IMAGE.jpg`, a placeholder that does not exist. Not processed.

## Profile

| Original (as referenced) | Used in | Original | New files |
|---|---|---|---|
| `/Media/BEN_2.jpg` | `index.html` (studio headshot) | 1080×1080, 187 KB | `/assets/img/profile/ben-headshot-800.jpg` 800×800, 78 KB<br>`/assets/img/profile/ben-headshot-400.jpg` 400×400, 20 KB |
| `/Media/Benjamin-Paquette.png` | `itcareer/index.html` (portrait) | 1000×1000, 1.6 MB | `/assets/img/profile/ben-portrait-800.jpg` 800×800, 92 KB<br>`/assets/img/profile/ben-portrait-400.jpg` 400×400, 28 KB |

**Totals:** originals 1.7 MB → 218 KB for both sizes of both images. The portrait PNG (1.6 MB) becomes 92 KB at 800 px.

## Share image and icons (new, no original)

| File | Pixels | Size | Use |
|---|---|---|---|
| `/assets/img/share/og-default.jpg` | 1200×630 | 60 KB | `og:image` / `twitter:image` (summary_large_image). Headshot, name, "IT Support · Information Technology", BP mark, on #242424. |
| `/assets/img/icons/favicon.svg` | 32×32 (viewBox) | 1 KB | `<link rel="icon" type="image/svg+xml" href="…">`. "BP" baked into outlines, so no font dependency. |
| `/assets/img/icons/favicon-32.png` | 32×32 | 1 KB | `<link rel="icon" type="image/png" sizes="32x32" href="…">`. Replaces `/Media/favicon.png` (64×64, 4 KB). |
| `/assets/img/icons/apple-touch-icon.png` | 180×180 | 2 KB | `<link rel="apple-touch-icon" href="…">`. Full-bleed green, iOS rounds the corners itself. |

The monogram matches `.site-brand__mark` in `CSS/base.css` (#02B875 tile, #10231a bold "BP", 6/32 corner radius). Poppins is not installed on the build machine, so the lettering is Segoe UI Bold.

## Referenced but not processed

- `/CSS/images/IMAGE.jpg` (`Blog/post-template.html`): placeholder, the file does not exist.
- `/Media/favicon.png` (every page): superseded by `icons/favicon.svg` + `icons/favicon-32.png`; not copied.
- `/Media/wave_green.png` (`CSS/base.css`, `CSS/website_template.css` footer wave, 640×65, 3 KB): already small, left as is.

## Summary

| Section | Before (what pages load today) | After |
|---|---|---|
| Gallery thumbnails | 93.2 MB | 1.9 MB (800) / 6.4 MB (1600) |
| Gallery full-size links | 886.4 MB | 16.1 MB |
| Blog | 7.2 MB | 596 KB (smallest each) / 2.1 MB (all) |
| Profile | 1.7 MB | 218 KB (all four files) |
| Everything in `assets/img/` | n/a | 26.7 MB |

Generated with PowerShell + System.Drawing (HighQualityBicubic, TileFlipXY wrap). JPEG quality: gallery 78 (800/1600) and 82 (2560), blog 80 (certificate 85), profile 82, share image 88.
