# Alchemy Within — website

Static site, deployed on Netlify, no build step.

## Structure

```
/                     → currently rewrites to /remembrance/ (see _redirects)
/remembrance/         → "Alchemy Within — Remembrance" retreat page (Oct 2026)
```

## Adding a new retreat

1. Create a new folder for it, e.g. `/marchretreat/`, with its own `index.html`.
2. Once it's live, replace the root `index.html` with a proper hub page
   (a short landing page linking to each current/upcoming retreat).
3. Remove the rewrite rule in `_redirects` once the hub page is in place —
   the root URL should serve the hub directly at that point.
4. Existing links to `/remembrance/` keep working regardless of what the
   homepage becomes.

## Deploying

This repo is connected to Netlify. Any push to `main` deploys automatically.
The domain is pointed at Netlify via DNS (see Netlify's Domain Management
tab for the exact records).
