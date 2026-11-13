import { withBase } from '@rspress/core/runtime';
import { projects } from '../data';
import { A, Container, StatusBadge, Tag } from './ui';

export function AllProjects() {
  return (
    <Container>
      <div className="pb-24">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="settle-late grid gap-6 border-t border-line py-10 sm:grid-cols-[1fr_2.2fr] sm:gap-10"
          >
            <div>
              {p.image ? (
                <img
                  src={withBase(p.image)}
                  alt={`${p.title} logo`}
                  width={64}
                  height={64}
                  className={
                    p.imageTile
                      ? 'mb-4 size-16 rounded-2xl bg-[#141414] object-contain p-3.5 ring-1 ring-white/10'
                      : 'mb-4 size-16 rounded-2xl'
                  }
                />
              ) : null}
              <h2 className="text-2xl font-bold text-fg">{p.title}</h2>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <StatusBadge status={p.status} />
                {p.tags?.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              {p.when ? <p className="mt-3 text-sm text-muted">{p.when}</p> : null}
            </div>
            <div>
              <p className="max-w-xl leading-relaxed text-fg/90">{p.summary}</p>
              {p.details ? (
                <ul className="mt-4 max-w-xl list-disc space-y-2 pl-5 text-fg/90 marker:text-accent">
                  {p.details.map((d) => (
                    <li key={d} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              ) : null}
              {p.note ? (
                <p className="mt-4 max-w-xl border-l-2 border-accent pl-3 text-sm leading-relaxed text-muted">
                  {p.note}
                </p>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {p.links.map((l) => (
                  <A
                    key={l.href}
                    href={l.href}
                    className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </A>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
