import '@fontsource-variable/tiktok-sans';
import { Layout as BasicLayout, Link } from '@rspress/core/theme-original';
import { site } from '../src/data';

function SiteFooter() {
  const link = 'transition-colors hover:text-fg';
  return (
    <footer className="border-t border-line py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <p className="flex flex-wrap gap-5">
          <a href={`mailto:${site.email}`} className={link}>Email</a>
          <a href={site.github} target="_blank" rel="noreferrer" className={link}>GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className={link}>LinkedIn</a>
          <a href={site.lynxkitGithub} target="_blank" rel="noreferrer" className={link}>Lynxkit</a>
          <a href={site.vennor} target="_blank" rel="noreferrer" className={link}>Vennor</a>
        </p>
      </div>
    </footer>
  );
}

const Layout = () => (
  <BasicLayout
    navTitle={
      <Link href="/" className="flex items-center gap-2 text-lg font-bold text-fg">
        {site.name}
      </Link>
    }
    bottom={<SiteFooter />}
  />
);

export { Layout };
export * from '@rspress/core/theme-original';
