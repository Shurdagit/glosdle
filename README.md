# ORDLA – Svenska Wordle

Ett dagligt ordgissningsspel på svenska, byggt med Next.js 14, TypeScript och React.

## Kom igång

```bash
# Installera beroenden
npm install

# Starta i utvecklingsläge
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Projektstruktur

```
svenska-wordle/
├── app/
│   ├── api/
│   │   └── word/
│   │       └── route.ts       # API-endpoint för dagens ord
│   ├── globals.css            # Global CSS (Tubdle-tema, animationer)
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Huvudkomponent (spelet)
├── lib/
│   └── words.ts               # Ordlista och hjälpfunktioner
├── netlify.toml               # Netlify-konfiguration
├── next.config.js
├── package.json
└── tsconfig.json
```

## Spelregler

- Gissa det hemliga **svenska ordet på 5 bokstäver**
- Du har **6 försök** på dig
- **Grön** = rätt bokstav på rätt plats
- **Gul** = rätt bokstav men fel plats
- **Grå** = bokstaven finns inte i ordet
- Ett nytt ord varje dag vid **midnatt (Stockholm-tid)**
- Spelet sparas automatiskt i `localStorage`

## Deploy på Netlify

1. Pusha koden till GitHub
2. Koppla GitHub-repot till Netlify
3. Netlify känner automatiskt igen `netlify.toml`
4. Installera `@netlify/plugin-nextjs`: `npm install -D @netlify/plugin-nextjs`
5. Klicka **Deploy**

## Teknisk stack

- **Next.js 14** (App Router)
- **TypeScript**
- **React 18** (Client Components, hooks)
- **CSS** (glassmorphism, CSS-animationer)
- **localStorage** för sessionsminne