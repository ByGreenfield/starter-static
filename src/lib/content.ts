import { readFileSync } from 'node:fs';
import path from 'node:path';
import site from '../../content/site.json';
import menu from '../../content/menu.json';

/** Typed access to the files in content/. Server-only; runs at build time in a static export. */

export interface NavItem {
  label: string;
  href: string;
}
export interface Hours {
  days: string;
  open: string;
  close: string;
}
export interface Site {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: { street: string; city: string; state: string; zip: string };
  hours: Hours[];
  social: { label: string; url: string }[];
  nav: NavItem[];
  contact: { heading: string; intro: string; formEndpoint: string; successMessage: string };
  theme: { accent: string };
}
export interface MenuItem {
  name: string;
  price: string;
  note?: string;
}
export interface Menu {
  heading: string;
  intro: string;
  sections: { title: string; items: MenuItem[] }[];
}
export interface Page {
  heading: string;
  paragraphs: string[];
}

export function getSite(): Site {
  return site as Site;
}

export function getMenu(): Menu {
  return menu as Menu;
}

const contentDir = path.join(process.cwd(), 'content');

/**
 * Reads a Markdown page with a small front matter block. Body paragraphs are separated by blank
 * lines; inline Markdown is not interpreted, which keeps the renderer dependency-free.
 */
export function getMarkdownPage(file: string): Page {
  const raw = readFileSync(path.join(contentDir, file), 'utf8');
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  const front: Record<string, string> = {};
  let body = raw;
  if (m) {
    for (const line of m[1].split('\n')) {
      const i = line.indexOf(':');
      if (i > 0) front[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
    body = m[2];
  }
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
  return { heading: front.heading ?? '', paragraphs };
}

export function formatAddress(site: Site): string {
  const a = site.address;
  return `${a.street}, ${a.city}, ${a.state} ${a.zip}`;
}
