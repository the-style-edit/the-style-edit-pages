import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { absoluteUrl, siteName, siteTagline, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${siteName} | ${siteTagline}`, template: `%s | ${siteName}` },
  description: "Wearable outfit ideas, considered shopping notes, and wardrobe inspiration for looking polished on your own terms.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: { type: "website", siteName, ...(siteUrl ? { images: [{ url: absoluteUrl("/images/editorial-cover.png")!, width: 2056, height: 765, alt: "The Style Edit fashion editorial" }] } : {}) },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
