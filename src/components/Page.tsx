import {
  certifications,
  education,
  experience,
  glance,
  projects,
  site,
  skills,
  summary,
  type Entry,
} from '../data';
import { ContactForm } from './ContactForm';
import {
  A,
  Container,
  Section,
  DateTag,
  Tag,
  asset,
  btnOutline,
  btnPrimary,
  textLink,
} from './ui';

function Hero() {
  return (
    <section id="top" className="pb-14 pt-12 sm:pb-20 sm:pt-20">
      <Container>
        <span className="inline-block rounded-md bg-green px-3 py-1.5 text-sm font-semibold text-white">
          Open to opportunities
        </span>

        <div className="mt-7 flex items-center gap-5">
          <img
            src={asset('/profile.jpg')}
            alt={site.name}
            width={88}
            height={88}
            className="size-[72px] shrink-0 rounded-full object-cover sm:size-[88px]"
          />
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-fg sm:text-6xl">
              {site.name}
            </h1>
            <p className="text-lg text-muted sm:text-xl">{site.role}</p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg sm:text-xl sm:leading-relaxed">
          I'm on a Java Training Program at{' '}
          <A href={site.mecer} className={textLink}>Mecer Inter-Ed</A> and building{' '}
          <A href={site.lynxkitGithub} className={textLink}>Lynxkit</A>, an open source
          toolkit for LynxJS. I also run{' '}
          <A href={site.vennor} className={textLink}>Vennor</A>, an AI study platform.
          Before that: WeThinkCode_, where I completed software engineering and stayed on
          as a peer mentor, and two years of Computer Science at Wits.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <A href="#contact" className={btnPrimary}>Contact me</A>
          <A href={site.cv} className={btnOutline}>Download CV</A>
        </div>
      </Container>
    </section>
  );
}

function Glance() {
  return (
    <Section id="glance" title="At a glance">
      <ul>
        {glance.map((g) => (
          <li
            key={g.title}
            className="grid gap-2 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <p className="text-base font-semibold text-muted">{g.label}</p>
            <div>
              <h3 className="text-2xl font-bold text-fg">{g.title}</h3>
              <p className="mt-2 max-w-2xl text-lg leading-relaxed text-fg/90">{g.text}</p>
              <p className="mt-3">
                <A href={g.link.href} className={`${textLink} text-base`}>
                  {g.link.text}
                </A>
              </p>
              {g.skills.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-14">
        {projects.map((p) => (
          <article key={p.slug} className="grid gap-5 sm:grid-cols-[13rem_1fr] sm:gap-10">
            <div>
              <img
                src={asset(p.image)}
                alt={`${p.title} logo`}
                width={64}
                height={64}
                className={`mb-4 size-16 rounded-lg object-contain ${
                  p.imageBg === 'white' ? 'border border-line bg-white p-1.5' : ''
                }`}
              />
              <h3 className="text-2xl font-bold text-fg">{p.title}</h3>
              <div className="mt-2 space-y-1 text-base">
                {p.urls.map((u) => (
                  <p key={u.href}>
                    <A href={u.href} className={`${textLink} break-all font-medium`}>
                      {u.label}
                    </A>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-fg/90">{p.summary}</p>
              {p.details ? (
                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-lg text-fg/90 marker:text-muted">
                  {p.details.map((d) => (
                    <li key={d} className="leading-relaxed">{d}</li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-4 max-w-2xl text-base text-muted">{p.note}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Logo({ e }: { e: Entry }) {
  if (!e.logo) return null;
  const img = (
    <img
      src={asset(e.logo)}
      alt={`${e.place} logo`}
      height={72}
      className={`h-[72px] shrink-0 rounded-md ${
        e.logoFill ? 'w-[72px] object-cover' : 'max-w-[9rem] border border-line bg-white object-contain p-2'
      }`}
    />
  );
  return e.url ? (
    <A href={e.url} className="shrink-0">
      {img}
    </A>
  ) : (
    img
  );
}

function Entries({ items, lead }: { items: Entry[]; lead: 'place' | 'title' }) {
  return (
    <ol className="space-y-12">
      {items.map((e) => {
        const place = e.url ? (
          <A href={e.url} className={textLink}>{e.place}</A>
        ) : (
          e.place
        );
        return (
          <li key={e.title} className="grid gap-3 sm:grid-cols-[13rem_1fr] sm:gap-10">
            <div>
              <DateTag>{e.when}</DateTag>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <Logo e={e} />
                {lead === 'place' ? (
                  <div>
                    <h3 className="text-2xl font-bold text-fg sm:text-3xl">{place}</h3>
                    {e.location ? <p className="text-base text-muted">{e.location}</p> : null}
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold text-fg">{e.title}</h3>
                    <p className="text-lg font-semibold text-fg">
                      {place}
                      {e.location ? <span className="font-normal text-muted">, {e.location}</span> : null}
                    </p>
                  </div>
                )}
              </div>
              {lead === 'place' ? <p className="mt-4 text-lg font-semibold text-fg">{e.title}</p> : null}
              <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-lg text-fg/90 marker:text-muted">
                {e.points.map((p) => (
                  <li key={p} className="leading-relaxed">{p}</li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        {skills.map((g) => (
          <div key={g.label} className="grid gap-2 sm:grid-cols-[13rem_1fr] sm:gap-10">
            <p className="text-base font-semibold text-muted">{g.label}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h3 className="mb-4 mt-14 text-2xl font-bold text-fg">Certifications</h3>
      <ul className="max-w-2xl list-disc space-y-3 pl-5 text-lg text-fg/90 marker:text-muted">
        {certifications.map((c) => (
          <li key={c} className="leading-relaxed">{c}</li>
        ))}
      </ul>
    </Section>
  );
}

function Details() {
  const rows: [string, string, string?][] = [
    ['Email', site.email, `mailto:${site.email}`],
    ['LinkedIn', site.linkedin.replace('https://', ''), site.linkedin],
    ['GitHub', site.github.replace('https://', ''), site.github],
    ['Location', site.location],
  ];
  return (
    <dl className="divide-y divide-line border-y border-line text-lg">
      {rows
        .filter(([, v]) => v)
        .map(([k, v, href]) => (
          <div key={k} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3.5">
            <dt className="text-muted">{k}</dt>
            <dd className="text-fg">
              {href ? <A href={href} className={`${textLink} break-all`}>{v}</A> : v}
            </dd>
          </div>
        ))}
    </dl>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-6 max-w-lg text-lg text-fg/90">
            Send me an email below. I am glad to make time for interviews.
          </p>
          <ContactForm />
        </div>
        <div>
          <Details />
          <p className="mt-6">
            <A href={site.cv} className={btnOutline}>Download CV</A>
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Page() {
  return (
    <main>
      <Hero />
      <Glance />
      <Projects />
      <Section id="education" title="Education">
        <Entries items={education} lead="place" />
      </Section>
      <Section id="experience" title="Experience">
        <Entries items={experience} lead="title" />
      </Section>
      <Skills />
      <Contact />
    </main>
  );
}
