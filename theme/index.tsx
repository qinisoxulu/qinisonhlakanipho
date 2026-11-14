import '@fontsource-variable/tiktok-sans';
import { Layout as BasicLayout, SwitchAppearance } from '@rspress/core/theme-original';
import { useState } from 'react';
import { site } from '../src/data';

const links = [
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const link =
    'text-lg font-medium text-fg transition-colors hover:text-muted';
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="text-2xl font-bold tracking-tight text-fg">
          {site.name}
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-10 md:flex lg:gap-14">
          {links.map(([text, href]) => (
            <a key={href} href={href} className={link}>
              {text}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <SwitchAppearance />
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden text-fg transition-colors hover:text-muted sm:block"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-12 place-items-center rounded-md border border-line text-fg md:hidden"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Sections" className="border-t border-line bg-bg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {links.map(([text, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-xl font-medium text-fg last:border-b-0"
              >
                {text}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  const link = 'text-lg font-medium text-fg transition-colors hover:text-muted';
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={`mailto:${site.email}`} className={link}>Email</a>
          <a href={site.github} target="_blank" rel="noreferrer" className={link}>GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className={link}>LinkedIn</a>
          <span className="ml-auto flex items-center gap-6">
            <span aria-hidden="true" className="text-muted">|</span>
            <a href={site.vennor} target="_blank" rel="noreferrer" className={link}>Vennor</a>
            <a href={site.lynxkitGithub} target="_blank" rel="noreferrer" className={link}>Lynxkit</a>
          </span>
        </div>
        <p className="mt-6 text-sm text-muted">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const Layout = () => <BasicLayout top={<SiteHeader />} bottom={<SiteFooter />} />;

export { Layout };
export * from '@rspress/core/theme-original';
