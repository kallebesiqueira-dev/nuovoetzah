<div align="center">

# EtzahWeb

**A trilingual, SEO-complete marketing site built with no framework and no backend.**

[![Live site](https://img.shields.io/badge/live-www.etzahweb.com-1a1aff?style=for-the-badge)](https://www.etzahweb.com)
[![CI](https://github.com/kallebesiqueira-dev/nuovoetzah/actions/workflows/ci.yml/badge.svg)](https://github.com/kallebesiqueira-dev/nuovoetzah/actions/workflows/ci.yml)

![EtzahWeb](docs/img/hero-preview.png)

</div>

---

## What this is

The production site for **EtzahWeb**, a web studio based in Ticino, Switzerland. It is a real commercial site serving real clients — not a demo.

It is also an experiment worth reading if you build for the web: **how much can you ship before reaching for a framework?**

No React. No build step. No bundler. No backend. No npm dependencies at runtime. What it does have:

- Full internationalisation across **three languages** (Italian, Portuguese, English)
- A complete SEO surface — sitemap, `robots.txt`, canonical tags, Open Graph, web manifest
- Privacy policy and terms pages
- A working contact form
- Continuous integration

The whole thing is three files of source: `index.html`, `style.css`, `main.js` — plus `i18n.js`.

---

## The interesting part: i18n without a library

Most sites reach for `i18next` or `next-intl` the moment a second language appears. This one implements the runtime by hand, in 180 lines, driving 1,284 lines of translation data.

`docs/i18n.js` exposes a small global API:

```js
window.I18N = {
  init,            // detect language, wire up switchers, apply translations
  setLanguage,     // switch at runtime and persist the choice
  t,               // t('hero.title', fallback) — nested key lookup
  onChange,        // subscribe to language changes, returns an unsubscribe fn
  getCurrentLang
}
```

Design decisions worth noting:

**Nested keys, flat call site.** Translations are authored as nested objects (`hero.title`, `nav.services`) for readability, but `t()` resolves a dotted path at lookup time. Authors get structure; callers get one function.

**Language resolution order.** `localStorage` → browser language → Italian as the fallback. A returning visitor keeps their choice; a first-time visitor gets a sensible guess; nobody ever sees an empty string.

**Subscribers instead of a re-render.** With no framework there is no reactive tree, so `onChange` lets any component register a callback and update itself when the language changes. `onChange` returns its own unsubscribe function, which keeps teardown honest.

**Accessible by construction.** The language switcher manages `aria-expanded`, closes on outside click, and closes on selection — behaviour a dropdown library would give you, written explicitly here.

**Fallbacks never throw.** `t()` takes a fallback argument and returns it whenever a key is missing or resolves to a non-string. A missing translation degrades to readable text rather than `undefined`.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Markup | HTML5 | — |
| Styling | CSS3, hand-written | No utility framework; the site is small enough that cascade is an asset, not a liability |
| Behaviour | Vanilla JavaScript | No build step means no build to break |
| i18n | Custom (`docs/i18n.js`) | See above |
| Forms | FormSubmit | Contact handling without running a server |
| Hosting | GitHub Pages from `/docs` | Free, fast, and the deploy is `git push` |
| Domain | Custom via `docs/CNAME` | — |
| CI | GitHub Actions | — |

---

## Project structure

```
docs/                    # the deploy root — GitHub Pages serves this folder
├── index.html           # the entire site
├── style.css            # all styling
├── main.js              # interactions and animations
├── i18n.js              # translation runtime + IT/PT/EN data
├── privacy.html         # privacy policy
├── terms.html           # terms of service
├── sitemap.xml          # SEO
├── robots.txt           # SEO
├── site.webmanifest     # PWA manifest
├── CNAME                # custom domain
└── img/  img2/  video/  # media
```

Serving from `/docs` rather than a `gh-pages` branch keeps the deploy to a single `git push` on `main`, with no branch juggling and no CI deploy step.

---

## Running locally

No install required — it is static:

```bash
npx serve docs
```

Any static server works. Opening `docs/index.html` directly also mostly works, though `localStorage` and some relative paths behave better over HTTP.

---

## Adding a language

1. Add a top-level key to the `translations` object in `docs/i18n.js`, mirroring the shape of `it`.
2. Add a `<button class="lang-btn" data-lang="xx">` to the switcher in `index.html`.

There is no build step and no registry to update. `t()` picks it up on the next `setLanguage` call.

---

## License

**Proprietary — all rights reserved.**

This repository is public so the implementation can be read, not so it can be reused. Use, copying, modification and redistribution are not permitted without prior written consent. See [LICENSE](LICENSE).

The i18n approach described above is welcome to be borrowed as an *idea*; the code and the site content are not.

---

<div align="center">

Built by [Kallebe Gallo](https://github.com/kallebesiqueira-dev) · [www.etzahweb.com](https://www.etzahweb.com)

</div>
