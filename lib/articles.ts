import type { CategorySlug } from "./products";

export type ArticleSection = {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  takeaways?: string[];
  shoppingNoteIds?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  intro: string[];
  sections: ArticleSection[];
  closing: string;
  pinUrl?: string;
};

export const articles: Article[] = [
  {
    slug: "5-winter-styles-2026",
    title: "5 winter outfits to build from pieces you already own",
    description: "Five wearable winter outfit formulas for 2026, from polished work layers to an easy weekend uniform, with practical notes on fit and warmth.",
    category: "outerwear",
    readingTime: "6 min read",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    image: "/images/winter-flatlay.png",
    imageAlt: "Illustrative flat lay of a camel coat, cream sweater, dark jeans, scarf, jewelry, and brown boots",
    imageCredit: "AI-generated style inspiration; pictured pieces are not specific products for sale.",
    intro: [
      "A polished winter wardrobe is usually more about combinations than new purchases. Start with the coat, knit, trousers, and shoes you already reach for, then change one proportion or texture at a time.",
      "These five formulas work as a starting point for mild to cold days. Adjust the base layer and outerwear for your climate, commute, and comfort. If you buy anything, choose the gap that makes several existing outfits easier to wear.",
    ],
    sections: [
      {
        eyebrow: "Look 01 / The weekday layer",
        heading: "A tailored coat over a soft knit",
        paragraphs: [
          "Pair a longer coat with a knit and straight trousers. The clean outer line does most of the visual work, so the layers underneath can stay simple. Let a little of the knit show at the neckline and cuffs for texture.",
          "For an office commute, keep the base layer breathable and choose shoes you can comfortably walk in. A scarf adds warmth without making the silhouette bulky.",
        ],
        takeaways: ["Try a coat that closes over your thickest regular sweater.", "Keep the trousers long enough to meet your shoes cleanly."],
        shoppingNoteIds: ["coat", "knit"],
      },
      {
        eyebrow: "Look 02 / The weekend uniform",
        heading: "Dark denim, cream knit, grounded boots",
        paragraphs: [
          "Dark, straight-leg denim feels sharper with a cream or oatmeal knit because the contrast is clear but gentle. Add a belt if you like definition at the waist; leave it out if the knit's shape already works.",
          "A boot with a stable sole makes this a useful formula for errands and casual lunches. Tuck only the front of the sweater if a full tuck feels too structured.",
        ],
        takeaways: ["Repeat your best-fitting jeans before buying a new pair.", "Choose boot height with your actual jean hem in mind."],
        shoppingNoteIds: ["knit", "boots"],
      },
      {
        eyebrow: "Look 03 / The tonal outfit",
        heading: "One color family, three textures",
        paragraphs: [
          "Build with close shades—cream, oatmeal, camel, or chocolate—and let texture create interest. A ribbed knit, smooth trouser, and structured coat read as intentional even when none of them match exactly.",
          "If a head-to-toe light palette is impractical for your day, use darker bottoms and keep the tonal story in the top two layers. An accent scarf can connect the shades.",
        ],
        takeaways: ["Match the warmth of the colors rather than chasing identical shades.", "Use one structured piece to balance softer layers."],
        shoppingNoteIds: ["coat", "scarf"],
      },
      {
        eyebrow: "Look 04 / The dressed-up layer",
        heading: "A simple dress with winter weight",
        paragraphs: [
          "A dress can stay in rotation through winter with a fine knit underneath or a cardigan over it, depending on the neckline. Add tights and boots for coverage, then finish with the coat you already use on weekdays.",
          "Focus on movement: sit, walk, and raise your arms before deciding a layered combination works. A beautiful outfit that needs constant adjusting rarely becomes a favorite.",
        ],
        takeaways: ["Test layers together for comfort before buying another dress.", "Balance a fluid dress with a more substantial shoe."],
        shoppingNoteIds: ["dress", "boots"],
      },
      {
        eyebrow: "Look 05 / The travel day",
        heading: "Comfortable basics, finished deliberately",
        paragraphs: [
          "For a travel day, use a soft knit, comfortable trousers or denim, walkable shoes, and a coat that is easy to remove. Keep the palette tight so the outfit still looks composed after several hours on the move.",
          "A small accessory can be the difference between dressed and thrown together. Choose one: scarf, simple earrings, or a tidy bag. Leave anything fussy at home.",
        ],
        takeaways: ["Choose layers that adapt to indoor heat.", "Keep the most comfortable shoe that still works with the outfit."],
        shoppingNoteIds: ["knit", "scarf"],
      },
    ],
    closing: "Pick one formula that fits your actual week, try it with what you own, and write down the missing piece only after wearing it. That is usually a better shopping list than a whole new wardrobe.",
  },
  {
    slug: "a-12-piece-winter-wardrobe",
    title: "A 12-piece winter wardrobe framework",
    description: "A flexible capsule outline that starts with your own closet and creates more outfits without requiring twelve new purchases.",
    category: "knitwear",
    readingTime: "4 min read",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    image: "/images/editorial-cover.png",
    imageAlt: "Illustrative editorial portrait in a camel coat and neutral knit",
    imageCredit: "AI-generated style inspiration; pictured pieces are not specific products for sale.",
    intro: [
      "A capsule wardrobe is useful only if it reflects your days. Twelve is a planning tool, not a rule or a shopping target. Pull out the pieces you already wear, then use this framework to see which roles are covered.",
    ],
    sections: [
      { eyebrow: "Start here", heading: "Choose your real week", paragraphs: ["Count how many days you dress for work, home, social plans, and travel. A wardrobe built for someone else's calendar is unlikely to help you. Choose two base colors you already wear often and one optional accent."], takeaways: ["Write down your most repeated outfit before planning anything new.", "Keep climate and laundry frequency in view."] },
      { eyebrow: "The 12 roles", heading: "Build a set that mixes", paragraphs: ["A useful starting mix is two outer layers, three tops or knits, three bottoms, one dress or extra top, two pairs of shoes, and one accessory. Swap the dress for another bottom if that fits your life better. The goal is coverage across your week, not a perfect number."], takeaways: ["Choose silhouettes that work in at least three combinations.", "Keep your favorite existing piece even if it breaks a capsule 'rule'."], shoppingNoteIds: ["coat", "knit", "boots", "scarf"] },
      { eyebrow: "Before checkout", heading: "Test the combinations", paragraphs: ["Lay out five complete outfits, including shoes and outerwear. Photograph the ones you like. If one piece appears in only one look, ask whether it is genuinely useful or just attractive on its own. If a gap remains, specify the fit, fabric, and budget before searching."], takeaways: ["Shop for a role, not a vague trend.", "Check care and return terms as carefully as color."] },
    ],
    closing: "A capsule should make getting dressed easier. Keep the version that serves your life, even if it has eleven pieces or twenty.",
  },
  {
    slug: "what-to-check-before-buying-a-winter-coat",
    title: "What to check before buying a winter coat",
    description: "A practical checklist for coat fit, warmth, fabric, care, and return terms before you spend.",
    category: "outerwear",
    readingTime: "5 min read",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    image: "/images/winter-flatlay.png",
    imageAlt: "Illustrative flat lay featuring a camel coat and winter layers",
    imageCredit: "AI-generated style inspiration; pictured pieces are not specific products for sale.",
    intro: ["A coat is often one of the most visible pieces in a winter outfit. Before choosing by color alone, test whether it works with the layers, weather, and routines you actually have."],
    sections: [
      { eyebrow: "01 / Fit", heading: "Try it over your real layers", paragraphs: ["The shoulders should sit comfortably and the coat should close without pulling over your usual winter knit. Reach forward and sit down. A coat that looks elegant while standing still but restricts movement will be difficult to wear often."], takeaways: ["Check sleeve length with your arms moving.", "Compare the hem with your regular skirts or trousers."], shoppingNoteIds: ["coat"] },
      { eyebrow: "02 / Climate", heading: "Match the coat to your winter", paragraphs: ["A dress coat, a rain shell, and an insulated coat solve different problems. Consider wind, rain, snow, and time outdoors. A beautiful wool-look coat may not replace weatherproof outerwear if your commute is wet or very cold."], takeaways: ["Read the fabric composition and lining details.", "Think about how much time you spend outside, not just your destination."] },
      { eyebrow: "03 / Ownership", heading: "Check the details that last", paragraphs: ["Look closely at seams, buttons, pocket placement, and care instructions. Compare the return window with the time you need to try it at home. If shopping online, use the garment measurements rather than relying only on a size label."], takeaways: ["Confirm care requirements fit your budget and routine.", "Save the product page and return policy before ordering."] },
    ],
    closing: "The best coat is the one that handles your actual winter and works with the clothes already in your closet.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
