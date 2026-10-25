import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/products";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  const paths = ["/", "/discover/", "/shop/", "/articles/", "/about/", "/contact/", "/affiliate-disclosure/", "/privacy/", "/terms/", ...categories.map((item) => `/shop/${item.slug}/`), ...articles.map((article) => `/articles/${article.slug}/`)];
  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date("2026-10-25"), changeFrequency: path === "/" ? "weekly" : "monthly" }));
}
