# Rakesh Jadhav — portfolio

Personal site for **Rakesh Jadhav** (`IamFishR`), Senior Software Engineer in Hyderabad.

Replaces the retired Glitch page (`thisisrakesh.glitch.me`).

## Stack

Next.js 15 (App Router, static `output: "export"`), React 19, Tailwind 4.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # writes ./out
```

## Add a product

Edit `src/data/products.ts` and append to `PRODUCTS`. Each card needs `slug`, `name`, `kind`, `blurb`, `status` (`live` | `open-testing` | `wip` | `github`), and `links`.

Profile copy lives in `src/data/site.ts`.
