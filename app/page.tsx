import Image from "next/image";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { HomeHeroCarousel } from "@/components/HomeHeroCarousel";
import { ProductCards } from "@/components/ProductCards";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/products";
import { assetPath } from "@/lib/site";

const categoryImages: Record<string, { src: string; alt: string }> = {
  outerwear: { src: "/images/home-hero-city.png", alt: "Illustrative camel coat winter outfit" },
  knitwear: { src: "/images/editorial-cover.png", alt: "Illustrative neutral knitwear look" },
  dresses: { src: "/images/winter-flatlay.png", alt: "Illustrative winter wardrobe layers" },
  shoes: { src: "/images/winter-flatlay.png", alt: "Illustrative boots and winter outfit pieces" },
  accessories: { src: "/images/editorial-cover.png", alt: "Illustrative neutral wardrobe accessories" },
};

export default function Home() {
  return (
    <>
      <HomeHeroCarousel />

      <section className="home-promise shell">
        <span className="eyebrow">THE STYLE EDIT POINT OF VIEW</span>
        <p>Look expensive. <em>Spend less.</em> Dress like yourself.</p>
        <Link className="text-link" href="/discover/">Start discovering <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="category-section shell" aria-labelledby="categories-title">
        <div className="section-heading"><div><span className="eyebrow">BROWSE THE WARDROBE</span><h2 id="categories-title">Find your <em>kind of piece.</em></h2></div><Link className="text-link" href="/discover/">Discover everything <span aria-hidden="true">↗</span></Link></div>
        <div className="category-grid category-grid-visual">
          {categories.map((category) => {
            const visual = categoryImages[category.slug];
            return <Link className="category-card category-card-visual" key={category.slug} href={`/shop/${category.slug}/`}>
              <Image src={assetPath(visual.src)} alt={visual.alt} fill sizes="(max-width: 760px) 44vw, 20vw" />
              <span className="category-card-shade" />
              <span className="category-card-index">{category.index} / STYLE INSPIRATION</span>
              <strong>{category.name}</strong>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </Link>;
          })}
        </div>
        <p className="visual-note">Illustrative fashion imagery · pictured items may differ</p>
      </section>

      <div className="shell home-ad-wrap"><AdSlot /></div>

      <section className="section-spacing shell" aria-labelledby="featured-title">
        <div className="section-heading"><div><span className="eyebrow">THE STYLE EDIT PICKS</span><h2 id="featured-title">Featured <em>recommendations.</em></h2><p className="section-deck">A visual edit of pieces to look for. Verified merchant links will appear when they are ready.</p></div><Link className="text-link" href="/discover/">Shop the edit <span aria-hidden="true">↗</span></Link></div>
        <ProductCards limit={4} />
      </section>

      <section className="home-story-band">
        <div className="shell home-story-grid">
          <Link className="home-story-image" href={`/articles/${articles[0].slug}/`}>
            <Image src={assetPath("/images/winter-flatlay.png")} alt="Illustrative winter outfit pieces arranged as a wardrobe flat lay" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <span className="image-credit-small">Style inspiration · Items may differ</span>
            <span className="image-link-mark" aria-hidden="true">↗</span>
          </Link>
          <div className="home-story-copy"><span className="eyebrow">THE JOURNAL / THE WINTER EDIT</span><h2>Five looks.<br /><em>Less to think about.</em></h2><p>Easy combinations for work, weekends, and everything in between.</p><Link className="button button-dark" href={`/articles/${articles[0].slug}/`}>View the story <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="home-ad-wrap shell"><AdSlot label="Future banner placement" /></section>

      <section className="journal-section home-journal" aria-labelledby="journal-title"><div className="shell"><div className="section-heading"><div><span className="eyebrow">SHORT STORIES, GOOD IDEAS</span><h2 id="journal-title">The latest <em>looks.</em></h2></div><Link className="text-link" href="/articles/">All articles <span aria-hidden="true">↗</span></Link></div><div className="article-grid">{articles.slice(1).map((article) => <ArticleCard key={article.slug} article={article} />)}</div></div></section>

      <section className="home-bottom-cta shell"><span className="eyebrow">A MORE THOUGHTFUL WARDROBE</span><h2>Find pieces that<br /><em>work harder.</em></h2><Link className="button button-outline" href="/discover/">Explore Discover <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
