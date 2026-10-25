import Link from "next/link";
import Image from "next/image";
import { approvedProducts, notesForCategory, type CategorySlug } from "@/lib/products";
import { assetPath } from "@/lib/site";

export function ProductCards({ category, limit }: { category?: CategorySlug; limit?: number }) {
  const products = approvedProducts(category);
  const notes = notesForCategory(category);
  const visibleProducts = limit ? products.slice(0, limit) : products;
  const visibleNotes = limit ? notes.slice(0, limit) : notes;

  return (
    <div className="product-grid">
      {visibleProducts.map((product) => (
        <article className="product-card" key={product.id}>
          <div className="product-image"><Image src={assetPath(product.image)} alt={product.imageAlt} fill sizes="(max-width: 640px) 100vw, 25vw" /></div>
          <div className="product-card-body">
            <span className="eyebrow">{product.merchant}</span>
            <h3>{product.name}</h3><p>{product.description}</p>
            {product.price && <p className="product-price">{product.price} <small>checked {product.verifiedAt}</small></p>}
            <p className="affiliate-note">We may earn a commission from qualifying purchases.</p>
            <a className="text-link" href={product.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">View at {product.merchant} <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      ))}
      {visibleNotes.map((note) => (
        <article className="product-card" key={note.id}>
          <div className={`product-art tone-${note.tone}`} aria-hidden="true"><span className="product-art-label">THE STYLE EDIT</span><span className="product-art-mark">{note.name.split(" ").at(-1)}</span></div>
          <div className="product-card-body">
            <span className="eyebrow">SHOPPING NOTE / {note.category.toUpperCase()}</span>
            <h3>{note.name}</h3><p>{note.description}</p>
            <p className="look-for"><strong>What to look for:</strong> {note.lookFor}</p>
            <Link className="text-link" href={`/articles/${note.articleSlug}/`}>Read the styling guide <span aria-hidden="true">↗</span></Link>
          </div>
        </article>
      ))}
    </div>
  );
}
