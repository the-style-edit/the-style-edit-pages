import type { Metadata } from "next";
import Link from "next/link";
import { ProductCards } from "@/components/ProductCards";
import { categories } from "@/lib/products";

export const metadata: Metadata = { title: "The Edit", description: "Explore considered fashion shopping notes by category, with practical advice for choosing pieces you will actually wear." };

export default function ShopPage() {
  return <>
    <div className="page-hero page-hero-shop"><div className="shell"><span className="eyebrow">THE WARDROBE INDEX</span><h1>Shop with <em>intention.</em></h1><p>Start with the clothes you already own. Use these notes to choose the pieces that genuinely fill a gap.</p></div></div>
    <div className="shell page-content"><div className="shop-intro"><div><span className="eyebrow">THE EDIT / ALL CATEGORIES</span><h2>Considered pieces, <em>not endless choice.</em></h2></div><p>Our current edit offers product selection guidance. Merchant recommendations will be added as products and affiliate terms are verified.</p></div><nav className="pill-nav" aria-label="Shop categories"><Link className="active" href="/shop/">All notes</Link>{categories.map((category) => <Link key={category.slug} href={`/shop/${category.slug}/`}>{category.name}</Link>)}</nav><ProductCards /><div className="editorial-note"><span className="eyebrow">OUR SHOPPING STANDARD</span><p>We check the item, destination, region, and image rights before adding a merchant link. Prices and stock can change, so we only display them when recently verified.</p></div></div>
  </>;
}
