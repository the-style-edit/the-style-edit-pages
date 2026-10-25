import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { ProductCards } from "@/components/ProductCards";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/products";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Discover the Edit",
  description: "Browse outfit ideas, considered wardrobe picks, and easy styling guides from The Style Edit.",
};

export default function DiscoverPage() {
  const featured = articles[0];
  return (
    <>
      <section className="discover-heading shell">
        <span className="eyebrow">FIND YOUR NEXT FAVORITE</span>
        <h1>Discover <em>the edit.</em></h1>
        <p>Outfit ideas, thoughtful picks, and simple guides for getting dressed.</p>
        <nav className="discover-filters" aria-label="Browse by category">
          <Link className="filter-chip is-active" href="/discover/">Everything</Link>
          {categories.map((category) => <Link className="filter-chip" key={category.slug} href={`/shop/${category.slug}/`}>{category.name}</Link>)}
        </nav>
      </section>

      <section className="discover-feature shell" aria-label="Featured story">
        <Link className="discover-feature-image" href={`/articles/${featured.slug}/`}>
          <Image src={assetPath("/images/home-hero-city.png")} alt="Illustrative winter outfit with a camel coat and cream knit" fill sizes="(max-width: 760px) 100vw, 55vw" />
          <span className="image-credit-small">Style inspiration · Items may differ</span>
          <span className="image-link-mark" aria-hidden="true">↗</span>
        </Link>
        <div className="discover-feature-copy">
          <span className="eyebrow">FEATURED STORY / WINTER STYLE</span>
          <h2>Five winter looks.<br /><em>One useful edit.</em></h2>
          <p>Quick outfit formulas made to start with the pieces already in your closet.</p>
          <Link className="text-link" href={`/articles/${featured.slug}/`}>See the looks <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <div className="shell discover-ad-wrap"><AdSlot /></div>

      <section className="section-spacing shell discover-recommendations" aria-labelledby="recommendations-title">
        <div className="section-heading"><div><span className="eyebrow">THE STYLE EDIT PICKS</span><h2 id="recommendations-title">Pieces worth <em>discovering.</em></h2><p className="section-deck">Visual shopping notes to help you choose well. Specific product links appear after the item and destination are verified.</p></div><Link className="text-link" href="/shop/">All categories <span aria-hidden="true">↗</span></Link></div>
        <ProductCards />
      </section>

      <section className="discover-ad-wrap shell"><AdSlot label="Future banner placement" /></section>

      <section className="journal-section discover-journal" aria-labelledby="discover-journal-title"><div className="shell"><div className="section-heading"><div><span className="eyebrow">QUICK READS, USEFUL IDEAS</span><h2 id="discover-journal-title">Read, then <em>get dressed.</em></h2></div><Link className="text-link" href="/articles/">All stories <span aria-hidden="true">↗</span></Link></div><div className="article-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></div></section>
    </>
  );
}
