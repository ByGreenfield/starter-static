import type { Metadata } from 'next';
import { getMenu } from '@/lib/content';

export const metadata: Metadata = { title: 'Menu' };

export default function MenuPage() {
  const menu = getMenu();
  return (
    <div className="grid gap-8">
      <header>
        <h1 className="text-3xl font-bold">{menu.heading}</h1>
        <p className="mt-2 text-neutral-700">{menu.intro}</p>
      </header>
      {menu.sections.map((section) => (
        <section key={section.title}>
          <h2 className="text-xl font-semibold text-accent">{section.title}</h2>
          <ul className="mt-3 divide-y divide-neutral-200">
            {section.items.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between gap-4 py-2">
                <span>
                  {item.name}
                  {item.note && <span className="ml-2 text-sm text-neutral-500">{item.note}</span>}
                </span>
                <span className="font-medium">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
