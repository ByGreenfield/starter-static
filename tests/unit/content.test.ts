import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { formatAddress, getMarkdownPage, getMenu, getSite } from '../../src/lib/content';

describe('content', () => {
  it('every nav entry points at a page that exists', () => {
    for (const item of getSite().nav) {
      const dir = item.href === '/' ? 'src/app' : path.join('src/app', item.href);
      expect(existsSync(path.join(process.cwd(), dir, 'page.tsx')), `${item.href} has no page.tsx`).toBe(
        true,
      );
      expect(item.href.endsWith('/'), `${item.href} must end with /`).toBe(true);
    }
  });

  it('menu has sections with priced items', () => {
    const menu = getMenu();
    expect(menu.sections.length).toBeGreaterThan(0);
    for (const s of menu.sections) for (const i of s.items) expect(i.price).toMatch(/^\$/);
  });

  it('parses the about page front matter and paragraphs', () => {
    const page = getMarkdownPage('about.md');
    expect(page.heading).toBe('About the bakery');
    expect(page.paragraphs.length).toBeGreaterThanOrEqual(2);
  });

  it('formats the address on one line', () => {
    expect(formatAddress(getSite())).toContain('Austin, TX');
  });
});
