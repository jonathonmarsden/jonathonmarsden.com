# Jonathon Marsden - Digital Lobby

This is the main entry point (Lobby) for the `jonathonmarsden.com` digital ecosystem. It serves as a minimalist calling card and directory, routing visitors to various sub-projects and applications.

## Architecture

The ecosystem follows a "Lobby & Apps" architecture:

*   **Lobby (Root):** `jonathonmarsden.com` (This repo)
    *   **Purpose:** Identity, Bio, Contact, and Navigation.
    *   **Tech:** Next.js 15 (App Router), Tailwind CSS.
    *   **Hosting:** Vercel.
*   **Maps App:** `maps.jonathonmarsden.com`
    *   **Purpose:** High-fidelity geospatial visualizations.
    *   **Tech:** Next.js, Mapbox GL JS.
    *   **Repo:** `jonathonmarsden/maps-app`

## Features

*   **Minimalist Design:** Clean typography using Geist font.
*   **Contact Form:** Integrated with Formspree for serverless email handling.
*   **Project Showcase:** Links to featured sub-projects (e.g., Melbourne Metro 3D).

## Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000).

## Deployment

This project is deployed on **Vercel**.
Pushing to the `main` branch triggers an automatic production deployment.

## DNS Configuration

The domain is managed via Cloudflare, pointing to Vercel's infrastructure.
- `jonathonmarsden.com` -> Vercel (Lobby Project)
- `maps.jonathonmarsden.com` -> Vercel (Maps App Project)
