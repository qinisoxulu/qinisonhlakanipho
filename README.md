# Qiniso Xulu portfolio

A one-page portfolio built with [Rspress](https://rspress.rs/) and Tailwind CSS v4
(set up as in the [Rspress Tailwind guide](https://rspress.rs/ui/tailwindcss)),
set in TikTok Sans.

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
| Contact details, links, CV path, form endpoint | `src/data.ts` (`site`) |
| At a glance, projects, education, experience, skills | `src/data.ts` |
| Hero text, section order, layout | `src/components/Page.tsx` |
| Header and footer | `theme/index.tsx` |
| Colours (light and dark) | `tailwind.css` (the `:root` and `:root.dark` blocks) |
| Photo, logos, CV | `docs/public/` |

## Contact form

The form has name, email and message fields. Out of the box it opens the visitor's
email app with the message filled in. To have messages delivered to your inbox
from the page, create a free [Formspree](https://formspree.io/) or
[Web3Forms](https://web3forms.com/) form and paste its endpoint into
`formEndpoint` in `src/data.ts`.

## Notes

- Source lives in `src/` and `theme/`, not `docs/`, because Rspress turns every
  file in `docs/` into a route.
- The Rspress navigation bar is hidden; `theme/index.tsx` draws the header.
- Delete `package-lock.json` if you use pnpm.

## Deploy to GitHub Pages

Push to `main` with Pages set to "GitHub Actions". `.github/workflows/deploy.yml`
builds with `BASE=/<repo-name>/`; use `/` for a user site or custom domain. The
workflow uses npm; switch it to pnpm if you prefer.
