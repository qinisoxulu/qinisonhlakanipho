import { Link } from '@rspress/core/theme-original';
import { withBase } from '@rspress/core/runtime';
import type { ReactNode } from 'react';

const isAsset = (href: string) => /\.[a-z0-9]+$/i.test(href);

/** Internal routes use the Rspress router; files and external links use plain anchors. */
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

export const btnPrimary =
  'inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:opacity-90';
export const btnGhost =
  'inline-flex items-center justify-center rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-fg no-underline transition hover:bg-surface';

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">{children}</div>;
}

export function PageHeader({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="pb-10 pt-14 sm:pt-20">
      <h1 className="settle text-4xl font-bold tracking-tight text-fg sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <p className="settle-late mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {children}
        </p>
      ) : null}
    </header>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-raised px-2 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const live = status === 'Live';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
        live ? 'bg-live/10 text-live' : 'bg-accent/10 text-accent'
      }`}
    >
      <span className={`size-1.5 rounded-full ${live ? 'bg-live' : 'bg-accent'}`} />
      {status}
    </span>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-fg">{children}</h2>
  );
}
