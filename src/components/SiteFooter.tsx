import { formatAddress, type Site } from '@/lib/content';

export function SiteFooter({ site }: { site: Site }) {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-3xl gap-6 px-4 py-8 text-sm text-neutral-700 sm:grid-cols-2">
        <div>
          <p className="font-semibold text-neutral-900">{site.name}</p>
          <p>{formatAddress(site)}</p>
          <p>
            <a className="hover:underline" href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>
              {site.phone}
            </a>
          </p>
          <p>
            <a className="hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900">Hours</p>
          <ul>
            {site.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.close ? `${h.open} to ${h.close}` : h.open}
              </li>
            ))}
          </ul>
          {site.social.length > 0 && (
            <p className="mt-3">
              {site.social.map((s) => (
                <a key={s.url} className="mr-3 hover:underline" href={s.url} rel="noopener">
                  {s.label}
                </a>
              ))}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
