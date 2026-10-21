import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { formatAddress, getSite } from '@/lib/content';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  const site = getSite();
  return (
    <div className="grid gap-8 sm:grid-cols-[1fr_1.2fr]">
      <section>
        <h1 className="text-3xl font-bold">{site.contact.heading}</h1>
        <p className="mt-3 text-neutral-700">{site.contact.intro}</p>
        <address className="mt-6 not-italic text-neutral-700">
          <p>{formatAddress(site)}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </address>
      </section>
      <section>
        <ContactForm endpoint={site.contact.formEndpoint} successMessage={site.contact.successMessage} />
      </section>
    </div>
  );
}
