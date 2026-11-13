import type { ReactNode } from 'react';
import { mecer, wtc, type TrainingBlock } from '../data';
import { Container, SectionTitle } from './ui';

const th = 'bg-surface px-4 py-3 font-semibold text-fg';
const td = 'px-4 py-3 align-top text-fg/90';

function Shell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
        <caption className="sr-only">{label}</caption>
        {children}
      </table>
    </div>
  );
}

function Items({ items }: { items: string[] }) {
  if (items.length === 1) return <p className="leading-relaxed">{items[0]}</p>;
  return (
    <ul className="list-disc space-y-1 pl-4 leading-relaxed marker:text-accent">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

function MecerTable() {
  return (
    <Shell label="Mecer Inter-Ed courses finished so far">
      <thead>
        <tr className="text-left">
          <th scope="col" className={th}>Course</th>
          <th scope="col" className={th}>Code</th>
          <th scope="col" className={th}>Dates</th>
          <th scope="col" className={th}>What it covers</th>
        </tr>
      </thead>
      <tbody>
        {mecer.courses.map((c) => (
          <tr key={c.course} className="border-t border-line">
            <th scope="row" className={`${td} font-semibold text-fg`}>{c.course}</th>
            <td className={`${td} whitespace-nowrap text-muted`}>{c.code || '-'}</td>
            <td className={`${td} whitespace-nowrap`}>{c.when}</td>
            <td className={td}><Items items={c.covers} /></td>
          </tr>
        ))}
      </tbody>
    </Shell>
  );
}

function SemesterTable({ block }: { block: TrainingBlock }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-lg font-semibold text-fg">{block.title}</h3>
        <p className="text-sm text-muted">{block.credits}</p>
      </div>
      <Shell label={block.title}>
        <thead>
          <tr className="text-left">
            <th scope="col" className={`${th} w-48`}>Component</th>
            <th scope="col" className={th}>What I covered</th>
          </tr>
        </thead>
        <tbody>
          {block.rows.map((r) => (
            <tr key={r.label} className="border-t border-line">
              <th scope="row" className={`${td} font-semibold text-fg`}>{r.label}</th>
              <td className={td}><Items items={r.items} /></td>
            </tr>
          ))}
        </tbody>
      </Shell>
    </div>
  );
}

export function TrainingBody() {
  return (
    <Container>
      <div className="settle-late space-y-16 pb-24">
        <section>
          <SectionTitle>Mecer Inter-Ed</SectionTitle>
          <p className="mt-4 max-w-xl leading-relaxed text-fg/90">{mecer.intro}</p>
          <div className="mt-6"><MecerTable /></div>
        </section>

        <section>
          <SectionTitle>WeThinkCode_</SectionTitle>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {wtc.facts.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <dt className="text-muted">{k}</dt>
                <dd className="text-fg">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{wtc.note}</p>
          <div className="mt-10 space-y-10">
            {wtc.blocks.map((b) => (
              <SemesterTable key={b.title} block={b} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
