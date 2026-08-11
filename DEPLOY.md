# Deploy Guide — Zerosoft Solutions website

Live target: **https://zerosoftsolutions.com** (domain already owned).
This repo is the public marketing site. Hosting is free; only the domain has a cost (already paid).

> ⚠️ Do NOT deploy publicly until: (1) attorney has cleared Terms/Privacy, and (2) the business address is finalized.

---

## Step 1 — Push to GitHub (org: ZerosoftSolutions)
Create an empty repo named **website** on github.com/ZerosoftSolutions (no README/license — this repo already has them). Then, from this folder:

```bash
git remote add origin https://github.com/ZerosoftSolutions/website.git
git push -u origin main
```

## Step 2 — Turn on hosting (pick ONE)

### Option A — GitHub Pages (simplest)
1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)` → Save
3. Under **Custom domain**, enter `zerosoftsolutions.com` → Save (this repo already includes a `CNAME` file)
4. Check **Enforce HTTPS** (may take a few minutes to become available)

### Option B — Cloudflare Pages (fast CDN, great for custom domains)
1. Cloudflare dash → **Workers & Pages → Create → Pages → Connect to Git** → pick `ZerosoftSolutions/website`
2. Build settings: **no build command**, output directory = `/` (it's plain static)
3. Deploy → then **Custom domains → Set up a custom domain** → `zerosoftsolutions.com`
   (Cloudflare ignores the `CNAME` file — that's only for GitHub Pages.)

## Step 3 — Point the domain (DNS at your registrar)
The host will show you the exact records. Typical setup:

**GitHub Pages** — at your DNS provider add:
- Apex `zerosoftsolutions.com` → four A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` → CNAME to `zerosoftsolutions.github.io`  *(replace with your org's pages host)*

**Cloudflare Pages** — add the domain to Cloudflare (or use the CNAME target it gives you); Cloudflare manages the rest.

## Step 4 — Verify
- Visit https://zerosoftsolutions.com — home loads
- Padlock (HTTPS) shows
- Click every nav/footer link + the "Get in touch" button (contact email works)
- Share the URL in a chat to confirm the link-preview card shows the logo

---

## Included and ready
- `CNAME` (GitHub Pages custom domain), `robots.txt`, `sitemap.xml`, `404.html`
- Open Graph tags + `assets/og-image.png` (link-preview card)
- Favicon + full SVG logo kit

## Optional future cleanup
- Sub-pages currently live under `/src/` (e.g. `/src/services.html`). Could be flattened to `/services.html` etc. for prettier URLs.
