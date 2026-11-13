# Qiniso Xulu portfolio

Built with [Rspress](https://rspress.rs/) and Tailwind CSS v4 (set up as in the
[Rspress Tailwind guide](https://rspress.rs/ui/tailwindcss)), laid out like
[tiktok.github.io/sparkling](https://tiktok.github.io/sparkling), and set in
TikTok Sans with the #FE2C55 accent.

## Run it

```bash
pnpm i
pnpm dev        # http://localhost:3000
pnpm build      # static site in doc_build/
pnpm preview
```

## What to edit

| What | Where |
| --- | --- |
| Home hero (name, tagline, buttons) | `src/components/Home.tsx` |
| Home list under the hero | `src/data.ts` (`highlights`) |
| Contact details, CV path, form endpoint | `src/data.ts` (`site`) |
| Projects, education, experience, skills | `src/data.ts` |
| Training page (Mecer table, WeThinkCode_ modules) | `src/data.ts` (`mecer`, `wtc`) |
| Colours and fonts | `tailwind.css` |
| Nav items | `rspress.config.ts` (`themeConfig.nav`) |
| Favicon | `docs/public/favicon.svg` |
| CV | `docs/public/Qiniso_Xulu_CV.pdf` |

## Contact form

The form has name, email and message fields. Out of the box it opens the visitor's
email app with the message filled in. To have messages delivered to your inbox
from the page, create a free [Formspree](https://formspree.io/) or
[Web3Forms](https://web3forms.com/) form and paste its endpoint into
`formEndpoint` in `src/data.ts`.

## Notes

- Source lives in `src/` and `theme/`, not `docs/`, because Rspress turns every
  file in `docs/` into a route.
- Delete `package-lock.json` if you use pnpm.

## Deploy to GitHub Pages

Push to `main` with Pages set to "GitHub Actions". `.github/workflows/deploy.yml`
builds with `BASE=/<repo-name>/`; use `/` for a user site or custom domain. The
workflow uses npm; switch it to pnpm if you prefer.
