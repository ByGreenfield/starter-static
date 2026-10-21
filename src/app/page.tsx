import Link from 'next/link';
import { getMenu, getSite } from '@/lib/content';

export default function HomePage() {
  const site = getSite();
  const menu = getMenu();
  const highlights = menu.sections.flatMap((s) => s.items).slice(0, 3);
  return (
    <div className="grid gap-10">
      <section>
        <h1 className="text-4xl font-bold tracking-tight">{site.name}</h1>
        <p className="mt-3 text-lg text-neutral-700">{site.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/menu/" className="rounded-md bg-accent px-4 py-2 font-medium text-white">
            See the menu
          </Link>
          <Link href="/contact/" className="rounded-md border border-neutral-300 px-4 py-2 font-medium">
            Get in touch
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Baked this morning</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <li key={item.name} className="rounded-lg border border-neutral-200 p-4">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-neutral-600">{item.price}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Hours</h2>
        <ul className="mt-3 text-neutral-700">
          {site.hours.map((h) => (
            <li key={h.days}>
              {h.days}: {h.close ? `${h.open} to ${h.close}` : h.open}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
