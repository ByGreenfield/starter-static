import type { Metadata } from 'next';
import { getMarkdownPage } from '@/lib/content';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  const page = getMarkdownPage('about.md');
  return (
    <article className="prose-neutral grid gap-4">
      <h1 className="text-3xl font-bold">{page.heading}</h1>
      {page.paragraphs.map((p, i) => (
        <p key={i} className="text-lg leading-relaxed text-neutral-800">
          {p}
        </p>
      ))}
    </article>
  );
}
