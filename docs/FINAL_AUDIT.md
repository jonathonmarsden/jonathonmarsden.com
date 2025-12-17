# Final Security & Status Audit

**Date:** 17 December 2025
**Domain:** `jonathonmarsden.com`

## 1. Core Infrastructure
| Domain | Status | Host | Security (SSL) | Notes |
|---|---|---|---|---|
| `jonathonmarsden.com` | ✅ **Active** | Vercel | ✅ Secure | Main contact card. |
| `www.jonathonmarsden.com` | ✅ **Active** | Vercel | ✅ Secure | Redirects to root. |
| `maps.jonathonmarsden.com` | ✅ **Active** | Vercel | ✅ Secure | Redirects to root; subpages active. |

## 2. Connected Apps (Subdomains)
These apps are hosted on various platforms but use your domain.

| Subdomain | App Name | Host | Status Check | Security Action |
|---|---|---|---|---|
| `names.jonathonmarsden.com` | Name Analyser | Vercel | **Verify** | Ensure Cloudflare CNAME is Proxied (Orange). |
| `painchek.jonathonmarsden.com` | PainChek | Netlify | **Verify** | Ensure Cloudflare CNAME is Proxied (Orange). |
| `rectify.jonathonmarsden.com` | Rectify | Vercel | **Verify** | Ensure Cloudflare CNAME is Proxied (Orange). |
| `sigblock.jonathonmarsden.com` | Sigblock | Vercel | **Verify** | Ensure Cloudflare CNAME is Proxied (Orange). |

## 3. The "Apps" Sub-subdomains
| Subdomain | App Name | Host | Status Check | Security Action |
|---|---|---|---|---|
| `apps.jonathonmarsden.com` | **The Arcade Hub** | Netlify/Vercel | **Check URL** | If unused, redirect to root or show 404. |
| `combat.apps.jonathonmarsden.com` | Dolmenwood Combat | Vercel | **Verify** | Ensure `apps` CNAME is Proxied. |
| `characters.apps.jonathonmarsden.com` | Cross-Cultural Gen | Vercel | **Verify** | Ensure `apps` CNAME is Proxied. |

## 4. External / Other
| Domain | App Name | Host | Notes |
|---|---|---|---|
| `carbtally.app` | CarbTally | Vercel | Independent domain. Secure. |
| `banjoletts.com` | Banjoletts | Vercel | Independent domain. Secure. |

## 5. Recommended Action Plan
To ensure 100% security and uptime:

1.  **Cloudflare Audit:**
    *   Log in to Cloudflare.
    *   Check the CNAME records for `names`, `painchek`, `rectify`, `sigblock`.
    *   **If they are Grey Cloud (DNS Only):** The connection is unencrypted between user and Cloudflare (though Vercel/Netlify usually provide their own SSL).
    *   **Recommendation:** Turn them to **Orange Cloud (Proxied)**. This forces all traffic through Cloudflare's WAF (Web Application Firewall) and ensures strict SSL.

2.  **Vercel/Netlify Check:**
    *   Visit each URL (e.g., `https://names.jonathonmarsden.com`).
    *   Ensure the lock icon appears in the browser.
    *   Ensure no "Not Secure" warnings appear.

3.  **Private Apps:**
    *   If `painchek` is intended to be private, it is currently **Public** (anyone with the URL can see it).
    *   **To Secure:** Add **Cloudflare Access** (Zero Trust) in front of `painchek.jonathonmarsden.com` to require a login (Google/Email) before loading the page.
