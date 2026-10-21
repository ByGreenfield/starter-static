import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';
import { getSite } from '@/lib/content';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

const site = getSite();

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" style={{ ['--accent' as string]: site.theme.accent }}>
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <SiteHeader site={site} />
        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">{children}</main>
        <SiteFooter site={site} />
      </body>
    </html>
  );
}
