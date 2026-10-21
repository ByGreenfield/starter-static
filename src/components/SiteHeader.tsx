import Link from 'next/link';
import type { Site } from '@/lib/content';

export function SiteHeader({ site }: { site: Site }) {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-xl font-semibold text-accent">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-4 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
