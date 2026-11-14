import { Link } from '@rspress/core/theme-original';
import { withBase } from '@rspress/core/runtime';
import type { ReactNode } from 'react';

const isAsset = (href: string) => /\.[a-z0-9]+$/i.test(href);

/** Hash links scroll the page; files and external links use plain anchors. */
export function A({
  href,
  className = '',
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  if (isAsset(href)) {
    return (
      <a href={withBase(href)} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export const asset = (path: string) => withBase(path);

export const textLink =
  'font-semibold underline underline-offset-4 decoration-1 transition-colors hover:text-brand';

export const btnPrimary =
  'inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover';
export const btnOutline =
  'inline-flex items-center justify-center rounded-md border-2 border-fg px-6 py-[10px] text-base font-semibold text-fg transition-colors hover:bg-fg hover:text-bg';

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-14 sm:py-20">
      <Container>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}

/** Blue chip for technologies and skills. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-sm bg-blue px-2.5 py-1 text-sm font-medium text-white">
      {children}
    </span>
  );
}

/** Grey chip for dates: dark grey in light mode, light grey in dark mode, text swaps to match. */
export function DateTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-sm bg-chip px-2.5 py-1 text-sm font-medium text-chip-fg">
      {children}
    </span>
  );
}
