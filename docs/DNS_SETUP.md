# DNS Configuration & Strategy

**Current Status:**
- **Root Domain (`jonathonmarsden.com`):** Managed by **Cloudflare**.
- **Subdomain (`apps.jonathonmarsden.com`):** Delegated to **Netlify** (likely via NS records or CNAME).

## The "Lobby" Architecture DNS Plan

To implement the strategy where `jonathonmarsden.com` is the directory and other apps live on subdomains, here is the configuration we will aim for.

### 1. The Main Site (The Lobby)
**Host:** Vercel (Recommended for Next.js) or Netlify.
**Record:**
- Type: `CNAME` (or A record if root)
- Name: `@` (root)
- Value: `cname.vercel-dns.com` (or Netlify equivalent)
- **Action:** You will point the root domain in Cloudflare to the new Next.js app we are building.

### 2. Existing Apps (No Change Required)
If `apps.jonathonmarsden.com` is already working on Netlify, **leave it alone**.
- Any app like `combat.apps.jonathonmarsden.com` will continue to work.
- The new "Lobby" site will simply link to `https://combat.apps.jonathonmarsden.com`.

### 3. New "Flagship" Subdomains
For apps like `names.jonathonmarsden.com` (currently on Railway/Vercel):
- **Action:** Log into Cloudflare.
- **Add Record:**
    - Type: `CNAME`
    - Name: `names`
    - Value: `[target-host-url]` (e.g., `name-analyser.railway.app`)
- **Proxy Status:**
    - **Orange Cloud (Proxied):** Gives you DDoS protection and free SSL. (Recommended)
    - **Grey Cloud (DNS Only):** If the target host (like Netlify/Vercel) requires it for SSL verification.

## Summary of Changes
1.  **Build** the new `jonathonmarsden.com` app (In Progress).
2.  **Deploy** it (e.g., to Vercel).
3.  **Update Cloudflare:** Point the root `@` record to the new deployment.
4.  **Verify:** Ensure `apps.jonathonmarsden.com` still resolves correctly (it should, as it's a separate record).
