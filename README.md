# The Style Edit website

Public Next.js source for [The Style Edit](https://the-style-edit.github.io/the-style-edit-pages/), a fashion editorial site with outfit articles and category-based shopping guidance.

## Run locally

```bash
npm ci
npm run dev
```

The GitHub Actions workflow builds the static export and deploys it to GitHub Pages on pushes to `main`. The Pages build sets the site URL and base path so links and images work under `/the-style-edit-pages/`.

## Content

- `lib/articles.ts` contains article content and permanent slugs.
- `lib/products.ts` contains categories, shopping notes, and the approved affiliate product list.
- Merchant links appear only when their `approved` field is true; verify destination, region, image rights, and product details before adding one.
- AI-generated editorial imagery is labeled as inspiration, not a photograph of a purchasable item.

This site currently has no checkout, analytics, AdSense code, or live affiliate product links.
