import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCards } from "@/components/ProductCards";
import { categories, type CategorySlug } from "@/lib/products";

export function generateStaticParams() { return categories.map((category) => ({ category: category.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const item = categories.find((entry) => entry.slug === category);
  return item ? { title: `${item.name} Edit`, description: `Explore The Style Edit's ${item.name.toLowerCase()} shopping notes and outfit advice.` } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = categories.find((entry) => entry.slug === category);
  if (!item) notFound();
  return <><div className={`page-hero page-hero-${item.tone}`}><div className="shell"><span className="eyebrow">THE EDIT / {item.index}</span><h1>{item.name}<em>.</em></h1><p>{item.countLabel}. Practical notes for pieces that work harder in your wardrobe.</p></div></div><div className="shell page-content"><nav className="pill-nav" aria-label="Shop categories"><Link href="/shop/">All notes</Link>{categories.map((entry) => <Link className={entry.slug === category ? "active" : ""} key={entry.slug} href={`/shop/${entry.slug}/`}>{entry.name}</Link>)}</nav><ProductCards category={category as CategorySlug} /><div className="editorial-note"><span className="eyebrow">THE STYLE EDIT</span><p>These are shopping notes, not claims that the illustrated items are available for purchase. We add merchant links only after verifying each product and the relevant affiliate terms.</p></div></div></>;
}
