export const defaultLang = "en" as const;

export const languages = {
  en: "EN",
  zh: "中文",
} as const;

export type Lang = keyof typeof languages;

/** The locale is carried by the first path segment: /... is English, /zh/... is Chinese. */
export function getLang(url: URL): Lang {
  return url.pathname.split("/")[1] === "zh" ? "zh" : "en";
}

/** Rewrite a site-root path for a locale. External links and hashes pass through. */
export function localePath(lang: Lang, path: string): string {
  if (!path.startsWith("/")) return path;
  return lang === "en" ? path : `/zh${path}`;
}

/** The same page in the other locale, used by the language switch. */
export function altPath(lang: Lang, url: URL): string {
  const path = url.pathname;
  if (lang === "en") return "/zh/";
  return path.replace(/^\/zh/, "") || "/";
}
