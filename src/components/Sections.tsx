import {
  certifications,
  education,
  experience,
  site,
  skills,
  summary,
  type Entry,
} from '../data';
import { ContactForm } from './ContactForm';
import { A, Container, SectionTitle, Tag, btnPrimary } from './ui';

function Details() {
  const rows: [string, string, string?][] = [
    ['Name', site.name],
    ['Role', site.role],
    ['Location', site.location],
    ['Email', site.email, `mailto:${site.email}`],
    ['LinkedIn', site.linkedin.replace('https://', ''), site.linkedin],
    ['GitHub', site.github.replace('https://', ''), site.github],
  ];
  return (
    <dl className="divide-y divide-line border-y border-line">
      {rows
        .filter(([, v]) => v)
        .map(([k, v, href]) => (
          <div key={k} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
            <dt className="text-muted">{k}</dt>
            <dd className="text-fg">
              {href ? (
                <A href={href} className="font-medium text-accent underline-offset-4 hover:underline">
                  {v}
                </A>
              ) : (
                v
              )}
            </dd>
          </div>
        ))}
    </dl>
  );
}

function Entries({ items }: { items: Entry[] }) {
  return (
    <ol className="mt-6 space-y-8">
      {items.map((e) => (
        <li key={e.title} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <p className="text-sm text-muted">{e.when}</p>
          <div>
            <h3 className="text-lg font-semibold text-fg">{e.title}</h3>
            <p className="text-sm text-muted">{e.place}</p>
            <ul className="mt-3 max-w-xl list-disc space-y-1.5 pl-5 text-fg/90 marker:text-accent">
              {e.points.map((p) => (
                <li key={p} className="leading-relaxed">{p}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function AboutBody() {
  return (
    <Container>
      <div className="settle-late space-y-14 pb-24">
        <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionTitle>Summary</SectionTitle>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-fg/90">{summary}</p>
          </div>
          <div>
            <SectionTitle>Details</SectionTitle>
            <div className="mt-4"><Details /></div>
          </div>
        </section>

        <section>
          <SectionTitle>Education</SectionTitle>
          <Entries items={education} />
        </section>

        <section>
          <SectionTitle>Experience</SectionTitle>
          <Entries items={experience} />
        </section>

        <section>
          <SectionTitle>Technical skills</SectionTitle>
          <div className="mt-6 space-y-5">
            {skills.map((g) => (
              <div key={g.label} className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <p className="text-sm text-muted">{g.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => <Tag key={i}>{i}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Certifications</SectionTitle>
          <ul className="mt-5 max-w-2xl list-disc space-y-3 pl-5 text-fg/90 marker:text-accent">
            {certifications.map((c) => (
              <li key={c} className="leading-relaxed">{c}</li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}

export function DocumentsBody() {
  return (
    <Container>
      <div className="settle-late space-y-4 pb-24">
        <article className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-fg">Curriculum vitae</h2>
            <p className="mt-1 text-muted">Education, projects and experience as a PDF.</p>
          </div>
          <A href={site.cv} className={btnPrimary}>Download PDF</A>
        </article>
        <p className="pt-2 text-sm text-muted">References are available on request.</p>
      </div>
    </Container>
  );
}

export function ContactBody() {
  return (
    <Container>
      <div className="settle-late grid gap-12 pb-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionTitle>Send me an email</SectionTitle>
          <div className="mt-6"><ContactForm /></div>
        </div>
        <div>
          <SectionTitle>Or reach me directly</SectionTitle>
          <div className="mt-4"><Details /></div>
        </div>
      </div>
    </Container>
  );
}
