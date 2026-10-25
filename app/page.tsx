import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { ProductCards } from "@/components/ProductCards";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/products";
import { assetPath } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image src={assetPath("/images/editorial-cover.png")} alt="Illustrative editorial portrait in a camel coat and cream knit" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">THE STYLE EDIT <span>—</span> WINTER EDITION</p>
            <h1>Style is in<br /><em>the details.</em></h1>
            <p className="hero-deck">Considered outfit ideas and smarter shopping notes for a wardrobe that feels entirely yours.</p>
            <div className="button-row"><Link className="button button-dark" href="/shop/">Explore the edit <span aria-hidden="true">↗</span></Link><Link className="hero-secondary" href="/articles/">Read the journal <span aria-hidden="true">→</span></Link></div>
          </div>
          <span className="hero-image-label">AI-GENERATED STYLE INSPIRATION · ITEMS MAY DIFFER</span>
        </div>
      </section>

      <section className="intro-band shell">
        <span className="section-number">01 / THE POINT OF VIEW</span>
        <p>Look expensive. <em>Spend less.</em> Dress like yourself.</p>
        <span className="intro-aside">More outfits from what you own.<br />Better choices when you buy.</span>
      </section>

      <section className="section-spacing shell" aria-labelledby="categories-title">
        <div className="section-heading"><div><span className="eyebrow">THE WARDROBE INDEX</span><h2 id="categories-title">Browse by <em>category.</em></h2></div><Link className="text-link" href="/shop/">View the full edit <span aria-hidden="true">↗</span></Link></div>
        <div className="category-grid">
          {categories.map((category) => <Link className={`category-card category-${category.tone}`} key={category.slug} href={`/shop/${category.slug}/`}><span>{category.index} / {category.countLabel}</span><strong>{category.name}</strong><span className="category-arrow" aria-hidden="true">↗</span></Link>)}
        </div>
      </section>

      <section className="feature-section" aria-labelledby="feature-title">
        <div className="shell feature-grid">
          <div className="feature-image-wrap"><Image src={assetPath("/images/winter-flatlay.png")} alt="Illustrative winter wardrobe flat lay with coat, sweater, denim, scarf, and boots" fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image" /><span className="feature-image-note">STYLE INSPIRATION · ITEMS MAY DIFFER</span></div>
          <div className="feature-copy"><span className="eyebrow">THE JOURNAL / THE WINTER ISSUE</span><span className="feature-index">01 — 05</span><h2 id="feature-title">Five ways to<br /><em>get dressed</em><br />this winter.</h2><p>A useful outfit formula beats a long wish list. Start with pieces you already own, then make every new addition count.</p><Link className="button button-dark" href="/articles/5-winter-styles-2026/">Read the story <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="section-spacing shell" aria-labelledby="notes-title"><div className="section-heading"><div><span className="eyebrow">THE CONSIDERED EDIT</span><h2 id="notes-title">Pieces with <em>purpose.</em></h2><p className="section-deck">Shopping notes to help you choose well. Specific merchant picks will appear only after we verify them.</p></div><Link className="text-link" href="/shop/">Browse all notes <span aria-hidden="true">↗</span></Link></div><ProductCards limit={4} /></section>

      <section className="journal-section" aria-labelledby="journal-title"><div className="shell"><div className="section-heading"><div><span className="eyebrow">STORIES TO KEEP</span><h2 id="journal-title">From the <em>journal.</em></h2></div><Link className="text-link" href="/articles/">All articles <span aria-hidden="true">↗</span></Link></div><div className="article-grid">{articles.slice(1).map((article) => <ArticleCard key={article.slug} article={article} />)}</div></div></section>

      <section className="closing-callout shell"><span className="eyebrow">A BETTER WARDROBE BEGINS HERE</span><h2>Buy less at random.<br /><em>Wear more on purpose.</em></h2><p>Good style is a set of small decisions. We&apos;re here to make those decisions easier.</p><Link className="button button-outline" href="/about/">Our point of view <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
