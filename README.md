# LPG Go — Marketing Website

The marketing / landing site for **LPG Go**, an on-demand LPG (cooking gas)
delivery app for the Philippines. Built with **Next.js (App Router) + TypeScript**
and ready to deploy on **Vercel**.

Converted from the original single static `index.html` into a componentized,
type-safe Next.js app, with an added **Support / Donation** section (QR codes)
and developer credit.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, React 19)
- TypeScript
- [react-qr-code](https://www.npmjs.com/package/react-qr-code) for the support QR codes
- Plain CSS (`app/globals.css`) — no UI framework, fully self-contained

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # lint
```

## Project structure

```
website/
├─ app/
│  ├─ layout.tsx        # <head>, metadata (SEO/OG), fonts, global CSS
│  ├─ page.tsx          # composes all sections
│  └─ globals.css       # all styles (ported from the original site)
├─ components/          # one file per section (Hero, Features, FAQ, Support, …)
├─ lib/
│  └─ site.ts           # ⚙️ EDIT ME — contact, developer credit, support links, QR data
└─ public/              # logo.png, favicon.png, tank.png, qr/ (your real QR images)
```

## Editing content

Almost everything you'll want to change lives in [`lib/site.ts`](lib/site.ts):

- **Email / contact** — `site.email`
- **Developer credit** — `developer` (name, website `https://mrheinrich.vercel.app`, email)
- **Support links** — `supportLinks`
- **Donation / QR codes** — `supportMethods`

### Support / Donation QR codes

The Support section shows one card per bank account (GoTyme + two MariBank
accounts), each rendering a real InstaPay QR screenshot from `public/qr/`:

| Card                    | Image file                   |
| ----------------------- | ---------------------------- |
| GoTyme Bank             | `public/qr/gotyme.png`        |
| MariBank (Julina Marie) | `public/qr/maribank-julina.png` |
| MariBank (John Heinrich)| `public/qr/maribank-john.png` |

Save your QR screenshots under those exact names and they appear automatically.
**Until a file exists, a placeholder QR is shown instead of a broken image** —
the card falls back to a code generated from `qrValue` (see
`components/Support.tsx`). Account names, masked account refs, and MariBank
referral codes are all edited in [`lib/site.ts`](lib/site.ts).

## Deploying to Vercel

This site lives in the `website/` subfolder of the repository, so point Vercel
at that folder:

1. Push the repo to GitHub.
2. In Vercel → **New Project** → import the repo.
3. Set **Root Directory** to `website`.
4. Framework preset is auto-detected as **Next.js** — no extra config needed.
5. Deploy.

Or with the Vercel CLI from inside `website/`:

```bash
npx vercel        # preview
npx vercel --prod # production
```

---

Designed & developed by [mrheinrichhh](https://mrheinrich.vercel.app) ·
mrheinrichhh@gmail.com
