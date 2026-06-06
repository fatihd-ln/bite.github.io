import { en } from './en';
import { tr } from './tr';

export type Lang = 'en' | 'tr';

const dicts = { en, tr } as const;

export function getLang(url: URL): Lang {
  const p = url.pathname;
  if (p === '/tr' || p === '/tr/' || p.startsWith('/tr/')) return 'tr';
  return 'en';
}

export function useTranslations(astro: { url: URL }) {
  return dicts[getLang(astro.url)];
}

/** Prefix an internal path with the locale segment (no-op for default English). */
export function localized(href: string, lang: Lang): string {
  if (lang === 'en') return href;
  if (href === '/') return '/tr';
  if (href.startsWith('/')) return `/tr${href}`;
  return href;
}

/** Strip the locale prefix to get the canonical path. Used by the language switcher. */
export function delocalized(pathname: string): string {
  if (pathname === '/tr' || pathname === '/tr/') return '/';
  if (pathname.startsWith('/tr/')) return pathname.slice(3);
  return pathname;
}

export const LANG_LABELS: Record<Lang, string> = {
  en: 'EN',
  tr: 'TR',
};
