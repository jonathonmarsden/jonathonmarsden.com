# Renewal Plan for jonathonmarsden.com

## 1. Main Site (Naked URL)
**Goal:** Calling card, landing page, contact, portfolio.

### Proposed Structure
- **Home:** High-impact "Calling Card" introduction.
- **Portfolio:** Showcase of selected projects (linking to subdomains or internal pages).
- **Contact:** Secure contact form or details.
- **About:** Professional bio.

### Technology Stack
*To be determined based on preference (e.g., Next.js, Astro, Plain HTML/CSS).*

## 2. Subdomain Strategy
**Goal:** Standardize naming and protect non-public tools.

### Categorization Protocol
- **Public:** `app-name.jonathonmarsden.com` (e.g., `blog`, `portfolio`)
- **Experimental:** `lab-name.jonathonmarsden.com` or `exp-name...`
- **Private/Restricted:** `internal-name.jonathonmarsden.com` or `auth-name...`

### Security & Access Control
- **Public:** Open access.
- **Experimental:** Basic Auth or Obscure URLs (not recommended for security, better to use Auth).
- **Private:** OAuth2 / OIDC (e.g., using Auth0, Clerk, or similar) protecting the entry point.
- **Infrastructure:** Use a reverse proxy (Nginx/Traefik) or Edge Middleware (Vercel/Cloudflare) to handle routing and authentication layers.

## 3. Project Audit & Cull
**Goal:** Review `/Users/jonathonmarsden/projects` to identify "cruft" vs "keepers".

### Action Items
- [ ] List all directories in `projects`.
- [ ] Classify each as:
    - **Keep (Public):** Polish and deploy to subdomain.
    - **Keep (Private):** Secure and deploy.
    - **Archive:** Move to `archive/` folder or delete.
    - **Delete:** Remove completely.

## 4. Next Steps
1.  **Gain Access:** Please add `/Users/jonathonmarsden/projects` to this VS Code workspace so I can scan the directories.
2.  **Select Stack:** Decide on the framework for the main site.
3.  **Execute Audit:** Run the classification on existing projects.
