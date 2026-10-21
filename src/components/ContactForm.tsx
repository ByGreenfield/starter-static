'use client';

import { useState, type FormEvent } from 'react';

export function ContactForm({ endpoint, successMessage }: { endpoint: string; successMessage: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(data),
      });
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <p role="status" className="rounded-lg bg-green-50 p-4 text-green-900">
        {successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" aria-label="Contact form">
      <label className="grid gap-1 text-sm font-medium">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          className="rounded-md border border-neutral-300 px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-md border border-neutral-300 px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-md border border-neutral-300 px-3 py-2"
        />
      </label>
      {state === 'error' && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong sending your message. Please try again or call us.
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'sending'}
        className="rounded-md bg-accent px-4 py-2 font-medium text-white disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
