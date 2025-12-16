# Renewal Strategy: The Jonathon Marsden Ecosystem

**Goal:** Transform `jonathonmarsden.com` into a scalable, secure digital identity that acts as a "Lobby" for a diverse portfolio of public, private, and client applications.

## 1. The "Lobby" Concept (Root Domain)
**URL:** `https://jonathonmarsden.com`
**Location:** `/projects/jonathonmarsden.com`

This is the single source of truth. It is not an app; it is a **directory**.
- **Home:** High-impact personal branding ("Calling Card").
- **Portfolio:** Curated list of "Featured" projects (linking to their subdomains).
- **Lab/Playground:** List of experimental tools (linking to `apps.` subdomains).
- **Contact:** Secure contact method.

---

## 2. Subdomain Protocol

We will standardize on a **Tiered Subdomain System** to balance visibility, security, and organization.

### Tier A: Flagship Apps (Direct Subdomain)
*For polished, public-facing tools that deserve their own identity.*
- **Format:** `appname.jonathonmarsden.com`
- **Examples:**
    - `names.jonathonmarsden.com` (Name Analyser)
    - `rectify.jonathonmarsden.com` (Photo Straightener)
    - `painchek.jonathonmarsden.com` (PainChek Tracker)
- **Pros:** Short, professional, easy to remember.
- **Cons:** Clutters the root DNS if you have 100s of them.

### Tier B: The "Arcade" (Grouped Sub-subdomains)
*For experimental, niche, or RPG tools. Keeps the root domain clean.*
- **Format:** `toolname.apps.jonathonmarsden.com` (or `lab.`, `arcade.`)
- **Examples:**
    - `combat.apps.jonathonmarsden.com`
    - `characters.apps.jonathonmarsden.com`
- **Why Sub-subdomains?**
    - **Pros:** Logical grouping. You can use a wildcard cert for `*.apps.jonathonmarsden.com`.
    - **Cons:** Longer URLs.
    - **Decision:** Stick with `apps.` as you have already started this. It works well for "tools" that aren't full "products".

### Tier C: Client Isolation (Secure Subdomains)
*For client work. Security is paramount.*
- **Format:** `clientname.clients.jonathonmarsden.com` OR `clientname.jonathonmarsden.com`
- **Security Rule:** **ALWAYS use a unique subdomain for each client.**
    - **Why?** Browsers isolate cookies and LocalStorage by domain.
    - If Client A is at `jonathonmarsden.com/client-a` and Client B is at `jonathonmarsden.com/client-b`, Client A's malicious script could theoretically read Client B's cookies because they share the `jonathonmarsden.com` origin.
    - If they are on `client-a.jonathonmarsden.com` and `client-b.jonathonmarsden.com`, they are cryptographically isolated by the browser.
- **Recommendation:** `client-name.jonathonmarsden.com` (Cleaner) or `client-name.portal.jonathonmarsden.com`.

### Tier D: Internal/Private (Hidden)
*For your eyes only.*
- **Format:** `internal.jonathonmarsden.com` or `admin.jonathonmarsden.com`
- **Protection:** Zero Trust Authentication (Cloudflare Access / Vercel Auth).
- **Listing:** These should **NOT** be linked publicly on the main site.

---

## 3. Technical Architecture

### The "Umbrella" Workspace
Your `/projects/` folder is the monorepo-style home.
- **`jonathonmarsden.com` (The Main Site):**
    - This will be a Next.js (or similar) app.
    - It will fetch data from `PROJECT_REGISTRY.md` (or a JSON version) to dynamically build the Portfolio page.
    - This ensures your portfolio is always in sync with your registry.

### Authentication & Privacy
- **Public Apps:** Open access.
- **Client/Private Apps:**
    - **Option 1 (Middleware):** Use Next.js Middleware (or Vercel Edge Middleware) to check for a session token before rendering.
    - **Option 2 (DNS Level):** Use Cloudflare Access (free for up to 50 users). You put the private subdomain behind Cloudflare, and it handles the login (Google/GitHub/Email) before the request even hits your server. **Highly Recommended.**

---

## 4. Addressing Specific Projects

| Project | Category | Recommended URL | Action |
|---|---|---|---|
| **Name Analyser** | Flagship | `names.jonathonmarsden.com` | Keep as is. |
| **Rectify** | Flagship | `rectify.jonathonmarsden.com` | Keep as is. |
| **PainChek** | Flagship | `painchek.jonathonmarsden.com` | Keep as is. |
| **Dolmenwood/RPG** | Arcade | `*.apps.jonathonmarsden.com` | Keep in `apps` group. |
| **Sigblock Parser** | Utility | `sigblock.apps.jonathonmarsden.com` | Move to `apps` group? |
| **Sunshine Clinic** | Archive | N/A | Keep code, no deploy. |
| **Monash Ceremony** | Archive | N/A | Keep code, no deploy. |
| **Antigravity** | External | N/A | Separate workspace, link if public. |
| **Transfer/Vercel** | Meta | N/A | Ignore (Infrastructure). |

## 5. Next Steps
1.  **Scaffold the Main Site:** Initialize the `jonathonmarsden.com` folder as a Next.js project (recommended for this scale).
2.  **DNS Cleanup:** Review your DNS records to match this new protocol.
3.  **Registry Sync:** Ensure `PROJECT_REGISTRY.md` has a "Category" column (Flagship, Arcade, Client, Private) to automate the portfolio generation.
## 6. How It All Connects (The "Lobby" Architecture)

You asked: *"How are apps on different servers (Vercel, Netlify, Railway) incorporated?"*

The "Lobby" (`jonathonmarsden.com`) acts as a **Central Directory**, not a container. It does not "run" the other apps; it points to them.

### The User Experience
1.  **Arrival:** User lands on `jonathonmarsden.com` (The Lobby). They see a grid of your projects.
2.  **Discovery:** They click the "Name Analyser" card.
3.  **Transition:** The browser navigates them to `names.jonathonmarsden.com`.
4.  **Experience:** They are now using the Name Analyser app.
    *   *Note:* Even though this app might be hosted on a completely different server (e.g., Railway instead of Vercel), the user stays within your `jonathonmarsden.com` domain "universe".

### The Technical "Glue" (DNS)
We use **DNS Records** to route traffic to the correct host for each tool.

| URL | Points To (DNS CNAME) | Hosting Provider |
|---|---|---|
| `jonathonmarsden.com` | `cname.vercel-dns.com` | **Vercel** (The Lobby App) |
| `names.jonathonmarsden.com` | `app-123.railway.app` | **Railway** (Python Backend/React) |
| `painchek.jonathonmarsden.com` | `painchek.netlify.app` | **Netlify** (React SPA) |
| `combat.apps.jonathonmarsden.com` | `cname.vercel-dns.com` | **Vercel** (Vite App) |

### Why this is "Future Proof"
*   **Decoupling:** If you want to move `painchek` from Netlify to AWS tomorrow, you just update the DNS record. The "Lobby" site doesn't need to change at all (the link remains `painchek.jonathonmarsden.com`).
*   **Technology Agnostic:** The Lobby can be Next.js, but the apps can be Python, PHP, plain HTML, or anything else. They don't need to be rewritten to fit into the Lobby.
