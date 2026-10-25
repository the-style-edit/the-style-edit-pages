export const siteName = "The Style Edit";
export const siteTagline = "Look Expensive. Spend Less.";
export const pinterestUrl = "https://www.pinterest.com/shopthestyleeditsss/";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = configuredUrl ? configuredUrl.replace(/\/$/, "") : undefined;
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export function assetPath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteUrl(path: string): string | undefined {
  return siteUrl ? `${siteUrl}${path.startsWith("/") ? path : `/${path}`}` : undefined;
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
