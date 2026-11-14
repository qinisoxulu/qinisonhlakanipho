import { useState, type FormEvent } from 'react';
import { site } from '../data';

type State = 'idle' | 'sending' | 'sent' | 'error' | 'opened';

const field =
  'mt-1.5 w-full rounded-md border-2 border-line bg-bg px-3.5 py-3 text-base text-fg outline-none transition-colors focus:border-fg';

export function ContactForm() {
  const [state, setState] = useState<State>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('company')) return; // honeypot: bots fill this in
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!site.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setState('opened');
      return;
    }

    setState('sending');
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState('sent');
    } catch {
      setState('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-base font-medium text-fg">
          Your name
          <input name="name" type="text" required autoComplete="name" className={field} />
        </label>
        <label className="block text-base font-medium text-fg">
          Your email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-base font-medium text-fg">
        Message
        <textarea name="message" required rows={6} className={field} />
      </label>
      {/* Honeypot field: hidden from people, visible to bots. */}
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-60"
        >
          {state === 'sending' ? 'Sending...' : 'Send message'}
        </button>
        <p role="status" aria-live="polite" className="text-base text-muted">
          {state === 'sent' && 'Message sent. I will reply to the email you gave.'}
          {state === 'opened' && 'Your email app should have opened with the message ready to send.'}
          {state === 'error' && `The message did not send. Please email ${site.email} directly.`}
        </p>
      </div>
    </form>
  );
}
