# David Langat — Machine Learning & Systems Architecture Portfolio

A high-performance personal portfolio website showcasing distributed machine learning pipelines, production MLOps systems, and algorithmic research.

Designed with the **Precision Algorithmic Portfolio** design system (Apple-inspired aesthetic, Bento grids, electric cyan accents, and frosted glass navigation).

---

## Live Deployment (GitHub Pages)

* **GitHub Repository:** [`David-Langat/Personal-Website`](https://github.com/David-Langat/Personal-Website)
* **Live Staging URL:** `https://david-langat.github.io/Personal-Website/`
* **Custom Domain:** Ready for `davidlangat.dev` (or `davidcheruiyot.dev`)

---

## Repository Structure

```
Personal_Website/
├── index.html                 # Production portfolio application
├── favicon.ico                # Site favicon
├── .nojekyll                  # Bypasses Jekyll processing on GitHub Pages
├── assets/
│   └── images/
│       └── personal.jpg       # Profile & portrait image
├── .github/
│   └── workflows/
│       └── deploy.yml         # Automated GitHub Actions deployment
├── DESIGN.md                  # Design system tokens and specifications
├── code.html                  # Original Stitch prototype
├── screen.png                 # Stitch visual baseline
└── PRODUCTION_LOG.md          # Chronological production & deployment log
```

---

## How to Enable GitHub Pages (1-Minute Setup)

1. Push your latest commits to GitHub:
   ```bash
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   `https://github.com/David-Langat/Personal-Website/settings/pages`
3. Under **Build and deployment > Source**:
   * Select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically trigger and deploy on every push).
4. Within 30 seconds, your site is live at:
   `https://david-langat.github.io/Personal-Website/`

---

## Adding Your Custom Domain (`davidlangat.dev`)

When you register your custom domain:
1. In `https://github.com/David-Langat/Personal-Website/settings/pages`:
   * Enter `davidlangat.dev` under **Custom domain** and save.
2. In your DNS provider (Porkbun, Namecheap, Cloudflare):
   * Add a `CNAME` record pointing to `david-langat.github.io`.
   * Check **Enforce HTTPS** in GitHub settings.
