# txttocsv.com

Free, browser-based TXT to CSV converter (and reverse), built with Astro. Static output, zero runtime, all conversion runs client-side.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to /dist
```

## Deploy
Push to GitHub, then import into Vercel or Cloudflare Pages. Framework preset: Astro. Build command `npm run build`, output dir `dist`. No env vars needed.

## Before you apply to AdSense: replace these placeholders
These are marked with `TODO` or in italics in the code. Faking any of them breaks your own "no fake anything" rule.

1. **Author identity.** In `src/content/config.ts` (default author), `src/pages/blog/[slug].astro` (`person.sameAs`), and `src/pages/about.astro` (`sameAs` + the italic bio paragraph). Put your real name, a real photo, and real X / LinkedIn / GitHub URLs.
2. **Analytics provider.** Add Plausible or GA4 to `src/layouts/Base.astro` and name it in `src/pages/privacy.astro`.
3. **AdSense code.** Add your publisher script to `Base.astro` head after approval. Ad slots are pre-reserved (`.ad-slot`, fixed height) so they will not cause layout shift.
4. **Jurisdiction.** Have `privacy.astro` and `terms.astro` reviewed against your actual operating country/entity.
5. **OG image.** Add `public/og-default.png` (1200x630). Referenced already in `Base.astro`.

## Do this in Search Console on day one
Verify the domain, submit `https://txttocsv.com/sitemap-index.xml`, request indexing on the homepage and the flagship article.

## Content queue (mapped to your keyword file)
The flagship pillar is written: `how-to-convert-txt-to-csv`. It links to the pages below, so publish them next, one per week, written from real use. Order = fastest to rank first.

| # | Slug | Primary keyword | Vol | KD | Cluster |
|---|------|-----------------|-----|----|---------|
| 1 | txt-to-csv-format | txt to csv format | 480 | 9 | head, easy win |
| 2 | csv-to-txt-converter | csv to txt converter | 110 | 3 | reverse, easy win |
| 3 | txt-to-csv-in-excel | convert txt to csv excel | ~200 | low | Excel (37 kw) |
| 4 | txt-to-csv-python-pandas | convert txt to csv python | ~200 | mid | Python (164 kw) |
| 5 | txt-to-csv-command-line | powershell/linux convert txt to csv | ~150 | mid | CLI (112 kw) |
| 6 | txt-to-csv-notepad | convert txt to csv notepad++ | ~80 | mid | Notepad++ (10 kw) |
| 7 | tab-delimited-txt-to-csv | tab delimited txt to csv | ~90 | mid | delimiter (69 kw) |
| 8 | batch-convert-txt-to-csv | batch convert txt to csv | ~70 | mid | batch (41 kw) |
| 9 | txt-to-csv-google-sheets | txt to csv google sheets | ~40 | low | Sheets (3 kw) |
| 10 | fix-csv-opening-one-column-excel | csv opens in one column | mid | mid | Excel error |

Each new post: create `src/content/blog/<slug>.md` using the flagship's frontmatter shape (metaTitle 40-65, description 100-165, faq, related). Add it to the related-links of siblings so internal linking stays dense (4-6 links per post).

## What is already done
- Bidirectional converter, RFC 4180 quoting, delimiter auto-detect, file drop, UTF-8+BOM export, copy/download. All local.
- Full SEO on every page: canonical, OG/Twitter, one H1, JSON-LD (WebApplication, Organization, WebSite, Article, HowTo-ready, FAQPage, BreadcrumbList, ContactPage, AboutPage).
- E-E-A-T pages: about, methodology (editorial policy), contact.
- Legal: privacy (discloses AdSense cookies + third-party ads), terms.
- Auto sitemap + robots.txt. Accessible: skip link, focus states, labelled controls, reduced-motion, mobile nav.
- Zero em-dashes, no AI-tell phrases.
