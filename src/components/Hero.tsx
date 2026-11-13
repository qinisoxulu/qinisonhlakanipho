import { site, stack } from '../data';
import { A, Container, Tag, btnGhost, btnPrimary } from './ui';

export function Hero() {
  const rows: [string, string][] = [
    ['Name', site.name],
    ['Role', site.role],
    ['Now', site.now],
    ['Building', site.building],
    ['Base', site.location],
    ['Status', site.status],
  ];

  return (
    <section className="pb-16 pt-14 sm:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div>
            <h1 className="settle font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {site.heroTitle}
            </h1>
            <p className="settle-late mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {site.heroText}
            </p>
            <div className="settle-late mt-8 flex flex-wrap gap-3">
              <A href="/projects" className={btnPrimary}>
                View the work
              </A>
              <A href={site.cv} className={btnGhost}>
                Download CV
              </A>
            </div>
          </div>

          <aside className="settle-late rounded-xl border border-line bg-surface p-6">
            <div className="flex items-center gap-4">
              {site.photo ? (
                <img
                  src={site.photo}
                  alt={site.name}
                  className="size-16 rounded-lg object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="grid size-16 place-items-center rounded-lg bg-accent font-display text-3xl font-bold text-ink"
                >
                  {site.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-display text-xl font-semibold text-white">
                  {site.name}
                </p>
                <p className="text-sm text-muted">{site.role}</p>
              </div>
            </div>

            <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-2.5">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right text-fg">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mb-2 mt-6 text-sm text-muted">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
