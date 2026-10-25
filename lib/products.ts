export const categories = [
  { slug: "outerwear", name: "Outerwear", countLabel: "Layer with intention", tone: "sand", index: "01" },
  { slug: "knitwear", name: "Knitwear", countLabel: "Texture that lasts", tone: "ivory", index: "02" },
  { slug: "dresses", name: "Dresses", countLabel: "One piece, many plans", tone: "rose", index: "03" },
  { slug: "shoes", name: "Shoes", countLabel: "The finishing step", tone: "brown", index: "04" },
  { slug: "accessories", name: "Accessories", countLabel: "Small details, big impact", tone: "burgundy", index: "05" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type AffiliateProduct = {
  id: string;
  approved: boolean;
  shoppingNoteId?: string;
  name: string;
  category: CategorySlug;
  merchant: string;
  destinationUrl: string;
  affiliateUrl: string;
  image: string;
  imageAlt: string;
  imageRights: string;
  description: string;
  region: "US";
  verifiedAt: string;
  price?: string;
};

// Add products only after program approval and checking the exact product page,
// price (if displayed), US availability, and image usage rights.
export const affiliateProducts: AffiliateProduct[] = [];

export type ShoppingNote = {
  id: string;
  name: string;
  category: CategorySlug;
  description: string;
  lookFor: string;
  tone: string;
  articleSlug: string;
};

export const shoppingNotes: ShoppingNote[] = [
  { id: "coat", name: "The tailored coat", category: "outerwear", description: "The layer that makes everyday outfits feel considered.", lookFor: "A shoulder that sits cleanly, room for a sweater, and a length that works with your most-worn bottoms.", tone: "sand", articleSlug: "what-to-check-before-buying-a-winter-coat" },
  { id: "knit", name: "The textured knit", category: "knitwear", description: "An easy anchor for trousers, denim, and skirts.", lookFor: "A neckline you enjoy wearing, comfortable fabric against skin, and a shape that layers under your coat.", tone: "ivory", articleSlug: "5-winter-styles-2026" },
  { id: "dress", name: "The simple dress", category: "dresses", description: "A quiet starting point for a week's worth of looks.", lookFor: "A length and fabric you can actually move in, plus a silhouette that works with shoes you own.", tone: "rose", articleSlug: "5-winter-styles-2026" },
  { id: "boots", name: "The everyday boot", category: "shoes", description: "Ground a soft outfit with a practical finish.", lookFor: "Walkable heel height, weather-appropriate sole, and enough room for winter socks.", tone: "brown", articleSlug: "5-winter-styles-2026" },
  { id: "scarf", name: "The accent scarf", category: "accessories", description: "One small color note can make familiar pieces feel new.", lookFor: "A color that works with your coats and a fabric you will want close to your face.", tone: "burgundy", articleSlug: "a-12-piece-winter-wardrobe" },
];

export function approvedProducts(category?: CategorySlug): AffiliateProduct[] {
  return affiliateProducts.filter((product) => product.approved && (!category || product.category === category));
}

export function notesForCategory(category?: CategorySlug): ShoppingNote[] {
  return shoppingNotes.filter((note) => !category || note.category === category);
}
