# genroar

A multi-page portfolio and services website for helping SMBs turn ideas into reality. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Focused on reusable components and a clean, modern UI.

## Tech
- Next.js (App Router) + TypeScript
- Tailwind CSS
- ESLint

## Scripts
```bash
# development
npm run dev

# build
npm run build

# start production build
npm run start

# lint
npm run lint
```

## Structure
- `src/app` — routes and layouts (App Router)
  - `page.tsx` — Home
  - `about/` — About page
  - `services/` — Services index and subpages
  - `ai/` — AI services
  - `portfolio/` — Portfolio
  - `contact/` — Contact
- `src/components` — reusable UI and layout components

## Customize
- Update brand copy in `src/app/page.tsx` and service pages in `src/app/services/*`
- Update global metadata in `src/app/layout.tsx`
- Add portfolio items and case studies under `src/app/portfolio`

## Deploy
- Vercel recommended. After pushing to a Git repo, import the project in Vercel and deploy.
