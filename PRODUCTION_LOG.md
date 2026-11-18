# Production Log — Portfolio Redesign

This document tracks the end-to-end production process, milestones, and architectural decisions for the portfolio website.

---

## Timeline & Milestones

### Milestone 1: Workspace Initialization & Clean Slate
* **Status:** Completed
* **Summary:**
  * Preserved legacy portfolio codebase under Git tag `v1-legacy` and branch `archive/v1-legacy`.
  * Flattened repository structure directly to `/Users/davidlangat/Documents/Github/Personal_Website`.
  * Initialized clean `.gitignore` and reset working tree on `main`.
  * Prepared workspace for Stitch platform design export.

---

### Milestone 2: Stitch Design Ingestion
* **Status:** Completed
* **Summary:**
  * Ingested `code.html` (1,278 lines responsive portfolio prototype with Bento layout, Apple frosted glass header, project filters, carousel, and contact form).
  * Ingested `DESIGN.md` (Precision Algorithmic Portfolio design system, typography scales for Geist/Inter/JetBrains Mono, colors, elevations, and component guidelines).
  * Ingested `screen.png` (high-fidelity desktop visual baseline).
  * Committed raw artifacts to Git history (`9150173`).

---

### Milestone 3: Project Architecture & Personalization
* **Status:** Completed
* **Summary:**
  * Refactored Stitch prototype into a high-performance, responsive single-page application at `index.html`.
  * Preserved full **Precision Algorithmic Portfolio** design system (Apple frosted glass header, Bento grid metrics, horizontal snap carousels, category filtering tabs, technical skills matrix, and interactive terminal contact form).
  * Extracted portrait asset `assets/images/personal.jpg` from legacy branch.
  * Personalized identity for **David Langat**:
    * GitHub links pointing to `https://github.com/David-Langat`.
    * Focused title: *Machine Learning Engineer & Systems Architect*.
    * Blended track record combining academic graduate data science background with enterprise IT infrastructure experience.
  * Configured relative paths for smooth hosting on both root domains and subpaths (`/Personal-Website/`).

---

### Milestone 4: Zero-Cost GitHub Pages Deployment Pipeline
* **Status:** Completed
* **Summary:**
  * Created `.nojekyll` to bypass Jekyll processing on GitHub Pages.
  * Configured official GitHub Actions workflow `.github/workflows/deploy.yml` with automated deployment triggers on `main`.
  * Staging URL configured: `https://david-langat.github.io/Personal-Website/`.
  * Pre-configured for custom domain integration (`davidlangat.dev`).

---

### Milestone 5: Dynamic GitHub Repository Integration
* **Status:** Completed
* **Summary:**
  * Replaced static template cards with real GitHub repositories (`Information_Retrieval`, `Maktaba`, `GameFramework`, `Machine-learning-for-NLP`, `Machine-Learning-at-Scale`, `Stream`, `Personal-Website`).
  * Implemented client-side live fetcher connecting to `https://api.github.com/users/David-Langat/repos?sort=updated&per_page=30`.
  * Designed dual-layer architecture: pre-rendered fallback cards for instant zero-flicker loading, enriched dynamically with live stars, fork metrics, and relative timestamps (`timeAgo()`).
  * Dynamic category filters (All, Python, ML & IR, C# & Systems, Web & Data) auto-sync with fetched repositories.

---

### Milestone 6: Dynamic Kaggle Competitions & Notebook Showcase
* **Status:** Completed
* **Summary:**
  * Sourced real competitive modeling projects from local and remote `David-Langat/Kaggle` repository under `playground_series/`.
  * Pre-rendered all 7 verified competitions:
    * `predicting_airline_satisfaction` (`predicting_airline_satisfaction.ipynb`)
    * `predicting_credit_card_fraud` (`predicting_credit_card_fraud.ipynb`)
    * `predicting_electric_vehicle_purchase` (`predicting_electric_vehicle_purchase.ipynb`)
    * `predicting_irrigation_need` (`lightgbm-version-4-0.ipynb`, `irrigation-need.ipynb`)
    * `predicting_stellar_class` (`predicting_stellar_class.ipynb` v1, v2)
    * `predictining_student_health_risk` (`predicting_student_health_risk.ipynb`)
    * `predicting_smartphone_addiction` (`predicting_smartphone_addiction.ipynb`)
  * Integrated dynamic GitHub API endpoint (`/repos/David-Langat/Kaggle/contents/playground_series`) with fallback caching.
  * Added direct navigation to both the repository competition folder and the rendered `.ipynb` notebook file on GitHub.
