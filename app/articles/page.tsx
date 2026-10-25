import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = { title: "The Journal", description: "Outfit formulas, capsule wardrobe ideas, and practical shopping guidance from The Style Edit." };

export default function ArticlesPage() {
  return <><div className="page-hero page-hero-journal"><div className="shell"><span className="eyebrow">THE STYLE EDIT / THE JOURNAL</span><h1>Notes on <em>getting dressed.</em></h1><p>Useful ideas for a wardrobe that feels polished, personal, and easy to live in.</p></div></div><div className="shell page-content"><div className="journal-index-heading"><span className="eyebrow">LATEST STORIES</span><span>{String(articles.length).padStart(2, "0")} ARTICLES</span></div><div className="article-grid article-index-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} featured={article === articles[0]} />)}</div></div></>;
}
