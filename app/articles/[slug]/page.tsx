import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, getArticle } from "@/lib/articles";
import { approvedProducts, shoppingNotes } from "@/lib/products";
import { absoluteUrl, assetPath, formatDate, siteUrl } from "@/lib/site";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = absoluteUrl(`/articles/${article.slug}/`);
  return {
    title: article.title,
    description: article.description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: { type: "article", title: article.title, description: article.description, publishedTime: article.publishedAt, modifiedTime: article.updatedAt, ...(siteUrl ? { images: [{ url: absoluteUrl(article.image)!, alt: article.imageAlt }] } : {}) },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== slug).slice(0, 2);
  const structuredData = siteUrl ? {
    "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description,
    image: [absoluteUrl(article.image)], datePublished: article.publishedAt, dateModified: article.updatedAt,
    author: { "@type": "Organization", name: "The Style Edit" },
    publisher: { "@type": "Organization", name: "The Style Edit", logo: { "@type": "ImageObject", url: absoluteUrl("/images/tse-mark.svg") } },
    mainEntityOfPage: absoluteUrl(`/articles/${article.slug}/`),
  } : undefined;

  return <>
    {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />}
    <article className="article-page">
      <header className="article-header article-header-compact shell-narrow">
        <Link className="back-link" href="/articles/">← Back to the journal</Link>
        <div className="article-header-meta"><span className="eyebrow">THE JOURNAL / {article.category.toUpperCase()}</span><span>{article.readingTime}</span></div>
        <h1>{article.title}</h1>
        <p className="article-lead">{article.description}</p>
        <div className="byline"><span>By The Style Edit</span><span className="byline-rule" /><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>{article.updatedAt !== article.publishedAt && <span>Updated {formatDate(article.updatedAt)}</span>}</div>
      </header>

      <div className="article-disclosure shell-narrow"><strong>Our shopping note</strong><span>We add specific product links only after checking the item and destination. If a link earns us a commission, we label it.</span></div>
      <div className="article-intro shell-narrow"><p>{article.intro[0]}</p></div>

      <div className="article-looks shell">
        {article.sections.map((section, index) => {
          const note = section.shoppingNoteIds?.map((id) => shoppingNotes.find((item) => item.id === id)).find((item) => item !== undefined);
          const linkedProduct = note ? approvedProducts().find((item) => item.shoppingNoteId === note.id) : undefined;
          const destination = linkedProduct?.affiliateUrl ?? (note ? `/shop/${note.category}/` : "/discover/");
          const image = section.image ?? article.image;
          const imageAlt = section.imageAlt ?? article.imageAlt;
          return <Fragment key={section.heading}>
            <section className={`article-section article-look${index % 2 === 1 ? " article-look-reverse" : ""}`} id={`section-${index + 1}`}>
              <div className="article-look-image">
                {linkedProduct
                  ? <a href={destination} target="_blank" rel="sponsored noopener noreferrer" aria-label={`View ${linkedProduct.name} at ${linkedProduct.merchant}`}><Image src={assetPath(image)} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 54vw" /><span className="look-image-cta">Shop the pick ↗</span></a>
                  : <Link href={destination} aria-label={`Explore ${note?.category ?? article.category} recommendations`}><Image src={assetPath(image)} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 54vw" /><span className="look-image-cta">Explore the edit ↗</span></Link>}
              </div>
              <div className="article-look-copy">
                <span className="look-number">LOOK {String(index + 1).padStart(2, "0")}</span>
                <span className="eyebrow">{section.eyebrow ?? article.category.toUpperCase()}</span>
                <h2>{section.heading}</h2>
                <p>{section.paragraphs[0]}</p>
                {section.takeaways?.[0] && <p className="look-tip"><span aria-hidden="true">✦</span>{section.takeaways[0]}</p>}
                {section.paragraphs[1] && <details className="look-more"><summary>More styling notes</summary><p>{section.paragraphs[1]}</p>{section.takeaways?.[1] && <p className="look-tip"><span aria-hidden="true">✦</span>{section.takeaways[1]}</p>}</details>}
                {linkedProduct
                  ? <a className="product-action" href={destination} target="_blank" rel="sponsored noopener noreferrer">View at {linkedProduct.merchant} <span aria-hidden="true">↗</span></a>
                  : <Link className="product-action" href={destination}>Explore {note?.category ?? article.category} <span aria-hidden="true">↗</span></Link>}
              </div>
            </section>
            {index === 1 && <div className="article-ad"><AdSlot label="Reserved article banner" /></div>}
          </Fragment>;
        })}
      </div>

      <div className="article-closing shell-narrow"><span className="eyebrow">THE TAKEAWAY</span><p>{article.closing}</p></div>

      <aside className="shell related-stories"><div className="section-heading"><div><span className="eyebrow">KEEP EXPLORING</span><h2>More from the <em>edit.</em></h2></div><Link className="text-link" href="/discover/">Discover more <span aria-hidden="true">↗</span></Link></div><div className="article-grid">{related.map((item) => <ArticleCard article={item} key={item.slug} />)}</div></aside>
    </article>
  </>;
}
