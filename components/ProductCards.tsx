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
    <div className="product-grid product-grid-visual">
      {visibleProducts.map((product) => (
        <article className="product-card product-card-commerce" key={product.id}>
          <a className="product-image product-image-link" href={product.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" aria-label={`View ${product.name} at ${product.merchant}`}>
            <Image src={assetPath(product.image)} alt={product.imageAlt} fill sizes="(max-width: 640px) 85vw, 25vw" />
            <span className="product-card-label">FEATURED PICK</span><span className="image-link-mark" aria-hidden="true">↗</span>
          </a>
          <div className="product-card-body">
            <span className="eyebrow">{product.merchant} / {product.category}</span>
            <h3>{product.name}</h3><p>{product.description}</p>
            {product.price && <p className="product-price">{product.price} <small>checked {product.verifiedAt}</small></p>}
            <p className="affiliate-note">We may earn a commission from qualifying purchases.</p>
            <a className="product-action" href={product.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">Shop this pick <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      ))}
      {visibleNotes.map((note, index) => (
        <article className="product-card product-card-commerce" key={note.id}>
          <Link className="product-image product-image-link" href={`/articles/${note.articleSlug}/`} aria-label={`See the ${note.name} styling guide`}>
            <Image src={assetPath(note.image)} alt={note.imageAlt} fill sizes="(max-width: 640px) 85vw, 25vw" />
            <span className="product-card-label">STYLE NOTE / {String(index + 1).padStart(2, "0")}</span><span className="image-link-mark" aria-hidden="true">↗</span>
          </Link>
          <div className="product-card-body">
            <span className="eyebrow">{note.category.toUpperCase()} / THE EDIT</span>
            <h3>{note.name}</h3><p>{note.description}</p>
            <Link className="product-action" href={`/articles/${note.articleSlug}/`}>Explore the guide <span aria-hidden="true">↗</span></Link>
          </div>
        </article>
      ))}
    </div>
  );
}
