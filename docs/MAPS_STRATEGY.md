# Maps Strategy for jonathonmarsden.com

## 1. Subdomain Strategy
**Recommendation:** `maps.jonathonmarsden.com`

*   **Why `maps` (Plural)?** It implies a collection or an atlas. You mentioned `maps.jonathonmarsden.com/topic-here`, which suggests multiple different map experiences.
*   **Why not `map`?** `map` usually implies a single utility (like "Find Us").
*   **Alternative:** `atlas.jonathonmarsden.com` (Sounds more curated/academic).

## 2. Technology Choice: Google Maps vs. The Rest

For "layers" and "custom displays," **Google Maps is rarely the best choice** for personal portfolios.

| Feature | Google Maps | Mapbox (Recommended) | Leaflet (OpenSource) |
|---|---|---|---|
| **Aesthetics** | Standard "Google" look. Hard to customize. | Beautiful, custom themes (Dark, Light, Satellite, 3D). | Basic, depends on the tile provider. |
| **Layers/Data** | Good for markers. Clunky for complex GeoJSON layers. | **Excellent.** Built for handling large datasets and layers. | Good, but can get slow with lots of data. |
| **Cost** | Generous free tier, but requires credit card. Expensive if viral. | Generous free tier (50k loads/mo). | **Free** (if using free tile servers like OSM). |
| **Developer Exp** | OK. | **Best.** Modern React libraries exist. | Good. |

**Verdict:** Use **Mapbox** (via `react-map-gl`) for the most professional, "high-tech" feel. Use **Leaflet** (`react-leaflet`) if you want 100% free/open-source.

## 3. Architecture & Implementation

This should be a **separate Next.js application** deployed to `maps.jonathonmarsden.com`.

### Folder Structure
```
maps-app/
├── src/
│   ├── app/
│   │   ├── page.tsx        # Landing page (List of maps)
│   │   └── [slug]/         # Dynamic route for topics
│   │       └── page.tsx    # The Map View
│   ├── components/
│   │   └── MapView.tsx     # The actual map component
│   └── data/
│       ├── sydney-history.json
│       └── dolmenwood-hexes.json
```

### Code Example (Mapbox + Next.js)

**1. Install Dependencies:**
```bash
npm install react-map-gl mapbox-gl
```

**2. The Map Component (`src/components/MapView.tsx`):**
```tsx
"use client";
import Map, { Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapView({ data }) {
  return (
    <Map
      initialViewState={{
        longitude: 144.9631,
        latitude: -37.8136,
        zoom: 10
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {/* Example Layer: GeoJSON Data */}
      <Source id="my-data" type="geojson" data={data}>
        <Layer
          id="data-layer"
          type="fill"
          paint={{
            'fill-color': '#0080ff',
            'fill-opacity': 0.5
          }}
        />
      </Source>
    </Map>
  );
}
```

**3. The Dynamic Page (`src/app/[slug]/page.tsx`):**
```tsx
import MapView from '@/components/MapView';
import { getMapData } from '@/lib/maps'; // Function to load JSON

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const data = await getMapData(params.slug);

  if (!data) return <div>Map not found</div>;

  return <MapView data={data} />;
}
```

## 4. Integration with "The Lobby"
In your main `jonathonmarsden.com` site, you simply add a link in the `projects.ts` file:

```typescript
{
  id: 'atlas',
  title: 'The Atlas',
  description: 'Interactive maps and spatial data visualizations.',
  url: 'https://maps.jonathonmarsden.com',
  category: 'Arcade', // or Flagship
  tech: ['Mapbox', 'Next.js'],
}
```
