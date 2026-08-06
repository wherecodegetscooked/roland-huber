# RKH Consulting GmbH – Website

Website von RKH Consulting GmbH (rkhconsulting.ch). React + TypeScript + Vite +
Tailwind, deploybar als Cloudflare Worker mit Static Assets oder als Docker-Container.

Basiert auf dem [website-template](https://github.com/wherecodegetscooked/website-template).

## Tech Stack

- React 19 + TypeScript
- Vite 6 (Build)
- Tailwind CSS (Styling, Serifen-Schrift Playfair Display / Lora)
- Lucide React (Icons)
- Cloudflare Worker / Docker (Hosting)

## Seiten

- `/` – Home (Mission, Shanghai-Hero)
- `/about` – About us (Firmenbeschreibung + Leistungen)
- `/management` – Management (Team mit Fotos und Bios)
- `/contact` – Contact (Formular via mailto + Adresse)

Inhalte und Bilder stammen von der bestehenden Seite rkhconsulting.ch.
Kontakt und Adresse werden zentral in `src/constants/index.ts` gepflegt.

## Projektstruktur

```
src/
├── components/   # Navbar, Footer, Button, Logo
├── pages/        # Home, About, Management, Contact
├── constants/    # Zentrale Konfiguration (Name, Kontakt, Domain)
├── types/        # TypeScript-Typen (Theme, Page)
├── assets/images # Logos, Hero, Team-Fotos
├── App.tsx       # Root-Komponente + SPA-Routing
└── index.tsx     # Entry Point
public/           # favicon, robots.txt, sitemap.xml, _headers, _redirects
worker.js         # Cloudflare Worker (liefert die SPA aus)
Dockerfile        # Container-Build (serve -s dist)
```

## Lokale Entwicklung

```bash
npm install
npm run dev        # Vite Dev-Server
npm run build      # Production-Build -> dist/
npm run preview    # Build lokal ansehen
```

## Deployment (Cloudflare)

```bash
npm run build
npm run cf:worker:deploy   # wrangler deploy
```

Domain `rkhconsulting.ch` nach dem Transfer zu Cloudflare in `wrangler.toml`
(bzw. im Cloudflare-Dashboard als Custom Domain / Route) verbinden.

**Docker:**
```bash
docker build -t rkhconsulting .
docker run -p 8080:8080 -e PORT=8080 rkhconsulting
```
