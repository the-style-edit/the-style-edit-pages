import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { assetPath } from "@/lib/site";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={`article-card ${featured ? "article-card-featured" : ""}`}>
      <Link className="article-card-image" href={`/articles/${article.slug}/`} aria-label={`Read ${article.title}`}>
        <Image src={assetPath(article.image)} alt={article.imageAlt} fill sizes={featured ? "(max-width: 800px) 100vw, 52vw" : "(max-width: 800px) 100vw, 33vw"} className="cover-image" />
        <span className="image-credit-small">Style inspiration • items may differ</span>
      </Link>
      <div className="article-card-copy">
        <span className="eyebrow">THE JOURNAL <span className="dot-separator">•</span> {article.readingTime}</span>
        <h3><Link href={`/articles/${article.slug}/`}>{article.title}</Link></h3>
        <p>{article.description}</p>
        <Link className="text-link" href={`/articles/${article.slug}/`}>Read the story <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
