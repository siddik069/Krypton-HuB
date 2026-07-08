Krypton Hub — Company Website

Official website for **Krypton Hub**, a 360° digital & technology agency in Dhaka, Bangladesh — software engineering, cybersecurity, growth marketing, and brand design under one accountable team.

Live single-page site: hero, about, mission/vision, leadership message, an 8-person clickable team directory, services, partner-synergy section, process timeline, and a contact form.

## Tech stack

Plain HTML, CSS, and JavaScript. No framework, no build step, no dependencies to install.

```
├── index.html          # markup
├── css/style.css        # all styles (design tokens as CSS variables)
├── js/script.js         # team/services/synergy/process data + interactivity
└── assets/img/          # team headshots (.jpg)
```

## Run locally

Just open `index.html` in a browser, or serve it so relative paths behave identically to production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Source**: select the `main` branch, `/ (root)` folder → **Save**.
3. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

To use the `kryptonhub360.com` domain instead, add a `CNAME` file at the repo root containing just the domain, and point the domain's DNS at GitHub Pages.

## Contact form

The form validates client-side, then opens the visitor's email client with a pre-filled message addressed to `krypton.hub.360@gmail.com` — this works immediately with zero configuration once deployed, no backend required.

To upgrade to an in-page AJAX submission instead (no email client popup), wire a form endpoint — e.g. [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/) — into the `contactForm` submit handler near the bottom of `js/script.js`.

## Editing team profiles or content

All copy — bios, services, synergy pairings, process steps, contact details — lives in the data arrays at the top of `js/script.js` (`TEAM`, `SERVICES`, `SYNERGY`, `PROCESS`, `CONTACT`). Edit the arrays; the page renders from them automatically. To swap a team photo, replace the matching file in `assets/img/`.

---
© 2026 Krypton Hub. All rights reserved.