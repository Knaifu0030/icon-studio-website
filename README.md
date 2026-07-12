# A ICON Dance Academy — Website

Single-page marketing site for A ICON Dance Academy (Hejjala Gate, Bengaluru).
Built with Next.js 15 (static export), TypeScript, Tailwind CSS v4 and react-icons.

## Commands

```bash
npm run dev     # local dev server → http://localhost:3000
npm run build   # production build → static site in out/
```

The `out/` folder after a build is a fully static site — host it anywhere
(Vercel, Netlify, Cloudflare Pages, or any static hosting).

> **Note:** the npm scripts run Next through `scripts/fix-exfat-readlink.cjs`.
> This project sits on an exFAT drive, where Windows answers `readlink` with
> an error code Next.js doesn't expect; the shim remaps it. If you ever move
> the project to an NTFS drive (C:), you can switch the scripts back to plain
> `next dev` / `next build`.

## Editing content

**All business data lives in [`lib/site.ts`](lib/site.ts)** — phone numbers,
WhatsApp number, address, taglines, programmes, benefits, gallery images and
navigation. Change it there and the whole site (including the enquiry form
and JSON-LD) updates.

- **WhatsApp number**: `site.whatsappNumber` (currently 99803 40996). If the
  other line is the registered one, change this single value.
- **Photos**: currently curated Unsplash placeholders. To use the academy's
  own photos, drop files into `public/` and change the image entries in
  `lib/site.ts` (each has an `id`/`alt`; swap the `photo()` helper URLs for
  local paths).
- **Domain**: once a real domain exists, set the environment variable
  `NEXT_PUBLIC_SITE_URL=https://yourdomain.in` before building so canonical
  and Open Graph URLs resolve (this also removes the build warning).
- **Logo**: `public/logo.png` is the cleaned transparent logo generated from
  `Dance logo.png`; `public/favicon.png`, `public/apple-icon.png` and
  `public/og.png` are derived from it.

## Deliberately not included

No fees, batch timings, testimonials, ratings, student counts, awards or
social links — none were supplied. Where visitors expect those, the site says
"contact the academy". Add real proof to the relevant components when it
exists.
