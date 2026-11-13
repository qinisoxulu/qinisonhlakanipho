import { highlights, site } from '../data';
import { A, Container, SectionTitle, StatusBadge } from './ui';

const tagline =
  'Johannesburg-based, building full-stack products and open source tooling. Founder of Vennor and creator of Lynxkit.';

export function Home() {
  return (
    <>
      <Container>
        <section className="pb-16 pt-12 sm:pt-20 lg:pb-24">
          <div className="settle">
            <p className="inline-flex items-center rounded-full border border-signal/40 bg-signal/10 px-4 py-1.5 text-sm font-medium text-signal">
              Open to opportunities
            </p>
            <h1 className="mt-7 text-5xl font-bold leading-[1.08] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              <span className="block text-accent">{site.name}</span>
              {site.role}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{tagline}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <A
                href="/contact"
                className="btn-gradient inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold text-white no-underline transition hover:opacity-90"
              >
                Get in touch
              </A>
              <A
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-raised px-7 py-3.5 text-base font-semibold text-fg no-underline transition hover:opacity-80"
              >
                View work
              </A>
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <section className="settle-late pb-24">
          <SectionTitle>At a glance</SectionTitle>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {highlights.map((h) => (
              <li key={h.title} className="grid gap-2 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <div className="text-sm text-muted">
                  {h.status ? <StatusBadge status={h.status} /> : h.label}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-fg">{h.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-fg/90">{h.text}</p>
                  <A
                    href={h.link.href}
                    className="mt-3 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    {h.link.label}
                  </A>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
