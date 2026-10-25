import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  const noteIds = [...new Set(article.sections.flatMap((section) => section.shoppingNoteIds ?? []))];
  const notes = noteIds.map((id) => shoppingNotes.find((note) => note.id === id)).filter((note) => note !== undefined);
  const linkedProducts = approvedProducts().filter((product) => product.shoppingNoteId && noteIds.includes(product.shoppingNoteId));
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
      <header className="article-header shell-narrow"><Link className="back-link" href="/articles/">← Back to the journal</Link><div className="article-header-meta"><span className="eyebrow">THE JOURNAL / {article.category.toUpperCase()}</span><span>{article.readingTime}</span></div><h1>{article.title}</h1><p className="article-lead">{article.description}</p><div className="byline"><span>By The Style Edit</span><span className="byline-rule" /><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>{article.updatedAt !== article.publishedAt && <span>Updated {formatDate(article.updatedAt)}</span>}</div></header>
      <div className="article-image shell"><div className="article-image-inner"><Image src={assetPath(article.image)} alt={article.imageAlt} fill priority sizes="(max-width: 1100px) 100vw, 1100px" className="cover-image" /></div><p>{article.imageCredit}</p></div>
      <div className="shell-narrow article-body"><div className="affiliate-disclosure"><strong>Our disclosure</strong><span>Some links may earn The Style Edit a commission at no extra cost to you. We only add merchant links after checking the product and destination. <Link href="/affiliate-disclosure/">How our links work ↗</Link></span></div>{article.intro.map((paragraph) => <p className="intro-paragraph" key={paragraph}>{paragraph}</p>)}
        <div className="article-toc"><span className="eyebrow">IN THIS STORY</span><ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol></div>
        {article.sections.map((section, index) => <section className="article-section" id={`section-${index + 1}`} key={section.heading}><span className="eyebrow">{section.eyebrow ?? `SECTION ${String(index + 1).padStart(2, "0")}`}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.takeaways && <div className="takeaway"><strong>Make it work</strong><ul>{section.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></div>}</section>)}
        <div className="article-closing"><span className="eyebrow">THE TAKEAWAY</span><p>{article.closing}</p></div>
      </div>
      {notes.length > 0 && <section className="article-shop"><div className="shell"><div className="section-heading"><div><span className="eyebrow">THE PIECES / THE PRINCIPLES</span><h2>What to <em>look for.</em></h2></div><p>Use these notes with what you own, or as a checklist when you shop.</p></div><div className="article-shop-grid">{notes.map((note) => <div className="article-shop-note" key={note.id}><span className="eyebrow">{note.category.toUpperCase()}</span><h3>{note.name}</h3><p>{note.lookFor}</p></div>)}</div>{linkedProducts.length > 0 && <div className="verified-links"><h3>Verified product links</h3><p>We may earn a commission from qualifying purchases.</p>{linkedProducts.map((product) => <a key={product.id} href={product.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">{product.name} at {product.merchant} ↗</a>)}</div>}</div></section>}
      <aside className="shell related-stories"><div className="section-heading"><div><span className="eyebrow">KEEP READING</span><h2>More from the <em>journal.</em></h2></div><Link className="text-link" href="/articles/">All stories <span aria-hidden="true">↗</span></Link></div><div className="article-grid">{related.map((item) => <ArticleCard article={item} key={item.slug} />)}</div></aside>
    </article>
  </>;
}
